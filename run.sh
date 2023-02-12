docker build -t unifi-protect .
# rm -rf storage
#mkdir -pv storage/srv/recordings storage/data/unifi-talk/contacts storage/data/unifi-talk/voicemail storage/persistent/unifi-core

docker run \
    --privileged -d \
    --cap-add SYS_ADMIN \
    --cap-add SYS_RAWIO \
    --security-opt seccomp=unconfined \
    --tmpfs /var/run \
    --tmpfs /var/run/lock \
    --tmpfs /tmp \
    -v $PWD/storage/srv:/srv \
    -v $PWD/storage/data:/data \
    -v $PWD/storage/persistent:/persistent \
    -v $PWD/storage/srv/recordings:/var/lib/freeswitch/storage/recordings \
    --device /dev/nvme2n1p1:/dev/sda1 \
    --cgroup-parent=docker.slice \
    --network host \
    --cgroupns private \
    --memory="8g" --cpus="4.0" \
    -it unifi-protect


# -p 4433:443 -p 80 -p 1112 -p 3415 -p 3417 -p 5432 -p 5433 -p 7080 -p 7440 -p7441 \
#     -p 7442 -p 7443 -p 7444 -p 7445 -p 7446 -p 7447 -p 7449 -p 7450 -p 7451 \
#     -p 7550 -p 7600 -p 7777 -p 7877 -p 7888 -p 8021 -p 9080 -p 11051 -p 11081 \
    
