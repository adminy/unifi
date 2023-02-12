FROM arm64v8/debian:bullseye-slim
ARG DEBIAN_FRONTEND=noninteractive
COPY ./debs/unifi-core_3.0.51_arm64.deb ./debs/ulp-go_1.5.4+2181_arm64.deb /
COPY ubiquiti-archive-keyring.gpg /usr/share/keyrings/ubiquiti-archive-keyring.gpg
RUN echo "UCKP.apq8053.v3.0.13.5a79f15.221114.0051" > /usr/lib/version && \
    mkdir /debs && \
    ln -sf /usr/share/keyrings/ubiquiti-archive-keyring.gpg /etc/apt/trusted.gpg.d/ubiquiti-archive-keyring.gpg && \
    apt update && apt -y --no-install-recommends install curl gpg ca-certificates pcregrep iproute2 systemd ethtool && \
    echo 'deb https://apt.artifacts.ui.com bullseye main release beta' > /etc/apt/sources.list.d/ubiquiti.list && \
    echo 'deb https://apt.postgresql.org/pub/repos/apt bullseye-pgdg main' > /etc/apt/sources.list.d/postgresql.list && \
    echo 'deb https://apt-archive.postgresql.org/pub/repos/apt bullseye-pgdg-archive main' >> /etc/apt/sources.list.d/postgresql.list && \
    echo 'deb-src https://apt-archive.postgresql.org/pub/repos/apt bullseye-pgdg-archive main' >> /etc/apt/sources.list.d/postgresql.list && \
    curl https://www.postgresql.org/media/keys/ACCC4CF8.asc | gpg --dearmor | tee /etc/apt/trusted.gpg.d/apt.postgresql.org.gpg >/dev/null && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt install -yf --no-install-recommends nodejs procps /*.deb unifi-protect unifi-base-ucore && \
    sed -i 's/redirectHostname: unifi//' /usr/share/unifi-core/app/config/config.yaml && \
    sed -i "s|data_directory = '/var/lib/postgresql/14/main'|data_directory = '/data/postgresql/14/main/data'|g" /etc/postgresql/14/main/postgresql.conf && \
    rm -rf /lib/systemd/system/postgresql-cluster@9.6-protect.service.d \
           /lib/systemd/system/postgresql-cluster-14-main-upgrade.service \
           /lib/systemd/system/postgresql-cluster-14-protect-cleanup.service \
           /lib/systemd/system/postgresql-cluster-14-protect-migrate.service \
           /lib/systemd/system/postgresql-cluster-14-protect-upgrade.service \
           /lib/systemd/system/postgresql-cluster\@14-main.service.d \
           /lib/systemd/system/postgresql-cluster\@14-protect.service.d && \
    pg_dropcluster --stop 9.6 main && \
    rm -rf /var/lib/apt/lists/* /*.deb

# TYPE  DATABASE        USER            ADDRESS                 METHOD
RUN echo '#Allow Everything' > /etc/postgresql/14/main/pg_hba.conf && \
    echo 'local   all             postgres                                trust' >> /etc/postgresql/14/main/pg_hba.conf && \
    echo 'local   all             all                                     trust' >> /etc/postgresql/14/main/pg_hba.conf && \
    echo 'host    all             all             127.0.0.1/32            trust' >> /etc/postgresql/14/main/pg_hba.conf && \
    echo 'host    all             all             ::1/128                 trust' >> /etc/postgresql/14/main/pg_hba.conf && \
    echo 'local   replication     all                                     trust' >> /etc/postgresql/14/main/pg_hba.conf && \
    echo 'host    replication     all             127.0.0.1/32            trust' >> /etc/postgresql/14/main/pg_hba.conf && \
    echo 'host    replication     all             ::1/128                 trust' >> /etc/postgresql/14/main/pg_hba.conf

RUN echo "" > /etc/default/storage_disk && \
    for e in $(tr "\000" "\n" < /proc/1/environ); do eval "export $e"; done && \
    echo "STORAGE_DISK=${STORAGE_DISK:-/dev/sda1}" > /etc/default/storage_disk

COPY files/ubnt-tools files/ubnt-systool /sbin
COPY files/ustorage /usr/bin
COPY files/service.js /usr/share/unifi-core/app/
RUN echo '' > /sbin/ubnt-systool
VOLUME ["/srv", "/data", "/persistent"]

CMD ["/lib/systemd/systemd"]

# wget mount psmisc dpkg apt lsb-release sudo gnupg apt-transport-https ca-certificates dirmngr mdadm && rm -rf /var/lib/apt/lists/*
# echo "exit 0" > /usr/sbin/policy-rc.d && sed -i 's/redirectHostname: unifi//' /usr/share/unifi-core/app/config/config.yaml
# STOPSIGNAL SIGKILL # dbus.service unifi-core unifi-protect unifi-pion-gw ulp-go exim4
# https://fw-download.ubnt.com/data/unifi-cloudkey/1ff0-UCKP-3.0.13-cf2d4a50a0734ad6a3ac3795b70a4726.bin -> fwi[date/bin
# https://github.com/snowsnoot/unifi-unvr-arm64/blob/master/scripts/fwextract.sh


