var xV = Object.create,
  bo = Object.defineProperty,
  $V = Object.defineProperties,
  BV = Object.getOwnPropertyDescriptor,
  VV = Object.getOwnPropertyDescriptors,
  jV = Object.getOwnPropertyNames,
  Xn = Object.getOwnPropertySymbols,
  GV = Object.getPrototypeOf,
  Mu = Object.prototype.hasOwnProperty,
  Uh = Object.prototype.propertyIsEnumerable;
var kh = (e, t, r) =>
    t in e
      ? bo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  v = (e, t) => {
    for (var r in t || (t = {})) Mu.call(t, r) && kh(e, r, t[r]);
    if (Xn) for (var r of Xn(t)) Uh.call(t, r) && kh(e, r, t[r]);
    return e;
  },
  B = (e, t) => $V(e, VV(t)),
  HV = (e) => bo(e, "__esModule", { value: !0 });
var dt = (e, t) => {
    var r = {};
    for (var s in e) Mu.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]);
    if (e != null && Xn)
      for (var s of Xn(e)) t.indexOf(s) < 0 && Uh.call(e, s) && (r[s] = e[s]);
    return r;
  },
  x = (e, t) => () => (e && (t = e((e = 0))), t),
  w = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  lt = (e, t) => {
    for (var r in t) bo(e, r, { get: t[r], enumerable: !0 });
  },
  WV = (e, t, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let s of jV(t))
        !Mu.call(e, s) &&
          s !== "default" &&
          bo(e, s, {
            get: () => t[s],
            enumerable: !(r = BV(t, s)) || r.enumerable,
          });
    return e;
  },
  g = (e) =>
    WV(
      HV(
        bo(
          e != null ? xV(GV(e)) : {},
          "default",
          e && e.__esModule && "default" in e
            ? { get: () => e.default, enumerable: !0 }
            : { value: e, enumerable: !0 }
        )
      ),
      e
    );
var Fh = w((Ime, qh) => {
  "use strict";
  var Oh = require("fs"),
    KV = require("path"),
    YV = require("merge"),
    zV = require("js-yaml"),
    JV = (...e) => {
      let t = {},
        r = !1,
        s = e.concat(),
        a = (n, i = "log") => {
          console[i](n);
        },
        o = (n) => {
          let i,
            c = KV.resolve(process.cwd(), n);
          if (Oh.existsSync(c))
            try {
              YV.recursive(t, zV.safeLoad(Oh.readFileSync(c))),
                (r = !0),
                a(`CONFIG LOADED : ${n}`);
            } catch (d) {
              a(`ERROR LOADING CONFIG : ${n}`, "error"), a(d), (i = d);
            }
          if (!r)
            throw i || new Error("No configuration loaded : " + e.join(", "));
        };
      for (; s.length; ) {
        let n = s.splice(0, 1)[0];
        o(n);
      }
      return t.overrides && t.overrides.forEach(o), (t.env = t.env || {}), t;
    };
  qh.exports = JV;
});
var Z = w((Ame, Lh) => {
  Lh.exports = {
    UPDATE_JWT_SECRET: "UPDATE_JWT_SECRET",
    UPDATE_APP: "UPDATE_APP",
    BATCH_UPDATE_APPS: "UPDATE_APPS",
    REMOVE_APP: "REMOVE_APP",
    DISABLE_APP: "DISABLE_APP",
    ENABLE_APP: "ENABLE_APP",
    UPDATE_CLOUD_SETTINGS: "UPDATE_CLOUD_SETTINGS",
    SET_SSO_ID: "SET_SSO_ID",
    SET_CLOUD_INVITE: "SET_CLOUD_INVITE",
    REMOVE_CLOUD_INVITE: "REMOVE_CLOUD_INVITE",
    ADD_CONTROLLER: "ADD_CONTROLLER",
    UPDATE_CONTROLLER: "UPDATE_CONTROLLER",
    REMOVE_CONTROLLER: "REMOVE_CONTROLLER",
    UPDATE_CLIENTS: "UPDATE_CLIENTS",
    REMOVE_CLIENTS: "REMOVE_CLIENTS",
    SET_DEVICE_LIST: "SET_DEVICE_LIST",
    UPDATE_DEVICE_SETTINGS: "UPDATE_DEVICE_SETTINGS",
    UPDATE_DEVICE_TIMEZONE: "UPDATE_DEVICE_TIMEZONE",
    SETUP_NOTIFY: "SETUP_NOTIFY",
    UPDATE_PUBLIC_IP: "UPDATE_PUBLIC_IP",
    UPDATE_PORTS: "UPDATE_PORTS",
    SET_INTERNET_REQUIRED: "SET_INTERNET_REQUIRED",
    CONSOLE_LOCATION_CHANGED: "CONSOLE_LOCATION_CHANGED",
    CONSOLE_NAME_CHANGED: "CONSOLE_NAME_CHANGED",
    CONSOLE_TIMEZONE_CHANGED: "CONSOLE_TIMEZONE_CHANGED",
    CONSOLE_SKIP_TIMEZONE_AUTO_UPDATE_CHANGED:
      "CONSOLE_SKIP_TIMEZONE_AUTO_UPDATE_CHANGED",
    SETUP_COMPLETED: "SETUP_COMPLETED",
    SETUP_STARTED: "SETUP_STARTED",
    SETUP_CANCELED: "SETUP_CANCELED",
    ADD_USER: "ADD_USER",
    UPDATE_USER: "UPDATE_USER",
    REMOVE_USER: "REMOVE_USER",
    UPDATE_FIRMWARE_PROGRESS: "UPDATE_FIRMWARE_PROGRESS",
    UPDATE_FIRMWARE_API_TOKEN: "UPDATE_FIRMWARE_API_TOKEN",
    UPDATE_FIRMWARE_CHANNELS: "UPDATE_FIRMWARE_CHANNELS",
    UPDATE_FIRMWARE_LATEST_AVAILABLE: "UPDATE_FIRMWARE_LATEST_AVAILABLE",
    SET_FIRMWARE_UPDATE_SCHEDULE: "SET_FIRMWARE_UPDATE_SCHEDULE",
    SET_FIRMWARE_RELEASE_CHANNEL: "SET_FIRMWARE_RELEASE_CHANNEL",
    SET_FIRMWARE_UPDATING_INFO: "SET_FIRMWARE_UPDATING_INFO",
    CLEAR_FIRMWARE_UPDATING_INFO: "CLEAR_FIRMWARE_UPDATING_INFO",
    REMOVE_FIRMWARE_UPDATE_SCHEDULE: "REMOVE_FIRMWARE_UPDATE_SCHEDULE",
    SET_AUTOUPDATE_PROMPT_REQUIRED: "SET_AUTOUPDATE_PROMPT_REQUIRED",
    UPDATE_APT_CREDENTIALS: "UPDATE_APT_CREDENTIALS",
    UPDATE_SYSTEM_INFO: "UPDATE_SYSTEM_INFO",
    UPDATE_DEVICE_STATE: "UPDATE_DEVICE_STATE",
    UPDATE_HAS_INTERNET: "UPDATE_HAS_INTERNET",
    SET_DISABLE_SSH_ON_START: "SET_DISABLE_SSH_ON_START",
    SET_IS_UNIFI_SELF_SIGNED_CERTIFICATE:
      "SET_IS_UNIFI_SELF_SIGNED_CERTIFICATE",
    SET_DIRECT_CONNECT_DOMAIN: "SET_DIRECT_CONNECT_DOMAIN",
    UPDATE_CLOUD_CONNECTED: "UPDATE_CLOUD_CONNECTED",
    UPDATE_SYSTEM_IS_STARTED: "UPDATE_SYSTEM_IS_STARTED",
    UPDATE_SYSTEM_IS_STACKED: "UPDATE_SYSTEM_IS_STACKED",
    ISP_INFO_CHANGED: "ISP_INFO_CHANGED",
    DNS_IP_CHANGED: "DNS_IP_CHANGED",
    LAN_IP_CHANGED: "LAN_IP_CHANGED",
    STATE_DIFF: "STATE_DIFF",
    SET_DISCOVERED_UNIFIOS_DEVICES: "SET_DISCOVERED_UNIFIOS_DEVICES",
    SET_CONSOLES_ON_SAME_LOCAL_NETWORK: "SET_CONSOLES_ON_SAME_LOCAL_NETWORK",
    ADD_UNADOPTED_WIRELESS_DEVICES: "ADD_UNADOPTED_WIRELESS_DEVICES",
    REMOVE_UNADOPTED_WIRELESS_DEVICES: "REMOVE_UNADOPTED_WIRELESS_DEVICES",
    UPDATE_DEVICE_RESTORE_PROGRESS: "UPDATE_DEVICE_RESTORE_PROGRESS",
    SET_DEVICE_TOPOLOGY: "SET_DEVICE_TOPOLOGY",
    UPDATE_USER_DATA: "UPDATE_USER_DATA",
    ADOPT_SECONDARY: "ADOPT_SECONDARY",
    DESTROY_STACK: "DESTROY_STACK",
    JOIN_STACK: "JOIN_STACK",
    SET_PRIMARY_FINGERPRINT: "SET_PRIMARY_FINGERPRINT",
    SET_SECONDARY_CONNECTED: "SET_SECONDARY_CONNECTED",
    SET_SECONDARY_DISCONNECTED: "SET_SECONDARY_DISCONNECTED",
    SET_SECONDARY_FINGERPRINT: "SET_SECONDARY_FINGERPRINT",
    SET_SECONDARY_IS_SETUP: "SET_SECONDARY_IS_SETUP",
    UPDATE_PRIMARY_HOST: "UPDATE_PRIMARY_HOST",
    UPDATE_SECONDARY_CONSOLE_INFO: "UPDATE_SECONDARY_CONSOLE_INFO",
    SPEED_TEST_FAILED: "SPEED_TEST_FAILED",
    SPEED_TEST_FINISHED: "SPEED_TEST_FINISHED",
    SPEED_TEST_RUNNING: "SPEED_TEST_RUNNING",
  };
});
var $u = w((vme, $h) => {
  var { combineReducers: XV } = require("redux"),
    { cloneDeep: QV } = require("lodash"),
    {
      UPDATE_APP: Qn,
      BATCH_UPDATE_APPS: xu,
      REMOVE_APP: Mh,
      DISABLE_APP: ZV,
      ENABLE_APP: ej,
    } = Z(),
    tj = (e = {}, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case Qn: {
          let a = v({}, s.updates);
          return (
            !e[s.name] &&
              a.type === "controller" &&
              (typeof a.isInstalled == "undefined" && (a.isInstalled = !1),
              typeof a.isRunning == "undefined" && (a.isRunning = !1),
              typeof a.isConfigured == "undefined" && (a.isConfigured = !1),
              typeof a.unadoptedDevices == "undefined" &&
                (a.unadoptedDevices = [])),
            B(v({}, e), { [s.name]: v(v({}, e[s.name] || {}), a) })
          );
        }
        case xu: {
          if (Array.isArray(s)) {
            let a = v({}, e);
            return (
              s.forEach((o) => {
                let { name: n, updates: i } = o;
                e[n] && (a[n] = v(v({}, e[n]), i));
              }),
              a
            );
          }
          return e;
        }
        case Mh: {
          let a = v({}, e);
          return delete a[s.name], a;
        }
        default:
          return e;
      }
    };
  function rj(e = [], t) {
    let { type: r, payload: s } = t;
    switch (r) {
      case Qn:
        return e.includes(s.name) ? e : e.concat(s.name);
      case Mh: {
        let a = e.indexOf(s.name);
        if (!~a) return e;
        let o = e.concat();
        return o.splice(a, 1), o;
      }
      default:
        return e;
    }
  }
  var sj = (e = { disabled: [], unhidden: [] }, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case Qn:
          return s.updates.releaseChannel
            ? B(v({}, e), {
                releaseChannels: B(v({}, e.releaseChannels), {
                  [s.name]: s.updates.releaseChannel,
                }),
              })
            : s.updates.hidden === !1
            ? B(v({}, e), {
                unhidden: e.unhidden.includes(s.name)
                  ? e.unhidden
                  : [...e.unhidden, s.name],
              })
            : s.updates.hidden === !0
            ? B(v({}, e), { unhidden: e.unhidden.filter((o) => o !== s.name) })
            : e;
        case xu: {
          if (Array.isArray(s)) {
            let a = v({}, e);
            return (
              s.forEach((o) => {
                let { name: n, updates: i } = o;
                i.releaseChannel &&
                  (a.releaseChannels = B(v({}, e.releaseChannels), {
                    [n]: i.releaseChannel,
                  })),
                  i.hidden === !1
                    ? (a.unhidden = e.unhidden.includes(n)
                        ? e.unhidden
                        : [...e.unhidden, n])
                    : i.hidden === !0 &&
                      (a.unhidden = e.unhidden.filter((c) => c !== n));
              }),
              a
            );
          }
          return e;
        }
        case ZV:
          return B(v({}, e), {
            disabled: e.disabled.includes(s.name)
              ? e.disabled
              : [...e.disabled, s.name],
          });
        case ej:
          return B(v({}, e), {
            disabled: e.disabled.filter((o) => o !== s.name),
          });
        default:
          return e;
      }
    },
    aj = (e = {}, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case Qn: {
          let { name: a, updates: o } = s,
            n = s.currentReleaseChannel || o.releaseChannel;
          return "updateAvailable" in o && n
            ? B(v({}, e), { [n]: B(v({}, e[n]), { [a]: o.updateAvailable }) })
            : e;
        }
        case xu: {
          if (Array.isArray(s)) {
            let a = QV(e);
            return (
              s.forEach((o) => {
                let { name: n, updates: i } = o,
                  c = o.currentReleaseChannel || i.releaseChannel;
                "updateAvailable" in i &&
                  c &&
                  (a[c] = B(v({}, a[c]), { [n]: i.updateAvailable }));
              }),
              a
            );
          }
          return e;
        }
        default:
          return e;
      }
    },
    oj = (e, t) => v({ name: t }, e.apps.byName[t]),
    xh = (e) => e.apps.allNames.map((t) => v({ name: t }, e.apps.byName[t])),
    nj = (e) => xh(e).filter((t) => t.type === "controller"),
    ij = (e) => e.apps.userPrefs,
    cj = (e) => e.apps.userPrefs.disabled,
    uj = (e) => e.apps.userPrefs.unhidden,
    dj = (e) => e.apps.availableUpdates;
  $h.exports = {
    reducer: XV({
      byName: tj,
      allNames: rj,
      userPrefs: sj,
      availableUpdates: aj,
    }),
    getApp: oj,
    getApps: xh,
    getControllers: nj,
    getUserPrefs: ij,
    getDisabledApps: cj,
    getUnhiddenApps: uj,
    getAvailableUpdates: dj,
  };
});
var Bh = {};
lt(Bh, { RestoreState: () => Jt });
var Jt,
  Zn = x(() => {
    (function (a) {
      (a.NOT_STARTED = "notStarted"),
        (a.IN_PROGRESS = "inProgress"),
        (a.COMPLETED = "completed"),
        (a.CANCELED = "canceled");
    })(Jt || (Jt = {}));
  });
var ju = w((Cme, Vh) => {
  var { get: Bu } = require("lodash"),
    { UPDATE_DEVICE_RESTORE_PROGRESS: lj } = Z(),
    { RestoreState: Vu } = (Zn(), Bh),
    pj = { device: { restoreProgress: 0, restoreState: Vu.NOT_STARTED } },
    mj = (e = pj, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case lj:
          return { device: v(v({}, e.device), s) };
        default:
          return e;
      }
    },
    fj = (e) =>
      Bu(e, "backup.device.restoreState", Vu.NOT_STARTED) === Vu.IN_PROGRESS,
    hj = (e) => e.backup,
    yj = (e) => Bu(e, "backup.device.ssoId"),
    wj = (e) => Bu(e, "backup.device");
  Vh.exports = {
    reducer: mj,
    isRestoreInProgress: fj,
    getBackup: hj,
    getSsoIdFromRestore: yj,
    getRestoreProgress: wj,
  };
});
var Gu = w((Dme, jh) => {
  var { UPDATE_CLIENTS: gj, REMOVE_CLIENTS: Ej } = Z(),
    Sj = (e = new Map(), t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case gj: {
          let { clients: a } = s;
          return (
            a.forEach((o) => {
              e.set(o.mac, o);
            }),
            e
          );
        }
        case Ej:
          return (
            s.forEach((a) => {
              e.delete(a);
            }),
            e
          );
        default:
          return e;
      }
    },
    bj = (e) => [...e.clients.values()];
  jh.exports = { reducer: Sj, getClients: bj };
});
var Hu = w((Nme, Gh) => {
  var {
      UPDATE_CLOUD_SETTINGS: _j,
      SET_SSO_ID: Tj,
      SET_CLOUD_INVITE: Ij,
      REMOVE_CLOUD_INVITE: Aj,
    } = Z(),
    vj = (e = {}, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case _j:
          return v({}, s);
        case Tj:
          return B(v({}, e), { ssoId: s });
        case Ij:
          return B(v({}, e), {
            invites: B(v({}, e.invites), { [s.token]: s.data }),
          });
        case Aj: {
          let a = v({}, e.invites);
          return delete a[s], B(v({}, e), { invites: a });
        }
        default:
          return e;
      }
    },
    Cj = (e) => e.cloud,
    Dj = (e) => e.cloud.invites || {},
    Nj = (e) => Boolean(e.cloud.deviceId);
  Gh.exports = {
    reducer: vj,
    getCloudInvites: Dj,
    getCloudSettings: Cj,
    getRemoteAccessEnabled: Nj,
  };
});
var Wu = w((Rme, Hh) => {
  var { SET_DEVICE_LIST: Rj } = Z(),
    Pj = (e = {}, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case Rj:
          return s;
        default:
          return e;
      }
    },
    Uj = (e) => e.devices;
  Hh.exports = { reducer: Pj, getDeviceList: Uj };
});
var Ku = w((Pme, Wh) => {
  var { uniqBy: kj } = require("lodash"),
    {
      SET_DISCOVERED_UNIFIOS_DEVICES: Oj,
      SET_CONSOLES_ON_SAME_LOCAL_NETWORK: qj,
      ADD_UNADOPTED_WIRELESS_DEVICES: Fj,
      REMOVE_UNADOPTED_WIRELESS_DEVICES: Lj,
    } = Z(),
    Mj = (e = [], t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case Oj:
          return s;
        default:
          return e;
      }
    },
    xj = (e = [], t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case qj:
          return s;
        default:
          return e;
      }
    },
    $j = (e = [], t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case Fj:
          return kj([...e, ...s], (a) => a.mac);
        case Lj:
          return e.filter((a) => !s.includes(a.mac));
        default:
          return e;
      }
    },
    Bj = (e) => e.consolesOnSameLocalNetwork,
    Vj = (e) => e.unadoptedUnifiOSDevices,
    jj = (e) => e.unadoptedWirelessDevices;
  Wh.exports = {
    unifiConsolesReducer: xj,
    getUnadoptedUnifiOSDevices: Vj,
    unifiOSDevicesReducer: Mj,
    getConsolesOnSameLocalNetwork: Bj,
    wirelessDevicesReducer: $j,
    getUnadoptedWirelessDevices: jj,
  };
});
var Hs = {};
lt(Hs, {
  ApplicationName: () => Ne,
  CloudEnv: () => Yu,
  ConsoleModel: () => Be,
  DatabaseTable: () => we,
  InstallState: () => To,
  ReleaseChannel: () => Hr,
  ServiceName: () => _o,
  ServiceState: () => ot,
  UserPermission: () => Ve,
});
var Hr,
  _o,
  Ne,
  ot,
  To,
  Yu,
  Be,
  Ve,
  we,
  Re = x(() => {
    (function (o) {
      (o.INTERNAL = "internal"),
        (o.ALPHA = "alpha"),
        (o.BETA = "beta"),
        (o.RELEASE_CANDIDATE = "release-candidate"),
        (o.RELEASE = "release");
    })(Hr || (Hr = {}));
    (function (t) {
      t.UUM = "uum";
    })(_o || (_o = {}));
    (function (i) {
      (i.NETWORK = "network"),
        (i.PROTECT = "protect"),
        (i.ACCESS = "access"),
        (i.TALK = "talk"),
        (i.LED = "led"),
        (i.UID = "uid-agent"),
        (i.CONNECT = "connect");
    })(Ne || (Ne = {}));
    (function (i) {
      (i.DEACTIVATING = "deactivating"),
        (i.ACTIVATING = "activating"),
        (i.ACTIVE = "active"),
        (i.INACTIVE = "inactive"),
        (i.FAILED = "failed"),
        (i.INSTALLING = "installing"),
        (i.UNINSTALLING = "uninstalling");
    })(ot || (ot = {}));
    (function (u) {
      (u.CHECKING = "checking"),
        (u.INSTALLING = "installing"),
        (u.INSTALLED = "installed"),
        (u.INSTALL_FAILED = "installFailed"),
        (u.UPDATE_PENDING = "updatePending"),
        (u.UPDATING = "updating"),
        (u.UPDATE_FAILED = "updateFailed"),
        (u.UNINSTALLING = "uninstalling"),
        (u.UNINSTALLED = "uninstalled"),
        (u.UNINSTALL_FAILED = "uninstallFailed");
    })(To || (To = {}));
    (function (s) {
      (s.DEVELOP = "dev"), (s.STAGING = "stg"), (s.PRODUCTION = "prd");
    })(Yu || (Yu = {}));
    (function (m) {
      (m.UCKG2 = "uckg2"),
        (m.UCKP = "uckp"),
        (m.UDM = "udm"),
        (m.UDMPRO = "udmpro"),
        (m.UDMPROSE = "udmprose"),
        (m.UDR = "udr"),
        (m.UDW = "udw"),
        (m.UDWPRO = "udwpro"),
        (m.UNVR = "unvr"),
        (m.UNVRPRO = "unvrpro"),
        (m.CLOUD = "cloud"),
        (m.UDMPRO_UBIOS = "udmpro-ubios"),
        (m.UDM_UBIOS = "udm-ubios"),
        (m.UCKENT = "uckent");
    })(Be || (Be = {}));
    (function (y) {
      (y.VIEW_USER = "hasViewUserPermission"),
        (y.EDIT_USER = "hasEditUserPermission"),
        (y.VIEW_CONSOLE_SETTINGS = "hasViewSettingsPermission"),
        (y.EDIT_RELEASE_CHANNEL = "hasUpdateChannelPermission"),
        (y.EDIT_CONSOLE_SETTINGS = "hasGeneralSettingsPermission"),
        (y.MANAGE_APPLICATIONS = "hasUpdateAndInstallPermission"),
        (y.MANAGE_AUTO_UPDATE = "hasAutoUpdatePermission"),
        (y.EDIT_NOTIFICATIONS = "hasNotificationPermission"),
        (y.EDIT_REMOTE_ACCESS = "hasRemoteAccessPermission"),
        (y.EDIT_BACKUPS = "hasBackupPermission"),
        (y.RESTART_CONSOLE = "hasRestartConsolePermission"),
        (y.POWER_OFF_CONSOLE = "hasPoweroffConsolePermission"),
        (y.FACTORY_RESET = "hasResetConsolePermission"),
        (y.TRANSFER_OWNER = "hasTransferOwnerPermission"),
        (y.EDIT_SSH = "hasSSHPermission"),
        (y.SUPPORT_FILE = "hasSupportFilePermission");
    })(Ve || (Ve = {}));
    (function (i) {
      (i.SHARED_TOKENS = "shared_tokens"),
        (i.HOME_KIT_DEVICES = "homekit_devices"),
        (i.TASKS = "tasks"),
        (i.NOTIFICATIONS = "notifications"),
        (i.NOTIFICATION_SETTINGS = "notification_settings"),
        (i.USER_SETTINGS = "user_settings"),
        (i.SYSTEM_FLAGS = "system_flags");
    })(we || (we = {}));
  });
var pe,
  kt = x(() => {
    (function (o) {
      (o.EMMC = "emmc"),
        (o.RAID = "raid"),
        (o.SDCARD = "sdcard"),
        (o.HDD = "hdd"),
        (o.INTERNAL_SSD = "internalSSD");
    })(pe || (pe = {}));
  });
var Gj,
  Kh,
  Yh = x(() => {
    kt();
    (Gj = {
      shellCmd: "bash",
      primaryInterfaces: [{ name: "eth0", type: "eth" }],
      controllers: [{ name: "network", required: !0, updatable: !0 }],
      storage: [{ id: 0, type: pe.EMMC, mountPoint: "/" }],
      persistentStorage: "/data/unifi-core/firmware/",
      namespace: "unifi:network:firmware:setup",
      features: { ssh: !1, cpuInfo: !1, setupConfigUFN: !0, cloudBackup: !0 },
      firmware: { product: "unifi-firmware" },
    }),
      (Kh = Gj);
  });
var Vt,
  qe,
  Io,
  _s = x(() => {
    (function (s) {
      (s.AUTONEG = "autoneg"),
        (s.FDX_10_000 = "10000 FDX"),
        (s.FDX_1_000 = "1000 FDX");
    })(Vt || (Vt = {}));
    (function (s) {
      (s.AUTONEG = "auto-nego"),
        (s[(s.FDX_10_000 = 1e4)] = "FDX_10_000"),
        (s[(s.FDX_1_000 = 1e3)] = "FDX_1_000");
    })(qe || (qe = {}));
    (function (r) {
      (r.RAID_5 = "raid5"), (r.RAID_10 = "raid10");
    })(Io || (Io = {}));
  });
var Hj,
  zh,
  Jh = x(() => {
    _s();
    kt();
    (Hj = {
      shellCmd: "bash",
      primaryInterfaces: [
        { name: "eth0", type: "eth" },
        { name: "eth1", type: "sfp" },
      ],
      controllers: [{ name: "network", required: !0, updatable: !0 }],
      storage: [{ id: 0, type: pe.INTERNAL_SSD, mountPoint: "/" }],
      persistentStorage: "/persistent/unifi-core/",
      namespace: "unifi:network:firmware:setup",
      features: {
        ssh: !0,
        cloudBackup: !0,
        clientNetworkConfig: !0,
        setupConfigUFN: !0,
        waitForUFN: !0,
        systoolSupportDump: !0,
        systoolAnonId: !0,
        cpuInfo: !0,
      },
      firmware: { product: "unifi-cloudkey" },
      sfpWanPort: {
        portIdx: 2,
        clientNetworkSupportedValues: [qe.AUTONEG, qe.FDX_10_000, qe.FDX_1_000],
        associatedIfaceId: "eth1",
      },
      guid: "26b79f30-37f1-445b-9d17-688c5c531448",
    }),
      (zh = Hj);
  });
var Wj,
  Xh,
  Qh = x(() => {
    kt();
    (Wj = {
      shellCmd: "bash",
      primaryInterfaces: [{ name: "eth0", type: "eth" }],
      controllers: [{ name: "network", required: !0, updatable: !0 }],
      storage: [
        { id: 0, type: pe.EMMC, mountPoint: "/" },
        { id: 1, type: pe.SDCARD, mountPoint: "/sdcard" },
      ],
      persistentStorage: "/persistent/unifi-core/",
      namespace: "unifi:network:firmware:setup",
      features: {
        ssh: !0,
        cloudBackup: !0,
        clientNetworkConfig: !0,
        setupConfigUFN: !0,
        waitForUFN: !0,
        systoolSupportDump: !0,
        systoolAnonId: !0,
        cpuInfo: !0,
      },
      firmware: { product: "unifi-cloudkey" },
    }),
      (Xh = Wj);
  });
var Kj,
  Zh,
  ey = x(() => {
    kt();
    (Kj = {
      shellCmd: "bash",
      primaryInterfaces: [
        { name: "eth0", type: "eth" },
        { name: "en0", type: "eth" },
      ],
      controllers: [
        { name: "network", updatable: !0 },
        { name: "protect", updatable: !0 },
        { name: "access", updatable: !0 },
        { name: "talk", updatable: !0 },
        { name: "uid-agent", updatable: !0 },
        { name: "connect", prerelease: !0, updatable: !0 },
      ],
      storage: [
        { id: 0, type: pe.EMMC, mountPoint: "/" },
        { id: 1, type: pe.SDCARD, mountPoint: "/sdcard" },
        { id: 2, type: pe.HDD, mountPoint: "/srv", path: "/dev/sda" },
      ],
      persistentStorage: "/persistent/unifi-core/",
      namespace: "unifi:network:firmware:setup",
      features: {
        ssh: !0,
        clientNetworkConfig: !0,
        cloudBackup: !0,
        setupConfigUFN: !0,
        waitForUFN: !0,
        systoolSupportDump: !0,
        systoolAnonId: !0,
        cpuInfo: !0,
        storage: { hasRemovableStorage: !0, canSetHotspare: !1, canFormat: !1 },
      },
      firmware: { product: "unifi-cloudkey" },
      legacyShortname: "UCK-G2-PLUS",
    }),
      (Zh = Kj);
  });
var Yj,
  ty,
  ry = x(() => {
    kt();
    (Yj = {
      shellCmd: "bash",
      primaryInterfaces: [{ name: "eth0", type: "eth" }],
      primaryInterfacesAreDynamic: !0,
      controllers: [
        { name: "network", required: !0, updatable: !0 },
        { name: "uid-agent", updatable: !0 },
      ],
      storage: [{ id: 0, type: pe.EMMC, mountPoint: "/" }],
      persistentStorage: "/persistent/unifi-core/",
      wanPorts: ["eth4"],
      lanPorts: ["eth0", "eth1", "eth2", "eth3"],
      namespace: "unifi:network:firmware:setup",
      features: {
        ssh: !0,
        speedTest: !0,
        configWifi: !0,
        adoptDevices: !0,
        hasFirewall: !0,
        setupConfigUFN: !0,
        waitForUFN: !0,
        hasUdapi: !0,
        hasLedStatus: !0,
        cloudBackup: !0,
        UFNSetsHostname: !0,
        systoolSupportDump: !0,
        systoolAnonId: !0,
        cpuInfo: !0,
        hasGateway: !0,
        autoDetectPreviousSubnet: !0,
      },
      firmware: { product: "unifi-dream" },
    }),
      (ty = Yj);
  });
var sy,
  zu,
  zj,
  ay,
  oy = x(() => {
    sy = g(require("fs-extra"));
    try {
      zu = sy.default
        .readFileSync("/etc/unifi-os/ssh_proxy_port")
        .toString()
        .trim();
    } catch (e) {
      zu = "22";
    }
    (zj = {
      shellCmd: [
        "ssh",
        "-p",
        zu,
        "-o StrictHostKeyChecking=no",
        "root@localhost",
      ],
      persistentStorage: "/mnt/persistent/",
      firmware: { product: "udm" },
    }),
      (ay = zj);
  });
var tt,
  wa = x(() => {
    (function (s) {
      (s.AUTONEG = "autoneg"),
        (s.FDX_10_000 = "10000 FDX"),
        (s.FDX_1_000 = "1000 FDX");
    })(tt || (tt = {}));
  });
var Jj,
  ny,
  iy = x(() => {
    kt();
    wa();
    (Jj = {
      shellCmd: "bash",
      primaryInterfaces: [{ name: "eth0", type: "eth" }],
      primaryInterfacesAreDynamic: !0,
      controllers: [
        { name: "network", required: !0, updatable: !0 },
        { name: "protect", updatable: !0 },
        { name: "access", updatable: !0 },
        { name: "talk", updatable: !0 },
        { name: "led", updatable: !0, hidden: !0 },
        { name: "uid-agent", updatable: !0 },
        { name: "connect", prerelease: !0, updatable: !0 },
      ],
      storage: [
        { id: 0, type: pe.EMMC, mountPoint: "/" },
        { id: 1, type: pe.HDD, mountPoint: "/srv", path: "/dev/sda" },
      ],
      persistentStorage: "/persistent/unifi-core/",
      sfpWanPort: {
        portIdx: 10,
        unifiNetworkSupportedValues: [tt.AUTONEG, tt.FDX_10_000, tt.FDX_1_000],
        associatedIfaceId: "eth9",
      },
      wanPorts: ["eth8", "eth9"],
      lanPorts: [
        "eth0",
        "eth1",
        "eth2",
        "eth3",
        "eth4",
        "eth5",
        "eth6",
        "eth7",
      ],
      namespace: "unifi:network:firmware:setup",
      features: {
        ssh: !0,
        speedTest: !0,
        adoptDevices: !0,
        setupConfigUFN: !0,
        waitForUFN: !0,
        hasFirewall: !0,
        hasUdapi: !0,
        hasLedStatus: !1,
        cloudBackup: !0,
        systoolSupportDump: !0,
        UFNSetsHostname: !0,
        systoolAnonId: !0,
        cpuInfo: !0,
        storage: { hasRemovableStorage: !0, canSetHotspare: !1, canFormat: !0 },
        hasGateway: !0,
        autoDetectPreviousSubnet: !0,
      },
      firmware: { product: "unifi-dream" },
      legacyShortname: "UDM-PRO",
    }),
      (ny = Jj);
  });
var cy,
  Ju,
  Xj,
  uy,
  dy = x(() => {
    cy = g(require("fs-extra"));
    try {
      Ju = cy.default
        .readFileSync("/etc/unifi-os/ssh_proxy_port")
        .toString()
        .trim();
    } catch (e) {
      Ju = "22";
    }
    (Xj = {
      shellCmd: [
        "ssh",
        "-p",
        Ju,
        "-o StrictHostKeyChecking=no",
        "root@localhost",
      ],
      controllers: [
        { name: "network", required: !0, updatable: !0 },
        { name: "protect", updatable: !0 },
        { name: "access", updatable: !0 },
        { name: "talk", updatable: !0 },
        { name: "led", updatable: !0, hidden: !0 },
        { name: "uid-agent", updatable: !0 },
        { name: "connect", prerelease: !0, updatable: !0 },
      ],
      persistentStorage: "/mnt/persistent/",
      firmware: { product: "udm" },
    }),
      (uy = Xj);
  });
var Qj,
  ly,
  py = x(() => {
    kt();
    wa();
    (Qj = {
      shellCmd: "bash",
      primaryInterfaces: [{ name: "eth0", type: "eth" }],
      primaryInterfacesAreDynamic: !0,
      controllers: [
        { name: "network", required: !0, updatable: !0 },
        { name: "protect", updatable: !0 },
        { name: "access", updatable: !0 },
        { name: "talk", updatable: !0 },
        { name: "uid-agent", updatable: !0 },
        { name: "connect", prerelease: !0, updatable: !0 },
      ],
      storage: [
        { id: 0, type: pe.EMMC, mountPoint: "/" },
        { id: 1, type: pe.HDD, mountPoint: "/srv", path: "/dev/sdb" },
        {
          id: 2,
          type: pe.INTERNAL_SSD,
          mountPoint: "/ssd1",
          path: "/dev/sda5",
        },
      ],
      persistentStorage: "/persistent/unifi-core/",
      sfpWanPort: {
        portIdx: 10,
        unifiNetworkSupportedValues: [tt.AUTONEG, tt.FDX_10_000, tt.FDX_1_000],
        associatedIfaceId: "eth9",
      },
      wanPorts: ["eth8", "eth9"],
      lanPorts: [
        "eth0",
        "eth1",
        "eth2",
        "eth3",
        "eth4",
        "eth5",
        "eth6",
        "eth7",
      ],
      namespace: "unifi:network:firmware:setup",
      features: {
        ssh: !0,
        speedTest: !0,
        adoptDevices: !0,
        setupConfigUFN: !0,
        waitForUFN: !0,
        hasFirewall: !0,
        hasUdapi: !0,
        hasLedStatus: !1,
        cloudBackup: !0,
        systoolSupportDump: !0,
        UFNSetsHostname: !0,
        systoolAnonId: !0,
        cpuInfo: !0,
        storage: {
          hasRemovableStorage: !0,
          canSetHotspare: !1,
          canFormat: !0,
          internalSSD: "sda5",
        },
        hasGateway: !0,
        autoDetectPreviousSubnet: !0,
      },
      firmware: { product: "unifi-dream" },
      legacyShortname: "UDM-PRO-SE",
    }),
      (ly = Qj);
  });
var Zj,
  my,
  fy = x(() => {
    kt();
    (Zj = {
      shellCmd: "bash",
      primaryInterfaces: [{ name: "eth0", type: "eth" }],
      primaryInterfacesAreDynamic: !0,
      controllers: [
        { name: "network", required: !0, updatable: !0 },
        { name: "protect", updatable: !0 },
        { name: "access", updatable: !0 },
        { name: "talk", updatable: !0 },
        { name: "connect", prerelease: !0, updatable: !0 },
      ],
      maxRunningApplications: 2,
      storage: [
        { id: 0, type: pe.EMMC, mountPoint: "/" },
        { id: 1, type: pe.SDCARD, mountPoint: "/srv", path: "/dev/mmcblk1p2" },
        {
          id: 2,
          type: pe.INTERNAL_SSD,
          mountPoint: "/ssd1",
          path: "/dev/sda5",
        },
      ],
      persistentStorage: "/persistent/unifi-core/",
      wanPorts: ["eth4"],
      lanPorts: ["eth0", "eth1", "eth2", "eth3"],
      namespace: "unifi:network:firmware:setup",
      features: {
        ssh: !0,
        speedTest: !0,
        configWifi: !0,
        adoptDevices: !0,
        setupConfigUFN: !0,
        waitForUFN: !0,
        hasFirewall: !0,
        hasUdapi: !0,
        hasLedStatus: !0,
        cloudBackup: !0,
        systoolSupportDump: !0,
        UFNSetsHostname: !0,
        systoolAnonId: !0,
        storage: {
          canSetHotspare: !1,
          canFormat: !0,
          internalSSD: "sda5",
          hasSDCard: !0,
        },
        cpuInfo: !1,
        hasGateway: !0,
        autoDetectPreviousSubnet: !0,
      },
      firmware: { product: "unifi-dream" },
    }),
      (my = Zj);
  });
var eG,
  hy,
  yy = x(() => {
    kt();
    wa();
    (eG = {
      shellCmd: "bash",
      primaryInterfaces: [{ name: "eth0", type: "eth" }],
      primaryInterfacesAreDynamic: !0,
      controllers: [
        { name: "network", required: !0, updatable: !0 },
        { name: "protect", updatable: !0 },
        { name: "access", updatable: !0 },
        { name: "talk", updatable: !0 },
        { name: "uid-agent", updatable: !0 },
        { name: "connect", prerelease: !0, updatable: !0 },
      ],
      storage: [
        { id: 0, type: pe.EMMC, mountPoint: "/" },
        { id: 1, type: pe.SDCARD, mountPoint: "/srv", path: "/dev/mmcblk1p2" },
        {
          id: 2,
          type: pe.INTERNAL_SSD,
          mountPoint: "/ssd1",
          path: "/dev/sda5",
        },
      ],
      persistentStorage: "/persistent/unifi-core/",
      sfpWanPort: {
        portIdx: 20,
        unifiNetworkSupportedValues: [tt.AUTONEG, tt.FDX_10_000, tt.FDX_1_000],
        associatedIfaceId: "eth19",
      },
      wanPorts: ["eth18", "eth19"],
      lanPorts: [
        "eth0",
        "eth1",
        "eth2",
        "eth3",
        "eth4",
        "eth5",
        "eth6",
        "eth7",
        "eth8",
        "eth9",
        "eth10",
        "eth11",
        "eth12",
        "eth13",
        "eth14",
        "eth15",
        "eth16",
        "eth17",
      ],
      namespace: "unifi:network:firmware:setup",
      features: {
        ssh: !0,
        speedTest: !0,
        configWifi: !0,
        adoptDevices: !0,
        setupConfigUFN: !0,
        waitForUFN: !0,
        hasFirewall: !0,
        hasUdapi: !0,
        hasLedStatus: !1,
        cloudBackup: !0,
        systoolSupportDump: !0,
        UFNSetsHostname: !0,
        systoolAnonId: !0,
        cpuInfo: !0,
        storage: {
          canSetHotspare: !1,
          canFormat: !0,
          internalSSD: "sda5",
          hasSDCard: !0,
        },
        hasGateway: !0,
        autoDetectPreviousSubnet: !0,
      },
      firmware: { product: "unifi-dream" },
      guid: "DA72108E-5D14-4CF7-8EE4-24F386B2548A",
    }),
      (hy = eG);
  });
var tG,
  wy,
  gy = x(() => {
    kt();
    wa();
    (tG = {
      shellCmd: "bash",
      primaryInterfaces: [{ name: "eth0", type: "eth" }],
      primaryInterfacesAreDynamic: !0,
      controllers: [
        { name: "network", required: !0, updatable: !0 },
        { name: "protect", updatable: !0 },
        { name: "access", updatable: !0 },
        { name: "talk", updatable: !0 },
        { name: "uid-agent", updatable: !0 },
        { name: "connect", prerelease: !0, updatable: !0 },
      ],
      storage: [
        { id: 0, type: pe.EMMC, mountPoint: "/" },
        {
          id: 1,
          type: pe.RAID,
          mountPoint: "/srv",
          path: "/dev/md3",
          canErase: !0,
        },
        {
          id: 2,
          type: pe.INTERNAL_SSD,
          mountPoint: "/ssd1",
          path: "/dev/sda5",
        },
      ],
      persistentStorage: "/persistent/unifi-core/",
      sfpWanPort: {
        portIdx: 23,
        unifiNetworkSupportedValues: [tt.AUTONEG, tt.FDX_10_000, tt.FDX_1_000],
        associatedIfaceId: "eth21",
      },
      wanPorts: ["eth20", "eth21"],
      lanPorts: [
        "eth0",
        "eth1",
        "eth2",
        "eth3",
        "eth4",
        "eth5",
        "eth6",
        "eth7",
        "eth8",
        "eth9",
        "eth10",
        "eth11",
        "eth12",
        "eth13",
        "eth14",
        "eth15",
        "eth16",
        "eth17",
        "eth18",
        "eth19",
      ],
      namespace: "unifi:network:firmware:setup",
      features: {
        ssh: !0,
        speedTest: !0,
        configWifi: !0,
        adoptDevices: !0,
        setupConfigUFN: !0,
        waitForUFN: !0,
        hasFirewall: !0,
        hasUdapi: !0,
        hasLedStatus: !1,
        cloudBackup: !0,
        systoolSupportDump: !0,
        UFNSetsHostname: !0,
        systoolAnonId: !0,
        cpuInfo: !0,
        hasGateway: !0,
        storage: {
          hasRemovableStorage: !0,
          canSetHotspare: !1,
          canFormat: !0,
          internalSSD: "sda5",
        },
        autoDetectPreviousSubnet: !0,
      },
      firmware: { product: "unifi-dream" },
      guid: "8CF00CBA-AC01-43CA-89A4-AF13D41A1472",
      lcmGrpcHost: "169.254.2.1",
    }),
      (wy = tG);
  });
var rG,
  Ey,
  Sy = x(() => {
    _s();
    kt();
    (rG = {
      shellCmd: "bash",
      primaryInterfaces: [
        { name: "enp0s1", type: "eth" },
        { name: "enp0s2", type: "sfp" },
      ],
      controllers: [
        { name: "protect", required: !0, updatable: !0 },
        { name: "uid-agent", updatable: !0 },
      ],
      storage: [
        { id: 0, type: pe.EMMC, mountPoint: "/" },
        {
          id: 1,
          type: pe.RAID,
          mountPoint: "/srv",
          path: "/dev/md3",
          canErase: !0,
        },
      ],
      persistentStorage: "/persistent/unifi-core/",
      features: {
        ssh: !0,
        clientNetworkConfig: !0,
        cloudBackup: !0,
        systoolSupportDump: !0,
        systoolAnonId: !0,
        storage: {
          hasRemovableStorage: !0,
          canSetHotspare: !0,
          canFormat: !0,
          canConfigureRaid: !0,
        },
        cpuInfo: !0,
        adoptableViaDiscovery: !0,
      },
      sfpWanPort: {
        portIdx: 2,
        clientNetworkSupportedValues: [qe.AUTONEG, qe.FDX_10_000, qe.FDX_1_000],
        associatedIfaceId: "enp0s2",
      },
      firmware: { product: "unifi-nvr" },
      namespace: "unifi:protect:firmware:setup",
      legacyShortname: "UNVR4",
    }),
      (Ey = rG);
  });
var sG,
  by,
  _y = x(() => {
    _s();
    kt();
    (sG = {
      shellCmd: "bash",
      primaryInterfaces: [
        { name: "enp0s1", type: "eth" },
        { name: "enp0s2", type: "sfp" },
      ],
      controllers: [
        { name: "protect", required: !0, updatable: !0 },
        { name: "uid-agent", updatable: !0 },
      ],
      storage: [
        { id: 0, type: pe.EMMC, mountPoint: "/" },
        {
          id: 1,
          type: pe.RAID,
          mountPoint: "/srv",
          path: "/dev/md3",
          canErase: !0,
        },
      ],
      sfpWanPort: {
        portIdx: 2,
        clientNetworkSupportedValues: [qe.AUTONEG, qe.FDX_10_000, qe.FDX_1_000],
        associatedIfaceId: "enp0s2",
      },
      wanPorts: ["enp0s1", "enp0s2"],
      persistentStorage: "/persistent/unifi-core/",
      features: {
        ssh: !0,
        clientNetworkConfig: !0,
        cloudBackup: !0,
        systoolSupportDump: !0,
        systoolAnonId: !0,
        storage: {
          hasRemovableStorage: !0,
          canSetHotspare: !0,
          canFormat: !0,
          canConfigureRaid: !0,
        },
        cpuInfo: !0,
        stackable: !0,
      },
      namespace: "unifi:protect:firmware:setup",
      firmware: { product: "unifi-nvr" },
      legacyShortname: "UNVR-PRO",
    }),
      (by = sG);
  });
var aG,
  Xt,
  ga = x(() => {
    Re();
    Yh();
    Jh();
    Qh();
    ey();
    ry();
    oy();
    iy();
    dy();
    py();
    fy();
    yy();
    gy();
    Sy();
    _y();
    (aG = {
      [Be.UCKG2]: Xh,
      [Be.UCKP]: Zh,
      [Be.UDM]: ty,
      [Be.UDMPRO]: ny,
      [Be.UDMPROSE]: ly,
      [Be.UDR]: my,
      [Be.UDW]: hy,
      [Be.UDWPRO]: wy,
      [Be.UNVR]: Ey,
      [Be.UNVRPRO]: by,
      [Be.CLOUD]: Kh,
      [Be.UCKENT]: zh,
      [Be.UDMPRO_UBIOS]: uy,
      [Be.UDM_UBIOS]: ay,
    }),
      (Xt = aG);
  });
var Wr = w((Rfe, Ty) => {
  Ty.exports = {
    UPDATE_CHECK_INTERVAL_HOURS: 6,
    CHUNK_TIMEOUT: 1e3 * 5,
    FW_UPDATE_TTL: 1e3 * 60 * 60 * 24,
    FLAG_UPDATE_APPLICATIONS_ON_STARTUP: "UPDATE_APPLICATIONS_ON_STARTUP",
    FLAG_AUTO_UPDATE_PREFERENCES_ACKNOWLEDGED:
      "AUTO_UPDATE_PREFERENCES_ACKNOWLEDGED",
    VERSION_REGEX:
      /([\w-]+)\.([\w-]+)\.v?([\w\W]*)(?:\.([\w]*?))\.(\d{6})\.(\d{4})/,
    UBIOS_HARDWARE_PLATFORM: "alpinev2",
    downloadState: {
      NONE: "none",
      DONE: "done",
      STALLED: "stalled",
      DOWNLOADING: "downloading",
    },
    updateFrequency: {
      DAILY: "daily",
      WEEKLY: "weekly",
      MONTHLY: "monthly",
      DISABLED: "disabled",
    },
    UPDATE_FAILED_CODES: {
      ERR_MIGRATION_DATA_CREATE_FAILED: 21,
      ERR_INSUFFICIENT_MIGRATE_SPACE: 22,
    },
  };
});
var vy = w((Pfe, Ay) => {
  var Iy = class extends Error {
    constructor(t, r, s) {
      super(t);
      (this.err = t),
        (this.stdout = r),
        (this.stderr = s),
        (this.message = this.toString());
    }
    toString() {
      return `
      ${this.err.toString().trim()}
      
stderr: ${this.stderr ? this.stderr.toString().trim() : ""}
      
stdout: ${this.stdout ? this.stdout.toString().trim() : ""}
    `;
    }
  };
  Ay.exports = Iy;
});
var Ce = w((Ufe, Cy) => {
  var { exec: oG } = require("child_process"),
    nG = vy();
  Cy.exports = (e, t, r) =>
    new Promise((s, a) => {
      let o = oG(e, r, (n, i, c) =>
        n ? a(new nG(n, i, c)) : s({ stdout: i, stderr: c })
      );
      t && (o.stdin.write(t), o.stdin.end());
    });
});
var We = {};
lt(We, {
  canAdoptViaDiscovery: () => SG,
  canStack: () => td,
  cleanApplicationVersion: () => gG,
  directoryIsEmpty: () => TG,
  formatBackupList: () => hG,
  getFWVersionString: () => yG,
  getFirmwareFilePath: () => rd,
  getFirmwareVersionAndPlatform: () => Qu,
  getIsSetupFromConfigFile: () => _G,
  getReleaseNotesURL: () => Zu,
  getSizeByPath: () => bG,
  isLanRequest: () => wG,
  removeDeepKeys: () => ed,
  sortApplications: () => EG,
  truncateProductLine: () => ti,
});
var ei,
  iG,
  cG,
  uG,
  Dy,
  Xu,
  dG,
  lG,
  pG,
  mG,
  fG,
  hG,
  yG,
  Qu,
  wG,
  gG,
  Zu,
  Ny,
  EG,
  ti,
  ed,
  td,
  SG,
  rd,
  bG,
  _G,
  TG,
  Ue = x(() => {
    ga();
    ({ get: ei } = require("lodash")),
      (iG = require("os")),
      ({ cidrSubnet: cG } = require("ip")),
      (uG = require("semver")),
      (Dy = require("path")),
      (Xu = require("fs-extra")),
      (dG = require("js-yaml")),
      ({ VERSION_REGEX: lG } = Wr()),
      (pG = Ce()),
      (mG = Object.entries(Xt).reduce(
        (e, [t, { features: r, legacyShortname: s }]) => (
          r && r.stackable && (s && e.push(s), e.push(t.toUpperCase())), e
        ),
        []
      )),
      (fG = Object.entries(Xt).reduce(
        (e, [t, { features: r, legacyShortname: s }]) => (
          r &&
            r.adoptableViaDiscovery &&
            (s && e.push(s), e.push(t.toUpperCase())),
          e
        ),
        []
      )),
      (hG = (e, t) =>
        e
          .filter(({ backups: r }) => r.length)
          .map((a) => {
            var o = a,
              { backups: r } = o,
              s = dt(o, ["backups"]);
            return B(v({}, s), {
              backups: r
                .map((c) => {
                  var d = c,
                    { metadata: n = {} } = d,
                    i = dt(d, ["metadata"]);
                  return B(v({}, i), {
                    metadata: Object.entries(n).reduce((u, [p, l]) => {
                      try {
                        let f = JSON.parse(l);
                        return B(v({}, u), { [p]: f });
                      } catch {
                        return B(v({}, u), { [p]: l });
                      }
                    }, {}),
                  });
                })
                .filter(({ metadata: n }) => !t || n.hardware_shortname === t),
            });
          })),
      (yG = (e) => {
        let t = ei(e, "version_major", 0),
          r = ei(e, "version_minor", 0),
          s = ei(e, "version_patch", 0),
          a = ei(e, "version_prerelease", 0),
          o = `${t}.${r}.${s}`;
        return a ? `${o}-${a}` : o;
      }),
      (Qu = (e) => {
        let t = e.toString().trim().match(lG);
        return { hardwarePlatform: t[2], firmwareVersion: t[3] };
      }),
      (wG = ({ ip: e }) => {
        let { br0: t } = iG.networkInterfaces();
        return t
          ? !!t.find(({ cidr: s }) => {
              try {
                return cG(s).contains(e);
              } catch {
                return !1;
              }
            })
          : !1;
      }),
      (gG = (e) => e.trim().split("-")[0].replace("~", "-")),
      (Zu = (e, t) => {
        let r = uG.clean(t, { loose: !0 });
        return `https://community.ui.com/releases/r/${e.toLowerCase()}/${r}`;
      }),
      (Ny = [
        "network",
        "protect",
        "access",
        "talk",
        "led",
        "uid-agent",
        "connect",
      ]),
      (EG = (e) => e.sort((t, r) => Ny.indexOf(t) - Ny.indexOf(r))),
      (ti = (e) => e.replace("unifi-", "")),
      (ed = (e, t) =>
        !t || t.length < 1 || !e || typeof e != "object"
          ? e
          : Array.isArray(e)
          ? e.map((r) => ed(r, t))
          : Object.keys(e)
              .filter((r) => !t.includes(r))
              .reduce((r, s) => B(v({}, r), { [s]: ed(e[s], t) }), {})),
      (td = (e) => mG.some((t) => e.includes(t))),
      (SG = (e) => fG.some((t) => e.includes(t))),
      (rd = (e) => Dy.join(e.firmware.dir, "fwupdate.bin")),
      (bG = async (e) => {
        try {
          let { stdout: t } = await pG(`du -sb ${e}`);
          return parseInt(t);
        } catch {
          return 0;
        }
      }),
      (_G = async (e) => {
        try {
          let t = await Xu.readFile(Dy.join(e, "settings.yaml"), "utf8"),
            { isSetup: r } = dG.safeLoad(t);
          return r;
        } catch {
          return !1;
        }
      }),
      (TG = async (e) =>
        (await Xu.pathExists(e)) ? (await Xu.readdir(e)).length === 0 : !0);
  });
var ri = {};
lt(ri, { UpdateFailedReason: () => sd, UpdateState: () => Ao });
var Ao,
  sd,
  vo = x(() => {
    (function (s) {
      (s.NOT_STARTED = "NOT_STARTED"),
        (s.IN_PROGRESS = "IN_PROGRESS"),
        (s.FAILED = "FAILED");
    })(Ao || (Ao = {}));
    (function (a) {
      (a.NONE = "NONE"),
        (a.UNKNOWN = "UNKNOWN"),
        (a.BACKUP_FILE_TOO_BIG = "BACKUP_FILE_TOO_BIG"),
        (a.BACKUP_FILE_CREATE_FAILED = "BACKUP_FILE_CREATE_FAILED");
    })(sd || (sd = {}));
  });
var nd = w((Ofe, Uy) => {
  var {
      UPDATE_FIRMWARE_PROGRESS: IG,
      UPDATE_FIRMWARE_LATEST_AVAILABLE: Ry,
      UPDATE_FIRMWARE_API_TOKEN: AG,
      UPDATE_FIRMWARE_CHANNELS: vG,
      SET_FIRMWARE_UPDATE_SCHEDULE: CG,
      SET_FIRMWARE_RELEASE_CHANNEL: DG,
      SET_FIRMWARE_UPDATING_INFO: NG,
      CLEAR_FIRMWARE_UPDATING_INFO: RG,
      SET_AUTOUPDATE_PROMPT_REQUIRED: PG,
      REMOVE_FIRMWARE_UPDATE_SCHEDULE: UG,
      UPDATE_APT_CREDENTIALS: kG,
    } = Z(),
    { combineReducers: OG } = require("redux"),
    { get: ad } = require("lodash"),
    { getFWVersionString: qG } = (Ue(), We),
    { UpdateState: FG, UpdateFailedReason: LG } = (vo(), ri),
    od = "release",
    Py = { state: FG.NOT_STARTED, failedReason: LG.NONE },
    MG = (e = {}, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case IG:
          return v(v({}, e), s);
        default:
          return e;
      }
    },
    xG = (e = {}, t) => {
      let { type: r, payload: s } = t,
        a = Date.now();
      switch (r) {
        case Ry:
          return v({ timestamp: a }, s);
        default:
          return e;
      }
    },
    $G = (e = {}, t) => {
      let { type: r, payload: s } = t,
        a = Date.now();
      switch (r) {
        case Ry: {
          let { channel: o } = s;
          return B(v({}, e), { [o]: v({ timestamp: a }, s) });
        }
        default:
          return e;
      }
    },
    BG = (e = null, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case AG:
          return s.token;
        default:
          return e;
      }
    },
    VG = (e = null, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case kG:
          return { expiry: s.expiry };
        default:
          return e;
      }
    },
    jG = (e = [od], t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case vG:
          return s.channels;
        default:
          return e === null || e.length === 0 ? [od] : e;
      }
    },
    GG = (e = null, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case CG:
          return s;
        case UG:
          return null;
        default:
          return e;
      }
    },
    HG = (e = od, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case DG:
          return s;
        default:
          return e;
      }
    },
    WG = (e = Py, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case RG:
          return Py;
        case NG:
          return v(v({}, e), s);
        default:
          return e;
      }
    },
    KG = (e = null, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case PG:
          return s;
        default:
          return e;
      }
    },
    YG = (e) => e.firmware,
    zG = (e) => e.firmware.progress || { state: "none" },
    JG = (e) => e.firmware.latest,
    XG = (e) => ad(e.firmware.latest, "timestamp"),
    QG = (e, t) => ad(e.firmware.latestByChannel, t),
    ZG = (e) => e.firmware.token,
    e2 = (e) => e.firmware.channels,
    t2 = (e) => qG(e.firmware.latest),
    r2 = (e) => e.firmware.schedule,
    s2 = (e) => ad(e, "firmware.releaseChannel", "release"),
    a2 = (e) => e.firmware.update,
    o2 = (e) => e.aptCreds;
  Uy.exports = {
    reducer: OG({
      latest: xG,
      latestByChannel: $G,
      progress: MG,
      token: BG,
      channels: jG,
      schedule: GG,
      releaseChannel: HG,
      update: WG,
      autoUpdatePrompt: KG,
      aptCreds: VG,
    }),
    getFirmware: YG,
    getFWDownloadProgress: zG,
    getFWLatestAvailable: JG,
    getFWLatestAvailableVersion: t2,
    getFWLatestAvailableForChannel: QG,
    getFWApiToken: ZG,
    getFWChannels: e2,
    getFWReleaseChannel: s2,
    getFWUpdateSchedule: r2,
    getFWLatestUpdateCheck: XG,
    getFWUpdatingInfo: a2,
    getAptCreds: o2,
  };
});
var id = w((qfe, ky) => {
  var { UPDATE_JWT_SECRET: n2 } = Z(),
    i2 = (e = {}, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case n2:
          return B(v({}, e), { secret: s });
        default:
          return e;
      }
    },
    c2 = (e) => e.jwt.secret;
  ky.exports = { reducer: i2, getJwtSecret: c2 };
});
var Ot = w((Ffe, qy) => {
  var { UPDATE_DEVICE_STATE: u2 } = Z(),
    { publish: d2 } = require("handoff"),
    Oy = {
      NOT_READY: "notReady",
      ERROR: "error",
      NOT_SETUP: "notSetup",
      SETTING_UP: "settingUp",
      SETUP: "setup",
      REBOOTING: "rebooting",
      POWERING_OFF: "poweringOff",
      RESETTING_TO_DEFAULTS: "resettingToDefaults",
      WILL_UPGRADE: "willUpgrade",
      UPGRADING: "upgrading",
      UPDATE_AVAILABLE: "updateAvailable",
      DISCONNECTED_FROM_PRIMARY: "disconnectedFromPrimary",
    },
    l2 = async (e) => {
      if (!Object.values(Oy).includes(e))
        throw new Error(`Invalid device state ${e}`);
      return d2("redux.dispatch", u2, e);
    };
  qy.exports = { deviceStates: Oy, setDeviceState: l2 };
});
var cd = w((Lfe, Fy) => {
  var {
      SET_SECONDARY_DISCONNECTED: p2,
      UPDATE_SECONDARY_CONSOLE_INFO: m2,
      DESTROY_STACK: f2,
    } = Z(),
    { deviceStates: h2 } = Ot(),
    y2 = (e = {}, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case p2: {
          let o = s,
            n = e[o] || {};
          return B(v({}, e), {
            [o]: B(v({}, n), { deviceState: h2.DISCONNECTED_FROM_PRIMARY }),
          });
        }
        case m2: {
          let a = s,
            { mac: o } = a,
            n = dt(a, ["mac"]);
          return B(v({}, e), { [o]: n });
        }
        case f2:
          return {};
        default:
          return e;
      }
    },
    w2 = (e) => e.secondaryConsoles;
  Fy.exports = { reducer: y2, getSecondaryConsoles: w2 };
});
var ud = w((Mfe, My) => {
  var {
      CONSOLE_LOCATION_CHANGED: g2,
      CONSOLE_NAME_CHANGED: E2,
      CONSOLE_TIMEZONE_CHANGED: S2,
      CONSOLE_SKIP_TIMEZONE_AUTO_UPDATE_CHANGED: b2,
      SET_INTERNET_REQUIRED: _2,
      SETUP_CANCELED: T2,
      SETUP_COMPLETED: I2,
      SETUP_STARTED: A2,
      UPDATE_DEVICE_SETTINGS: v2,
    } = Z(),
    Ly = {
      isSetup: !1,
      location: void 0,
      name: null,
      timezone: null,
      sendDiagnostics: "anonymous",
      disableSshOnStart: void 0,
      autoBackupEnabled: !1,
      internetRequired: !0,
    },
    C2 = (e = Ly, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case v2:
          return v(v({}, e), s);
        case g2:
          return B(v({}, e), { location: s });
        case E2:
          return B(v({}, e), { name: s });
        case S2:
          return B(v({}, e), { timezone: s });
        case b2:
          return B(v({}, e), { skipTimezoneAutoUpdate: s });
        case A2:
          return B(v({}, e), {
            setupStartTime: s.startTime,
            setupType: s.type,
            setupId: s.setupId,
            setupDuration: null,
            internetRequired: s.internetRequired,
          });
        case I2:
          return B(v({}, e), {
            isSetup: !0,
            setupStartTime: null,
            needsMigration: void 0,
            needsUbiosMigration: void 0,
          });
        case T2:
          return B(v({}, e), {
            setupStartTime: null,
            setupType: null,
            setupId: void 0,
            setupDuration: null,
            internetRequired: !0,
          });
        case _2:
          return B(v({}, e), { internetRequired: s });
        default:
          return e;
      }
    },
    D2 = (e) => e.settings.name,
    N2 = (e) => e.settings.isSetup,
    R2 = (e) => e.settings.location,
    P2 = (e) => e.settings.timezone,
    U2 = (e) => e.settings.skipTimezoneAutoUpdate,
    k2 = (e) => e.settings,
    O2 = (e) => e.settings.sendDiagnostics,
    q2 = (e) => e.settings.isInternalUser,
    F2 = (e) => e.settings.disableSshOnStart,
    L2 = (e) => e.settings.internetRequired;
  My.exports = {
    reducer: C2,
    initialState: Ly,
    getName: D2,
    getIsSetup: N2,
    getLocation: R2,
    getTimezone: P2,
    getSkipTimezoneAutoUpdate: U2,
    getSettings: k2,
    getSendDiagnostics: O2,
    getIsInternalUser: q2,
    getDisableSshOnStart: F2,
    getInternetRequired: L2,
  };
});
var xy,
  M2,
  $y,
  By,
  dd = x(() => {
    (xy = g(Z())),
      (M2 = {
        info: {},
        download: { average: 0 },
        upload: { average: 0 },
        latency: { current: 0 },
        startTime: 0,
      }),
      ($y = (e = M2, t) => {
        let { type: r, payload: s } = t;
        switch (r) {
          case xy.SPEED_TEST_FINISHED:
            return s;
          default:
            return e;
        }
      }),
      (By = (e) => e.speedTest);
  });
var cr = w(($fe, Vy) => {
  Vy.exports = {
    DEFAULT_SSH_USERNAME: "root",
    DEFAULT_SSH_PASSWORD: "ubnt",
    PRIMARY_ROLE: "primary",
    SECONDARY_ROLE: "secondary",
    SUPPORTED_APPLICATION_NAMES: ["protect"],
    PING_INTERVAL_MS: 20 * 1e3,
    PONG_TIMEOUT_MS: 10 * 1e3,
  };
});
var ld = w((Vfe, jy) => {
  var { combineReducers: Bfe } = require("redux"),
    { PRIMARY_ROLE: x2, SECONDARY_ROLE: $2 } = cr(),
    {
      ADOPT_SECONDARY: B2,
      DESTROY_STACK: V2,
      JOIN_STACK: j2,
      SET_PRIMARY_FINGERPRINT: G2,
      SET_SECONDARY_CONNECTED: H2,
      SET_SECONDARY_DISCONNECTED: W2,
      SET_SECONDARY_FINGERPRINT: K2,
      SET_SECONDARY_IS_SETUP: Y2,
      UPDATE_PRIMARY_HOST: z2,
    } = Z(),
    J2 = (e = {}, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case V2:
          return {};
        case B2: {
          let { ip: a, mac: o } = s;
          return {
            role: x2,
            secondaryIsSetup: !1,
            secondaryState: "init",
            secondaryIp: a,
            secondaryMac: o,
          };
        }
        case H2:
          return B(v({}, e), { secondaryState: "connected" });
        case W2:
          return B(v({}, e), { secondaryState: "disconnected" });
        case Y2:
          return B(v({}, e), { secondaryIsSetup: !0 });
        case K2:
          return B(v({}, e), { secondaryFingerprint: s });
        case j2: {
          let { ip: a, mac: o, token: n } = s;
          return { role: $2, primaryIp: a, primaryMac: o, primaryToken: n };
        }
        case G2:
          return B(v({}, e), { primaryFingerprint: s, primaryToken: void 0 });
        case z2:
          return B(v({}, e), { primaryIp: s });
        default:
          return e;
      }
    },
    X2 = (e) => e.stackableConsole,
    Q2 = (e) => e.stackableConsole.role,
    Z2 = (e) => e.stackableConsole.primaryIp,
    eH = (e) => e.stackableConsole.primaryToken,
    tH = (e) => e.stackableConsole.primaryFingerprint,
    rH = (e) => e.stackableConsole.primaryMac,
    sH = (e) => e.stackableConsole.secondaryIsSetup,
    aH = (e) => e.stackableConsole.secondaryFingerprint,
    oH = (e) => e.stackableConsole.secondaryMac;
  jy.exports = {
    getStackableConsole: X2,
    getStackableConsoleRole: Q2,
    getPrimaryIp: Z2,
    getPrimaryToken: eH,
    getPrimaryFingerprint: tH,
    getPrimaryMac: rH,
    getSecondaryIsSetup: sH,
    getSecondaryFingerprint: aH,
    getSecondaryMac: oH,
    reducer: J2,
  };
});
var pd = w((jfe, Hy) => {
  var { combineReducers: nH } = require("redux"),
    {
      UPDATE_SYSTEM_INFO: iH,
      UPDATE_HAS_INTERNET: cH,
      UPDATE_DEVICE_STATE: Gy,
      UPDATE_PUBLIC_IP: uH,
      ISP_INFO_CHANGED: dH,
      DNS_IP_CHANGED: lH,
      LAN_IP_CHANGED: pH,
      SET_IS_UNIFI_SELF_SIGNED_CERTIFICATE: mH,
      SET_DIRECT_CONNECT_DOMAIN: fH,
      UPDATE_CLOUD_CONNECTED: hH,
      UPDATE_SYSTEM_IS_STARTED: yH,
      UPDATE_SYSTEM_IS_STACKED: wH,
    } = Z(),
    { deviceStates: gH } = Ot(),
    EH = (e = {}, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case iH:
          return v({}, s);
        default:
          return e;
      }
    },
    SH = (e = gH.NOT_SETUP, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case Gy:
          return s;
        default:
          return e;
      }
    },
    bH = (e = null, t) => {
      let { type: r } = t;
      switch (r) {
        case Gy:
          return Math.round(Date.now() / 1e3);
        default:
          return e;
      }
    },
    _H = (e = !1, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case cH:
          return s;
        default:
          return e;
      }
    },
    TH = (e = null, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case uH:
          return s;
        default:
          return e;
      }
    },
    IH = (e = null, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case dH:
          return s;
        default:
          return e;
      }
    },
    AH = (e = null, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case lH:
          return s;
        default:
          return e;
      }
    },
    vH = (e = null, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case pH:
          return s;
        default:
          return e;
      }
    },
    CH = (e = null, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case mH:
          return s;
        default:
          return e;
      }
    },
    DH = (e = null, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case fH:
          return s;
        default:
          return e;
      }
    },
    NH = (e = !1, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case hH:
          return s;
        default:
          return e;
      }
    },
    RH = (e = !1, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case yH:
          return s;
        default:
          return e;
      }
    },
    PH = (e = !1, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case wH:
          return s;
        default:
          return e;
      }
    },
    UH = (e) => e.system,
    kH = (e) => e.system.cloudConnected,
    OH = (e) => e.system.isStarted,
    qH = (e) => e.system.info,
    FH = (e) => e.system.ispInfo,
    LH = (e) => e.system.hasInternet,
    MH = (e) => e.system.deviceState,
    xH = (e) => e.system.deviceStateLastChanged,
    $H = (e) => e.system.publicIp,
    BH = (e) => e.system.info.features || {},
    VH = (e) => e.system.isUnifiSelfSignedCertificate,
    jH = (e) => e.system.directConnectDomain || null,
    GH = (e) => e.system.isStacked;
  Hy.exports = {
    reducer: nH({
      info: EH,
      hasInternet: _H,
      deviceState: SH,
      deviceStateLastChanged: bH,
      publicIp: TH,
      isUnifiSelfSignedCertificate: CH,
      directConnectDomain: DH,
      cloudConnected: NH,
      isStarted: RH,
      isStacked: PH,
      ispInfo: IH,
      dnsIp: AH,
      lanIp: vH,
    }),
    getSystem: UH,
    getSystemInfo: qH,
    getIspInfo: FH,
    getHasInternet: LH,
    getDeviceState: MH,
    getDeviceStateLastChanged: xH,
    getPublicIp: $H,
    getFeatures: BH,
    getIsUnifiSelfSignedCertificate: VH,
    getDirectConnectDomain: jH,
    getCloudConnected: kH,
    getSystemIsStarted: OH,
    getSystemIsStacked: GH,
  };
});
var md = w((Gfe, Wy) => {
  var { SET_DEVICE_TOPOLOGY: HH } = Z(),
    WH = { edges: [], vertices: [], type: "default" },
    KH = (e = WH, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case HH:
          return s;
        default:
          return e;
      }
    },
    YH = (e) => e.topology;
  Wy.exports = { reducer: KH, getDeviceTopology: YH };
});
var fd = w((Hfe, Ky) => {
  var { UPDATE_USER_DATA: zH } = Z(),
    JH = {},
    XH = (e) => e.userData,
    QH = (e = JH, t) => {
      let { type: r, payload: s } = t;
      switch (r) {
        case zH:
          return s;
        default:
          return e;
      }
    };
  Ky.exports = { reducer: QH, getUserData: XH };
});
var H = w((Kfe, tw) => {
  var Yy = g(require("handoff")),
    Qt = g($u()),
    Ts = g(ju()),
    zy = g(Gu()),
    Ea = g(Hu()),
    Jy = g(Wu()),
    Sa = g(Ku()),
    rt = g(nd()),
    Xy = g(id()),
    Qy = g(cd()),
    nt = g(ud());
  dd();
  var pt = g(ld()),
    Fe = g(pd()),
    Zy = g(md()),
    ew = g(fd()),
    ZH =
      (e) =>
      (...t) =>
        (0, Yy.publish)("redux.select", e, ...t),
    e4 = {
      getApp: Qt.getApp,
      getApps: Qt.getApps,
      getControllers: Qt.getControllers,
      getName: nt.getName,
      getJwtSecret: Xy.getJwtSecret,
      getSystem: Fe.getSystem,
      getSystemInfo: Fe.getSystemInfo,
      getIsSetup: nt.getIsSetup,
      getLocation: nt.getLocation,
      getTimezone: nt.getTimezone,
      getSkipTimezoneAutoUpdate: nt.getSkipTimezoneAutoUpdate,
      getSettings: nt.getSettings,
      getHasInternet: Fe.getHasInternet,
      getCloudConnected: Fe.getCloudConnected,
      getSystemIsStarted: Fe.getSystemIsStarted,
      getCloudInvites: Ea.getCloudInvites,
      getSpeedTestResult: By,
      getCloudSettings: Ea.getCloudSettings,
      getRemoteAccessEnabled: Ea.getRemoteAccessEnabled,
      getFirmware: rt.getFirmware,
      getFWDownloadProgress: rt.getFWDownloadProgress,
      getFWLatestAvailable: rt.getFWLatestAvailable,
      getFWLatestAvailableVersion: rt.getFWLatestAvailableVersion,
      getFWLatestAvailableForChannel: rt.getFWLatestAvailableForChannel,
      getFWUpdateSchedule: rt.getFWUpdateSchedule,
      getFWApiToken: rt.getFWApiToken,
      getFWReleaseChannel: rt.getFWReleaseChannel,
      getAptCreds: rt.getAptCreds,
      getDeviceState: Fe.getDeviceState,
      getDeviceStateLastChanged: Fe.getDeviceStateLastChanged,
      getFWLatestUpdateCheck: rt.getFWLatestUpdateCheck,
      getFWUpdatingInfo: rt.getFWUpdatingInfo,
      getPublicIp: Fe.getPublicIp,
      getIspInfo: Fe.getIspInfo,
      getUnadoptedUnifiOSDevices: Sa.getUnadoptedUnifiOSDevices,
      getDisabledApps: Qt.getDisabledApps,
      getIsInternalUser: nt.getIsInternalUser,
      getDisableSshOnStart: nt.getDisableSshOnStart,
      getInternetRequired: nt.getInternetRequired,
      getSendDiagnostics: nt.getSendDiagnostics,
      isRestoreInProgress: Ts.isRestoreInProgress,
      getBackup: Ts.getBackup,
      getFeatures: Fe.getFeatures,
      getUnhiddenApps: Qt.getUnhiddenApps,
      getSsoIdFromRestore: Ts.getSsoIdFromRestore,
      getRestoreProgress: Ts.getRestoreProgress,
      getIsUnifiSelfSignedCertificate: Fe.getIsUnifiSelfSignedCertificate,
      getDirectConnectDomain: Fe.getDirectConnectDomain,
      getDeviceList: Jy.getDeviceList,
      getClients: zy.getClients,
      getConsolesOnSameLocalNetwork: Sa.getConsolesOnSameLocalNetwork,
      getUnadoptedWirelessDevices: Sa.getUnadoptedWirelessDevices,
      getDeviceTopology: Zy.getDeviceTopology,
      getAvailableUpdates: Qt.getAvailableUpdates,
      getUserData: ew.getUserData,
      getPrimaryFingerprint: pt.getPrimaryFingerprint,
      getPrimaryIp: pt.getPrimaryIp,
      getPrimaryMac: pt.getPrimaryMac,
      getPrimaryToken: pt.getPrimaryToken,
      getSecondaryFingerprint: pt.getSecondaryFingerprint,
      getSecondaryIsSetup: pt.getSecondaryIsSetup,
      getSecondaryMac: pt.getSecondaryMac,
      getStackableConsole: pt.getStackableConsole,
      getStackableConsoleRole: pt.getStackableConsoleRole,
      getSecondaryConsoles: Qy.getSecondaryConsoles,
      getSystemIsStacked: Fe.getSystemIsStacked,
    },
    t4 = (e) =>
      Object.fromEntries(Object.entries(e).map(([t, r]) => [t, ZH(r)])),
    r4 = t4(e4);
  tw.exports = r4;
});
var gd = {};
lt(gd, {
  getApplicationMeta: () => yd,
  getConsoleMeta: () => br,
  getNetworkSetupMeta: () => wd,
});
var hd,
  Co,
  s4,
  br,
  yd,
  wd,
  Do = x(() => {
    (hd = g(require("handoff"))),
      (Co = g(H())),
      (s4 = async () => {
        let [e, t] = await Promise.all([
            (0, hd.publish)("system.info"),
            (0, Co.getIsInternalUser)(),
          ]),
          { hardware: r, anonymous_device_id: s } = e,
          { firmwareVersion: a, shortname: o } = r;
        return {
          model: o,
          firmware_version: a,
          anonymous_device_id: s,
          is_internal: t,
        };
      }),
      (br = async (e) => {
        let t = await s4();
        return v(
          B(v({}, t), {
            console_model: t.model,
            console_firmware_version: t.firmware_version,
            anonymous_console_id: t.anonymous_device_id,
          }),
          e
        );
      }),
      (yd = async (e, t) => {
        let s = (await (0, Co.getControllers)()).find((n) => n.name === e);
        if (!s) throw new Error(`Application "${e}" not found`);
        let a = await br();
        return v(
          B(v({}, a), {
            application: e,
            application_version: s.version,
            anonymous_application_id: a.anonymous_device_id,
          }),
          t
        );
      }),
      (wd = async (e, t, r) => {
        let [s, a] = await Promise.all([
            (0, hd.publish)("system.info"),
            (0, Co.getIsInternalUser)(),
          ]),
          {
            hardware: o,
            anonymous_device_id: n,
            isSetup: i,
            hasUCare: c = null,
          } = s,
          { firmwareVersion: d, shortname: u } = o;
        return v(
          {
            model: u,
            firmware_version: d,
            anonymous_device_id: n,
            is_internal: a,
            version: d,
            board_rev: o.hwrev,
            is_default: i,
            unifi_core_version: e.version,
            browser_ua: r,
            install_type: "WEBUI",
            unifi_care: c,
          },
          t
        );
      });
  });
var ur = {};
lt(ur, {
  traceApplicationEvent: () => ai,
  traceError: () => a4,
  traceUCoreEvent: () => si,
  traceUiDbMissingData: () => o4,
});
var No,
  si,
  ai,
  a4,
  o4,
  jt = x(() => {
    No = g(require("handoff"));
    Do();
    (si = async ({
      eventName: e,
      success: t,
      triggeredBy: r,
      errorMessage: s,
      params: a,
    }) => {
      let o = await br();
      await (0, No.publish)("trace", {
        namespace: "unifi:core:events",
        type: "report",
        payload: {
          event_name: e,
          success: t,
          triggered_by: r,
          error_message: s,
          params: a,
        },
        meta: o,
      });
    }),
      (ai = async (
        {
          eventName: e,
          success: t,
          triggeredBy: r,
          errorMessage: s,
          params: a,
        },
        o
      ) => {
        let n = await yd(o);
        await (0, No.publish)("trace", {
          namespace: "unifi:core:events",
          type: "report",
          payload: {
            event_name: e,
            success: t,
            triggered_by: r,
            error_message: s,
            params: a,
          },
          meta: n,
        });
      }),
      (a4 = async ({ type: e, message: t, stackTrace: r, version: s }) => {
        let a = await br({ unifi_core_version: s });
        // await (0, No.publish)("trace", {
        //   namespace: "unifi:core:error",
        //   type: e,
        //   payload: { message: t, stack: r },
        //   meta: a,
        // });
      }),
      (o4 = async ({
        type: e,
        guid: t,
        firmwareVersion: r,
        deviceTriplet: s,
      }) => {
        let a = await br();
        await (0, No.publish)("trace", {
          namespace: "unifi:network:firmware:event",
          type: e,
          payload: B(v({ guid: t }, s), { fw_version: r }),
          meta: a,
        });
      });
  });
var sw = w((Jfe, rw) => {
  var n4 = require("winston-transport"),
    { traceError: i4 } = (jt(), ur),
    c4 = version => {
      let t =
        type =>
        async (message, stackTrace = "") => {
          try {
            return await i4({ type, message, stackTrace, version });
          } catch (o) {
            // console.error("Error during trace:error publish", o);
          }
        };
      return { error: t("error"), crash: t("crash") };
    };
  rw.exports = class extends n4 {
    constructor(t = {}) {
      super(t);
      this.analytics = c4(t.options.version);
    }
    log(t, r, s = {}) {
      if ((setImmediate(() => this.emit("logged", t)), t === "error"))
        if (r === "uncaughtException" || r === "unhandledRejection")
          if (s.message || s.stack) {
            let { message: a = "", code: o = "", stack: n = "" } = s;
            return this.analytics.crash(`${r}:${o} ${a}`, n);
          } else this.analytics.crash(`${r}`);
        else return this.analytics.error(r || s.message, s.stack);
    }
  };
});
var iw = w((Xfe, nw) => {
  "use strict";
  var u4 = require("cycle"),
    aw = require("util"),
    Ed = require("winston/lib/winston/common"),
    Sd = require("colors/safe"),
    ow = {
      error: ["red", "bold"],
      warn: ["yellow", "bold"],
      info: ["green", "white"],
      verbose: ["grey", "grey"],
      debug: ["cyan", "cyan"],
      silly: ["blue", "blue"],
    },
    d4 = (e, t) => Sd[ow[e][0]](t),
    bd = (e, t) => Sd[ow[e][1]](t);
  nw.exports = (e) => {
    if (e.colorize !== !0)
      return Ed.log(Object.assign({}, e, { formatter: null }));
    let t = typeof e.timestamp == "function" ? e.timestamp : Ed.timestamp,
      r = e.timestamp ? t() : null,
      s;
    e.meta !== null && e.meta !== void 0 && !e.meta.stack
      ? (s = Ed.clone(u4.decycle(e.meta)))
      : (s = e.meta || null);
    let a = e.message;
    if (s && s.stack && !s.stackTrace) {
      let n = s.stack.split(`
`),
        i = s.details;
      (a = (a || "") + " " + n.shift()),
        (s =
          `
` +
          n.join(`
`)),
        i &&
          ((s += `
`),
          (s += bd(
            e.level,
            aw.inspect(i, {
              showHidden: !1,
              depth: e.depth || null,
              colors: !0,
            })
          ))),
        delete s.details,
        delete s.message;
    }
    if (s && s.stackTrace) {
      let n = `Native error: ${s.message}`;
      a
        ? (a += `
${n}`)
        : (a = n),
        delete s.message;
    }
    let o = [
      `${Sd.grey(r)} - `,
      e.label ? `${d4(e.level, "[" + e.label + "]")} : ` : "",
      `${bd(e.level, a)}`,
    ];
    return (
      s !== null &&
        (typeof s != "object"
          ? o.push(` ${s}`)
          : Object.keys(s).length > 0 &&
            o.push(
              ` 
` +
                bd(
                  e.level,
                  aw.inspect(s, {
                    showHidden: !1,
                    depth: e.depth || null,
                    colors: !0,
                  })
                )
            )),
      o.join("")
    );
  };
});
var lw = w((ehe, dw) => {
  "use strict";
  var Qfe = require("os"),
    cw = require("fs-extra"),
    oi = require("path"),
    l4 = require("merge"),
    p4 = require("moment-timezone"),
    Ro = require("winston"),
    m4 = sw(),
    f4 = 5 * 1024 * 1024,
    h4 = 3,
    ba = () => p4().toISOString(),
    uw = iw(),
    Po = ["error", "warn", "info", "verbose", "debug", "silly"],
    y4 = { maxLogSize: f4, maxLogFiles: h4, levels: { default: "info" } };
  dw.exports = class {
    constructor(t) {
      (this.config = l4({}, y4, t)),
        (this.dir = oi.resolve(this.config.dir)),
        (this.namespaces = {}),
        (this.transports = {}),
        (this.container = new Ro.Container()),
        this.config.enableConsole &&
          this.container.add("default", {
            console: {
              level: this.getLevel(this.config.levels.default),
              colorize: !0,
              label: "app",
              formatter: uw,
              timestamp: ba,
              prettyPrint: !0,
            },
          }),
        (this.transports["service.all"] = new Ro.transports.File({
          level: this.getLevel(this.config.levels.default),
          name: "service.all",
          filename: oi.join(this.dir, "service.log"),
          options: { mode: 493, flags: "a" },
          prettyPrint: !0,
          json: !1,
          tailable: !0,
          maxsize: this.config.maxLogSize,
          maxFiles: this.config.maxLogFiles,
          timestamp: ba,
        })),
        (this.transports["service.errors"] = new Ro.transports.File({
          level: "error",
          name: "service.errors",
          filename: oi.join(this.dir, "errors.log"),
          options: { mode: 493, flags: "a" },
          prettyPrint: !0,
          json: !1,
          tailable: !0,
          maxsize: this.config.maxLogSize,
          maxFiles: this.config.maxLogFiles,
          timestamp: ba,
        })),
        (this.transports["analytics.errors"] = new m4({
          level: "error",
          name: "analytics.errors",
          options: { version: this.config.version },
          prettyPrint: !0,
          json: !1,
          timestamp: ba,
        })),
        cw.mkdirsSync(this.dir);
    }
    log(t, ...r) {
      return this.getNamespaceLevel(t) >= Po.indexOf(r[0])
        ? typeof r[1] == "function"
          ? (r[1]((...s) => this.getNamespace(t).log(r[0], ...s)), !0)
          : (r.length > 1 && this.getNamespace(t).log(...r), !0)
        : !1;
    }
    critical(t, ...r) {
      return this.log(t, "error", ...r);
    }
    isLevelEnabled(t, r) {
      if (!Po.includes(r))
        throw new Error(`Requested log level "${r}" does not exist`);
      return this.getNamespaceLevel(t) >= Po.indexOf(r);
    }
    wrap(t, r = {}) {
      let s = {
        namespace: t,
        root: this,
        addNamespace: (...a) => this.addNamespace(...a),
        log: (...a) => this.log(...a),
        wrap: (...a) => this.wrap(...a),
        critical: (...a) => this.critical(t, ...a),
      };
      return (
        Po.forEach((a) => {
          (s[a] = (...o) => this.log(t, a, ...o)),
            (s[a].isEnabled = () => this.isLevelEnabled(t, a));
        }),
        r.dir && cw.mkdirsSync(r.dir),
        this.addNamespace(t, r),
        s
      );
    }
    getLevel(t) {
      return (
        t == null && (t = this.config.levels.default || 2),
        (t = parseInt(t, 10)),
        isNaN(t) ? t : Po[t]
      );
    }
    getNamespaceLevel(t) {
      return this.config.levels[t] || this.config.levels.default;
    }
    getNamespace(t) {
      return (t = t || "default"), this.namespaces[t] || this.addNamespace(t);
    }
    addNamespace(t, r = {}) {
      let s = this.config.levels[t] || this.config.levels.default;
      return (
        r.level || (r.level = s),
        r.filename || (r.filename = t + ".log"),
        r.dir || (r.dir = this.dir),
        (!r.transports ||
          r.transports === "*" ||
          (Array.isArray(r.transports) && r.transports.includes("*"))) &&
          ((r.transports = ["service.all", "service.errors", "file"]),
          this.config.enableConsole && r.transports.push("console"),
          this.config.enableErrorsAnalytics &&
            r.transports.push("analytics.errors")),
        this.configure(t, r)
      );
    }
    configure(t, r) {
      let s = [];
      r.transports.forEach((o) => {
        this.transports[o]
          ? s.push(this.transports[o])
          : o === "console"
          ? s.push(
              new Ro.transports.Console({
                level: this.getLevel(r.level),
                colorize: !0,
                label: t,
                timestamp: ba,
                prettyPrint: !0,
                formatter: uw,
              })
            )
          : o === "file" &&
            s.push(
              new Ro.transports.File({
                level: this.getLevel(r.level),
                prettyPrint: !0,
                json: !1,
                tailable: !0,
                maxsize: this.config.maxLogSize,
                maxFiles: this.config.maxLogFiles,
                timestamp: ba,
                options: { mode: 493, flags: "a" },
                filename: oi.join(r.dir, r.filename),
              })
            );
      });
      let a = this.container.add(t, { transports: s });
      return (this.namespaces[t] = a), a;
    }
  };
});
var pw = {};
lt(pw, { default: () => Te });
function w4(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "message" in e &&
    typeof e.message == "string"
  );
}
function g4(e) {
  if (w4(e)) return e;
  try {
    return new Error(JSON.stringify(e));
  } catch {
    return new Error(String(e));
  }
}
function Te(e) {
  return g4(e).message;
}
var qt = x(() => {});
function mw(e) {
  (Uo = e.config), (st = e.logger);
}
var Uo,
  st,
  Ws = x(() => {});
var fw,
  yt,
  Kr = x(() => {
    Ws();
    (fw = class {
      constructor(t, r) {
        this.ResponseInstance = t;
        this.stream = r;
      }
      async send(t) {
        let r = new this.ResponseInstance();
        try {
          await t(r), this.stream.write(r);
        } catch (s) {
          st.error("Failed to send gRPC stream:", s);
        }
      }
    }),
      (yt = class {
        constructor(t) {
          this.ResponseInstance = t;
          this._subscribers = new Map();
        }
        get subscribers() {
          return this._subscribers;
        }
        addSubscriber(t) {
          let r = new fw(this.ResponseInstance, t),
            s = t.getPeer();
          return (
            st.debug(`New subscription, peer="${s}"`),
            this._subscribers.set(s, r),
            t.on("cancelled", () => {
              st.debug(`Subscriber connection canceled, peer="${s}"`),
                t.end(),
                this._subscribers.delete(s);
            }),
            t.once("close", () => {
              st.debug(`Subscriber connection closed, peer="${s}"`),
                t.end(),
                this._subscribers.delete(s);
            }),
            t.on("finish", () => {
              st.debug(`Subscriber connection finished, peer="${s}"`),
                t.end(),
                this._subscribers.delete(s);
            }),
            t.on("error", (a) => {
              st.error(
                `Received error for subscription, peer="${s}", error:`,
                a
              ),
                t.end(),
                this._subscribers.delete(s);
            }),
            r
          );
        }
        async publish(t) {
          if (this._subscribers.size === 0) {
            st.debug("No active subscribers, skip the message publish");
            return;
          }
          let r;
          for (let [s, a] of this._subscribers.entries()) {
            if (a.stream.cancelled) {
              st.debug(
                `Publishing to canceled subscriber "${s}", remove explicitly`
              ),
                a.stream.end(),
                this._subscribers.delete(s);
              continue;
            }
            r || ((r = new this.ResponseInstance()), await t(r)),
              a.stream.write(r);
          }
        }
        async end() {
          for (let [, t] of this.subscribers.entries()) t.stream.end();
        }
      });
  });
function _d(e) {
  switch (e) {
    case Ne.NETWORK:
      return Dt.default.ApplicationName.APPLICATION_NAME_NETWORK;
    case Ne.PROTECT:
      return Dt.default.ApplicationName.APPLICATION_NAME_PROTECT;
    case Ne.TALK:
      return Dt.default.ApplicationName.APPLICATION_NAME_TALK;
    case Ne.ACCESS:
      return Dt.default.ApplicationName.APPLICATION_NAME_ACCESS;
    case Ne.CONNECT:
      return Dt.default.ApplicationName.APPLICATION_NAME_CONNECT;
    case Ne.UID:
      return Dt.default.ApplicationName.APPLICATION_NAME_UID;
    default:
      return Dt.default.ApplicationName.APPLICATION_NAME_UNSPECIFIED;
  }
}
async function Td(e) {
  return Promise.all(
    e.map(async (t) => {
      let r = new Dt.default.Application();
      if ((r.setName(_d(t.name)), r.setState(E4(t)), t.version)) {
        let s = await S4(t);
        r.setVersion(s);
      }
      return r;
    })
  );
}
function E4(e) {
  let { isConfigured: t, isInstalled: r, isRunning: s, installState: a } = e;
  return a === To.UPDATING
    ? Dt.default.ApplicationState.APPLICATION_STATE_UPDATING
    : r
    ? t
      ? s
        ? Dt.default.ApplicationState.APPLICATION_STATE_RUNNING
        : Dt.default.ApplicationState.APPLICATION_STATE_STOPPED
      : Dt.default.ApplicationState.APPLICATION_STATE_NOT_SETUP
    : Dt.default.ApplicationState.APPLICATION_STATE_NOT_INSTALLED;
}
async function S4(e) {
  let t = new Dt.default.ApplicationVersionInfo();
  t.setCurrent(e.version);
  let s = (await (0, hw.getAvailableUpdates)())[e.name];
  return s && t.setUpdatableTo(s), t;
}
var Dt,
  hw,
  Id = x(() => {
    (Dt = g(
      require("@ubnt/unifi-protobufs/unifi/core/application/v1/types_pb")
    )),
      (hw = g(H()));
    Re();
  });
async function _4(e) {
  let t = await (0, ii.getControllers)(),
    r = await Td(t);
  e.setApplicationsList(r);
}
function ww(e) {
  return async function (t) {
    let r = await (0, ii.getApp)(e),
      s = await Td([r]);
    t.setApplicationsList(s);
  };
}
function gw(e) {
  let { name: t, updates: r } = e;
  if (!Object.values(Ne).includes(t)) return;
  Object.keys(r).some((o) => b4.includes(o)) && Ad.publish(ww(t));
}
async function Ew() {
  return [
    function* () {
      yield (0, ni.takeEvery)(_r.UPDATE_APP, async (e) => {
        let { payload: t } = e;
        gw(t);
      });
    },
    function* () {
      yield (0, ni.takeEvery)(_r.BATCH_UPDATE_APPS, async (e) => {
        let { payload: t } = e;
        t.forEach(gw);
      });
    },
    function* () {
      yield (0, ni.takeEvery)(
        [_r.DISABLE_APP, _r.ENABLE_APP, _r.REMOVE_APP],
        async (e) => {
          let { payload: t } = e;
          Object.values(Ne).includes(t.name) && Ad.publish(ww(t.name));
        }
      );
    },
  ];
}
async function Sw(e) {
  await Ad.addSubscriber(e).send(_4);
}
var yw,
  ni,
  _r,
  ii,
  b4,
  Ad,
  bw = x(() => {
    (yw = g(require("@ubnt/unifi-protobufs/unifi/core/application/v1/api_pb"))),
      (ni = g(require("redux-saga/effects")));
    Kr();
    (_r = g(Z())), (ii = g(H()));
    Re();
    Id();
    (b4 = [
      "isConfigured",
      "isInstalled",
      "isRunning",
      "installState",
      "version",
      "updateable",
      "updateAvailable",
    ]),
      (Ad = new yt(yw.default.ApplicationsResponse));
  });
async function Tw() {
  return [...(await Ew())];
}
var vd,
  _w,
  Iw = x(() => {
    vd = g(
      require("@ubnt/unifi-protobufs/unifi/core/application/v1/api_grpc_pb")
    );
    bw();
    _w = { applications: Sw };
  });
var Ks,
  Aw = x(() => {
    (function (a) {
      (a.WIRED = "WIRED"),
        (a.WIRELESS = "WIRELESS"),
        (a.VPN = "VPN"),
        (a.TELEPORT = "TELEPORT");
    })(Ks || (Ks = {}));
  });
function Cd(e) {
  return e.map((t) => {
    let r = new Tr.Client();
    return (
      r.setDisplayName(t.display_name),
      r.setIp(t.ip),
      r.setMac(t.mac),
      r.setType(T4(t.type)),
      t.metadata && r.setStats(I4(t.metadata)),
      r
    );
  });
}
function T4(e) {
  switch (e) {
    case Ks.WIRED:
      return Tr.ClientType.CLIENT_TYPE_WIRED;
    case Ks.WIRELESS:
      return Tr.ClientType.CLIENT_TYPE_WIRELESS;
    case Ks.VPN:
      return Tr.ClientType.CLIENT_TYPE_VPN;
    case Ks.TELEPORT:
      return Tr.ClientType.CLIENT_TYPE_TELEPORT;
    default:
      return Tr.ClientType.CLIENT_TYPE_UNSPECIFIED;
  }
}
function I4(e) {
  let t = new Tr.ClientStats();
  return (
    t.setAccumulativeRxBytes(e.rx_bytes),
    t.setRxBytesPerSecond(e["rx_bytes-r"]),
    t.setRxPackets(e.rx_packets),
    t.setAccumulativeTxBytes(e.tx_bytes),
    t.setTxBytesPerSecond(e["tx_bytes-r"]),
    t.setTxPackets(e.tx_packets),
    e.wifi_experience_score &&
      t.setWifiExperienceScore(e.wifi_experience_score),
    t
  );
}
var Tr,
  vw = x(() => {
    Tr = g(require("@ubnt/unifi-protobufs/unifi/network/types/v1/client_pb"));
    Aw();
  });
async function A4(e) {
  e.setType(Yr.ClientsResponseType.CLIENTS_RESPONSE_TYPE_UPDATE);
  let t = await (0, Dw.getClients)(),
    r = new Yr.UpdateClientsPayload();
  r.setClientsList(Cd(t)), e.setUpdatePayload(r);
}
function v4(e) {
  return async function (t) {
    t.setType(Yr.ClientsResponseType.CLIENTS_RESPONSE_TYPE_UPDATE);
    let r = new Yr.UpdateClientsPayload();
    r.setClientsList(Cd(e)), t.setUpdatePayload(r);
  };
}
function C4(e) {
  return async function (t) {
    t.setType(Yr.ClientsResponseType.CLIENTS_RESPONSE_TYPE_REMOVE);
    let r = new Yr.RemoveClientsPayload();
    r.setMacsList(e), t.setRemovePayload(r);
  };
}
async function Nw() {
  return [
    function* () {
      yield (0, Dd.takeEvery)(ci.UPDATE_CLIENTS, async (e) => {
        let {
          payload: { clients: t },
        } = e;
        Nd.publish(v4(t));
      });
    },
    function* () {
      yield (0, Dd.takeEvery)(ci.REMOVE_CLIENTS, async (e) => {
        let { payload: t } = e;
        Nd.publish(C4(t));
      });
    },
  ];
}
async function Rw(e) {
  await Nd.addSubscriber(e).send(A4);
}
var Cw,
  Yr,
  Dd,
  ci,
  Dw,
  Nd,
  Pw = x(() => {
    (Cw = g(
      require("@ubnt/unifi-protobufs/unifi/core/application_proxy/v1/api_pb")
    )),
      (Yr = g(
        require("@ubnt/unifi-protobufs/unifi/network/types/v1/client_pb")
      )),
      (Dd = g(require("redux-saga/effects")));
    Kr();
    (ci = g(Z())), (Dw = g(H()));
    vw();
    Nd = new yt(Cw.NetworkClientsResponse);
  });
var Is,
  dr,
  ko,
  lr,
  Uw = x(() => {
    (function (o) {
      (o.UNKNOWN = "Unknown"),
        (o.CHARGING = "Charging"),
        (o.DISCARGING = "Discharging"),
        (o.NOT_CHARGING = "Not Charging"),
        (o.FULL = "Full");
    })(Is || (Is = {}));
    (function (c) {
      (c.UNKNOWN = "Unknown"),
        (c.GOOD = "Good"),
        (c.OVERHEAT = "Overheat"),
        (c.DEAD = "Dead"),
        (c.OVER_VOLTAGE = "Over voltage"),
        (c.UNSPECIFIED_FAILURE = "Unspecified failure"),
        (c.COLD = "Cold"),
        (c.OVER_CURRENT = "Over current");
    })(dr || (dr = {}));
    (function (r) {
      (r.WAN = "wan"), (r.LAN = "lan");
    })(ko || (ko = {}));
    (function (a) {
      (a[(a.SPEED_10 = 10)] = "SPEED_10"),
        (a[(a.SPEED_100 = 100)] = "SPEED_100"),
        (a[(a.SPEED_1_000 = 1e3)] = "SPEED_1_000"),
        (a[(a.SPEED_10_000 = 1e4)] = "SPEED_10_000");
    })(lr || (lr = {}));
  });
function kw(e) {
  let t = new le.Metadata();
  return (
    t.setWifiExperienceScore(e.wifiExperienceScore),
    t.setTotalClientCount(e.clientCount),
    t.setWiredClientCount(e.wiredClients),
    t.setWirelessClientCount(e.wirelessClients),
    t.setGuestClientCount(e.guestClients),
    e.portTable && t.setPortTableList(N4(e.portTable)),
    e.portProfiles && t.setPortProfilesList(D4(e.portProfiles)),
    e.psuTable && t.setPsuTableList(U4(e.psuTable)),
    e.temperatures && t.setTemperaturesList(q4(e.temperatures)),
    e.outletTable && t.setOutletTableList(F4(e.outletTable)),
    t
  );
}
function D4(e) {
  return e.map((t) => {
    let r = new le.PortProfile();
    return r.setId(t.id), r.setName(t.name), r;
  });
}
function N4(e) {
  return e.map((t) => {
    let r = new le.PortInfo();
    return (
      r.setName(t.name),
      r.setPoeCaps(t.poeCaps),
      r.setPoePower(t.poePower),
      r.setThroughputRxBytes(t.throughputRx),
      r.setThroughputTxBytes(t.throughputTx),
      r.setIsPlugged(t.up),
      r.setRxBitsPerSecond(Math.round(t.usageRx)),
      r.setTxBitsPerSecond(Math.round(t.usageTx)),
      r.setInterfaceName(t.ifname),
      r.setType(P4(t.type)),
      r.setSpeed(R4(t.speed, t.fullDuplex)),
      t.profileId && r.setProfileId(t?.profileId),
      r
    );
  });
}
function R4(e, t) {
  if (t)
    switch (e) {
      case lr.SPEED_10:
        return le.PortSpeed.PORT_SPEED_FDX_10;
      case lr.SPEED_100:
        return le.PortSpeed.PORT_SPEED_FDX_100;
      case lr.SPEED_1_000:
        return le.PortSpeed.PORT_SPEED_FDX_1_000;
      case lr.SPEED_10_000:
        return le.PortSpeed.PORT_SPEED_FDX_10_000;
      default:
        return le.PortSpeed.PORT_SPEED_UNSPECIFIED;
    }
  switch (e) {
    case lr.SPEED_10:
      return le.PortSpeed.PORT_SPEED_HDX_10;
    case lr.SPEED_100:
      return le.PortSpeed.PORT_SPEED_HDX_100;
    case lr.SPEED_1_000:
      return le.PortSpeed.PORT_SPEED_HDX_1_000;
    case lr.SPEED_10_000:
      return le.PortSpeed.PORT_SPEED_HDX_10_000;
    default:
      return le.PortSpeed.PORT_SPEED_UNSPECIFIED;
  }
}
function P4(e) {
  switch (e) {
    case ko.WAN:
      return le.PortType.PORT_TYPE_WAN;
    case ko.LAN:
      return le.PortType.PORT_TYPE_LAN;
    default:
      return le.PortType.PORT_TYPE_UNSPECIFIED;
  }
}
function U4(e) {
  return e.map((t) => {
    let r = new le.PsuInfo();
    return (
      r.setIndex(t.index),
      r.setLabel(t.label),
      r.setIsOnline(t.online),
      r.setType(t.psuType),
      r.setCapabilities(t.psuCaps),
      r.setVoltageVolts(t.voltage),
      r.setCurrentAmperes(t.current),
      r.setPowerWatts(t.power),
      r.setSensorTemperatureCelsius(t.temperature),
      r.setPowerNominalDesignWatts(t.powerNominalDesign),
      t.capacity && r.setBatteryCapacityPercent(t.capacity),
      t.energyFullDesign &&
        r.setBatteryEnergyFullDesignWattHours(t.energyFullDesign),
      t.chargeStatus && r.setBatteryChargeStatus(k4(t.chargeStatus)),
      t.health && r.setBatteryHealth(O4(t.health)),
      r
    );
  });
}
function k4(e) {
  switch (e) {
    case Is.CHARGING:
      return le.BatteryChargeStatus.BATTERY_CHARGE_STATUS_CHARGING;
    case Is.DISCARGING:
      return le.BatteryChargeStatus.BATTERY_CHARGE_STATUS_DISCHARGING;
    case Is.FULL:
      return le.BatteryChargeStatus.BATTERY_CHARGE_STATUS_FULL;
    case Is.NOT_CHARGING:
      return le.BatteryChargeStatus.BATTERY_CHARGE_STATUS_NOT_CHARGING;
    case Is.UNKNOWN:
      return le.BatteryChargeStatus.BATTERY_CHARGE_STATUS_UNKNOWN;
    default:
      return le.BatteryChargeStatus.BATTERY_CHARGE_STATUS_UNSPECIFIED;
  }
}
function O4(e) {
  switch (e) {
    case dr.COLD:
      return le.BatteryHealth.BATTERY_HEALTH_COLD;
    case dr.DEAD:
      return le.BatteryHealth.BATTERY_HEALTH_DEAD;
    case dr.GOOD:
      return le.BatteryHealth.BATTERY_HEALTH_GOOD;
    case dr.OVERHEAT:
      return le.BatteryHealth.BATTERY_HEALTH_OVERHEAT;
    case dr.OVER_CURRENT:
      return le.BatteryHealth.BATTERY_HEALTH_OVER_CURRENT;
    case dr.OVER_VOLTAGE:
      return le.BatteryHealth.BATTERY_HEALTH_OVER_VOLTAGE;
    case dr.UNKNOWN:
      return le.BatteryHealth.BATTERY_HEALTH_UNKNOWN;
    case dr.UNSPECIFIED_FAILURE:
      return le.BatteryHealth.BATTERY_HEALTH_UNSPECIFIED_FAILED;
    default:
      return le.BatteryHealth.BATTERY_HEALTH_UNSPECIFIED;
  }
}
function q4(e) {
  return e.map((t) => {
    let r = new le.TemperatureSensorReading();
    return r.setName(t.name), r.setValueCelsius(t.value), r.setType(t.type), r;
  });
}
function F4(e) {
  return e.map((t) => {
    let r = new le.OutletInfo();
    return (
      r.setIndex(t.index),
      r.setPowerWatts(t.power),
      r.setVoltageVolts(t.voltage),
      r.setCurrentAmperes(t.current),
      r
    );
  });
}
var le,
  Ow = x(() => {
    le = g(require("@ubnt/unifi-protobufs/unifi/network/types/v1/metadata_pb"));
    Uw();
  });
async function $w(e) {
  let { info: t, version: r } = await (0, Mw.getApp)("network");
  !t || (e.setApplicationVersion(r), e.setMetadata(kw(t)));
}
async function Bw() {
  return [
    function* () {
      yield (0, Fw.takeEvery)(Lw.UPDATE_APP, async (e) => {
        let { payload: t } = e;
        t.name === "network" && xw.publish($w);
      });
    },
  ];
}
async function Vw(e) {
  await xw.addSubscriber(e).send($w);
}
var qw,
  Fw,
  Lw,
  Mw,
  xw,
  jw = x(() => {
    (qw = g(
      require("@ubnt/unifi-protobufs/unifi/core/application_proxy/v1/api_pb")
    )),
      (Fw = g(require("redux-saga/effects")));
    Kr();
    (Lw = g(Z())), (Mw = g(H()));
    Ow();
    xw = new yt(qw.NetworkInfoResponse);
  });
var ie = w((Dhe, Ww) => {
  var L4 = require("node-fetch"),
    { merge: M4 } = require("lodash"),
    Gw = "UniFi-OS/3.0.51",
    Hw = { headers: { "User-Agent": Gw } },
    x4 = (e) => {
      e.shortname &&
        e.firmwareVersion &&
        (Hw.headers[
          "User-Agent"
        ] = `${Gw} (${e.shortname}; ${e.firmwareVersion})`);
    };
  Ww.exports = {
    extendFetchDefaultOptions: ({ hardware: e }) => {
      e && x4(e);
    },
    fetch: async (e, t = {}) => {
      let r = M4({}, Hw, t);
      return L4(e, r);
    },
  };
});
function Kw(e) {
  return e.map((t) => {
    let r = new Tt.TopologyEdge();
    if (
      (r.setDownlinkMac(t.downlinkMac),
      r.setUplinkMac(t.uplinkMac),
      r.setType($4(t.type)),
      t.downlinkPortNumber && r.setDownlinkPortNumber(t.downlinkPortNumber),
      t.uplinkPortNumber && r.setUplinkPortNumber(t.uplinkPortNumber),
      t.type === Oo.WIRED)
    )
      r.setWiredMetadata(B4(t.rateMbps));
    else {
      let s = t;
      r.setWirelessMetadata(V4(s));
    }
    return r;
  });
}
function $4(e) {
  switch (e) {
    case Oo.WIRED:
      return Tt.TopologyEdgeType.TOPOLOGY_EDGE_TYPE_WIRED;
    case Oo.WIRELESS:
      return Tt.TopologyEdgeType.TOPOLOGY_EDGE_TYPE_WIRELESS;
    default:
      return Tt.TopologyEdgeType.TOPOLOGY_EDGE_TYPE_UNSPECIFIED;
  }
}
function B4(e) {
  let t = new Tt.TopologyEdgeWiredMetadata();
  return t.setSpeedMegabitsPerSecond(e), t;
}
function V4(e) {
  let t = new Tt.TopologyEdgeWirelessMetadata();
  return (
    t.setTxMegabitsPerSecond(e.txRateMbps),
    t.setRxMegabitsPerSecond(e.rxRateMbps),
    t.setWifiExperienceScore(e.experienceScore),
    e.rssi && t.setRssi(e.rssi),
    e.essid && t.setEssid(e.essid),
    t
  );
}
function Yw(e) {
  return e.map((t) => {
    let r = new Tt.TopologyVertice();
    return (
      r.setMac(t.mac),
      r.setName(t.name),
      r.setIsUnifiDevice(t.unifiDevice),
      r.setType(j4(t.type)),
      t.model && r.setModel(t.model),
      t.modelSku && r.setModelSku(t.modelSku),
      t.iconFilename && r.setIconFilename(t.iconFilename),
      t.allowedInVisualProgramming &&
        r.setAllowedInVisualProgramming(t.allowedInVisualProgramming),
      t.wifiChannels && r.setWifiChannelsList(t.wifiChannels),
      r
    );
  });
}
function j4(e) {
  switch (e) {
    case ui.CLIENT:
      return Tt.TopologyVerticeType.TOPOLOGY_VERTICE_TYPE_CLIENT;
    case ui.DEVICE:
      return Tt.TopologyVerticeType.TOPOLOGY_VERTICE_TYPE_DEVICE;
    default:
      return Tt.TopologyVerticeType.TOPOLOGY_VERTICE_TYPE_UNSPECIFIED;
  }
}
var Tt,
  Oo,
  ui,
  zw = x(() => {
    Tt = g(require("@ubnt/unifi-protobufs/unifi/network/types/v1/topology_pb"));
    (function (r) {
      (r.WIRED = "WIRED"), (r.WIRELESS = "WIRELESS");
    })(Oo || (Oo = {}));
    (function (r) {
      (r.DEVICE = "DEVICE"), (r.CLIENT = "CLIENT");
    })(ui || (ui = {}));
  });
async function Qw(e, t) {
  let r = `http://127.0.0.1:${Uo.controllers.network.port}/v2/api/site/default/topology?includeClientModelData=true`;
  try {
    let s = await (0, Xw.fetch)(r, { timeout: 1e4 });
    if (!s.ok)
      throw new Error(
        `Failed to fetch topology data. Status: ${s.status} Reason: ${s.statusText}`
      );
    let a = await s.json(),
      o = new Jw.NetworkTopologyResponse();
    o.setEdgesList(Kw(a.edges)), o.setVerticesList(Yw(a.vertices)), t(null, o);
  } catch (s) {
    st.error("Failed to get topology data", s),
      t(
        new di.StatusBuilder()
          .withCode(di.status.INTERNAL)
          .withDetails("Failed to get topology data")
          .build(),
        null
      );
  }
}
var di,
  Jw,
  Xw,
  Zw = x(() => {
    (di = g(require("@grpc/grpc-js"))),
      (Jw = g(
        require("@ubnt/unifi-protobufs/unifi/core/application_proxy/v1/api_pb")
      )),
      (Xw = g(ie()));
    Ws();
    zw();
  });
async function tg() {
  return [...(await Nw()), ...(await Bw())];
}
var Rd,
  eg,
  rg = x(() => {
    Rd = g(
      require("@ubnt/unifi-protobufs/unifi/core/application_proxy/v1/api_grpc_pb")
    );
    Pw();
    jw();
    Zw();
    eg = { networkClients: Rw, networkInfo: Vw, networkTopology: Qw };
  });
var Ft,
  sg = x(() => {
    (function (p) {
      (p.NOT_READY = "notReady"),
        (p.ERROR = "error"),
        (p.NOT_SETUP = "notSetup"),
        (p.SETTING_UP = "settingUp"),
        (p.SETUP = "setup"),
        (p.REBOOTING = "rebooting"),
        (p.POWERING_OFF = "poweringOff"),
        (p.RESETTING_TO_DEFAULTS = "resettingToDefaults"),
        (p.WILL_UPGRADE = "willUpgrade"),
        (p.UPGRADING = "upgrading"),
        (p.UPDATE_AVAILABLE = "updateAvailable");
    })(Ft || (Ft = {}));
  });
function og(e) {
  switch (e) {
    case Ft.SETUP:
    case Ft.UPDATE_AVAILABLE:
      return Ke.default.State.STATE_RUNNING;
    case Ft.UPGRADING:
    case Ft.WILL_UPGRADE:
      return Ke.default.State.STATE_UPDATING;
    case Ft.NOT_READY:
      return Ke.default.State.STATE_STARTING_UP;
    case Ft.NOT_SETUP:
      return Ke.default.State.STATE_NOT_SETUP;
    case Ft.SETTING_UP:
      return Ke.default.State.STATE_FINISHING_SETUP;
    case Ft.REBOOTING:
      return Ke.default.State.STATE_RESTARTING;
    case Ft.POWERING_OFF:
      return Ke.default.State.STATE_SHUTTING_DOWN;
    case Ft.RESETTING_TO_DEFAULTS:
      return Ke.default.State.STATE_RESETTING;
    case Ft.ERROR:
    default:
      return Ke.default.State.STATE_UNSPECIFIED;
  }
}
function ng(e, t) {
  return e
    ? Ke.default.InternetConnectionState.INTERNET_CONNECTION_STATE_ONLINE
    : t
    ? Ke.default.InternetConnectionState.INTERNET_CONNECTION_STATE_ERROR
    : Ke.default.InternetConnectionState.INTERNET_CONNECTION_STATE_OFFLINE;
}
function ig(e) {
  if (!e.lat || !e.long) return;
  let t = new Ke.default.Location(),
    r = new ag.default.LatLng();
  return (
    r.setLatitude(e.lat),
    r.setLongitude(e.long),
    t.setCoords(r),
    t.setRadius(e.radius),
    e.text && t.setText(e.text),
    t
  );
}
function li(e) {
  switch (e) {
    case Hr.RELEASE:
      return Ke.default.ReleaseChannel.RELEASE_CHANNEL_OFFICIAL;
    case Hr.RELEASE_CANDIDATE:
      return Ke.default.ReleaseChannel.RELEASE_CHANNEL_RC;
    case Hr.BETA:
      return Ke.default.ReleaseChannel.RELEASE_CHANNEL_EA;
    case Hr.ALPHA:
      return Ke.default.ReleaseChannel.RELEASE_CHANNEL_ALPHA;
    case Hr.INTERNAL:
      return Ke.default.ReleaseChannel.RELEASE_CHANNEL_INTERNAL;
    default:
      return Ke.default.ReleaseChannel.RELEASE_CHANNEL_UNSPECIFIED;
  }
}
function cg(e) {
  switch (e) {
    case Jt.CANCELED:
      return Ke.default.BackupRestoreState.BACKUP_RESTORE_STATE_CANCELED;
    case Jt.COMPLETED:
      return Ke.default.BackupRestoreState.BACKUP_RESTORE_STATE_COMPLETED;
    case Jt.IN_PROGRESS:
      return Ke.default.BackupRestoreState.BACKUP_RESTORE_STATE_IN_PROGRESS;
    default:
      return Ke.default.BackupRestoreState.BACKUP_RESTORE_STATE_UNSPECIFIED;
  }
}
var ag,
  Ke,
  Pd = x(() => {
    (ag = g(require("@ubnt/unifi-protobufs/google/type/latlng_pb"))),
      (Ke = g(require("@ubnt/unifi-protobufs/unifi/core/console/v1/types_pb")));
    Zn();
    Re();
    sg();
  });
function ug(e) {
  let t = new pi.FirmwareLinks();
  return (
    t.setReleaseUrl(e.self.href),
    t.setBinaryUrl(e.data.href),
    t.setUploadsList(G4(e.upload)),
    t
  );
}
function G4(e) {
  return e.map((t) => {
    let r = new pi.Upload();
    return r.setUrl(t.href), r.setName(t.name), r;
  });
}
var pi,
  dg = x(() => {
    pi = g(require("@ubnt/unifi-protobufs/unifi/core/cloud_proxy/v1/types_pb"));
  });
async function hg(e, t) {
  try {
    let r = e.request.getVersion(),
      s = r
        ? await (0, kd.publish)("firmware.getUpdateInfo", r)
        : await (0, kd.publish)("firmware.getLatestUpdateInfo");
    if ((0, fg.isEmpty)(s)) {
      t(
        new _a.StatusBuilder()
          .withCode(_a.status.NOT_FOUND)
          .withDetails("The version is not found")
          .build(),
        null
      );
      return;
    }
    let a = new lg.FirmwareUpdateInfoResponse();
    a.setFileSizeBytes(s.file_size),
      a.setId(s.id),
      a.setMd5Checksum(s.md5),
      a.setSha256Checksum(s.sha256_checksum),
      a.setPlatform(s.platform),
      a.setProduct(s.product);
    let o = new Ud.Timestamp();
    o.fromDate(new Date(s.created)), a.setCreateTime(o);
    let n = new Ud.Timestamp();
    n.fromDate(new Date(s.updated)), a.setUpdateTime(n);
    let i = new pg.FirmwareVersion();
    if (
      (i.setFull(s.version),
      i.setMajor(s.version_major),
      i.setMinor(s.version_minor),
      i.setPatch(s.version_patch),
      i.setBuild(s.version_build),
      a.setVersion(i),
      a.setReleaseChannel(li(s.channel)),
      a.setLinks(ug(s._links)),
      s.tags)
    ) {
      let c = mg.Struct.fromJavaScript(s.tags);
      a.setTags(c);
    }
    t(null, a);
  } catch (r) {
    st.error("Failed to get firmware update info", r),
      t(
        new _a.StatusBuilder()
          .withCode(_a.status.INTERNAL)
          .withDetails("Failed to get firmware update info")
          .build(),
        null
      );
  }
}
var _a,
  lg,
  pg,
  mg,
  Ud,
  kd,
  fg,
  yg = x(() => {
    (_a = g(require("@grpc/grpc-js"))),
      (lg = g(
        require("@ubnt/unifi-protobufs/unifi/core/cloud_proxy/v1/api_pb")
      )),
      (pg = g(
        require("@ubnt/unifi-protobufs/unifi/core/cloud_proxy/v1/types_pb")
      )),
      (mg = g(require("google-protobuf/google/protobuf/struct_pb"))),
      (Ud = g(require("google-protobuf/google/protobuf/timestamp_pb"))),
      (kd = g(require("handoff"))),
      (fg = g(require("lodash")));
    Ws();
    Pd();
    dg();
  });
var Od,
  wg,
  gg = x(() => {
    Od = g(
      require("@ubnt/unifi-protobufs/unifi/core/cloud_proxy/v1/api_grpc_pb")
    );
    yg();
    wg = { firmwareUpdateInfo: hg };
  });
var zr,
  mi,
  fi,
  qo = x(() => {
    (zr = (e) => Object.entries(e)),
      (mi = (e) => Object.keys(e)),
      (fi = (e) => Object.fromEntries(e));
  });
var Eg = {};
lt(Eg, { DeviceFirmwareStatus: () => Jr, DeviceStatus: () => mt });
var mt,
  Jr,
  Fo = x(() => {
    (function (n) {
      (n.ONLINE = "online"),
        (n.UPDATING = "updating"),
        (n.RESTARTING = "restarting"),
        (n.RESETTING = "resetting"),
        (n.OFFLINE = "offline"),
        (n.ADOPTING = "adopting");
    })(mt || (mt = {}));
    (function (r) {
      (r.UP_TO_DATE = "upToDate"), (r.UPDATE_AVAILABLE = "updateAvailable");
    })(Jr || (Jr = {}));
  });
var ye,
  Sg,
  bg,
  _g,
  Lo,
  Tg,
  H4,
  W4,
  K4,
  Y4,
  hi,
  Ig = x(() => {
    (ye = g(require("@ubnt/unifi-protobufs/unifi/core/console/v1/device_pb"))),
      (Sg = g(require("google-protobuf/google/protobuf/field_mask_pb"))),
      (bg = g(require("google-protobuf/google/protobuf/struct_pb"))),
      (_g = g(require("google-protobuf/google/protobuf/timestamp_pb")));
    Id();
    Re();
    Fo();
    (Lo = (e) => {
      switch (e) {
        case Ne.NETWORK:
          return ye.DeviceManager.DEVICE_MANAGER_NETWORK;
        case Ne.PROTECT:
          return ye.DeviceManager.DEVICE_MANAGER_PROTECT;
        case Ne.TALK:
          return ye.DeviceManager.DEVICE_MANAGER_TALK;
        case Ne.ACCESS:
          return ye.DeviceManager.DEVICE_MANAGER_ACCESS;
        case Ne.CONNECT:
          return ye.DeviceManager.DEVICE_MANAGER_CONNECT;
        case Ne.UID:
          return ye.DeviceManager.DEVICE_MANAGER_UID;
        case "unifiOS":
          return ye.DeviceManager.DEVICE_MANAGER_UOS;
        default:
          return ye.DeviceManager.DEVICE_MANAGER_UNSPECIFIED;
      }
    }),
      (Tg = (e) => {
        switch (e) {
          case ye.DeviceManager.DEVICE_MANAGER_NETWORK:
            return Ne.NETWORK;
          case ye.DeviceManager.DEVICE_MANAGER_PROTECT:
            return Ne.PROTECT;
          case ye.DeviceManager.DEVICE_MANAGER_TALK:
            return Ne.TALK;
          case ye.DeviceManager.DEVICE_MANAGER_ACCESS:
            return Ne.ACCESS;
          case ye.DeviceManager.DEVICE_MANAGER_CONNECT:
            return Ne.CONNECT;
          case ye.DeviceManager.DEVICE_MANAGER_UID:
            return Ne.UID;
          case ye.DeviceManager.DEVICE_MANAGER_UOS:
            return "unifiOS";
          default:
            throw new Error("Device manager not specified");
        }
      }),
      (H4 = (e) => {
        switch (e) {
          case mt.ONLINE:
            return ye.DeviceState.DEVICE_STATE_ONLINE;
          case mt.UPDATING:
            return ye.DeviceState.DEVICE_STATE_UPDATING;
          case mt.RESTARTING:
            return ye.DeviceState.DEVICE_STATE_RESTARTING;
          case mt.RESETTING:
            return ye.DeviceState.DEVICE_STATE_RESETTING;
          case mt.OFFLINE:
            return ye.DeviceState.DEVICE_STATE_OFFLINE;
          case mt.ADOPTING:
            return ye.DeviceState.DEVICE_STATE_ADOPTING;
          default:
            return ye.DeviceState.DEVICE_STATE_UNSPECIFIED;
        }
      }),
      (W4 = (e) => {
        let t = new ye.DeviceFirmwareVersionInfo(),
          r = [];
        return (
          e.firmware &&
            (t.setCurrent(e.firmware), r.push("firmware_version.current")),
          e.firmwareStatus &&
            (t.setUpdateAvailable(e.firmwareStatus === Jr.UPDATE_AVAILABLE),
            r.length
              ? (r = ["firmware_version"])
              : r.push("firmware_version.update_available")),
          { deviceFirmwareVersionInfo: t, paths: r }
        );
      }),
      (K4 = (e) =>
        Object.values(Ne).includes(e.source)
          ? ye.DeviceInfoSource.DEVICE_INFO_SOURCE_APPLICATION
          : e.source === "discovery"
          ? ye.DeviceInfoSource.DEVICE_INFO_SOURCE_DISCOVERY
          : e.source === "wireless"
          ? ye.DeviceInfoSource.DEVICE_INFO_SOURCE_WIRELESS
          : ye.DeviceInfoSource.DEVICE_INFO_SOURCE_UNSPECIFIED),
      (Y4 = (e) => {
        let t = new ye.DeviceImages();
        return (
          e.images &&
            (e.images.xs && t.setXs(e.images.xs),
            e.images.s && t.setS(e.images.s),
            e.images.m && t.setM(e.images.m),
            e.images.l && t.setL(e.images.l),
            e.images.xl && t.setXl(e.images.xl)),
          t
        );
      }),
      (hi = (e) => {
        let t = new ye.Device(),
          r = new Sg.FieldMask();
        if (
          (e.mac && (t.setMac(e.mac), r.addPaths("mac")),
          e.ip && (t.setIp(e.ip), r.addPaths("ip")),
          e.name && (t.setName(e.name), r.addPaths("name")),
          e.status)
        ) {
          let s = H4(e.status);
          t.setState(s), r.addPaths("state");
        }
        if (e.firmware || e.firmwareStatus) {
          let { deviceFirmwareVersionInfo: s, paths: a } = W4(e);
          t.setFirmwareVersion(s), a.forEach((o) => r.addPaths(o));
        }
        if (e.startupTime) {
          let s = new _g.Timestamp();
          s.fromDate(new Date(e.startupTime)),
            t.setStartupTime(s),
            r.addPaths("startup_time");
        }
        if (
          (e.model && (t.setModel(e.model), r.addPaths("model")),
          e.shortname && (t.setShortname(e.shortname), r.addPaths("shortname")),
          e.isManaged !== void 0 &&
            (t.setIsManaged(e.isManaged), r.addPaths("is_managed")),
          e.source)
        ) {
          let s = K4(e);
          t.setSource(s), r.addPaths("source");
        }
        if (e.productLine) {
          let s = _d(e.productLine);
          t.setProductLine(s), r.addPaths("product_line");
        }
        if (e.images) {
          let s = Y4(e);
          t.setImages(s), r.addPaths("images");
        }
        if (
          (e.directConnectDomain &&
            (t.setDirectConnectDomain(e.directConnectDomain),
            r.addPaths("direct_connect_domain")),
          e.metadata && Object.keys(e.metadata).length > 0)
        ) {
          let s = bg.Struct.fromJavaScript(e.metadata);
          t.setMetadata(s), r.addPaths("metadata");
        }
        if (e.homeKit) {
          let s = new ye.HomeKitInfo();
          s.setAccessoryId(e.homeKit.accessoryId),
            t.setHomeKit(s),
            r.addPaths("home_kit");
        }
        return { device: t, fieldMask: r };
      });
  });
var Ag,
  wt,
  Ta,
  vg,
  Cg,
  qd,
  Fd,
  z4,
  J4,
  X4,
  Q4,
  Dg,
  Ld,
  Md,
  Ng,
  Rg = x(() => {
    (Ag = g(require("@ubnt/unifi-protobufs/unifi/core/console/v1/api_pb"))),
      (wt = g(
        require("@ubnt/unifi-protobufs/unifi/core/console/v1/device_pb")
      )),
      (Ta = g(require("handoff")));
    qo();
    vg = g(H());
    Kr();
    Ig();
    (Cg = new yt(Ag.DevicesResponse)),
      (qd = new Map()),
      (Fd = (e, t) => {
        let r = (a) => a.join(),
          s = new Map();
        for (let [a, o] of Cg.subscribers.entries()) {
          let n = qd.get(a) || [],
            i = r(n),
            c = s.get(i);
          c || ((c = e(t, n)), s.set(i, c)), o.send(c);
        }
      }),
      (z4 =
        (e = []) =>
        async (t) => {
          let r = await (0, vg.getDeviceList)();
          zr(r).forEach(([s, a]) => {
            (e.length && !e.includes(s)) ||
              a.forEach((o) => {
                let n = new wt.DeviceResponseItem();
                n.setId(o.uniqueId || o.mac);
                let i = Lo(s);
                n.setManagedBy(i),
                  n.setType(
                    wt.DeviceResponseItemType.DEVICE_RESPONSE_ITEM_TYPE_ADD
                  );
                let c = new wt.AddDevicePayload(),
                  { device: d } = hi(o);
                c.setDevice(d), n.setAddPayload(c), t.addItems(n);
              });
          });
        }),
      (J4 =
        (e, t = []) =>
        async (r) => {
          e.forEach(({ application: s, devices: a }) => {
            (t.length && !t.includes(s)) ||
              a.forEach((o) => {
                let n = new wt.DeviceResponseItem();
                n.setId(o.uniqueId || o.mac),
                  n.setType(
                    wt.DeviceResponseItemType.DEVICE_RESPONSE_ITEM_TYPE_ADD
                  );
                let i = Lo(s);
                n.setManagedBy(i);
                let c = new wt.AddDevicePayload(),
                  { device: d } = hi(o);
                c.setDevice(d), n.setAddPayload(c), r.addItems(n);
              });
          });
        }),
      (X4 =
        (e, t = []) =>
        async (r) => {
          e.forEach(({ application: s, devices: a }) => {
            (t.length && !t.includes(s)) ||
              a.forEach((o) => {
                let n = new wt.DeviceResponseItem();
                n.setId(o.uniqueId || o.mac),
                  n.setType(
                    wt.DeviceResponseItemType.DEVICE_RESPONSE_ITEM_TYPE_UPDATE
                  );
                let i = Lo(s);
                n.setManagedBy(i);
                let c = new wt.UpdateDevicePayload(),
                  { device: d, fieldMask: u } = hi(o);
                c.setDevice(d),
                  c.setMask(u),
                  n.setUpdatePayload(c),
                  r.addItems(n);
              });
          });
        }),
      (Q4 =
        (e, t = []) =>
        async (r) => {
          e.forEach(({ application: s, deviceIds: a }) => {
            (t.length && !t.includes(s)) ||
              a.forEach((o) => {
                let n = new wt.DeviceResponseItem();
                n.setId(o),
                  n.setType(
                    wt.DeviceResponseItemType.DEVICE_RESPONSE_ITEM_TYPE_REMOVE
                  );
                let i = Lo(s);
                n.setManagedBy(i),
                  n.setRemovePayload(new wt.RemoveDevicePayload()),
                  r.addItems(n);
              });
          });
        }),
      (Dg = []),
      (Ld = () => {
        Dg.push(
          (0, Ta.subscribe)("applications.deviceList.onAdd", (e, t) =>
            Fd(J4, t)
          ),
          (0, Ta.subscribe)("applications.deviceList.onUpdate", (e, t) =>
            Fd(X4, t)
          ),
          (0, Ta.subscribe)("applications.deviceList.onRemove", (e, t) =>
            Fd(Q4, t)
          )
        );
      }),
      (Md = () => {
        Dg.forEach((e) => (0, Ta.unsubscribe)(e));
      }),
      (Ng = async (e) => {
        let t = e.getPeer(),
          s = e.request.getFilterList().map((o) => Tg(o));
        qd.set(t, s),
          e.once("close", () => qd.delete(t)),
          await Cg.addSubscriber(e).send(z4(s));
      });
  });
async function kg(e, t) {
  await (0, Ug.publish)("system.resetToDefaults");
  let r = new Pg.ResetConsoleResponse();
  t(null, r);
}
var Pg,
  Ug,
  Og = x(() => {
    (Pg = g(require("@ubnt/unifi-protobufs/unifi/core/console/v1/api_pb"))),
      (Ug = g(require("handoff")));
  });
async function Lg(e, t) {
  await (0, Fg.publish)("system.reboot");
  let r = new qg.RestartConsoleResponse();
  t(null, r);
}
var qg,
  Fg,
  Mg = x(() => {
    (qg = g(require("@ubnt/unifi-protobufs/unifi/core/console/v1/api_pb"))),
      (Fg = g(require("handoff")));
  });
async function Bg(e, t) {
  await (0, $g.publish)("system.poweroff");
  let r = new xg.ShutDownConsoleResponse();
  t(null, r);
}
var xg,
  $g,
  Vg = x(() => {
    (xg = g(require("@ubnt/unifi-protobufs/unifi/core/console/v1/api_pb"))),
      ($g = g(require("handoff")));
  });
var Gg = w((Eye, jg) => {
  var Z4 = (e) => {
    let t = ({
      message: r = e.message,
      httpCode: s = e.httpCode,
      data: a = void 0,
    } = {}) => (
      (t.message = r),
      (t.httpCode = s),
      (t.data = a),
      { message: r, httpCode: s, code: e.code, data: a }
    );
    return (
      (t.message = e.message),
      (t.httpCode = e.httpCode),
      (t.code = e.code),
      (t.data = e.data),
      (t.serializeError = () => ({
        code: e.code,
        message: e.message,
        httpCode: e.httpCode,
        data: e.data,
      })),
      t
    );
  };
  jg.exports = Z4;
});
var Mo = w((Sye, Hg) => {
  var ge = Gg();
  Hg.exports = {
    ERR_UNKNOWN: ge({
      code: "ERR_UNKNOWN",
      message: "Unknown error",
      httpCode: 500,
    }),
    VALIDATION_ERROR: ge({
      code: "VALIDATION_ERROR",
      message: "Validation error",
      httpCode: 400,
    }),
    UPLOAD_ERROR: ge({
      code: "UPLOAD_ERROR",
      message: "Upload error",
      httpCode: 400,
    }),
    OWNER_NOT_MATCH: ge({
      code: "OWNER_NOT_MATCH",
      message: "Owner not match",
      httpCode: 403,
    }),
    CONSOLE_TYPE_NOT_MATCH: ge({
      code: "CONSOLE_TYPE_NOT_MATCH",
      message: "Console type not match",
      httpCode: 422,
    }),
    BACKUPS_IS_DECRYPTING: ge({
      code: "BACKUPS_IS_DECRYPTING",
      message: "Backup is already decrypting",
      httpCode: 409,
    }),
    RESTORE_IN_PROGRESS: ge({
      code: "RESTORE_IN_PROGRESS",
      message: "Restore already in progress",
      httpCode: 409,
    }),
    ENCRYPTION_KEY_NOT_EXISTS: ge({
      code: "ENCRYPTION_KEY_NOT_EXISTS",
      message: "Encryption key not exists",
      httpCode: 409,
    }),
    FAILED_TO_GET_ENCRYPTION_KEY: ge({
      code: "FAILED_TO_GET_ENCRYPTION_KEY",
      message: "Failed to get encryption key",
      httpCode: 500,
    }),
    FAILED_TO_MANAGE_MASKED_SERVICE: ge({
      code: "FAILED_TO_MANAGE_MASKED_SERVICE",
      message: "Failed to get manage masked service",
      httpCode: 500,
    }),
    RESTORE_ERROR: ge({
      code: "RESTORE_ERROR",
      message: "Error during restore process",
      httpCode: 500,
    }),
    FAILED_TO_GET_LATEST_FW: ge({
      code: "FAILED_TO_GET_LATEST_FW",
      message: "Failed to get latest firmware",
      httpCode: 500,
    }),
    FAILED_TO_GET_FIRMWARE_SERVICE_BEARER: ge({
      code: "FAILED_TO_GET_FIRMWARE_SERVICE_BEARER",
      message: "Failed to get firmware service bearer",
      httpCode: 500,
    }),
    BAD_FILE: ge({
      code: "BAD_FILE",
      message: "Failed to decrypt backup file. Unknown or damaged format",
      httpCode: 400,
    }),
    DEVICE_PUBLISH_TIMEOUT: ge({
      code: "DEVICE_PUBLISH_TIMEOUT",
      message: "Device publish timeout",
      httpCode: 500,
    }),
    FAILED_TO_SEND_INVITATION: ge({
      code: "FAILED_TO_SEND_INVITATION",
      message: "Failed to send the invitation",
      httpCode: 500,
    }),
    ACTION_FORBIDDEN: ge({
      code: "ACTION_FORBIDDEN",
      message: "Action forbidden for this console",
      httpCode: 403,
    }),
    INVALID_TIMEZONE: ge({
      code: "INVALID_TIMEZONE",
      message: "Invalid timezone",
      httpCode: 500,
    }),
    DEVICE_NOT_CONNECTED_TO_CLOUD: ge({
      code: "DEVICE_NOT_CONNECTED_TO_CLOUD",
      message: "Device not connected to cloud",
      httpCode: 409,
    }),
    FAILED_TO_RECEIVE_SSL_CERTIFICATE: ge({
      code: "FAILED_TO_RECEIVE_SSL_CERTIFICATE",
      message: "Failed to receive ssl certificate",
      httpCode: 500,
    }),
    FAILED_TO_RECEIVE_AWS_CREDENTIALS: ge({
      code: "FAILED_TO_RECEIVE_AWS_CREDENTIALS",
      message: "Failed to receive AWS credentials",
    }),
    MFA_AUTH_REQUIRED: ge({
      code: "MFA_AUTH_REQUIRED",
      message: "MFA token required to authenticate to SSO",
      httpCode: 499,
    }),
    MFA_SESSION_EXPIRED: ge({
      code: "MFA_SESSION_EXPIRED",
      message: "Session expired",
      httpCode: 401,
    }),
    MFA_PUSH_LOGIN_APPROVAL_DENIED: ge({
      code: "MFA_PUSH_LOGIN_APPROVAL_DENIED",
      message: "Login approval denied",
      httpCode: 401,
    }),
    USER_NOT_VERIFIED: ge({
      code: "USER_NOT_VERIFIED",
      message: "User not verified",
      httpCode: 403,
    }),
    APPLICATION_NOT_FOUND: ge({
      code: "APPLICATION_NOT_FOUND",
      message: "Unsupported application",
      httpCode: 404,
    }),
    TASK_NOT_FOUND: ge({
      code: "TASK_NOT_FOUND",
      message: "Task not found",
      httpCode: 404,
    }),
    AUTHENTICATION_FAILED: ge({
      code: "AUTHENTICATION_FAILED",
      message: "Authentication failed",
      httpCode: 403,
    }),
    AUTHENTICATION_FAILED_ACCOUNT_NOT_EXIST_LOCALLY: ge({
      code: "AUTHENTICATION_FAILED_ACCOUNT_NOT_EXIST_LOCALLY",
      message: "You do not have the permission to access this device",
      httpCode: 403,
    }),
    AUTHENTICATION_FAILED_INVALID_2FA: ge({
      code: "AUTHENTICATION_FAILED_INVALID_2FA",
      message: "Invalid 2FA token",
      httpCode: 403,
    }),
    AUTHENTICATION_FAILED_INVALID_CREDENTIALS: ge({
      code: "AUTHENTICATION_FAILED_INVALID_CREDENTIALS",
      message: "Invalid username or password",
      httpCode: 403,
    }),
    AUTHENTICATION_FAILED_NO_INTERNET: ge({
      code: "AUTHENTICATION_FAILED_NO_INTERNET",
      message: "Authentication failed, no internet connection",
      httpCode: 403,
    }),
    AUTHENTICATION_FAILED_BAD_DNS: ge({
      code: "AUTHENTICATION_FAILED_BAD_DNS",
      message: "Authentication failed, possibly bad DNS configuration",
      httpCode: 403,
    }),
    FW_UPDATE_PID_NOT_FOUND: ge({
      code: "FW_UPDATE_PID_NOT_FOUND",
      message:
        "No firmware update progress file created after the allocated time, assuming that update process failed",
      httpCode: 500,
    }),
    UNEXPECTED_RESPONSE: ge({
      code: "UNEXPECTED_RESPONSE",
      message: "Unexpected response",
      httpCode: 500,
    }),
    CONSOLE_NOT_READY: ge({
      code: "CONSOLE_NOT_READY",
      message: "System is still starting",
      httpCode: 409,
    }),
  };
});
var yi = w((_ye, Wg) => {
  var { ERR_UNKNOWN: eW } = Mo();
  Wg.exports = class extends Error {
    constructor(t, r = {}) {
      let s;
      t
        ? typeof t.serializeError == "function"
          ? (s = t.serializeError())
          : (s = t)
        : (s = eW),
        super(s.message),
        (this.name = this.constructor.name),
        Error.captureStackTrace(this, this.constructor),
        (this.httpCode = s.httpCode || 500),
        (this.code = s.code),
        (this.data = s.data),
        (this.originalError = r);
    }
    toString() {
      if (!this.originalError) return super.toString();
      let t = "";
      try {
        t = `
Original error: ${JSON.stringify(this.originalError)}`;
      } catch {
        t = `
Original error: ${this.originalError}`;
      }
      return `${super.toString()}${t}`;
    }
  };
});
var Kg,
  Yg,
  zg,
  xd,
  at,
  wi = x(() => {
    (Kg = g(require("zod"))),
      (Yg = g(yi())),
      (zg = g(Mo())),
      (xd = class extends Yg.default {
        constructor(t, r) {
          super((0, zg.VALIDATION_ERROR)({ message: r }));
          t instanceof Kg.ZodError
            ? (this.validationErrors = t.issues)
            : t.errors && (this.validationErrors = t.errors);
        }
      }),
      (at = xd);
  });
var me = {};
lt(me, {
  AppError: () => _e.default,
  ValidationError: () => at,
  errorCodes: () => Le.default,
});
var _e,
  Le,
  se = x(() => {
    (_e = g(yi())), (Le = g(Mo()));
    wi();
  });
async function tW() {
  // try {
  //   let { stdout: e } = await (0, $d.default)(
  //     "/usr/bin/sudo -n /sbin/ubnt-systool cpuload"
  //   );
  //   return e ? parseFloat(e) : 0;
  // } catch {
  //   return 0;
  // }
  return 0
}
async function rW() {
  // try {
  //   let { stdout: e } = await (0, $d.default)(
  //     "/usr/bin/sudo -n /sbin/ubnt-systool cputemp"
  //   );
  //   return e ? parseFloat(e) : 0;
  // } catch {
  //   return 0;
  // }
  return 0
}
async function xo() {
  if (!(await (0, Jg.publish)("system.device")).features?.cpuInfo)
    throw new _e.default(Le.default.ACTION_FORBIDDEN);
  let t = Qg.get("data");
  if (!t) {
    let [r, s] = await Promise.all([tW(), rW()]);
    (t = { load: r, temperature: s }), Qg.set("data", t);
  }
  return t;
}
var Jg,
  Xg,
  $d,
  Qg,
  Bd = x(() => {
    (Jg = g(require("handoff"))), (Xg = g(require("node-cache")));
    se();
    ($d = g(Ce())), (Qg = new Xg.default({ stdTTL: 5 }));
  });
async function Ys() {
  let e = tE.get("data");
  if (!e) {
    let t, r, s;
    try {
      (await Zg.default.readFile("/proc/meminfo", "utf-8"))
        .split(
          `
`
        )
        .forEach((o) => {
          let n = o.split(":");
          switch (n[0]) {
            case "MemFree":
              n[1] && (t = parseInt(n[1], 10));
              break;
            case "MemTotal":
              n[1] && (r = parseInt(n[1], 10));
              break;
            case "MemAvailable":
              n[1] && (s = parseInt(n[1], 10));
              break;
          }
        });
    } catch {}
    (e = {
      free: t || gi.default.freemem() / 1024,
      total: r || gi.default.totalmem() / 1024,
      available: s || gi.default.freemem() / 1024,
    }),
      tE.set("data", e);
  }
  return e;
}
var Zg,
  eE,
  gi,
  tE,
  Ei = x(() => {
    (Zg = g(require("fs-extra"))),
      (eE = g(require("node-cache"))),
      (gi = g(require("os"))),
      (tE = new eE.default({ stdTTL: 5 }));
  });
var rE,
  Vd,
  sE = x(() => {
    (rE = g(Ce())),
      (Vd = async (e, t) => {
        try {
          let { stdout: r, stderr: s } = await (0, rE.default)(
            'ubios-udapi-client get -r /system | jq ".dnsServers"'
          );
          if (s) throw Error(s);
          let o = JSON.parse(r).find((n) =>
            t.find((i) => n.interface === i.interface)
          );
          if (!o) throw Error("Can't find dns from network interface");
          return o.address;
        } catch (r) {
          e.warn("Failed to get dns ip:", r);
          return;
        }
      });
  });
var aE,
  jd,
  oE = x(() => {
    (aE = g(Ce())),
      (jd = async (e) => {
        try {
          let { stdout: t, stderr: r } = await (0, aE.default)(
            "mca-dump | jq .geo_info.WAN"
          );
          if (r) throw Error(r);
          let s = JSON.parse(t.trim());
          if (!s) throw Error("Empty data from mca-dump");
          let { isp_name: a, country_name: o, city: n } = s;
          return { name: a, country: o, city: n };
        } catch (t) {
          e.warn("Failed to get ISP Name from mac-dump:", t);
          return;
        }
      });
  });
var Gd,
  nE = x(() => {
    Gd = async (e, t, r) => {
      try {
        let s = r
          ? Object.values(t)
              .map(([a]) => a?.address)
              .find((a) => !!a)
          : t.br0 && t.br0[0]?.address;
        if (!s) throw Error("Can't find lanIp from network interface");
        return s;
      } catch (s) {
        e.warn("Failed to get lan ip:", s);
        return;
      }
    };
  });
function Hd(e, t) {
  let r = parseInt(t.replace(/\D+/g, ""));
  if (!isNaN(r)) return [Be.UNVR, Be.UNVRPRO].includes(e) ? r : r + 1;
}
var iE = x(() => {
  Re();
});
async function zs() {
  let { shortname: e } = await (0, Wd.publish)("system.hardware"),
    {
      network: t = {},
      portStatus: r = [],
      ip: s,
    } = await (0, cE.getSystemInfo)(),
    { interfaces: a = {}, associatedInterfaces: o = {} } = t,
    n = await (0, Wd.publish)("system.device"),
    i = [
      {
        id: "br0",
        type: "WAN",
        plugged: !0,
        enabled: !0,
        mac: a.br0?.find(({ mac: c }) => !!c)?.mac,
      },
    ];
  if (
    (n.features?.hasUdapi && (i = r.filter(({ type: c }) => c.includes("WAN"))),
    n.features?.clientNetworkConfig)
  ) {
    let c = Object.keys(a).find((d) => a[d]?.find(({ address: u }) => u === s));
    if (c) {
      let d = a[c]?.find(({ mac: u }) => !!u)?.mac;
      i = [{ id: c, type: "WAN", plugged: !0, enabled: !0, mac: d }];
    }
  }
  return i.reduce((c, d) => {
    let u = d.id,
      p = a[u];
    for (let m = 0; m < 2; m++) {
      let E = o[u];
      if (!E) break;
      (p = a[E] || p), (u = E);
    }
    let l, f;
    return (
      p &&
        ((l = p.find((m) => m.family === "IPv4")),
        (f = p.find((m) => m.family === "IPv6"))),
      [
        ...c,
        {
          interface: d.id,
          associatedInterface: d.id !== u ? u : void 0,
          ipv4: l?.address,
          ipv6: f?.address,
          plugged: d.plugged,
          enabled: d.enabled,
          type: d.type,
          port: Hd(e, d.id),
          mac: d.mac,
        },
      ]
    );
  }, []);
}
var Wd,
  cE,
  uE = x(() => {
    Wd = g(require("handoff"));
    iE();
    cE = g(H());
  });
var Kd = x(() => {
  sE();
  oE();
  nE();
  uE();
});
async function Yd() {
  let e = pE.get("data");
  if (!e) {
    let t = await zs(),
      s = (await dE.default.readFile("/proc/net/dev", "utf-8"))
        .split(
          `
`
        )
        .slice(2);
    (e = t.reduce(
      (a, o) => {
        let n =
          s
            .find((i) => i.includes(o.interface))
            ?.trim()
            .split(/\s+/g) || [];
        return {
          rxBytes: a.rxBytes + parseInt(n[1] || "0"),
          txBytes: a.txBytes + parseInt(n[9] || "0"),
        };
      },
      { rxBytes: 0, txBytes: 0 }
    )),
      pE.set("data", e);
  }
  return e;
}
var dE,
  lE,
  pE,
  mE = x(() => {
    (dE = g(require("fs-extra"))), (lE = g(require("node-cache")));
    Kd();
    pE = new lE.default({ stdTTL: 5 });
  });
async function gE(e) {
  let [t, r, s, a] = await Promise.all([
      xo(),
      Ys(),
      Yd(),
      (0, hE.publish)("system.storage.info"),
    ]),
    o = new As.CpuStats();
  o.setLoad(t.load), o.setTemperature(t.temperature), e.setCpu(o);
  let n = new As.RamStats();
  n.setAvailableKilobytes(r.available),
    n.setTotalKilobytes(r.total),
    e.setRam(n);
  let i = new As.NetworkTrafficStats();
  i.setRxBytes(s.rxBytes), i.setTxBytes(s.txBytes), e.setWan(i);
  let c = new As.StorageStats(),
    { used: d = 0, size: u = 0 } = a.find(({ type: p }) => p === pe.EMMC) || {};
  c.setUsedBytes(d), c.setTotalBytes(u), e.setInternalStorage(c);
}
async function SE(e) {
  await wE.addSubscriber(e).send(gE),
    EE ||
      (EE = (0, yE.setIntervalAsync)(async () => {
        wE.publish(gE);
      }, aW));
}
var fE,
  As,
  hE,
  sW,
  yE,
  aW,
  wE,
  EE,
  bE = x(() => {
    (fE = g(require("@ubnt/unifi-protobufs/unifi/core/console/v1/api_pb"))),
      (As = g(require("@ubnt/unifi-protobufs/unifi/core/console/v1/types_pb"))),
      (hE = g(require("handoff"))),
      (sW = g(require("set-interval-async"))),
      (yE = g(require("set-interval-async/dynamic")));
    Bd();
    Ei();
    mE();
    Kr();
    kt();
    (aW = 2e3), (wE = new yt(fE.ConsoleStatsResponse));
  });
var _E,
  TE,
  Si,
  zd = x(() => {
    (_E = g(
      require("@ubnt/unifi-protobufs/unifi/core/speed_test/v1/types_pb")
    )),
      (TE = g(require("google-protobuf/google/protobuf/timestamp_pb"))),
      (Si = (e) => {
        let { download: t, upload: r, latency: s, startTime: a } = e,
          o = new _E.default.Result();
        o.setDownloadBitsPerSecond(Math.round(t.average)),
          o.setUploadBitsPerSecond(Math.round(r.average)),
          o.setPingMillis(Math.round(s.current));
        let n = new TE.default.Timestamp();
        return n.fromDate(new Date(a)), o.setStartTime(n), o;
      });
  });
function oW() {
  if (bi) return bi;
  let e = vE.default.uptime();
  return (bi = new Date(Date.now() - e * 1e3)), bi;
}
function nW({ isSetup: e, setupType: t, state: r, backupRestoreState: s }) {
  return !e && t
    ? it.State.STATE_SETUP_IN_PROGRESS
    : s === it.BackupRestoreState.BACKUP_RESTORE_STATE_IN_PROGRESS
    ? it.State.STATE_RESTORING_FROM_BACKUP
    : og(r);
}
async function NE(e) {
  let t = new AE.Timestamp();
  t.fromDate(oW());
  let [
      r,
      s,
      a,
      o,
      n,
      i,
      { ispInfo: c, dnsIp: d, lanIp: u, info: p, publicIp: l },
      { mac: f, hardware: m, wans: E },
      y,
      h,
      { isSetup: S, setupType: D },
      {
        device: { restoreProgress: A, restoreState: C },
      },
      R,
    ] = await Promise.all([
      (0, Me.getDeviceState)(),
      (0, Me.getHasInternet)(),
      (0, Me.getInternetRequired)(),
      (0, Me.getLocation)(),
      (0, Me.getName)(),
      (0, Me.getTimezone)(),
      (0, Me.getSystem)(),
      (0, Me.getSystemInfo)(),
      (0, Me.getFWReleaseChannel)(),
      (0, Me.getFWLatestAvailableVersion)(),
      (0, Me.getSettings)(),
      (0, Me.getBackup)(),
      (0, Me.getSpeedTestResult)(),
    ]),
    N = cg(C);
  e.setState(nW({ isSetup: S, setupType: D, state: r, backupRestoreState: N })),
    e.setStartupTime(t),
    e.setInternetConnection(ng(s, a));
  let b = new it.Settings();
  b.setLocation(ig(o)), b.setName(n), b.setTimezone(i), e.setSettings(b);
  let T = new it.Networking();
  if (
    (T.setMac(f),
    T.setPublicIp(l),
    N === it.BackupRestoreState.BACKUP_RESTORE_STATE_IN_PROGRESS)
  ) {
    let q = new it.BackupRestoreInfo();
    q.setState(N), q.setProgress(A), e.setBackupRestoreInfo(q);
  }
  if (c) {
    let q = new it.Isp();
    q.setName(c.name), q.setCity(c.city), q.setCountry(c.country), T.setIsp(q);
  }
  if (p.features?.hasGateway) {
    let q = new it.GatewayConsoleIps();
    if ((q.setGatewayIp(u), q.setDnsIp(d), E.length > 0)) {
      let k = E.find((_) => _.type === "WAN"),
        I = E.find((_) => _.type === "WAN2");
      q.setWan1Ip(k.ipv4), I?.ipv4 && q.setWan2Ip(I.ipv4);
    }
    T.setGatewayConsoleIps(q);
  } else {
    let q = new it.ClientConsoleIps();
    q.setLocalIp(u), T.setClientConsoleIps(q);
  }
  e.setNetworking(T);
  let M = new it.FirmwareVersionInfo();
  M.setCurrent(m.firmwareVersion),
    M.setReleaseChannel(li(y)),
    M.setUpdatableTo(h),
    e.setFirmwareVersion(M),
    R && e.setLastSpeedTestResult(Si(R));
}
async function RE() {
  return [
    function* () {
      yield (0, CE.takeEvery)(
        [
          De.CONSOLE_LOCATION_CHANGED,
          De.CONSOLE_NAME_CHANGED,
          De.CONSOLE_TIMEZONE_CHANGED,
          De.SET_INTERNET_REQUIRED,
          De.SETUP_CANCELED,
          De.SETUP_STARTED,
          De.SETUP_COMPLETED,
          De.UPDATE_DEVICE_STATE,
          De.UPDATE_HAS_INTERNET,
          De.DNS_IP_CHANGED,
          De.ISP_INFO_CHANGED,
          De.LAN_IP_CHANGED,
          De.UPDATE_FIRMWARE_LATEST_AVAILABLE,
          De.SET_FIRMWARE_RELEASE_CHANNEL,
          De.UPDATE_DEVICE_RESTORE_PROGRESS,
        ],
        async () => {
          DE.publish(NE);
        }
      );
    },
  ];
}
async function PE(e) {
  await DE.addSubscriber(e).send(NE);
}
var IE,
  it,
  AE,
  vE,
  CE,
  De,
  Me,
  DE,
  bi,
  UE = x(() => {
    (IE = g(require("@ubnt/unifi-protobufs/unifi/core/console/v1/api_pb"))),
      (it = g(require("@ubnt/unifi-protobufs/unifi/core/console/v1/types_pb"))),
      (AE = g(require("google-protobuf/google/protobuf/timestamp_pb"))),
      (vE = g(require("os"))),
      (CE = g(require("redux-saga/effects")));
    Kr();
    zd();
    (De = g(Z())), (Me = g(H()));
    Pd();
    DE = new yt(IE.ConsoleStatusResponse);
  });
async function OE() {
  return [...(await RE())];
}
var Jd,
  kE,
  qE = x(() => {
    Jd = g(require("@ubnt/unifi-protobufs/unifi/core/console/v1/api_grpc_pb"));
    Rg();
    Og();
    Mg();
    Vg();
    bE();
    UE();
    kE = {
      consoleStats: SE,
      consoleStatus: PE,
      devices: Ng,
      resetConsole: kg,
      restartConsole: Lg,
      shutDownConsole: Bg,
      updateSettings: function () {},
    };
  });
var Xd,
  FE,
  LE,
  _i,
  Qd,
  ME,
  iW,
  xE,
  $E,
  BE,
  VE = x(() => {
    (Xd = g(
      require("@ubnt/unifi-protobufs/unifi/core/homekit/v1/api_grpc_pb")
    )),
      (FE = g(require("@ubnt/unifi-protobufs/unifi/core/homekit/v1/api_pb"))),
      (LE = g(require("google-protobuf/google/protobuf/struct_pb"))),
      (_i = g(require("handoff")));
    Kr();
    (Qd = new yt(FE.DeviceActionsResponse)),
      (ME = {
        deviceActions: async (e) => {
          Qd.addSubscriber(e);
        },
      }),
      (iW = (e) => async (t) => {
        t.setAction(e.action),
          t.setPayload(LE.Struct.fromJavaScript(e.payload));
      }),
      (xE = []),
      ($E = () => {
        xE.push(
          (0, _i.subscribe)("homeKit.deviceAction", async (e, t) => {
            if (Qd.subscribers.size < 1)
              throw new Error("HomeKit service not listening");
            await Qd.publish(iW(t));
          })
        );
      }),
      (BE = () => {
        xE.forEach((e) => (0, _i.unsubscribe)(e));
      });
  });
function jE(e) {
  switch (e) {
    case "webui":
      return $o.Type.TYPE_WEB;
    case "ios":
      return $o.Type.TYPE_IOS;
    case "android":
      return $o.Type.TYPE_ANDROID;
    default:
      return $o.Type.TYPE_UNSPECIFIED;
  }
}
var $o,
  GE = x(() => {
    $o = g(require("@ubnt/unifi-protobufs/unifi/core/setup/v1/types_pb"));
  });
var Ia,
  Zd,
  HE,
  WE,
  KE,
  YE,
  zE = x(() => {
    (Ia = g(require("@grpc/grpc-js"))),
      (Zd = g(
        require("@ubnt/unifi-protobufs/unifi/core/setup/v1/api_grpc_pb")
      )),
      (HE = g(require("@ubnt/unifi-protobufs/unifi/core/setup/v1/api_pb"))),
      (WE = g(require("google-protobuf/google/protobuf/timestamp_pb"))),
      (KE = g(H()));
    GE();
    YE = {
      async setupData(e, t) {
        let r = await (0, KE.getSettings)();
        if (r.isSetup)
          return t(
            new Ia.StatusBuilder()
              .withCode(Ia.status.UNAVAILABLE)
              .withDetails("Console is already set up")
              .build(),
            null
          );
        if (!r.setupType)
          return t(
            new Ia.StatusBuilder()
              .withCode(Ia.status.UNAVAILABLE)
              .withDetails("Console setup not started")
              .build(),
            null
          );
        let s = new HE.SetupDataResponse();
        s.setType(jE(r.setupType));
        let a = r.setupStartTime;
        if (a) {
          let o = new WE.Timestamp();
          o.fromDate(new Date(a)), s.setStartTime(o);
        }
        t(null, s);
      },
    };
  });
async function QE(e) {
  let t = await (0, Ti.publish)("speedTest.status"),
    r = Si(t);
  e.setResult(r);
  let s = new XE.default.Provider();
  s.setCountry(t.info.country), s.setName(t.info.org), e.setProvider(s);
}
async function tl() {
  return [
    function* () {
      yield (0, el.takeEvery)(Aa.SPEED_TEST_RUNNING, async () => {
        await Ii.publish(QE);
      });
    },
    function* () {
      yield (0, el.takeEvery)(
        [Aa.SPEED_TEST_FAILED, Aa.SPEED_TEST_FINISHED],
        async () => {
          await Ii.publish(QE), await Ii.end();
        }
      );
    },
  ];
}
async function ZE(e) {
  Ii.addSubscriber(e),
    e.on("cancelled", () => {
      st.debug("Speed Test stream is canceled"),
        (0, Ti.publish)("speedTest.stop");
    }),
    await (0, Ti.publish)("speedTest.start");
}
var JE,
  XE,
  Ti,
  el,
  Aa,
  Ii,
  eS = x(() => {
    (JE = g(require("@ubnt/unifi-protobufs/unifi/core/speed_test/v1/api_pb"))),
      (XE = g(
        require("@ubnt/unifi-protobufs/unifi/core/speed_test/v1/types_pb")
      )),
      (Ti = g(require("handoff"))),
      (el = g(require("redux-saga/effects")));
    Kr();
    Ws();
    Aa = g(Z());
    zd();
    Ii = new yt(JE.default.RunTestResponse);
  });
var rl,
  tS,
  rS = x(() => {
    rl = g(
      require("@ubnt/unifi-protobufs/unifi/core/speed_test/v1/api_grpc_pb")
    );
    eS();
    tS = { runTest: ZE };
  });
async function sS() {
  let e = new Bo.Server();
  e.addService(Zd.SetupAPIService, YE),
    e.addService(Jd.ConsoleAPIService, kE),
    e.addService(Xd.HomeKitAPIService, ME),
    e.addService(Od.CloudProxyAPIService, wg),
    e.addService(Rd.ApplicationProxyAPIService, eg),
    e.addService(rl.SpeedTestAPIService, tS),
    e.addService(vd.ApplicationAPIService, _w);
  let t = "localhost",
    { lcmGrpcHost: r } = await (0, Ai.publish)("system.device"),
    s = Uo.ports.grpc;
  e.bindAsync(`${t}:${s}`, Bo.ServerCredentials.createInsecure(), (n) => {
    if (n) throw n;
    r
      ? e.bindAsync(`${r}:${s}`, Bo.ServerCredentials.createInsecure(), (i) => {
          i
            ? st.error("Failed to start LCM gRPC server:", Te(i))
            : st.info(`LCM gRPC server started on port ${s}`),
            e.start();
        })
      : e.start(),
      st.info(`Local gRPC server started on port ${s}`);
  });
  let a = [...(await OE()), ...(await tg()), ...(await tl()), ...(await Tw())];
  a.forEach((n) => (0, Ai.publish)("redux.saga.add", n)),
    await Promise.all([Ld(), $E()]);
  let o = async () => {
    (await Promise.allSettled([Md(), BE()])).forEach((i) => {
      i.status === "rejected" &&
        st.error("Failed to cleanup service:", i.reason);
    });
  };
  return async () => {
    a.forEach((n) =>
      (0, Ai.publish)("redux.saga.remove", n).catch((i) => {
        st.error("Failed to redux.saga.remove:", i);
      })
    ),
      o(),
      e.forceShutdown();
  };
}
var Bo,
  Ai,
  aS = x(() => {
    (Bo = g(require("@grpc/grpc-js"))), (Ai = g(require("handoff")));
    qt();
    Iw();
    rg();
    gg();
    qE();
    VE();
    zE();
    rS();
    Ws();
  });
async function cW(e, t) {
  return (
    mw({ config: e, logger: t }),
    sS(),
    () => {
      t.info("Unsubscribe from gRPC");
    }
  );
}
var oS,
  nS = x(() => {
    aS();
    Ws();
    oS = cW;
  });
var vs,
  sl = x(() => {
    (function (n) {
      (n.NETWORK = "network"),
        (n.PROTECT = "protect"),
        (n.PROTECT_DEV = "protect-dev"),
        (n.PROTECT_NIGHTLY = "protect-nightly"),
        (n.ACCESS = "access"),
        (n.ADMIN = "admin");
    })(vs || (vs = {}));
  });
var iS,
  Ye,
  va = x(() => {
    (iS = g(require("handoff"))), (Ye = () => (0, iS.publish)("db.getClient"));
  });
var ze,
  Ca,
  Da,
  cS,
  Cs,
  vi = x(() => {
    (function (p) {
      (p.NO_DISK = "nodisk"),
        (p.BROKEN = "broken"),
        (p.AT_RISK = "risk"),
        (p.FAULTY = "faulty"),
        (p.REPAIRING = "repairing"),
        (p.INITIALIZING = "initializing"),
        (p.EXPANDING = "expanding"),
        (p.FOREIGN = "foreign"),
        (p.SPARE = "spare"),
        (p.NOT_SUPPORTED = "not_support"),
        (p.NORMAL = "normal");
    })(ze || (ze = {}));
    (function (s) {
      (s.HDD = "HDD"), (s.SSD = "SSD"), (s.SD_CARD = "sdcard");
    })(Ca || (Ca = {}));
    (function (n) {
      (n.NONE = "none"),
        (n.FAULTY = "faulty"),
        (n.SPARE = "spare"),
        (n.REPAIRING = "repairing"),
        (n.INITIALIZING = "initializing"),
        (n.EXPANDING = "expanding");
    })(Da || (Da = {}));
    (function (a) {
      (a.PRIMARY = "primary"),
        (a.SECONDARY = "secondary"),
        (a.SWAP = "swap"),
        (a.ROOT = "root");
    })(cS || (cS = {}));
    (function (n) {
      (n.NONE = "none"),
        (n.SYNCING = "syncing"),
        (n.REPAIRING = "repairing"),
        (n.EXPANDING = "expanding"),
        (n.FORMATTING = "formatting"),
        (n.ERASING = "erasing");
    })(Cs || (Cs = {}));
  });
var Ir,
  uS,
  dS,
  lS,
  uW,
  dW,
  lW,
  pS,
  pW,
  mS,
  fS = x(() => {
    (Ir = g(require("handoff"))),
      (uS = g(require("set-interval-async"))),
      (dS = g(require("set-interval-async/dynamic"))),
      (lS = g(H()));
    vi();
    (uW = async (e, t) => {
      if ([ze.NO_DISK, ze.INITIALIZING, ze.FOREIGN].includes(e.state)) {
        if (t.state === ze.NOT_SUPPORTED) {
          let r = t.model || "Unknown HDD",
            s = {
              eventId: "driveNotSupported",
              eventData: {
                hddSlot: { text: `Slot ${t.slot}` },
                hddModel: { text: r },
                clickUrl: {
                  url: "https://help.ui.com/hc/en-us/articles/360037340954-UniFi-Protect-Hard-Drive-Compatibility",
                },
              },
              push: {
                message: {
                  body: `The hard drive installed in Slot ${t.slot} (${r}) is incompatible. Please install a surveillance-grade, CMR HDD to ensure optimal performance.`,
                },
              },
              email: { vars: { hdd_slot: `Slot ${t.slot}`, hdd_model: r } },
            };
          return (0, Ir.publish)("notifications.add", s);
        }
        if ([ze.NORMAL, ze.REPAIRING, ze.EXPANDING].includes(t.state)) {
          let r;
          if (t.type === Ca.SD_CARD) {
            let s = t.model || "Unknown SD Card";
            r = {
              eventId: "sdCardInstalled",
              eventData: { sdCardModel: { text: s } },
              push: { message: { title: `SD Card Inserted (${s})` } },
              email: { vars: { sd_model: s } },
            };
          } else r = { eventId: "hddInstalled", eventData: {} };
          return (0, Ir.publish)("notifications.add", r);
        }
      }
    }),
      (dW = async (e, t) => {
        if (t.state === ze.NO_DISK) {
          let r;
          if (e.type === Ca.SD_CARD) {
            let s = e.model || "Unknown SD Card";
            r = {
              eventId: "sdCardEjected",
              eventData: { sdCardModel: { text: s } },
              push: { message: { title: `SD Card Removed (${s})` } },
              email: { vars: { sd_model: s } },
            };
          } else
            r = {
              eventId: "hddEjected",
              eventData: { hddSlot: { text: `Slot ${e.slot}` } },
              push: {
                message: {
                  body: `A hard disk has been removed from Slot ${e.slot}`,
                },
              },
              email: { vars: { hdd_slot: `Slot ${e.slot}` } },
            };
          return (0, Ir.publish)("notifications.add", r);
        }
      }),
      (lW = async (e) => {
        if (
          e.type === Ca.SD_CARD &&
          [ze.BROKEN, ze.FAULTY, ze.AT_RISK].includes(e.state)
        ) {
          let t = {
            eventId: "sdCardIssues",
            eventData: {
              clickUrl: {
                url: "https://store.ui.com/collections/unifi-accessories",
              },
              sdCardModel: { text: e.model },
            },
            email: { vars: { sd_model: e.model || "Unknown SD Card" } },
          };
          return (0, Ir.publish)("notifications.add", t);
        }
        if ([ze.BROKEN, ze.FAULTY].includes(e.state)) {
          let t = await (0, lS.getName)(),
            r = `Slot ${e.slot}`;
          return (0, Ir.publish)("notifications.add", {
            eventId: "driveFailed",
            eventData: {
              consoleName: { text: t },
              clickUrl: {
                url: "https://store.ui.com/collections/unifi-accessories",
              },
              hddSlot: { text: r },
            },
            email: { vars: { hdd_slot: r } },
          });
        }
        if (e.state === ze.AT_RISK) {
          let t = `Slot ${e.slot}`,
            r = {
              eventId: "driveIssues",
              eventData: {
                clickUrl: {
                  url: "https://store.ui.com/collections/unifi-accessories",
                },
                hddSlot: { text: t },
              },
              email: { vars: { hdd_slot: t } },
              push: {
                message: {
                  body: `The ${t} hard drive is having issues and must be replaced. We recommend a surveillance-grade hard drive.`,
                },
              },
            };
          return (0, Ir.publish)("notifications.add", r);
        }
      }),
      (pS = async (e, t, r) => {
        try {
          await Promise.all([dW(t, r), uW(t, r), lW(r)]);
        } catch (s) {
          e.error("Failed to process storage events:", s);
        }
      }),
      (pW = (e, t) => {
        let r = new Map(),
          s = new Map(),
          a = 0,
          o = 0,
          i = (0, dS.setIntervalAsync)(async () => {
            if (!(await (0, Ir.publish)("system.device")).features.storage)
              return;
            let d = await (0, Ir.publish)("system.ustorage.inspect");
            d.disks.forEach((l) => {
              let f = r.get(l.slot);
              if (!f) {
                r.set(l.slot, l);
                return;
              }
              l.state !== f.state && pS(t, f, l), r.set(l.slot, l);
            }),
              d.sdcards.forEach((l) => {
                let f = s.get(l.slot);
                if (!f) {
                  s.set(l.slot, l);
                  return;
                }
                l.state !== f.state && pS(t, f, l), s.set(l.slot, l);
              });
            let u = 0,
              p = 0;
            r.forEach((l) => {
              l.state !== ze.NO_DISK && (u += 1);
            }),
              s.forEach((l) => {
                l.state !== ze.NO_DISK && (p += 1);
              }),
              (u !== a || p !== o) &&
                (0, Ir.publish)("notifications.clearCache").catch((l) =>
                  t.error("Failed to clear notifications cache", l)
                ),
              (a = u),
              (o = p);
          }, e.health.storageInterval);
        return async () => {
          await (0, uS.clearIntervalAsync)(i);
        };
      }),
      (mS = pW);
  });
var Ds,
  al = x(() => {
    (function (s) {
      (s.OFF = "off"), (s.DEFAULT = "default"), (s.CUSTOM = "custom");
    })(Ds || (Ds = {}));
  });
var Vo,
  Na,
  Ci,
  hS = x(() => {
    Vo = g(require("handoff"));
    vi();
    (Na = async () =>
      (await (0, Vo.publish)("system.device")).features.storage
        ? (await (0, Vo.publish)("system.ustorage.inspect")).disks.some(
            (r) => r.state !== ze.NO_DISK
          )
        : !1),
      (Ci = async () =>
        (await (0, Vo.publish)("system.device")).features.storage
          ? (await (0, Vo.publish)("system.ustorage.inspect")).sdcards.some(
              (r) => r.state !== ze.NO_DISK
            )
          : !1);
  });
var yS,
  mW,
  fW,
  Di,
  wS = x(() => {
    yS = g(require("handoff"));
    hS();
    (mW = (e) => e),
      (fW = mW([
        {
          id: "driveFailed",
          requiredData: ["consoleName", "clickUrl"],
          category: "system",
          defaults: { push: !0, email: !1, list: !0 },
          email: { messageType: "console-drive-failed" },
          push: {
            title: "HDD Broken",
            body: "A hard drive is no longer storing data. Please replace it with a surveillance grade model to avoid performance issues.",
          },
          frequencyLimit: 86400,
          isSupported: Na,
        },
        {
          id: "driveIssues",
          requiredData: ["clickUrl", "hddSlot"],
          category: "system",
          defaults: { push: !0, email: !1, list: !0 },
          email: {
            messageType: "console-drive-issues",
            requiredVars: ["hdd_slot"],
          },
          push: { title: "HDD Replacement Needed" },
          frequencyLimit: 86400,
          isSupported: Na,
        },
        {
          id: "driveNotSupported",
          requiredData: ["hddSlot", "hddModel", "clickUrl"],
          category: "system",
          defaults: { push: !0, email: !1, list: !0 },
          push: { title: "Incompatible HDD Installed" },
          email: {
            messageType: "console-drive-incompatible",
            requiredVars: ["hdd_slot", "hdd_model"],
          },
          isSupported: Na,
        },
        {
          id: "hddInstalled",
          requiredData: [],
          category: "system",
          defaults: { push: !0, email: !1, list: !0 },
          push: {
            title: "Compatible HDD Installed",
            body: "Your hard drive is fully compatible and ready for use.",
          },
          email: { messageType: "console-drive-ready" },
          isSupported: Na,
        },
        {
          id: "sdCardInstalled",
          requiredData: ["sdCardModel"],
          category: "system",
          defaults: { push: !0, email: !1, list: !0 },
          push: {
            title: "SD Card Installed",
            body: "An SD Card has been inserted.",
          },
          email: {
            messageType: "console-sd-inserted",
            requiredVars: ["sd_model"],
          },
          isSupported: Ci,
        },
        {
          id: "hddEjected",
          requiredData: ["hddSlot"],
          category: "system",
          defaults: { push: !0, email: !1, list: !0 },
          push: { title: "HDD Removed" },
          email: {
            messageType: "console-drive-removed",
            requiredVars: ["hdd_slot"],
          },
          isSupported: Na,
        },
        {
          id: "sdCardEjected",
          requiredData: ["sdCardModel"],
          category: "system",
          defaults: { push: !0, email: !1, list: !0 },
          push: {
            title: "SD Card Removed",
            body: "An SD card has been removed.",
          },
          email: {
            messageType: "console-sd-removed",
            requiredVars: ["sd_model"],
          },
          isSupported: Ci,
        },
        {
          id: "sdCardIssues",
          requiredData: ["clickUrl", "sdCardModel"],
          category: "system",
          defaults: { push: !0, email: !1, list: !0 },
          push: {
            title: "SD Card Replacement Needed",
            body: "The SD Card is having issues and must be replaced.",
          },
          email: {
            messageType: "console-sd-issues",
            requiredVars: ["sd_model"],
          },
          isSupported: Ci,
        },
        {
          id: "consoleStacked",
          requiredData: ["consoleName", "secondaryMac", "consoleModel"],
          category: "system",
          defaults: { push: !1, email: !1, list: !0 },
          notificationsDisabled: !0,
          isSupported: async () =>
            !!(await (0, yS.publish)("system.device")).features?.stackable,
        },
        {
          id: "applicationAction",
          requiredData: ["application", "action", "user"],
          category: "system",
          defaults: { push: !0, email: !1, list: !0 },
          email: {
            messageType: "application-lifecycle-action",
            requiredVars: [
              "application",
              "application_name",
              "action",
              "user_name",
            ],
          },
          isSupported: () => !0,
        },
        {
          id: "cloudConnectionLost",
          requiredData: ["consoleName"],
          category: "system",
          defaults: { push: !1, email: !1, list: !0 },
          notificationsDisabled: !0,
          isSupported: () => !0,
        },
        {
          id: "consoleUpdateAvailable",
          requiredData: ["consoleName", "version"],
          category: "updates",
          defaults: { push: !0, email: !1, list: !0 },
          email: {
            messageType: "console-update-available",
            requiredVars: ["version_current", "version_new"],
          },
          push: { title: "UniFi OS Update Available" },
          isUnique: !0,
          isSupported: () => !0,
        },
        {
          id: "consoleUpdated",
          requiredData: ["consoleName", "version", "action"],
          category: "updates",
          defaults: { push: !0, email: !1, list: !0 },
          email: {
            messageType: "console-update-successful",
            requiredVars: ["version_current", "release_date"],
          },
          push: { title: "UniFi OS Updated" },
          isSupported: () => !0,
        },
        {
          id: "applicationUpdateAvailable",
          requiredData: ["application", "applicationId", "version"],
          category: "updates",
          defaults: { push: !1, email: !1, list: !0 },
          email: {
            messageType: "application-update-available",
            requiredVars: [
              "application",
              "application_name",
              "application_version",
            ],
          },
          isSupported: () => !0,
        },
        {
          id: "applicationUpdated",
          requiredData: ["application", "applicationId", "version", "action"],
          category: "updates",
          defaults: { push: !1, email: !1, list: !0 },
          email: {
            messageType: "application-updated",
            requiredVars: [
              "application",
              "application_name",
              "application_version",
            ],
          },
          isSupported: () => !0,
        },
        {
          id: "applicationUpdateFailed",
          requiredData: ["application"],
          category: "updates",
          defaults: { push: !1, email: !1, list: !0 },
          email: {
            messageType: "application-update-failed",
            requiredVars: ["application", "application_name"],
          },
          isSupported: () => !0,
        },
        {
          id: "adminAdded",
          requiredData: ["user", "rolePrefixed", "userAffected"],
          category: "admins",
          defaults: { push: !1, email: !1, list: !0 },
          email: {
            messageType: "console-user-added-v2",
            requiredVars: [
              "user_avatar_id",
              "user_name",
              "user_affected_name",
              "role_prefixed",
            ],
          },
          push: { title: "Admin Invited" },
          isSupported: () => !0,
        },
        {
          id: "adminRemoved",
          requiredData: ["user", "consoleName", "userAffected"],
          category: "admins",
          defaults: { push: !1, email: !1, list: !0 },
          email: {
            messageType: "console-user-removed",
            requiredVars: ["user_avatar_id", "user_affected_name", "user_name"],
          },
          push: { title: "Admin Removed" },
          isSupported: () => !0,
        },
        {
          id: "adminRoleChanged",
          requiredData: ["user", "role", "userAffected"],
          category: "admins",
          defaults: { push: !1, email: !1, list: !0 },
          email: {
            messageType: "console-user-role-changed",
            requiredVars: [
              "user_avatar_id",
              "user_affected_name",
              "role",
              "user_name",
            ],
          },
          push: { title: "Admin Role Changed" },
          isSupported: () => !0,
        },
        {
          id: "adminAccess",
          requiredData: ["user", "accessMethod"],
          category: "admins",
          defaults: { push: !1, email: !1, list: !0 },
          push: { title: "Admin Accessed Console" },
          email: {
            messageType: "admin-access",
            requiredVars: ["user_name", "access_method"],
          },
          isSupported: () => !0,
        },
        {
          id: "adminSettingsChanged",
          requiredData: ["user", "settingName"],
          category: "admins",
          defaults: { push: !1, email: !1, list: !0 },
          push: { title: "Admin Changed Settings on Console" },
          email: {
            messageType: "admin-settings-changed",
            requiredVars: ["user_name", "setting_name"],
          },
          isSupported: () => !0,
        },
        {
          id: "backupCreated_v2",
          requiredData: ["consoleName", "user"],
          category: "backups",
          defaults: { push: !1, email: !1, list: !0 },
          email: {
            messageType: "console-backup-created",
            requiredVars: ["user_name"],
          },
          push: { title: "UniFi Console Backup Created" },
          isSupported: () => !0,
        },
        {
          id: "backupRestored",
          requiredData: ["user", "consoleName", "time"],
          category: "backups",
          defaults: { push: !1, email: !1, list: !0 },
          email: {
            messageType: "console-backup-restored",
            requiredVars: ["user_name", "time"],
          },
          push: { title: "UniFi Console Restored from Backup" },
          isSupported: () => !0,
        },
      ])),
      (Di = fW);
  });
var gS,
  Lt,
  ES,
  Ni,
  SS,
  hW,
  jo,
  Ri,
  Go,
  bS,
  Ho,
  yW,
  wW,
  gW,
  _S,
  TS = x(() => {
    (gS = g(require("cron"))),
      (Lt = g(require("handoff"))),
      (ES = g(require("uuid")));
    qo();
    sl();
    Ni = g(H());
    Re();
    va();
    fS();
    al();
    wS();
    (SS = Object.values(vs)),
      (hW = new Map(Di.map((e) => [e.id, e]))),
      (jo = new Map()),
      (Ri = new Map()),
      (Go = null),
      (bS = async () =>
        Go ||
        ((Go = fi(
          await Promise.all(Di.map(async (e) => [e.id, await e.isSupported()]))
        )),
        Go)),
      (Ho = null),
      (yW = async () => {
        if (Ho) return Ho;
        let e = await bS();
        return (
          (Ho = fi(
            Di.filter((t) => t.notificationsDisabled !== !0).map((t) => [
              t.id,
              {
                emailEnabled: t.defaults.email,
                pushEnabled: t.defaults.push,
                visible: e[t.id],
              },
            ])
          )),
          Ho
        );
      }),
      (wW = () => {
        (Go = null), (Ho = null), jo.clear(), Ri.clear();
      }),
      (gW = async (e, t) => {
        let r = null,
          s = mS(e, t),
          a = async (h) => {
            let S = await Ye(),
              D = (
                await S(we.USER_SETTINGS)
                  .where("user_id", h)
                  .select("notification_settings")
              )[0];
            if (D) return D.notification_settings;
            let A = (
              await S(we.USER_SETTINGS)
                .insert({ user_id: h })
                .returning("notification_settings")
            )[0];
            if (A) return A;
            throw new Error(
              `Failed to retrieve notification settings mode for user ${h}`
            );
          },
          o = async (h) => {
            let S = jo.get(h);
            if (S) return S;
            let D = await a(h);
            if (((S = { mode: D }), D === Ds.OFF)) return jo.set(h, S), S;
            let A = await yW();
            return (
              D === Ds.CUSTOM &&
                (
                  await (
                    await Ye()
                  )(we.NOTIFICATION_SETTINGS).where("user_id", h)
                ).forEach((N) => {
                  !A[N.event_id] ||
                    (A[N.event_id] = {
                      visible: A[N.event_id].visible,
                      emailEnabled: N.email_enabled,
                      pushEnabled: N.push_enabled,
                    });
                }),
              (S.events = A),
              jo.set(h, S),
              S
            );
          },
          n = async (h) => {
            let S = Ri.get(h);
            return (
              S ||
              ((S = await o(h)),
              S.events &&
                (S.events = fi(
                  Object.entries(S.events).filter(([D, A]) => A.visible)
                )),
              Ri.set(h, S),
              S)
            );
          },
          i = async (h) => {
            let { eventId: S, eventData: D = {} } = h;
            if (!S) throw new Error("Event ID not provided");
            let A = hW.get(S);
            if (!A) throw new Error(`Event "${S}" not supported`);
            let C = A.requiredData.filter((b) => D[b] === void 0);
            if (C.length > 0)
              throw new Error(`Missing data properties: ${C.join(", ")}`);
            let R = A.email?.requiredVars || [];
            if (R.length > 0) {
              let b = h.email?.vars || {},
                T = R.filter((M) => b[M] === void 0);
              if (T.length > 0)
                throw new Error(`Missing email template data: ${T.join(", ")}`);
            }
            let N = A.push?.requiredAttributes || [];
            if (N.length > 0) {
              let b = h.push?.message?.attributes || {},
                T = N.filter((M) => b[M] === void 0);
              if (T.length > 0)
                throw new Error(
                  `Missing push notification data: ${T.join(", ")}`
                );
            }
            return A;
          },
          c = async (h, S) =>
            (
              await (await Ye())(we.NOTIFICATIONS)
                .where("event_id", h)
                .whereRaw(`created_at > NOW() - INTERVAL '${S} seconds'`)
            ).length > 0,
          d = async (h) => {
            let S = [],
              D = [],
              A = await (0, Lt.publish)("uum.getUsers");
            return (
              await Promise.all(
                A.filter(
                  (C) =>
                    C.ucorePermission[Ve.EDIT_NOTIFICATIONS] &&
                    C.sso_uuid.length > 0
                ).map(async (C) => {
                  let R = C.unique_id,
                    N = await o(R);
                  if (N.mode === Ds.OFF) return;
                  let b = N?.events?.[h]?.emailEnabled,
                    T = N?.events?.[h]?.pushEnabled;
                  b && S.push(C.sso_uuid), T && D.push(C.sso_uuid);
                })
              ),
              { emailSsoIds: S, pushSsoIds: D }
            );
          },
          u = async (h) => {
            let S = await i(h),
              { category: D, isUnique: A = !1, frequencyLimit: C } = S,
              {
                eventId: R,
                eventData: N = {},
                email: b = {},
                push: T = {},
              } = h;
            if (C && (await c(R, C))) {
              t.debug(`Throttling ${R} notification`);
              return;
            }
            let { emailSsoIds: M, pushSsoIds: q } = await d(R);
            if (M.length > 0) {
              let k = b.messageType || S.email?.messageType;
              if (k) {
                let I = {
                  from: b.from,
                  to: M,
                  messageType: k,
                  vars: b.vars,
                  imagesToUpload: b.imagesToUpload,
                };
                t.debug(`Sending email for ${R}:`, I),
                  (0, Lt.publish)("cloud.sendEmail", I)
                    .then((_) => t.debug(`Email sent for ${R}:`, _))
                    .catch((_) => t.error(`Failed to send email for ${R}:`, _));
              } else
                t.warn(
                  `No email message type provided for notification "${R}"`
                );
            }
            if (q.length > 0) {
              let k = T.app && SS.includes(T.app) ? T.app : vs.NETWORK,
                I = SS.filter((P) => P !== k),
                _ = await (0, Ni.getName)();
              if (_) {
                let P = T.message?.title || S.push?.title || "";
                P.length ||
                  t.warn(`Empty push title provided for notification "${R}"`);
                let U = T.message?.body || S.push?.body || "";
                U.length ||
                  t.warn(`Empty push body provided for notification "${R}"`);
                let j = {
                  app: k,
                  alternativeApps: I,
                  ssoIds: q,
                  message: {
                    title: `${_}: ${P}`,
                    body: U,
                    type: "notification",
                    sound: "default",
                    attributes: T.message?.attributes || {},
                  },
                  collapseKey: T.collapseKey,
                  imageToUpload: T.imageToUpload,
                };
                (T.ssoIds = q),
                  t.debug(`Sending push notification for ${R}:`, j),
                  (0, Lt.publish)("cloud.sendPushNotification", j)
                    .then((K) => t.debug(`Push notification sent for ${R}:`, K))
                    .catch((K) =>
                      t.error(`Failed to send push notification for ${R}:`, K)
                    );
              } else
                t.error(
                  "Can't retrieve console name, skipping push notification"
                );
            }
            if (!S.defaults.list) return null;
            try {
              let k = await Ye();
              A && (await k(we.NOTIFICATIONS).where({ event_id: R }).del());
              let I = (
                await k(we.NOTIFICATIONS)
                  .insert({
                    id: (0, ES.v4)(),
                    category: D,
                    event_id: R,
                    event_data: JSON.stringify(N),
                  })
                  .returning("id")
              )[0];
              if (I) return I;
              throw new Error("Failed to insert notification");
            } catch (k) {
              throw (t.error("Database insert error:", k), k);
            }
          },
          p = async (h) => {
            await (await Ye())(we.NOTIFICATIONS).where("id", h).del();
          },
          l = async ({
            limit: h = 100,
            offset: S = 0,
            from: D = null,
            to: A = null,
            category: C = [],
            eventId: R = [],
          }) => {
            try {
              let b = (await Ye())(we.NOTIFICATIONS).limit(h).offset(S);
              if (
                (C.length && (b = b.whereIn("category", C)),
                R.length && (b = b.whereIn("event_id", R)),
                D)
              ) {
                let T = new Date(parseInt(D));
                b = b.where("created_at", ">=", T.toISOString());
              }
              if (A) {
                let T = new Date(parseInt(A));
                b = b.where("created_at", "<", T.toISOString());
              }
              return await b.orderBy("created_at", "desc");
            } catch (N) {
              throw (
                (t.error("Error retrieving notifications:", N),
                new Error("Failed to retrieve notifications"))
              );
            }
          },
          f = async (h, S) => {
            try {
              let D = await Ye(),
                { mode: A, events: C } = S;
              if (
                (A &&
                  (await D(we.USER_SETTINGS)
                    .insert({ user_id: h, notification_settings: A })
                    .onConflict("user_id")
                    .merge()),
                C)
              ) {
                let R = [],
                  N = await bS(),
                  b = C.filter((T) =>
                    N[T.eventId]
                      ? R.includes(T.eventId)
                        ? (t.warn(
                            `Duplicate update key received for "${T.eventId}"`
                          ),
                          !1)
                        : (R.push(T.eventId), !0)
                      : !1
                  ).map((T) => ({
                    user_id: h,
                    event_id: T.eventId,
                    email_enabled: T.emailEnabled,
                    push_enabled: T.pushEnabled,
                  }));
                await D(we.NOTIFICATION_SETTINGS)
                  .insert(b)
                  .onConflict(["user_id", "event_id"])
                  .merge();
              }
              jo.delete(h), Ri.delete(h);
            } catch (D) {
              throw (
                (t.error("Error updating user settings:", D),
                new Error("Failed to update user settings"))
              );
            }
          },
          m = async ({ from: h = null, to: S = null }) => {
            try {
              let D = await Ye(),
                A = { all: 0, category: {} },
                C = D(we.NOTIFICATIONS)
                  .select("category")
                  .count("*", { as: "total" }).groupByRaw(`
          GROUPING SETS (
            (),
            (category)
          )
        `);
              if (h) {
                let N = new Date(parseInt(h));
                C = C.where("created_at", ">=", N.toISOString());
              }
              if (S) {
                let N = new Date(parseInt(S));
                C = C.where("created_at", "<", N.toISOString());
              }
              return (
                (await C).forEach(({ category: N, total: b }) => {
                  if (b === void 0) return;
                  let T = Number(b);
                  if (N !== null) {
                    A.category[N] = T;
                    return;
                  }
                  A.all = T;
                }),
                A
              );
            } catch (D) {
              throw (
                (t.error("Error retrieving notification total counts:", D),
                new Error("Failed to retrieve notification counts"))
              );
            }
          },
          E = async () => {
            let S = await (await Ye())(we.NOTIFICATIONS)
              .whereRaw(
                `created_at < NOW() - INTERVAL '${e.notifications.retentionPeriodDays} days'`
              )
              .del();
            S > 0 &&
              t.info(
                `Removed ${S} notifications older than ${e.notifications.retentionPeriodDays} days`
              );
          },
          y = [
            (0, Lt.subscribe)("notifications.add", (h, S) => u(S)),
            (0, Lt.subscribe)("notifications.remove", (h, S) => p(S)),
            (0, Lt.subscribe)("notifications.get", (h, S) => l(S)),
            (0, Lt.subscribe)("notifications.totals", (h, S) => m(S)),
            (0, Lt.subscribe)("notifications.updateUserSettings", (h, S, D) =>
              f(S, D)
            ),
            (0, Lt.subscribe)(
              "notifications.getVisibleUserSettings",
              async (h, S) => {
                try {
                  return await n(S);
                } catch (D) {
                  throw (
                    (t.error("Error retrieving user settings:", D),
                    new Error("Failed to retrieve notification user settings"))
                  );
                }
              }
            ),
            (0, Lt.subscribe)("notifications.clearCache", wW),
          ];
        return (
          setTimeout(async () => {
            try {
              await E();
            } catch (h) {
              t.error("Failed to cleanup old notifications on startup:", h);
            }
          }, 5e3),
          (0, Ni.getTimezone)().then((h) => {
            r = new gS.default.CronJob(
              "0 15 0 * * *",
              async () => {
                try {
                  await E();
                } catch (S) {
                  t.error("Failed to run scheduled notifications cleanup:", S);
                }
              },
              null,
              !0,
              h
            );
          }),
          async () => {
            s(),
              y.forEach((h) => (0, Lt.unsubscribe)(h)),
              r && (r.stop(), (r = null));
          }
        );
      }),
      (_S = gW);
  });
var IS = {};
lt(IS, { SharedTokenExpiredError: () => Pi });
var Pi,
  ol = x(() => {
    Pi = class extends Error {
      constructor() {
        super("Shared token expired");
      }
    };
  });
var AS,
  Xr,
  Ui,
  Wo,
  EW,
  SW,
  vS,
  CS = x(() => {
    (AS = g(require("cron"))),
      (Xr = g(require("handoff"))),
      (Ui = g(require("uuid")));
    va();
    Wo = g(H());
    Re();
    ol();
    (EW = 24 * 60 * 60),
      (SW = async (e, t) => {
        let r = null,
          s = async (c = EW) => {
            try {
              let { deviceId: d } = await (0, Wo.getCloudSettings)(),
                u = await Ye();
              t.debug("Token creation requested with TTL", c);
              let p = (0, Ui.v4)(),
                l = Date.now(),
                f = new Date(l + c * 1e3);
              return (
                await u.transaction(async (m) => {
                  await u(we.SHARED_TOKENS)
                    .insert({ token: p, expires_at: f })
                    .transacting(m);
                  let E = { token: p, ttl: c, cmd: "CREATE" },
                    y = (0, Ui.v4)(),
                    h = await (0, Xr.publish)(
                      "cloud.devicePublish",
                      `ucore/shared-token/${d}`,
                      E,
                      y
                    );
                  if (h.result !== "OK")
                    throw new Error(`NCA Error: ${h.result}`);
                  t.debug("Token created, NCA response:", h);
                }),
                p
              );
            } catch (d) {
              throw (t.error("Failed to create token:", d), d);
            }
          },
          a = async (c) => {
            let d = 0;
            try {
              let u = await Ye(),
                { deviceId: p } = await (0, Wo.getCloudSettings)();
              if (
                ((d = await u(we.SHARED_TOKENS).where({ token: c }).del()),
                d < 1)
              )
                throw new Error("Non-existent token");
              let l = { token: c, cmd: "DELETE" },
                f = await (0, Xr.publish)(
                  "cloud.devicePublish",
                  `ucore/shared-token/${p}`,
                  l,
                  (0, Ui.v4)()
                );
              if (f.result !== "OK") throw new Error(`NCA Error: ${f.result}`);
            } catch (u) {
              if (d > 0) {
                t.warn(
                  "Token revoked locally but failed to revoke from cloud",
                  u
                );
                return;
              }
              throw (
                (t.error("Failed to revoke shared token:", u),
                new Error("Failed to revoke token"))
              );
            }
          },
          o = async (c) => {
            try {
              let d = await Ye(),
                [u] = await d(we.SHARED_TOKENS).where({ token: c });
              if (!u) throw new Error("Token not found");
              let p = new Date(),
                { expires_at: l } = u;
              if (p >= l) throw new Pi();
              return { expiresAt: l, token: c };
            } catch (d) {
              throw (t.error("Failed to validate token:", d), d);
            }
          },
          n = async () => {
            try {
              let d = await (
                await Ye()
              )(we.SHARED_TOKENS).whereRaw(
                `expires_at < NOW() - INTERVAL '${e.sharedTokens.retentionPeriodDays} days'`
              );
              if (d.length === 0) return;
              t.info(
                `Cleaning up ${d.length} expired token(s) older than ${e.sharedTokens.retentionPeriodDays} days`
              ),
                await Promise.allSettled(d.map(({ token: u }) => a(u)));
            } catch (c) {
              t.error("Failed to clean-up old expired tokens", c);
            }
          },
          i = [
            (0, Xr.subscribe)("sharedToken.create", (c, d) => s(d)),
            (0, Xr.subscribe)("sharedToken.revoke", (c, d) => a(d)),
            (0, Xr.subscribe)("sharedToken.validate", (c, d) => o(d)),
          ];
        return (
          setTimeout(n, 5e3),
          (0, Wo.getTimezone)().then((c) => {
            r = new AS.default.CronJob("0 15 0 * * *", n, null, !0, c);
          }),
          () => {
            i.forEach((c) => (0, Xr.unsubscribe)(c)),
              r && (r.stop(), (r = null));
          }
        );
      }),
      (vS = SW);
  });
var Ko = w((Ege, DS) => {
  DS.exports = {
    SUBSCRIPTION_PRIORITY: { DEFAULT: -1, HIGH: 0, MID: 1, LOW: 2 },
  };
});
var nl = w((Sge, NS) => {
  var { fetch: bW } = ie(),
    { get: _W } = require("lodash"),
    TW =
      "pk.eyJ1Ijoic2NoZWluZXJib2NrIiwiYSI6ImNqd3YzNmE0NzAyb2U0MXBmeTVhNXI2MzQifQ.mXp_TO5ZiUueoiCEhcEXlA";
  NS.exports = async ({ lat: e, long: t, token: r = TW }) => {
    let s = `https://api.mapbox.com/geocoding/v5/mapbox.places/${t},${e}.json?access_token=${r}&types=place`,
      a = await bW(s, { timeout: 15e3 });
    if (!a.ok) {
      let i = new Error(
        `Failed to resolve location: ${a.status} ${a.statusText}`
      );
      throw ((i.status = a.status), i);
    }
    let o = await a.json();
    return _W(o, "features[0].place_name", null);
  };
});
var Yo = w((bge, RS) => {
  var { fetch: IW } = ie();
  RS.exports = async () => {
    let e = await IW("https://ips1.unifi-ai.com/geo", { timeout: 15e3 });
    if (e.ok) return e.json();
    throw new Error(JSON.stringify(await e.json()));
  };
});
var kS = w((_ge, US) => {
  var AW = nl(),
    vW = Yo(),
    PS = 200,
    CW = 1e3;
  US.exports = async (e = {}) => {
    let { text: t, lat: r = null, long: s = null, radius: a = PS } = e;
    if (r === null || s === null)
      try {
        let { latitude: o, longitude: n } = await vW();
        (r = o), (s = n);
      } catch {}
    if (!t)
      try {
        t = await AW({ lat: r, long: s });
      } catch {}
    return (
      (a = Math.min(Math.max(parseInt(a, 10), PS), CW)),
      { lat: r, long: s, radius: a, text: t }
    );
  };
});
var DW,
  gt,
  Qr = x(() => {
    (DW = (e, t = ":") => {
      let r = e
        .replace(/-/g, "")
        .replace(/:/g, "")
        .toUpperCase()
        .match(/.{1,2}/g);
      return r ? r.join(t) : "";
    }),
      (gt = DW);
  });
var ki = w((Ige, OS) => {
  var { errorCodes: NW } = (se(), me);
  OS.exports = (e) =>
    e.code === NW.DEVICE_PUBLISH_TIMEOUT.code ||
    e.code === "EAI_AGAIN" ||
    e.message.includes("timeout of") ||
    e.message.includes("network timeout at");
});
var qS,
  FS,
  LS,
  Mt,
  Ns = x(() => {
    (qS = g(require("bluebird"))),
      (FS = g(require("uuid"))),
      (LS = async (
        e,
        t,
        {
          maxAttempts: r,
          interval: s,
          backoff: a = 1,
          logger: o,
          retryId: n = (0, FS.v4)(),
          jitter: i = !1,
          name: c,
        },
        ...d
      ) => {
        try {
          return await e(...d);
        } catch (u) {
          if (await t(u))
            if (r > 1) {
              let p = i ? s / 2 + (Math.random() * s) / 2 : s;
              return (
                await qS.default.delay(p),
                o.info(
                  `Retrying failed fn (${
                    c || e.name
                  }), attemptsLeft: ${r}, retryId: ${n}`
                ),
                LS(
                  e,
                  t,
                  {
                    maxAttempts: r - 1,
                    interval: s * a,
                    backoff: a,
                    logger: o,
                    retryId: n,
                    name: c,
                  },
                  ...d
                )
              );
            } else throw u;
          throw u;
        }
      }),
      (Mt = LS);
  });
var MS = {};
lt(MS, { CMD_UBNT_SYSTOOL: () => Oi });
var Oi,
  il = x(() => {
    Oi = "/usr/bin/sudo -n /sbin/ubnt-systool";
  });
var ll = {};
lt(ll, {
  getInterfaceNetworkSpeed: () => ul,
  setInterfaceNetworkSpeed: () => dl,
});
var cl,
  ul,
  dl,
  zo = x(() => {
    cl = g(Ce());
    _s();
    il();
    (ul = async (e) => {
      return qe.AUTONEG
      // let t = `${Oi} network-speed ${e}`,
      //   { stdout: r } = await (0, cl.default)(t),
      //   s;
      // try {
      //   s = JSON.parse(r.trim());
      // } catch {
      //   throw new Error(`Failed to parse ${t} stdout=${r}`);
      // }
      // if (s["auto-nego"] === "on") return qe.AUTONEG;
      // let a = parseInt(s.speed);
      // if (a === qe.FDX_10_000) return qe.FDX_10_000;
      // if (a === qe.FDX_1_000) return qe.FDX_1_000;
      // throw new Error(`Unexpected speed=${a} received by cmd=${t}`);
    }),
      (dl = async (e, t) => {
        //await (0, cl.default)(`${Oi} network-speed ${e} ${t}`);
        return qe.AUTONEG
      });
  });
var xS,
  $S,
  BS,
  VS = x(() => {
    zo();
    _s();
    wa();
    (xS = (e) => {
      switch (e) {
        case tt.AUTONEG:
        case qe.AUTONEG:
          return Vt.AUTONEG;
        case tt.FDX_10_000:
        case qe.FDX_10_000:
          return Vt.FDX_10_000;
        case tt.FDX_1_000:
        case qe.FDX_1_000:
          return Vt.FDX_1_000;
        default:
          throw new Error(`Unsupported SFP WAN port configuration found: ${e}`);
      }
    }),
      ($S = (e) => {
        switch (e) {
          case Vt.FDX_10_000:
            return qe.FDX_10_000;
          case Vt.FDX_1_000:
            return qe.FDX_1_000;
          case Vt.AUTONEG:
            return qe.AUTONEG;
          default:
            throw new Error(
              `Unsupported systool SFP WAN port configuration received: ${e}`
            );
        }
      }),
      (BS = async (e) => {
        let {
            associatedIfaceId: t,
            portIdx: r,
            clientNetworkSupportedValues: s = [],
            unifiNetworkSupportedValues: a = [],
          } = e,
          o = [...s, ...a].map(xS),
          n = await ul(e.associatedIfaceId)
            .catch(() => null)
            .then((i) => (i ? xS(i) : null));
        return {
          associatedIfaceId: t,
          portIdx: r,
          linkSpeed: n,
          linkSpeedSupportedValues: o,
        };
      });
  });
var jS,
  GS,
  qi,
  pl = x(() => {
    (jS = g(require("child_process"))),
      (GS = g(require("util"))),
      (qi = GS.default.promisify(jS.execFile));
  });
async function Zr() {
  let e = WS.get("data");
  if (!e) {
    try {
      let { stdout: t } = await qi("timedatectl", ["list-timezones"]);
      (e = new Set([
        ...t.trim().split(`
`),
        ...RW,
      ])),
        e.add("Europe/Kyiv");
    } catch (t) {
      throw new Error(
        `Failed to get the list of supported timezones: ${JSON.stringify(t)}`
      );
    }
    WS.set("data", e);
  }
  return e;
}
var HS,
  WS,
  RW,
  Jo = x(() => {
    HS = g(require("node-cache"));
    pl();
    WS = new HS.default({ stdTTL: 60 });
    RW = [
      "Etc/GMT-14",
      "Etc/GMT-13",
      "Etc/GMT-12",
      "Etc/GMT-11",
      "Etc/GMT-10",
      "Etc/GMT-9",
      "Etc/GMT-8",
      "Etc/GMT-7",
      "Etc/GMT-6",
      "Etc/GMT-5",
      "Etc/GMT-4",
      "Etc/GMT-3",
      "Etc/GMT-2",
      "Etc/GMT-1",
      "Etc/GMT",
      "Etc/GMT+1",
      "Etc/GMT+2",
      "Etc/GMT+3",
      "Etc/GMT+4",
      "Etc/GMT+5",
      "Etc/GMT+6",
      "Etc/GMT+7",
      "Etc/GMT+8",
      "Etc/GMT+9",
      "Etc/GMT+10",
      "Etc/GMT+11",
      "Etc/GMT+12",
      "Etc/UTC",
      "EET",
      "CET",
      "MET",
      "WET",
      "EST",
      "EST5EDT",
      "CST6CDT",
      "MST",
      "MST7MDT",
      "PST8PDT",
      "HST",
      "Factory",
    ];
  });
var ml = w((qge, YS) => {
  var KS = require("fs-extra"),
    PW = Ce(),
    { v4: UW } = require("uuid");
  YS.exports = async () => {
    let e = `/data/unifi-core/${UW()}`;
    try {
      return await PW(`sudo -n ubnt-tools id ${e}`), await KS.readFile(e);
    } finally {
      await KS.unlink(e).catch(() => null);
    }
  };
});
var kW,
  Fi,
  fl = x(() => {
    Qr();
    (kW = (e) => !!/^[0-9A-F]{12}$/.test(gt(e, ""))), (Fi = kW);
  });
var zS,
  OW,
  Li,
  hl = x(() => {
    (zS = g(Ce())),
      (OW = async () => {
        let { stdout: e } = await (0, zS.default)(
          `awk -F= '$1=="VERSION_CODENAME" { print $2 ;}' /etc/os-release`
        );
        return e.trim();
      }),
      (Li = OW);
  });
var JS,
  XS,
  qW,
  QS,
  ZS = x(() => {
    (JS = g(require("lodash"))), (XS = g(require("os")));
    Qr();
    fl();
    ga();
    hl();
    (qW = async (e) => {
      let t = Xt.cloud,
        r = XS.default.networkInterfaces(),
        a =
          (t.primaryInterfaces
            ? t.primaryInterfaces.map((n) => n.name)
            : []
          ).find((n) => r[n]) || Object.keys(r)[0],
        o = "";
      if (a && ((o = gt((0, JS.get)(r, [a, 0, "mac"], ""), "")), !Fi(o)))
        throw new Error(`Invalid MAC address: ${o}`);
      return {
        shortname: "CLOUD",
        firmwareVersion: e.version,
        uuid: e.consoleId,
        sysid: 59904,
        mac: o,
        debianCodename: await Li(),
      };
    }),
      (QS = qW);
  });
var rb = w((Yge, tb) => {
  Qr();
  fl();
  ZS();
  hl();
  var eb = Ce(),
    { UBIOS_HARDWARE_PLATFORM: FW } = Wr(),
    { getFirmwareVersionAndPlatform: LW } = (Ue(), We);
  tb.exports = async (e, t) => {
    if (process.env.IS_CLOUD_INSTANCE) return QS(e);
    let { stdout: r } = await eb("sudo -n ubnt-tools id"),
      s = {};
    r
      .toString()
      .split(
        `
`
      )
      .forEach((i) => {
        let c = i.split("=");
        c.length === 2 && (s[c[0].trim().replace("board.", "")] = c[1].trim());
      }),
      s.sysid && (s.sysid = parseInt(s.sysid)),
      s.hwrev && (s.hwrev = parseInt(s.hwrev));
    let a = gt(s.serialno, "");
    if (!Fi(a)) throw new Error(`Invalid MAC address: ${a}`);
    s.mac = a;
    let o = "";
    try {
      let { stdout: i } = await eb("cat /usr/lib/version");
      o = i;
      let { firmwareVersion: c, hardwarePlatform: d } = LW(o);
      (s.firmwareVersion = c),
        (s.isUbios = d === FW),
        t.info(`Full firmware version string: ${o}`);
    } catch (i) {
      throw new Error(
        `Failed to get firmware version from string "${o}": ${i.message}`
      );
    }
    let n = await Li();
    if (n !== "bullseye") throw new Error(`Unsupported Debian version: ${n}`);
    return (s.debianCodename = n), s;
  };
});
var ob = w((zge, ab) => {
  var Ra = require("fs-extra"),
    sb = require("readline"),
    MW = Ce(),
    { getInterfaceNetworkSpeed: xW } = (zo(), ll);
  ab.exports = (e, t) => {
    let r = async ({ name: m, type: E }) => {
        let y = `/etc/systemd/network/${m}.network`,
          h = `/lib/systemd/network/${m}.network`,
          S;
        (await Ra.pathExists(y))
          ? (S = y)
          : (await Ra.pathExists(h)) && (S = h);
        try {
          let [D, A] = await Promise.all([
            S ? a(S).then(n) : {},
            E === "sfp" ? xW(m) : void 0,
          ]);
          return v(v({ name: m, type: E }, D), A ? { linkSpeed: A } : {});
        } catch (D) {
          t.error("error reading network data", D);
        }
      },
      s = async (m) =>
        (await Promise.all(m.map(async (y) => r(y)))).filter(
          (y) => y !== void 0
        ),
      a = (m) => {
        let E = sb.createInterface({ input: Ra.createReadStream(m) }),
          y = {};
        return new Promise((h) => {
          E.on("line", (S) => {
            if (S.match(/=/)) {
              let D = S.split(/=/);
              if (D && D.length > 1) {
                let A = D[0].trim(),
                  C = D[1].trim();
                if (A in y) {
                  let R = y[A];
                  Array.isArray(R) ? y[A].push(C) : (y[A] = [R, C]);
                } else y[A] = C;
              }
            }
          }),
            E.on("close", () => (t.debug("read network settings", y), h(y)));
        });
      },
      o = (m) => {
        let E = [];
        for (let y = 0; y < 4; y++) {
          let h = Math.min(m, 8);
          E.push(256 - Math.pow(2, 8 - h)), (m -= h);
        }
        return E.join(".");
      },
      n = (m) => {
        if (Object.keys(m).length === 0 && m.constructor === Object) return {};
        let E = m.DHCP === "yes",
          y = {};
        if (((y.mode = E ? "dhcp" : "static"), E))
          (y.address = m.Address),
            (y.netmask = m.Netmask),
            (y["dhcp-fallback-ip"] = m.Address),
            (y["dhcp-fallback-netmask"] = m.Netmask);
        else {
          let { Address: h } = m,
            S = (h && h.split("/")[1]) || 24,
            D = o(S);
          h && (y.address = h.indexOf("/") > 0 ? h.split("/")[0] : h),
            (y.netmask = D),
            (y.gateway = m.Gateway ? m.Gateway : void 0),
            (y["dhcp-fallback-ip"] = y.address),
            (y["dhcp-fallback-netmask"] = D);
        }
        return new Promise((h) => {
          y.gateway
            ? h()
            : i().then((S) => {
                (y.gateway = S), h();
              });
        })
          .then(() => d(m))
          .then((h) => (h.length === 0 ? [y.gateway] : ((y.dns = h), y)));
      },
      i = () =>
        MW("/sbin/route -n")
          .then(({ stdout: m }) => {
            let E = m.split(/\n/);
            return c(E);
          })
          .catch((m) => {
            t.debug("error retrieving disk info", m);
          }),
      c = (m) => {
        let E = m[1].split(/\s+/);
        for (let y = 2; y < m.length; y++) {
          let h = m[y].split(/\s+/),
            S = {};
          if ((E.forEach((D, A) => (S[D] = h[A])), S.Flags === "UG"))
            return S.Gateway;
        }
      },
      d = (m) => {
        let E;
        return (
          m.DNS ? (E = Array.isArray(m.DNS) ? m.DNS : [m.DNS]) : (E = []),
          Promise.resolve(E).then((y) =>
            y.length === 0 ? u("/etc/resolv.conf") : y
          )
        );
      },
      u = (m) => {
        let E = sb.createInterface({ input: Ra.createReadStream(m) }),
          y = [];
        return new Promise((h) => {
          E.on("line", (S) => {
            let D = S.split(/\s/);
            D && D.length > 1 && D[0] === "nameserver" && y.push(D[1]);
          }),
            E.on("close", () => (t.debug("returning dns", y), h(y)));
        });
      },
      p = async (m, E) => {
        t.debug("update network config", m);
        let y = { Match: { Name: m.name }, Network: {} };
        if (!m.mode) throw new Error("Invalid network config, missing mode");
        if (m.mode === "dhcp") {
          y.Network = { DHCP: "yes" };
          let D = m["dhcp-fallback-ip"],
            A = m["dhcp-fallback-netmask"],
            C = m["dhcp-fallback-gateway"];
          (D || A || C) &&
            ((y.Fallback = {}),
            D && (y.Fallback.Address = D),
            A && (y.Fallback.Netmask = A),
            C && (y.Fallback.Gateway = C));
        } else if (m.mode === "static") {
          let D = 24;
          if ((m.netmask && (D = f(m.netmask)), !m.address))
            throw new Error("Invalid network config, missing address");
          (y.Address = { Address: `${m.address}/${D}` }),
            m.gateway && (y.Route = { Gateway: m.gateway }),
            m.dns && (y.Network = { DNS: m.dns });
        }
        let h = "";
        Object.keys(y).forEach((D) => {
          h +=
            "[" +
            D +
            `]
`;
          let A = y[D];
          Object.keys(A).forEach((C) => {
            let R = A[C];
            Array.isArray(R)
              ? R.forEach((N) => {
                  h +=
                    C +
                    "=" +
                    N +
                    `
`;
                })
              : (h +=
                  C +
                  "=" +
                  R +
                  `
`);
          }),
            (h += `
`);
        }),
          t.silly(h);
        let S = `/tmp/modified-${m.name}.network`;
        await Ra.writeFile(S, h), await E(S, m), await Ra.unlink(S);
      },
      l = async (m, E) => {
        m.forEach((y) => p(y, E));
      },
      f = (m) => {
        let E = (S, D) => S.split(D).length - 1,
          y = (S) => (S >>> 0).toString(2);
        return E(
          ((S) => S.split(".").map(Number))(m)
            .map((S) => y(S))
            .join(""),
          "1"
        );
      };
    return { getClientNetworkConfig: s, updateClientNetworkConfig: l };
  };
});
var ct = w((Jge, nb) => {
  nb.exports = {
    BACKUP_BASE_FOLDER_PATH: "/data/unifi-core/backups",
    BACKUP_BASE_FOLDER_NAME: "backup",
    BACKUP_UCORE_FOLDER_NAME: "ucore",
    BACKUP_UCORE_CONFIG_FOLDER_NAME: "config",
    DOWNLOAD_BACKUP_TIMEOUT_MS: 60 * 1e3,
    DEBIAN_PACKAGE_VERSIONS_FILE_NAME: "package-versions.json",
    UPLOAD_FOLDER_PATH: "/data/unifi-core/uploads",
    ENCRYPTED_UBIOS_MIGRATION_DATA_FILE_PATH:
      "/data/ubios-migration-data.unifi",
    UBIOS_MIGRATION_DATA_FILE_PATH: "/data/ubios-migration-data.tar",
    UBIOS_MIGRATION_DATA_FOLDER_PATH: "/data/ubios-migration-data",
    LCM_SETTINGS_FILE_NAME: "ulcmd.conf",
    PROGRESS_STEPS: {
      BACKUP_DOWNLOAD: { step: "BACKUP_DOWNLOAD", expectedDuration: 30 * 1e3 },
      FW_UPGRADE: { step: "FW_UPGRADE", expectedDuration: 5 * 60 * 1e3 },
      SERVICE: { step: "SERVICE.*", expectedDuration: 30 * 1e3 },
      CONTROLLER: { step: "CONTROLLER.*", expectedDuration: 60 * 1e3 },
      UCORE: { step: "UCORE", expectedDuration: 30 * 1e3 },
    },
  };
});
var ib,
  yl,
  es,
  cb,
  $W,
  Mi,
  Ar,
  xi,
  BW,
  VW,
  jW,
  It,
  GW,
  HW,
  Et,
  WW,
  KW,
  YW,
  Xo,
  Qo,
  ub,
  db,
  lb,
  wl,
  pb,
  zW,
  JW,
  XW,
  Rs,
  Zo = x(() => {
    pl();
    Jo();
    (ib = g(ie())),
      (yl = require("os")),
      (es = require("fs-extra")),
      (cb = require("path")),
      ({ setIntervalAsync: $W } = require("set-interval-async/dynamic")),
      ({ clearIntervalAsync: Mi } = require("set-interval-async")),
      ({ publish: Ar } = require("handoff")),
      (xi = require("bluebird")),
      (BW = require("util")),
      (VW = require("child_process")),
      (jW = BW.promisify(VW.execFile)),
      ({ CMD_UBNT_SYSTOOL: It } = (il(), MS)),
      ({ setInterfaceNetworkSpeed: GW, getInterfaceNetworkSpeed: HW } =
        (zo(), ll)),
      (Et = Ce()),
      (WW = ml()),
      (KW = rb()),
      (YW = ob()),
      ({ AppError: Xo, errorCodes: Qo } = (se(), me)),
      ({ UPDATE_FAILED_CODES: ub } = Wr()),
      ({ UpdateFailedReason: db } = (vo(), ri)),
      ({
        UBIOS_MIGRATION_DATA_FILE_PATH: lb,
        ENCRYPTED_UBIOS_MIGRATION_DATA_FILE_PATH: wl,
      } = ct()),
      ({ SET_FIRMWARE_UPDATING_INFO: pb } = Z()),
      ({ getSizeByPath: zW } = (Ue(), We)),
      (JW = 12e4),
      (XW = (e, t) => {
        let r = () => KW(e, t)
        let s = () => WW().catch((I) => {
          // return (t.error(I), null)
        })
        let  a = YW(e, t),
          o = async () => {
            // if (!(await Ar("system.device")).features.ssh) return !1;
            // try {
            //   let { stdout: _ } = await Et(`${It} sshd`);
            //   return _ && _.trim() === "enabled";
            // } catch (_) {
            //   return !1;
            // }
          },
          n = async (I) => {
            // if (!(await Ar("system.device")).features.ssh)
            //   throw new Xo(Qo.ACTION_FORBIDDEN);
            // return t.info(`Set enable ssh to ${I}`), Et(`${It} sshd ${I}`);
          },
          i = async (I) => {
            // if (!(await Ar("system.device")).features.ssh)
            //   throw new Xo(Qo.ACTION_FORBIDDEN);
            // return (
            //   t.info("Setting ssh password"), Et(`${It} chpasswd`, `root:${I}`)
            // );
          },
          c = async (I) => {
            // if (!(await Ar("system.device")).features.ssh)
            //   throw new Xo(Qo.ACTION_FORBIDDEN);
            // t.info("Setting ssh hashed password");
            // let P = I.replace(/(["'$`\\])/g, "\\$1");
            // return Et(`${It} sshpasswd set '${P}'`);
          },
          d = async () => {
            // if (!(await Ar("system.device")).features.ssh)
            //   throw new Xo(Qo.ACTION_FORBIDDEN);
            // t.info("Get ssh hashed password");
            // let { stdout: _ } = await Et(`${It} sshpasswd get`);
            // return _.trim();
          },
          u = a.getClientNetworkConfig,
          p = (I) =>
            a.updateClientNetworkConfig(
              I,
              (_, P) => (
                t.info("Setting network config"),
                Et(`${It} network ${_} ${P.name}`)
              )
            ),
          l = async () => {
            let I = new Date().toString();
            return (
              t.info("syncTime"),
              Et(`${It} synctime`).then(
                (_) => (
                  t.info(
                    `syncTime complete. BEFORE: ${I}. AFTER: ${new Date().toString()}`
                  ),
                  _
                )
              )
            );
          },
          f = () => (t.info("Powering off"), Et(`${It} poweroff ucore`)),
          m = () => (
            t.info("Rebooting"),
            process.env.IS_CLOUD_INSTANCE
              ? (0, ib.fetch)(
                  `${
                    e.installationApiUrl
                  }/api/v2/reboot-installation/${encodeURIComponent(
                    e.consoleId
                  )}`,
                  {
                    method: "POST",
                    headers: {
                      Authorization: `token:${e.installationApiToken}`,
                    },
                  }
                )
              : Et(`${It} reboot ucore`)
          ),
          E = () => (
            t.info("Reset to defaults"), Et(`${It} reset2defaults ucore`)
          ),
          y = () => Et(`${It} getwans`),
          h = async (I) => {
            if (!(await Zr()).has(I))
              throw new Error(`Unknown timezone "${I}"`);
            return qi("ubnt-systool", ["timezone", I]);
          },
          S = async () => {
            let { isUbios: I } = await Ar("system.hardware");
            if (I)
              try {
                let { stdout: _ } = await Et("ssh-proxy /bin/hostname");
                return _.trim();
              } catch (_) {
                return (
                  t.error(
                    `Failed to get hostname from ubios, fallback to return ${yl.hostname()}`,
                    _
                  ),
                  yl.hostname()
                );
              }
            else return yl.hostname();
          },
          D = async (I) => {
            if (I === "") {
              let { shortname: _ } = await r();
              I = _;
            }
            return t.info(`Setting hostname - ${I}`), Et(`${It} hostname ${I}`);
          },
          A = async () => {
            try {
              let { stdout: I } = await Et(`${It} anonid`);
              return I ? I.trim() : null;
            } catch (I) {
              return t.warn("Error fetching anonid", I), null;
            }
          },
          C,
          R = async (I, _ = !0, P = !1) => {
            let U = cb.join(e.firmware.dir, "fwupdate.pid"),
              j;
            try {
              P ? await b(I, _) : await N(I),
                await new xi((K, J) => {
                  let F = setTimeout(
                      () => J(new Xo(Qo.FW_UPDATE_PID_NOT_FOUND, C)),
                      JW
                    ),
                    $ = $W(async () => {
                      try {
                        if (!(await es.pathExists(U))) return;
                        let O = parseInt(
                          (await es.readFile(U)).toString().trim()
                        );
                        if (
                          ((j = cb.join(
                            e.firmware.dir,
                            `fwupdate.status.${O}`
                          )),
                          !(await es.pathExists(j)))
                        )
                          return;
                        clearTimeout(F);
                        let V = (await es.readFile(j)).toString().trim();
                        switch (V) {
                          case "updating":
                            return;
                          case "rebooting":
                            return await Mi($), K();
                          case "invalid":
                            return (
                              await Mi($),
                              J(
                                new Error(
                                  `Firmware update failed. ${j} file contains "invalid" record`
                                )
                              )
                            );
                          default:
                            return (
                              await Mi($),
                              J(
                                new Error(
                                  `Firmware update unexpected progress file state = "${V}" provided by ${j} file`
                                )
                              )
                            );
                        }
                      } catch (O) {
                        return await Mi($), J(O);
                      }
                    }, 2e3);
                });
            } finally {
              await xi.all([es.remove(U), j && es.remove(j)]);
            }
          },
          N = async (I) => {
            t.info(`Applying firmware update: ${I}`);
            try {
              await xi.delay(3e3),
                (C = null),
                await Et(`${It} fwupdate ${I}`),
                t.info("fwupdate exit with successful exit code");
            } catch (_) {
              (C = _), t.error("fwupdate returned error", _);
            }
          },
          b = async (I, _ = !0) => {
            t.info(`Applying firmware update with UbiOS migration: ${I}`);
            try {
              await xi.delay(3e3),
                await Et(
                  `${It} fwupdate ${I} ${_ ? "" : "--uos-config-backup-only"}`
                ),
                t.info("fwupdate exit with successful exit code");
            } catch (P) {
              if (P.err)
                switch (P.err.code) {
                  case ub.ERR_INSUFFICIENT_MIGRATE_SPACE: {
                    let U = new Error(
                      "Not enough available RAM size for FW update"
                    );
                    try {
                      await Ar("chiper.encryptLocalBackup", lb, wl);
                      let j = await zW(wl);
                      await Ar("redux.dispatch", pb, { backupFileSize: j });
                    } catch (j) {
                      t.error(
                        "Failed to encrypt migration data and report size",
                        j
                      ),
                        await Ar("redux.dispatch", pb, { backupFileSize: 0 }),
                        es.remove(wl).catch(() => null);
                    } finally {
                      es.remove(lb).catch(() => null);
                    }
                    throw ((U.reason = db.BACKUP_FILE_TOO_BIG), U);
                  }
                  case ub.ERR_MIGRATION_DATA_CREATE_FAILED: {
                    let U = new Error("Failed to create backup files");
                    throw ((U.reason = db.BACKUP_FILE_CREATE_FAILED), U);
                  }
                  default:
                    break;
                }
              t.error("fwupdate returned error", P);
            }
          },
          T = (I) => {
            let _ = "/data/";
            if (!I.startsWith(_)) {
              t.error(`Failed to dump system info, invalid path: ${I}`);
              return;
            }
            t.info(`Getting system support dump to ${I}`);
            let P = I.replace(_, "");
            return Et(`${It} support ${P}`, void 0, { cwd: _ });
          },
          M = async () => {
            let I = {
                12: "Upgrading",
                3: "Factory Reset",
                2220: "Rebooting",
                20: "Booting",
                2: "Factory Default",
                1: "Configured",
              },
              _ = (
                await es.readFile(
                  "/sys/module/gpiodev/parameters/led_pattern",
                  "utf8"
                )
              )
                .trim()
                .split(",")[0];
            return _ in I ? I[_] : null;
          },
          q = async () => {
            let I = {
                upgrade: "Upgrading",
                reset: "Factory Reset",
                reboot: "Rebooting",
                setup: "Booting",
                factory_default: "Factory Default",
                configured: "Configured",
              },
              _ = (await jW("uled-ctrl", ["fw"])).stdout.trim();
            return _ in I ? I[_] : null;
          };
        return {
          getHardware: r,
          getEeprom: s,
          getLedStatus: async () => {
            try {
              let { isUbios: I } = await Ar("system.hardware");
              return I ? await M() : await q();
            } catch (I) {
              t.error("Failed to read LED status:", I);
            }
          },
          getSshEnabled: o,
          setSshEnabled: n,
          setSshPassword: i,
          setSshHashedPassword: c,
          getSshHashedPassword: d,
          supportDump: T,
          setTimezone: h,
          getHostname: S,
          setHostname: D,
          getWanInfo: y,
          getClientNetwork: u,
          setClientNetwork: p,
          syncTime: l,
          powerOff: f,
          reboot: m,
          resetToDefaults: E,
          updateFirmware: R,
          getAnonymousDeviceId: A,
          getInterfaceNetworkSpeed: HW,
          setInterfaceNetworkSpeed: GW,
        };
      }),
      (Rs = (e, t) => XW(e, t));
  });
var gl,
  mb,
  QW,
  fb,
  hb = x(() => {
    (gl = g(require("handoff"))),
      (mb = g(H())),
      (QW = async (e, t) => {
        try {
          let r = await (0, mb.getName)(),
            s = "auto-backup schedule";
          if (t) {
            let o = await (0, gl.publish)("uum.getUser", t);
            if (!o)
              throw new Error(`Failed to retrieve user with user ID ${t}`);
            s = o.full_name;
          }
          let a = {
            eventId: "backupCreated_v2",
            eventData: { consoleName: { text: r }, user: { text: s } },
            push: {
              message: { body: `A backup of ${r} was created by ${s}.` },
            },
            email: { vars: { user_name: s } },
          };
          await (0, gl.publish)("notifications.add", a);
        } catch (r) {
          e.error('Failed to create "backup created" notification:', r);
        }
      }),
      (fb = QW);
  });
var wb = w((rEe, yb) => {
  var { fetch: ZW } = ie(),
    El = require("fs-extra"),
    e9 = require("bluebird"),
    { publish: t9 } = require("handoff"),
    r9 = require("child_process"),
    s9 = require("util"),
    { directoryIsEmpty: a9 } = (Ue(), We),
    { getApps: o9, getDisabledApps: n9 } = H(),
    tEe = Ce(),
    { DEBIAN_PACKAGE_VERSIONS_FILE_NAME: i9 } = ct(),
    c9 = s9.promisify(r9.execFile),
    u9 = ["led"];
  yb.exports = (e, t) => {
    let r = async ({
      port: s,
      aptPackage: a,
      outputDir: o,
      name: n,
      app: i = null,
      includeFullData: c = !1,
    }) => {
      try {
        let d = await t9("controllers.getAptPackageVersion", a);
        if ((!d && i && (d = i.version), !d))
          throw new Error(`Invalid version for "${n}"`);
        await El.ensureDir(o), El.chmodSync(o, "777");
        let u = `http://127.0.0.1:${s}/api/ucore/backup/export`,
          p = await ZW(u, {
            method: "POST",
            body: JSON.stringify({ dir: o, includeFullData: c }),
            headers: { "Content-Type": "application/json" },
          });
        if (!p.ok)
          throw new Error(
            `Request to ${u} failed, status: ${
              p.status
            }, text: ${await p.text()}`
          );
        if (await a9(o))
          throw new Error(`Backup directory for "${n}" is empty`);
        let { stdout: l } = await c9("du", ["-s", o]),
          f = parseInt(l);
        return (
          t.info(
            `Successfully created backup for "${n}", version: ${d}, size: ${f}`
          ),
          { version: d, size: f }
        );
      } catch (d) {
        throw (t.error(`Failed to get backup from "${n}":`, d), d);
      }
    };
    return async (s, a) => {
      let o = await o9(),
        n = await n9(),
        i = {},
        c = {},
        d = {},
        u = {};
      return (
        await e9.all(
          [
            ...o
              .filter(({ name: p, isRunning: l }) =>
                u9.includes(p) ? !1 : l ? !0 : !n.includes(p)
              )
              .filter(({ name: p, isInstalled: l }) => {
                let f = e.controllers[p];
                return l && f;
              })
              .map(({ name: p, version: l }) => {
                let { port: f, aptPackage: m } = e.controllers[p];
                return {
                  port: f,
                  aptPackage: m,
                  name: p,
                  isController: !0,
                  version: l,
                };
              }),
            ...Object.entries(e.services).map(
              ([p, { aptPackage: l, port: f }]) => ({
                port: f,
                aptPackage: l,
                name: p,
                isService: !0,
              })
            ),
          ].map(async (p) => {
            let {
              port: l,
              aptPackage: f,
              name: m,
              isService: E,
              isController: y,
            } = p;
            t.info(`Gathering backup data for ${m}`);
            let h = await r({
              port: l,
              aptPackage: f,
              outputDir: `${s}/${m}/`,
              name: m,
              app: p,
              includeFullData: a,
            });
            y &&
              ((i[m] = h.version),
              (c[m] = { size: h.size, version: h.version })),
              E &&
                ((u[m] = h.version),
                (d[m] = { size: h.size, version: h.version }));
          })
        ),
        await El.writeJSON(`${s}/${i9}`, { controllers: i, services: u }),
        { controllers: c, services: d }
      );
    };
  };
});
var rs = {};
lt(rs, { NETWORK_SETUP_TRACE_TYPE: () => vr, TraceEvent: () => ts });
var vr,
  ts,
  Zt = x(() => {
    (function (r) {
      (r.SETUP_STEP = "setup_step"), (r.SETUP_ERROR = "setup_error");
    })(vr || (vr = {}));
    (function (u) {
      (u.APPLICATION_UPDATE_CHECK = "application_update_check"),
        (u.APPLICATION_START = "application_start"),
        (u.APPLICATION_INSTALL = "application_install"),
        (u.APPLICATION_UNINSTALL = "application_uninstall"),
        (u.APPLICATION_UPDATE = "application_update"),
        (u.BACKUP_EXPORT = "backup_export"),
        (u.BACKUP_RESTORE = "backup_restore"),
        (u.FIRMWARE_UPDATE_CHECK = "firmware_update_check"),
        (u.FIRMWARE_UPDATE = "firmware_update"),
        (u.SUPPORT_FILE_GENERATE = "support_file_generate");
    })(ts || (ts = {}));
  });
var _b = w((nEe, bb) => {
  Zo();
  hb();
  var xt = require("fs-extra"),
    { v4: d9 } = require("uuid"),
    l9 = require("tar"),
    Cr = require("path"),
    { publish: ss, subscribe: Sl, unsubscribe: p9 } = require("handoff"),
    { getTimezone: m9, getName: oEe } = H(),
    {
      BACKUP_BASE_FOLDER_PATH: f9,
      BACKUP_BASE_FOLDER_NAME: gb,
      BACKUP_UCORE_CONFIG_FOLDER_NAME: h9,
      BACKUP_UCORE_FOLDER_NAME: y9,
      UBIOS_MIGRATION_DATA_FILE_PATH: Eb,
      ENCRYPTED_UBIOS_MIGRATION_DATA_FILE_PATH: Sb,
    } = ct(),
    w9 = wb(),
    { traceUCoreEvent: $i } = (jt(), ur),
    { TraceEvent: Bi } = (Zt(), rs);
  bb.exports = (e, t) => {
    let r = w9(e, t),
      s = Rs(e, t),
      a = async (u, p) => {
        let l = Cr.join(u, y9),
          f = Cr.join(l, h9);
        await xt.ensureDir(f), await xt.copy(e.configPath, f);
        let [m, E, y] = await Promise.all([
          s.getHostname(),
          s.getSshEnabled(),
          ss("system.device")
            .then((h) => h.features?.ssh)
            .then((h) => (h ? s.getSshHashedPassword() : null)),
        ]);
        await xt.writeJSON(Cr.join(l, "system-data.json"), {
          hostname: m,
          sshEnabled: E,
          hashedSshPassword: y,
        }),
          await ss("db.createBackup", l, p),
          await ss("floorplans.createBackup", l);
      },
      o = async (u = !1) => {
        let p = null;
        try {
          t.info(`Generating backup${u ? " with full data" : ""}`);
          let {
              hardware: { shortname: l, firmwareVersion: f },
              mac: m,
              owner: E,
            } = await ss("system.info"),
            y = await m9(),
            h = d9(),
            S = Date.now(),
            D = {
              id: h,
              mac: m,
              timezone: y,
              hardware_shortname: l,
              firmware_version: f,
              created_at: S,
              owner_id: E.sso_uuid,
            };
          p = Cr.join(f9, `${S}`);
          let A = Cr.join(p, gb);
          await xt.ensureDir(A);
          let { controllers: C, services: R } = await r(A, u);
          await a(A, u),
            await xt.writeFile(Cr.join(A, "metadata.json"), JSON.stringify(D));
          let N = `unifi_core_backup_${S}_${h}.tar`;
          return (
            await l9.r({ file: `${p}/${N}`, cwd: p }, [gb]),
            {
              outputDir: p,
              controllers: C,
              services: R,
              filename: N,
              metadata: D,
            }
          );
        } catch (l) {
          throw (p && (await xt.remove(p).catch(() => null)), l);
        }
      },
      n = async (u) => {
        let p = null,
          { userId: l } = u;
        try {
          let {
            outputDir: f,
            controllers: m,
            services: E,
            filename: y,
            metadata: h,
          } = await o();
          p = f;
          let S = Cr.join(f, y),
            D = `${S}.crypted`,
            { publicKey: A } = await ss("cloud.downloadEncryptionKey");
          return (
            await ss("chiper.encryptFile", S, D, A),
            await ss(
              "cloud.storeBackup",
              D,
              B(v({}, h), { controllers: m, services: E })
            ),
            $i({
              eventName: Bi.BACKUP_EXPORT,
              success: !0,
              triggeredBy: l ? "user" : "system",
              params: { target: "cloud" },
            }).catch((C) =>
              t.error('Failed to send "backup_export" trace event:', C)
            ),
            fb(t, l),
            { controllers: m, services: E }
          );
        } catch (f) {
          throw (
            ($i({
              eventName: Bi.BACKUP_EXPORT,
              success: !1,
              triggeredBy: l ? "user" : "system",
              errorMessage: f.message,
              params: { target: "cloud" },
            }).catch((m) =>
              t.error('Failed to send "backup_export" trace event:', m)
            ),
            f)
          );
        } finally {
          p && xt.remove(p).catch(() => null);
        }
      },
      i = async () => {
        let u = null;
        try {
          let { filename: p, outputDir: l } = await o();
          u = l;
          let f = p.replace(/tar$/, "unifi"),
            m = Cr.join(l, p),
            E = Cr.join(l, f),
            y = await ss("chiper.encryptLocalBackup", m, E),
            h = await xt.createReadStream(y);
          return (
            $i({
              eventName: Bi.BACKUP_EXPORT,
              success: !0,
              triggeredBy: "user",
              params: { target: "local" },
            }).catch((S) =>
              t.error('Failed to send "backup_export" trace event:', S)
            ),
            { stream: h, filePath: y }
          );
        } catch (p) {
          $i({
            eventName: Bi.BACKUP_EXPORT,
            success: !1,
            triggeredBy: "user",
            errorMessage: p.message,
            params: { target: "local" },
          }).catch((l) =>
            t.error('Failed to send "backup_export" trace event:', l)
          );
        } finally {
          u && xt.remove(u).catch(() => null);
        }
      },
      c = async (u, p) => {
        let l = null;
        try {
          let { filename: f, outputDir: m } = await o(u);
          l = m;
          let E = Cr.join(m, f),
            y = Eb;
          if ((await xt.move(E, y), p))
            try {
              return await ss("chiper.encryptLocalBackup", y, Sb);
            } catch (h) {
              throw (xt.remove(Sb).catch(() => null), h);
            } finally {
              xt.remove(y).catch(() => null);
            }
          return y;
        } catch (f) {
          throw (xt.remove(Eb).catch(() => null), f);
        } finally {
          l && xt.remove(l).catch(() => null);
        }
      },
      d = [
        Sl("backup.export.cloud", (u, p = {}) => n(p)),
        Sl("backup.export.local", (u) => i()),
        Sl("backup.export.ubiosMigrationData", (u, p = !0, l = !0) => c(p, l)),
      ];
    return async () => {
      d.forEach((u) => p9(u));
    };
  };
});
var bl = {};
lt(bl, { makeQueued: () => g9 });
var Tb,
  g9,
  _l = x(() => {
    (Tb = g(require("handoff"))),
      (g9 =
        (e, t) =>
        (...r) =>
          (0, Tb.publish)("taskQueue.add", () => e(...r), t || e.name));
  });
var vb = w((iEe, Ab) => {
  var E9 = require("events"),
    S9 = 3 * 1e3,
    Pa = {
      NOT_STARTED: "notStarted",
      IN_PROGRESS: "inProgress",
      COMPLETED: "completed",
      ERROR: "error",
    },
    Ib = class extends E9 {
      constructor(t) {
        super();
        (this.steps = t), (this.stepProgressPercentage = {});
        for (let r of t)
          this.stepProgressPercentage[r.step] = {
            percentage: r.percentage || 0,
            state: r.state || Pa.NOT_STARTED,
            error: r.error || {},
          };
        this.updateEstimatedProgressIntervalId = null;
      }
      _updateEstimateProgress(t, r) {
        let s = this.stepProgressPercentage[t].percentage,
          a = Math.min(s + 1, r - 1);
        (this.stepProgressPercentage[t].percentage = a),
          this.emit("progress", this.getProgressSummary()),
          a >= r - 1 &&
            (clearInterval(this.updateEstimatedProgressIntervalId),
            (this.updateEstimatedProgressIntervalId = null));
      }
      setEstimatedProgress(t, r) {
        if (this.stepProgressPercentage[t] === void 0)
          throw new Error(`Unknown step ${t}`);
        (this.stepProgressPercentage[t].state = Pa.IN_PROGRESS),
          (this.updateEstimatedProgressIntervalId = setInterval(
            this._updateEstimateProgress.bind(this),
            S9,
            t,
            r
          ));
      }
      setProgress(t, r = null, s = null) {
        if (this.stepProgressPercentage[t] === void 0)
          throw new Error(`Unknown step ${t}`);
        this.updateEstimatedProgressIntervalId &&
          (clearInterval(this.updateEstimatedProgressIntervalId),
          (this.updateEstimatedProgressIntervalId = null)),
          this.stepProgressPercentage[t].state !== Pa.ERROR &&
            (r !== null &&
              ((this.stepProgressPercentage[t].percentage = r),
              (this.stepProgressPercentage[t].state =
                r >= 100 ? Pa.COMPLETED : Pa.IN_PROGRESS)),
            s !== null &&
              ((this.stepProgressPercentage[t].error = {
                code: s.code,
                message: s.message,
              }),
              (this.stepProgressPercentage[t].state = Pa.ERROR),
              (this.stepProgressPercentage[t].percentage = 100)),
            this.emit("progress", this.getProgressSummary()));
      }
      getProgressSummary() {
        return {
          progress: this.getProgressPercentage(),
          steps: Object.entries(this.stepProgressPercentage).map(([t, r]) =>
            v({ id: t }, r)
          ),
        };
      }
      getProgressPercentage() {
        let { total: t, completed: r } = this.steps.reduce(
          ({ total: s, completed: a }, { step: o, expectedDuration: n }) => ({
            total: s + n,
            completed:
              (this.stepProgressPercentage[o].percentage / 100) * n + a,
          }),
          { total: 0, completed: 0 }
        );
        return (r / t) * 100;
      }
    };
  Ab.exports = Ib;
});
var Nb = w((uEe, Db) => {
  Zn();
  var { publish: en } = require("handoff"),
    { UPDATE_DEVICE_RESTORE_PROGRESS: b9 } = Z(),
    Cb = class {
      constructor(t) {
        (this.logger = t), (this.action = b9);
      }
      async clear() {
        return (
          this.logger.info("Clear progress reporter"),
          en("redux.dispatch", this.action, {
            restoreState: Jt.NOT_STARTED,
            restoreProgress: 0,
            steps: [],
            metadata: {},
          })
        );
      }
      async start(t) {
        return (
          this.logger.info("Start progress reporter, metadata:", t),
          en("redux.dispatch", this.action, {
            restoreState: Jt.IN_PROGRESS,
            metadata: t,
          })
        );
      }
      async update({ progress: t, steps: r }) {
        let s = Math.ceil((t * 100) / 100);
        return (
          this.logger.info(`Update progress reporter, progress: ${s}`),
          en("redux.dispatch", this.action, { restoreProgress: s, steps: r })
        );
      }
      async cancel() {
        return (
          this.logger.info("Cancel progress reporter"),
          en("redux.dispatch", this.action, { restoreState: Jt.CANCELED })
        );
      }
      async complete(t) {
        return (
          this.logger.info("Complete progress reporter"),
          en("redux.dispatch", this.action, {
            restoreState: Jt.COMPLETED,
            ssoId: t,
          })
        );
      }
    };
  Db.exports = Cb;
});
var Ua = w((dEe, Rb) => {
  var Tl = require("bluebird"),
    tn = require("path"),
    Js = require("fs-extra"),
    { publish: _9 } = require("handoff"),
    { setIntervalAsync: Il } = require("set-interval-async/dynamic"),
    { clearIntervalAsync: Al } = require("set-interval-async"),
    { getDeviceState: T9, getCloudConnected: I9, getSystemIsStarted: A9 } = H(),
    { deviceStates: v9 } = Ot(),
    { getApp: C9 } = H(),
    Vi = {
      CONSOLE_READY: 5 * 60 * 1e3,
      APPLICATION_READY: 5 * 60 * 1e3,
      CLOUD_CONNECTED: 60 * 1e3,
      APPLICATION_READY_FOR_UBIOS_MIGRATION: 20 * 60 * 1e3,
    },
    vl = 1e3;
  Rb.exports = (e, t) => {
    let r = () => {
        let p;
        return new Tl((l, f) => {
          p = Il(async () => {
            try {
              let m = await T9(),
                E = await A9();
              m !== v9.NOT_READY && E && l();
            } catch (m) {
              t.error(
                "Could not read deviceState while waiting for device to be ready",
                m
              );
            }
          }, vl);
        })
          .timeout(Vi.CONSOLE_READY)
          .finally(() => Al(p));
      },
      s = ({ name: p, onProgress: l, isMigration: f = !1 }) => {
        let m;
        return new Tl((E, y) => {
          m = Il(async () => {
            try {
              let h = p === "uum" ? "users" : p,
                { controllerStatus: S, restorePercentage: D } = await C9(h);
              if ((D && l(p, D), S === "READY")) return E();
            } catch (h) {
              return y(h);
            }
          }, vl);
        })
          .timeout(
            f ? Vi.APPLICATION_READY_FOR_UBIOS_MIGRATION : Vi.APPLICATION_READY,
            `Timeout when waiting for ${p} to be ready.`
          )
          .finally(() => Al(m));
      },
      a = () => {
        let p;
        return new Tl((l, f) => {
          p = Il(async () => {
            try {
              (await I9()) === !0 && l();
            } catch (m) {
              t.error(
                "Could not read cloudConnected while restoring backups",
                m
              );
            }
          }, vl);
        })
          .timeout(
            Vi.CLOUD_CONNECTED,
            "Timeout when waiting for connecting to cloud"
          )
          .finally(() => Al(p));
      },
      o = async () => {
        let { persistentStorage: p } = await _9("system.device");
        return tn.join(p, "restore-data");
      };
    return {
      waitUntilConsoleReady: r,
      waitUntilApplicationRestored: s,
      waitUntilCloudConnected: a,
      getPersistedRestorePath: o,
      removePersistedRestorePath: async () => {
        let p = await o();
        return Js.remove(p);
      },
      preparePersistedRestorePath: async () => {
        let p = await o();
        await Js.ensureDir(p), await Js.emptyDir(p);
      },
      getPersistedRestoreConfig: async () => {
        let p = await o();
        if (await Js.exists(p)) {
          let l;
          try {
            return (l = await Js.readJson(tn.join(p, "restoreParams.json"))), l;
          } catch (f) {
            if (f.code !== "ENOENT") throw f;
            return null;
          }
        }
        return null;
      },
      saveRestoreConfigToPersistedStorage: async (p) => {
        let l = await o();
        return Js.writeJson(tn.join(l, "restoreParams.json"), p);
      },
      moveBackupDataToPersistedStorage: async (p) => {
        let l = await o();
        return Js.move(p, tn.join(l, tn.basename(p)));
      },
    };
  };
});
var kb = w((lEe, Ub) => {
  var { publish: Cl } = require("handoff"),
    D9 = require("semver"),
    { setIntervalAsync: N9 } = require("set-interval-async/dynamic"),
    { clearIntervalAsync: R9 } = require("set-interval-async"),
    Pb = require("fs-extra"),
    Dl = require("bluebird"),
    P9 = require("node-fetch"),
    U9 = Ua(),
    { getApp: k9 } = H(),
    { DEBIAN_PACKAGE_VERSIONS_FILE_NAME: O9 } = ct(),
    { directoryIsEmpty: q9 } = (Ue(), We),
    F9 = ({ name: e, timeout: t, interval: r }) => {
      let s;
      return new Dl((a, o) => {
        s = N9(async () => {
          try {
            let n = await k9(e);
            if (n && n.isRunning) return a();
          } catch (n) {
            return o(n);
          }
        }, r);
      })
        .timeout(t)
        .finally(() => R9(s));
    };
  Ub.exports = (e, t) => {
    let { waitUntilApplicationRestored: r } = U9(e, t),
      s = async ({
        name: a,
        version: o,
        backupPath: n,
        onProgress: i,
        isMigration: c,
      }) => {
        let { port: d, aptPackage: u } = e.controllers[a];
        if (!o)
          throw new Error(
            `Controller version file missing version for ${a} controller`
          );
        t.info(`Install ${a} controller. Version: ${o}`);
        let p = await Cl("controllers.getAptPackageVersion", u);
        !p || D9.gt(o.replace(/~/g, "-"), p.replace(/~/g, "-"))
          ? (await Cl("controllers.install", a, { version: o, queued: !1 }),
            t.info(`Installed ${a} controller`))
          : await Cl("controllers.enable", a),
          t.info(`Wait for ${a} application is running...`),
          await F9({ name: a, timeout: 3 * 60 * 1e3, interval: 500 });
        let l = `${n}/${a}`;
        if ((await Pb.chmod(l, "777"), await q9(l)))
          throw new Error(`Backup directory for "${a}" is empty`);
        a === "access" && (await Dl.delay(1e4)),
          t.info(`Restoring backup for ${a}`);
        let f = await P9(`http://127.0.0.1:${d}/api/ucore/backup/import`, {
          timeout: 12e5,
          method: "POST",
          body: JSON.stringify({ dir: l }),
          headers: { "Content-Type": "application/json" },
        });
        if (!f.ok) {
          let m = `Failed to restore backup for ${a} controller`;
          throw (t.info(m, f), new Error(m));
        }
        await r({ name: a, onProgress: i, isMigration: c });
      };
    return async (a, o, n, i = () => {}) => {
      t.info(`Restoring backup ${a}`);
      let { controllers: c } = await Pb.readJSON(`${a}/${O9}`);
      return await Dl.mapSeries(o, async (u) => {
        try {
          return (
            i(u, 0),
            await s({
              name: u,
              version: c[u],
              backupPath: a,
              onProgress: i,
              isMigration: n,
            }),
            t.info(`${u} application installed and restored successfully`),
            i(u, 100),
            { [u]: { success: !0 } }
          );
        } catch (p) {
          return (
            i(u, null, p),
            t.error(`Failed to install and restore ${u} application:`, p),
            { [u]: { success: !1 } }
          );
        }
      });
    };
  };
});
var Fb = w((pEe, qb) => {
  var Ob = require("fs-extra"),
    L9 = require("bluebird"),
    M9 = require("node-fetch"),
    { publish: x9 } = require("handoff"),
    $9 = Ua(),
    { DEBIAN_PACKAGE_VERSIONS_FILE_NAME: B9 } = ct(),
    { directoryIsEmpty: V9 } = (Ue(), We);
  qb.exports = (e, t) => {
    let { waitUntilApplicationRestored: r } = $9(e, t),
      s = async ({ name: a, backupPath: o, onProgress: n, isMigration: i }) => {
        let { port: c } = e.services[a],
          d = `http://127.0.0.1:${c}/api/ucore/backup/import`;
        t.info(`Restoring backup for ${a}`);
        let u = `${o}/${a}`;
        if ((await Ob.chmod(u, "777"), await V9(u)))
          throw new Error(`Backup directory for "${a}" is empty`);
        let p = await M9(d, {
          timeout: 12e5,
          method: "POST",
          body: JSON.stringify({ dir: u }),
          headers: { "Content-Type": "application/json" },
        });
        if (!p.ok) {
          let l = `Failed to restore backup for ${a} service`;
          throw (t.info(l, p), new Error(l));
        }
        await r({ name: a, onProgress: n, isMigration: i });
      };
    return async (a, o, n = () => {}) => {
      t.info(`Restoring backup ${a}`);
      let { services: i } = await Ob.readJSON(`${a}/${B9}`),
        c = Object.keys(i);
      return await L9.all(
        c.map(async (u) => {
          try {
            n(u, 0),
              await s({
                name: u,
                backupPath: a,
                onProgress: n,
                isMigration: o,
              }),
              t.info(`Service ${u} restored`),
              n(u, 100),
              u === "uum" && (await x9("uum.refreshUsers"));
          } catch (p) {
            return (
              n(u, null, p),
              t.error(`Failed to restore service ${u}`, p),
              { [u]: { success: !1 } }
            );
          }
          return { [u]: { success: !0 } };
        })
      );
    };
  };
});
var Bb = w((mEe, $b) => {
  var Lb = g(require("lodash")),
    Mb = g(Z()),
    Nl = require("bluebird"),
    Rl = require("js-yaml"),
    rn = require("fs-extra"),
    Xs = require("path"),
    { publish: Dr } = require("handoff"),
    { getIsSetup: j9, getSystemInfo: G9, getDisabledApps: H9 } = H(),
    { BACKUP_UCORE_CONFIG_FOLDER_NAME: W9, BACKUP_UCORE_FOLDER_NAME: xb } =
      ct();
  $b.exports = (e, t) => {
    let r = async (o) => {
        let [n, i] = await Nl.all([
            rn.readFile(Xs.join(o, "settings.yaml"), "utf8"),
            rn.readFile(Xs.join(o, "firmware.yaml"), "utf8"),
          ]),
          { releaseChannel: c, schedule: d } = Rl.safeLoad(i),
          {
            country: u,
            location: p,
            name: l,
            timezone: f,
            sendDiagnostics: m,
            autoBackupEnabled: E,
            backupEnabled: y,
            ssh: h,
          } = Rl.safeLoad(n);
        return {
          country: u,
          location: p,
          name: l,
          timezone: f,
          sendDiagnostics: m,
          autoBackupEnabled: E !== void 0 ? E : y,
          updateSchedule: d,
          releaseChannel: c,
          ssh: h,
        };
      },
      s = async (o) => {
        let n = await H9(),
          i = await rn.readFile(Xs.join(o, "apps.userPrefs.yaml"), "utf8"),
          { disabled: c = [] } = Rl.safeLoad(i);
        await Nl.all(
          n.map((d) => {
            if (!c.includes(d))
              return (
                t.info(
                  `Enable ${d} application to match the state in backup file`
                ),
                Dr("redux.dispatch", Mb.ENABLE_APP, { name: d })
              );
          })
        ),
          c.forEach(
            (d) => (
              t.info(
                `Disable ${d} application to match the state in backup file`
              ),
              Dr("controllers.disable", d, { source: "api" })
            )
          );
      },
      a = async (o) => {
        let n = Xs.join(o, xb),
          i = Xs.join(n, W9);
        await Dr("db.restoreBackup", n),
          t.info("Restored UCore database"),
          await Dr("floorplans.restoreBackup", n),
          t.info("Restored floorplans");
        let c = await r(i);
        await Dr("system.patch", c),
          await s(i),
          t.info("Restored application preferences");
        let { features: d } = await Dr("system.device");
        if (d?.ssh) {
          let u = (0, Lb.get)(c, "ssh.agreementAcceptedAt", null),
            [{ sshEnabled: p, hashedSshPassword: l }, { ssh: f }] =
              await Nl.all([rn.readJSON(Xs.join(n, "system-data.json")), G9()]);
          p && (f || u)
            ? (await Dr("system.setSshEnabled", !0),
              await Dr("system.setSshHashedPassword", l))
            : (p &&
                t.info(
                  "SSH enabled in backup but agreement not accepted, leaving SSH disabled..."
                ),
              await Dr("system.setSshEnabled", !1));
        }
        return t.info("Restored UCore settings:", c), c;
      };
    return async (o, n, i, c, d) => {
      try {
        if ((d(0), await a(o), d(50), !(await j9()) || c)) {
          let { hostname: u } = await rn.readJSON(
              Xs.join(o, xb, "system-data.json")
            ),
            p = n.some((l) => l.network && l.network.success);
          await Dr("system.setupFromBackup", i.ssoAuth, p, u);
        }
        d(100);
      } catch (u) {
        throw (
          (t.error("Failed to restore UCore settings:", u.message),
          d(null, u),
          u)
        );
      }
    };
  };
});
var Wb = w((fEe, Hb) => {
  var Vb = require("path"),
    jb = require("fs-extra"),
    {
      BACKUP_UCORE_FOLDER_NAME: K9,
      BACKUP_UCORE_CONFIG_FOLDER_NAME: Y9,
      LCM_SETTINGS_FILE_NAME: Gb,
    } = ct();
  Hb.exports = (e, t) => async (r) => {
    try {
      let s = Vb.join(r, K9, Y9, Gb);
      (await jb.exists(s)) && (await jb.copy(s, Vb.join(e.configPath, Gb)));
    } catch (s) {
      t.error("Failed to restore LCM settings:", s);
    }
  };
});
var zb = w((hEe, Yb) => {
  var Kb = require("fs-extra"),
    { DEBIAN_PACKAGE_VERSIONS_FILE_NAME: z9, PROGRESS_STEPS: J9 } = ct();
  Yb.exports = (e, t) => async (r, s, a) => {
    try {
      t.info(`Validating backup ${r}`);
      let o = `${r}/${z9}`,
        [n, { services: i, controllers: c }] = await Promise.all([
          Kb.readdir(r),
          Kb.readJSON(o),
        ]);
      if (!c) throw new Error(`${o} missing key "controllers"`);
      if (!i) throw new Error(`${o} missing key "services"`);
      let d = Object.keys(e.controllers);
      s.forEach((l) => {
        if (!d.includes(l))
          throw new Error(
            `Controller "${l}" can not be installed on this device`
          );
        if (!n.includes(l))
          throw new Error(
            `Controller "${l}" requested to be restored but backup is missing`
          );
      });
      let u = Object.keys(i),
        p = Object.keys(e.services);
      return (
        u.forEach((l) => {
          if (!p.includes(l))
            throw new Error(
              `Service "${l}" can not be installed on this device`
            );
          if (!n.includes(l))
            throw new Error(
              `Service "${l}" requested to be restored but backup is missing`
            );
        }),
        !0
      );
    } catch (o) {
      throw (a.setProgress(J9.UCORE.step, null, o), o);
    }
  };
});
var Qb = w((yEe, Xb) => {
  var { publish: Jb } = require("handoff"),
    X9 = kb(),
    Q9 = Fb(),
    Z9 = Bb(),
    eK = Wb(),
    tK = zb(),
    rK = Ua(),
    { getIsSetup: sK, getRemoteAccessEnabled: aK, getHasInternet: oK } = H(),
    { PROGRESS_STEPS: Pl } = ct();
  Xb.exports = (e, t) => {
    let { waitUntilCloudConnected: r } = rK(e, t),
      s = X9(e, t),
      a = Q9(e, t),
      o = Z9(e, t),
      n = eK(e, t),
      i = tK(e, t);
    return async (c, d, u, p = {}, l = !1) => {
      let f = await sK();
      t.info(
        "applyBackupFromPath called with " +
          JSON.stringify({
            backupPath: d,
            controllers: u,
            isSetup: f,
            isMigration: l,
          })
      ),
        await i(d, u, c);
      let m = await a(d, l, (h, S, D) =>
        c.setProgress(`SERVICE.${h}`.toUpperCase(), S, D)
      );
      t.info(
        "Services finished restoring" +
          JSON.stringify({ serviceRestoreResults: m })
      );
      let E = !0;
      if (f)
        (await aK())
          ? l &&
            !(await oK()) &&
            (t.warn(
              "Internet is not a hard requirement for UbiOS migration, skip connecting to cloud."
            ),
            (E = !1))
          : (E = !1);
      else if (await Jb("cloud.register", { ssoUser: p }))
        t.info("Registered console to cloud");
      else {
        E = !1;
        let h = new Error("Failed to register to cloud");
        t.error(h.message), c.setProgress(Pl.UCORE.step, null, h);
      }
      if (E)
        try {
          await r(),
            await Jb("cloud.syncAccess"),
            t.info(
              "Console is connected to cloud, start to restore applications"
            );
        } catch (h) {
          t.error("Failed to connect and sync access to cloud", h),
            c.setProgress(Pl.UCORE.step, null, h);
        }
      let y = await s(d, u, l, (h, S, D) =>
        c.setProgress(`CONTROLLER.${h}`.toUpperCase(), S, D)
      );
      return (
        t.info("Apps finished restoring" + JSON.stringify({ results: y })),
        await o(d, y, p, l, (h, S) => c.setProgress(Pl.UCORE.step, h, S)),
        await n(d),
        t.info("applyBackupFromPath completed"),
        v(v({}, m), y)
      );
    };
  };
});
var r_ = w((wEe, t_) => {
  var { publish: ji } = require("handoff"),
    Ul = require("path"),
    Zb = require("js-yaml"),
    e_ = require("fs-extra"),
    { getIsSetup: nK } = H(),
    { BACKUP_UCORE_CONFIG_FOLDER_NAME: iK, BACKUP_UCORE_FOLDER_NAME: cK } =
      ct();
  t_.exports = (e, t) => async (r, s) => {
    try {
      let a = await nK(),
        o = Ul.join(r, cK, iK),
        [n, i] = await Promise.all([
          e_.readFile(Ul.join(o, "apps.userPrefs.yaml"), "utf8"),
          e_.readFile(Ul.join(o, "firmware.yaml"), "utf8"),
        ]),
        { releaseChannels: c } = Zb.safeLoad(n),
        { releaseChannel: d } = Zb.safeLoad(i);
      t.info(`Setting up FW release channel to ${d}, isSetup: ${a}`),
        await ji("firmware.setReleaseChannel", d);
      let u = a
        ? (await ji("cloud.getFirmwareToken")).token
        : await ji("cloud.api.getFirmwareToken", s);
      await ji("firmware.refreshUpdateInfo", u);
    } catch (a) {
      t.error("Failed to set release channel during restore:", a);
    }
  };
});
var a_ = w((gEe, s_) => {
  var { publish: uK } = require("handoff"),
    { getSystemInfo: dK } = H();
  s_.exports = (e, t) => async (r, s) => {
    try {
      t.info("Creating backup restored notification");
      let a = await dK(),
        o = new Date(r).toLocaleString(),
        n = a.owner.full_name;
      await uK("notifications.add", {
        eventId: "backupRestored",
        eventData: {
          user: { text: n },
          consoleName: { text: s },
          time: { timestamp: r },
        },
        email: { vars: { user_name: n, time: o } },
        push: {
          message: {
            body: `${n} has restored ${s} with a backup file from ${o}.`,
          },
        },
      });
    } catch (a) {
      t.error("Failed to create backup restored notification", a);
    }
  };
});
var c_ = w((EEe, i_) => {
  var o_ = require("path"),
    kl = require("fs-extra"),
    { publish: Ol } = require("handoff"),
    lK = require("tar"),
    pK = require("os"),
    mK = require("bluebird"),
    fK = require("stream"),
    hK = require("node-fetch"),
    { getIsSetup: yK } = H(),
    { DOWNLOAD_BACKUP_TIMEOUT_MS: n_ } = ct(),
    wK = async (e, t, r) => {
      let s = await hK(e, { timeout: n_ });
      if (!s.ok)
        throw new Error(
          `Failed to download file. Unexpected response ${s.statusText}`
        );
      if (r) {
        let a = s.headers.get("content-length"),
          o = 0;
        s.body.on("data", (n) => {
          (o += n.length), r(o, a);
        });
      }
      await mK
        .promisify(fK.pipeline)(s.body, kl.createWriteStream(t))
        .timeout(n_);
    };
  i_.exports =
    (e, t) =>
    async (
      { ssoUser: r, backupUrl: s, filename: a, password: o },
      n = () => {}
    ) => {
      try {
        let i = await yK();
        t.info(`Downloading backup from ${a}, isSetup: ${i}`), n(0);
        let c = `${pK.tmpdir()}/restore`,
          d = o_.join(c, a);
        await kl.ensureDir(c),
          await kl.emptyDir(c),
          await wK(s, d, (m, E) => {
            let h = ((m / E) * 100) / 2;
            n(h);
          }),
          n(50),
          t.info("Downloading decryption key from cloud");
        let { privateKey: u, pepper: p } = i
          ? await Ol("cloud.downloadEncryptionKey")
          : await Ol("cloud.api.downloadEncryptionKey", r.ssoAuth);
        n(70);
        let l = a.replace(/\.crypted$/, ""),
          f = o_.join(c, l);
        return (
          await Ol("chiper.decryptFile", d, f, o, r.uuid || r.sso_uuid, u, p),
          await lK.x({ file: f, cwd: c }),
          n(100),
          `${c}/backup`
        );
      } catch (i) {
        throw (t.error("Error while downloading backup:", i), n(null, i), i);
      }
    };
});
var l_ = w((SEe, d_) => {
  var { publish: sn } = require("handoff"),
    { noop: ql } = require("lodash"),
    gK = require("semver"),
    EK = Ua(),
    { AppError: SK, errorCodes: bK } = (se(), me),
    { getFWReleaseChannel: _K } = H(),
    u_ = (e, t, r) => {
      try {
        return gK[r](e, t);
      } catch (s) {
        throw new Error(
          `Semver threw error: ${s.message} with params: [${JSON.stringify({
            verA: e,
            verB: t,
            method: r,
          })}]`
        );
      }
    };
  d_.exports =
    (e, t) =>
    async (r, s, a = ql) => {
      let { removePersistedRestorePath: o } = EK(e, t);
      try {
        t.info("Update firmware and then continue restore"), a(0);
        let n = await sn("firmware.update", {
            callbackBeforeUpgrade: () => a(30),
            queued: !1,
          }).catch(ql),
          i = n && u_(n.version, s, "gte");
        if (i) return;
        let c = await _K(),
          d = [
            "release",
            "release-candidate",
            "beta",
            "alpha",
            "internal",
          ].filter((u) => u !== c);
        for (let u of d) {
          t.info(`Firmware not found from ${c} channel, trying ${u} channel`),
            await sn("firmware.setReleaseChannel", u);
          let p = await sn("cloud.api.getFirmwareToken", r);
          await sn("firmware.refreshUpdateInfo", p);
          let l = await sn("firmware.update", {
            callbackBeforeUpgrade: () => a(30),
            queued: !1,
          }).catch(ql);
          if (((i = l && u_(l.version, s, "gte")), i)) {
            t.info(`firmware found from ${u} channel`);
            break;
          }
        }
        if (!i)
          throw new SK(
            bK.RESTORE_ERROR({ message: `Failed to download ${s} version` })
          );
      } catch (n) {
        throw (
          (t.error(
            "Failed to update firmware version during restore backup",
            n
          ),
          await o(),
          a(null, n),
          n)
        );
      }
    };
});
var m_ = w((bEe, p_) => {
  var TK = Qb(),
    IK = r_(),
    AK = a_(),
    vK = c_(),
    CK = l_();
  p_.exports = (e, t) => ({
    applyBackupFromPath: TK(e, t),
    applyReleaseChannels: IK(e, t),
    createBackupRestoredNotification: AK(e, t),
    downloadAndDecryptBackup: vK(e, t),
    firmwareUpdate: CK(e, t),
  });
});
var b_ = w((_Ee, S_) => {
  var { publish: Nr, subscribe: ka, unsubscribe: DK } = require("handoff"),
    Fl = require("path"),
    f_ = require("bluebird"),
    NK = require("semver"),
    RK = require("tar"),
    Oa = require("fs-extra"),
    { makeQueued: PK } = (_l(), bl),
    { sortApplications: h_ } = (Ue(), We),
    { isRestoreInProgress: UK } = H(),
    kK = vb(),
    y_ = Nb(),
    OK = Ua(),
    qK = m_(),
    {
      BACKUP_BASE_FOLDER_NAME: w_,
      DEBIAN_PACKAGE_VERSIONS_FILE_NAME: FK,
      PROGRESS_STEPS: er,
      UBIOS_MIGRATION_DATA_FILE_PATH: Gi,
      UBIOS_MIGRATION_DATA_FOLDER_PATH: Hi,
    } = ct(),
    { traceUCoreEvent: g_ } = (jt(), ur),
    { TraceEvent: E_ } = (Zt(), rs);
  S_.exports = (e, t) => {
    let r = null,
      s = null,
      {
        getPersistedRestorePath: a,
        getPersistedRestoreConfig: o,
        waitUntilConsoleReady: n,
        preparePersistedRestorePath: i,
        moveBackupDataToPersistedStorage: c,
        saveRestoreConfigToPersistedStorage: d,
        removePersistedRestorePath: u,
      } = OK(e, t),
      {
        applyReleaseChannels: p,
        applyBackupFromPath: l,
        createBackupRestoredNotification: f,
        downloadAndDecryptBackup: m,
        firmwareUpdate: E,
      } = qK(e, t),
      y = async (b) => {
        let {
          hardware: { firmwareVersion: T },
        } = await Nr("system.info");
        return NK.gt(b, T);
      },
      h = ({
        isUploadedBackup: b,
        isFirmwareUpgradeNeeded: T,
        services: M,
        controllers: q,
      }) =>
        new kK([
          ...(b ? [] : [er.BACKUP_DOWNLOAD]),
          ...(T ? [er.FW_UPGRADE] : []),
          ...M.map((k) => ({
            step: `SERVICE.${k}`.toUpperCase(),
            expectedDuration: er.SERVICE.expectedDuration,
          })),
          ...q.map((k) => ({
            step: `CONTROLLER.${k}`.toUpperCase(),
            expectedDuration: er.CONTROLLER.expectedDuration,
          })),
          er.UCORE,
        ]),
      S = PK(
        async ({
          ssoUser: b,
          backupUrl: T,
          controllers: M = {},
          services: q = {},
          firmwareVersion: k,
          createdAt: I,
          consoleName: _,
          isUploadedBackup: P,
          filename: U,
          password: j,
        }) => {
          let K;
          try {
            t.info("Start to import backup to console with params:", {
              controllers: M,
              services: q,
              firmwareVersion: k,
              createdAt: I,
              consoleName: _,
              isUploadedBackup: P,
              filename: U,
            });
            let J = h_(Object.keys(M)),
              F = Object.keys(q),
              $ = await y(k);
            return (
              (s = h({
                isUploadedBackup: P,
                isFirmwareUpgradeNeeded: $,
                services: F,
                controllers: J,
              })),
              s.on("progress", (...O) => r.update(...O)),
              r.update(s.getProgressSummary()),
              P
                ? (K = T)
                : (K = await m(
                    { ssoUser: b, backupUrl: T, filename: U, password: j },
                    (O, V) => s.setProgress(er.BACKUP_DOWNLOAD.step, O, V)
                  )),
              await p(K, b),
              $
                ? (t.info("Persist restore data before firmware update"),
                  await i(),
                  await f_.all([
                    c(K),
                    d({
                      isUploadedBackup: P,
                      isFirmwareUpgradeNeeded: !0,
                      services: F,
                      controllers: J,
                      ssoUser: b,
                      createdAt: I,
                      consoleName: _,
                      firmwareVersion: k,
                    }),
                  ]),
                  await E(b, k, (O, V) =>
                    s.setProgress(er.FW_UPGRADE.step, O, V)
                  ),
                  !1)
                : (await l(s, K, J, b), await f(I, _), !0)
            );
          } finally {
            Oa.remove(K).catch(() => null);
          }
        },
        "importBackup"
      ),
      D = async (b) => {
        try {
          (r = new y_(t)),
            await Nr("events.backupImportStarted", {
              createdAt: b.createdAt,
              consoleName: b.consoleName,
            }),
            (await S(b)) &&
              (await Nr(
                "events.backupImportFinished",
                b.ssoUser && b.ssoUser.uuid
              ),
              g_({
                eventName: E_.BACKUP_RESTORE,
                success: !0,
                triggeredBy: "user",
              }).catch((M) =>
                t.error('Failed to send "backup_restore" trace event:', M)
              ));
        } catch (T) {
          throw (
            (t.error("Failed to restore device", T),
            await Nr("events.backupImportCanceled"),
            g_({
              eventName: E_.BACKUP_RESTORE,
              success: !1,
              triggeredBy: "user",
              errorMessage: T.message,
            }).catch((M) =>
              t.error('Failed to send "backup_restore" trace event:', M)
            ),
            T)
          );
        } finally {
          r = null;
        }
      },
      A = async () => {
        try {
          r = new y_(t);
          let [b, T] = await f_.all([a(), o()]);
          if (T) {
            try {
              t.info(
                "Continue restore backup from persisted path after firmware updated"
              );
              let { ssoUser: M, controllers: q } = T,
                { consoleName: k, createdAt: I, firmwareVersion: _ } = T;
              if (
                (_ || (_ = T.info.metadata.firmware_version),
                I || (I = T.info.time),
                k || (k = T.info.name),
                (s = h(T)),
                s.on("progress", (...U) => r.update(...U)),
                await Nr(
                  "events.backupImportStarted",
                  { createdAt: I, consoleName: k },
                  !0
                ),
                s.setProgress(er.BACKUP_DOWNLOAD.step, 100),
                s.setEstimatedProgress(er.FW_UPGRADE.step, 80),
                await n(),
                s.setProgress(er.FW_UPGRADE.step, 80),
                await y(_))
              ) {
                let U = new Error(`Failed to update firmware to ${_}`);
                throw (s.setProgress(er.FW_UPGRADE.step, null, U), U);
              }
              s.setProgress(er.FW_UPGRADE.step, 100),
                await l(s, Fl.join(b, w_), q, M),
                await f(I, k),
                await Nr("events.backupImportFinished", M && M.uuid);
            } catch (M) {
              t.error(
                "Failed to continue restore backup from persisted path",
                M
              ),
                await Nr("events.backupImportCanceled");
            } finally {
              await u(), (r = null);
            }
            return;
          }
          (await UK()) &&
            (t.warn("Clear backup restoring state on startup"),
            await r.clear());
        } catch (b) {
          t.error("Failed to continue restore on startup:", b);
        } finally {
          await u(), (r = null);
        }
      },
      C = async () => {
        try {
          t.info("Wait until console is ready before UbiOS migration..."),
            await n(),
            t.info("UbiOS migration starting"),
            await Oa.ensureDir(Hi),
            await RK.x({ file: Gi, cwd: Hi });
          let b = { setProgress: () => {} },
            T = Fl.join(Hi, w_),
            { controllers: M } = await Oa.readJson(Fl.join(T, FK)),
            q = h_(Object.keys(M));
          await p(T);
          let k = await l(b, T, q, {}, !0),
            I = Object.entries(k)
              .filter(([, { success: _ }]) => !_)
              .map(([_]) => _);
          if (I.length) {
            let _ = `${Gi}.failed-${Date.now()}`;
            await Oa.move(Gi, _);
            let P = '"' + I.join('", "') + '"';
            t.error(
              `${P} failed to restore, original migration file moved to ${_}`
            );
          } else await Oa.unlink(Gi);
          t.info("UbiOS migration completed");
        } finally {
          await Oa.remove(Hi).catch(() => null);
        }
      },
      R = async () => {
        try {
          await Nr("events.backupImportStarted"),
            await C(),
            await Nr("events.backupImportFinished");
        } catch (b) {
          throw (await Nr("events.backupImportCanceled"), b);
        }
      },
      N = [
        ka("app.ready", () => A()),
        ka("backup.import", (b, T) => D(T)),
        ka("backup.import.ubiosMigrationData", () => R()),
        ka("events.backupImportStarted", async (b, T, M = !1) => {
          r && (M || (await r.clear()), await r.start(T));
        }),
        ka("events.backupImportFinished", (b, T) => {
          r && r.complete(T);
        }),
        ka("events.backupImportCanceled", () => {
          r && r.cancel();
        }),
      ];
    return async () => {
      N.forEach((b) => DK(b));
    };
  };
});
var A_ = w((TEe, I_) => {
  var LK = require("cron"),
    { publish: Wi, subscribe: Ll, unsubscribe: MK } = require("handoff"),
    { UPDATE_DEVICE_SETTINGS: xK } = Z(),
    { getTimezone: $K, getSettings: __, getRemoteAccessEnabled: BK } = H(),
    T_ = 3e5;
  I_.exports = (e, t) => {
    let r,
      s = () => {
        let c = Math.round(Math.random() * 59),
          d = Math.round(Math.random() * 29 + 30),
          u = Math.round(Math.random() * 23),
          p = Math.round(Math.random() * 6);
        return `${c} ${d} ${u} * * ${p}`;
      },
      a = async () => {
        o();
        let c = await $K();
        r = new LK.CronJob(
          s(),
          async () => {
            try {
              await Wi("backup.export.cloud");
            } catch (d) {
              t.error("Failed to create and store scheduled backup:", d),
                t.info(`Retrying in ${T_ / (1e3 * 60)} mins...`),
                setTimeout(() => {
                  Wi("backup.export.cloud").catch((u) =>
                    t.error("Retry of scheduled backup failed:", u)
                  );
                }, T_);
            }
          },
          null,
          !0,
          c
        );
      },
      o = () => {
        r && (r.stop(), (r = null));
      },
      i = [
        Ll("backup.schedule.setAutoBackupEnabled", async (c, d) => {
          if (
            (t.info("Update schedule backup setting, enabled:", d),
            (await BK()) ||
              (t.warn(
                "Remote access is disabled currently, force to disable schedule backup"
              ),
              (d = !1)),
            d)
          ) {
            let { needsUbiosMigration: u } = await __();
            u || (await Wi("cloud.downloadEncryptionKey"));
          }
          await Wi("redux.dispatch", xK, { autoBackupEnabled: d }),
            d ? await a() : o();
        }),
        Ll("events.consoleDisconnectedFromCloud", o),
        Ll("events.consoleConnectedToCloud", async () => {
          try {
            let { autoBackupEnabled: c } = await __();
            c && a();
          } catch (c) {
            t.error(
              "Failed to setup backup scheduler during device connection",
              c
            );
          }
        }),
      ];
    return async () => {
      i.forEach((c) => MK(c));
    };
  };
});
var C_ = w((IEe, v_) => {
  var VK = require("bluebird"),
    Ml = require("fs-extra"),
    jK = _b(),
    GK = b_(),
    HK = A_(),
    {
      BACKUP_BASE_FOLDER_PATH: WK,
      UPLOAD_FOLDER_PATH: KK,
      ENCRYPTED_UBIOS_MIGRATION_DATA_FILE_PATH: YK,
    } = ct();
  v_.exports = (e, t) => {
    let r = [
      jK(e, t.wrap("backup.export")),
      GK(e, t.wrap("backup.import")),
      HK(e, t.wrap("backup.schedule")),
    ];
    return (
      Ml.emptyDir(WK).catch(() => null),
      Ml.emptyDir(KK).catch(() => null),
      Ml.remove(YK).catch(() => null),
      async () => {
        await VK.map(r, (s) => s());
      }
    );
  };
});
var as = w((AEe, D_) => {
  D_.exports = async (e, t, r, s = "info") => {
    let a = Date.now(),
      o = setTimeout(() => {
        e.log(
          "app",
          "warn",
          `${t} middleware taking a long time to attach.`,
          `${(Date.now() - a) / 1e3}s`
        );
      }, 1e3).unref();
    e.log("app", "debug", `Attaching ${t} middleware`);
    let n;
    try {
      (n = await r),
        clearTimeout(o),
        e.log(
          "app",
          s,
          `Attached ${t} middleware`,
          `${(Date.now() - a) / 1e3}s`
        );
    } catch (i) {
      throw (
        (clearTimeout(o),
        e.log(
          "app",
          "error",
          `Error attaching ${t} middleware`,
          `${(Date.now() - a) / 1e3}s`
        ),
        e.log("app", "error", i),
        i)
      );
    }
    return async () => {
      let i = Date.now();
      e.log("app", "debug", `Detaching ${t} middleware`);
      try {
        let c = await n();
        return (
          e.log(
            "app",
            s,
            `Detached ${t} middleware`,
            `${(Date.now() - i) / 1e3}s`
          ),
          c
        );
      } catch (c) {
        throw (
          (e.log(
            "app",
            "error",
            `Error detaching ${t} middleware`,
            `${(Date.now() - i) / 1e3}s`
          ),
          e.log("app", "error", c),
          c)
        );
      }
    };
  };
});
var qa,
  N_,
  Rr,
  xl,
  Je,
  zK,
  Qs,
  R_,
  P_,
  JK,
  XK,
  U_,
  k_ = x(() => {
    (qa = g(require("handoff"))),
      (N_ = g(require("moment-timezone"))),
      (Rr = g(H()));
    _s();
    xl = "adminSettingsChanged";
    (function (A) {
      (A.RELEASE_CHANNEL = "the release channel"),
        (A.SSH_ACCESS = "SSH access"),
        (A.SSH_PASSWORD = "the SSH password"),
        (A.CONSOLE_NAME = "the console name"),
        (A.CONSOLE_LOCATION = "the console location"),
        (A.TIMEZONE = "the time zone"),
        (A.AUTO_BACKUP = "automated Cloud config backups"),
        (A.UPDATE_SCHEDULE = "the automatic update schedule"),
        (A.FIRMWARE_AUTO_UPDATES = "automatic UniFi OS updates"),
        (A.APPLICATION_AUTO_UPDATES = "automatic UniFi OS application updates"),
        (A.HOT_SPARE = "Hot Spare"),
        (A.RAID_LEVEL = "the storage redundancy level"),
        (A.IP_CONFIG = "the IP configuration"),
        (A.IP_ADDRESS = "the IP Address"),
        (A.GATEWAY = "the Gateway Address"),
        (A.NETMASK = "the Netmask"),
        (A.FALLBACK_IP = "the Fallback IP Address"),
        (A.FALLBACK_NETMASK = "the Fallback Netmask"),
        (A.PRIMARY_DNS = "the Primary DNS"),
        (A.SECONDARY_DNS = "the Secondary DNS");
    })(Je || (Je = {}));
    (zK = (e) => (e ? "enabled" : "disabled")),
      (Qs = (e) => {
        switch (typeof e) {
          case "string":
            return e;
          case "boolean":
            return zK(e);
          default:
            return String(e);
        }
      }),
      (R_ = (e) => {
        if (!e) return "none";
        let t = (0, N_.default)();
        switch (
          (t.hours(e.hour), e.day !== void 0 && t.day(e.day), e.frequency)
        ) {
          case "daily":
            return `Every day at ${t.format("h A")}`;
          case "weekly":
            return `Every ${t.format("dddd")} at ${t.format("h A")}`;
          default:
            throw new Error(`Unsupported update frequency "${e.frequency}"`);
        }
      }),
      (P_ = (e) => {
        switch (e) {
          case Io.RAID_5:
            return "One disk";
          case Io.RAID_10:
            return "Half of disks";
          default:
            throw new Error(`Unsupported RAID level "${e}"`);
        }
      }),
      (JK = async (e, t) => {
        switch (e) {
          case "releaseChannel":
            return [
              {
                settingName: Je.RELEASE_CHANNEL,
                oldValue: await (0, Rr.getFWReleaseChannel)(),
                newValue: t,
              },
            ];
          case "ssh": {
            let r = t,
              s = [];
            return (
              (r.hashedPassword !== void 0 || r.passwordChanged) &&
                s.push({ settingName: Je.SSH_PASSWORD }),
              r.enabled !== void 0 &&
                r.enabled !== (await (0, qa.publish)("system.getSshEnabled")) &&
                s.push({ settingName: Je.SSH_ACCESS, newValue: r.enabled }),
              s
            );
          }
          case "name":
            return [
              {
                settingName: Je.CONSOLE_NAME,
                oldValue: await (0, Rr.getName)(),
                newValue: t,
              },
            ];
          case "location": {
            let { text: r = "unknown" } = (await (0, Rr.getLocation)()) || {},
              { text: s = "unknown" } = t;
            return [
              { settingName: Je.CONSOLE_LOCATION, oldValue: r, newValue: s },
            ];
          }
          case "timezone": {
            let r = ((await (0, Rr.getTimezone)()) || "unknown").replace(
                "_",
                " "
              ),
              s = t.replace("_", " ");
            return [{ settingName: Je.TIMEZONE, oldValue: r, newValue: s }];
          }
          case "autoBackupEnabled":
            return [{ settingName: Je.AUTO_BACKUP, newValue: t }];
          case "updateSchedule": {
            let r = t,
              s = await (0, Rr.getFWUpdateSchedule)(),
              a = [];
            return (
              r
                ? a.push(
                    {
                      settingName: Je.UPDATE_SCHEDULE,
                      oldValue: R_(s),
                      newValue: R_(r),
                    },
                    {
                      settingName: Je.FIRMWARE_AUTO_UPDATES,
                      newValue: r.includeFirmware,
                    },
                    {
                      settingName: Je.APPLICATION_AUTO_UPDATES,
                      newValue: r.includeControllers,
                    }
                  )
                : (s &&
                    s.includeFirmware &&
                    a.push({
                      settingName: Je.FIRMWARE_AUTO_UPDATES,
                      newValue: !1,
                    }),
                  s &&
                    s.includeControllers &&
                    a.push({
                      settingName: Je.APPLICATION_AUTO_UPDATES,
                      newValue: !1,
                    })),
              a
            );
          }
          case "hotspare":
            return [{ settingName: Je.HOT_SPARE, newValue: t }];
          case "raid": {
            let r = await (0, qa.publish)("system.ustorage.getConfig"),
              s = t;
            return [
              {
                settingName: Je.RAID_LEVEL,
                oldValue: P_(r.raid),
                newValue: P_(s),
              },
            ];
          }
          case "clientNetwork": {
            let r = t,
              s = await (0, qa.publish)("system.getClientNetworkConfig"),
              a = [];
            return (
              r.forEach((o) => {
                let { name: n, type: i } = o,
                  c = s.find((u) => u.name === n);
                if (!c) return;
                let d = i === "eth" ? " on Ethernet Network" : " on SFP";
                o.mode !== c.mode &&
                  a.push({
                    settingName: Je.IP_CONFIG,
                    oldValue: c.mode === "dhcp" ? "DHCP" : "Static",
                    newValue: o.mode === "dhcp" ? "DHCP" : "Static",
                    specifier: d,
                  }),
                  o.address !== c.address &&
                    a.push({
                      settingName: Je.IP_ADDRESS,
                      oldValue: c.address,
                      newValue: o.address,
                      specifier: d,
                    }),
                  o.netmask !== c.netmask &&
                    a.push({
                      settingName: Je.NETMASK,
                      oldValue: c.netmask,
                      newValue: o.netmask,
                      specifier: d,
                    }),
                  o.gateway !== c.gateway &&
                    a.push({
                      settingName: Je.GATEWAY,
                      oldValue: c.gateway,
                      newValue: o.gateway,
                      specifier: d,
                    }),
                  o["dhcp-fallback-ip"] !== c["dhcp-fallback-ip"] &&
                    a.push({
                      settingName: Je.FALLBACK_IP,
                      oldValue: c["dhcp-fallback-ip"],
                      newValue: o["dhcp-fallback-ip"],
                      specifier: d,
                    }),
                  o["dhcp-fallback-netmask"] !== c["dhcp-fallback-netmask"] &&
                    a.push({
                      settingName: Je.FALLBACK_IP,
                      oldValue: c["dhcp-fallback-netmask"],
                      newValue: o["dhcp-fallback-netmask"],
                      specifier: d,
                    }),
                  o.dns[0] !== c.dns[0] &&
                    a.push({
                      settingName: Je.PRIMARY_DNS,
                      oldValue: c.dns[0] || "none",
                      newValue: o.dns[0] || "none",
                      specifier: d,
                    }),
                  o.dns[1] !== c.dns[1] &&
                    a.push({
                      settingName: Je.SECONDARY_DNS,
                      oldValue: c.dns[1] || "none",
                      newValue: o.dns[1] || "none",
                      specifier: d,
                    });
              }),
              a
            );
          }
          default:
            return [];
        }
      }),
      (XK = (e, t) => async (r, s) => {
        let a = [];
        try {
          let n = await (0, qa.publish)("uum.getUser", r);
          if (!n) throw new Error(`Failed to retrieve user with user ID ${r}`);
          await Promise.all(
            Object.entries(s).map(async ([i, c]) => {
              if (c === void 0) return;
              let d = await JK(i, c);
              !d.length ||
                d.forEach((u) => {
                  let p,
                    {
                      oldValue: l,
                      newValue: f,
                      settingName: m,
                      specifier: E = "",
                    } = u;
                  if (l !== void 0 && f !== void 0) {
                    if (l === f) return;
                    p = {
                      eventId: xl,
                      eventData: {
                        user: { text: n.full_name },
                        settingName: { text: m + E },
                        oldValue: { text: Qs(l) },
                        newValue: { text: Qs(f) },
                      },
                      push: {
                        message: {
                          body: `${n.full_name} has changed ${m}${E} from ${l} to ${f}.`,
                        },
                      },
                      email: {
                        vars: {
                          user_name: n.full_name,
                          setting_name: m + E,
                          old_value: Qs(l),
                          new_value: Qs(f),
                        },
                      },
                    };
                  } else
                    l === void 0 && f !== void 0
                      ? (p = {
                          eventId: xl,
                          eventData: {
                            user: { text: n.full_name },
                            settingName: { text: m + E },
                            newValue: { text: Qs(f) },
                          },
                          push: {
                            message: {
                              body: `${n.full_name} has ${Qs(f)} ${m}${E}.`,
                            },
                          },
                          email: {
                            vars: {
                              user_name: n.full_name,
                              setting_name: m + E,
                              setting_action: Qs(f),
                            },
                          },
                        })
                      : (p = {
                          eventId: xl,
                          eventData: {
                            user: { text: n.full_name },
                            settingName: { text: m + E },
                          },
                          push: {
                            message: {
                              body: `${n.full_name} has changed ${m}${E}.`,
                            },
                          },
                          email: {
                            vars: {
                              user_name: n.full_name,
                              setting_name: m + E,
                            },
                          },
                        });
                  a.push(p);
                });
            })
          );
        } catch (n) {
          t.error(
            "Failed to prepare data for settings changed notification:",
            n
          );
        }
        return async () => {
          try {
            await Promise.all(
              a.map(async (n) => (0, qa.publish)("notifications.add", n))
            );
          } catch (n) {
            t.error("Failed to create settings changed notification:", n);
          }
        };
      }),
      (U_ = XK);
  });
var q_ = w((NEe, O_) => {
  var { publish: DEe } = require("handoff");
  O_.exports = (e, t) => ({
    buildSetupData: (s) => {
      if (!s) return;
      let a = {};
      if (s.isp) {
        let { isp: o } = s;
        o.download && (a.speedtest_down_provided = o.download),
          o.upload && (a.speedtest_up_provided = o.upload),
          o.downloadResults && (a.speedtest_down_detected = o.downloadDetected),
          o.uploadResults && (a.speedtest_up_detected = o.uploadDetected),
          o.pingResult && (a.network_ping = o.pingResult),
          o.speedTestProvider && (a.provider = o.speedTestProvider);
      }
      if (
        (s.country && (a.location_country = s.country),
        s.location && s.location.text && (a.location_city = s.location.text),
        s.newAccount != null &&
          (a.user_account = s.newAccount ? "new_user" : "existing"),
        s.optimizeNetwork != null && (a.auto_optimize = s.optimizeNetwork),
        s.schedule && (a.auto_update = !0),
        s.advancedSetup)
      ) {
        let {
          mode: o,
          vlan_id: n,
          vlan_priority: i,
          dnsCount: c,
        } = s.advancedSetup;
        a.advanced_setup = {
          connection_type: o,
          vlan_id: n,
          vlan_prio: i,
          custom_dns: c,
        };
      }
      return a;
    },
  });
});
var F_ = w((REe, QK) => {
  QK.exports = [
    { id: "eth0", plugged: !0, type: "LAN", enabled: !0 },
    { id: "eth1", plugged: !1, type: "LAN", enabled: !0 },
    { id: "eth2", plugged: !1, type: "LAN", enabled: !0 },
    { id: "eth3", plugged: !1, type: "LAN", enabled: !0 },
    { id: "eth4", plugged: !0, type: "WAN", enabled: !0 },
    { id: "eth5", plugged: !1, type: "LAN", enabled: !0 },
    { id: "eth6", plugged: !0, type: "WAN2", enabled: !0 },
    { id: "eth7", plugged: !1, type: "LAN", enabled: !0 },
  ];
});
var $l = w((PEe, L_) => {
  var ZK = [
      {
        identification: { id: 1, status: "running" },
        upload: { current: 0, average: 0 },
        download: { current: 0, average: 0 },
        latency: { current: 12.9, average: 0 },
        timestamp: 0,
      },
      {
        identification: { id: 1, status: "running" },
        upload: { current: 0, average: 0 },
        download: { current: 0, average: 0 },
        latency: { current: 12.9, average: 0 },
        timestamp: 0,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.viser.com",
          provider: "Viser",
          country: "United States",
          countryCode: "US",
          city: "Turner",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: { current: 0, average: 0 },
        latency: { current: 0, average: 0 },
        timestamp: 0,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.viser.com",
          provider: "Viser",
          country: "United States",
          countryCode: "US",
          city: "Turner",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: { current: 0, average: 0 },
        latency: { current: 0, average: 0 },
        timestamp: 92119760,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.viser.com",
          provider: "Viser",
          country: "United States",
          countryCode: "US",
          city: "Turner",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: { current: 0, average: 0 },
        latency: { current: 0, average: 0 },
        timestamp: 92119760,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.viser.com",
          provider: "Viser",
          country: "United States",
          countryCode: "US",
          city: "Turner",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: { current: 0, average: 0 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92121764,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: { current: 0, average: 0 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92121764,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: {
          current: 4363365970149254e-7,
          average: 4363365970149254e-7,
        },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92123771,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: {
          current: 47163980039920163e-8,
          average: 4539618136522173e-7,
        },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92124773,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: {
          current: 4305020937188435e-7,
          average: 4461445049833887e-7,
        },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92125776,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: {
          current: 46392119641076773e-8,
          average: 4505875703962124e-7,
        },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92126779,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: {
          current: 4639009101796407e-7,
          average: 4532475836490529e-7,
        },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92127781,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: {
          current: 4685572083748754e-7,
          average: 4557991877700233e-7,
        },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92128784,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: {
          current: 4478529470529471e-7,
          average: 4546659512751104e-7,
        },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92129785,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: {
          current: 4663866959122633e-7,
          average: 45613140962353534e-8,
        },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92130788,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: {
          current: 45856701894317055e-8,
          average: 45640209285318565e-8,
        },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92131791,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: {
          current: 44934821556886226e-8,
          average: 4556971975665703e-7,
        },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92132793,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: {
          current: 43915255832502496e-8,
          average: 4541927303717135e-7,
        },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92133796,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: {
          current: 4598340539460539e-7,
          average: 45466209824619734e-8,
        },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92134797,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: { current: 0, average: 45466209824619734e-8 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92135799,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 0 },
        download: { current: 0, average: 45466209824619734e-8 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92135799,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: {
          current: 51109519441674984e-8,
          average: 51109519441674984e-8,
        },
        download: { current: 0, average: 45466209824619734e-8 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92137804,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 5231127272727273e-7, average: 5170979640718564e-7 },
        download: { current: 0, average: 45466209824619734e-8 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92138805,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 4813954491017964e-7, average: 505197125748503e-6 },
        download: { current: 0, average: 45466209824619734e-8 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92139807,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 4674763636363637e-7, average: 49577399550786126e-8 },
        download: { current: 0, average: 45466209824619734e-8 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92140808,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 4790864207377867e-7, average: 49243314970059884e-8 },
        download: { current: 0, average: 45466209824619734e-8 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92141811,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 44404363636363643e-8, average: 4843749392779904e-7 },
        download: { current: 0, average: 45466209824619734e-8 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92142812,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: {
          current: 49015760479041916e-8,
          average: 48520115214601463e-8,
        },
        download: { current: 0, average: 45466209824619734e-8 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92143814,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 4887543768693918e-7, average: 48564574850299406e-8 },
        download: { current: 0, average: 45466209824619734e-8 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92144817,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 48331636363636374e-8, average: 4853871575912166e-7 },
        download: { current: 0, average: 45466209824619734e-8 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92145818,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: {
          current: 45347940179461616e-8,
          average: 48219319760479045e-8,
        },
        download: { current: 0, average: 45466209824619734e-8 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92146821,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: {
          current: 45236263473053896e-8,
          average: 47948132825258577e-8,
        },
        download: { current: 0, average: 45466209824619734e-8 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92147823,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 4338327272727273e-7, average: 4756807585461199e-7 },
        download: { current: 0, average: 45466209824619734e-8 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92148824,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 4756807585461199e-7 },
        download: { current: 0, average: 45466209824619734e-8 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92149827,
      },
      {
        identification: { id: 1, status: "running" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 4756807585461199e-7 },
        download: { current: 0, average: 45466209824619734e-8 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92149827,
      },
      {
        identification: { id: 1, status: "finished" },
        description: {
          providerUrl: "https://www.ui.com",
          provider: "Ubiquiti 2",
          country: "United States",
          countryCode: "US",
          city: "Seattle",
          lat: 0,
          lon: 0,
        },
        upload: { current: 0, average: 4756807585461199e-7 },
        download: { current: 0, average: 45466209824619734e-8 },
        latency: { current: 10.804999999999998, average: 0 },
        timestamp: 92149827,
      },
    ],
    e5 = [
      {
        url: "http://speedtest.viser.com:8081",
        latitude: 44.8476,
        longitude: -122.9501,
        provider: "Viser",
        providerUrl: "https://www.viser.com",
        city: "Turner",
        country: "United States",
        countryCode: "US",
        speedMbps: 1e3,
      },
      {
        url: "http://50.224.35.62:80",
        latitude: 44.0521,
        longitude: -123.087,
        provider: "Comcast Labs - Eugene",
        providerUrl: null,
        city: "Eugene, OR",
        country: "United States",
        countryCode: "US",
        speedMbps: 1e3,
      },
      {
        url: "http://sts-node-stl.ubncloud.com",
        latitude: 47.561968,
        longitude: -122.26177,
        provider: "Ubiquiti",
        providerUrl: "https://www.ui.com",
        city: "Seattle",
        country: "United States",
        countryCode: "US",
        speedMbps: 1e4,
      },
      {
        url: "http://sts-node-stl2.ubncloud.com",
        latitude: 47.609262,
        longitude: -122.313769,
        provider: "Ubiquiti 2",
        providerUrl: "https://www.ui.com",
        city: "Seattle",
        country: "United States",
        countryCode: "US",
        speedMbps: 1e4,
      },
      {
        url: "http://sts-node-vancouver-oneprovider-com.ubncloud.com",
        latitude: 49.25,
        longitude: -123.06,
        provider: "OneProvider.com",
        providerUrl: "https://oneprovider.com",
        city: "Vancouver",
        country: "Canada",
        countryCode: "CA",
        speedMbps: 1e3,
      },
      {
        url: "http://sts-node-sfo.ubncloud.com",
        latitude: 37.761234,
        longitude: -122.452835,
        provider: "Ubiquiti",
        providerUrl: "https://www.ui.com",
        city: "San Francisco",
        country: "United States",
        countryCode: "US",
        speedMbps: 1e4,
      },
      {
        url: "http://speedtest1.crosstalksolutions.com:80",
        latitude: 37.3598,
        longitude: -121.981,
        provider: "Crosstalk Solutions (US West)",
        providerUrl: "https://crosstalksolutions.com",
        city: "Santa Clara",
        country: "United States",
        countryCode: "US",
        speedMbps: 1e3,
      },
      {
        url: "http://sts-node-valley.ubncloud.com",
        latitude: 37.208831,
        longitude: -121.742042,
        provider: "Ubiquiti 2",
        providerUrl: "https://www.ui.com",
        city: "San Jose",
        country: "United States",
        countryCode: "US",
        speedMbps: 1e3,
      },
      {
        url: "http://199.66.106.229:80",
        latitude: 43.4528,
        longitude: -110.7393,
        provider: "Jackson Hole Airport",
        providerUrl: null,
        city: "Jackson",
        country: "United States",
        countryCode: "US",
        speedMbps: 1e3,
      },
      {
        url: "http://speed.nemont.io:80",
        latitude: 45.5154,
        longitude: -109.4692,
        provider: "Nemont",
        providerUrl: "https://nemont.com/",
        city: "Glasgow, MT",
        country: "United States",
        countryCode: "US",
        speedMbps: 1e3,
      },
    ],
    t5 = {
      ip: "70.103.27.244",
      isp: "Allstream Business US",
      org: "Speedy Quick Networks",
      country: "United States",
      countryCode: "US",
      lat: 45.5111,
      lon: -122.6,
      timezone: "America/Los_Angeles",
    },
    r5 = { id: 1, status: "running" },
    s5 = {
      statusCode: 200,
      error: 0,
      detail: "Test is scheduled to stop.",
      message: "Success",
    },
    a5 = "52c632e192067a96327123839c99d347cc8e8f49";
  L_.exports = {
    samples: ZK,
    MockInfo: t5,
    MockServers: e5,
    MockToken: a5,
    startUdapiSpeedTestResponse: r5,
    stopUdapiSpeedTestResponse: s5,
  };
});
var $_ = w((UEe, x_) => {
  var o5 = F_(),
    {
      samples: M_,
      startUdapiSpeedTestResponse: n5,
      stopUdapiSpeedTestResponse: i5,
    } = $l(),
    Ki = 0;
  x_.exports = (e, t) => ({
    getPortStatus: async () => (t.info("Calling port status"), o5),
    startSpeedTest: async () => n5,
    stopSpeedTest: async () => ((Ki = 0), i5),
    getInterfaces: async () => [],
    getSpeedTestStatus: async () => v({}, M_[Ki < M_.length - 1 ? Ki++ : Ki]),
    getBasicNetworkConfiguration: async () => {},
  });
});
var Bl = w((OEe, B_) => {
  var { fetch: Fa } = ie(),
    kEe = $_(),
    Yi = null,
    c5 = (e, t) => {
      let r = `http://127.0.0.1:${e.udapi.port}/api/v1.0`,
        s = async () => {
          try {
            let l = `${r}/user/login`;
            return (
              await Fa(l, {
                method: "POST",
                body: JSON.stringify({ username: "abc", password: "xyz" }),
              })
            ).headers.get("x-auth-token");
          } catch (l) {
            t.error("error getting token", l.message, l.response);
          }
        },
        a = () => {
          Yi = null;
        },
        o = async () => (
          Yi || ((Yi = await s()), setTimeout(a, 3e4)), { "x-auth-token": Yi }
        ),
        n = async () => {
          let l = `${r}/interfaces`,
            f = await Fa(l, { headers: await o() });
          if (!f.ok) throw new Error("Failed to get interfaces from udapi");
          return f.json();
        };
      return {
        getPortStatus: async () => {
          try {
            let l = await n(),
              f = (m) => {
                let E = m,
                  y;
                for (let h = 0; h < 2; h++) {
                  let S = l.find(
                    (D) =>
                      D.vlan?.interface?.id === E ||
                      D.pppoe?.interface?.id === E
                  );
                  if (!S) break;
                  (y = S), (E = S.identification.id);
                }
                return y;
              };
            return l
              .filter(
                (m) =>
                  m.identification.type === "ethernet" &&
                  m.identification.id.startsWith("eth")
              )
              .map((m) => {
                let E = m.identification.id,
                  y = m.identification.mac,
                  {
                    enabled: h,
                    plugged: S,
                    comment: D = f(E)?.status?.comment || "LAN",
                  } = m.status;
                return { id: E, enabled: h, plugged: S, type: D, mac: y };
              })
              .sort((m, E) => (m.id < E.id ? -1 : E.id < m.id ? 1 : 0));
          } catch (l) {
            return t.error("Failed to get port status", l), [];
          }
        },
        getSpeedTestStatus: async (l) => {
          let f = `${r}/tools/speedtest/${l}`,
            m = await Fa(f, { headers: await o() });
          if (!m.ok) {
            let y = await m.text().catch(() => null);
            throw new Error(
              `GET:${f} responsed with "${m.status}" status and "${y}" text`
            );
          }
          return await m.json();
        },
        startSpeedTest: async (l) => {
          let f = `${r}/tools/speedtest/start`,
            m = { method: "POST", headers: await o(), body: JSON.stringify(l) };
          return Fa(f, m).then((E) => E.json());
        },
        stopSpeedTest: async (l) => {
          let f = `${r}/tools/speedtest/${l}/stop`;
          return Fa(f, {
            method: "POST",
            headers: await o(),
            body: JSON.stringify({ id: l }),
          });
        },
        getInterfaces: n,
        getBasicNetworkConfiguration: async () => {
          let l = `${r}/system/configuration/basic/network`,
            f = await Fa(l, { headers: await o() });
          if (!f.ok) throw new Error("Failed to get interfaces from udapi");
          return f.json();
        },
      };
    };
  B_.exports = (e, t) => c5(e, t);
});
var tr,
  Vl = x(() => {
    (function (a) {
      (a.FINISHED = "finished"),
        (a.FAILED = "failed"),
        (a.RUNNING = "running"),
        (a.CANCELLED = "cancelled");
    })(tr || (tr = {}));
  });
var u5,
  V_,
  d5,
  jl,
  j_ = x(() => {
    Vl();
    (u5 = [tr.CANCELLED, tr.FINISHED, tr.FAILED]),
      (V_ = { current: 0, min: 0, max: 0, average: 0, samples: [], log: [] }),
      (d5 = { current: 0, average: 0 }),
      (jl = class {
        constructor(t) {
          let {
            startedInfo: { id: r, status: s },
            speedTestInfo: a,
            servers: o,
          } = t;
          (this.id = r),
            (this.status = s),
            (this.startTime = Date.now()),
            (this.upload = v({}, V_)),
            (this.download = v({}, V_)),
            (this.latency = v({}, d5)),
            (this.info = a),
            (this.servers = o);
        }
        get() {
          return {
            info: this.info,
            upload: this.upload,
            download: this.download,
            latency: this.latency,
            startTime: this.startTime,
            id: this.id,
            status: this.status,
            selectedServer: this.selectedServer,
          };
        }
        getId() {
          return this.id;
        }
        getStatus() {
          return this.status;
        }
        cancel() {
          this.status = tr.CANCELLED;
        }
        updateData(t) {
          let {
            identification: { status: r, id: s },
            upload: a,
            download: o,
            latency: n,
            description: i,
          } = t;
          if (
            (i &&
              (this.selectedServer = this.servers?.find(
                (c) => c?.provider === i.provider
              )),
            (this.id = s),
            (this.status = r),
            (this.latency = n),
            !u5.includes(this.status))
          )
            if (
              !(this.download.current > 0 && o.current === 0) &&
              a.current === 0
            ) {
              let c = Math.min(this.download.min, o.current),
                d = Math.max(this.download.max, o.current);
              this.download = B(v({}, o), {
                min: c,
                max: d,
                samples: this.download.samples.concat([o.current]),
              });
            } else
              a.current &&
                (this.upload = B(v({}, a), {
                  min: Math.min(this.upload.min, a.current),
                  max: Math.max(this.upload.max, this.upload.current),
                  samples: this.upload.samples.concat([a.current]),
                }));
        }
      });
  });
var an,
  zi,
  Ji,
  Zs,
  G_,
  GEe,
  Gl,
  H_ = x(() => {
    (an = g(require("handoff"))),
      (zi = g(require("set-interval-async/dynamic"))),
      (Ji = g(ie())),
      (Zs = g(Z())),
      (G_ = g(Bl())),
      (GEe = g($l()));
    j_();
    Vl();
    Gl = class {
      constructor(t, r) {
        this.INTERVAL = 400;
        this.speedV1Base = "https://sp-dir.uwn.com/api/v1";
        this.speedV2Base = "https://sp-dir.uwn.com/api/v2";
        this.intervalTimer = null;
        this.speedTestData = null;
        let {
          startSpeedTest: s,
          stopSpeedTest: a,
          getSpeedTestStatus: o,
        } = (0, G_.default)(t, r);
        (this.logger = r),
          (this.getUdapiSpeedTestData = o),
          (this.stopUdapiSpeedTest = a),
          (this.startUdapiSpeedTest = s);
      }
      async getSpeedTestServers(t) {
        return (0, Ji.fetch)(`${this.speedV2Base}/servers`, {
          headers: { "x-test-token": t },
        }).then((r) => r.json());
      }
      async getSpeedTestToken() {
        return (0, Ji.fetch)(`${this.speedV1Base}/tokens`, {
          method: "POST",
        }).then((t) => t.json());
      }
      async getSpeedTestInfo() {
        return (0, Ji.fetch)(`${this.speedV1Base}/ip`).then((t) => t.json());
      }
      async createSpeedTestData() {
        let { token: t } = await this.getSpeedTestToken(),
          r = await this.getSpeedTestServers(t),
          s = { type: "internet", direction: "both" };
        this.logger.info("Starting speed test", s);
        let a = await this.startUdapiSpeedTest(s),
          o = await this.getSpeedTestInfo();
        return new jl({ startedInfo: a, speedTestInfo: o, servers: r });
      }
      status() {
        return this.speedTestData?.get();
      }
      clear() {
        this.intervalTimer &&
          ((0, zi.clearIntervalAsync)(this.intervalTimer),
          (this.intervalTimer = null)),
          (this.speedTestData = null);
      }
      async stop() {
        this.speedTestData &&
          (await this.stopUdapiSpeedTest(this.speedTestData.getId()),
          this.speedTestData.cancel(),
          await (0, an.publish)(
            "redux.dispatch",
            Zs.SPEED_TEST_FAILED,
            this.speedTestData.get()
          )),
          this.clear();
      }
      async start() {
        this.intervalTimer ||
          ((this.speedTestData = await this.createSpeedTestData()),
          (this.intervalTimer = (0, zi.setIntervalAsync)(async () => {
            if (this.speedTestData) {
              let t = await this.getUdapiSpeedTestData(
                this.speedTestData.getId()
              );
              switch (
                (this.speedTestData.updateData(t),
                this.speedTestData.getStatus())
              ) {
                case tr.FINISHED: {
                  await this.stopUdapiSpeedTest(this.speedTestData.getId()),
                    await (0, an.publish)(
                      "redux.dispatch",
                      Zs.SPEED_TEST_FINISHED,
                      this.speedTestData.get()
                    ),
                    this.clear();
                  break;
                }
                case tr.CANCELLED:
                case tr.FAILED: {
                  await this.stopUdapiSpeedTest(this.speedTestData.getId()),
                    await (0, an.publish)(
                      "redux.dispatch",
                      Zs.SPEED_TEST_FAILED,
                      this.speedTestData.get()
                    ),
                    this.clear();
                  break;
                }
                case tr.RUNNING: {
                  await (0, an.publish)(
                    "redux.dispatch",
                    Zs.SPEED_TEST_RUNNING,
                    this.speedTestData.get()
                  );
                  break;
                }
              }
            }
          }, this.INTERVAL)));
      }
    };
  });
var W_ = {};
lt(W_, {
  findStackableCandidateByMac: () => nn,
  getApplicationsUpdateInfo: () => Kl,
  getIsStackable: () => on,
  getUpdateRequiredToStack: () => Yl,
});
async function on() {
  let { features: e } = await (0, Hl.publish)("system.device");
  if (!e.stackable || (await (0, ea.getStackableConsoleRole)())) return !1;
  let r = await (0, ea.getControllers)();
  for (let s of r)
    if (
      Wl.SUPPORTED_APPLICATION_NAMES.includes(s.name) &&
      !s.features?.stackable
    )
      return !1;
  return !0;
}
async function Kl() {
  let e = await (0, ea.getControllers)();
  return Wl.SUPPORTED_APPLICATION_NAMES.reduce((r, s) => {
    let a = e.find((o) => o.name === s);
    if (a && a.name !== _o.UUM) {
      let o = { name: a.name, version: a.version };
      r.push(o);
    }
    return r;
  }, []);
}
async function Yl({ platform: e, isStackable: t, firmware: r }) {
  if (t) {
    let { firmwareVersion: s } = await (0, Hl.publish)("system.hardware");
    return r !== s;
  } else return td([e]);
}
async function nn(e) {
  return (await (0, ea.getDeviceList)())?.unifiOS?.find((r) => r.mac === e);
}
var Hl,
  ea,
  Wl,
  ta = x(() => {
    Hl = g(require("handoff"));
    Ue();
    ea = g(H());
    Re();
    Wl = g(cr());
  });
var K_,
  Y_,
  Xi,
  z_,
  zl,
  J_,
  X_,
  Q_,
  Z_,
  Ps,
  l5,
  p5,
  m5,
  f5,
  Jl,
  Xl,
  eT,
  tT = x(() => {
    (K_ = g(require("bluebird"))),
      (Y_ = g(require("child_process"))),
      (Xi = g(require("handoff"))),
      (z_ = g(require("node-cache"))),
      (zl = g(require("node-ssh"))),
      (J_ = g(require("set-interval-async"))),
      (X_ = g(require("set-interval-async/dynamic"))),
      (Q_ = g(require("util")));
    qt();
    Z_ = g(ie());
    Ue();
    Ps = g(cr());
    ta();
    (l5 = 600),
      (p5 = 5 * 60 * 1e3),
      (m5 = 10 * 1e3),
      (f5 = 5 * 1e3),
      (Jl = Q_.default.promisify(Y_.default.execFile)),
      (Xl = class {
        constructor(t, r) {
          this.config = t;
          this.logger = r;
          this.isUpdatingConsoleList = new z_.default({ stdTTL: l5 });
        }
        async getIsUpdating(t) {
          return Boolean(this.isUpdatingConsoleList.get(t));
        }
        async update(t) {
          if (await this.getIsUpdating(t))
            throw new Error("Console is already updating");
          let r = await nn(t);
          if (!r) throw new Error(`Cannot find console by mac="${t}"`);
          return this.doUpdate(r.ip, r.mac), !0;
        }
        async doUpdate(t, r) {
          try {
            this.isUpdatingConsoleList.set(r, !0);
            let s = await this.updateFirmwareViaSsh(t);
            await this.waitUntilConsoleUpgraded(t, s),
              await this.updateApplicationViaSsh(t);
          } catch (s) {
            this.logger.error(
              `Failed to update unstacked console "${t}" to required version: ${Te(
                s
              )}`
            );
          } finally {
            this.isUpdatingConsoleList.del(r);
          }
        }
        async updateFirmwareViaSsh(t) {
          let r = new zl.NodeSSH();
          await r.connect({
            host: t,
            username: Ps.DEFAULT_SSH_USERNAME,
            password: Ps.DEFAULT_SSH_PASSWORD,
          });
          let { firmwareVersion: s } = await (0, Xi.publish)("system.hardware"),
            { stdout: a, stderr: o } = await r.execCommand(
              "cat /usr/lib/version"
            );
          o && this.logger.warn("Failed to get FW version via ssh, err:", o);
          let { firmwareVersion: n } = Qu(a);
          if (n === s) return n;
          this.logger.info(`Update unstacked console from ${n} to ${s}`);
          let c = (await (0, Xi.publish)("firmware.getUpdateInfo", s))._links
              .data.href,
            d = await rd(this.config),
            u = `wget -O ${d} ${c} && ubnt-systool fwupdate ${d}`,
            {
              stdout: p,
              stderr: l,
              code: f,
              signal: m,
            } = await r.execCommand(u);
          return (
            l &&
              this.logger.warn(
                `Failed to execute cmd "${u}" via SSH, code: ${f}, signal: ${m}, stdout: ${p}`
              ),
            r.dispose(),
            s
          );
        }
        waitUntilConsoleUpgraded(t, r) {
          let s;
          return (
            this.logger.info(
              `Wait for unstacked console to reboot with version: ${r}`
            ),
            new K_.default((a) => {
              s = (0, X_.setIntervalAsync)(async () => {
                try {
                  let o = await (0, Z_.fetch)(`http://${t}/api/system`, {
                    timeout: f5,
                  });
                  o.ok &&
                    (await o.json()).hardware?.firmwareVersion === r &&
                    a();
                } catch (o) {
                  this.logger.warn(
                    `Failed to check version on unstacked console with IP "${t}": ${Te(
                      o
                    )}`
                  );
                }
              }, m5);
            })
              .timeout(p5)
              .finally(() => (0, J_.clearIntervalAsync)(s))
          );
        }
        async updateApplicationViaSsh(t) {
          let r = new zl.NodeSSH();
          await r.connect({
            host: t,
            username: Ps.DEFAULT_SSH_USERNAME,
            password: Ps.DEFAULT_SSH_PASSWORD,
          });
          let s = await Kl();
          this.logger.info("Update application on unstacked console with", s);
          for (let a of s) {
            let o = this.config.controllers[a.name].aptPackage,
              { stdout: n, stderr: i } = await r.execCommand(
                `dpkg -l | grep ${o}`
              );
            i && this.logger.warn("Failed to get application version, err:", i);
            let c = n.split(/\s+/);
            if (c[2] === a.version) {
              this.logger.info(
                `${a.name} application is already matched: ${c[2]}`
              );
              continue;
            }
            await (0, Xi.publish)(
              "taskQueue.add",
              async () => {
                await Jl("apt-get", ["update"]),
                  await Jl("apt-get", ["install", "sshpass", "-y"]);
              },
              "updateSshpassPackage"
            );
            let d = "/etc/apt/sources.list.d/ubiquiti.list";
            await Jl("sshpass", [
              "-p",
              Ps.DEFAULT_SSH_PASSWORD,
              "scp",
              "-o",
              "UserKnownHostsFile=/dev/null",
              "-o",
              "StrictHostKeyChecking=no",
              d,
              `${Ps.DEFAULT_SSH_USERNAME}@${t}:${d}`,
            ]);
            let u = `systemctl is-system-running --wait; apt-get update; DEBIAN_FRONTEND=noninteractive apt-get install ${o}=${a.version} -y`,
              { stderr: p } = await r.execCommand(u);
            p &&
              this.logger.warn(`Failed to execute cmd "${u}" via SSH, err:`, p),
              this.logger.info(
                `${a.name} application is updated to ${a.version} on unstacked console`
              );
          }
          r.dispose();
        }
      }),
      (eT = Xl);
  });
var aT = w((dSe, sT) => {
  var h5 = require("node-cache"),
    { v4: y5 } = require("uuid"),
    w5 = 600,
    rT = class {
      constructor() {
        this.cache = new h5({ stdTTL: w5 });
      }
      generate() {
        let t = y5();
        return this.cache.set(t), t;
      }
      verify(t) {
        return this.cache.has(t);
      }
      delete(t) {
        this.cache.del(t);
      }
    };
  sT.exports = rT;
});
var nT = {};
lt(nT, { default: () => g5 });
var oT,
  La,
  g5,
  iT = x(() => {
    (oT = g(require("handoff"))),
      (La = g(H())),
      (g5 = async (e) => {
        try {
          let t = await (0, La.getName)(),
            r = await (0, La.getSecondaryMac)(),
            a = (await (0, La.getDeviceList)()).unifiOS?.find(
              (n) => n.mac === r
            ),
            o = {
              eventId: "consoleStacked",
              eventData: {
                consoleName: { text: t },
                secondaryMac: { text: r },
                consoleModel: { text: a?.model || "Unknown console" },
              },
            };
          await (0, oT.publish)("notifications.add", o);
        } catch (t) {
          e.error("Failed to create a notification for console stacked", t);
        }
      });
  });
var uT = w((lSe, cT) => {
  cT.exports = { createNotification: (iT(), nT) };
});
var pT = w((fSe, lT) => {
  ta();
  var { publish: dT } = require("handoff"),
    E5 = require("node-fetch"),
    S5 = require("https"),
    { ADOPT_SECONDARY: b5 } = Z(),
    { getDeviceList: mSe } = H();
  lT.exports = async (e, t, r) => {
    let s = await nn(r);
    if (!s) throw new Error(`Cannot find console by mac="${r}"`);
    let { ip: a, mac: o } = await dT("system.info"),
      n = { ip: a, token: t.generate(), mac: o },
      i = e.ports.https,
      c = `https://${s.ip}:${i}/api/stackable/adopt`,
      d = new S5.Agent({ rejectUnauthorized: !1 }),
      u = await E5(c, {
        timeout: 5e3,
        method: "POST",
        body: JSON.stringify(n),
        headers: { "Content-Type": "application/json" },
        agent: d,
      });
    if (!u.ok)
      throw new Error(
        `Failed to adopt console with mac="${r}", reason: ${u.statusText}`
      );
    return (
      await dT("redux.dispatch", b5, { ip: s.ip, mac: s.mac }), { success: !0 }
    );
  };
});
var fT = w((hSe, mT) => {
  var { publish: _5 } = require("handoff"),
    { get: T5 } = require("lodash"),
    { getAvailableUpdates: I5, getFWReleaseChannel: A5 } = H(),
    { SUPPORTED_APPLICATION_NAMES: v5 } = cr();
  mT.exports = async (e) => {
    let t = await I5(),
      r = await A5(),
      s = T5(t, `${r}.${e}`, null);
    if (!!v5.includes(e))
      return _5("stackable.sendRequestToSecondary", "applicationUpdate", {
        applicationName: e,
        availableVersion: s,
      });
  };
});
var yT = w((wSe, hT) => {
  var { publish: Ql } = require("handoff"),
    { getControllers: C5 } = H(),
    { SUPPORTED_APPLICATION_NAMES: ySe } = cr(),
    { getApplicationsUpdateInfo: D5 } = (ta(), W_);
  hT.exports = async () => {
    let { firmwareVersion: e } = await Ql("system.hardware"),
      t = await C5(),
      r = await D5(),
      s = {
        firmwareUpdateInfo: await Ql("firmware.getUpdateInfo", e),
        applicationsUpdateInfo: r,
      };
    return Ql("stackable.sendRequestToSecondary", "checkUpdatesAndApply", s);
  };
});
var gT = w((gSe, wT) => {
  var { publish: N5 } = require("handoff"),
    { getSecondaryMac: R5 } = H();
  wT.exports = async (e, t) => {
    let r = await R5();
    if (e !== r)
      throw new Error(
        `Cannot erase the disk on the secondary console, invalid mac="${e}"`
      );
    await N5("stackable.sendRequestToSecondary", "eraseDisk", t);
  };
});
var ST = w((ESe, ET) => {
  var { publish: P5 } = require("handoff");
  ET.exports = (e) =>
    P5("stackable.sendRequestToSecondary", "firmwareUpdate", e);
});
var _T = w((SSe, bT) => {
  var { publish: U5 } = require("handoff");
  bT.exports = () =>
    U5("stackable.sendRequestToSecondary", "system.ustorage.nuke");
});
var IT = w((bSe, TT) => {
  var { publish: cn } = require("handoff"),
    { SET_SECONDARY_IS_SETUP: k5 } = Z(),
    { getSettings: O5 } = H();
  TT.exports = async () => {
    let {
        name: e,
        country: t,
        sendDiagnostics: r,
        timezone: s,
        location: a,
      } = await O5(),
      { hotspare: o, raid: n } = await cn("system.ustorage.getConfig"),
      i = await cn("system.getSshEnabled"),
      c = await cn("system.getSshHashedPassword");
    await cn("stackable.sendRequestToSecondary", "system.setup", {
      isPrimary: !1,
      updateNeeded: !1,
      name: e,
      country: t,
      sendDiagnostics: r,
      timezone: s,
      location: a,
      hotspare: o,
      raid: n,
      sshEnabled: i,
      sshHashedPassword: c,
    }),
      await cn("redux.dispatch", k5);
  };
});
var vT = w((_Se, AT) => {
  var { publish: q5 } = require("handoff");
  AT.exports = (e) => q5("stackable.sendRequestToSecondary", "system.patch", e);
});
var DT = w((TSe, CT) => {
  var { publish: F5 } = require("handoff");
  CT.exports = () => F5("stackable.sendRequestToSecondary", "system.poweroff");
});
var RT = w((ISe, NT) => {
  var { publish: L5 } = require("handoff");
  NT.exports = () => L5("stackable.sendRequestToSecondary", "system.reboot");
});
var UT = w((ASe, PT) => {
  var { publish: M5 } = require("handoff");
  PT.exports = () =>
    M5("stackable.sendRequestToSecondary", "system.resetToDefaults");
});
var OT = w((vSe, kT) => {
  var { publish: x5 } = require("handoff");
  kT.exports = (e) =>
    x5("stackable.sendRequestToSecondary", "system.setSshPassword", e);
});
var LT = w((CSe, FT) => {
  var { publish: qT } = require("handoff"),
    { DESTROY_STACK: $5 } = Z(),
    { getSecondaryMac: B5 } = H();
  FT.exports = async (e, t) => {
    let r = await B5();
    if (t !== r)
      throw new Error(`Cannot unadopt secondary console, invalid mac="${t}"`);
    await qT("stackable.sendRequestToSecondary", "unadopt", {}, !1),
      await qT("redux.dispatch", $5),
      e.info(`Successfully unadopted secondary console, mac="${t}"`);
  };
});
var xT = w((DSe, MT) => {
  var { publish: Qi } = require("handoff"),
    { getSettings: V5, getFWReleaseChannel: j5 } = H();
  MT.exports = async () => {
    let {
        name: e,
        country: t,
        sendDiagnostics: r,
        timezone: s,
        location: a,
      } = await V5(),
      o = await j5(),
      { hotspare: n, raid: i } = await Qi("system.ustorage.getConfig"),
      c = await Qi("system.getSshEnabled"),
      d = await Qi("system.getSshHashedPassword");
    await Qi("stackable.sendRequestToSecondary", "system.patch", {
      name: e,
      country: t,
      sendDiagnostics: r,
      timezone: s,
      location: a,
      releaseChannel: o,
      hotspare: n,
      raid: i,
      ssh: { enabled: c, hashedPassword: d },
    });
  };
});
var BT = w((NSe, $T) => {
  $T.exports = {
    adopt: pT(),
    applicationUpdate: fT(),
    checkUpdatesAndApply: yT(),
    eraseDisk: gT(),
    firmwareUpdate: ST(),
    nukeStorage: _T(),
    setup: IT(),
    systemPatch: vT(),
    systemPoweroff: DT(),
    systemReboot: RT(),
    systemReset: UT(),
    systemSetSshPassword: OT(),
    unadopt: LT(),
    updateSettings: xT(),
  };
});
var jT = w((RSe, VT) => {
  var { publish: G5 } = require("handoff"),
    { UPDATE_SECONDARY_CONSOLE_INFO: H5 } = Z();
  VT.exports = async (e, t) => {
    try {
      switch ((e.debug(`Received "${t.name}" event from secondary`), t.name)) {
        case "systemInfo": {
          await G5("redux.dispatch", H5, t.body);
          break;
        }
        default:
          throw new Error(`Unsupported event: ${t.name}`);
      }
    } catch (r) {
      e.error(`Failed to handle "${t.name}" event from secondary`, r);
    }
  };
});
var HT = w((PSe, GT) => {
  var { publish: W5 } = require("handoff");
  GT.exports = async (e, t) => {
    try {
      e.info(`Received "${t.action}" request from secondary`);
      let r;
      switch (t.action) {
        case "cloud.aptCreds":
          r = await W5("cloud.aptCreds");
          break;
        default:
          throw new Error(`Unsupported request: ${t.action}`);
      }
      await t.respond(r || { success: !0 });
    } catch (r) {
      e.error(`Failed to handle "${t.action}" request`, r),
        await t.respond({}, r.message, 1).catch(e.error);
    }
  };
});
var KT = w((USe, WT) => {
  var { publish: K5 } = require("handoff"),
    { getStackableConsoleRole: Y5, getSecondaryFingerprint: z5 } = H(),
    { SET_SECONDARY_FINGERPRINT: J5 } = Z(),
    { PRIMARY_ROLE: X5 } = cr();
  WT.exports = async (e, t, r) => {
    let s = t.req;
    if (s.headers["sec-websocket-protocol"] !== "ucp4")
      return r(!1, 412, "invalid protocol");
    let o = s.socket.getPeerCertificate().fingerprint;
    if (!o) return r(!1, 403, "no fingerprint");
    if ((await Y5()) !== X5) return r(!1, 412, "not a primary console");
    let i = await z5();
    if (i && i === o) return r(!0);
    let c = s.headers["x-token"];
    return c
      ? e.verify(c)
        ? (await K5("redux.dispatch", J5, o), r(!0))
        : r(!1, 403, "invalid token")
      : r(!1, 403, "invalid fingerprint");
  };
});
var zT = w((kSe, YT) => {
  YT.exports = { eventHandler: jT(), requestHandler: HT(), verify: KT() };
});
var rI = w((LSe, tI) => {
  tT();
  var JT = require("fs-extra"),
    Q5 = require("https"),
    Z5 = require("ws"),
    { publish: Ma, subscribe: Nt, unsubscribe: Zl } = require("handoff"),
    e6 = require("@ubnt/ucp4"),
    { takeEvery: XT } = require("redux-saga/effects"),
    t6 = aT(),
    { createNotification: r6 } = uT(),
    { SUBSCRIPTION_PRIORITY: un } = Ko(),
    { PRIMARY_ROLE: ep, PING_INTERVAL_MS: s6, PONG_TIMEOUT_MS: a6 } = cr(),
    { deviceStates: qSe } = Ot(),
    {
      ADOPT_SECONDARY: o6,
      DESTROY_STACK: n6,
      SET_SECONDARY_CONNECTED: i6,
      SET_SECONDARY_DISCONNECTED: QT,
      UPDATE_SYSTEM_IS_STACKED: ZT,
    } = Z(),
    {
      getSecondaryIsSetup: c6,
      getSecondaryMac: eI,
      getStackableConsoleRole: tp,
    } = H(),
    {
      adopt: u6,
      applicationUpdate: d6,
      checkUpdatesAndApply: l6,
      eraseDisk: p6,
      firmwareUpdate: m6,
      nukeStorage: f6,
      setup: h6,
      systemPatch: y6,
      systemPoweroff: w6,
      systemReboot: g6,
      systemReset: E6,
      systemSetSshPassword: S6,
      unadopt: b6,
      updateSettings: _6,
      updateUnstackedConsole: FSe,
    } = BT(),
    { eventHandler: T6, requestHandler: I6, verify: A6 } = zT();
  tI.exports = async (e, t) => {
    let r = new t6(),
      s = new eT(e, t),
      a = [],
      o = [],
      n = null,
      i = null,
      c = null,
      [d, u] = await Promise.all([
        JT.readFile(e.ssl.key),
        JT.readFile(e.ssl.crt),
      ]),
      p = Q5.createServer({
        key: d,
        cert: u,
        requestCert: !0,
        rejectUnauthorized: !1,
      }),
      l = new Z5.Server({ server: p, verifyClient: (k, I) => A6(r, k, I) }),
      f = async (k, I) => {
        t.error(
          `IPC connection is disconnected from secondary, code: ${k}, reason: ${I}`
        ),
          (await tp()) === ep && (await Ma("redux.dispatch", QT, await eI())),
          n.removeAllListeners(),
          (n = null),
          o.forEach((P) => Zl(P)),
          (o = []),
          h(),
          S();
      },
      m = async () => {
        if (
          (t.info("IPC connection is connected from secondary"),
          await Ma("redux.dispatch", i6),
          (o = [
            Nt("stackable.unadoptSecondary", async (I, _) => b6(t, _)),
            Nt("stackable.sendRequestToSecondary", async (I, _, P, U = !0) =>
              U ? C(_, P) : R(_, P)
            ),
            Nt("stackable.eraseDiskOnSecondary", async (I, _, P) => p6(_, P)),
            Nt("stackable.generateSupportFileFromSecondary", async () =>
              C("generateSupportFile")
            ),
            Nt("system.patch", (I, _) => y6(_)),
            Nt("firmware.updateByVersion", (I, _) => m6(_), un.HIGH),
            Nt(
              "controllers.update",
              (I, { applicationName: _ }) => d6(_),
              un.HIGH
            ),
            Nt("system.reboot", g6, un.HIGH),
            Nt("system.resetToDefaults", E6, un.HIGH),
            Nt("system.poweroff", w6, un.HIGH),
            Nt("system.setSshPassword", (I, _) => S6(_)),
            Nt("system.ustorage.nuke", f6),
          ]),
          !(await c6()))
        )
          try {
            t.info("Secondary is not setup yet"), await h6();
          } catch (I) {
            t.error("Failed to setup secondary", I);
          }
        try {
          await _6();
        } catch (I) {
          t.error("Failed to update settings to secondary", I);
        }
        try {
          await l6();
        } catch (I) {
          t.error("Failed to check updates on secondary", I);
        }
      },
      E = (k, I) => {
        t.error(
          'Received "connectionerror" event from stackable WSS server:',
          k
        );
        try {
          I.close();
        } catch (_) {
          t.error("Failed to close websocket", _), n.emit("close");
        }
      },
      y = (k, I) => {
        try {
          t.info(`Received "${I}" event, close WSS directly`), k.close();
        } catch (_) {
          t.error("Failed to close websocket", _), n.emit("close");
        }
      },
      h = () => {
        i && (clearInterval(i), (i = null));
      },
      S = () => {
        c && (clearTimeout(c), (c = null));
      },
      D = (k) => {
        if (!k) {
          h();
          return;
        }
        if (!c)
          try {
            k.ping(), (c = setTimeout(() => y(k, "pongTimeout"), a6).unref());
          } catch {
            y(k, "pingError");
          }
      },
      A = async (k) => {
        (n = new e6(k)),
          n.once("unadopt", () => y(k, "onUnadopt")),
          n.once("close", (I, _) => f(I, _)),
          n.once("connectionerror", (I) => E(I, k)),
          n.on("request", (I) => I6(t, I)),
          n.on("event", (I) => T6(t, I)),
          k.on("pong", S),
          (i = setInterval(() => D(k), s6)),
          await m();
      };
    l.on("connection", A),
      l.on("error", (k) =>
        t.error("Received error from stackable WSS server:", k)
      );
    let C = async (k, I = {}) => {
        if ((t.info(`Send "${k}" request to secondary`), !n))
          throw new Error("No connection from secondary console");
        let { header: _, body: P } = await n.request(k, I);
        if (_.errorCode) throw new Error(_.error);
        return t.debug(`Received "${k}" response from secondary, body:`, P), P;
      },
      R = async (k, I = {}) => {
        if ((t.info(`Send "${k}" untracked request to secondary`), !n))
          throw new Error("No connection from secondary console");
        let _ = await n.sendRequest(k, I);
        return (
          t.debug(`Sent untracked request with message ID "${_}" to secondary`),
          _
        );
      },
      N = async () => {
        switch ((a.forEach((I) => Zl(I)), (a = []), await tp())) {
          case void 0:
            (a = [
              Nt("stackable.isUnstackConsoleUpdating", (I, _) =>
                s.getIsUpdating(_)
              ),
              Nt("stackable.updateUnstackedConsole", async (I, _) =>
                s.update(_)
              ),
              Nt("stackable.adoptSecondary", async (I, _) => u6(e, r, _)),
            ]),
              await Ma("redux.dispatch", ZT, !1);
            break;
          case ep:
            await Ma("redux.dispatch", ZT, !0);
            break;
        }
      },
      b = async () => {
        (await tp()) !== ep ||
          n ||
          (await Ma("redux.dispatch", QT, await eI()));
      },
      T = async () => {
        n && n.emit("unadopt"), await N();
      },
      M = async () => {
        await N(), await r6(t);
      };
    return (
      [
        function* () {
          yield XT([o6], () => M());
        },
        function* () {
          yield XT([n6], () => T());
        },
      ].forEach((k) => Ma("redux.saga.add", k)),
      await new Promise((k, I) => {
        p.listen(e.ports.stackable, (_) => {
          if (_)
            return t.error("Stackable WSS server could not start", _), I(_);
          t.info(
            `Stackable WSS server is now listening on port ${e.ports.stackable}`
          ),
            k();
        });
      }),
      N(),
      b(),
      async () => {
        a.forEach((k) => Zl(k)),
          p.close(),
          h(),
          S(),
          t.info(
            `Stackable WSS server is no longer listening on port ${e.ports.stackable}`
          );
      }
    );
  };
});
var aI = w((MSe, sI) => {
  var { publish: v6 } = require("handoff"),
    { JOIN_STACK: C6 } = Z();
  sI.exports = async (e, { ip: t, token: r, mac: s }) => {
    e.info(
      `Received request to join stack as a secondary, primary info: mac="${s}" ip="${t}"`
    ),
      await v6("redux.dispatch", C6, { ip: t, token: r, mac: s });
  };
});
var iI = w((xSe, nI) => {
  var { publish: rr } = require("handoff"),
    oI = require("fs-extra"),
    D6 = require("semver"),
    { getFWVersionString: N6 } = (Ue(), We),
    { DESTROY_STACK: R6 } = Z();
  nI.exports = async (e, t) => {
    try {
      e.info(`Received "${t.action}" request from primary`);
      let r;
      switch (t.action) {
        case "system.reboot":
        case "system.resetToDefaults":
        case "system.poweroff":
        case "system.ustorage.nuke":
          r = await rr(t.action);
          break;
        case "system.setup":
        case "system.setSshPassword":
          r = await rr(t.action, t.body);
          break;
        case "system.patch": {
          let s = t.body;
          (s.updateSchedule = null),
            (s.autoBackupEnabled = !1),
            delete s.clientNetwork,
            (r = await rr("system.patch", s));
          break;
        }
        case "applicationUpdate": {
          let { applicationName: s, availableVersion: a } = t.body;
          rr("controllers.update", { applicationName: s, version: a }).catch(
            e.error
          );
          break;
        }
        case "firmwareUpdate": {
          rr("firmware.updateByVersion", t.body).catch(e.error);
          break;
        }
        case "checkUpdatesAndApply": {
          let { firmwareUpdateInfo: s } = t.body,
            { firmwareVersion: a } = await rr("system.hardware"),
            o = N6(s);
          if (D6.gt(o, a))
            e.info(`Update firmware to "${o}" (sync with primary)`),
              rr("firmware.updateByVersion", { updateInfo: s }).catch(e.error);
          else {
            let { applicationsUpdateInfo: n } = t.body;
            n.forEach((i) => {
              e.info(
                `Update application "${i.name}" to "${i.version}" (sync with primary)`
              ),
                rr("controllers.update", {
                  applicationName: i.name,
                  version: i.version,
                }).catch(e.error);
            });
          }
          break;
        }
        case "unadopt":
          await rr("redux.dispatch", R6), await rr("system.resetToDefaults");
          break;
        case "eraseDisk":
          await rr("system.ustorage.erase", t.body);
          break;
        case "generateSupportFile": {
          let a = (await rr("system.generateSupportFile")).getPath();
          (r = await oI.readFile(a)), await oI.remove(a).catch(() => null);
          break;
        }
        default:
          throw (
            (e.error(`Unsupported request: ${t.action}`),
            new Error("unsupported action"))
          );
      }
      await t.respond(r || { success: !0 });
    } catch (r) {
      e.error(`Failed to handle "${t.action}" request`, r),
        await t.respond({}, r.message, 1).catch(e.error);
    }
  };
});
var uI = w(($Se, cI) => {
  cI.exports = { adopt: aI(), requestHandler: iI() };
});
var lI = w((BSe, dI) => {
  var { publish: P6 } = require("handoff");
  dI.exports = () => P6("stackable.sendRequestToPrimary", "cloud.aptCreds");
});
var mI = w((VSe, pI) => {
  pI.exports = { getAptCreds: lI() };
});
var hI = w((jSe, fI) => {
  var { publish: U6 } = require("handoff"),
    { getPrimaryIp: k6, getPrimaryMac: O6 } = H(),
    { UPDATE_PRIMARY_HOST: q6 } = Z();
  fI.exports = async (e, t) => {
    let r = await k6(),
      s = await O6(),
      a = t.find((o) => o.hardwareAddress === s && o.ip !== r);
    a &&
      a.ip &&
      (e.info(`Update the IP of primary console from ${r} to ${a.ip}`),
      await U6("redux.dispatch", q6, a.ip));
  };
});
var wI = w((GSe, yI) => {
  yI.exports = { updatePrimaryHost: hI() };
});
var _I = w((KSe, bI) => {
  var gI = require("bluebird"),
    EI = require("fs-extra"),
    { publish: xa, subscribe: Zi, unsubscribe: rp } = require("handoff"),
    F6 = require("ws"),
    L6 = require("@ubnt/ucp4"),
    { takeEvery: sp } = require("redux-saga/effects"),
    { adopt: M6, requestHandler: x6 } = uI(),
    { getAptCreds: $6 } = mI(),
    { updatePrimaryHost: B6 } = wI(),
    { SECONDARY_ROLE: ap, PING_INTERVAL_MS: V6, PONG_TIMEOUT_MS: j6 } = cr(),
    {
      getSystemInfo: G6,
      getDeviceStateLastChanged: HSe,
      getDeviceState: H6,
      getStackableConsoleRole: op,
      getPrimaryIp: W6,
      getPrimaryToken: K6,
      getPrimaryFingerprint: Y6,
    } = H(),
    {
      ADOPT_SECONDARY: WSe,
      JOIN_STACK: z6,
      DESTROY_STACK: J6,
      UPDATE_SYSTEM_INFO: X6,
      UPDATE_DEVICE_STATE: Q6,
      SET_PRIMARY_FINGERPRINT: Z6,
      UPDATE_SYSTEM_IS_STACKED: SI,
    } = Z(),
    e3 = 5e3;
  bI.exports = async (e, t) => {
    let r = [],
      s = [],
      a = null,
      o = null,
      n = null,
      i = null,
      c = () => {
        n && (clearInterval(n), (n = null));
      },
      d = () => {
        i && (clearTimeout(i), (i = null));
      },
      u = async (h = 0) => {
        if ((await op()) !== ap || (h && (await gI.delay(h)), a)) return;
        let [D, A] = await gI.all([
            EI.readFile(e.ssl.key),
            EI.readFile(e.ssl.crt),
          ]),
          C = { "sec-websocket-protocol": "ucp4" },
          R = await K6();
        R && (C["x-token"] = R);
        let N = await W6(),
          b = e.ports.stackable;
        (o = new F6(`wss://${N}:${b}`, "ucp4", {
          cert: A,
          key: D,
          headers: C,
          rejectUnauthorized: !1,
        })),
          (a = new L6(o));
        let T = (P, U) => {
            t.error('Received "connectionerror" from secondary:', P);
            try {
              U.close();
            } catch (j) {
              t.error("Failed to close websocket", j), a.emit("close");
            }
          },
          M = async () => {
            try {
              let P = await Y6(),
                U = o._socket.getPeerCertificate().fingerprint;
              if (!P) {
                await xa("redux.dispatch", Z6, U);
                return;
              }
              if (P !== U) throw new Error("Invalid fingerprint provided");
            } catch (P) {
              t.error(
                "Failed to verify console fingerprint, force to disconnect",
                P
              ),
                T(P, o);
            }
          },
          q = (P) => {
            if (!P) {
              c();
              return;
            }
            if (!i)
              try {
                P.ping(),
                  (i = setTimeout(
                    () => T(new Error("Pong timeout"), P),
                    j6
                  ).unref());
              } catch (U) {
                T(U, P);
              }
          },
          k = async () => {
            t.info("UCP4 IPC connection to primary opened"),
              o.on("pong", d),
              (n = setInterval(() => q(o), V6)),
              await M(),
              (s = [
                Zi("stackable.sendRequestToPrimary", (P, U, j) => p(U, j)),
                Zi("cloud.aptCreds", () => $6()),
              ]),
              xa("controllers.updateAptCreds").catch(() => null);
          },
          I = (P, U) => {
            t.info(
              "UCP4 IPC connection for secondary closed",
              JSON.stringify({ code: P, reason: U })
            ),
              s.forEach((j) => rp(j)),
              (s = []),
              a.removeAllListeners(),
              (a = null),
              o.removeAllListeners(),
              (o = null),
              u(e3),
              c(),
              d();
          },
          _ = async (P) => {
            t.debug(`Received ${P.name} from primary console`, P.body);
          };
        a.once("connectionerror", (P) => T(P, o)),
          a.once("open", () => k(o)),
          a.once("close", I),
          a.on("request", (P) => x6(t, P)),
          a.on("event", (P) => _(P));
      },
      p = async (h, S = {}) => {
        if ((t.info(`Send "${h}" request to primary`), !a))
          throw new Error("No connection from primary console");
        let { header: D, body: A } = await a.request(h, S);
        if (D.errorCode) throw new Error(D.error);
        return t.debug(`Received "${h}" response from primary, body:`, A), A;
      },
      l = async () => {
        await E(), await u();
      },
      f = async () => {
        if (!a || (await op()) !== ap) return;
        let S = "systemInfo";
        try {
          let {
              ip: D,
              mac: A,
              hardware: C,
              uptime: R,
              storage: N,
              ustorage: b,
              cpu: T,
              memory: M,
            } = await G6(),
            q = {
              ip: D,
              mac: A,
              hardware: C,
              uptime: R,
              storage: N,
              ustorage: b,
              cpu: T,
              memory: M,
              deviceState: await H6(),
            };
          await a.sendEvent(S, q);
        } catch (D) {
          t.error(`Failed to send "${S}" event to primary`, D);
        }
      },
      m = async () => {
        await E();
      },
      E = async () => {
        switch ((r.forEach((S) => rp(S)), (r = []), await op())) {
          case void 0:
            (r = [Zi("stackable.adoptAsSecondary", (S, D) => M6(t, D))]),
              await xa("redux.dispatch", SI, !1);
            break;
          case ap:
            (r = [Zi("stackable.updatePrimaryHost", (S, D) => B6(t, D))]),
              await xa("redux.dispatch", SI, !0);
            break;
        }
      },
      y = [
        function* () {
          yield sp([z6], () => l());
        },
        function* () {
          yield sp([J6], () => m());
        },
        function* () {
          yield sp([X6, Q6], () => {
            f();
          });
        },
      ];
    return (
      y.forEach((h) => xa("redux.saga.add", h)),
      E(),
      u(),
      async () => {
        r.forEach((h) => rp(h)),
          y.forEach((h) => xa("redux.saga.remove", h)),
          o && o.close(),
          c(),
          d();
      }
    );
  };
});
var AI = w((YSe, II) => {
  var TI = require("bluebird"),
    t3 = rI(),
    r3 = _I();
  II.exports = async (e, t) => {
    let r = [t3(e, t), r3(e, t)];
    return (
      await TI.all(r),
      async () => {
        await TI.map(r, (s) => s());
      }
    );
  };
});
var CI = w((zSe, vI) => {
  var s3 = require("fs-extra"),
    a3 = require("child_process"),
    o3 = require("util"),
    n3 = o3.promisify(a3.execFile);
  vI.exports = (e, t) => async (r) => {
    if (e) return { size: 8001563222016, used: 17096, avail: 8001563204920 };
    let s = { size: null, used: null, avail: null, mounted: !1 };
    try {
      if (!(await s3.exists(r))) return s;
      let o = (
        await n3("/bin/df", ["-B1", "--output=size,used,avail", r])
      ).stdout
        .split(
          `
`
        )
        .filter((c) => c);
      o.shift();
      let n = {},
        i = ["size", "used", "avail"];
      return (
        o.forEach((c) => {
          c.split(/\s+/).forEach((u, p) => {
            n[i[p]] = parseInt(u, 10);
          });
        }),
        n
      );
    } catch (a) {
      return t.error(a), s;
    }
  };
});
var DI = w((JSe, i3) => {
  i3.exports = `smartctl 6.6 2016-05-31 r4324 [aarch64-linux-4.1.37-ubnt] (local build)
Copyright (C) 2002-16, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF INFORMATION SECTION ===
Device Model:     WDC WD8003FFBX-68B9AN0
Serial Number:    VAHY9J4L
LU WWN Device Id: 5 000cca 099db6a01
Firmware Version: 83.00A83
User Capacity:    8,001,563,222,016 bytes [8.00 TB]
Sector Sizes:     512 bytes logical, 4096 bytes physical
Rotation Rate:    7200 rpm
Form Factor:      3.5 inches
Device is:        Not in smartctl database [for details use: -P showall]
ATA Version is:   ACS-2, ATA8-ACS T13/1699-D revision 4
SATA Version is:  SATA 3.2, 6.0 Gb/s (current: 6.0 Gb/s)
Local Time is:    Fri Feb  7 18:37:20 2020 PST
SMART support is: Available - device has SMART capability.
SMART support is: Enabled

=== START OF READ SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED
`;
});
var np = w((XSe, NI) => {
  var c3 = require("child_process"),
    u3 = require("fs-extra"),
    d3 = require("util"),
    l3 = d3.promisify(c3.execFile);
  NI.exports = (e, t) => async (r) => {
    let s = async (u) => {
        try {
          return (await u3.stat(u)).isBlockDevice();
        } catch (p) {
          if (p.code === "ENOENT") return !1;
          throw p;
        }
      },
      a = async (u) => {
        try {
          return (
            await l3("/usr/bin/sudo", [
              "-n",
              "/usr/sbin/smartctl",
              "-i",
              "-H",
              u,
            ])
          ).stdout;
        } catch (p) {
          if (p.stderr === "") return p.stdout;
          throw p;
        }
      },
      o = {
        mounted: !1,
        model: null,
        serial: null,
        firmware: null,
        size: null,
        rpm: null,
        healthy: !1,
        ataVersion: null,
        sataVersion: null,
      };
    if (!e)
      try {
        if (!(await s(r))) return o;
      } catch (u) {
        return o;
      }
    let n = [];
    try {
      let u;
      e ? (u = DI()) : (u = await a(r)),
        (n = u
          .split(
            `
`
          )
          .filter((p) => p));
    } catch (u) {
      return t.error(u), o;
    }
    let i = {
        "Device Model": "model",
        "Serial Number": "serial",
        "Firmware Version": "firmware",
        "User Capacity": "size",
        "Rotation Rate": "rpm",
        "ATA Version is": "ataVersion",
        "SATA Version is": "sataVersion",
        "SMART overall-health self-assessment test result": "healthy",
      },
      c = {
        size: (u) =>
          parseInt(u.substring(0, u.indexOf("bytes")).replace(/,/g, ""), 10),
        rpm: (u) => parseInt(u.replace("rpm", ""), 10),
        healthy: (u) => u.toLowerCase() === "passed",
      },
      d = 0;
    return (
      n.forEach((u) => {
        if (u === "=== START OF INFORMATION SECTION ===") {
          d = 1;
          return;
        }
        if (u === "=== START OF READ SMART DATA SECTION ===") {
          d = 2;
          return;
        }
        if (d === 1) {
          let [p, l] = u.split(/:(.+)/).map((m) => m.trim()),
            f = i[p];
          f && l && (o[f] = c[f] ? c[f](l) : l);
          return;
        }
        if (d === 2) {
          let [p, l] = u.split(/:([^!]+)/).map((m) => m.trim()),
            f = i[p];
          f && l && (o[f] = c[f] ? c[f](l) : l);
        }
      }),
      o.model && (o.mounted = !0),
      o
    );
  };
});
var RI = w((QSe, p3) => {
  p3.exports = `/dev/md3:
        Version : 1.2
  Creation Time : Fri Feb  7 18:44:50 2020
     Raid Level : raid5
     Array Size : 23416519680 (22331.73 GiB 23978.52 GB)
  Used Dev Size : 7805506560 (7443.91 GiB 7992.84 GB)
   Raid Devices : 4
  Total Devices : 4
    Persistence : Superblock is persistent

  Intent Bitmap : Internal

    Update Time : Fri Feb  7 18:47:06 2020
          State : active
 Active Devices : 4
Working Devices : 4
 Failed Devices : 0
  Spare Devices : 0

         Layout : left-symmetric
     Chunk Size : 512K

           Name : UniFi-NVR:3  (local to host UniFi-NVR)
           UUID : 69236e25:1e110793:0eae2270:f47ff8ef
         Events : 3

    Number   Major   Minor   RaidDevice State
       0       8        5        0      active sync   /dev/sda5
       1       8       21        1      active sync   /dev/sdb5
       2       8       37        2      active sync   /dev/sdc5
       3       8       53        3      active sync   /dev/sdd5
`;
});
var UI = w((ZSe, PI) => {
  var m3 = require("child_process"),
    f3 = require("util"),
    h3 = require("bluebird"),
    y3 = f3.promisify(m3.execFile);
  PI.exports = (e, t) => async (r) => {
    let s = np()(e, t),
      a = [];
    try {
      let p;
      e
        ? (p = RI())
        : (p = (await y3("/usr/bin/sudo", ["-n", "/sbin/mdadm", "--detail", r]))
            .stdout),
        (a = p
          .split(
            `
`
          )
          .filter((l) => l));
    } catch {
      return { mounted: !1 };
    }
    let o = {
        State: "state",
        "Raid Level": "level",
        "Active Devices": "activeDevices",
        "Working Devices": "workingDevices",
        "Failed Devices": "failedDevices",
        "Spare Devices": "spareDevices",
      },
      n = {
        state: (p) => {
          let l = p.toLowerCase();
          return l.includes("degraded")
            ? "degraded"
            : l.includes("failed")
            ? "failed"
            : "healthy";
        },
      },
      i = {},
      c = [],
      d = 0;
    a.forEach((p) => {
      if (p.includes("RaidDevice")) {
        d = 1;
        return;
      }
      if (d === 0) {
        let [l, f] = p.split(/:(.+)/).map((E) => E.trim()),
          m = o[l];
        m && f && (i[m] = n[m] ? n[m](f) : f);
        return;
      }
      if (d === 1) {
        let l = /\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(.+)\s+(\/.*)/,
          f = p.match(l);
        if (f) {
          let [, , , , , , m] = f;
          c.push(m);
        }
      }
    });
    let u = await h3.map(c, (p) => s(p));
    return { raid: i, mounted: !0, devices: u };
  };
});
var qI = w((ebe, OI) => {
  var w3 = require("child_process"),
    g3 = require("util"),
    { subscribe: kI, unsubscribe: E3 } = require("handoff"),
    S3 = require("bluebird"),
    b3 = 60 * 1e3,
    _3 = g3.promisify(w3.execFile);
  OI.exports = async (e, t, r) => {
    let s = !1,
      a = CI()(s, t),
      o = np()(s, t),
      n = UI()(s, t),
      i = [],
      c = async () =>
        S3.map(r, async (f) => {
          let { id: m, type: E, mountPoint: y, path: h, canErase: S } = f,
            D = v(
              { id: m, type: E, mounted: !0, mountPoint: y, canErase: !!S },
              await a(y)
            );
          switch (E) {
            case "hdd": {
              if (!h) return B(v({}, D), { mounted: !1 });
              let A = await o(h);
              return B(v({}, D), { device: A, mounted: A.mounted });
            }
            case "raid":
              return v(v({}, D), await n(h));
            default:
              return D;
          }
        }),
      d = async (f) => {
        try {
          let m = r.find((S) => S.id.toString() === f.toString());
          if (!m) throw new Error("Invalid storage id.");
          let { path: E, canErase: y } = m;
          if (!y) throw new Error("Storage can not be erased.", m);
          t.warn(`erasing... ${E}`);
          let { stdout: h } = await _3("/usr/bin/sudo", [
            "-n",
            "/usr/sbin/ubntstorage",
            "space",
            "nuke",
            "nukeit=true",
          ]);
          return t.info(`successfully erased ${E}`, h), !0;
        } catch (m) {
          throw (t.error(m), m);
        }
      },
      u = async () => {
        i = await c();
      },
      p = [
        kI("system.storage.info", () => i),
        kI("system.storage.erase", (f, m) => d(m)),
      ];
    u();
    let l = setInterval(u, b3).unref();
    return async () => {
      clearInterval(l), p.forEach((f) => E3(f));
    };
  };
});
var LI = w((tbe, FI) => {
  var { removeDeepKeys: T3 } = (Ue(), We),
    I3 = [
      "password",
      "key",
      "token",
      "secret",
      "anonymous_device_id",
      "anonymousDeviceId",
      "nfc_token",
      "system_key",
    ];
  FI.exports = (e) => T3(e, I3);
});
var xI = w((rbe, MI) => {
  var {
      getApps: A3,
      getSettings: v3,
      getFirmware: C3,
      getControllers: D3,
      getSystem: N3,
      getDeviceList: R3,
      getStackableConsole: P3,
      getSecondaryConsoles: U3,
      getStackableConsoleRole: k3,
    } = H(),
    O3 = LI();
  MI.exports = async () => {
    let [e, t, r, s, a, o, n] = await Promise.all([
        A3(),
        v3(),
        C3(),
        D3(),
        N3(),
        R3(),
        k3(),
      ]),
      i = {
        summary: {
          "UniFi OS Version": a.info.hardware.firmwareVersion,
          "UniFi OS Release channel": r.releaseChannel,
          Applications: s.map(
            ({ name: c, version: d, state: u, releaseChannel: p }) => ({
              name: c,
              version: d,
              state: u,
              releaseChannel: p,
            })
          ),
          "Network Devices": o.network || [],
          "Protect Devices": o.protect || [],
          CPU: B(v({}, a.info.cpu), { cpus: void 0 }),
          Memory: a.info.memory,
          Storage: a.info.storage,
        },
        detail: {
          apps: e,
          settings: t,
          firmware: r,
          controllers: s,
          system: a,
          deviceList: o,
        },
      };
    return (
      n &&
        ((i.detail.stackableConsole = await P3()),
        (i.detail.secondaryConsoles = await U3())),
      O3(i)
    );
  };
});
var jI = w((sbe, VI) => {
  var $a = g(require("fs-extra")),
    $I = g(require("path")),
    BI = class {
      constructor(t) {
        (this.filePath = t), (this.fileRefCnt = 0);
      }
      getStream() {
        let t = $a.createReadStream(this.filePath);
        return (
          this.fileRefCnt++,
          t.on("end", async () => {
            this.fileRefCnt--,
              this.fileRefCnt <= 0 &&
                (await $a.remove(this.filePath).catch(() => null));
          }),
          t
        );
      }
      getFileName() {
        return $I.default.basename(this.filePath);
      }
      getPath() {
        return this.filePath;
      }
      async getSize() {
        return (await $a.stat(this.filePath)).size;
      }
    };
  VI.exports = BI;
});
var HI = w((abe, GI) => {
  var os = require("fs-extra"),
    dn = require("path"),
    { publish: ec } = require("handoff"),
    q3 = Ce(),
    { fetch: F3 } = ie(),
    L3 = xI(),
    { traceUCoreEvent: M3 } = (jt(), ur),
    x3 = jI(),
    { getStackableConsoleRole: $3, getSecondaryMac: B3 } = H(),
    { PRIMARY_ROLE: V3, SECONDARY_ROLE: j3 } = cr(),
    { TraceEvent: G3 } = (Zt(), rs),
    { default: H3 } = (qt(), pw),
    W3 = "basicInfo.json";
  GI.exports = (e, t) => {
    let r = null,
      s = async () => {
        let d = dn.resolve(e.supportFilePath),
          { mac: u } = await ec("system.info"),
          p = u.slice(-4),
          l = Date.now(),
          f = `support-${p}-${l}`,
          m = `support-${p}-${l}.tgz`;
        return { baseDir: d, srcDir: dn.join(d, f), dstFile: dn.join(d, m) };
      },
      a = async () => {
        let { baseDir: d } = await s();
        await os.remove(d).catch(() => null);
      },
      o = async (d, u) => {
        try {
          await d.supportDump(u);
        } catch (p) {
          throw (await os.remove(u).catch(() => null), p);
        }
      },
      n = async (d) => {
        let { baseDir: u, srcDir: p, dstFile: l } = await s(),
          f = await $3();
        try {
          if (
            (await a(),
            await os.ensureDir(u),
            f !== j3 && (await ec("apps.generateSupportFiles", p)),
            f === V3)
          )
            try {
              let E = await B3(),
                y = await ec("stackable.generateSupportFileFromSecondary");
              await os.ensureDir(`${p}/stackable`),
                await os.writeFile(`${p}/stackable/${E}.zip`, y);
            } catch (E) {
              t.warn(
                "Failed to generate support file from the secondary console",
                E
              );
            }
          await os.copy(e.logs.dir, `${p}/unifi-core`, {
            filter: (E) => dn.extname(E) !== ".crt",
          });
          try {
            let E = await L3();
            await os.writeFile(
              `${p}/unifi-core/${W3}`,
              JSON.stringify(E, null, 2)
            );
          } catch (E) {
            t.warn("Failed to dump basicInfo", E);
          }
          if ((await ec("system.device")).features.systoolSupportDump)
            try {
              await o(d, `${p}/system`);
            } catch (E) {
              t.warn("Failed to dump system info", E);
            }
          return await q3(`tar -czf ${l} -C ${u} ${dn.basename(p)}`), new x3(l);
        } catch (m) {
          throw (await os.remove(l).catch(() => null), m);
        } finally {
          await os.remove(p).catch(() => null);
        }
      },
      i = async (d) => {
        if (r)
          return (
            t.info("Support file generation already in progress, reusing."), r
          );
        r = n(d);
        let u = new Date(),
          p = !1,
          l = null;
        try {
          let f = await r;
          return (p = !0), f;
        } catch (f) {
          throw ((l = f), f);
        } finally {
          (r = null),
            M3({
              eventName: G3.SUPPORT_FILE_GENERATE,
              success: p,
              triggeredBy: "user",
              errorMessage: l ? H3(l) : void 0,
              params: { completion_time: p ? new Date() - u : void 0 },
            }).catch((f) =>
              t.error('Failed to send "support_file_generate" trace event:', f)
            );
        }
      };
    return {
      cleanupSupportFiles: a,
      generateSupportFile: i,
      uploadSupportFile: async (d, u) => {
        try {
          let p = await i(d);
          t.debug("Uploading support file");
          let l = await F3(u, {
            method: "PUT",
            body: p.getStream(),
            headers: { "Content-Length": await p.getSize() },
          });
          l.ok
            ? t.info("Successfully uploaded support file")
            : t.error(
                `Failed to upload support file, http response ${l.status}`,
                await l.text()
              );
        } catch (p) {
          t.error("Failed to upload support file - ", p.message);
        }
      },
    };
  };
});
var KI = w((obe, WI) => {
  var { fetch: Pr } = ie();
  WI.exports = (e, t) => {
    let r = `http://127.0.0.1:${e.controllers.network.port}`,
      s = {
        status: "/api/status",
        siteMgr: "/api/cmd/sitemgr",
        apGroup: "/v2/api/site/default/apgroups",
        wlanConf: "/api/rest/wlanconf",
        sites: "/api/self/sites",
        optimizeWifi: "/api/set/setting/network_optimization",
        superSdn: "/api/set/setting/super_sdn",
        country: "/api/set/setting/country",
        timezone: "/api/set/setting/timezone",
        deviceAdopt: "/api/cmd/devmgr",
        superUser: "/api/set/settings/super_identity",
        setComplete: "/api/cmd/system",
        setWan: "/api/cmd/devmgr/setup-wan",
        setFirewall: "/api/cmd/devmgr/setup-firewall",
        setProviderCapabilities: "/api/set/setting/provider_capabilities",
        smartSubnet: "/v2/api/site/default/smart-subnet",
      },
      a = new Proxy(s, {
        get(R, N, b) {
          let T = Reflect.get(R, N, b);
          return `${r}${T}`;
        },
      }),
      o = (R) =>
        Pr(a.optimizeWifi, {
          method: "POST",
          body: JSON.stringify({ enabled: R }),
        }),
      n = () => Pr(a.apGroup).then((R) => R.json()),
      i = async () =>
        (await n()).find((N) => N.attr_hidden_id === "default")._id,
      c = async ({ ssid: R, password: N, splitNetworks: b }) => {
        let T = await i();
        return Pr(a.wlanConf, {
          method: "POST",
          body: JSON.stringify({
            ap_group_ids: [T],
            enabled: !0,
            name: R,
            security: "wpapsk",
            wpa_enc: "ccmp",
            wpa_mode: "wpa2",
            x_passphrase: N,
            wlan_band: "both",
            name_combine_enabled: !b,
            name_combine_suffix: "_2G",
          }),
        });
      },
      d = async ({ ssid: R, password: N, optimize: b, splitNetworks: T }) => {
        await c({ ssid: R, password: N, splitNetworks: T });
      },
      u = async ({ country: R }) => {
        if (R)
          return Pr(a.country, {
            method: "POST",
            body: JSON.stringify({ code: R.toString() }),
          });
      },
      p = async ({ upload: R, download: N }) =>
        Pr(a.setProviderCapabilities, {
          method: "POST",
          body: JSON.stringify({ upload: R * 1e3, download: N * 1e3 }),
        }),
      l = () =>
        Pr(a.setComplete, {
          method: "POST",
          body: JSON.stringify({ cmd: "set-installed" }),
        }),
      f = async (R) => {
        let { wifi: N, country: b, isp: T, optimizeNetwork: M } = R;
        N && (await d(N)),
          M !== void 0 && (await o(M)),
          await u({ country: b }),
          T && (await p(T)),
          await l();
      },
      m = (R) => Pr(a.setWan, { method: "POST", body: JSON.stringify(R) }),
      E = (R) => {
        let N = R ? "enable" : "disable";
        return Pr(a.setFirewall, {
          method: "POST",
          body: JSON.stringify({ action: N }),
        });
      },
      y,
      h = 1e4,
      S = () => {
        y && clearTimeout(y),
          (y = setTimeout(() => {
            E(!0)
              .then(() => t.debug("firewall reset succeeded"))
              .catch((R) => t.debug("firewall reset failed", R)),
              (y = void 0);
          }, h));
      };
    return {
      setup: f,
      configWan: m,
      tempDisableFirewall: async () => {
        y || (t.debug("firewall disable"), await E(!1)), S();
      },
      getPreviousSubnet: async () => {
        let N = await (await Pr(a.smartSubnet)).json();
        if (N.code === "api.err.PreviousSubnetWasNotDetected") return null;
        if (!N.cidr)
          throw new Error(
            "Unexpected response in attempt to get previous subnet: " +
              JSON.stringify(N)
          );
        return N.cidr;
      },
      setCidr: async (R) => {
        t.info(`Updating subnet ${R}`),
          await Pr(a.smartSubnet, {
            method: "POST",
            body: JSON.stringify({ cidr: R }),
          });
      },
    };
  };
});
var pr,
  Ur,
  YI,
  zI,
  K3,
  JI,
  XI,
  QI,
  ZI = x(() => {
    (pr = g(require("handoff"))), (Ur = g(Ce()));
    qt();
    YI = g(Z());
    vi();
    (zI = 60 * 1e3),
      (K3 = 30 * 1e3),
      (JI = 3 * 1e3),
      (XI = [
        Da.REPAIRING,
        Da.INITIALIZING,
        Da.EXPANDING,
        Cs.SYNCING,
        Cs.REPAIRING,
        Cs.EXPANDING,
        Cs.FORMATTING,
        Cs.ERASING,
      ]),
      (QI = async (e, t, r) => {
        let s = { disks: [], space: [], sdcards: [] },
          a = async () => {
            let m = [],
              E = [],
              y = [];
            try {
              (m = JSON.parse(
                (await (0, Ur.default)("ustorage disk inspect")).stdout
              )),
                (E = JSON.parse(
                  (await (0, Ur.default)("ustorage space inspect")).stdout
                )),
                r.hasSDCard &&
                  (y = JSON.parse(
                    (await (0, Ur.default)("ustorage sdcard inspect")).stdout
                  ));
            } catch (h) {
              t.error("Failed to retrieve storage info via ustorage:", h);
            }
            return { disks: m, space: E, sdcards: y };
          },
          o = async () => {
            try {
              let m = JSON.parse(
                (await (0, Ur.default)("ustorage config show")).stdout
                  .toString()
                  .trim()
              );
              return (
                await (0, pr.publish)(
                  "redux.dispatch",
                  YI.UPDATE_DEVICE_SETTINGS,
                  { ustorage: m }
                ),
                t.info("ustorage config", m),
                m
              );
            } catch (m) {
              return t.error("Failed to retrieve ustorage config:", m), {};
            }
          },
          n = async (m = !1) => {
            if (!r.canSetHotspare)
              throw new Error(
                "Console doesn't support storage hotspare feature."
              );
            try {
              t.info(`${m ? "enabling" : "disabling"} hot spare`),
                await (0, Ur.default)(`ustorage config hotspare ${m}`),
                await o();
            } catch (E) {
              t.error("Failed to set hotspare config:", E);
            }
          },
          i = async (m = "raid5") => {
            if (!r.canConfigureRaid)
              throw new Error(`Console doesn't support storage ${m} feature.`);
            try {
              t.info(`setting raid level: ${m}`),
                await (0, Ur.default)(`ustorage config prefer ${m}`),
                await o();
            } catch (E) {
              t.error("Failed to set raid config:", E);
            }
          },
          c = async () => {
            if ((t.warn("erasing all storage...."), !r.canFormat))
              throw new Error("Console doesn't support storage nuke feature.");
            try {
              await (0, Ur.default)("ustorage space nuke"),
                t.info("Successfully erased all disks");
            } catch (m) {
              t.error("Failed to nuke storage:", m);
            }
          },
          d = async (m) => {
            t.warn(`erasing disk in slot ${m}: `);
            let E = (await (0, Ur.default)(`ustorage disk inspect ${m}`))
              .stdout;
            if ((t.warn(E), !r.canFormat))
              throw new Error("Console doesn't support storage erase feature.");
            try {
              await (0, Ur.default)(`ustorage disk clean ${m}`),
                t.info(`Successfully erased slot: ${m}`);
            } catch (y) {
              t.error(`Failed trying to erase disk in slot ${m}`, E, y);
            }
          },
          u = ({ disks: m, space: E }) => {
            let y = zI;
            for (let h of E) if (XI.includes(h.action)) return JI;
            for (let h of m) {
              if (XI.includes(h.action)) return JI;
              h.state === ze.NO_DISK && (y = K3);
            }
            return y;
          },
          p,
          l = async () => {
            let m = zI;
            try {
              (s = await a()), (m = u(s));
            } catch (E) {
              t.error("Failed to update ustorage data:", Te(E));
            }
            p = setTimeout(l, m);
          };
        o(), l();
        let f = [
          (0, pr.subscribe)("system.ustorage.inspect", () => s),
          (0, pr.subscribe)("system.ustorage.setHotspare", (m, E) => n(E)),
          (0, pr.subscribe)("system.ustorage.setRaidLevel", (m, E) => i(E)),
          (0, pr.subscribe)("system.ustorage.getConfig", o),
          (0, pr.subscribe)("system.ustorage.nuke", c),
          (0, pr.subscribe)("system.ustorage.erase", (m, E) => d(E)),
        ];
        return async () => {
          clearTimeout(p), f.forEach((m) => (0, pr.unsubscribe)(m));
        };
      });
  });
var sr,
  Us,
  Y,
  eA,
  kr,
  ip,
  ns,
  cp,
  tc,
  rc,
  sc,
  up,
  tA,
  rA,
  sA,
  dp,
  ln,
  ce,
  oe,
  aA,
  Ee,
  oA,
  nA,
  iA,
  cA,
  uA,
  Y3,
  z3,
  J3,
  X3,
  Q3,
  lp,
  dA,
  Z3,
  lA,
  pA = x(() => {
    (sr = g(require("bluebird"))),
      (Us = g(require("fs-extra"))),
      (Y = g(require("handoff"))),
      (eA = g(require("latinize"))),
      (kr = g(require("lodash"))),
      (ip = g(require("os"))),
      (ns = g(require("redux-saga/effects"))),
      (cp = g(require("uuid"))),
      (tc = g(Ko()));
    se();
    (rc = g(Ce())), (sc = g(kS()));
    Qr();
    Bd();
    qt();
    up = g(Yo());
    Ei();
    (tA = g(ki())), (rA = g(ie()));
    Ns();
    VS();
    (sA = g(C_())), (dp = g(ct())), (ln = g(as()));
    k_();
    (ce = g(Z())), (oe = g(H()));
    Re();
    Zt();
    aA = g(q_());
    ga();
    Ee = g(Ot());
    Kd();
    H_();
    (oA = g(AI())), (nA = g(qI())), (iA = g(HI()));
    Zo();
    zo();
    (cA = g(Bl())), (uA = g(KI()));
    ZI();
    (Y3 = 2e3),
      (z3 = 3e3),
      (J3 = 3e3),
      (X3 = 3e4),
      (Q3 = 7 * 60 * 1e3),
      (lp = "Etc/UTC"),
      (dA = (e) => {
        if (!e) throw new Error("hardware info is null");
        let t = e.shortname.toLowerCase(),
          r = Xt[t];
        if (e.isUbios) {
          if (t !== Be.UDM && t !== Be.UDMPRO)
            throw new Error(`Unexpected shortname=${t} has isUbios flag`);
          let s = Xt[`${t}-ubios`];
          if (!r && !s)
            throw new Error(`No device config found for ${t} shortname`);
          return v(v({}, r), s);
        }
        if (!r) throw new Error(`No device config found for ${t} shortname`);
        return r;
      }),
      (Z3 = async (e, t) => {
        let r = e.cloudEnv,
          s = Rs(e, t),
          a = (0, uA.default)(e, t),
          o = (0, cA.default)(e, t),
          n = (0, iA.default)(e, t),
          i = (0, aA.default)(e, t),
          c = new Gl(e, t),
          d = await s
            .getHardware()
            .then(
              (L) => (
                L.shortname.toUpperCase() === "UNVR4" &&
                  (L.shortname = Be.UNVR),
                L
              )
            )
            .catch((L) => {
              throw (t.error("Failed to get hardware info by systool", L), L);
            });
        (0, rA.extendFetchDefaultOptions)({ hardware: d });
        let u = dA(d),
          p = async () =>
            u.features?.clientNetworkConfig
              ? s.getClientNetwork(u.primaryInterfaces)
              : void 0,
          l = async () => {
            if (!(await s.getSshEnabled())) return;
            (await (0, oe.getDisableSshOnStart)()) &&
              (await (0, Y.publish)("system.setSshEnabled", !1));
          },
          f = (0, kr.once)(async () => {
            if (!u.features?.waitForUFN || (await (0, oe.getIsSetup)()))
              return !0;
            t.info("waiting for network controller to be ready for setup...");
            let L;
            return new sr.default((G, X) => {
              L = setInterval(async () => {
                try {
                  let re = await (0, oe.getApp)("network");
                  if (!re.info || (!re.info.isReadyForSetup && !process.env.CI))
                    return;
                  t.info("network controller is now ready for setup"),
                    clearInterval(L),
                    G(sr.default.delay(2e3).then(() => !0));
                } catch (re) {
                  t.error(re), X(re);
                }
              }, 1e3);
            })
              .timeout(Q3)
              .catch(sr.default.TimeoutError, (G) => {
                throw (
                  (t.error(
                    "network controller is not ready for setup, timed out...",
                    G
                  ),
                  A({
                    errorType: "TimeoutError",
                    errorLog: "Timed out waiting for Unifi Network to be ready",
                  }),
                  G)
                );
              })
              .finally(() => {
                clearInterval(L);
              });
          }),
          m = async (L) => {
            let { setupId: G } = await (0, oe.getSettings)();
            G === L &&
              (await (0, Y.publish)("redux.dispatch", ce.SETUP_CANCELED));
          },
          E = async ({
            setupId: L,
            setupDeviceId: G,
            type: X,
            userAgent: re,
            sendTrace: ne,
            internetRequired: be,
          }) => {
            let ke = Date.now();
            await (0, Y.publish)("redux.dispatch", ce.SETUP_STARTED, {
              startTime: ke,
              type: X,
              setupId: L,
              internetRequired: be,
            }),
              G && (t.info("writing setupDeviceId from client", G), await S(G)),
              ne &&
                (await (0, Y.publish)("trace.networkSetup", {
                  type: vr.SETUP_STEP,
                  payload: {
                    setup_step: "setup_start",
                    setup_id: L,
                    setup_device_id: await h(),
                    start_time: ke,
                    duration: 0,
                    step_duration: 0,
                  },
                  userAgent: re,
                }));
          },
          y = async () =>
            u
              ? u.features?.systoolAnonId
                ? s.getAnonymousDeviceId()
                : (0, cp.v4)()
              : null,
          h = async () => {
            if (!u) return null;
            let { persistentStorage: L } = u,
              G = `${L}setup.id`;
            try {
              if ((await Us.default.ensureDir(L), await Us.default.pathExists(G)))
                return Us.default.readFile(G, "utf-8");
              let re = (0, cp.v4)();
              return await Us.default.writeFile(G, re), re;
            } catch (X) {
              // t.error("Failed to retrieve setupDeviceId", X);
            }
            return null;
          },
          S = async (L) => {
            if (!u) return null;
            let { persistentStorage: G } = u,
              X = `${G}setup.id`;
            try {
              return (
                await Us.default.ensureDir(G), await Us.default.writeFile(X, L)
              );
            } catch (re) {
              t.error("error writing setup device id", re);
            }
            return null;
          },
          D = async () => {
            let {
              setupId: L,
              setupStartTime: G,
              setupData: X,
            } = await (0, oe.getSettings)();
            if (!L || X?.onCompleteTraceSent) return;
            let re = Date.now(),
              ne = G ? (re - G) / 1e3 : void 0,
              be = await h(),
              ke = await (0, Y.publish)("trace.networkSetup", {
                type: vr.SETUP_STEP,
                payload: {
                  setup_step: "setup_complete",
                  setup_id: L,
                  setup_device_id: be,
                  duration: ne,
                  step_duration: 0,
                  end_time: re,
                  setup_data: i.buildSetupData(X),
                },
                userAgent: (X || {}).userAgent,
              });
            ke &&
              (await (0, Y.publish)(
                "redux.dispatch",
                ce.UPDATE_DEVICE_SETTINGS,
                { setupData: B(v({}, X), { onCompleteTraceSent: ke }) }
              )),
              await (0, Y.publish)(
                "redux.dispatch",
                ce.UPDATE_DEVICE_SETTINGS,
                { setupDuration: ne }
              );
          },
          A = async ({
            errorType: L,
            errorLog: G,
            data: { userAgent: X, step: re } = {},
          }) => {
            let { setupData: ne } = await (0, oe.getSettings)(),
              be = await h(),
              { setupId: ke, setupStartTime: Oe } = await (0, oe.getSettings)();
            if (ke) {
              let ve = Date.now(),
                Qe = Oe ? (ve - Oe) / 1e3 : void 0;
              await (0, Y.publish)("trace.networkSetup", {
                type: vr.SETUP_ERROR,
                payload: {
                  setup_id: ke,
                  setup_device_id: be,
                  setup_data: i.buildSetupData(ne),
                  setup_step: re,
                  duration: Qe,
                  error_time: ve,
                  error_type: L,
                  error_log: G,
                },
                userAgent: X,
                timestamp: ve,
              });
            }
          },
          C = async (L, G, X, { userAgent: re, timestamp: ne } = {}) => {
            let be = Date.now(),
              [{ setupId: ke, setupStartTime: Oe, setupDuration: ve }, Qe] =
                await Promise.all([(0, oe.getSettings)(), h()]),
              _t = ve || (Oe ? (be - Oe) / 1e3 : void 0);
            await (0, Y.publish)("trace.networkSetup", {
              type: vr.SETUP_STEP,
              payload: {
                setup_step: L,
                step_duration: G,
                setup_device_id: Qe,
                setup_id: ke,
                setup_data: i.buildSetupData(X),
                duration: _t,
              },
              userAgent: re,
              timestamp: ne,
            });
          },
          R = async (L, G) => {
            try {
              await sr.default.delay(3e3);
              let {
                name: X,
                timezone: re,
                location: ne,
                sendDiagnostics: be,
              } = await (0, oe.getSettings)();
              await (0, Y.publish)("messageBox.pub", {
                type: "event",
                namespace: "common:controller",
                name: "config_created",
                payload: {
                  data: {
                    controller: "ucore",
                    ssoLoginEnabled: !0,
                    cloudAccessEnabled: !0,
                    ubicAuth: G,
                    hostname: L,
                    name: X,
                    timezone: re,
                    location: ne,
                    sendDiagnostics: be,
                  },
                },
              });
            } catch (X) {
              t.warn("Failed to disable console BLE:", X);
            }
          },
          N = await s.getEeprom().catch((L) => (t.error(L), null)),
          b = async () => {
            try {
              (await Us.default.pathExists(dp.UBIOS_MIGRATION_DATA_FILE_PATH))
                ? (t.info(
                    "Needs UbiOS Migration, console will be in FW upgrading state until UbiOS migration is completed"
                  ),
                  (0, Ee.setDeviceState)(Ee.deviceStates.UPGRADING),
                  await (0, Y.publish)("backup.import.ubiosMigrationData"))
                : t.warn(
                    `Skip UbiOS migration due to migration data does not exist at "${dp.UBIOS_MIGRATION_DATA_FILE_PATH}"`
                  ),
                await (0, Y.publish)(
                  "redux.dispatch",
                  ce.UPDATE_DEVICE_SETTINGS,
                  { needsUbiosMigration: void 0 }
                ),
                await (0, Ee.setDeviceState)(Ee.deviceStates.SETUP),
                (0, Y.publish)("firmware.checkIfAutoUpdatePromptNeeded");
            } catch (L) {
              t.error(
                "Failed to do UbiOS migration, set console to error state",
                L
              ),
                (0, Ee.setDeviceState)(Ee.deviceStates.ERROR);
            }
          };
        (0, Ee.setDeviceState)(Ee.deviceStates.NOT_READY)
          .then(() => (0, oe.getSettings)())
          .then(
            async ({
              timezone: L,
              location: G,
              needsMigration: X,
              needsUbiosMigration: re,
            }) => {
              if (
                !G ||
                !G.text ||
                typeof G.lat != "number" ||
                typeof G.long != "number"
              ) {
                let ne = await (0, sc.default)(G);
                await (0, Y.publish)(
                  "redux.dispatch",
                  ce.CONSOLE_LOCATION_CHANGED,
                  ne
                );
              }
              if (!L)
                try {
                  let { timezone: ne } = await (0, up.default)();
                  await te(ne);
                } catch (ne) {
                  t.error(
                    `Failed to get timezone by GeoIP, fallback to "${lp}":`,
                    Te(ne)
                  ),
                    await te(lp);
                }
              if (re) {
                b();
                return;
              }
              X ||
                f()
                  .then(() => (0, oe.getSettings)())
                  .then(async ({ isSetup: ne }) => {
                    if (ne) {
                      await (0, Ee.setDeviceState)(Ee.deviceStates.SETUP);
                      try {
                        await D(), await l();
                      } catch (be) {
                        t.error("Failed to disable ssh", be);
                      }
                    } else
                      await (0, Ee.setDeviceState)(Ee.deviceStates.NOT_SETUP);
                  })
                  .catch((ne) => {
                    t.error("Failed to setup, set device state to error", ne),
                      (0, Ee.setDeviceState)(Ee.deviceStates.ERROR);
                  });
            }
          );
        let T = async () => (u.features?.hasUdapi ? o.getPortStatus() : void 0),
          M = async () =>
            u.features?.hasLedStatus ? s.getLedStatus() : void 0,
          q = u ? u.features : null,
          k = async () => {
            let L = ip.default.networkInterfaces(),
              G = {};
            for (let re in L) {
              let ne = L[re]?.filter((be) => !be.internal);
              ne?.length && (G[re] = ne);
            }
            let X = {};
            if (u.primaryInterfacesAreDynamic)
              try {
                (await o.getInterfaces()).forEach((ne) => {
                  let be = ["vlan", "pppoe"].find((ve) => ne[ve]);
                  if (!be) return;
                  let ke = (0, kr.get)(ne, "identification.id", null),
                    Oe = (0, kr.get)(ne, `${be}.interface.id`, null);
                  Oe && ke && (X[Oe] = ke);
                });
              } catch (re) {
                t.error("UDAPI Client error:", re);
              }
            return { interfaces: G, associatedInterfaces: X };
          },
          I = async () => {
            try {
              let L = await T();
              if (
                L !== void 0 &&
                !L.some((X) => X.plugged && X.type && X.type.includes("WAN"))
              )
                return !1;
              try {
                await (0, rc.default)("ping -s 0 -c 5 -W 1 1.1.1.1");
              } catch {
                await (0, rc.default)("ping -s 0 -c 5 -W 1 8.8.8.8");
              }
              return !0;
            } catch (L) {
              return t.warn("Failed to get internet status:", L), !1;
            }
          },
          _ = async () => {
            let L = await I();
            (await (0, oe.getHasInternet)()) !== L &&
              (await (0, Y.publish)(
                "redux.dispatch",
                ce.UPDATE_HAS_INTERNET,
                L
              ));
          },
          P = async () => {
            if (u.primaryInterfacesAreDynamic)
              try {
                return await $();
              } catch (re) {
                t.warn("getConnectedWanIpFromUdapi throws error:", Te(re));
              }
            let { interfaces: L } = await k();
            if (Object.keys(L).length === 0 && !u.wanPorts) return "";
            let G = u.wanPorts?.find((re) => L[re]) || Object.keys(L)[0];
            if (!G) return "";
            let X = (L[G]?.find((re) => re.family === "IPv4") || L[G]?.[0])
              ?.address;
            return X || "";
          },
          U = async ({
            name: L,
            cloudEnv: G,
            hostname: X,
            timezone: re,
            username: ne,
            password: be,
            passwordHash: ke,
            hashType: Oe,
            ssoUser: ve,
          }) => {
            let Qe = { name: L, sso_env: G, host_name: X, time_zone: re };
            return (
              ne &&
                ((Qe.username = ne),
                be ? (Qe.password = be) : ke && (Qe.password_hash = ke),
                Oe && (Qe.hash_type = Oe)),
              ve &&
                ve.uuid &&
                ((Qe = B(v({}, Qe), {
                  sso_uuid: ve.uuid,
                  first_name: ve.first_name || "UniFi",
                  last_name: ve.last_name || "User",
                  email: ve.email,
                  sso_account: ve.email,
                  sso_username: ve.username,
                  sso_picture: ve.picture,
                })),
                be && (Qe.sso_password = be),
                ve.ssoAuth &&
                  ve.ssoAuth.value &&
                  (Qe.sso_cookie = B(v({}, ve.ssoAuth), {
                    name: e.cloud[G].ssoCookieName,
                    value: ve.ssoAuth.value,
                  }))),
              await (0, Y.publish)("uum.setup", Qe)
            );
          },
          j = async (L) => {
            let {
              password: G,
              password_hash: X,
              hash_type: re,
              name: ne,
              username: be,
              country: ke,
              ssoUser: Oe,
              schedule: ve,
              isMigration: Qe,
              updateFirmware: _t,
              sendDiagnostics: ir,
              setupId: Sr,
              isPrimary: zt = !0,
              sshEnabled: Br,
              sshHashedPassword: Vr,
              subnetCidr: bs,
            } = L;
            Qe || (await (0, Ee.setDeviceState)(Ee.deviceStates.SETTING_UP)),
              delete L.password,
              delete L.ssoUser,
              await (0, Y.publish)(
                "redux.dispatch",
                ce.CONSOLE_NAME_CHANGED,
                ne
              );
            let jr = await (0, sc.default)(L.location);
            await (0, Y.publish)(
              "redux.dispatch",
              ce.CONSOLE_LOCATION_CHANGED,
              jr
            ),
              await te(L.timezone || lp),
              await (0, Y.publish)(
                "redux.dispatch",
                ce.UPDATE_DEVICE_SETTINGS,
                {
                  country: ke,
                  needsMigration: void 0,
                  needsUbiosMigration: void 0,
                  sendDiagnostics: ir,
                  setupId: Sr,
                  setupData: Sr ? L : void 0,
                }
              );
            let Gr = await s.getHostname(),
              go = await (0, oe.getTimezone)(),
              Eo = zt
                ? await U({
                    name: ne,
                    cloudEnv: r,
                    hostname: Gr,
                    timezone: go,
                    username: be,
                    password: G,
                    passwordHash: X,
                    hashType: re,
                    ssoUser: Oe,
                  })
                : null;
            if (
              Oe &&
              Oe.ssoAuth &&
              Oe.ssoAuth.value &&
              (await (0, Y.publish)("cloud.register", { ssoUser: Oe }),
              u.features?.cloudBackup)
            ) {
              let Ct = () => (0, Y.publish)("cloud.createEncryptionKey", G);
              try {
                await Mt(Ct, tA.default, {
                  maxAttempts: 8,
                  interval: 500,
                  backoff: 2,
                  logger: t,
                }),
                  await (0, Y.publish)(
                    "backup.schedule.setAutoBackupEnabled",
                    !0
                  );
              } catch (ya) {
                t.error("failed to create encryption key", ya),
                  await (0, Y.publish)(
                    "backup.schedule.setAutoBackupEnabled",
                    !1
                  );
              }
            }
            if (
              (ve && (await (0, Y.publish)("firmware.setSchedule", ve)),
              u.features?.setupConfigUFN &&
                !Qe &&
                (await f(), await a.setup(L), await sr.default.delay(5e3)),
              u.features?.storage)
            ) {
              let { hotspare: Ct, raid: ya } = L,
                { canSetHotspare: Jn, canConfigureRaid: So } =
                  u.features.storage;
              Jn && (await (0, Y.publish)("system.ustorage.setHotspare", Ct)),
                So &&
                  (await (0, Y.publish)("system.ustorage.setRaidLevel", ya));
            }
            let Yn = await (0, oe.getSettings)(),
              zn = async () => {
                await (0, Ee.setDeviceState)(Ee.deviceStates.SETUP),
                  zt
                    ? (await (0, Y.publish)("system.device")).features?.ssh &&
                      (await (0, Y.publish)("system.setSshEnabled", !1))
                    : (await (0, Y.publish)("system.setSshEnabled", Br),
                      await (0, Y.publish)("system.setSshHashedPassword", Vr));
              };
            if (
              (!Qe &&
              (await (0, Y.publish)("firmware.getLatestUpdateInfo").catch(
                (Ct) => (t.error(Ct), null)
              )) &&
              _t
                ? (await (0, Y.publish)(
                    "redux.dispatch",
                    ce.UPDATE_DEVICE_SETTINGS,
                    { disableSshOnStart: !0 }
                  ),
                  await (0, Ee.setDeviceState)(Ee.deviceStates.WILL_UPGRADE),
                  sr.default.delay(3e4).then(() => {
                    (0, Y.publish)("firmware.update")
                      .catch((Ct) => {
                        t.error("Failed to update firmware during setup", Ct);
                      })
                      .then(zn);
                  }))
                : (await zn(), await D()),
              await (0, Y.publish)("redux.dispatch", ce.SETUP_COMPLETED, {
                hostname: Gr,
                owner: Eo,
                cloudEnv: r,
                ssoUser: Oe,
                ubicAuth: ((Oe && Oe.ssoAuth) || {}).value,
                ssoLoginEnabled: !0,
                cloudAccessEnabled: !0,
                mac: d.mac,
                setup_device_id: Yn.setup_device_id,
                anonymous_device_id: Yn.anonymous_device_id,
              }),
              R(Gr, Oe?.ssoAuth),
              (0, Y.publish)("firmware.setAutoUpdateAcknowledged").catch((Ct) =>
                t.error(
                  "Failed to set auto-update preferences as acknowledged:",
                  Ct
                )
              ),
              bs)
            )
              try {
                await a.setCidr(bs);
              } catch (Ct) {
                t.error("Failed to set subnet cidr", Ct);
              }
            return Eo;
          },
          K = async () => {
            let L = await h(),
              { setupStartTime: G, setupId: X } = await (0, oe.getSettings)(),
              re = Date.now(),
              ne = G ? (re - G) / 1e3 : void 0;
            await (0, Y.publish)("trace.networkSetup", {
              type: vr.SETUP_STEP,
              payload: {
                setup_step: "wait_firmware_download",
                setup_id: X,
                setup_device_id: L,
                duration: ne,
              },
            });
          },
          J = async () => {
            let L = await h(),
              { setupStartTime: G, setupId: X } = await (0, oe.getSettings)(),
              re = Date.now(),
              ne = G ? (re - G) / 1e3 : void 0;
            await (0, Y.publish)("trace.networkSetup", {
              type: vr.SETUP_STEP,
              payload: {
                setup_step: "wait_firmware_update",
                setup_id: X,
                setup_device_id: L,
                duration: ne,
              },
            });
          },
          F = async (L) => {
            if (
              L.hostname ||
              L.timezone ||
              L.sendDiagnostics ||
              L.name ||
              L.cloudAccessEnabled !== void 0 ||
              L.directConnectDomain ||
              L.releaseChannel
            )
              return (0, Y.publish)("messageBox.pub", {
                type: "event",
                namespace: "common:controller",
                name: "config_updated",
                payload: {
                  data: {
                    controller: "ucore",
                    name: L.name,
                    hostname: L.hostname,
                    timezone: L.timezone,
                    sendDiagnostics: L.sendDiagnostics,
                    cloudAccessEnabled: L.cloudAccessEnabled,
                    deviceDomain: L.directConnectDomain,
                    releaseChannel: L.releaseChannel,
                  },
                },
              });
          },
          $ = async () => {
            let L = (_t, ir, Sr) => {
              let zt = ir.find(
                (Br) => ((Br[Sr] || {}).interface || {}).id === _t
              );
              return zt && zt.identification && zt.identification.id;
            };
            if (!u.wanPorts || !u.wanPorts.length)
              throw new Error("No WAN interfaces available");
            let G = await o.getInterfaces(),
              X = u.wanPorts.find((_t) =>
                G.find(
                  ({ identification: Sr, status: zt }) =>
                    Sr.id === _t && zt.plugged
                )
              );
            if (!X) throw new Error("no WAN connected");
            let re = L(X, G, "vlan"),
              ne,
              be;
            re
              ? ((be = L(re, G, "pppoe")), (ne = be || re))
              : ((be = L(X, G, "pppoe")), (ne = be || X));
            let ke = G.find(({ identification: _t }) => _t.id === ne),
              Oe = G.find(({ identification: _t }) => _t.id === X),
              { cidr: ve } = (ke.addresses.length ? ke : Oe).addresses[0];
            return ve && ve.split("/")[0];
          },
          O = async () => {
            u = dA(d);
            let [
              L,
              G,
              X,
              re,
              ne,
              be,
              ke,
              Oe,
              ve,
              Qe,
              _t,
              ir,
              Sr,
              { progress: zt, state: Br },
              Vr,
              bs,
              { unifiCareDevices: jr },
              Gr,
              go,
              Eo,
              Yn,
              zn,
            ] = await Promise.all([
              (0, Y.publish)("system.storage.info"),
              u.features?.storage
                ? (0, Y.publish)("system.ustorage.inspect")
                : void 0,
              u.features?.cpuInfo ? xo() : null,
              Ys(),
              k(),
              s.getSshEnabled(),
              M(),
              p(),
              (0, Y.publish)("uum.getOwner"),
              T(),
              P(),
              (0, Y.publish)("firmware.getLatestUpdateInfo"),
              (0, oe.getFWLatestUpdateCheck)(),
              (0, oe.getFWDownloadProgress)(),
              (0, Y.publish)("firmware.getSchedule"),
              (0, oe.getCloudSettings)(),
              (0, oe.getApp)("network"),
              (0, oe.getDeviceState)(),
              s.getHostname(),
              u.sfpWanPort
                ? BS(u.sfpWanPort).catch(
                    (So) => (t.error("Failed to get WAN SFP info", So), null)
                  )
                : null,
              zs(),
              (0, oe.getIspInfo)(),
            ]);
            Gr === Ee.deviceStates.SETUP && ir
              ? await (0, Ee.setDeviceState)(Ee.deviceStates.UPDATE_AVAILABLE)
              : Gr === Ee.deviceStates.UPDATE_AVAILABLE &&
                !ir &&
                (await (0, Ee.setDeviceState)(Ee.deviceStates.SETUP));
            let Lu = null;
            jr &&
              Array.isArray(jr) &&
              ({ state: Lu } = jr.find((So) => gt(So.mac, "") === d.mac) || {
                state: null,
              });
            let Ct = null;
            X &&
              (Ct = {
                model: "unknown",
                currentload: X.load / 100,
                temperature: X.temperature,
              });
            let ya = e.deviceLimit,
              Jn = v(
                v(
                  v(
                    v(
                      {
                        clientNetwork: Oe,
                        deviceId: bs ? bs.deviceId : null,
                        features: q,
                        firmwareDownload: { progress: zt, state: Br },
                        hardware: d,
                        hostname: go,
                        ip: _t,
                        latestUpdate: ir,
                        latestUpdateCheck: Sr,
                        ledStatus: ke,
                        mac: d.mac,
                        maxRunningApplications: u.maxRunningApplications,
                        memory: re,
                        network: ne,
                        now: Date.now(),
                        owner: ve,
                        portStatus: Qe,
                        ports: e.ports,
                        ssh: be,
                        storage: L,
                        ucareState: Lu,
                        ucore_version: e.version,
                        updateSchedule: Vr,
                        uptime: ip.default.uptime(),
                        ustorage: G,
                        wans: Yn,
                        ispInfo: zn,
                        cpu: Ct,
                      },
                      Eo ? { sfpWanPort: Eo } : {}
                    ),
                    e.consoleId ? { cloudConsoleHostingId: e.consoleId } : {}
                  ),
                  ya !== void 0 ? { deviceLimit: ya } : {}
                ),
                e.fqdn ? { fqdn: e.fqdn } : {}
              );
            return (
              await (0, Y.publish)("redux.dispatch", ce.UPDATE_SYSTEM_INFO, Jn),
              Jn
            );
          },
          V = async () => {
            let L = await (0, oe.getSettings)();
            return B(v(v({}, L), await O()), {
              hasInternet: await (0, oe.getHasInternet)(),
              publicIp: await (0, oe.getPublicIp)(),
              now: Date.now(),
              isUbiosMigration: Boolean(L.needsUbiosMigration),
              isStacked: await (0, oe.getSystemIsStacked)(),
            });
          },
          Q = (0, kr.throttle)(V, Y3),
          ae = async () => {
            let L = await Q();
            return B(v({}, L), { now: Date.now() });
          },
          W = async (L) => {
            if (u.features?.clientNetworkConfig) return s.setClientNetwork(L);
            throw new Error("Setting network config not supported");
          },
          z = (L) =>
            (0, kr.trim)(
              (0, eA.default)(L)
                .replace(/(_|\s|-)+/g, "-")
                .replace(/[^a-z0-9-]/gi, "")
                .replace(/-+/g, "-")
                .substring(0, 63),
              "-"
            ),
          ee = async (L) => {
            if (!u.features?.UFNSetsHostname) return s.setHostname(z(L));
          },
          te = async (L) => {
            try {
              L === "Europe/Kyiv" && (L = "Europe/Kiev"),
                await s.setTimezone(L),
                t.info(`Timezone changed to "${L}"`),
                await (0, Y.publish)(
                  "redux.dispatch",
                  ce.CONSOLE_TIMEZONE_CHANGED,
                  L
                ),
                d.isUbios &&
                  (await (0, rc.default)(
                    `sudo -n timedatectl set-timezone "${L}"`
                  ).catch((G) => t.error(G)));
            } catch (G) {
              t.error("Failed to change the timezone:", Te(G));
            }
          };
        (0, oe.getSettings)().then(async (L) => {
          let { timezone: G, name: X, anonymous_device_id: re } = L;
          if (
            (G && (await te(G)),
            X && ee(X).catch((ne) => t.error("Failed to set hostname:", ne)),
            await (0, Y.publish)("redux.dispatch", ce.UPDATE_DEVICE_SETTINGS, {
              setup_device_id: await h(),
              anonymous_device_id: re || (await y()),
            }),
            !L.isSetup)
          ) {
            let ne = function* () {
              yield (0, ns.takeEvery)(
                [ce.UPDATE_HAS_INTERNET],
                ({ payload: be }) => {
                  if (be)
                    return (0, Y.publish)("firmware.refreshUpdateInfo")
                      .then(() => (0, Y.publish)("redux.saga.remove", ne))
                      .then(() =>
                        (0, Y.publish)("firmware.downloadLatestKnown")
                      )
                      .catch((ke) =>
                        t.warn("Unable to refresh firmware info", ke.message)
                      );
                }
              );
            };
            await (0, Y.publish)("redux.saga.add", ne),
              await (0, Y.publish)("uum.setEnvironment", r);
          }
        });
        let He = async () => {
            let L = await (0, oe.getPublicIp)();
            try {
              let { address: G, timezone: X } = await (0, up.default)();
              await (0, Y.publish)("redux.dispatch", ce.UPDATE_PUBLIC_IP, G);
              let re = Boolean(await (0, oe.getSkipTimezoneAutoUpdate)());
              L &&
                L !== G &&
                !re &&
                (t.info(
                  `Update timezone as public IP changed from ${L} to ${G}`
                ),
                await te(X));
            } catch (G) {
              t.error("Failed to update public IP and timezone:", Te(G));
            }
          },
          St = async () => {
            let L = await jd(t);
            await (0, Y.publish)("redux.dispatch", ce.ISP_INFO_CHANGED, L);
          },
          bt = !1,
          Es = async () => {
            if (!bt && !process.env.IS_CLOUD_INSTANCE)
              try {
                await (0, Y.publish)("system.syncTime"), (bt = !0);
              } catch (L) {
                t.error("syncTime failed", L);
              }
          },
          ht = async () => {
            let { interfaces: L } = await k(),
              G = await Gd(t, L, Boolean(u.features?.clientNetworkConfig));
            await (0, Y.publish)("redux.dispatch", ce.LAN_IP_CHANGED, G);
          },
          Ss = async () => {
            let L = await zs(),
              G = await Vd(t, L);
            await (0, Y.publish)("redux.dispatch", ce.DNS_IP_CHANGED, G);
          },
          nr = [
            function* () {
              yield (0, ns.takeEvery)(ce.CONSOLE_NAME_CHANGED, async (L) => {
                let { payload: G } = L;
                try {
                  await ee(G);
                  let X = z(G);
                  F({ hostname: X, name: G });
                } catch (X) {
                  t.error("Failed to set hostname:", Te(X));
                }
              });
            },
            function* () {
              yield (0, ns.takeEvery)(
                ce.CONSOLE_TIMEZONE_CHANGED,
                async (L) => {
                  let { payload: G } = L;
                  F({ timezone: G });
                }
              );
            },
            function* () {
              yield (0, ns.takeEvery)(
                ce.UPDATE_DEVICE_SETTINGS,
                async ({ payload: L }) => {
                  F(L);
                }
              );
            },
            function* () {
              yield (0, ns.takeEvery)(
                [ce.UPDATE_CLOUD_SETTINGS],
                ({ payload: L }) => {
                  F({ cloudAccessEnabled: !!L.deviceId });
                }
              );
            },
            function* () {
              yield (0, ns.takeEvery)(
                [ce.UPDATE_HAS_INTERNET],
                async ({ payload: L }) => {
                  L &&
                    (await He(),
                    await Es(),
                    await ht(),
                    u.features?.hasGateway && (await St(), await Ss()));
                }
              );
            },
            function* () {
              yield (0, ns.takeEvery)(
                [ce.SET_DIRECT_CONNECT_DOMAIN],
                ({ payload: L }) => {
                  F({ directConnectDomain: L });
                }
              );
            },
            function* () {
              yield (0, ns.takeEvery)(
                [ce.SET_FIRMWARE_RELEASE_CHANNEL],
                ({ payload: L }) => {
                  F({ releaseChannel: L });
                }
              );
            },
          ],
          ha = async (L) => {
            let G = await (0, Y.publish)("system.device");
            if (!G.sfpWanPort)
              throw new Error("Device config does not contain sfpWanPort");
            await dl(G.sfpWanPort.associatedIfaceId, $S(L));
          };
        (0, oe.getDirectConnectDomain)().then((L) => {
          F({ directConnectDomain: L });
        });
        let yo = U_(e, t),
          RV = async (L, G = {}) => {
            let Gr = L,
              {
                name: X,
                ssh: re,
                releaseChannel: ne,
                clientNetwork: be,
                autoBackupEnabled: ke,
                hotspare: Oe,
                raid: ve,
                location: Qe,
                wanLinkSpeed: _t,
                timezone: ir,
                updateSchedule: Sr,
                skipTimezoneAutoUpdate: zt,
              } = Gr,
              Br = dt(Gr, [
                "name",
                "ssh",
                "releaseChannel",
                "clientNetwork",
                "autoBackupEnabled",
                "hotspare",
                "raid",
                "location",
                "wanLinkSpeed",
                "timezone",
                "updateSchedule",
                "skipTimezoneAutoUpdate",
              ]),
              { userId: Vr } = G,
              bs = Qe ? await (0, sc.default)(Qe) : void 0;
            re &&
              "agreementAccepted" in re &&
              Vr &&
              (Br.ssh = {
                agreementAcceptedAt: new Date(),
                agreementAcceptedByUserId: Vr,
              });
            let jr;
            Vr && (jr = await yo(Vr, B(v({}, L), { location: bs }))),
              await Promise.all([
                re &&
                  "enabled" in re &&
                  (0, Y.publish)(
                    "system.setSshEnabled",
                    re.enabled,
                    Vr !== void 0
                  ),
                re &&
                  "hashedPassword" in re &&
                  (0, Y.publish)(
                    "system.setSshHashedPassword",
                    re.hashedPassword
                  ),
                "updateSchedule" in L &&
                  (0, Y.publish)("firmware.setSchedule", Sr),
                "releaseChannel" in L &&
                  (0, Y.publish)("firmware.setReleaseChannel", ne),
                "clientNetwork" in L &&
                  (0, Y.publish)("system.setClientNetwork", be),
                "autoBackupEnabled" in L &&
                  u.features?.cloudBackup &&
                  (0, Y.publish)("backup.schedule.setAutoBackupEnabled", ke),
                "hotspare" in L &&
                  (0, Y.publish)("system.ustorage.setHotspare", Oe),
                "raid" in L &&
                  (0, Y.publish)("system.ustorage.setRaidLevel", ve),
                _t &&
                  ha(_t).catch((go) =>
                    t.error("Failed to set WAN link speed", go)
                  ),
                "name" in L &&
                  (0, Y.publish)("redux.dispatch", ce.CONSOLE_NAME_CHANGED, X),
                "location" in L &&
                  (0, Y.publish)(
                    "redux.dispatch",
                    ce.CONSOLE_LOCATION_CHANGED,
                    bs
                  ),
                ir && "timezone" in L && te(ir),
                "skipTimezoneAutoUpdate" in L &&
                  (0, Y.publish)(
                    "redux.dispatch",
                    ce.CONSOLE_SKIP_TIMEZONE_AUTO_UPDATE_CHANGED,
                    zt
                  ),
                Object.keys(Br).length > 0 &&
                  (0, Y.publish)(
                    "redux.dispatch",
                    ce.UPDATE_DEVICE_SETTINGS,
                    v({}, Br)
                  ),
              ]),
              jr && jr();
          },
          PV = async () => {
            await (0, Ee.setDeviceState)(Ee.deviceStates.REBOOTING),
              await sr.default.delay(1e3),
              await s.reboot();
          },
          UV = async () => {
            let L = await (0, oe.getDeviceState)();
            await (0, Ee.setDeviceState)(Ee.deviceStates.RESETTING_TO_DEFAULTS),
              await sr.default.delay(1e3);
            try {
              await s.resetToDefaults();
            } catch (G) {
              throw (
                ((await (0, oe.getDeviceState)()) ===
                  Ee.deviceStates.RESETTING_TO_DEFAULTS &&
                  (await (0, Ee.setDeviceState)(L)),
                G)
              );
            }
          },
          kV = async () => (
            await (0, Ee.setDeviceState)(Ee.deviceStates.POWERING_OFF),
            sr.default.delay(1e3).then(s.powerOff)
          );
        nr.forEach((L) => (0, Y.publish)("redux.saga.add", L));
        let wo = [];
        u &&
          u.storage &&
          u.storage.length &&
          wo.push(
            (0, ln.default)(
              t,
              "system.storage",
              (0, nA.default)(e, t.wrap("system.storage"), u.storage)
            )
          ),
          u.features?.cloudBackup &&
            wo.push(
              (0, ln.default)(t, "backup", (0, sA.default)(e, t.wrap("backup")))
            ),
          u.features?.storage &&
            wo.push(
              (0, ln.default)(
                t,
                "system.ustorage",
                QI(e, t.wrap("system.ustorage"), u.features.storage)
              )
            ),
          u.features?.stackable &&
            wo.push(
              (0, ln.default)(
                t,
                "stackable",
                (0, oA.default)(e, t.wrap("stackable"))
              )
            );
        let OV = async (L) => {
            let G = await (0, Y.publish)("apps.getNormalized", L);
            return {
              apps: G.apps.map((X) => X.name),
              controllers: G.controllers.map((X) => X.name),
              features: {
                pion: !0,
                notifications: L.ucorePermission[Ve.EDIT_NOTIFICATIONS],
                floorplan: { canView: !0, canEdit: L.isSuperAdmin },
              },
            };
          },
          qV = async () => {
            let L = await (0, oe.getApp)("network");
            return L.isRunning
              ? (0, kr.get)(L, "info.teleportEnabled", !1)
              : !1;
          },
          Nh = async () => {
            let L = {
              supportForm: !0,
              notifications: !0,
              deviceList: { partialUpdates: !0, autolinkDevices: !0 },
              mfa: !0,
              sharedTokens: !0,
            };
            if (!u || !u.features) return L;
            let { cloudBackup: G = !1 } = u.features;
            return B(v({}, L), { cloudBackup: G, teleport: await qV() });
          },
          FV = async (L, G = !1) => {
            if (L && G) {
              let { ssh: X } = await (0, oe.getSettings)();
              if (!X || !X.agreementAcceptedAt)
                throw new _e.default(
                  Le.default.VALIDATION_ERROR({
                    message:
                      "SSH agreement not accepted, can't enable SSH on user request",
                  })
                );
            }
            return (
              await (0, Y.publish)(
                "redux.dispatch",
                ce.UPDATE_DEVICE_SETTINGS,
                { disableSshOnStart: void 0 }
              ),
              s.setSshEnabled(L)
            );
          },
          LV = [
            (0, Y.subscribe)("system.patch", (L, G, X) => RV(G, X)),
            (0, Y.subscribe)("system.getUserData", (L, G) => OV(G)),
            (0, Y.subscribe)("system.reboot", PV, tc.SUBSCRIPTION_PRIORITY.MID),
            (0, Y.subscribe)(
              "system.resetToDefaults",
              UV,
              tc.SUBSCRIPTION_PRIORITY.MID
            ),
            (0, Y.subscribe)("system.setSshEnabled", (L, G, X) => FV(G, X)),
            (0, Y.subscribe)("system.setClientNetwork", (L, G) => W(G)),
            (0, Y.subscribe)("system.info", (L, G) => (G ? V() : ae())),
            (0, Y.subscribe)("system.setup", (L, G) => j(G)),
            (0, Y.subscribe)("system.setup.start", (L, G) => E(G)),
            (0, Y.subscribe)("system.setup.getSetupDeviceId", () => h()),
            (0, Y.subscribe)(
              "system.setup.error",
              (L, { errorType: G, errorLog: X, data: re }) =>
                A({ errorType: G, errorLog: X, data: re })
            ),
            (0, Y.subscribe)("system.setup.traceStep", (L, G, X, re, ne) =>
              C(G, X, re, ne)
            ),
            (0, Y.subscribe)("system.setup.cancel", (L, G) => m(G)),
            (0, Y.subscribe)("system.device", () => u),
            (0, Y.subscribe)("system.syncTime", s.syncTime),
            (0, Y.subscribe)(
              "system.poweroff",
              kV,
              tc.SUBSCRIPTION_PRIORITY.MID
            ),
            (0, Y.subscribe)("system.getPreviousSubnet", async () =>
              !u.features?.autoDetectPreviousSubnet ||
              (await (0, oe.getIsSetup)())
                ? null
                : await a.getPreviousSubnet()
            ),
            (0, Y.subscribe)("system.tempDisableFirewall", () =>
              u.features?.setupConfigUFN ? a.tempDisableFirewall() : !0
            ),
            (0, Y.subscribe)("system.configWan", (L, G) => a.configWan(G)),
            (0, Y.subscribe)("system.hardware", () => d),
            (0, Y.subscribe)("system.eeprom", () => N),
            (0, Y.subscribe)("system.getSshEnabled", () => s.getSshEnabled()),
            (0, Y.subscribe)(
              "system.setSshPassword",
              async (L, G, { userId: X } = {}) => {
                await s.setSshPassword(G),
                  X && (await yo(X, { ssh: { passwordChanged: !0 } }))();
              }
            ),
            (0, Y.subscribe)("system.setSshHashedPassword", async (L, G) =>
              s.setSshHashedPassword(G)
            ),
            (0, Y.subscribe)("system.getSshHashedPassword", () =>
              s.getSshHashedPassword()
            ),
            (0, Y.subscribe)("speedTest.start", () => c.start()),
            (0, Y.subscribe)("speedTest.stop", () => c.stop()),
            (0, Y.subscribe)("speedTest.status", () => c.status()),
            (0, Y.subscribe)("system.generateSupportFile", () =>
              n.generateSupportFile(s)
            ),
            (0, Y.subscribe)("system.uploadSupportFile", (L, G) =>
              n.uploadSupportFile(s, G)
            ),
            (0, Y.subscribe)("system.basicInfo", async () => {
              let { anonymous_device_id: L } = await (0, oe.getSettings)();
              return {
                hardware: d,
                isSetup: await (0, oe.getIsSetup)(),
                sendDiagnostics: await (0, oe.getSendDiagnostics)(),
                anonymousDeviceId: L,
                ucore_version: e.version,
                features: Nh(),
              };
            }),
            (0, Y.subscribe)("system.getFeaturesToExpose", Nh),
            (0, Y.subscribe)("system.setupFromBackup", async (L, G, X, re) => {
              if (!X && u.features?.setupConfigUFN) {
                let { country: ne } = await (0, oe.getSettings)();
                await a.setup({ country: ne }), await sr.default.delay(5e3);
              }
              R(re, G);
            }),
            (0, Y.subscribe)("system.getClientNetworkConfig", p),
            (0, Y.subscribe)("firmware.download.started", K),
            (0, Y.subscribe)("firmware.update.started", J),
            (0, Y.subscribe)(
              "firmware.udapi.getBasicNetworkConfiguration",
              o.getBasicNetworkConfiguration
            ),
          ],
          MV = setInterval(async () => {
            !(await (0, Y.publish)("redux.wsUpdates.count")) || O();
          }, z3),
          Rh,
          Ph = async () => {
            let L = (await (0, oe.getIsSetup)()) ? X3 : J3;
            try {
              await _();
            } catch (G) {
              t.warn("Failed to update internet status", G);
            }
            Rh = setTimeout(() => Ph(), L);
          };
        return (
          Ph(),
          n.cleanupSupportFiles(),
          async () => (
            clearInterval(MV),
            clearTimeout(Rh),
            nr.forEach((L) =>
              (0, Y.publish)("redux.saga.remove", L).catch((G) => {
                t.error("Failed to redux.saga.remove:", G);
              })
            ),
            LV.forEach((L) => (0, Y.unsubscribe)(L)),
            Q.cancel(),
            sr.default.map(wo, (L) => L())
          )
        );
      }),
      (lA = Z3);
  });
var je,
  ac = x(() => {
    (function (a) {
      (a.Queued = "queued"),
        (a.Running = "running"),
        (a.Completed = "completed"),
        (a.Failed = "failed");
    })(je || (je = {}));
  });
var Pe,
  e8,
  t8,
  mA,
  fA = x(() => {
    Pe = g(require("zod"));
    ac();
    (e8 = Pe.z.union([
      Pe.z.object({
        queuedProgress: Pe.z.number().min(0).max(100),
        queuedUntilEstimate: Pe.z.date().optional(),
      }),
      Pe.z
        .object({ state: Pe.z.literal(je.Running) })
        .transform((e) =>
          B(v({}, e), { queuedProgress: 100, startedAt: new Date() })
        ),
      Pe.z
        .object({
          state: Pe.z.literal(je.Completed),
          result: Pe.z.record(Pe.z.any()).optional(),
        })
        .transform((e) => {
          let t = new Date();
          return B(v({}, e), {
            queuedProgress: 100,
            runningProgress: 100,
            startedAt: t,
            endedAt: t,
          });
        }),
      Pe.z
        .object({
          state: Pe.z.literal(je.Failed),
          result: Pe.z.record(Pe.z.any()).optional(),
        })
        .transform((e) => B(v({}, e), { endedAt: new Date() })),
    ])),
      (t8 = Pe.z.union([
        Pe.z.object({
          runningProgress: Pe.z.number().min(0).max(100),
          runningUntilEstimate: Pe.z.date().optional(),
        }),
        Pe.z
          .object({ state: Pe.z.literal(je.Queued) })
          .transform((e) =>
            B(v({}, e), { runningProgress: 0, queuedProgress: 0 })
          ),
        Pe.z
          .object({
            state: Pe.z.literal(je.Completed),
            result: Pe.z.record(Pe.z.any()).optional(),
          })
          .transform((e) =>
            B(v({}, e), { runningProgress: 100, endedAt: new Date() })
          ),
        Pe.z
          .object({
            state: Pe.z.literal(je.Failed),
            result: Pe.z.record(Pe.z.any()).optional(),
          })
          .transform((e) => B(v({}, e), { endedAt: new Date() })),
      ])),
      (mA = async (e, t) => {
        switch (e.state) {
          case je.Queued:
            return e8.parse(t);
          case je.Running:
            return t8.parse(t);
          case je.Completed:
          case je.Failed:
            throw new Error("Task already in a finished state");
          default:
            throw new Error(`Invalid task state "${e.state}"`);
        }
      });
  });
var hA,
  Ba,
  yA,
  wA,
  gA,
  EA,
  r8,
  SA,
  bA = x(() => {
    (hA = g(require("cron"))),
      (Ba = g(require("handoff"))),
      (yA = g(require("node-cache"))),
      (wA = g(require("uuid")));
    se();
    va();
    gA = g(H());
    Re();
    ac();
    fA();
    (EA = 30),
      (r8 = async (e, t) => {
        let r = new yA.default({ stdTTL: 60 * 5 }),
          s = new Date(),
          a = null,
          o = (p) => ({
            taskId: p.id,
            taskAction: p.action,
            state: p.state,
            requestedAt: p.created_at,
            reportedAt: new Date(),
            startedAt: p.started_at,
            endedAt: p.ended_at,
            queuedUntilEstimate: p.queued_until_estimate,
            queuedProgress: p.queued_progress,
            runningUntilEstimate: p.running_until_estimate,
            runningProgress: p.running_progress,
            result: p.result,
          }),
          n = async (p) => {
            let l = await Ye(),
              f = p.queued ? je.Queued : je.Running,
              m = {
                id: (0, wA.v4)(),
                action: p.action,
                state: f,
                requested_by: p.userId,
                started_at: f === je.Running ? new Date() : void 0,
              },
              [E] = await l(we.TASKS).insert(m).returning("*");
            if (E) {
              let y = o(E);
              return r.set(E.id, y), y;
            }
            throw new Error("Failed to add task");
          },
          i = async (p) => {
            let l = r.get(p);
            if (l) return l;
            let f = await Ye(),
              [m] = await f(we.TASKS).where({ id: p });
            if (!m) throw new _e.default(Le.default.TASK_NOT_FOUND);
            return (l = o(m)), r.set(p, l), l;
          },
          c = async (p, l) => {
            let f = await i(p),
              m = await mA(f, l),
              E = await Ye(),
              [y] = await E(we.TASKS)
                .where({ id: p })
                .update({
                  state: m.state,
                  started_at: m.startedAt,
                  ended_at: m.endedAt,
                  queued_until_estimate: m.queuedUntilEstimate,
                  queued_progress: m.queuedProgress,
                  running_until_estimate: m.runningUntilEstimate,
                  running_progress: m.runningProgress,
                  result: m.result,
                  updated_at: new Date(),
                })
                .returning("*");
            if (y) {
              let h = o(y);
              return r.set(y.id, h), h;
            }
            throw new Error("Failed to update task");
          },
          d = async () => {
            let p = await Ye();
            await p(we.TASKS)
              .whereIn("state", [je.Queued, je.Running])
              .where("created_at", "<", s)
              .update({
                state: je.Failed,
                updated_at: new Date(),
                result: { code: "UCORE_INTERRUPTED" },
              });
            let l = await p(we.TASKS)
              .whereRaw(`created_at < NOW() - INTERVAL '${EA} days'`)
              .del();
            l > 0 && t.info(`Removed ${l} task statuses older than ${EA} days`);
          },
          u = [
            (0, Ba.subscribe)("taskTracker.add", (p, l) => n(l)),
            (0, Ba.subscribe)("taskTracker.update", (p, l, f) => c(l, f)),
            (0, Ba.subscribe)("taskTracker.getStatus", (p, l) => i(l)),
          ];
        return (
          d().catch((p) => {
            t.error("Failed to cleanup tasks on startup:", p);
          }),
          a ||
            (0, gA.getTimezone)().then((p) => {
              a = new hA.default.CronJob(
                "0 15 0 * * *",
                async () => {
                  try {
                    await d();
                  } catch (l) {
                    t.error("Failed to run scheduled task cleanup:", l);
                  }
                },
                null,
                !0,
                p
              );
            }),
          async () => {
            u.forEach((p) => (0, Ba.unsubscribe)(p)),
              a && (a.stop(), (a = null));
          }
        );
      }),
      (SA = r8);
  });
var mp = w(($be, vA) => {
  var s8 = require("events"),
    _A = "org.freedesktop.DBus.Properties",
    a8 = "org.freedesktop.systemd1.Unit",
    TA = "org.freedesktop.systemd1.Service",
    o8 = "org.freedesktop.systemd1.Manager",
    pp = Symbol("name"),
    IA = Symbol("proxy"),
    AA = Symbol("props"),
    n8 = Symbol("manager"),
    oc = Symbol("service"),
    Va = Symbol("state"),
    ja = Symbol("status"),
    nc = class extends s8 {
      get name() {
        return this[pp];
      }
      get state() {
        return this[Va];
      }
      get status() {
        return this[ja];
      }
      constructor(t, r, s, a, o) {
        super();
        let n = r.getInterface(TA),
          i = r.getInterface(_A);
        (this[pp] = t),
          (this[IA] = r),
          (this[AA] = i),
          (this[n8] = s),
          (this[oc] = n),
          (this[Va] = a),
          (this[ja] = o),
          i.on("PropertiesChanged", (c, d, u) => {
            if (d.ActiveState) {
              if (this[Va] === d.ActiveState.value) return;
              (this[Va] = d.ActiveState.value),
                this.emit("statechange", this[Va]);
            }
            if (d.StatusText) {
              if (this[ja] === d.StatusText.value) return;
              (this[ja] = d.StatusText.value),
                this.emit("statuschange", this[ja]);
            }
          });
      }
      destroy() {
        this[oc] && this[oc].removeAllListeners(),
          (this[pp] = null),
          (this[IA] = null),
          (this[AA] = null),
          (this[oc] = null),
          (this[Va] = null),
          (this[ja] = null);
      }
    };
  nc.create = async (e, t, r) => {
    let s = await r.getProxyObject("org.freedesktop.systemd1", t),
      a = s.getInterface(_A),
      o = await a.Get(a8, "ActiveState"),
      n = await a.Get(TA, "StatusText"),
      c = (
        await r.getProxyObject(
          "org.freedesktop.systemd1",
          "/org/freedesktop/systemd1"
        )
      ).getInterface(o8);
    return new nc(e, s, c, o.value, n.value);
  };
  vA.exports = nc;
});
var NA = w((Bbe, DA) => {
  var i8 = require("dbus-next"),
    { subscribe: fp, unsubscribe: c8 } = require("handoff"),
    CA = mp(),
    ks,
    is,
    u8 = async () => {
      (is = i8.systemBus()),
        await new Promise((t, r) => {
          is.on("connect", t), is.on("error", r);
        }),
        is.removeAllListeners(),
        (ks = (
          await is.getProxyObject(
            "org.freedesktop.systemd1",
            "/org/freedesktop/systemd1"
          )
        ).getInterface("org.freedesktop.systemd1.Manager")),
        await ks.Subscribe();
    };
  DA.exports = async (e, t) => {
    let r = async (o, { onStatusChange: n }) => {
        let i = await ks.LoadUnit(`${o}.service`),
          c = await CA.create(o, i, is);
        return (
          n(c.status),
          ks.on("UnitFilesChanged", async () => {
            c.destroy(),
              await ks.LoadUnit(`${o}.service`),
              (c = await CA.create(o, i, is)),
              c.on("statuschange", n);
          }),
          c.on("statuschange", n),
          { service: c, unsubscribe: () => c.destroy() }
        );
      },
      s = u8(),
      a = [
        fp("systemd", async () => (await s, ks)),
        fp("systemd.getBus", async () => (await s, is)),
        fp("systemd.subscribeToService", (o, n, { onStatusChange: i }) =>
          r(n, { onStatusChange: i })
        ),
      ];
    return async () => {
      a.forEach((o) => c8(o)),
        ks && (await ks.Unsubscribe().catch(() => null), is.disconnect());
    };
  };
});
var Ga,
  ic,
  hp,
  yp,
  RA,
  PA,
  UA = x(() => {
    (Ga = g(require("handoff"))),
      (ic = g(Z())),
      (hp = "update_application_clients"),
      (yp = "remove_application_client"),
      (RA = "CLIENT_LIST"),
      (PA = (e) => {
        let t = {
            StringEquals: {
              type: ["event"],
              namespace: ["common:controller"],
              name: [hp, yp],
            },
          },
          r = (n) => (0, Ga.publish)("redux.dispatch", ic.UPDATE_CLIENTS, n),
          s = (n) => (0, Ga.publish)("redux.dispatch", ic.REMOVE_CLIENTS, [n]),
          a = {
            send: async (n) => {
              try {
                let i = JSON.parse(n);
                switch (i.name) {
                  case hp: {
                    let {
                      payload: { data: c },
                    } = i;
                    e.debug(hp, c), await r(c);
                    break;
                  }
                  case yp: {
                    let {
                      payload: {
                        data: { clientMac: c },
                      },
                    } = i;
                    e.debug(yp, c), await s(c);
                    break;
                  }
                  default:
                    e.warn("Unhandled MessageBox event:", i.name);
                }
              } catch (i) {
                e.error("Clients data messageBox error:", i);
              }
            },
            close: () => {},
          },
          o = !1;
        return (
          (0, Ga.publish)("messageBox.sub", t, RA)
            .then((n) => {
              (o = !0),
                (0, Ga.publish)("messageBox.listen", n, a).catch((i) =>
                  e.error(i)
                );
            })
            .catch((n) => e.error(n)),
          {
            close: () => {
              o &&
                ((0, Ga.publish)("messageBox.unsub", RA).catch((n) =>
                  e.error(n)
                ),
                (o = !1));
            },
          }
        );
      });
  });
var cc,
  d8,
  kA,
  OA = x(() => {
    UA();
    (d8 = async (e, t) => (
      cc || (t.info("Create Client list MB"), (cc = await PA(t))),
      () => {
        cc && cc.close();
      }
    )),
      (kA = d8);
  });
var uc,
  wp = x(() => {
    uc = (e) => e.unifi?.network?.deviceCapabilities;
  });
var Ep = w((Kbe, qA) => {
  var { get: gp } = require("lodash");
  qA.exports = (e, t) => {
    let r = {};
    switch (t) {
      case "network": {
        let s = gp(e, "unifi.network.radios");
        s && (r.radios = s);
        let a = gp(e, "unifi.network.type");
        a && (r.deviceType = a);
        break;
      }
      case "protect": {
        let s = gp(e, "unifi.protect.fov");
        s && ((r.fovAngle = s), (r.deviceType = "camera"));
        break;
      }
    }
    return r;
  };
});
var FA,
  Sp,
  LA = x(() => {
    (FA = 10 * 60 * 1e3), (Sp = "unknown");
  });
var MA,
  bp,
  pn,
  l8,
  p8,
  xA,
  $A = x(() => {
    (MA = g(require("fs-extra"))), (bp = g(require("handoff"))), (pn = g(Ce()));
    va();
    Re();
    (l8 = "/persistent/.HomeKitStore/40.11"),
      (p8 = 2),
      (xA = (e, t) => {
        let r = null,
          s = async (i) => {
            if (!i.uniqueId)
              throw new Error(
                `Unique ID not provided for HomeKit device ${i.shortname} (${i.mac})`
              );
            let c = await Ye(),
              [d] = await c(we.HOME_KIT_DEVICES).where({
                device_id: i.uniqueId,
              });
            if (d)
              return (
                t.info(
                  `Found existing HomeKit device ${i.shortname} with accessory ID ${d.accessory_id}`
                ),
                d.accessory_id
              );
            t.info(
              `Adding new HomeKit device ${i.shortname} (${i.uniqueId} / ${i.mac})`
            );
            let p = (
              await c(we.HOME_KIT_DEVICES)
                .insert({ device_id: i.uniqueId, application: i.productLine })
                .returning("accessory_id")
            )[0];
            if (p) return p;
            throw new Error("Failed to add HomeKit device");
          },
          a = ({
            categoryId: i,
            setupCode: c,
            setupId: d,
            flag: u = 2,
            reserved: p = 0,
            version: l = 0,
          }) => {
            let f = 0;
            return (
              (f = f | (l & 7)),
              (f = f << 4),
              (f = f | (p & 15)),
              (f = f << 8),
              (f = f | (i & 255)),
              (f = f << 4),
              (f = f | (u & 15)),
              (f = BigInt(f) << BigInt(27)),
              (f = BigInt(f) | BigInt(Number(c) & 2147483647)),
              `X-HM://${f.toString(36).toUpperCase().padStart(9, "0")}${d}`
            );
          };
        return {
          getAccessoryId: s,
          getSetupData: async () => {
            if (r) return r;
            if (!(await (0, bp.publish)("system.device")).features?.homeKit)
              throw new Error("HomeKit not supported on this console");
            let c = /SetupCode: (\d{3}-\d{2}-\d{3})/;
            t.info("Generating HomeKit setup data...");
            try {
              let { stdout: d } = await (0, pn.default)(
                  "AccessorySetupGenerator.OpenSSL --dump-setupcode"
                ),
                u = c.exec(d);
              if (!u)
                throw new Error(
                  `Failed to match setup generator output "${d}"`
                );
              let p = u[1];
              if (!p)
                throw new Error(
                  `Failed to retrieve setup code from generator output "${d}"`
                );
              let l = parseInt(p.replaceAll("-", "")),
                f = (await MA.default.readFile(l8, "utf-8")).trim().slice(0, 4),
                m = a({ setupCode: l, setupId: f, categoryId: p8 });
              return (r = { setupCode: l, setupURI: m }), r;
            } catch (d) {
              throw (t.error("Failed to get HomeKit setup data:", d), d);
            }
          },
          factoryReset: async () => {
            if (!(await (0, bp.publish)("system.device")).features?.homeKit)
              throw new Error("HomeKit not supported on this console");
            t.info("Resetting HomeKit...");
            try {
              await (0, pn.default)("sudo -n systemctl stop unifi-homekit"),
                await (0, pn.default)(
                  "AccessorySetupGenerator.OpenSSL --factory-reset"
                ),
                await (0, pn.default)("sudo -n systemctl start unifi-homekit");
            } catch (c) {
              t.error("Failed to reset HomeKit:", c);
            }
          },
        };
      });
  });
var Ip = {};
lt(Ip, {
  deviceFullSchema: () => dc,
  devicePartialSchema: () => lc,
  devicesUpdateSchema: () => m8,
  devicesUpdateWithApplicationSchema: () => Tp,
  unknownWirelessDeviceSchema: () => _p,
});
var Xe,
  dc,
  lc,
  _p,
  m8,
  Tp,
  mn = x(() => {
    Xe = g(require("zod"));
    Re();
    Fo();
    (dc = Xe.z.object({
      uniqueId: Xe.z.string().optional(),
      mac: Xe.z.string(),
      ip: Xe.z.string(),
      name: Xe.z.string().optional(),
      status: Xe.z.nativeEnum(mt),
      firmwareStatus: Xe.z.nativeEnum(Jr),
      firmware: Xe.z.string(),
      startupTime: Xe.z.number().positive(),
      guid: Xe.z.string().uuid().optional(),
      shortname: Xe.z.string(),
      sysid: Xe.z.string().optional(),
      metadata: Xe.z.record(Xe.z.any()).optional(),
      features: Xe.z.object({ homeKit: Xe.z.boolean() }).optional(),
    })),
      (lc = dc.partial({
        ip: !0,
        status: !0,
        firmwareStatus: !0,
        firmware: !0,
        startupTime: !0,
        shortname: !0,
      })),
      (_p = lc.merge(Xe.z.object({ sysid: Xe.z.string() }))),
      (m8 = Xe.z.object({ devices: Xe.z.array(lc).nonempty() })),
      (Tp = Xe.z.object({
        application: Xe.z.nativeEnum(Ne),
        devices: Xe.z.array(lc).nonempty(),
      }));
  });
var ra,
  pc,
  BA,
  VA,
  mr,
  f8,
  jA,
  GA = x(() => {
    (ra = g(require("handoff"))),
      (pc = g(require("lodash"))),
      (BA = g(require("zod")));
    mn();
    VA = "DEVICE_LIST";
    (function (i) {
      (i.UPDATE_RECEIVED_EVENT = "update_application_devices"),
        (i.REMOVE_RECEIVED_EVENT = "remove_application_device"),
        (i.LEGACY_DEVICES_UPDATED_EVENT = "application_devices_updated"),
        (i.DEVICES_CHANGED_EVENT = "application_devices_changed"),
        (i.DEVICES_REMOVED_EVENT = "application_devices_removed"),
        (i.DEVICES_CLEARED_EVENT = "application_devices_cleared"),
        (i.REALTIME_SYNC_START_EVENT = "application_devices_sync_start");
    })(mr || (mr = {}));
    (f8 = (e) => {
      let t = {
          StringEquals: {
            type: ["event"],
            namespace: ["common:controller"],
            name: [mr.UPDATE_RECEIVED_EVENT, mr.REMOVE_RECEIVED_EVENT],
          },
        },
        r = {
          send: async (o) => {
            try {
              let n = JSON.parse(o);
              switch (n.name) {
                case mr.UPDATE_RECEIVED_EVENT: {
                  let i = (0, pc.get)(n, "payload.data", {});
                  Tp.parse(i);
                  let { application: c, devices: d } = i;
                  await (0, ra.publish)("applications.deviceList.update", c, d);
                  break;
                }
                case mr.REMOVE_RECEIVED_EVENT: {
                  let i = (0, pc.get)(n, "payload.data.application"),
                    c = (0, pc.get)(n, "payload.data.deviceMac");
                  await (0, ra.publish)("applications.deviceList.remove", i, c);
                  break;
                }
                default:
                  e.warn(`Unhandled MessageBox event ${n.name}`);
              }
            } catch (n) {
              if (n instanceof BA.ZodError) {
                e.error("Validation errors:", n.issues);
                return;
              }
              e.error("MessageBox error:", n);
            }
          },
          close: () => {},
        },
        s = !1;
      (0, ra.publish)("messageBox.sub", t, VA)
        .then((o) => {
          (s = !0),
            (0, ra.publish)("messageBox.listen", o, r).catch((n) => e.error(n));
        })
        .catch((o) => e.error(o));
      let a = (o, n = {}) =>
        (0, ra.publish)("messageBox.pub", {
          type: "event",
          namespace: "common:controller",
          name: o,
          payload: { data: n },
        });
      return {
        startRealTimeSync: async () => {
          try {
            await a(mr.REALTIME_SYNC_START_EVENT);
          } catch (o) {
            e.warn("Couldn't publish to MessageBox:", o);
          }
        },
        publishUpdatedFull: async (o) => {
          try {
            await a(mr.LEGACY_DEVICES_UPDATED_EVENT, { updated: o });
          } catch (n) {
            e.warn("Couldn't publish to MessageBox:", n);
          }
        },
        publishUpdatedPartial: async (o) => {
          try {
            await a(mr.DEVICES_CHANGED_EVENT, { updated: o });
          } catch (n) {
            e.warn("Couldn't publish to MessageBox:", n);
          }
        },
        publishRemoved: async (o) => {
          try {
            await a(mr.DEVICES_REMOVED_EVENT, { removed: o });
          } catch (n) {
            e.warn("Couldn't publish to MessageBox:", n);
          }
        },
        publishCleared: async (o) => {
          try {
            await a(mr.DEVICES_CLEARED_EVENT, { application: o });
          } catch (n) {
            e.warn("Couldn't publish to MessageBox:", n);
          }
        },
        close: () => {
          s &&
            ((0, ra.publish)("messageBox.unsub", VA).catch((o) => e.error(o)),
            (s = !1));
        },
      };
    }),
      (jA = f8);
  });
var Ie,
  Gt,
  HA,
  Ap,
  Ht,
  WA,
  h8,
  Rt,
  y8,
  KA,
  YA = x(() => {
    (Ie = g(require("handoff"))),
      (Gt = g(require("lodash"))),
      (HA = g(require("redux-saga/effects")));
    se();
    qo();
    Ue();
    wp();
    (Ap = g(Ep())), (Ht = g(Z())), (WA = g(H()));
    Re();
    Fo();
    LA();
    $A();
    GA();
    mn();
    (h8 = {
      "25x25": "xs",
      "51x51": "s",
      "101x101": "m",
      "129x129": "l",
      "257x257": "xl",
    }),
      (y8 = async (e, t) => {
        let r = [...Object.keys(e.controllers), "unifiOS"];
        Rt || (Rt = await jA(t));
        let s = xA(e, t),
          a = new Map(),
          o = new Map(),
          n = [],
          i = new Set(),
          c = async (b = null) => {
            let T = await (0, WA.getDeviceList)();
            return b ? (0, Gt.pick)(T, b) : v({}, T);
          },
          d = (b) => {
            let T = o.get(b);
            T && (clearTimeout(T), o.delete(b));
          },
          u = (b) => {
            d(b);
            let T = setTimeout(() => {
              t.info(
                `Controller ${b} hasn't come back in 10 minutes, considering offline and clearing device list...`
              ),
                (0, Ie.publish)("applications.deviceList.clear", b).catch(
                  (M) => {
                    t.info(`Failed to clear device list for ${b}.`, M);
                  }
                );
            }, FA);
            o.set(b, T);
          },
          p = (b, T) => {
            if (!r.includes(b)) throw new Error(`Unknown application "${b}"`);
            T[b] || (T[b] = []);
          },
          l = (b, T = []) =>
            T.map((q) => `${q[0]}x${q[1]}`).reduce((q, k) => {
              let I = h8[k];
              return I && (q[I] = `${e.discovery.iconBaseUrl}${b}_${k}.png`), q;
            }, {}),
          f = (b) => {
            let { triplets: T, shortnames: M, product: q } = b;
            if (q && q.abbrev) return q.abbrev;
            if (T.length) {
              let k = null,
                I = null,
                _ = null,
                P = T.find((K) => K.k1);
              P && (k = P.k1);
              let U = T.find((K) => K.k2);
              U && (I = U.k2);
              let j = T.find((K) => K.k3);
              return (
                j && (_ = j.k3),
                b.line.id === "unifi-access" ? k || I || _ : _ || I || k
              );
            }
            return M.length ? M[0] : null;
          },
          m = null,
          E = async (b) => {
            if (
              (0, Gt.isEqualWith)(m, b, (J, F, $) => {
                if ($ === "startupTime") return Math.abs(J - F) < 10;
              })
            )
              return;
            let T = await c(),
              M = b.reduce((J, F) => {
                let { controller: $ } = F;
                return r.includes($) && (J[$] || (J[$] = []), J[$]?.push(F)), J;
              }, {}),
              q = [],
              k = [],
              I = [],
              _ = [],
              P = new Map(),
              U = mi(M);
            mi(T)
              .filter((J) => !U.includes(J))
              .forEach((J) => {
                let F = T[J]?.filter(
                    (O) => !O.isManaged && O.status !== mt.ADOPTING
                  )?.map((O) => O.mac),
                  $ = [];
                (T[J] = T[J]?.filter((O) =>
                  O.isManaged || O.status === mt.ADOPTING
                    ? !0
                    : (t.info(
                        `Removing ${O.model} (${O.mac}) from device discovery`
                      ),
                      $.push(O.uniqueId || O.mac),
                      !1)
                )),
                  F &&
                    F.length > 0 &&
                    _.push({ application: J, deviceMacs: F, deviceIds: $ });
              }),
              zr(M).forEach(([J, F]) => {
                try {
                  p(J, T);
                } catch (ee) {
                  t.warn(ee);
                  return;
                }
                let $ = [],
                  O = [],
                  V = [],
                  Q = [],
                  ae = F.reduce((ee, te) => {
                    let He = T[J]?.find((bt) => bt.mac === te.addresses.mac);
                    if (He) {
                      $.push(He.mac);
                      let bt = He.ip !== te.addresses.ip,
                        Es = He.isManaged !== te.isManaged,
                        ht = He.directConnectDomain !== te.directConnectDomain;
                      if (bt || Es || ht) {
                        let Ss = B(v({}, He), {
                            ip: te.addresses.ip,
                            name: te.isManaged ? He.name : te.name,
                            isManaged: te.isManaged,
                            directConnectDomain: te.directConnectDomain,
                          }),
                          nr = { mac: Ss.mac };
                        for (let [ha, yo] of zr(Ss))
                          yo !== He[ha] && (0, Gt.set)(nr, ha, yo);
                        V.push(nr), O.push(Ss.mac), ee.push(Ss);
                      }
                      return ee;
                    }
                    let St = {
                      mac: te.addresses.mac,
                      ip: te.addresses.ip,
                      name: te.name,
                      status: mt.ONLINE,
                      firmwareStatus: Jr.UP_TO_DATE,
                      firmware: te.firmware,
                      startupTime: te.startupTime,
                      model: te.model,
                      shortname: te.shortnames[0] || "",
                      isManaged: te.isManaged,
                      metadata: te.metadata,
                      productLine: te.productLine,
                      images: l(te.iconId, te.iconResolutions),
                      directConnectDomain: te.directConnectDomain,
                      imageData: {
                        iconId: te.iconId,
                        resolutions: te.iconResolutions,
                      },
                      capabilities: te.capabilities,
                      source: te.isWireless ? "wireless" : "discovery",
                    };
                    return (
                      Q.push(St),
                      t.info(
                        `Adding ${St.model} (${St.mac}) from ${
                          te.isWireless ? "wireless" : ""
                        } device discovery`
                      ),
                      O.push(St.mac),
                      ee.push(St),
                      i.add(St.mac),
                      ee
                    );
                  }, []),
                  W = T[J]?.filter(
                    (ee) => !$.includes(ee.mac) && !ee.isManaged
                  )?.map((ee) => ee.mac),
                  z = [];
                (T[J] = [
                  ...(T[J]?.filter((ee) =>
                    !$.includes(ee.mac) && !ee.isManaged
                      ? (t.info(
                          `Removing ${ee.model} (${ee.mac}) from device discovery`
                        ),
                        z.push(ee.uniqueId || ee.mac),
                        !1)
                      : !O.includes(ee.mac)
                  ) || []),
                  ...ae,
                ]),
                  W &&
                    W.length > 0 &&
                    (_.push({ application: J, deviceMacs: W, deviceIds: z }),
                    W.forEach((ee) => i.delete(ee))),
                  ae.length > 0 && q.push({ application: J, devices: ae }),
                  V.length > 0 &&
                    (I.push({ application: J, devices: V }), P.set(J, V)),
                  Q.length > 0 &&
                    (k.push({ application: J, devices: Q }),
                    P.set(J, [...Q, ...(P.get(J) || [])]));
              }),
              t.debug("Device list updated from discovery. Current state: ", T),
              (m = b),
              q.length > 0 && Rt.publishUpdatedFull(q),
              k.length > 0 &&
                (await (0, Ie.publish)("applications.deviceList.onAdd", k)),
              I.length > 0 &&
                (await (0, Ie.publish)("applications.deviceList.onUpdate", I)),
              P.size > 0 &&
                Rt.publishUpdatedPartial(
                  [...P].map(([J, F]) => ({ application: J, devices: F }))
                ),
              _.length > 0 &&
                (Rt.publishRemoved(_),
                await (0, Ie.publish)("applications.deviceList.onRemove", _)),
              await (0, Ie.publish)("redux.dispatch", Ht.SET_DEVICE_LIST, T);
          },
          y = async (b) => {
            let T = await Promise.all(
              b
                .filter((M) => !i.has(M.mac))
                .map(async (M) => {
                  let q = _p.safeParse(M);
                  if (!q.success) throw new at(q.error);
                  let { sysid: k, mac: I } = M;
                  return {
                    mac: I,
                    sysid: k,
                    ip: null,
                    firmware: null,
                    isWireless: !0,
                  };
                })
            );
            await (0, Ie.publish)(
              "redux.dispatch",
              Ht.ADD_UNADOPTED_WIRELESS_DEVICES,
              T
            );
          },
          h = async (b, T) => {
            if (b === Sp) return y(T);
            let M = await c();
            p(b, M);
            let q = [],
              k = [],
              I = [],
              _ = [],
              P = await Promise.all(
                T.map(async (U) => {
                  let j = M[b]?.find((J) => J.mac === U.mac),
                    K;
                  if (j) {
                    let J = U.status ? U.status : j.status,
                      F = J !== mt.ADOPTING;
                    if (
                      (j.source === "wireless" && !j.isManaged && _.push(j.mac),
                      (K = B(v({}, j), {
                        uniqueId: j.uniqueId ? j.uniqueId : U.uniqueId,
                        ip: U.ip ? U.ip : j.ip,
                        name: U.name ? U.name : j.name,
                        status: J,
                        firmwareStatus: U.firmwareStatus
                          ? U.firmwareStatus
                          : j.firmwareStatus,
                        firmware: U.firmware ? U.firmware : j.firmware,
                        startupTime: U.startupTime
                          ? U.startupTime
                          : j.startupTime,
                        isManaged: F,
                        metadata: v(v({}, j.metadata), U.metadata || {}),
                        source: b,
                      })),
                      !K.homeKit && U.features?.homeKit)
                    ) {
                      let O = await s.getAccessoryId(K);
                      K.homeKit = { accessoryId: O };
                    }
                    let $ = {};
                    mi(K).forEach((O) => {
                      K[O] !== j[O] && (0, Gt.set)($, O, O in U ? U[O] : K[O]);
                    }),
                      Object.keys($).length > 0 && (($.mac = j.mac), k.push($));
                  } else {
                    let J = dc.safeParse(U);
                    if (!J.success) throw new at(J.error);
                    let F = U,
                      $ = await (0, Ie.publish)(
                        "fingerprint.reportedDevice",
                        U
                      ),
                      O = F.shortname,
                      V = {},
                      Q = {},
                      ae = b,
                      W = {},
                      z = F.name,
                      ee;
                    if (
                      ($
                        ? ((O = f($) || O),
                          (V = l($.icon.id, $.icon.resolutions)),
                          (Q = {
                            iconId: $.icon.id,
                            resolutions: $.icon.resolutions,
                          }),
                          (ae = ti((0, Gt.get)($, "line.id", ""))),
                          (W = (0, Ap.default)($, ae)),
                          (ee = uc($)),
                          z || (z = $.product.name))
                        : n.includes(F.shortname) ||
                          (t.warn(
                            `Unknown device reported. MAC: ${F.mac}, shortname: ${F.shortname}`
                          ),
                          n.push(F.shortname)),
                      (K = {
                        uniqueId: F.uniqueId,
                        mac: F.mac,
                        ip: F.ip,
                        name: z || O,
                        status: F.status,
                        firmwareStatus: F.firmwareStatus,
                        firmware: F.firmware,
                        startupTime: F.startupTime,
                        model: O,
                        shortname: F.shortname,
                        isManaged: F.status !== mt.ADOPTING,
                        metadata: v(v({}, W), F.metadata || {}),
                        productLine: ae,
                        images: V,
                        imageData: Q,
                        source: b,
                        capabilities: ee,
                      }),
                      F.features?.homeKit)
                    ) {
                      let te = await s.getAccessoryId(K);
                      K.homeKit = { accessoryId: te };
                    }
                    I.push(K),
                      i.add(K.mac),
                      t.info(`Adding ${K.model} (${K.mac}) from ${b} report`);
                  }
                  return q.push(K.mac), K;
                })
              );
            (M[b] = [...(M[b]?.filter((U) => !q.includes(U.mac)) || []), ...P]),
              await (0, Ie.publish)("redux.dispatch", Ht.SET_DEVICE_LIST, M),
              t.debug(
                `Device list updated from ${b} report. Current state: `,
                M
              ),
              P.length &&
                (Rt.publishUpdatedFull([{ application: b, devices: P }]),
                Rt.publishUpdatedPartial([
                  { application: b, devices: [...I, ...k] },
                ])),
              I.length > 0 &&
                (await (0, Ie.publish)("applications.deviceList.onAdd", [
                  { application: b, devices: I },
                ])),
              k.length > 0 &&
                (await (0, Ie.publish)("applications.deviceList.onUpdate", [
                  { application: b, devices: k },
                ])),
              _.length > 0 &&
                (t.info("Wireless devices adopted:", _),
                await (0, Ie.publish)(
                  "redux.dispatch",
                  Ht.REMOVE_UNADOPTED_WIRELESS_DEVICES,
                  _
                ));
          },
          S = async (b, T) => {
            if (b === Sp)
              return (
                t.info("Unadopted wireless device no longer detected:", T),
                (0, Ie.publish)(
                  "redux.dispatch",
                  Ht.REMOVE_UNADOPTED_WIRELESS_DEVICES,
                  [T]
                )
              );
            t.info(`Removing device ${T} from ${b}`);
            let M = await c(),
              q = M[b];
            if (!q) throw new Error(`Invalid controller name ${b}`);
            let k = !1,
              I = "";
            if (
              ((M[b] = q.filter((P) =>
                P.mac === T ? ((k = !0), (I = P.uniqueId || P.mac), !1) : !0
              )),
              !k)
            )
              throw new Error(`Invalid device MAC ${T}. Device not found.`);
            i.delete(T),
              await (0, Ie.publish)("redux.dispatch", Ht.SET_DEVICE_LIST, M);
            let _ = [{ application: b, deviceMacs: [T], deviceIds: [I] }];
            await (0, Ie.publish)("applications.deviceList.onRemove", _),
              Rt.publishRemoved(_);
          },
          D = async (b) => {
            let T = await c();
            if (!T[b]) return;
            t.info(`Clearing device list for application "${b}"`);
            let M = T[b]?.map((q) => q.uniqueId || q.mac) || [];
            T[b]?.forEach((q) => i.delete(q.mac)),
              (T[b] = []),
              await (0, Ie.publish)("redux.dispatch", Ht.SET_DEVICE_LIST, T),
              await (0, Ie.publish)("applications.deviceList.onRemove", [
                { application: b, deviceIds: M },
              ]),
              Rt.publishCleared(b);
          },
          A = async (b) => {
            try {
              let T = await c(),
                M = [],
                q = [];
              zr(T).forEach(([k, I]) => {
                let _ = [],
                  P = [];
                (T[k] = I.map((U) => {
                  let j = b.byShortname.get(U.shortname);
                  if (!j)
                    return (
                      t.warn(
                        `Device ${U.model} (shortname: ${U.shortname}) not found in new fingerprint data!`
                      ),
                      U
                    );
                  let K = {};
                  U.imageData.iconId !== j.icon.id &&
                    ((K.images = l(j.icon.id, j.icon.resolutions)),
                    (K.imageData = {
                      iconId: j.icon.id,
                      resolutions: j.icon.resolutions,
                    }));
                  let J = ti((0, Gt.get)(j, "line.id", ""));
                  U.productLine !== J && (K.productLine = J);
                  let F = (0, Ap.default)(j, J),
                    $ = v(v({}, F), U.metadata);
                  if (
                    ((0, Gt.isEqual)($, U.metadata) || (K.metadata = $),
                    Object.keys(K).length === 0)
                  )
                    return U;
                  t.info(
                    `Fingerprint data changed for ${U.model}, updating ${U.mac}...`
                  ),
                    _.push(v({ mac: U.mac }, K));
                  let O = v(v({}, U), K);
                  return P.push(O), O;
                })),
                  _.length > 0 &&
                    (q.push({ application: k, devices: _ }),
                    M.push({ application: k, devices: P }));
              }),
                q.length > 0 &&
                  (Rt.publishUpdatedPartial(q),
                  Rt.publishUpdatedFull(M),
                  await (0, Ie.publish)(
                    "redux.dispatch",
                    Ht.SET_DEVICE_LIST,
                    T
                  ),
                  await (0, Ie.publish)("applications.deviceList.onUpdate", q));
            } catch (T) {
              t.error(
                "Failed to refresh device list with new fingerprint data:",
                T
              );
            }
          },
          C = [
            function* () {
              yield (0, HA.takeEvery)([Ht.UPDATE_APP], ({ payload: b }) => {
                let T = b.name,
                  M = (0, Gt.get)(b, "updates.state");
                if (!(!T || !M))
                  switch (M) {
                    case ot.ACTIVE: {
                      d(T), a.set(T, !0);
                      break;
                    }
                    case ot.INACTIVE: {
                      a.get(T) && u(T);
                      break;
                    }
                  }
              });
            },
          ];
        C.forEach((b) => (0, Ie.publish)("redux.saga.add", b));
        let R = [
          (0, Ie.subscribe)("applications.deviceList.get", (b, T) => c(T)),
          (0, Ie.subscribe)("applications.deviceList.discover", (b, T) => E(T)),
          (0, Ie.subscribe)("applications.deviceList.update", (b, T, M) =>
            h(T, M)
          ),
          (0, Ie.subscribe)("applications.deviceList.remove", (b, T, M) =>
            S(T, M)
          ),
          (0, Ie.subscribe)("applications.deviceList.clear", (b, T) => D(T)),
          (0, Ie.subscribe)("applications.deviceList.refresh", (b, T) => A(T)),
          (0, Ie.subscribe)("applications.realtimeUpdates.enable", () => {
            if (Rt) return Rt.startRealTimeSync();
            throw new Error("Device list MessageBox client not active");
          }),
          (0, Ie.subscribe)("homeKit.getSetupData", () => s.getSetupData()),
          (0, Ie.subscribe)("homeKit.factoryReset", () => s.factoryReset()),
        ];
        return () => {
          Rt && Rt.close(),
            o.forEach((b) => clearTimeout(b)),
            C.forEach((b) =>
              (0, Ie.publish)("redux.saga.remove", b).catch((T) => {
                t.error("Failed to redux.saga.remove:", T);
              })
            ),
            R.forEach((b) => (0, Ie.unsubscribe)(b));
        };
      }),
      (KA = y8);
  });
var zA,
  w8,
  vp,
  JA = x(() => {
    zA = g(require("handoff"));
    qt();
    (w8 = 3e3),
      (vp = class {
        constructor(t) {
          this.logger = t;
          this.ongoingRequests = new Set();
        }
        async fetchManifest(t) {
          if (!!this.ongoingRequests.has(t))
            try {
              await (0, zA.publish)("controllers.fetchManifest", t),
                this.ongoingRequests.delete(t);
            } catch (r) {
              this.logger.warn(`Failed to fetch ${t} manifest:`, Te(r)),
                setTimeout(() => this.fetchManifest(t), w8);
            }
        }
        start(t) {
          this.ongoingRequests.add(t), this.fetchManifest(t);
        }
        stop(t) {
          this.ongoingRequests.delete(t);
        }
      });
  });
var ZA = w((R_e, QA) => {
  Re();
  var { publish: g8 } = require("handoff"),
    E8 = 10 * 1e3,
    XA = 2 * 60 * 60 * 1e3,
    Cp = 4,
    S8 = (e) => {
      let t = new Map(),
        r = new Map(),
        s = null,
        a = (i) => (s ? i - s >= XA : !0),
        o = (i, c) => {
          r.has(i) || r.set(i, []);
          let d = r.get(i);
          d.push(c);
          let u = d.length;
          if ((e.debug(`${i} restart #${u} recorded.`), u > Cp && a(c))) {
            let p = d[u - Cp - 1];
            c - p <= XA &&
              (e.warn(
                `${i} has restarted over ${Cp} times in the allowed period. Reporting...`
              ),
              g8(
                "legacyTrace",
                {
                  namespace: "unifi:core:analytics:event",
                  type: "multi_app_restarts",
                  payload: { event_name: "multi_app_restarts", event_type: i },
                },
                { withSource: !1 }
              ),
              (d = []),
              (s = new Date()));
          }
          r.set(i, d);
        };
      return (i, c) => {
        switch (c) {
          case ot.DEACTIVATING: {
            t.set(i, new Date());
            break;
          }
          case ot.ACTIVATING: {
            let d = t.get(i),
              u = new Date();
            d && u - d < E8 && o(i, u);
            break;
          }
        }
      };
    };
  QA.exports = S8;
});
var sv = w((k_e, rv) => {
  Re();
  JA();
  var { publish: Ha } = require("handoff"),
    ev = require("bluebird"),
    b8 = require("@ubnt/promise-queue"),
    { setIntervalAsync: _8 } = require("set-interval-async/dynamic"),
    { clearIntervalAsync: T8 } = require("set-interval-async"),
    { UPDATE_APP: I8 } = Z(),
    A8 = Ce(),
    { cleanApplicationVersion: v8 } = (Ue(), We),
    C8 = mp(),
    D8 = ZA(),
    tv = 6e4;
  rv.exports = async (e, t, r) => {
    let s = !0,
      a = {},
      o = new Map(),
      n = new b8(),
      i = new vp(t),
      c = D8(t),
      d =
        (h) =>
        (...S) =>
          n.add(() => h(...S)),
      u = (h, S) => Ha("redux.dispatch", I8, { name: h, updates: S }),
      p = (h, S) => (o.set(h, Date.now()), u(h, S)),
      l = d(async (h, S) => {
        t.debug("onStateChange", h.name, S);
        let D = r.find((N) => N.serviceName === h.name);
        if (!D)
          return t.warn(`unable to find matching controller for ${h.name}`);
        c(D.name, S);
        let A = S === ot.ACTIVE;
        A ? i.start(D.name) : i.stop(D.name);
        let C = null,
          R = null;
        try {
          let { stdout: N } = await A8(
            `sudo dpkg-query --showformat='\${Status}|\${Version}' --show ${D.aptPackage}`
          );
          if (N) {
            let b = N.split("|");
            (C = b[0].startsWith("install")), (R = b[1] && v8(b[1]));
          }
        } catch (N) {
          A
            ? (t.error(
                `Failed to get version for running application ${D.name}:`,
                N
              ),
              (C = !0))
            : (t.info(`${D.name} is not installed`), (C = !1));
        }
        await u(D.name, {
          state: S,
          version: R,
          isInstalled: C || A,
          isRunning: A,
          status: A ? "ok" : "offline",
          statusMessage: "",
        });
      }),
      f = async (h, S) => {
        t.debug("onStatusChange", h.name, S);
        let D = r.find((R) => R.serviceName === h.name);
        if (!D)
          return t.warn(`unable to find matching controller for ${h.name}`);
        let A;
        try {
          A = JSON.parse(S);
        } catch (R) {
          t.error(`unable to parse sd_notify status for ${h.name}: ${S}`);
        }
        if (!A || A.abridged)
          try {
            A = await Ha("controllers.fetchStatus", D.name);
          } catch (R) {
            if ((t.error(`unable to parse http status for ${h.name}`, R), !A))
              return;
          }
        let C = typeof A.isConfigured != "undefined" ? A.isConfigured : !1;
        A.configurestate && (C = A.configurestate === "configured"),
          await p(D.name, B(v({}, A), { isConfigured: C }), !0);
      },
      m = async () => {
        await ev.map(r, async (h) => {
          let { name: S, serviceName: D } = h;
          try {
            let C = await (await Ha("systemd")).LoadUnit(`${D}.service`);
            if (a[D]) return;
            let R = await C8.create(D, C, await Ha("systemd.getBus"));
            (a[D] = R),
              l(R, R.state),
              R.on("statechange", (N) =>
                l(R, N).catch((b) => t.error("statechange error", b))
              ),
              R.on("statuschange", (N) =>
                f(R, N).catch((b) => t.error("statuschange error", b))
              );
          } catch (A) {
            (a[D] || s) &&
              (s ||
                t.warn(`could not get unit for ${D}, removing...`, A.message),
              a[D] && a[D].destroy(),
              delete a[D],
              u(S, {
                isInstalled: !1,
                isConfigured: !1,
                isRunning: !1,
                status: "offline",
                statusMessage: "",
                info: {},
                unadoptedDevices: [],
              }));
          }
        });
      },
      E = async () => {
        await ev.all(
          Object.keys(a).map(async (h) => {
            try {
              let S = a[h];
              if (S.state !== ot.ACTIVE) return;
              let D = r.find((b) => b.serviceName === S.name);
              if (!D)
                return t.warn(
                  `unable to find matching controller for ${S.name}`
                );
              let A = o.get(D.name),
                C = Date.now();
              if (A && C - A < tv) return;
              let R;
              try {
                R = await Ha("controllers.fetchStatus", D.name);
              } catch (b) {
                return t.error(
                  `unable to get status for ${S.name}: ${b.message}`
                );
              }
              let N =
                typeof R.isConfigured != "undefined" ? R.isConfigured : !1;
              R.configurestate && (N = R.configurestate === "configured"),
                await p(D.name, B(v({}, R), { isConfigured: N }));
            } catch (S) {
              t.error(`Failed to update ${h} service status`, S);
            }
          })
        );
      };
    Ha("systemd").then((h) => {
      h.on("UnitFilesChanged", m);
    }),
      m().then(() => {
        s = !1;
      });
    let y = _8(E, tv);
    return async () => {
      await T8(y),
        Object.keys(a).forEach((h) => {
          a[h].destroy(), delete a[h];
        }),
        o.clear();
    };
  };
});
var Wa = w((O_e, av) => {
  var N8 = (e) =>
    ["ETIMEDOUT", "ENETUNREACH", "ENOTFOUND", "EAI_AGAIN"].includes(e.code) ||
    e.type === "request-timeout";
  av.exports = N8;
});
var lv = w((L_e, dv) => {
  var fr = g(require("handoff")),
    Os = g(require("lodash")),
    ov = g(require("redux-saga/effects")),
    nv = g(require("set-interval-async")),
    iv = g(require("set-interval-async/dynamic")),
    cv = g(Wa()),
    uv = g(ie());
  qo();
  var fn = g(Z()),
    ar = g(H()),
    R8 = 60 * 1e3,
    P8 = async (e, t) => {
      let r = `http://127.0.0.1:${e.controllers.network.port}/v2/api/site/default/topology?includeClientModelData=true`,
        s,
        a = new Set(),
        o,
        n = (E, y) => {
          y.sort((D, A) => A[0] - D[0]);
          let h = y[0];
          return h
            ? `${e.discovery.iconBaseUrl}${E}_${h[0]}x${h[1]}.png`
            : null;
        },
        i = async (E) => {
          try {
            let y = await (0, fr.publish)("fingerprint.reportedDevice", {
              shortname: E,
            });
            if (y) {
              let h = (0, Os.get)(y, "icon.id"),
                S = (0, Os.get)(y, "icon.resolutions", []),
                D = n(h, S),
                A = null;
              return (
                (0, Os.get)(y, "unifi.adoptability") === "adoptable" &&
                  (A = (0, Os.get)(y, "line.id", "").replace("unifi-", "")),
                { application: A, iconURL: D }
              );
            }
            return {};
          } catch (y) {
            if ((0, cv.default)(y)) return {};
            throw y;
          }
        },
        c = (E) =>
          `${E.model || "Unidentified device"} (${E.name || "No name"} @ ${
            E.mac
          })`,
        d = async (E) => {
          let y = await (0, ar.getDeviceTopology)();
          if (y.type === "default") {
            let C = E.vertices.map(c);
            return (
              t.info(
                `Populating topology (type: ${E.type}) with ${C.length} devices:`,
                C.join(", ")
              ),
              (0, fr.publish)("redux.dispatch", fn.SET_DEVICE_TOPOLOGY, E)
            );
          }
          E.type === "dummy" && y.type === "normal"
            ? t.info("Network is not running, switching to dummy topology")
            : E.type === "normal" &&
              y.type === "dummy" &&
              t.info("Switching back to real topology");
          let h = y.vertices.map((C) => C.mac),
            S = E.vertices.map((C) => C.mac),
            D = y.vertices.filter((C) => !S.includes(C.mac));
          D.length > 0 &&
            t.info(
              `Removing ${D.length} device${D.length > 1 ? "s" : ""}:`,
              D.map(c).join(", ")
            );
          let A = E.vertices.filter((C) => !h.includes(C.mac));
          return (
            A.length > 0 &&
              t.info(
                `Adding ${A.length} device${A.length > 1 ? "s" : ""}:`,
                A.map(c).join(", ")
              ),
            (A.length > 0 || D.length > 0) &&
              t.info(
                `Topology now has ${E.vertices.length} device${
                  E.vertices.length > 1 ? "s" : ""
                }`
              ),
            (0, fr.publish)("redux.dispatch", fn.SET_DEVICE_TOPOLOGY, E)
          );
        },
        u = async (E) => {
          let [y, h] = await Promise.all([
              (0, ar.getName)(),
              (0, ar.getSystemInfo)(),
            ]),
            { mac: S } = h,
            D = (0, Os.get)(h, "hardware.shortname", ""),
            { iconURL: A = null } = await i(D),
            C = { mac: S, name: y, type: "DEVICE", model: D, iconURL: A },
            R = [];
          zr(E).forEach(([T, M]) => {
            M.forEach((q) => {
              q.mac !== S &&
                q.source !== "discovery" &&
                R.push({
                  mac: q.mac,
                  name: q.name,
                  model: q.shortname,
                  iconURL: (0, Os.get)(q, "images.xl", ""),
                  application: T,
                  type: T === "network" ? "DEVICE" : "CLIENT",
                  unifiDevice: !0,
                });
            });
          });
          let N = R.map((T) => ({
            downlinkMac: T.mac,
            uplinkMac: C.mac,
            type: "WIRED",
          }));
          return R.push(C), { edges: N, vertices: R, type: "dummy" };
        },
        p = async (E) => {
          try {
            if (s === void 0) {
              let q = await (0, fr.publish)("system.device");
              (s = q.controllers
                ? q.controllers.some((k) => k.name === "network")
                : !1),
                s
                  ? (o = (0, iv.setIntervalAsync)(async () => {
                      await p();
                    }, R8))
                  : t.info(
                      "Network is not available on this console. Will be using dummy topology fallback."
                    );
            }
            E || (E = await (0, ar.getDeviceList)());
            let y = !1;
            if (
              (s &&
                (y = (await (0, ar.getControllers)()).some(
                  (q) => q.name === "network" && q.isRunning
                )),
              !s || !y)
            ) {
              let q = await u(E);
              await d(q);
              return;
            }
            let h = await (0, uv.fetch)(r, { timeout: 1e4 });
            if (!h.ok)
              throw new Error(
                `Failed to fetch topology data. Status: ${h.status} Reason: ${h.statusText}`
              );
            let S = await h.json(),
              D = await (0, ar.getSystemInfo)(),
              A = [];
            zr(E).forEach(([q, k]) => {
              k.forEach((I) => {
                A.push(v({ application: q }, I));
              });
            });
            let { edges: C, vertices: R } = S;
            A.length > 0 &&
              R.length === 0 &&
              t.warn("Empty topology response received from Network");
            let N = [],
              b = [];
            await Promise.all(
              R.map(async (q) => {
                let k = q.mac.replace(/:/g, "").toUpperCase(),
                  I = A.find((U) => U.mac === k);
                if (I) {
                  (q.name = I.name),
                    (q.model = I.shortname),
                    (q.iconURL = (0, Os.get)(I, "images.xl", "")),
                    (q.application = I.application),
                    (q.unifiDevice = !0);
                  let { mac: U } = D;
                  if (k === U) {
                    let j = await (0, ar.getName)();
                    q.name = j;
                  }
                  N.push(q.mac), b.push(q);
                  return;
                }
                if (q.model) {
                  let { iconURL: U, application: j } = await i(q.model);
                  if ((j && (q.application = j), U)) {
                    (q.iconURL = U),
                      (q.unifiDevice = !0),
                      N.push(q.mac),
                      b.push(q);
                    return;
                  }
                }
                let { iconFilename: _, iconResolutions: P } = q;
                if (_ && P) {
                  let U = n(_, P);
                  (q.iconURL = U), (q.unifiDevice = !0);
                }
                (q.type === "CLIENT" && q.unifiDevice === !1) ||
                  (!q.iconURL &&
                    !a.has(q.mac) &&
                    (t.warn("Failed to identify UniFi device vertex", q),
                    a.add(q.mac)),
                  N.push(q.mac),
                  b.push(q));
              })
            );
            let M = {
              edges: C.filter(
                (q) => N.includes(q.downlinkMac) && N.includes(q.uplinkMac)
              ),
              vertices: b,
              type: "normal",
            };
            await d(M);
          } catch (y) {
            t.error("Failed to update device topology:", y);
          }
        },
        l = [
          (0, fr.subscribe)("controllers.deviceTopology.update", (E, y) =>
            p(y)
          ),
        ],
        f;
      f = setTimeout(() => {
        p();
      }, 5e3);
      let m = [
        function* () {
          yield (0, ov.takeEvery)([fn.SET_DEVICE_LIST], ({ payload: E }) => {
            p(E), f && (clearTimeout(f), (f = null));
          });
        },
      ];
      return (
        m.forEach((E) => (0, fr.publish)("redux.saga.add", E)),
        async () => {
          o && (await (0, nv.clearIntervalAsync)(o)),
            m.forEach((E) =>
              (0, fr.publish)("redux.saga.remove", E).catch((y) => {
                t.error("Failed to redux.saga.remove:", y);
              })
            ),
            l.forEach((E) => (0, fr.unsubscribe)(E));
        }
      );
    };
  dv.exports = P8;
});
var mc,
  pv,
  fc,
  mv,
  Dp = x(() => {
    (mc = g(require("handoff"))),
      (pv = (e) => (0, mc.publish)("taskTracker.add", e)),
      (fc = (e) => (0, mc.publish)("taskTracker.getStatus", e)),
      (mv = (e, t) => (0, mc.publish)("taskTracker.update", e, t));
  });
var fv,
  Np,
  hv,
  yv = x(() => {
    fv = g(require("handoff"));
    Dp();
    ac();
    se();
    qt();
    (Np = class {
      get requestingUserId() {
        return this.userId;
      }
      constructor(t, r, s, ...a) {
        (this.action = s.action),
          (this.queued = s.queued || !1),
          (this.userId = s.userId),
          (this.logger = r),
          (this.config = t),
          (this.args = a);
        let o = s.autoStart !== void 0 ? s.autoStart : !0;
        (this.init = new Promise((n, i) => {
          pv(B(v({}, s), { action: this.action, queued: this.queued }))
            .then((c) => ((this.id = c.taskId), (this.currentStatus = c), n()))
            .catch(
              (c) => (this.logger.error("Failed to initialize task", c), i(c))
            );
        })),
          o && this.run();
      }
      run() {
        if (this.execStarted) {
          this.logger.warn(
            `Can't start task ${this.id} (${this.action}): already running`
          );
          return;
        }
        this.execStarted = new Promise((t, r) => {
          this.init
            .then(() => {
              if (
                (this.queued
                  ? (this.result = (0, fv.publish)(
                      "taskQueue.add",
                      async () => (
                        await this.update({
                          state: je.Running,
                          runningProgress: 0,
                        }),
                        this.handler(...this.args)
                      ),
                      this.action
                    ))
                  : (this.result = this.handler(...this.args)),
                !this.result)
              )
                return r(
                  new Error(`Failed to start task ${this.id} (${this.action})`)
                );
              this.result
                .then(() => this.complete())
                .catch((s) => {
                  this.logger.error(
                    `${this.action} task ${this.id} failed:`,
                    s
                  ),
                    this.fail(s);
                }),
                t();
            })
            .catch(() =>
              r(new Error(`Failed to start task ${this.id} (${this.action})`))
            );
        });
      }
      async getStatus() {
        if ((await this.init, !this.id))
          throw new Error("Failed to retrieve task status");
        return this.currentStatus
          ? this.currentStatus
          : ((this.currentStatus = await fc(this.id)), this.currentStatus);
      }
      async getResult() {
        if ((await this.init, !this.execStarted))
          throw (
            (this.logger.error(
              `Task ${this.id} (${this.action}) is initialized, but not started, failed to retrieve result promise`
            ),
            new Error("Task not started"))
          );
        return await this.execStarted, this.result;
      }
      async retry() {
        if (!this.execStarted) throw new Error("Task not running, can't retry");
        return (
          this.logger.warn(`Retrying task ${this.id} (${this.action})`),
          await this.update({ state: je.Running, runningProgress: 0 }),
          this.handler(...this.args)
        );
      }
      async update(t) {
        if (!this.id) throw new Error("Task ID not set");
        this.currentStatus = await mv(this.id, t);
      }
      async setProgress(t) {
        try {
          await this.update({ runningProgress: t });
        } catch (r) {
          this.logger.error("Failed to update progress", r);
        }
      }
      async complete() {
        let t = await this.result;
        await this.update({ state: je.Completed, result: t });
      }
      async fail(t) {
        let r;
        t instanceof _e.default
          ? (r = { data: t.data, code: t.code, message: t.message })
          : (r = { message: Te(t) }),
          await this.update({ state: je.Failed, result: r });
      }
    }),
      (hv = Np);
  });
var Ev = w((K_e, gv) => {
  var U8 = require("events"),
    wv = class extends U8 {
      constructor(t) {
        super();
        (this.steps = t),
          (this.stepProgressPercentage = t.reduce(
            (
              r,
              {
                step: s,
                progressPercentage: a = 0,
                completed: o = !1,
                started: n = !1,
              }
            ) =>
              B(v({}, r), { [s]: { percentage: a, completed: o, started: n } }),
            {}
          ));
      }
      setStepProgressPercentage(
        t,
        { percentage: r = null, error: s = null, completed: a = null }
      ) {
        if (this.stepProgressPercentage[t] === void 0)
          throw new Error(`Unknown step ${t}`);
        (this.stepProgressPercentage[t].started = !0),
          r !== null && (this.stepProgressPercentage[t].percentage = r),
          s !== null &&
            (this.stepProgressPercentage[t].error = {
              code: s.code,
              message: s.message,
            }),
          a !== null &&
            ((this.stepProgressPercentage[t].completed = a),
            a && (this.stepProgressPercentage[t].percentage = 100)),
          this.emit("progress", this.getProgressSummary());
      }
      getProgressSummary() {
        return {
          progress: this.getProgressPercentage(),
          steps: Object.entries(this.stepProgressPercentage).map(([t, r]) =>
            v({ id: t }, r)
          ),
        };
      }
      setStepComplete(t) {
        if (this.stepProgressPercentage[t] === void 0)
          throw new Error(`Unknown step ${t}`);
        (this.stepProgressPercentage[t].percentage = 100),
          (this.stepProgressPercentage[t].completed = !0),
          this.emit("progress", this.getProgressSummary());
      }
      getProgressPercentage() {
        let { total: t, completed: r } = this.steps.reduce(
          ({ total: s, completed: a }, { step: o, duration: n }) => ({
            total: s + n,
            completed:
              (this.stepProgressPercentage[o].percentage / 100) * n + a,
          }),
          { total: 0, completed: 0 }
        );
        return (r / t) * 100;
      }
    };
  gv.exports = wv;
});
var _v = w((Y_e, bv) => {
  var k8 = Ev(),
    O8 = 500,
    Sv = class extends k8 {
      constructor(t, r) {
        super(t);
        (this.startTime = new Date()),
          (this.timeEstimate = r),
          (this.realProgress = 0),
          (this.estimatedProgress = 0),
          (this.updateInterval = setInterval(
            this._updateProgressEstimate.bind(this),
            O8
          ));
      }
      setStepProgressPercentage(...t) {
        super.setStepProgressPercentage(...t), this._updateTimeEstimate();
      }
      setStepComplete(t) {
        super.setStepComplete(t), this._updateTimeEstimate();
      }
      getProgressPercentage() {
        return this.estimatedProgress;
      }
      stop() {
        clearInterval(this.updateInterval);
      }
      _updateTimeEstimate() {
        if (
          ((this.realProgress = super.getProgressPercentage()),
          this.realProgress >= 100)
        ) {
          (this.estimatedProgress = 100), this.stop();
          return;
        }
        let t = new Date() - this.startTime;
        this.timeEstimate = (100 * t) / this.realProgress;
      }
      _updateProgressEstimate() {
        if (this.realProgress === 100) return;
        let r = (new Date() - this.startTime) / this.timeEstimate,
          s = r < 0.8 ? r * 100 : (1 - Math.exp(-2 * r)) * 100;
        s > this.estimatedProgress &&
          ((this.estimatedProgress = s),
          this.emit("progress", this.getProgressSummary()));
      }
    };
  bv.exports = Sv;
});
var hn = w((z_e, Iv) => {
  var q8 = require("child_process"),
    Rp = Ce(),
    Tv = require("bluebird"),
    F8 = [
      "/var/lib/dpkg/lock",
      "/var/lib/apt/lists/lock",
      "/var/cache/apt/archives/lock",
      "/var/lib/dpkg/lock-frontend",
    ],
    L8 = async (e) =>
      new Tv((t, r) => {
        let s = q8.execFile(
          "/usr/bin/sudo",
          ["-n", "/usr/bin/lsof", e],
          (a, o, n) => {
            n && n.includes("No such file or directory") && t(!1),
              !o && !n && s.exitCode === 1 && t(!1),
              t(!0);
          }
        );
      });
  Iv.exports = async (e, t) => {
    let s = (await Tv.map(F8, async (a) => [a, await L8(a)])).filter(
      (a) => a[1]
    );
    if (s.length > 0)
      try {
        await Rp("sudo -n killall --older-than 5m apt-get");
      } catch (a) {
        return a && a.message.includes("no process found")
          ? (t.warn("No process found trying to kill stale apt-get", a), !0)
          : (t.error("Failed to kill stale apt-get processes", a), !1);
      } finally {
        try {
          await Rp("sudo -n dpkg --configure -a");
        } catch (a) {
          t.error("Failed to reconfigure dpkg", a);
        }
      }
    else
      try {
        await Rp("sudo -n dpkg --configure -a");
      } catch (a) {
        t.error("Failed to reconfigure dpkg", a);
      }
    return !!s.length;
  };
});
var Cv = w((J_e, vv) => {
  var { publish: Av } = require("handoff"),
    { getApp: M8 } = H(),
    { getReleaseNotesURL: x8 } = (Ue(), We),
    { DatabaseTable: $8 } = (Re(), Hs);
  vv.exports = async (e, t) => {
    try {
      e.info(
        `Creating application updated notification for "${t.displayName}"`
      );
      let r = await M8(t.name),
        s = x8(t.name, r.version);
      await Av("notifications.add", {
        eventId: "applicationUpdated",
        eventData: {
          application: { text: t.displayName },
          applicationId: { text: t.name },
          version: { text: r.version },
          action: { url: s },
        },
        push: {
          message: {
            title: `UniFi ${t.displayName} Updated`,
            body: `UniFi ${t.displayName} has been updated to ${r.version}!`,
          },
        },
        email: {
          app: t.name,
          vars: {
            application: t.name,
            application_name: t.displayName,
            application_version: r.version,
          },
        },
      }),
        await (await Av("db.getClient"))($8.NOTIFICATIONS)
          .where({ event_id: "applicationUpdateAvailable" })
          .whereRaw("event_data -> 'application' ->> 'text' = ?", [
            t.displayName,
          ])
          .del();
    } catch (r) {
      e.error("Failed to create application updated notification", r);
    }
  };
});
var Rv = w((X_e, Nv) => {
  var { publish: B8 } = require("handoff"),
    { DeviceStatus: V8 } = (Fo(), Eg),
    { getDeviceList: j8 } = H(),
    G8 = 10 * 60 * 1e3,
    H8 = "multiple",
    Dv = new Map(),
    W8 = (e, t) => {
      let r = async () =>
          ((await j8())[e.name] || []).filter((c) => c.status === V8.ONLINE),
        s = () => {
          let o = Dv.get(e.name);
          o && clearTimeout(o);
        },
        a = null;
      return {
        start: async () => {
          try {
            s(), (a = await r());
          } catch (o) {
            t.error("Failed to start offline devices tracer:", o);
          }
        },
        end: () => {
          if (a === null) {
            t.warn(
              `Starting point not defined for controller ${e.name} offline devices tracer.`
            );
            return;
          }
          let o = setTimeout(async () => {
            try {
              let n = await r(),
                i = a.filter((c) => !n.some((d) => d.mac === c.mac));
              i.length > 0 &&
                (t.warn(
                  `Controller ${e.name} devices still not online after timeout:`,
                  i.map(({ mac: c, model: d }) => ({ mac: c, model: d }))
                ),
                await B8(
                  "legacyTrace",
                  {
                    type: "fw_devices_offline",
                    namespace: "unifi:core:analytics:event",
                    payload: {
                      event_name: "fw_devices_offline",
                      event_type: i.length > 1 ? H8 : i[0].model,
                    },
                  },
                  { withSource: !1 }
                ));
            } catch (n) {
              t.error("Failed to trace offline devices:", n);
            }
          }, G8);
          Dv.set(e.name, o);
        },
      };
    };
  Nv.exports = W8;
});
var Pv,
  cs,
  Uv,
  kv,
  Ka,
  Ya,
  Ov,
  qv,
  Fv,
  Lv,
  Mv,
  xv = x(() => {
    (Pv = g(require("child_process"))), (cs = g(require("handoff")));
    yv();
    se();
    Uv = g(Ce());
    qt();
    kv = g(_v());
    jt();
    (Ka = g(Z())), (Ya = g(H()));
    Zt();
    (Ov = g(hn())),
      (qv = g(Cv())),
      (Fv = g(Rv())),
      (Lv = class extends hv {
        async handler(t, r) {
          if (!(await (0, Ya.getSystemIsStarted)()))
            throw new _e.default(
              Le.default.CONSOLE_NOT_READY({
                message: `Failed to update "${t.name}" application, system is still starting up`,
              })
            );
          this.logger.info(`Starting update for ${t.name}`);
          try {
            await (0, cs.publish)("redux.dispatch", Ka.UPDATE_APP, {
              name: t.name,
              updates: { installState: "updating", updateProgress: 0 },
            });
            try {
              await (0, Uv.default)("sudo -n apt-get update");
            } catch (i) {
              this.logger.warn("apt update failed:", i);
            }
            let s = (0, Fv.default)(t, this.logger);
            await s.start();
            let a = new kv.default(
              [
                { step: "download", started: !0, duration: 15 },
                { step: "read", duration: 5 },
                { step: "install", duration: 80 },
              ],
              1e3 * 60 * 5
            );
            a.on("progress", ({ progress: i }) => {
              let c = Math.ceil(i);
              (0, cs.publish)("redux.dispatch", Ka.UPDATE_APP, {
                name: t.name,
                updates: { updateProgress: c },
              }),
                this.setProgress(c);
            });
            try {
              await new Promise((i, c) => {
                let d = (0, Pv.spawn)("sudo", [
                    "DEBIAN_FRONTEND=noninteractive",
                    "apt-get",
                    "install",
                    "-q=0",
                    `${t.aptPackage}${r ? `=${r}` : ""}`,
                    "-y",
                    "--show-progress",
                  ]),
                  u = new RegExp(`.*${t.aptPackage}.*\\s(\\d{1,3})%]`),
                  p = /^Fetched \d/m,
                  l = /^\(Reading\D*(\d+)%/m,
                  f = /^Progress\D*(\d+)%/m;
                d.on("error", (m) => (a.stop(), c(m))),
                  d.on(
                    "exit",
                    (m, E) => (
                      a.stop(),
                      m && m > 0
                        ? c(
                            new Error(
                              `Update install failed with non-zero exit code ${m}`
                            )
                          )
                        : E !== null
                        ? c(
                            new Error(
                              `Update install terminated by signal ${E}`
                            )
                          )
                        : i()
                    )
                  ),
                  d.stdout.on("data", (m) => {
                    let E = m.toString(),
                      y = u.exec(E);
                    if (y) {
                      let A = y[1];
                      if (!A) return;
                      a.setStepProgressPercentage("download", {
                        percentage: parseInt(A),
                      });
                      return;
                    }
                    if (E.match(p)) {
                      a.setStepProgressPercentage("download", {
                        completed: !0,
                      });
                      return;
                    }
                    let S = E.match(l);
                    if (S) {
                      let A = parseInt(S[1]);
                      a.setStepProgressPercentage("read", {
                        percentage: A,
                        completed: A === 100,
                      });
                      return;
                    }
                    let D = E.match(f);
                    if (D) {
                      let A = parseInt(D[1]);
                      a.setStepProgressPercentage("install", {
                        percentage: A,
                        completed: A === 100,
                      });
                    }
                  }),
                  d.stderr.on("data", (m) => {
                    this.logger.warn(m.toString());
                  });
              });
            } catch (i) {
              if (
                (this.logger.warn(
                  `Failed to update ${t.name}, cleaning up locks and trying again.`,
                  i
                ),
                await (0, Ov.default)(this.config, this.logger))
              )
                return (
                  this.logger.info("Lock cleanup successful, retrying..."),
                  this.retry()
                );
              this.logger.error(
                `Couldn't clean up locks, application update failed for ${t.name}`,
                i
              );
              let c = {
                eventId: "applicationUpdateFailed",
                eventData: { application: { text: t.displayName } },
                push: {
                  message: {
                    title: `UniFi ${t.displayName} Update Failed`,
                    body: `${t.displayName} failed to update because your console couldn't communicate with the UniFi Update service. Please ensure that your internet connection is stable and try again.`,
                  },
                },
                email: {
                  vars: {
                    application: t.name,
                    application_name: t.displayName,
                  },
                },
              };
              throw (
                ((0, cs.publish)("notifications.add", c).catch((d) =>
                  this.logger.error(
                    `Failed to create "${t.displayName} application update failed" notification:`,
                    d
                  )
                ),
                i)
              );
            }
            await (0, cs.publish)("redux.dispatch", Ka.UPDATE_APP, {
              name: t.name,
              updates: { updateProgress: 100 },
            });
            let o = await (0, Ya.getFWReleaseChannel)();
            await (0, cs.publish)("redux.dispatch", Ka.UPDATE_APP, {
              name: t.name,
              updates: { updateAvailable: null, installState: "installed" },
              currentReleaseChannel: o,
            }),
              ai(
                {
                  eventName: ts.APPLICATION_UPDATE,
                  success: !0,
                  triggeredBy: this.requestingUserId ? "user" : "system",
                  params: { target_version: r },
                },
                t.name
              ).catch((i) =>
                this.logger.error(
                  'Failed to send "application_update" trace event:',
                  i
                )
              ),
              await (0, qv.default)(this.logger, t),
              s.end(),
              this.logger.info(`Application ${t.name} successfully updated`),
              (await (0, Ya.getDisabledApps)()).includes(t.name)
                ? await (0, cs.publish)("controllers.disable", t.name, {
                    queued: !1,
                  })
                : await (0, cs.publish)("controllers.enable", t.name, {
                    queued: !1,
                    source: "api",
                  });
          } catch (s) {
            throw (
              (this.logger.error(`Failed to update ${t.name}:`, s),
              ai(
                {
                  eventName: ts.APPLICATION_UPDATE,
                  success: !1,
                  triggeredBy: this.requestingUserId ? "user" : "system",
                  errorMessage: Te(s),
                  params: { target_version: r },
                },
                t.name
              ).catch((a) =>
                this.logger.error(
                  'Failed to send "application_update" trace event:',
                  a
                )
              ),
              (0, cs.publish)("redux.dispatch", Ka.UPDATE_APP, {
                name: t.name,
                updates: { installState: "updateFailed" },
              }).catch((a) =>
                this.logger.error("Failed to set update failed state:", a)
              ),
              s)
            );
          }
        }
      }),
      (Mv = Lv);
  });
var K8,
  $v,
  Bv = x(() => {
    xv();
    (K8 =
      (e, t) =>
      async (r, s, { userId: a } = {}) =>
        new Mv(
          e,
          t,
          { action: `updateApplication.${r.name}`, queued: !0, userId: a },
          r,
          s
        )),
      ($v = K8);
  });
function J8(e) {
  switch (e) {
    case "internal":
      return [z8, Vv, kp, hc, yn];
    case "alpha":
      return [Vv, kp, hc, yn];
    case "beta":
      return [kp, hc, yn];
    case "release-candidate":
      return [hc, yn];
    default:
      return [yn];
  }
}
function X8(e, t) {
  let r = [];
  for (let s of e) r.push(`deb https://${s.host}/ ${t} ${s.component}`);
  return (0, Pp.outputFile)(
    Up,
    r.join(`
`)
  );
}
function Q8(e, t) {
  let r = [];
  for (let s of e)
    s.includeCreds &&
      r.push(`machine ${s.host} login ${t.username} password ${t.password}`);
  return (0, Pp.outputFile)(
    Y8,
    r.join(`
`)
  );
}
var Pp,
  Up,
  Y8,
  z8,
  Vv,
  kp,
  hc,
  yn,
  Z8,
  Op,
  jv = x(() => {
    (Pp = g(require("fs-extra"))),
      (Up = "/etc/apt/sources.list.d/ubiquiti.list"),
      (Y8 = "/etc/apt/auth.conf.d/ubiquiti.conf"),
      (z8 = {
        host: "apt-internal.artifacts.ui.com",
        component: "internal",
        includeCreds: !0,
      }),
      (Vv = {
        host: "apt-alpha.artifacts.ui.com",
        component: "alpha",
        includeCreds: !0,
      }),
      (kp = {
        host: "apt-beta.artifacts.ui.com",
        component: "beta",
        includeCreds: !0,
      }),
      (hc = {
        host: "apt-release-candidate.artifacts.ui.com",
        component: "release-candidate",
        includeCreds: !0,
      }),
      (yn = { host: "apt.artifacts.ui.com", component: "release" });
    (Z8 = async (e, t, r = void 0) => {
      let s = J8(e),
        a = [X8(s, t)];
      r && a.push(Q8(s, r)), await Promise.all(a);
    }),
      (Op = Z8);
  });
var Gv,
  yc,
  Hv,
  Wv,
  wc,
  eY,
  tY,
  Kv,
  Yv = x(() => {
    (Gv = g(require("fs-extra"))),
      (yc = g(require("handoff"))),
      (Hv = g(require("jsonwebtoken")));
    qt();
    (Wv = g(Z())), (wc = g(H()));
    jv();
    (eY = 60 * 60 * 1e3),
      (tY = (e) => {
        try {
          let t = (0, Hv.decode)(e, { json: !0 })?.exp;
          if (t) return t * 1e3;
        } catch {}
        return Date.now() + eY;
      }),
      (Kv =
        (e, t) =>
        async (r = !1) => {
          let s = (await (0, wc.getAptCreds)())?.expiry || 0;
          if (!r && Date.now() < s) return;
          t.info("Updating apt creds...");
          let { debianCodename: a } = await (0, yc.publish)("system.hardware");
          try {
            let { username: o, password: n } = await (0, yc.publish)(
                "cloud.aptCreds"
              ),
              i = tY(n);
            await (0, yc.publish)("redux.dispatch", Wv.UPDATE_APT_CREDENTIALS, {
              expiry: i,
            });
            let c = await (0, wc.getFWReleaseChannel)();
            await Op(c, a, { username: o, password: n });
          } catch (o) {
            (await Gv.default.pathExists(Up)) ||
              (await Op("release", a).catch((n) => {
                t.error("Failed to initialize default source list", n);
              })),
              t.warn("Unable to write apt creds files", Te(o));
          }
        });
  });
var qp,
  zv,
  rY,
  qs,
  wn = x(() => {
    (qp = g(require("handoff"))),
      (zv = g(require("lodash"))),
      (rY = async (e, t) => {
        let { applicationConfig: r, userId: s, action: a } = t;
        try {
          let o = await (0, qp.publish)("uum.getUser", s);
          if (!o) throw new Error(`Failed to retrieve user with user ID ${s}`);
          let n = {
            eventId: "applicationAction",
            eventData: {
              application: { text: r.displayName },
              user: { text: o.full_name },
              action: { text: a },
            },
            push: {
              message: {
                title: `UniFi ${r.displayName} ${(0, zv.capitalize)(a)}`,
                body: `${r.displayName} has been ${a} by ${o.full_name}`,
              },
            },
            email: {
              vars: {
                action: a,
                user_name: o.full_name,
                application: r.name,
                application_name: r.displayName,
              },
            },
          };
          await (0, qp.publish)("notifications.add", n);
        } catch (o) {
          e.error(`Failed to create "${r.displayName} ${a}" notification:`, o);
        }
      }),
      (qs = rY);
  });
var Or,
  gn = x(() => {
    (function (a) {
      (a.STARTED = "started"),
        (a.STOPPED = "stopped"),
        (a.INSTALLED = "installed"),
        (a.UNINSTALLED = "uninstalled");
    })(Or || (Or = {}));
  });
var Fp = w((mTe, Jv) => {
  Re();
  var { publish: sY } = require("handoff"),
    aY = require("bluebird"),
    { getApps: oY } = H();
  Jv.exports = async (e) => {
    let [t, { maxRunningApplications: r }] = await aY.all([
      oY(),
      sY("system.device"),
    ]);
    return r
      ? t.filter(({ name: a, isRunning: o, state: n }) =>
          a === e.name
            ? !1
            : !!(o || [ot.ACTIVATING, ot.INSTALLING].includes(n))
        ).length >= r
      : !1;
  };
});
var sC = w((wTe, rC) => {
  se();
  var Xv = g(H());
  wn();
  gn();
  var { publish: sa } = require("handoff"),
    nY = hn(),
    Qv = Ce(),
    { UPDATE_APP: Lp } = Z(),
    iY = Fp(),
    { traceApplicationEvent: Zv } = (jt(), ur),
    { TraceEvent: eC } = (Zt(), rs),
    tC = async (e, t, r, s, a) => {
      let { version: o = null, source: n, userId: i } = a;
      if (!(await (0, Xv.getSystemIsStarted)()))
        throw new _e.default(
          Le.default.CONSOLE_NOT_READY({
            message: `Failed to install "${r.name}" application, system is still starting up`,
          })
        );
      try {
        sa("redux.dispatch", Lp, {
          name: r.name,
          updates: { installState: "installing" },
        });
        try {
          await Qv("sudo -n apt-get update");
        } catch (c) {
          t.warn("Failed to update apt:", c.message);
        }
        if (
          (await Qv(
            `sudo -n apt-get install ${r.aptPackage}${o ? `=${o}` : ""} -y`
          ),
          Zv(
            {
              eventName: eC.APPLICATION_INSTALL,
              success: !0,
              triggeredBy: n === "api" ? "user" : "system",
              params: { target_version: o | "latest" },
            },
            r.name
          ).catch((c) =>
            t.error('Failed to send "application_install" trace event:', c)
          ),
          sa("redux.dispatch", Lp, {
            name: r.name,
            updates: { installState: "installed", isInstalled: !0 },
          }),
          i && qs(t, { applicationConfig: r, userId: i, action: Or.INSTALLED }),
          await iY(s))
        )
          try {
            await sa("controllers.disable", s.name, a);
          } catch (c) {
            t.error(
              `Failed to disable ${s.name} (tried to stop after installing as max running application limit is already reached):`,
              c
            );
          }
        t.info(`Application ${s.name} successfully installed`),
          await sa("controllers.enable", s.name, { queued: !1, source: "api" });
      } catch (c) {
        if (
          (t.warn(
            `Failed to install ${r.name}, cleaning up locks and trying again.`,
            c
          ),
          await nY(e, t))
        )
          return new Promise((d, u) => {
            setTimeout(
              () => sa("controllers.install", s.name, a).then(d).catch(u),
              2e3
            );
          });
        throw (
          (Zv(
            {
              eventName: eC.APPLICATION_INSTALL,
              success: !1,
              triggeredBy: n === "api" ? "user" : "system",
              errorMessage: c.message,
              params: { target_version: o | "latest" },
            },
            r.name
          ).catch((d) =>
            t.error('Failed to send "application_install" trace event:', d)
          ),
          sa("redux.dispatch", Lp, {
            name: r.name,
            updates: { installState: "installFailed", isInstalled: !1 },
          }),
          t.error(
            `Couldn't clean up locks, controller install failed for ${r.name}`,
            c
          ),
          new Error(`Installation failed for controller ${r.name}`))
        );
      }
    },
    cY = (e, t) => async (r, s, a) => {
      a.queued
        ? await sa(
            "taskQueue.add",
            () => tC(e, t, r, s, a),
            "installApplication"
          )
        : await tC(e, t, r, s, a);
    };
  rC.exports = cY;
});
var cC = w((bTe, iC) => {
  se();
  var aC = g(H());
  wn();
  gn();
  var { publish: En } = require("handoff"),
    uY = hn(),
    dY = Ce(),
    { UPDATE_APP: gc } = Z(),
    { traceApplicationEvent: oC } = (jt(), ur),
    { TraceEvent: nC } = (Zt(), rs),
    lY =
      (e, t) =>
      async (r, s, a = {}) => {
        if (!a.force && s.required)
          throw new Error(`${r.name} is required, cannot uninstall`);
        if (!(await (0, aC.getSystemIsStarted)()))
          throw new _e.default(
            Le.default.CONSOLE_NOT_READY({
              message: `Failed to uninstall "${r.name}" application, system is still starting up`,
            })
          );
        try {
          En("redux.dispatch", gc, {
            name: r.name,
            updates: { installState: "uninstalling" },
          }),
            await dY(`sudo -n apt-get purge ${r.aptPackage} -y`),
            oC(
              {
                eventName: nC.APPLICATION_UNINSTALL,
                success: !0,
                triggeredBy: a.source === "api" ? "user" : "system",
              },
              r.name
            ).catch((n) =>
              t.error('Failed to send "application_uninstall" trace event:', n)
            ),
            En("redux.dispatch", gc, {
              name: r.name,
              updates: { installState: "uninstalled", isInstalled: !1 },
            }),
            r.name === "uid-agent" &&
              En("redux.dispatch", gc, {
                name: "access",
                updates: { adoptionDisabled: !1 },
              }).catch((n) => t.error(n));
          let { userId: o } = a;
          o &&
            qs(t, { applicationConfig: r, userId: o, action: Or.UNINSTALLED });
        } catch (o) {
          if (
            (t.warn(
              `Failed to purge ${r.aptPackage}, going to cleanup locks`,
              o
            ),
            await uY(e, t))
          ) {
            await En("controllers.uninstall", s.name);
            return;
          }
          throw (
            (oC(
              {
                eventName: nC.APPLICATION_UNINSTALL,
                success: !1,
                triggeredBy: a.source === "api" ? "user" : "system",
                errorMessage: o.message,
              },
              r.name
            ).catch((n) =>
              t.error('Failed to send "application_uninstall" trace event:', n)
            ),
            En("redux.dispatch", gc, {
              name: r.name,
              updates: { installState: "uninstallFailed" },
            }),
            t.error(
              `Couldn't clean up locks, controller uninstall failed for ${r.name}`,
              o
            ),
            new Error(`Uninstall failed for controller ${r.name}`))
          );
        }
      };
  iC.exports = lY;
});
var lC = w((vTe, dC) => {
  se();
  Re();
  wn();
  gn();
  var { publish: pY } = require("handoff"),
    uC = Ce(),
    { ENABLE_APP: mY } = Z(),
    { getSystemIsStarted: fY } = H(),
    { traceApplicationEvent: hY } = (jt(), ur),
    { TraceEvent: yY } = (Zt(), rs),
    wY = Fp();
  dC.exports =
    (e, t) =>
    async (r, s, { source: a, userId: o } = {}) => {
      try {
        if (!(await fY()))
          throw new _e.default(
            Le.default.CONSOLE_NOT_READY({
              message: `Failed to enable "${r.name}" application, system is still starting up`,
            })
          );
        if (s.installState === "updating")
          throw new Error(`Failed to enable ${r.name}, it's being updated`);
        if (s.state === ot.ACTIVATING) {
          t.info(
            `${r.name} is already starting, ignoring repeated enable request`
          );
          return;
        }
        if (await wY(s))
          throw new Error(
            `Failed to enable ${r.name}, max running application limit reached`
          );
        await uC(`sudo -n systemctl enable ${r.serviceName}`),
          await uC(`sudo -n systemctl start ${r.serviceName}`),
          a === "api" &&
            (pY("redux.dispatch", mY, { name: r.name }),
            o &&
              qs(t, { applicationConfig: r, userId: o, action: Or.STARTED }));
      } catch (n) {
        throw (
          (hY(
            {
              eventName: yY.APPLICATION_START,
              success: !1,
              triggeredBy: a === "api" ? "user" : "system",
              errorMessage: n.message,
            },
            r.name
          ).catch((i) =>
            t.error('Failed to send "application_start" trace event:', i)
          ),
          n)
        );
      }
    };
});
var hC = w((RTe, fC) => {
  se();
  wn();
  gn();
  var { publish: pC } = require("handoff"),
    mC = Ce(),
    { DISABLE_APP: gY, ENABLE_APP: EY } = Z(),
    { getSystemIsStarted: SY } = H();
  fC.exports =
    (e, t) =>
    async (r, s, { source: a, userId: o } = {}) => {
      if (!(!s && a === "ucore") && s.required)
        throw new Error(`${r.name} is required, cannot disable`);
      if (!(await SY()))
        throw new _e.default(
          Le.default.CONSOLE_NOT_READY({
            message: `Failed to disable "${r.name}" application, system is still starting up`,
          })
        );
      try {
        a === "api" && (await pC("redux.dispatch", gY, { name: r.name })),
          await mC(`sudo -n systemctl stop ${r.serviceName}`),
          await mC(`sudo -n systemctl disable ${r.serviceName}`),
          o && qs(t, { applicationConfig: r, userId: o, action: Or.STOPPED });
      } catch (n) {
        throw (a === "api" && pC("redux.dispatch", EY, { name: r.name }), n);
      }
    };
});
var EC = w((PTe, gC) => {
  var { publish: yC } = require("handoff"),
    { get: wC } = require("lodash"),
    {
      getAvailableUpdates: bY,
      getControllers: _Y,
      getFWReleaseChannel: TY,
    } = H(),
    { cleanApplicationVersion: IY } = (Ue(), We),
    { DatabaseTable: AY } = (Re(), Hs);
  gC.exports = async (e, t, r) => {
    try {
      let s = "applicationUpdateAvailable",
        [a, o, n, i] = await Promise.all([
          bY(),
          TY(),
          _Y(),
          yC("db.getClient"),
        ]),
        c = n.filter((u) => u.isRunning).map((u) => u.name),
        d = t.reduce((u, p) => {
          let l = r[p.aptPackage];
          return (
            (l === null ||
              l !== wC(a, `${o}.${p.name}`) ||
              !c.includes(p.name)) &&
              u.push(p.displayName),
            u
          );
        }, []);
      d.length &&
        (await i(AY.NOTIFICATIONS)
          .where({ event_id: s })
          .whereRaw(
            `event_data -> 'application' ->> 'text' IN (${d
              .map((u) => `'${u}'`)
              .join(",")})`
          )
          .del()),
        await Promise.all(
          t.map(async (u) => {
            if (!c.includes(u.name)) return;
            let p = r[u.aptPackage];
            if (p && p !== wC(a, `${o}.${u.name}`)) {
              let l = IY(p);
              e.info(
                `Creating available update notification for application "${u.displayName}" (version: ${p})`
              ),
                yC("notifications.add", {
                  eventId: s,
                  eventData: {
                    application: { text: u.displayName },
                    applicationId: { text: u.name },
                    version: { text: l },
                  },
                  email: {
                    vars: {
                      application: u.name,
                      application_name: u.displayName,
                      application_version: l,
                    },
                  },
                  push: {
                    app: u.name,
                    message: {
                      title: `UniFi ${u.displayName} Update Available`,
                      body: `UniFi ${u.displayName} is ready to update to ${l}!`,
                    },
                  },
                }).catch((f) =>
                  e.error(
                    `Failed to create update available notification for application "${u.name}"`,
                    f
                  )
                );
            }
          })
        );
    } catch (s) {
      e.error("Failed to create application update notifications", s);
    }
  };
});
var AC = w((qTe, IC) => {
  se();
  qt();
  Ns();
  var { publish: Sn } = require("handoff"),
    SC = require("bluebird"),
    Mp = Ce(),
    { BATCH_UPDATE_APPS: xp } = Z(),
    { UPDATE_APP: vY } = Z(),
    {
      getControllers: bC,
      getFWReleaseChannel: CY,
      getSystemIsStarted: DY,
    } = H(),
    NY = hn(),
    RY = EC(),
    { traceUCoreEvent: _C } = (jt(), ur),
    { TraceEvent: TC } = (Zt(), rs),
    PY = async (e) => {
      try {
        return await Mp(`apt show ${e} | grep Version`), !0;
      } catch {
        return !1;
      }
    },
    UY = async (e) => {
      let t = await bC();
      SC.each(t, async (r) => {
        if (!r.required) {
          let s = e.controllers[r.name] && e.controllers[r.name].aptPackage,
            a = s && (await PY(s));
          await Sn("redux.dispatch", vY, {
            name: r.name,
            updates: { installable: a },
          });
        }
      });
    },
    kY = (e, t, r, s) => async () => {
      if (!(await DY()))
        throw new _e.default(
          Le.default.CONSOLE_NOT_READY({
            message:
              "Failed to check for application updates, system is still starting up",
          })
        );
      let { userId: a } = s;
      try {
        let o = r.reduce((l, f) => ((l[f.aptPackage] = null), l), {});
        await Sn("controllers.updateAptCreds", !1);
        let [n, i] = await SC.all([bC(), CY()]);
        Sn(
          "redux.dispatch",
          xp,
          r.map((l) => ({
            name: l.name,
            updates: { installState: "checking" },
          }))
        ),
          await Mp("sudo -n apt-get update").catch((l) => t.warn(l.message)),
          await UY(e);
        let c = r.map((l) => l.aptPackage),
          d = "";
        try {
          d = (await Mp(`sudo -n apt list --upgradeable ${c.join(" ")}`))
            .stdout;
        } catch (l) {
          t.warn("Failed to check upgradeable", l.message);
        }
        let u = /(\S+)\/(\S+)\s(\S+)(?:\s)(\S+)/gi,
          p;
        for (; (p = u.exec(d)); ) {
          let l = p[1],
            f = p[3];
          o[l] = f;
        }
        return (
          await RY(t, r, o),
          _C({
            eventName: TC.APPLICATION_UPDATE_CHECK,
            success: !0,
            triggeredBy: a ? "user" : "system",
          }).catch((l) => t.error("Failed to send trace event:", l)),
          Sn(
            "redux.dispatch",
            xp,
            r.map((l) => {
              let f = n.find((m) => m.name === l.name);
              return {
                name: l.name,
                updates: {
                  installState: f.installState,
                  updateAvailable: o[l.aptPackage],
                },
                currentReleaseChannel: i,
              };
            })
          ).catch((l) => t.error("Failed to update application state:", Te(l))),
          o
        );
      } catch (o) {
        throw (
          (_C({
            eventName: TC.APPLICATION_UPDATE_CHECK,
            success: !1,
            triggeredBy: a ? "user" : "system",
            errorMessage: o.message,
          }).catch((n) => t.error("Failed to send trace event:", n)),
          Sn(
            "redux.dispatch",
            xp,
            r.map((n) => ({
              name: n.name,
              updates: { installState: n.installState },
            }))
          ),
          o)
        );
      }
    },
    OY = (e, t) => (r, s) =>
      Mt(
        kY(e, t, r, s),
        async (a) => (
          t.error("Retrying failed check for updates, error:", Te(a)),
          await NY(e, t),
          !0
        ),
        { maxAttempts: 3, interval: 5e3, backoff: 2, logger: t }
      );
  IC.exports = OY;
});
var CC = w((FTe, vC) => {
  var qY = Ce();
  vC.exports = (e, t) => async () => {
    try {
      t.info("Cleaning apt cache..."), await qY("sudo -n apt-get clean");
    } catch (r) {
      t.warn("Failed to clean apt cache", r);
    }
  };
});
var NC = w((LTe, DC) => {
  var FY = Ce();
  DC.exports = (e, t) => async (r) => {
    let { stdout: s } = await FY("dpkg --list | awk '{print $2, $3}'"),
      a = s
        .trim()
        .split(
          `
`
        )
        .map((o) => o.trim().split(" "))
        .find(([o, n]) => o === r);
    return a ? a[1] : null;
  };
});
var PC = w((MTe, RC) => {
  var LY = Ce();
  RC.exports = () => (e, t, r) =>
    LY(`sudo -n systemctl set-property ${e.serviceName} ${t} ${r}`);
});
var kC = w((BTe, UC) => {
  Bv();
  Yv();
  var { makeQueued: $p } = (_l(), bl),
    MY = sC(),
    xY = cC(),
    $Y = lC(),
    BY = hC(),
    VY = AC(),
    jY = CC(),
    GY = NC(),
    HY = PC();
  UC.exports = (e, t) => ({
    install: MY(e, t),
    uninstall: $p(xY(e, t), "uninstallApplication"),
    enable: $Y(e, t),
    disable: BY(e, t),
    update: $v(e, t),
    checkForUpdates: $p(VY(e, t), "checkForApplicationUpdates"),
    cleanAptCache: $p(jY(e, t), "cleanAptCache"),
    getAptPackageVersion: GY(e, t),
    updateCreds: Kv(e, t),
    setProperty: HY(e, t),
  });
});
var $C = w((GTe, xC) => {
  var OC = g(require("redux-saga/effects"));
  OA();
  YA();
  var qC = require("dbus-next"),
    Ec = require("bluebird"),
    { publish: us, subscribe: qr, unsubscribe: WY } = require("handoff"),
    { v4: KY } = require("uuid"),
    YY = require("cron"),
    zY = require("node-cache"),
    { fetch: JY } = ie(),
    Sc = as(),
    {
      SET_FIRMWARE_RELEASE_CHANNEL: XY,
      UPDATE_APP: Bp,
      UPDATE_SYSTEM_IS_STARTED: QY,
    } = Z(),
    {
      getApps: FC,
      getControllers: LC,
      getDisabledApps: ZY,
      getFWReleaseChannel: ez,
      getTimezone: tz,
      getSystemIsStarted: rz,
    } = H(),
    { AppError: sz, errorCodes: az } = (se(), me),
    MC = Ce(),
    { SUBSCRIPTION_PRIORITY: oz } = Ko(),
    nz = sv(),
    iz = lv(),
    cz = kC(),
    uz = 300;
  qC.setBigIntCompat(!0);
  xC.exports = async (e, t) => {
    let {
        enable: r,
        disable: s,
        install: a,
        uninstall: o,
        update: n,
        checkForUpdates: i,
        cleanAptCache: c,
        getAptPackageVersion: d,
        updateCreds: u,
        setProp: p,
      } = cz(e, t),
      l = { enable: r, disable: s, install: a, uninstall: o },
      f = Object.keys(e.controllers).map((b) =>
        v({ name: b }, e.controllers[b])
      ),
      m = null,
      E = new zY({ stdTTL: uz }),
      y = (
        (b = []) =>
        async (T) => {
          if (!(await rz())) {
            t.info("System not ready, not auto starting applications.");
            return;
          }
          try {
            let M = await ZY();
            await Ec.all(
              T.filter(
                ({ name: q, type: k, isInstalled: I, isRunning: _ }) =>
                  k === "controller" &&
                  !M.includes(q) &&
                  !b.includes(q) &&
                  I &&
                  !_
              ).map(
                ({ name: q }) => (
                  b.push(q),
                  t.info(`Autostarting ${q} application`),
                  us("controllers.enable", q)
                )
              )
            );
          } catch (M) {
            t.error(`Failed to autostart application on startup ${M.message}`);
          }
        }
      )(),
      h = async () => {
        let b;
        try {
          let { stdout: T } = await MC(
            "sudo -n systemctl is-system-running --wait"
          );
          b = T;
        } catch (T) {
          b = T.stdout;
        }
        t.info(`The system is started, state: ${b}`),
          await us("redux.dispatch", QY, !0),
          await y(await FC());
      },
      S = Object.keys(l)
        .map((b) =>
          qr(
            `controllers.${b}`,
            async (
              T,
              M,
              {
                source: q = "ucore",
                version: k = null,
                force: I = !1,
                queued: _ = !0,
                userId: P,
              } = {}
            ) => {
              let U = KY();
              t.info(
                `Controller action called ${U}, ${b}, ${M}, ${q}, ${k}, force=${I}, queued=${_}`
              );
              try {
                let j = (await FC()).find((F) => F.name === M),
                  K = f.find((F) => F.name === M),
                  J = await l[b](K, j, {
                    source: q,
                    version: k,
                    force: I,
                    queued: _,
                    userId: P,
                  });
                return t.info(`${b} succeeded for ${M} (id: ${U})`), J;
              } catch (j) {
                throw (b === "enable" || b === "disable") &&
                  j &&
                  j.message.includes("service is masked")
                  ? (t.warn(`${b} failed for ${M}, service is masked`),
                    new sz(
                      az.FAILED_TO_MANAGE_MASKED_SERVICE({
                        message: `${b} failed for ${M}, service is masked`,
                      }),
                      j
                    ))
                  : (t.error(`${b} failed for ${M}`, j), j);
              }
            }
          )
        )
        .concat([
          qr("controllers.checkForUpdates", async (b, T, M = {}) => {
            try {
              let q = await ez();
              t.info(
                `Checking application updates on channel "${q}" for ${T.join(
                  ", "
                )}`
              );
              let k = f.filter(({ name: _ }) => T.includes(_) && !E.has(_));
              if (k.length) {
                let _ = await i(k, M);
                Object.keys(_).forEach((P) => {
                  let U = f.find((j) => j.aptPackage === P);
                  E.set(U.name, _[P]);
                });
              }
              return T.reduce((_, P) => {
                let { aptPackage: U } = e.controllers[P];
                return (_[U] = E.get(P)), _;
              }, {});
            } catch (q) {
              throw (
                (t.error(
                  `Application update check failed for ${T.join(", ")}`,
                  q
                ),
                q)
              );
            }
          }),
          qr("controllers.setProperty", async (b, T, M, q) => {
            try {
              return p(T, M, q);
            } catch (k) {
              t.error(`Controller set ${M} to ${q} for ${T} failed`, k);
            }
          }),
          qr(
            "controllers.update",
            async (b, { applicationName: T, version: M, context: q = {} }) => {
              try {
                t.info(
                  `Updating application ${T} to ${M || "the latest version"}`
                );
                let k = f.find((_) => _.name === T),
                  I = (await LC()).find((_) => _.name === k.name);
                if (I.version === M) {
                  t.info(`Application "${T}" is already updated to "${M}"`);
                  return;
                }
                if (["updating", "updatePending"].includes(I.installState)) {
                  t.warn("Application update already in progress");
                  return;
                }
                if (!I.updateAvailable) {
                  t.info(`Update requested for ${k.name}, no update available`);
                  return;
                }
                return (
                  await us("redux.dispatch", Bp, {
                    name: k.name,
                    updates: {
                      installState: "updatePending",
                      updateProgress: 0,
                    },
                  }),
                  n(k, M, q)
                );
              } catch (k) {
                throw (t.error(`Application update failed for ${T}`, k), k);
              }
            },
            oz.MID
          ),
          qr("controllers.allowedActions", (b) => Object.keys(l)),
          qr("controllers.fetchManifest", async (b, T) => {
            let M = f.find((I) => I.name === T),
              k = (await us("apps.fetchManifest", M.port)).apps.find(
                (I) => I.type === "controller"
              );
            if (k && k.info) {
              let I = { info: k.info };
              typeof k.isConfigured != "undefined" &&
                (I.isConfigured = k.isConfigured),
                k.version && (I.version = k.version),
                us("redux.dispatch", Bp, { name: T, updates: I });
            }
          }),
          qr("controllers.fetchStatus", async (b, T) => {
            let q = `http://127.0.0.1:${
                f.find((_) => _.name === T).port
              }/api/ucore/status`,
              k = await JY(q, { timeout: 3e3 });
            if (!k.ok)
              throw new Error(`${q} returned status code of ${k.status}`);
            return await k.json();
          }),
          qr("controllers.updateAptCreds", (b, T) => u(T)),
          qr("apps.changed", async (b, T) => {
            await y(T);
            let M = T.find((q) => q.name === "uid-agent");
            M &&
              M.isInstalled &&
              us("redux.dispatch", Bp, {
                name: "access",
                updates: { adoptionDisabled: !0 },
              }).catch((q) => t.error(q));
          }),
          qr("controllers.getAptPackageVersion", (b, T) => d(T)),
        ]),
      D = [],
      A = qC.systemBus();
    await new Ec((b, T) => {
      A.on("connect", b), A.on("error", T);
    }),
      A.removeAllListeners();
    let C = await A.getProxyObject(
        "org.freedesktop.systemd1",
        "/org/freedesktop/systemd1"
      ),
      R = Sc(t, "apps.controllers.systemd", nz(e, t.wrap("systemd"), f, A, C));
    await R,
      D.push(R),
      D.push(
        Sc(
          t,
          "apps.controllers.deviceList",
          KA(e, t.wrap("controllers.deviceList"))
        ),
        Sc(
          t,
          "apps.controllers.topology",
          iz(e, t.wrap("controllers.deviceTopology"))
        ),
        Sc(
          t,
          "apps.controllers.clientList",
          kA(e, t.wrap("controllers.clientList"))
        )
      ),
      setTimeout(async () => {
        try {
          await c(), await u(), await MC("sudo -n apt-get update");
        } catch (b) {
          t.warn(`Failed to update package list on startup ${b}`);
        }
      }, 5e3),
      tz()
        .then((b) => {
          let M = `15 0 * * ${new Date().getDay()}`;
          m = new YY.CronJob(M, () => c(), null, !0, b);
        })
        .catch((b) => {
          t.warn("Couldn't set up apt cache clean cron job.", b);
        }),
      await Ec.all(D),
      h().catch((b) => {
        t.error('Failed to update "system is running" to true', b);
      });
    let N = [
      function* () {
        yield (0, OC.takeEvery)(XY, async ({ payload: b }) => {
          try {
            t.info(
              `Release channel changed to "${b}", checking for updates...`
            ),
              await u(!0),
              E.flushAll();
            let T = await LC();
            await us(
              "controllers.checkForUpdates",
              T.map((M) => M.name)
            );
          } catch (T) {
            t.error("Failed to check application updates:", T);
          }
        });
      },
    ];
    return (
      N.forEach((b) => us("redux.saga.add", b)),
      async () => {
        await Ec.mapSeries(D, (b) => b()),
          N.forEach((b) =>
            us("redux.saga.remove", b).catch((T) => {
              t.error("Failed to redux.saga.remove:", T);
            })
          ),
          S.forEach((b) => WY(b)),
          A && A.disconnect(),
          m && (m.stop(), (m = null));
      }
    );
  };
});
var GC = w((WTe, jC) => {
  var { fetch: BC } = ie(),
    HTe = require("path"),
    { publish: bc, subscribe: _c, unsubscribe: dz } = require("handoff"),
    Vp = require("fs-extra"),
    jp = require("bluebird"),
    lz = $C(),
    { UPDATE_APP: VC } = Z(),
    { getIsSetup: pz } = H(),
    { getApps: Tc, getUnhiddenApps: mz, getFWReleaseChannel: fz } = H(),
    hz = as();
  jC.exports = async (e, t) => {
    let r = [
        "type",
        "name",
        "port",
        "prefetch",
        "uiDir",
        "uiCdn",
        "uiPath",
        "uiProxy",
        "uiHotkey",
        "uiVersion",
        "uiNpmPackageName",
        "uiIndex",
        "swaiVersion",
        "uiCdnUrl",
        "uiCdnVersion",
      ],
      s = async (p) => {
        if (!p) return null;
        let l = {};
        r.forEach((E) => {
          typeof p[E] != "undefined" && (l[E] = p[E]);
        });
        let f = {};
        p.port && (f.api = `/proxy/${p.name}`),
          (f.ui = `/app-assets/${p.name}`);
        let m = null;
        p.uiCdnUrl && p.uiCdnVersion
          ? (m = [`${p.uiCdnUrl}${p.uiCdnVersion}`])
          : p.uiCdn
          ? (Array.isArray(p.uiCdn) ? (m = p.uiCdn) : (m = [p.uiCdn]),
            (m = m.map((E) => (E.endsWith("/") ? E : `${E}/`))))
          : p.uiNpmPackageName &&
            p.uiVersion &&
            (m = [
              `https://unpkg.com/${p.uiNpmPackageName}@${p.uiVersion}/dist/`,
              `https://cdn.jsdelivr.net/npm/${p.uiNpmPackageName}@${p.uiVersion}/dist/`,
            ]),
          p.type === "controller" &&
            e.controllers[p.name] &&
            e.controllers[p.name].uiProxy &&
            (l.uiProxy = e.controllers[p.name].uiProxy),
          await bc("redux.dispatch", VC, {
            name: p.name,
            updates: B(
              v(
                {
                  type: "app",
                  host: "localhost",
                  protocol: "http",
                  uiIndex: "index.js",
                  swaiVersion: 0,
                },
                l
              ),
              {
                proxy: f,
                ui: {
                  baseUrl: `/${p.name}/`,
                  publicPath: f.ui ? `${f.ui}/` : "/",
                  cdnPublicPaths: m,
                  prefetch: p.prefetch || [],
                  icon: p.uiIcon || null,
                  hotkey: p.uiHotkey || null,
                  entrypoint: p.uiIndex,
                  swaiVersion: p.swaiVersion,
                  apiPrefix: f.api ? `${f.api}/` : "/",
                },
              }
            ),
          }),
          bc("apps.changed", await Tc());
      },
      a = (p) => {
        let l = v({}, p);
        return (
          delete l.uiDir,
          delete l.uiIndex,
          delete l.host,
          delete l.protocol,
          delete l.proxy,
          l
        );
      },
      o = async (p) => {
        let l = `http://127.0.0.1:${p}/api/ucore/manifest`,
          f = await BC(l, { timeout: 1e3 });
        if (!f.ok) throw new Error(`${l} returned status code of ${f.status}`);
        let m = await f.json();
        return await jp.all(m.apps.map((E) => s(E))), m;
      },
      n = async (p, l) => {
        let f = await pz();
        return l.reduce(
          (m, E) => {
            if (
              (E.type !== "app" && E.type !== "controller") ||
              (E.hidden && !E.isInstalled) ||
              (E.prerelease && !E.installable && !E.isInstalled)
            )
              return m;
            if (
              !f ||
              (p && p.scopes && p.scopes.includes(`view:${E.type}:${E.name}`))
            ) {
              let y = `${E.type}s`;
              return B(v({}, m), { [y]: [...m[y], a(E)] });
            }
            return m;
          },
          { apps: [], controllers: [] }
        );
      },
      i = async (p) => {
        let l = { apps: [], controllers: [] };
        return (
          await jp.map(p, async (f) => {
            let m = v({}, f);
            delete m.info,
              !(!m.type || !l[`${m.type}s`]) &&
                ((m.hidden && !m.isInstalled) || l[`${m.type}s`].push(a(m)));
          }),
          l
        );
      },
      c = async (p) => {
        let l = async ({ port: E, logDir: y, outputDir: h, name: S }) => {
            t.info(`Gathering support data for ${S}`),
              await Vp.ensureDir(h),
              Vp.chmodSync(h, "777");
            let D = !1,
              A = `http://127.0.0.1:${E}/api/ucore/support-dump`;
            try {
              (
                await BC(A, {
                  method: "POST",
                  body: JSON.stringify({ dir: h }),
                  headers: { "Content-Type": "application/json" },
                })
              ).ok || (D = !0);
            } catch (C) {
              D = !0;
            }
            try {
              D && y && (await Vp.copy(y, h));
            } catch (C) {
              t.error(`Error getting logs from ${y}`, C);
            }
          },
          m = (await Tc())
            .filter(({ name: E, isInstalled: y }) => {
              let h = e.controllers[E];
              return y && h;
            })
            .map(({ name: E }) => {
              let { serviceName: y, logDir: h, port: S } = e.controllers[E];
              return { serviceName: y, logDir: h, port: S };
            });
        for (let E of [...m, ...Object.values(e.services)]) {
          let { serviceName: y, logDir: h, port: S } = E;
          await l({ port: S, outputDir: `${p}/${y}/`, logDir: h, name: y });
        }
      },
      d = [hz(t, "apps.controllers", lz(e, t.wrap("controllers")))];
    await jp.all(d);
    let u = [
      _c("apps.fetchManifest", (p, l) => o(l)),
      _c("apps.getNormalized", async (p, l, f) => n(l, f || (await Tc()))),
      _c("apps.getNormalizedForCloud", async (p, l) => i(l || (await Tc()))),
      _c("apps.generateSupportFiles", (p, l) => c(l)),
    ];
    return (
      bc("system.device").then(async (p) => {
        let l = await fz(),
          f = (await mz()) || [];
        p.controllers.forEach((m) => {
          let S = m,
            { name: E, hidden: y } = S,
            h = dt(S, ["name", "hidden"]);
          bc("redux.dispatch", VC, {
            name: E,
            updates: B(
              v({ type: "controller", ui: { baseUrl: `/${E}/` } }, h),
              { hidden: !f.includes(E) && y, releaseChannel: l }
            ),
          });
        });
      }),
      async () => {
        u.forEach((p) => dz(p));
      }
    );
  };
});
var KC = w((KTe, WC) => {
  var { publish: Gp } = require("handoff"),
    yz = 24 * 60 * 60 * 1e3,
    HC = class {
      constructor(t) {
        (this.logger = t),
          (this.cache = null),
          this._cleanupExpiredTokensFromDatabase(),
          (this.cleanupIntervalId = setInterval(
            () => this._cleanupExpiredTokensFromDatabase(),
            yz
          ));
      }
      _clearCache() {
        this.cache && (this.cache.clear(), (this.cache = null));
      }
      async _cleanupExpiredTokensFromDatabase() {
        try {
          let t = await Gp("db.getClient"),
            r = Math.round(Date.now() / 1e3);
          await t("jwt_denylist").where("original_exp", "<", r).del(),
            this._clearCache();
        } catch (t) {
          this.logger.error("Failed to cleanup JWT denylist", t);
        }
      }
      async _populateCache() {
        let r = await (await Gp("db.getClient"))("jwt_denylist").select("jti");
        this.cache || (this.cache = new Set()),
          r.forEach(({ jti: s }) => {
            this.cache.add(s);
          });
      }
      destroy() {
        clearInterval(this.cleanupIntervalId), this._clearCache();
      }
      async get(t) {
        return this.cache
          ? this.cache.has(t)
          : (await this._populateCache(), this.cache.has(t));
      }
      async set(t, r) {
        await (await Gp("db.getClient"))("jwt_denylist")
          .insert({ jti: t, original_exp: r })
          .onConflict("jti")
          .merge(),
          this._clearCache();
      }
    };
  WC.exports = HC;
});
var ZC = w((YTe, QC) => {
  var { publish: bn, subscribe: hr, unsubscribe: wz } = require("handoff"),
    YC = require("jsonwebtoken"),
    zC = require("crypto"),
    Hp = require("bluebird"),
    { v4: gz } = require("uuid"),
    Ez = KC(),
    { getCloudSettings: Sz } = H(),
    { getJwtSecret: bz } = H(),
    { UPDATE_JWT_SECRET: _z } = Z(),
    Wp = Hp.promisify(YC.sign),
    Tz = Hp.promisify(YC.verify),
    JC = 60 * 60,
    Iz = 30 * 24 * 60 * 60,
    Az = 60 * 60 * 1e3,
    XC = () => Hp.promisify(zC.randomBytes)(32).then((e) => e.toString("hex")),
    Kp = async () => {
      let e = await bz();
      return e || ((e = await XC()), await bn("redux.dispatch", _z, e), e);
    },
    vz = (e) => {
      let t = zC.createHash("sha256");
      return t.update(e), t.digest("hex");
    };
  QC.exports = async (e, t) => {
    let r = new Ez(t),
      s = await XC(),
      a = async (h) => (await bn("uum.login", h)) || null,
      o = async (h, S) => {
        if (!h || !S) return null;
        let { deviceId: D } = await Sz(),
          [A, C] = h.split(":");
        if (Date.now() - parseInt(A, 10) > Az) return null;
        if (C === vz(`${A}${S}${D}${s}`)) return c(S);
      },
      n = async (h) => {
        let S = await bn("uum.loginByOauthToken", { token: h });
        return S !== !1 ? S : null;
      },
      i = async (h) => {
        try {
          let S = await bn("uum.getUser", h);
          if (S !== !1) return S;
        } catch (S) {
          t.error(S);
        }
        return null;
      },
      c = async (h) => {
        let S = await bn("uum.getUserBySsoId", h);
        return S !== !1 ? S : null;
      },
      d = async (h) => {
        let { userId: S } = await f(h);
        return i(S);
      },
      u = async (h) => {
        let S = await Kp();
        if (h.isRemembered) return Wp(h, S);
        let R = h,
          { iat: D, exp: A } = R,
          C = dt(R, ["iat", "exp"]);
        return Wp(C, S, { expiresIn: JC });
      },
      p = async ({ rememberMe: h, userId: S, csrfToken: D }) => {
        let A = await Kp();
        return Wp({ isRemembered: h, userId: S, csrfToken: D }, A, {
          expiresIn: h ? Iz : JC,
          jwtid: gz(),
        });
      },
      l = async (h) => (!h || !h.userId ? null : h.jti ? u(h) : p(h)),
      f = async (h) => {
        let S = await Kp();
        return Tz(h, S);
      },
      m = async ({ jti: h, exp: S }) => {
        if (!h) {
          t.error(`Failed to revoke an invalid JWT ID: ${h}`);
          return;
        }
        await r.set(h, S);
      },
      E = ({ jti: h }) => (h ? r.get(h) : !1),
      y = [
        hr("auth.login", (h, S) => a(S)),
        hr("auth.loginByOauthToken", (h, S) => n(S)),
        hr("auth.loginByNcaToken", (h, S, D) => o(S, D)),
        hr("auth.jwt.isBlocked", (h, S = {}) => E(S)),
        hr("auth.jwt.revoke", (h, S = {}) => m(S)),
        hr("auth.jwt.encode", (h, S) => l(S)),
        hr("auth.jwt.decode", (h, S) => f(S)),
        hr("auth.getUser", (h, S) => i(S)),
        hr("auth.getNcaLoginToken", (h) => s),
        hr("auth.getUserBySsoId", (h, S) => c(S)),
        hr("auth.getUserByToken", (h, S) => d(S)),
      ];
    return async () => {
      r.destroy(), y.forEach((h) => wz(h));
    };
  };
});
var Ic,
  Yp = x(() => {
    Ic = { maxAttempts: 6, interval: 1e3, backoff: 2 };
  });
var zp,
  Jp,
  eD,
  tD,
  rD,
  _n,
  Ac,
  vc,
  Cc,
  Cz,
  Dc,
  Xp = x(() => {
    (zp = g(require("buffer"))),
      (Jp = g(require("crypto"))),
      (eD = g(require("handoff"))),
      (tD = g(require("uuid"))),
      (rD = g(ie()));
    Ns();
    (_n = class extends Error {
      constructor({ httpCode: t, statusText: r, errResponse: s }) {
        super(`${t} ${r}`);
        (this.httpCode = t), (this.statusText = r), (this.errResponse = s);
      }
    }),
      (Ac = async (e, t) => {
        let r = (0, tD.v4)();
        return (0, eD.publish)(
          "cloud.devicePublish",
          `ucore/upload-attachments/${e}`,
          { filenames: t },
          r
        ).then((s) => s.payload);
      }),
      (vc = (e) => Jp.default.createHash("sha256").update(e, "utf-8").digest()),
      (Cc = (e, t) => {
        let r = zp.Buffer.from("0000000000000000"),
          s = Jp.default.createCipheriv("aes-256-cbc", e, r);
        return (
          s.update(zp.Buffer.from(t), "utf8", "base64") + s.final("base64")
        );
      }),
      (Cz = async (e, t) =>
        (0, rD.fetch)(e, {
          body: t,
          method: "PUT",
          headers: { "Content-Length": t.length },
        })),
      (Dc = async (e, t, r = {}) =>
        Mt(
          async function () {
            let a = await Cz(e, t);
            if (a.ok) return a;
            let o = await a.text();
            throw new _n({
              httpCode: a.status,
              statusText: a.statusText,
              errResponse: o,
            });
          },
          async (s) => s instanceof _n && s.httpCode >= 500,
          { maxAttempts: 8, interval: 500, backoff: 2, logger: r }
        ));
  });
var he,
  sD,
  aD,
  oD,
  Qp = x(() => {
    he = g(require("zod"));
    sl();
    (sD = he.z
      .object({
        filename: he.z.string(),
        data: he.z.any(),
        name: he.z.string().optional(),
      })
      .passthrough()),
      (aD = he.z.object({
        from: he.z
          .union([
            he.z.object({
              senderEmail: he.z.string().email(),
              senderName: he.z.string(),
            }),
            he.z.object({
              address: he.z.string().email(),
              personal: he.z.string(),
            }),
          ])
          .optional(),
        to: he.z.union([
          he.z.string().array(),
          he.z.object({ ssoId: he.z.string() }).array(),
        ]),
        messageType: he.z.string(),
        subject: he.z.string().optional(),
        bodyHtml: he.z.string().optional(),
        bodyText: he.z.string().optional(),
        vars: he.z.record(he.z.any()).optional(),
        imagesToUpload: he.z.array(sD).optional(),
      })),
      (oD = he.z.object({
        ssoIds: he.z.string().array(),
        app: he.z.nativeEnum(vs),
        appPrefix: he.z.boolean().optional(),
        alternativeApps: he.z.nativeEnum(vs).array().optional(),
        collapseKey: he.z.string().optional(),
        ttl: he.z.number().nonnegative().optional(),
        priority: he.z.number().optional(),
        message: he.z
          .object({
            body: he.z.string(),
            title: he.z.string(),
            type: he.z.string().nullish(),
            sound: he.z.string().nullish(),
            attributes: he.z.record(he.z.any()),
          })
          .passthrough(),
        imageToUpload: sD.optional(),
      }));
  });
var nD,
  iD,
  Nc,
  cD,
  uD,
  dD = x(() => {
    (nD = g(require("buffer"))),
      (iD = g(require("handoff"))),
      (Nc = g(require("uuid")));
    wi();
    Yp();
    Xp();
    Qp();
    (cD = 128 * 1024),
      (uD = (e, t) => async (r, s, a) => {
        let o = aD.safeParse(s);
        if (!o.success)
          throw (
            (t.error("Validation failed for message", s, o.error.issues),
            new at(o.error))
          );
        let {
            from: n,
            to: i,
            messageType: c,
            subject: d,
            bodyHtml: u,
            bodyText: p = "",
            vars: l = {},
            imagesToUpload: f = [],
          } = s,
          m = {
            recipientSsoIds: i.map((A) => (typeof A == "string" ? A : A.ssoId)),
            emailVars: l,
            messageType: c,
            subject: d,
            bodyHtml: u,
            bodyText: p,
          };
        if (
          (n &&
            ((m.senderEmail = "senderEmail" in n ? n.senderEmail : n.address),
            (m.senderName = "senderName" in n ? n.senderName : n.personal)),
          f.length > 0)
        ) {
          m.encryptionKey = (0, Nc.v4)();
          let A = vc(m.encryptionKey),
            C = f.reduce(
              (b, T) => ((b[T.filename] = `${T.filename}-${(0, Nc.v4)()}`), b),
              {}
            ),
            R = [],
            N = await Ac(
              r,
              f.map((b) => C[b.filename])
            );
          m.emailVars.images = [];
          for (let b of f) {
            let { name: T, filename: M, data: q } = b;
            T || (T = M);
            let k = C[M];
            (m.emailVars[T] = T),
              m.emailVars.images.push({ name: T, filename: k });
            let I = Cc(A, q);
            R.push(Dc(N[k], I));
          }
          await Promise.all(R);
        }
        let E = JSON.stringify(m),
          y = nD.Buffer.byteLength(E);
        if (y > cD)
          throw new Error(`Email payload is too big: size=${y}, max=${cD}`);
        let h = (0, Nc.v4)(),
          S = `email-${m.messageType}-${h}`;
        t.info(`Sending email "${m.messageType}" (retryId: ${S})`);
        let D = await (0, iD.publish)(
          "cloud.devicePublishWithRetry",
          `send-email/${r}`,
          m,
          h,
          (A) => !!A,
          v(B(v({}, Ic), { retryId: S, name: "sendEmail", logger: t }), a || {})
        );
        return (
          D.payload &&
            Object.entries(D.payload).forEach(([A, C]) => {
              let R = JSON.parse(C);
              R.status &&
                R.status !== "sent" &&
                t.warn(
                  `Email ${m.messageType} failed for user ${A}:`,
                  R.rejectReason
                );
            }),
          D
        );
      });
  });
var lD,
  Tn,
  Dz,
  Nz,
  pD,
  mD = x(() => {
    (lD = g(require("handoff"))), (Tn = g(require("uuid")));
    wi();
    Yp();
    Xp();
    Qp();
    (Dz = 3600),
      (Nz = (e, t) => (t ? `${e}-${t}` : (0, Tn.v4)())),
      (pD = (e, t) => async (r, s, a) => {
        let o = oD.safeParse(s);
        if (!o.success)
          throw (
            (t.error("Validation failed for message", s, o.error.issues),
            new at(o.error))
          );
        let {
            app: n,
            alternativeApps: i = [],
            appPrefix: c = !1,
            ssoIds: d,
            message: u,
            collapseKey: p,
            imageToUpload: l,
          } = s,
          f = {
            app: n,
            alternativeApps: i,
            appPrefix: c,
            ssoIds: d,
            message: u,
            collapseKey: Nz(n, p),
            ttl: Dz,
            priority: 1,
          };
        if (l) {
          let y = (0, Tn.v4)(),
            h = vc(y),
            { filename: S, data: D } = l,
            A = `${S}-${(0, Tn.v4)()}`;
          try {
            let R = (await Ac(r, [A]))[A],
              N = Cc(h, D);
            await Dc(R, N, t),
              (f.message.encryptionKey = y),
              (f.message.image = A);
          } catch (C) {
            C instanceof _n
              ? t.error(
                  `Failed to upload notification attachment (${C.httpCode} ${C.statusText})`,
                  C.errResponse
                )
              : t.error("Failed to upload notification attachment", C);
          }
        }
        let m = (0, Tn.v4)(),
          E = `push-${f.app}-${m}`;
        return (
          t.info(
            `Sending push notification "${f.message.title}" to application "${f.app}" (retryId: ${E})`
          ),
          (0, lD.publish)(
            "cloud.devicePublishWithRetry",
            `push/${r}`,
            f,
            m,
            (y) => !!y,
            v(
              B(v({}, Ic), { retryId: E, name: "sendPush", logger: t }),
              a || {}
            )
          )
        );
      });
  });
var Rc = w((dIe, fD) => {
  fD.exports = { AWS_REQUEST_TIMEOUT_MS: 60 * 1e3 };
});
var yD = w((pIe, hD) => {
  Ns();
  var { publish: Zp } = require("handoff"),
    Rz = Wa(),
    { UPDATE_CLOUD_SETTINGS: Pz } = Z(),
    { AWS_REQUEST_TIMEOUT_MS: Uz } = Rc(),
    kz = "ucore";
  hD.exports = (e, t) => async (r, s) => {
    t.info(`Registering device for cloud access, ssoUser: ${r.uuid}`);
    let a = async (c) => {
        let d = c ? { eeprom: c.toString("base64") } : {},
          u = {
            headers: {
              "Content-Type": "application/json",
              "unifi-cloud-access-type": kz,
            },
            timeout: Uz,
          },
          p = await Zp("cloud.api.registerDevice", r.ssoAuth, u, d);
        return t.debug("Registration data:", p), p;
      },
      o = async (c, d) => {
        let u = v(
          {
            ssoId: d,
            deviceId: c.deviceId,
            deviceAuth: c.deviceAuth,
            privateKey: c.privateKey,
            clientCert: c.certificatePem,
            clientCertArn: c.certificateArn,
          },
          s
        );
        return await Zp("redux.dispatch", Pz, u), u;
      },
      n = await Zp("system.eeprom"),
      { uuid: i } = r;
    try {
      let c = await Mt(() => a(n), Rz, {
        maxAttempts: 5,
        interval: 500,
        backoff: 2,
        logger: t,
      });
      return (
        t.info(`Registered device for cloud access, deviceId: ${c.deviceId}`),
        o(c, i)
      );
    } catch (c) {
      t.error("Failed to register device for cloud access", c);
    }
  };
});
var wD,
  em,
  Oz,
  gD,
  ED,
  SD = x(() => {
    wD = g(require("lodash"));
    Qr();
    (Oz = (e) => {
      let t = e.mac;
      return (
        e.deviceId && (t = e.deviceId),
        typeof e.metadata?.cameraID == "string" && (t = e.metadata?.cameraID),
        {
          id: t,
          mac: e.mac,
          name: e.name,
          model: e.model,
          shortname: e.shortname,
          version: e.firmware,
          ip: e.ip,
          isManaged: e.isManaged,
        }
      );
    }),
      (gD = () => em),
      (ED = (e, t) => {
        let r = [],
          s;
        for (s in e) {
          let n = (e[s] || []).filter((i) => i.source !== "discovery");
          r.push(...n.map(Oz));
        }
        r.sort((n, i) => (n.mac < i.mac ? -1 : 1));
        let a = t.edges.map((n) => ({
            type: n.type,
            uplinkMac: gt(n.uplinkMac, ""),
            downlinkMac: gt(n.downlinkMac, ""),
            radioBand: n.radioBand,
            uplinkPortNumber: n.uplinkPortNumber,
            downlinkPortNumber: n.downlinkPortNumber,
          })),
          o = { applicationDevices: r, links: a };
        return (0, wD.isEqual)(em, o) ? !1 : ((em = o), !0);
      });
  });
var bD,
  _D,
  qz,
  TD,
  Fz,
  Lz,
  Pc,
  tm = x(() => {
    (bD = g(require("handoff"))),
      (_D = g(require("node-cache"))),
      (qz = 15 * 60),
      (TD = new _D.default({ stdTTL: qz })),
      (Fz = (e) =>
        e.isSuperAdmin || e.ucorePermission.hasGeneralSettingsPermission),
      (Lz = (e, t) => async (r, s) => {
        try {
          if (!Fz(r)) return;
          let a = `${r.unique_id}-${s}`,
            o = new Date();
          if (TD.get(a) === void 0) {
            let i;
            switch (s) {
              case "local":
                i = "the console's IP";
                break;
              case "cloud":
                i = "unifi.ui.com";
                break;
              case "mobile":
                i = "the mobile app";
                break;
              default:
                throw new Error(`Unknown source "${s}"`);
            }
            let c = {
              eventId: "adminAccess",
              eventData: {
                user: { text: r.full_name },
                accessMethod: { text: i },
              },
              email: { vars: { user_name: r.full_name, access_method: i } },
              push: {
                message: { body: `${r.full_name} accessed UniFi OS via ${i}.` },
              },
            };
            await (0, bD.publish)("notifications.add", c);
          }
          TD.set(a, o);
        } catch (a) {
          t.error("Failed to create admin access notification:", a);
        }
      }),
      (Pc = Lz);
  });
var ID,
  AD,
  Mz,
  vD,
  CD = x(() => {
    (ID = g(require("handoff"))),
      (AD = g(H())),
      (Mz = async (e) => {
        try {
          let t = await (0, AD.getName)();
          await (0, ID.publish)("notifications.add", {
            eventId: "cloudConnectionLost",
            eventData: { consoleName: { text: t } },
          });
        } catch (t) {
          e.error('Failed to create "cloud connection lost" notification:', t);
        }
      }),
      (vD = Mz);
  });
var DD,
  ND,
  xz,
  RD,
  rm,
  PD,
  UD = x(() => {
    (DD = g(require("handoff"))),
      (ND = g(require("node-cache"))),
      (xz = 30),
      (RD = 1),
      (rm = class {
        constructor(t) {
          this.logger = t;
          this.cache = new ND.default({ stdTTL: xz, useClones: !1 });
        }
        get(t) {
          let r = this.cache.get(t);
          if (r) return r;
          let s = {
            offerReceived: !1,
            peer: null,
            candidates: new Map(),
            seq: RD,
          };
          return this.cache.set(t, s), s;
        }
        async processCandidates(t, r) {
          if (!r.peer) return;
          if (await (0, DD.publish)("webrtc.checkPeerIsClosed", r.peer.id)) {
            this.logger.warn(
              `Stop adding WebRTC candidate, peer is closed, key: ${t}, peer id: ${r.peer.id}`
            );
            return;
          }
          for (;;) {
            let a = r.seq + 1,
              o = r.candidates.get(a);
            if (!o) return;
            this.logger.debug(`applying candidate seq ${a} from ${t}`, o),
              (r.seq = a),
              r.peer.addCandidate(`a=${o}`);
          }
        }
        offerReceived(t) {
          return this.get(t).offerReceived;
        }
        setOfferReceived(t) {
          let r = this.get(t);
          r.offerReceived = !0;
        }
        async addCandidate(t, r, s) {
          let a = this.get(t);
          s.includes("typ relay") &&
            (await new Promise((n) => setTimeout(n, 250)));
          for (let n of a.candidates.values()) if (n === s) return;
          let o = r || RD + a.candidates.size + 1;
          a.candidates.set(o, s), this.processCandidates(t, a);
        }
        addPeer(t, r) {
          this.logger.debug(`storing peer from ${t}`);
          let s = this.get(t);
          (s.peer = r), this.processCandidates(t, s);
        }
      }),
      (PD = rm);
  });
var sm = w((gIe, OD) => {
  var $z = {
      STREAM_ALREADY_IN_USE: "STREAM_ALREADY_IN_USE",
      STREAM_EXPIRED: "STREAM_EXPIRED",
      INVALID_TOKEN: "INVALID_TOKEN",
    },
    kD = class extends Error {
      constructor(t) {
        super(t);
        (this.code = t), (this.name = "GuestPeerError");
      }
    };
  OD.exports = { GuestPeerError: kD, GUEST_PEER_ERRORS: $z };
});
var FD = w((EIe, qD) => {
  "use strict";
  var Bz = require("selfsigned"),
    Vz = 825,
    jz = 2048;
  qD.exports = (e) =>
    Bz.generate(e, {
      algorithm: "sha256",
      days: Vz,
      keySize: jz,
      clientCertificate: !0,
      clientCertificateCN: "Ubiquiti Networks",
      extensions: [
        {
          name: "keyUsage",
          keyCertSign: !0,
          digitalSignature: !0,
          nonRepudiation: !0,
          keyEncipherment: !0,
          dataEncipherment: !0,
        },
        {
          name: "extKeyUsage",
          serverAuth: !0,
          clientAuth: !0,
          codeSigning: !0,
          timeStamping: !0,
        },
        {
          name: "subjectAltName",
          altNames: [
            { type: 2, value: "unifi.local" },
            { type: 2, value: "localhost" },
            { type: 2, value: "[::1]" },
            { type: 7, ip: "127.0.0.1" },
            { type: 7, ip: "fe80::1" },
          ],
        },
      ],
    });
});
var om = w((SIe, LD) => {
  var Fs = require("fs-extra"),
    Gz = require("tls"),
    am = require("node-forge"),
    { get: Hz } = require("lodash"),
    Wz = FD(),
    { getIsSetupFromConfigFile: Kz } = (Ue(), We),
    Yz = 2048;
  LD.exports = (e, t) => {
    let r = e.ssl,
      s = async (l, f) => {
        let m = await Fs.open(l, "w");
        return await Fs.writeFile(m, f), await Fs.fsync(m), Fs.close(m);
      },
      a = async (l) => (await Fs.readFile(l)).toString(),
      o = async (l) => {
        try {
          let f = (await Fs.readFile(l)).toString(),
            m = am.pki.certificateFromPem(f),
            E = new Date(m.validity.notBefore).getTime(),
            y = new Date(m.validity.notAfter).getTime(),
            h = m.extensions.find((C) => C.name === "subjectAltName"),
            D = Hz(h, "altNames", []).find((C) => C.type === 2),
            A;
          return (
            D ? (A = D.value) : (A = m.subject.getField("CN").value),
            {
              raw: f,
              hostname: A,
              notBefore: E,
              notAfter: y,
              certificate: m,
              validAtTimestamp: (C) => C < y,
            }
          );
        } catch (f) {
          return (
            f.code !== "ENOENT" &&
              t.error(`Failed to load certificate ${l}: ${f.message}`),
            null
          );
        }
      };
    return {
      getSelfSignedKey: async () => a(r.key),
      getSelfSignedCert: async () => o(r.crt),
      getDirectCert: async () => o(r.directCrt),
      getDirectKey: async () => {
        let l;
        try {
          l = await a(r.directKey);
        } catch {
          t.info("Direct connection key not found, generating..."),
            (l = am.pki.privateKeyToPem(
              am.pki.rsa.generateKeyPair(Yz).privateKey
            )),
            await s(r.directKey, l);
        }
        return l;
      },
      saveDirectCert: async (l) => s(r.directCrt, l),
      checkSelfSignedCerts: async () => {
        try {
          let [l, f] = await Promise.all([
            Fs.readFile(r.key),
            Fs.readFile(r.crt),
          ]);
          return (
            Gz.createSecureContext({ key: l, cert: f }), { key: l, cert: f }
          );
        } catch (l) {
          (await Kz(e.configPath)) && t.error("Failed to read certificate:", l);
        }
        try {
          t.info(`Certificate ${r.crt} not found.... generating`);
          let { private: l, cert: f } = Wz([
            { name: "commonName", value: "unifi.local" },
          ]);
          return (
            await Promise.all([s(r.key, l), s(r.crt, f)]), { cert: f, key: l }
          );
        } catch (l) {
          throw (t.error("Failed to generate certificate:", l), l);
        }
      },
    };
  };
});
var $D = w((bIe, xD) => {
  var MD = require("bluebird"),
    zz = require("async-retry"),
    { publish: Jz } = require("handoff"),
    Xz = 30 * 1e3,
    Qz = 3,
    Zz = 2 * 1e3,
    e7 = 8,
    t7 = 30 * 60 * 1e3;
  xD.exports = async (e, t, r, s) => {
    let a = t._instanceId,
      o = MD.promisify(t.subscribe);
    await zz(
      async (n, i) => {
        if (!t.connected) {
          e.warn(
            `Abort subscription retry as device is disconnected, attemptCount: ${i}, deviceId: ${r}, instanceId: ${a}`
          );
          return;
        }
        e.info(`Attempting to subscribe topic ${s}, attemptCount:`, i);
        let c = await o(s, { qos: 1 }).timeout(Xz);
        e.info(
          `Successfully subscribed to topic "${c[0].topic}", deviceId: ${r}, instanceId: ${a}`
        );
      },
      {
        factor: Qz,
        maxTimeout: t7,
        minTimeout: Zz,
        randomize: !0,
        retries: e7,
        onRetry: (n) => {
          let i =
            n instanceof MD.TimeoutError
              ? "Subscription request timeout"
              : n.message;
          Jz("trace.cloud.resubscribe", s, i);
        },
      }
    );
  };
});
var jD = w((_Ie, VD) => {
  var { publish: r7 } = require("handoff"),
    { v4: s7 } = require("uuid"),
    a7 = require("node-cache"),
    o7 = "THROTTLED",
    BD = new a7(),
    n7 = (e, t, r) => async () => {
      let s = BD.get("turnCredentials");
      if (s) return s;
      t.debug("Fetching TURN credentials...");
      let a = s7();
      try {
        let { payload: o } = await r7(
            "cloud.devicePublish",
            `ucore/turn-credentials/${r}`,
            {},
            a
          ),
          { status: n, message: i, code: c, turnCredentials: d } = o;
        if (n !== "success")
          throw (
            (t.error("NCA side error:", o),
            c === o7
              ? new Error("Rate limit exceeded")
              : new Error(`NCA error: ${i} (${c})`))
          );
        s = d;
        let { ttl: u } = s;
        BD.set("turnCredentials", s, parseInt(u)),
          t.info("TURN credentials successfully updated");
      } catch (o) {
        throw (t.error("Failed to retrieve TURN credentials:", o), o);
      }
      return s;
    };
  VD.exports = n7;
});
var Uc = w((IIe, GD) => {
  Ns();
  var { fetch: i7 } = ie(),
    c7 = Wa(),
    u7 = (e, t) =>
      Mt(() => i7(e.cloud[e.cloudEnv].configUrl, { timeout: 8e3 }), c7, {
        maxAttempts: 6,
        interval: 500,
        backoff: 2,
        logger: t,
      })
        .then((s) => s.json())
        .then((s) => (t.debug("cloud access config response", s), s));
  GD.exports = { getConfigDetails: u7 };
});
var YD = w((AIe, KD) => {
  var HD = require("@ubnt/binme"),
    d7 = require("@ubnt/mock-http"),
    { publish: WD } = require("handoff"),
    l7 = 128 * 1024,
    p7 = (e, t) => {
      let r = [],
        s = e.length,
        a = 0;
      for (; a < s; ) r.push(e.slice(a, (a += t)));
      return r;
    };
  KD.exports = (e, t) => {
    let r = new Map(),
      s = async (o, n, i) => {
        let { method: c, path: d, headers: u } = o,
          { clientId: p, ssoId: l, requestId: f, deviceId: m } = i,
          E = await WD("auth.getUserBySsoId", l);
        t.debug(`mqtt api request ${c} ${d}`, { userId: E && E.id });
        let y = await d7(
            c,
            d,
            u,
            c === "GET" || c === "DELETE" ? null : n,
            (D, A) => WD("http.req", D, A, { user: E, mqtt: !0 })
          ),
          h = await HD.create(
            {
              id: o.id,
              type: "httpResponse",
              timestamp: Date.now(),
              headers: y.headers,
              statusCode: y.statusCode,
              statusMessage: y.statusMessage,
            },
            y.body || "",
            !0
          );
        p7(h, l7).forEach((D) => {
          t.info(`device/${m}/${p}/ucp4/${f}`, D.length),
            e.publish(`device/${m}/${p}/ucp4/${f}`, D, { qos: 1 }, (A) => {
              A && t.error(A);
            });
        });
      },
      a = async (o, n) => {
        let { header: i, body: c } = o;
        if (i.type === "httpRequest") return s(i, c, n);
      };
    return async (o, n, i) => {
      let { deviceId: c, clientId: d, ssoId: u, requestId: p } = o,
        l = `${c}_${u}_${d}_${p}`,
        f = r.get(l);
      f ||
        ((f = new HD.Streamer()),
        r.set(l, f),
        f.on("message", (m) => {
          a(m, o), f.destroy(), r.delete(l);
        })),
        f.feed(n);
    };
  };
});
var JD = w((vIe, zD) => {
  var m7 = (e, t, r) => {
      let s = !1,
        a = (o, n, i) => {
          let c = Math.random() * (i - n) + n;
          setTimeout(() => {
            s || (o(), a(o, n, i));
          }, c);
        };
      return a(e, t, r), () => (s = !0);
    },
    f7 = (e, t, r) => {
      let s = Math.random() * (r - t) + t;
      return setTimeout(e, s);
    };
  zD.exports = { randomInterval: m7, randomTimeout: f7 };
});
var iN = w((OIe, nN) => {
  Ns();
  SD();
  tm();
  CD();
  UD();
  var XD = require("path"),
    h7 = require("path-match"),
    y7 = require("aws-iot-device-sdk"),
    {
      throttle: QD,
      debounce: w7,
      isEqual: g7,
      isEmpty: E7,
    } = require("lodash"),
    { v4: Pt } = require("uuid"),
    yr = require("bluebird"),
    S7 = require("cron"),
    b7 = require("dataloader"),
    { publish: de, subscribe: ft, unsubscribe: ZD } = require("handoff"),
    { takeEvery: za } = require("redux-saga/effects"),
    _7 = require("@ubnt/encrypted-archive"),
    { AppError: In, errorCodes: An } = (se(), me),
    { GuestPeerError: T7 } = sm(),
    { deviceStates: eN } = Ot(),
    I7 = om(),
    tN = $D(),
    A7 = jD(),
    { getConfigDetails: v7 } = Uc(),
    {
      CONSOLE_NAME_CHANGED: C7,
      UPDATE_APP: D7,
      SET_DISCOVERED_UNIFIOS_DEVICES: N7,
      UPDATE_DEVICE_STATE: rN,
      SET_CONSOLES_ON_SAME_LOCAL_NETWORK: R7,
      UPDATE_CLOUD_CONNECTED: sN,
      SET_DIRECT_CONNECT_DOMAIN: P7,
      SET_FIRMWARE_RELEASE_CHANNEL: U7,
      UPDATE_SYSTEM_IS_STACKED: k7,
      SET_DEVICE_LIST: O7,
      SET_DEVICE_TOPOLOGY: q7,
      UPDATE_USER_DATA: F7,
      SET_SSO_ID: L7,
    } = Z(),
    {
      getUnadoptedUnifiOSDevices: M7,
      getDeviceState: aN,
      getDeviceStateLastChanged: x7,
      getConsolesOnSameLocalNetwork: $7,
      getDirectConnectDomain: B7,
      getFWReleaseChannel: V7,
      getDeviceTopology: j7,
      getSystemIsStacked: G7,
      getDeviceList: oN,
      getUserData: H7,
      getRemoteAccessEnabled: W7,
    } = H(),
    K7 = YD(),
    { randomInterval: UIe, randomTimeout: kIe } = JD(),
    kc = h7({ sensitive: !1, strict: !1 }),
    Y7 = "verify-invitation",
    z7 = "pending-invitation-accepted",
    J7 = "delete-invitation",
    X7 = "sync-access",
    Q7 = "revoke-access",
    Z7 = "warranty-service:state-updated",
    eJ = "update-sso-data",
    tJ = "sso-password-changed",
    rJ = "update-client-data",
    sJ = "certificate-response",
    aJ = "teleport-request",
    oJ = "upload-support-file",
    nJ = 30 * 1e3,
    nm = Math.ceil(Math.random() * (7 * 60 * 60 * 24 * 1e3)),
    iJ = 5 * 60 * 1e3,
    cJ = 1e3,
    Wt,
    im = !1,
    cm,
    uJ = w7(
      async () => {
        await yr.delay(Math.random() * 8e3),
          de("cloud.syncAccess").catch(() => null);
      },
      8e3,
      { leading: !0, trailing: !1, maxWait: 6e4 }
    ),
    dJ = (e) => e.startsWith("android-") || e.startsWith("ios-"),
    lJ = async (e, t, r, s, a, o) => {
      let n = K7(e, a),
        i = new PD(a),
        c = new Map(),
        d = r,
        u = new Map(),
        p = (F, $) => {
          let O = v({}, $);
          return (
            a.debug("publish", F, O),
            e.publish(F, JSON.stringify(O), { qos: 1 })
          );
        },
        l = (F, $, O) => {
          let V = B(v({}, $), { requestId: O });
          return (
            a.debug("publish", F, V),
            new yr((Q, ae) => {
              let W = setTimeout(
                () => (
                  c.delete(O),
                  ae(
                    new In(
                      An.DEVICE_PUBLISH_TIMEOUT({
                        message: `${F} response timeout`,
                      })
                    )
                  )
                ),
                nJ
              );
              return (
                c.set(O, { resolve: Q, reject: ae, timeout: W }),
                e.publish(F, JSON.stringify(V), { qos: 1 })
              );
            })
          );
        },
        f = (F, $, O, V, Q) =>
          Mt(
            async (W, z, ee) => {
              let te = await l(W, z, ee);
              if (te.status && te.status !== "OK") throw new Error(te.reason);
              if (te.payload) {
                let He = Object.values(te.payload)[0];
                if (He && He.status && He.status !== "sent")
                  throw new Error(He.rejectReason);
              }
              return te;
            },
            V,
            Q,
            F,
            $,
            O
          ),
        m = A7(s, a, t),
        E = Pc(s, a),
        y = async () => {
          let F = await de("uum.getActiveUsers");
          if (!F.length)
            return a.warn("no users, ignoring sync-access for now");
          let $ = F.filter((V) => !!V.sso_uuid).map((V) => V.sso_uuid),
            O = F.filter((V) => !!V.uid_sso_id).map((V) => V.uid_sso_id);
          if ($.length === 0 && O.length === 0)
            return a.warn("No users with remote access, skipping sync-access");
          l(`sync-access/${t}`, { withSsoData: !0, ssoIds: $, uidIds: O }, Pt())
            .then((V) => {
              V.payload.forEach((Q) => {
                let ae = F.find((W) => W.sso_uuid === Q.uuid);
                if (ae) {
                  let W = {
                    userId: ae.unique_id,
                    first_name: Q.firstName,
                    last_name: Q.lastName,
                    email: Q.email,
                    email_status: "VERIFIED",
                    sso_picture: Q.picture,
                    systemlog: !1,
                  };
                  de("uum.updateUser", W).catch((z) => {
                    a.error("unable to update user from sso data", z);
                  });
                }
              });
            })
            .catch((V) => {
              a.error("sync-access error", V);
            });
        },
        S = QD(
          async () => {
            try {
              let F = await l(
                `ucore/update-application-devices/${t}`,
                v({ timestamp: Date.now() }, gD()),
                Pt()
              );
              F.payload?.status !== "success" &&
                a.warn("Error sending device report:", F.payload?.message);
            } catch (F) {
              a.warn("Failed to send device report", F.message);
            }
          },
          iJ,
          { leading: !0, trailing: !0 }
        ),
        D = async () => {
          let [F, $] = await yr.all([oN(), j7()]);
          ED(F, $) && S();
        },
        A = async (F, $) => {
          a.info(`SSO user data update received, ssoId: ${F}`);
          let O = await de("uum.getUserBySsoId", F);
          if (!O) {
            a.error(
              `Should not receive SSO data for unmanaged user, ssoId: ${F}`
            );
            return;
          }
          let V = {
            userId: O.unique_id,
            first_name: $.first_name,
            last_name: $.last_name,
            email: $.email,
            email_status: "VERIFIED",
            sso_picture: $.picture,
            systemlog: !1,
          };
          de("uum.updateUser", V).catch((Q) => {
            a.error(`Unable to update user from SSO data, ssoId: ${F}`, Q);
          });
        },
        C = async (F, $) => {
          a.info(`SSO user password changed, ssoId: ${F}`);
          let O = await de("uum.getUserBySsoId", F);
          if (!O) {
            a.error(
              `Should not receive SSO data for unmanaged user, ssoId: ${F}`
            );
            return;
          }
          try {
            await de("uum.ssoAccountPasswordChanged", O.unique_id),
              a.info(`Notified UUM for password changed:, action: ${$.action}`);
          } catch (V) {
            a.error(
              `Unable to notify UUM for password changed, ssoId: ${F}`,
              V
            );
          }
        },
        R = async (F, $) => {
          a.info(`Client data update received, ssoId: ${F}`);
          let O = await de("uum.getUserBySsoId", F);
          if (!O) {
            a.error(
              `Should not receive client data for unmanaged user, ssoId: ${F}`
            );
            return;
          }
          de("cloud.clientData", { userId: O.unique_id, clientData: $ }).catch(
            (V) => {
              a.error(`Unable to handle client data update, ssoId: ${F}`, V);
            }
          );
        },
        N = async (F) => {
          let $ = !1;
          try {
            let {
              result: O,
              certificatePem: V,
              rejectionReason: Q,
              retryTimestamp: ae,
            } = F;
            switch (O) {
              case "PENDING":
                a.info("Certificate request returned PENDING response");
                return;
              case "SUCCESS":
                await o.saveDirectCert(V), await de("http.restart");
                break;
              case "THROTTLED":
                {
                  a.info(
                    `Certificate request returned THROTTLED response ${JSON.stringify(
                      { rejectionReason: Q, retryTimestamp: ae }
                    )}`
                  );
                  let W = ae - Date.now();
                  ae &&
                    W > 0 &&
                    (($ = !0),
                    Wt && Wt.stop(),
                    await yr.delay(W),
                    await de("cloud.refreshSslCerts", await o.getDirectKey()));
                }
                break;
              case "ERROR":
                throw new In(An.FAILED_TO_RECEIVE_SSL_CERTIFICATE, F);
              default:
                throw new In(
                  An.FAILED_TO_RECEIVE_SSL_CERTIFICATE({
                    message: `Unexpected certificate response result ${O}`,
                  }),
                  F
                );
            }
          } catch (O) {
            a.warn(
              `Error handing certificate response: ${JSON.stringify(F)}`,
              O
            );
          } finally {
            $ && Wt && Wt.start();
          }
        },
        b = new b7(
          (F) =>
            new yr(($, O) => {
              let V = F.reduce((ae, W) => v(v({}, ae), W), {}),
                Q = cm.unifiCloudAccess.iot.userDataTopic || "user-data/";
              f(Q + t, { data: V }, Pt(), (ae) => !!ae, {
                maxAttempts: 3,
                interval: 500,
                jitter: !0,
                backoff: 2,
                logger: a,
              })
                .then((ae) => $(Array(F.length).fill(ae)))
                .catch(O);
            }),
          { batchScheduleFn: (F) => setTimeout(F, cJ) }
        ),
        T = async (F) => {
          try {
            for (let $ in F) {
              if (!(await de("uum.getUserBySsoId", $))) continue;
              let V = F[$];
              g7(u.get($), V) || (await b.load({ [$]: V }), u.set($, V));
            }
          } catch ($) {
            a.error("Failed to sync user data to NCA:", $.message);
          }
        },
        M = async (F, $, O) => {
          try {
            let V = JSON.parse($.toString());
            a.debug("Cloud message received - ", V);
            let { cmd: Q, requestId: ae } = V;
            switch (Q) {
              case Y7:
                de("cloud.invites.verify", V.verification_token, V);
                break;
              case z7:
                de("cloud.invites.accept", V.verification_token, V);
                break;
              case J7:
                de("cloud.invites.reject", V.ssoId);
                break;
              case X7:
                a.info(
                  `sync-access, deviceId: ${t}, instanceId: ${e._instanceId}, requestId: ${V.requestId}`
                ),
                  await y();
                break;
              case Q7: {
                let W = V.session_identifier.id;
                if (
                  (a.info(
                    'Received "revoke-access" event from cloud with ssoId:',
                    W
                  ),
                  W === d)
                )
                  a.warn("Cannot revoke owner access via remote connection");
                else {
                  let { id: z } = await de("uum.getUserBySsoId", W);
                  await de("uum.removeUser", z);
                }
                break;
              }
              case Z7:
                await de("cloud.updateUCareState"),
                  de("messageBox.pub", {
                    type: "event",
                    namespace: "common:controller",
                    name: "warranty_service_state_updated",
                    payload: { data: {} },
                  });
                break;
              case eJ:
                V.session_identifier &&
                  (await A(V.session_identifier.id, V.payload));
                break;
              case tJ:
                V.session_identifier &&
                  (await C(V.session_identifier.id, V.payload));
                break;
              case rJ:
                V.session_identifier &&
                  (await R(V.session_identifier.id, V.payload));
                break;
              case sJ:
                await N(V.payload);
                break;
              case aJ:
                de("messageBox.pub", {
                  type: "event",
                  namespace: "common:controller",
                  name: "teleport_request",
                  payload: { data: V.payload },
                });
                break;
              case oJ:
                V.payload && V.payload.uploadPresignedUrl
                  ? de("system.uploadSupportFile", V.payload.uploadPresignedUrl)
                  : a.error(
                      "Invalid payload received with support file upload command from NCA, payload:",
                      V.payload
                    );
                break;
              default:
                if (!Q) {
                  if (ae) {
                    let W = c.get(ae);
                    if (W)
                      return (
                        clearTimeout(W.timeout), c.delete(ae), W.resolve(V)
                      );
                  }
                  a.debug("Unknown response.", O, V);
                  return;
                }
                a.warn(
                  `No cmd handler for ${Q} from instanceId: ${e._instanceId}, topic: ${O}, msg:`,
                  V
                );
                break;
            }
          } catch (V) {
            a.error(
              `Failed to handle command from instanceId: ${e._instanceId}, topic: ${O}, err:`,
              V
            );
          }
        },
        q = (F, $, O) => {
          a.debug("received ucp4 request over mqtt", F, O), n(F, $);
        },
        k = async (F, $, O) => {
          let V = O.includes("/guest/connect/"),
            { clientId: Q, ssoId: ae, connectionId: W } = F,
            z = V ? null : await de("auth.getUserBySsoId", ae);
          z && E(z, dJ(W) ? "mobile" : "cloud");
          let ee = JSON.parse($.toString()),
            te = `${Q}-${W}`,
            He = V
              ? `device/${t}/${Q}/guest/connect/${W}`
              : `device/${t}/${Q}/connect/${W}`,
            St = 1;
          if (!(V && ee.offer && !ee.token) && !(!V && ee.offer && !z))
            if (ee.offer) {
              if (i.offerReceived(te)) {
                a.warn(`Ignored duplicate offer for peer ${te}`);
                return;
              }
              a.info(`received offer for ${te}`),
                a.debug("offer:", ee),
                i.setOfferReceived(te);
              let bt = V
                ? await de(
                    "webrtc.trickleGuest",
                    ee.token,
                    B(v({}, ee), { clientId: Q, connectionId: W })
                  ).catch(
                    (ht) => (
                      a.warn(
                        `Failed to create guest peer for ${te}: ${ht.message}`
                      ),
                      ht instanceof T7 &&
                        p(He, { event: "error", seq: St++, code: ht.code }),
                      null
                    )
                  )
                : await de(
                    "webrtc.trickle",
                    z.id,
                    B(v({}, ee), { clientId: Q, connectionId: W })
                  ).catch(
                    (ht) => (
                      a.error(`Failed to create peer for ${te}: ${ht.message}`),
                      null
                    )
                  );
              if (!bt) return;
              bt.on("sdpcandidate", (ht) => {
                a.debug(`sending candidate for ${te}`, ht),
                  p(He, { event: "icecandidate", seq: St++, candidate: ht });
              }),
                bt.once("sdpcomplete", (ht) => {
                  a.info(`sdpcomplete for ${te}`),
                    a.debug("sdpcomplete:", ht),
                    p(He, { event: "sdpcomplete", seq: St++, answer: ht });
                });
              let Es = await bt.createAnswer(ee.offer, !1);
              a.info(`sending answer for ${te}`),
                a.debug("answer:", Es),
                i.addPeer(te, bt),
                p(He, { event: "answer", seq: St++, answer: Es });
            } else
              ee.candidate &&
                (a.debug(`received candidate from ${te}`, ee.candidate),
                i.addCandidate(te, ee.seq, ee.candidate));
        },
        I = async (F) => {
          a.info(
            `Encryption key creation initialized, instanceId: ${e._instanceId}`
          );
          let $ = { passwordHash: await _7.hash(F, r) },
            O = await l(`ucore/encryption-key-generate/${t}`, $, Pt());
          if (O.status !== "ok" && O.reason !== "Key exists")
            throw new Error(
              `ucore/encryption-key-generate returned error: ${O.reason}`
            );
          a.info(
            `Encryption key creation completed, instanceId: ${e._instanceId}`
          );
        },
        _ = async () => {
          try {
            let F = await l(`ucore/encryption-key-download/${t}`, {}, Pt());
            if (F.status === "ok") {
              a.info(`Received encryption keys, instanceId: ${e._instanceId}`);
              let { publicKey: $, pepper: O, privateKey: V } = F;
              return { publicKey: $, pepper: O, privateKey: V };
            } else
              throw F.reason === "Key does not exist"
                ? new In(An.ENCRYPTION_KEY_NOT_EXISTS)
                : new In(
                    An.FAILED_TO_GET_ENCRYPTION_KEY({
                      message: `downloadEncryptionKey returned error: ${F.reason}`,
                    })
                  );
          } catch (F) {
            throw (
              (a.warn(
                `Failed to receive encryption keys, instanceId: ${e._instanceId}, err:`,
                F
              ),
              F)
            );
          }
        },
        P = (F) => l(`ucore/twilio-token/${t}`, { identities: F }, Pt()),
        U = new Map([
          [kc("device/:deviceId"), M],
          [kc("device/:deviceId/client/:clientId/:ssoId/ucp4/:requestId"), q],
          [
            kc(
              "device/:deviceId/client/:clientId/guest/connect/:connectionId?"
            ),
            k,
          ],
          [
            kc(
              "device/:deviceId/client/:clientId/:ssoId/connect/:connectionId?"
            ),
            k,
          ],
        ]),
        j = (F, $) => {
          let O = U.keys(),
            V = O.next();
          for (; !V.done; ) {
            let Q = V.value,
              ae = Q(F);
            if (ae !== !1) return U.get(Q)(ae, $, F);
            try {
              let W = JSON.parse($.toString());
              if (W && W.cmd) {
                let z = Q(XD.join(F, W.cmd));
                if (z !== !1) return U.get(Q)(z, $, F);
              }
            } catch (W) {}
            V = O.next();
          }
          a.warn("no route for message", F, $.toString());
        };
      yr
        .all([tN(a, e, t, `device/${t}`), tN(a, e, t, `device/${t}/client/#`)])
        .catch((F) => {
          a.error(
            `Failed to subscribe to topics, deviceId: ${t}, instanceId: ${e._instanceId}`,
            F
          ),
            im || ((im = !0), de("cloud.forceReconnect"));
        }),
        e.on("message", j);
      let K = [
          ft("cloud.trace", (F, $) => {
            let O = Pt();
            return l(`trace/${t}/${O}`, $, O);
          }),
          ft("cloud.fingerprintAssets", async (F, $) => {
            let O = Pt();
            return l(`ucore/fingerprint-assets/${t}`, { filename: $ }, O).then(
              (V) => V.payload
            );
          }),
          ft("cloud.fingerprintKey", async () => {
            let F = Pt();
            return l(`ucore/fingerprint-key/${t}`, {}, F).then(
              ($) => $.payload
            );
          }),
          ft("cloud.aptCreds", async () => {
            let F = Pt();
            return await l(`ucore/apt-creds/${t}`, {}, F).then(
              ($) => $.payload
            );
          }),
          ft("cloud.getFirmwareToken", async () => {
            let F = Pt(),
              { payload: $ } = await l(
                `ucore/fwupdate-token/${t}`,
                { normalizeRoles: !0 },
                F
              );
            return $;
          }),
          ft("cloud.refreshSslCerts", async (F, $) => {
            let O = Pt(),
              V = await l(`ucore/certificate/${t}`, { keyPair: $ }, O);
            await N(V.payload);
          }),
          ft("cloud.syncAccess", (F, $) => y()),
          ft("cloud.createEncryptionKey", (F, $) => I($)),
          ft("cloud.downloadEncryptionKey", () => _()),
          ft("cloud.devicePublish", (F, ...$) => l(...$)),
          ft("cloud.devicePublishWithRetry", (F, ...$) => f(...$)),
          ft("cloud.getTwilioToken", (F, $) => P($)),
          ft("cloud.mfaReset", async () => {
            let F = Pt();
            return l(`ucore/mfa-reset/${t}`, {}, F).then(($) => $.payload);
          }),
          ft("cloud.mfaCheck", async () => {
            let F = Pt();
            return l(`ucore/get-mfa-resettable/${t}`, {}, F).then(
              ($) => $.payload
            );
          }),
          ft("cloud.syncOwner", async () => {
            let F = await de("uum.getOwner");
            await de("redux.dispatch", L7, F.sso_uuid);
            let { payload: $ } = await l(
              `ucore/sync-owner/${t}`,
              { ownerId: F.sso_uuid },
              Pt()
            );
            if ($.status === "error") throw new Error(JSON.stringify($));
            return $;
          }),
          ft("cloud.getTurnCredentials", m),
          ft("cloud.syncUserData", async () => {
            let F = await H7();
            if (!E7(F)) return T(F);
          }),
        ],
        J = [
          function* () {
            yield za([O7, q7], async ({ payload: F }) => D(F));
          },
          function* () {
            yield za(F7, async ({ payload: F }) => {
              await T(F);
            });
          },
        ];
      return (
        J.forEach((F) => de("redux.saga.add", F)),
        async () => {
          e.off("message", j),
            c.forEach((F) => {
              F.reject("Connection closed."), clearTimeout(F.timeout);
            }),
            J.forEach((F) => de("redux.saga.remove", F)),
            K.forEach((F) => ZD(F));
        }
      );
    };
  nN.exports = (e, t) => async (r) => {
    let s, a;
    im = !1;
    let { deviceId: o, ssoId: n, privateKey: i, clientCert: c } = r,
      d = I7(e, t),
      u = {
        privateKey: Buffer.from(i),
        clientCert: Buffer.from(c),
        caPath: XD.join(e.srcPath, "config", "nca_ca.crt"),
        keepalive: 30,
      };
    t.debug("Device cloud connect settings:", r);
    let p = (C) => {
        let R = [];
        try {
          let N = C.network.interfaces;
          return (
            C.portStatus
              .filter((b) => b.plugged)
              .forEach((b) => {
                N[b.id] && N[b.id].forEach((T) => R.push(T.address));
              }),
            N.br0 && N.br0.forEach((b) => R.push(b.address)),
            R
          );
        } catch (N) {
          return [];
        }
      },
      l = async () => {
        let [C, R, N, b, T, M, q, k, I, _, P] = await yr.all([
          de("system.info"),
          de("apps.getNormalizedForCloud"),
          de("auth.getNcaLoginToken"),
          M7(),
          aN(),
          x7(),
          $7(),
          de("system.getFeaturesToExpose"),
          B7(),
          V7(),
          G7(),
        ]);
        return {
          state: {
            reported: v(
              B(v({}, R), {
                name: C.name,
                hostname: C.hostname,
                ip: C.ip,
                mgmt_port: e.ports.https,
                ipAddrs: p(C),
                mac: C.mac,
                hardware: C.hardware,
                host_type: parseInt(C.hardware.sysid),
                login_token: N,
                controller_uuid: o,
                location: C.location,
                country: C.country,
                timezone: C.timezone,
                version: e.version,
                ucareState: C.ucareState,
                anonid: C.anonymous_device_id,
                isStacked: P,
                deviceState: T,
                deviceStateLastChanged: M,
                unadoptedUnifiOSDevices: b,
                consolesOnSameLocalNetwork: q.map((U) => U.mac),
                features: k,
                directConnectDomain: I,
                releaseChannel: _,
              }),
              C.fqdn ? { fqdn: C.fqdn } : {}
            ),
          },
        };
      },
      f = async () => {
        let C = await l(),
          R = JSON.stringify(C);
        if (a === R) {
          t.debug(`Skipping device state update, deviceId: ${o}`);
          return;
        }
        (a = R),
          t.debug(`Updating device state, deviceId: ${o}`),
          t.debug(C),
          s.publish(`device/${o}/state`, R, { qos: 1 });
      },
      m = QD(f, 5e3, { leading: !0, trailing: !0 }),
      E = async () => {
        let C = await oN();
        return Array.of(C.network || [], C.unifiOS || [])
          .flat()
          .some((N) => N.isManaged && N.capabilities?.includes("GATEWAY"));
      },
      y = async (C) => {
        let R = 2 * 60 * 60 * 24 * 1e3;
        try {
          let [N, { features: b }] = await yr.all([
            d.getDirectCert(),
            de("system.device"),
          ]);
          (b.hasGateway || process.env.IS_CLOUD_INSTANCE || (await E())) &&
            (!N || !N.validAtTimestamp(Date.now() + Math.max(C, R))) &&
            (await de("cloud.refreshSslCerts", await d.getDirectKey()));
        } catch (N) {
          t.error("Failed to get ssl certificates", N);
        }
      },
      h = Math.floor(Math.random() * 60),
      S = Math.floor(Math.random() * 60),
      D = Math.floor(Math.random() * 24);
    return (
      (Wt = new S7.CronJob(
        `${h} ${S} ${D} * * *`,
        async () => {
          t.info("Running scheduled check for ssl certificate update..."),
            await y(nm);
        },
        null,
        !1
      )),
      await (async () => {
        let C = Date.now();
        t.info(`Device connecting to cloud, deviceId: ${o}, instanceId: ${C}`),
          (cm = await v7(e, t));
        let R = !1,
          N = !1,
          b = null;
        return new yr((T, M) => {
          let q = [
            function* () {
              yield za(C7, () => m());
            },
            function* () {
              yield za([D7, N7, R7, P7, U7, k7], m);
            },
            function* () {
              yield za([rN], async ({ payload: k }) => {
                if (k === eN.SETUP) {
                  await yr.delay(3e4);
                  try {
                    await y(nm);
                  } catch (I) {
                    t.error(
                      "Failed to update certificates after setup complete",
                      I
                    );
                  } finally {
                    Wt && Wt.start();
                  }
                }
              });
            },
            function* () {
              yield za([rN], f);
            },
          ];
          (s = y7.device(
            B(v({}, u), { clientId: o, host: cm.unifiCloudAccess.iot.host })
          )),
            (s._instanceId = C),
            t.info(`Device instance created, instanceId: ${s._instanceId}`),
            s.on("connect", async () => {
              t.info(
                `Device connected to cloud, deviceId: ${o}, instanceId: ${s._instanceId}`
              ),
                (s.connected = !0),
                m(),
                ft("apps.changed", m),
                q.forEach((k) => de("redux.saga.add", k)),
                N ||
                  ((N = !0),
                  (b = await lJ(s, o, n, e, t, d)),
                  R || (T(s), (R = !0))),
                aN()
                  .then(async (k) => {
                    k === eN.SETUP && (await yr.delay(3e4), y(nm));
                  })
                  .finally(() => {
                    Wt && Wt.start();
                  }),
                de("firmware.refreshUpdateToken").catch(() => null),
                de("controllers.updateAptCreds").catch(() => null),
                de("events.consoleConnectedToCloud").catch(() => null),
                de("cloud.syncUserData").catch(() => null),
                de("cloud.syncOwner").catch((k) =>
                  t.error("Failed to sync owner to NCA:", k)
                ),
                uJ(),
                de("redux.dispatch", sN, !0).catch((k) => {
                  t.warn(
                    'Failed to dispatch "UPDATE_CLOUD_CONNECTED" to true',
                    k
                  );
                });
            }),
            s.on("close", async () => {
              t.warn(
                `Device disconnected from cloud, deviceId: ${o}, instanceId: ${s._instanceId}`
              ),
                de("events.consoleDisconnectedFromCloud").catch(() => null),
                m.cancel(),
                b && (await b()),
                (b = null),
                ZD("apps.changed", m),
                q.forEach((k) => de("redux.saga.remove", k)),
                N && (await W7()) && vD(t),
                (N = !1),
                (s.connected = !1),
                (a = void 0),
                Wt && Wt.stop(),
                de("redux.dispatch", sN, !1).catch((k) => {
                  t.warn(
                    'Failed to dispatch "UPDATE_CLOUD_CONNECTED" to false',
                    k
                  );
                });
            }),
            s.on("error", (k) => {
              t.error(
                `Device AWS IoT error, deviceId: ${o}, instanceId: ${s._instanceId}`,
                k
              ),
                !s.connected && !R && (M(k), (R = !0), s.end(!0)),
                (N = !1),
                (s.connected = !1),
                (a = void 0),
                Wt && Wt.stop();
            }),
            s.on("reconnect", () => {
              t.warn(
                `Device is reconnecting to cloud, deviceId: ${o}, instanceId: ${s._instanceId}`
              ),
                de("trace.cloud.reconnect", "IoT SDK reconnect");
            });
        });
      })(),
      s
    );
  };
});
var dN = w((qIe, uN) => {
  var pJ = require("bluebird"),
    { publish: mJ } = require("handoff"),
    { timeout: fJ, TimeoutError: hJ } = require("promise-timeout"),
    cN = 5e3;
  uN.exports =
    (e, t) =>
    async (r, s = !1) => {
      let a = pJ.promisify(r.end);
      try {
        let { hasInternet: o } = await mJ("system.info");
        return (
          t.info(
            `Disconnecting from cloud, device has internet: ${o}, force: ${s}`
          ),
          await fJ(a(s), cN)
        );
      } catch (o) {
        if (o instanceof hJ && !s)
          return (
            t.warn(
              `Timeout (${cN}) for disconnecting from cloud, force to disconnect again`
            ),
            a(!0)
          );
        throw o;
      }
    };
});
var pN = w((FIe, lN) => {
  var yJ = require("bluebird");
  lN.exports = (e, t) => async (r, s) => {
    t.info(`Unregistering cloud access, deviceId: ${r}`);
    let a = `unregister/${r}`;
    await yJ.promisify(s.publish)(a, "{}", { qos: 1 }),
      t.info(`Unregistered cloud access, deviceId: ${r}`);
  };
});
var fN = w((LIe, mN) => {
  var { getCloudSettings: wJ, getDirectConnectDomain: gJ } = H();
  mN.exports = () => async (e) => {
    let [t, r] = await Promise.all([wJ(), gJ()]),
      s = t.deviceId,
      a = t.ssoId,
      o = t.deviceAuth;
    return {
      ssoId: a,
      deviceId: s,
      deviceAuth: o,
      enabled: !!e,
      connected: e ? e.connected : !1,
      deviceDomain: r,
      directConnectDomain: r,
    };
  };
});
var um = w((MIe, hN) => {
  var EJ = ml();
  hN.exports = async (e = null) => {
    try {
      return await EJ();
    } catch (t) {
      return e && e.error("failed to read eeprom", t), null;
    }
  };
});
var EN = w((xIe, gN) => {
  var SJ = require("https"),
    { fetch: bJ } = ie(),
    { publish: _J } = require("handoff"),
    TJ = require("aws-api-gateway-client").default,
    { getConfigDetails: IJ } = Uc(),
    AJ = um(),
    { AppError: yN, errorCodes: wN } = (se(), me),
    { AWS_REQUEST_TIMEOUT_MS: vJ } = Rc(),
    { UPDATE_CLOUD_SETTINGS: CJ } = Z(),
    DJ = (e, t) => (t ? B(v({}, e), { eeprom: t.toString("base64") }) : e),
    NJ = async (e, t, r, s) => {
      try {
        let a = await e.invokeApi({}, "/check-certificate", "POST", t, r);
        return s.debug("check certificate response", a.data), a.data;
      } catch (a) {
        return s.error("error checking device certificate", a), null;
      }
    };
  gN.exports = (e, t) => async (r) => {
    let s = async (f, m, E, y, h) => {
        let S = new SJ.Agent({ key: h, cert: y }),
          D = { "Content-Type": "application/json", "x-amzn-iot-thingname": E };
        try {
          let A = `https://${f}/role-aliases/${m}/credentials`,
            C = await bJ(A, { agent: S, method: "GET", headers: D }, t);
          if (!C.ok) {
            let R = C.status,
              N = await C.text(),
              b = `Error fetching url = "${A}". Response status: ${R}. Response text: ${N}`;
            throw new yN(wN.FAILED_TO_RECEIVE_AWS_CREDENTIALS({ message: b }));
          }
          return await C.json();
        } catch (A) {
          throw new yN(wN.FAILED_TO_RECEIVE_AWS_CREDENTIALS, A);
        }
      },
      a = async (f, m, E, y) => {
        let { accessKeyId: h, secretAccessKey: S, sessionToken: D } = m,
          A = TJ.newClient({
            invokeUrl: f,
            accessKey: h,
            secretKey: S,
            sessionToken: D,
            region: E,
          }),
          C = {
            headers: {
              "Content-Type": "application/json",
              "x-amzn-iot-thingname": y,
            },
            timeout: vJ,
          },
          R = { requestNewCertificate: !1 },
          N = await AJ(t);
        return NJ(A, C, DJ(R, N), t);
      },
      o = async (f, m) => {
        let E = {
          ssoId: m,
          deviceId: f.deviceId,
          deviceAuth: f.deviceAuth,
          privateKey: f.privateKey,
          clientCert: f.certificatePem,
          clientCertArn: f.certificateArn,
        };
        return await _J("redux.dispatch", CJ, E), E;
      };
    t.info("checking certificate for deviceId:", r.deviceId);
    let n = await IJ(e, t),
      i = n.unifiCloudAccess.apiGatewayUI.url,
      c = n.unifiCloudAccess.iot.credentialsProvider,
      d = n.unifiCloudAccess.iot.deviceRole,
      u = n.unifiCloudAccess.region,
      p = await s(c, d, r.deviceId, r.clientCert, r.privateKey),
      l = await a(i, p.credentials, u, r.deviceId);
    return l
      ? (t.info("updating certificate and deviceId:", l.deviceId),
        o(l, r.ssoId))
      : (t.info("IoT certificate check succeeded"), r);
  };
});
var bN = w(($Ie, SN) => {
  var { fetch: dm } = ie(),
    { UPDATE_DEVICE_SETTINGS: Oc } = Z(),
    { publish: qc } = require("handoff"),
    RJ = um(),
    { getCloudSettings: PJ } = H(),
    UJ = ["ASSIGNED", "RMA_IN_PROGRESS", "REPLACING", "REPLACED"];
  SN.exports = (e, t) => {
    let r = e.cloudEnv,
      s = `${e.cloud[r].warrantyService}/api/unifi-care/v1`;
    return {
      updateUCareState: async () => {
        let { deviceId: i, deviceAuth: c } = await PJ(),
          d = {
            "x-ubnt-device-id": i,
            "x-ubnt-device-auth": c,
            "Content-Type": "application/json",
          },
          u = JSON.stringify([]);
        try {
          let p = await dm(`${s}/check`, {
              method: "POST",
              headers: d,
              body: u,
            }),
            l = await p.json();
          if (p.status !== 200)
            throw new Error(
              `HTTP request to '/unifi-care/v1/check' responded with ${p.status}`
            );
          let f = UJ.includes(l.devices[0].state);
          await qc("redux.dispatch", Oc, { hasUCare: f });
        } catch (p) {
          t.error(
            `Failed to fetch warranty state for device. Reason: ${p.message}`
          );
        }
      },
      getList: async (i) => {
        let d = { Cookie: `${i.name || e.cloud[r].ssoCookieName}=${i.value}` },
          u = await dm(`${s}/list`, { headers: d }),
          p = await u.json();
        if (u.status !== 200)
          throw new Error(
            `HTTP request to '/unifi-care/v1/list' responded with ${u.status}`
          );
        return p;
      },
      getUCareOwnerEmail: async () => {
        t.info("Checking for UniFi Care owner of device...");
        let i = await RJ(t),
          c = await dm(`${s}/get-owner`, { method: "POST", body: i }),
          d = await c.json();
        if (c.status !== 200 && c.status !== 404)
          throw (
            (await qc("redux.dispatch", Oc, { hasUCare: !1 }),
            new Error(
              `HTTP request to ${s}/get-owner responed with ${c.status}`
            ))
          );
        return c.status === 404
          ? (t.info("No UniFi Care owner assigned to device."),
            await qc("redux.dispatch", Oc, { hasUCare: !1 }),
            !1)
          : (t.info("Found UniFi Care owner assigned to device."),
            await qc("redux.dispatch", Oc, { hasUCare: !0 }),
            d.ownerEmail);
      },
    };
  };
});
var TN = w((BIe, _N) => {
  var kJ = require("node-fetch"),
    { AppError: OJ, errorCodes: qJ } = (se(), me);
  _N.exports = (e, t) => {
    let r = e.cloud[e.cloudEnv].fwUpdateUrl;
    return {
      getToken: async (a) => {
        let o = await kJ(`${r}/api/v1/sso-token`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_uuid: a.uuid,
            ubic_auth: a.ssoAuth.value,
          }),
        });
        if (!o.ok)
          throw new OJ(qJ.FAILED_TO_GET_FIRMWARE_SERVICE_BEARER, {
            statusText: o.statusText,
          });
        return (await o.json()).token;
      },
    };
  };
});
var AN = w((VIe, IN) => {
  var { publish: FJ, subscribe: Fc, unsubscribe: LJ } = require("handoff"),
    { fetch: MJ } = ie(),
    xJ = require("aws-api-gateway-client").default,
    { getConfigDetails: $J } = Uc(),
    { formatBackupList: BJ } = (Ue(), We),
    { AWS_REQUEST_TIMEOUT_MS: lm } = Rc();
  IN.exports = async (e, t) => {
    let r = async (o, n, i = {}) => {
        let c = e.cloudEnv,
          d = n.name || e.cloud[c].ssoCookieName,
          u = { "Content-Type": "application/json", Cookie: `${d}=${n.value}` },
          p = await MJ(o + "/create-credentials", {
            method: "POST",
            headers: u,
            body: JSON.stringify(i),
          });
        if (p && p.status !== 200) {
          let l = await p.text();
          throw (
            (t.error(
              `Failed to createAwsCredentials. cloudEnv: ${c}. Server response status: ${p.status}. Server response text: ${l}`
            ),
            new Error("ssoAuthError"))
          );
        }
        return p.json();
      },
      s = async (o) => {
        let {
            unifiCloudAccess: {
              apiGateway: { url: n },
            },
          } = await $J(e, t),
          i = await r(n, o),
          { accessKeyId: c, secretKey: d, sessionToken: u, region: p } = i;
        return xJ.newClient({
          invokeUrl: n,
          accessKey: c,
          secretKey: d,
          sessionToken: u,
          region: p,
        });
      },
      a = [
        Fc("cloud.api.getBackupList", async (o, n) => {
          let c = await (
              await s(n)
            ).invokeApi({}, "/ucore/list-backups", "GET", { timeout: lm }),
            d = await FJ("system.hardware");
          return BJ(c.data.backups, d.shortname);
        }),
        Fc(
          "cloud.api.getBackupUrl",
          async (o, n, i, c) =>
            (
              await (
                await s(n)
              ).invokeApi(
                {},
                `/ucore/backup/${encodeURIComponent(c)}/${encodeURIComponent(
                  i
                )}`,
                "GET",
                { timeout: lm }
              )
            ).data.url
        ),
        Fc(
          "cloud.api.downloadEncryptionKey",
          async (o, n) =>
            (
              await (
                await s(n)
              ).invokeApi({}, "/ucore/encryption-key", "GET", { timeout: lm })
            ).data
        ),
        Fc(
          "cloud.api.registerDevice",
          async (o, n, i, c) =>
            (await (await s(n)).invokeApi({}, "/register", "POST", i, c)).data
        ),
      ];
    return () => {
      a.forEach((o) => LJ(o));
    };
  };
});
var NN = w((jIe, DN) => {
  var { v4: vN } = require("uuid"),
    { publish: Fr, subscribe: Lc, unsubscribe: VJ } = require("handoff"),
    { AppError: jJ, errorCodes: GJ } = (se(), me),
    { getCloudSettings: HJ, getCloudInvites: CN } = H(),
    { SET_CLOUD_INVITE: WJ, REMOVE_CLOUD_INVITE: KJ } = Z();
  DN.exports = (e, t) => {
    let r = {
        "0xe930": "cloudkey",
        "0xe940": "cloudkey",
        "0xe950": "cloudkey",
        "0xe960": "cloudkey-g2",
        "0xe970": "cloudkey-plus",
        "0xea11": "udm-base",
        "0xea13": "udm-se",
        "0xea15": "udm-pro",
      },
      s = async (c, d) => {
        let [u, { deviceId: p }] = await Promise.all([Fr("system.info"), HJ()]),
          l = r[u.hardware.sysid],
          { transferOwnership: f } = d,
          m = `api/v1/create-invitation/${p}`,
          E = vN(),
          y = B(v({}, d), {
            verificationToken: E,
            emailVars: { device_type: l },
          });
        t.info("Inviting user to device", m, y);
        let h = await Fr("cloud.devicePublish", m, y, vN()),
          {
            payload: { status: S },
          } = h;
        switch (S) {
          case "pending-accept":
          case "sent":
            await Fr("redux.dispatch", WJ, {
              token: E,
              data: { userId: c, transferOwnership: f },
            });
            return;
          default:
            throw (
              (t.warn(`Failed to send the invite: ${JSON.stringify(h)}`),
              new jJ(
                GJ.FAILED_TO_SEND_INVITATION({
                  message: JSON.stringify(h.payload),
                })
              ))
            );
        }
      },
      a = async (c, d) => {
        let u = await CN(),
          { userId: p, transferOwnership: l } = u[c] || {};
        if (!p)
          return t.warn(`Unable to accept invite, invalid invite token: ${c}`);
        if (d.ownershipTransferred)
          try {
            await Fr(
              "uum.notifyInviteAccepted",
              p,
              B(v({}, d), { ownership_transferred: !0 })
            ),
              t.info("Completing ownership transfer to: ", p);
            return;
          } catch (f) {
            t.error("Unable to complete owner transfer", f);
          }
        t.info(`Accepting invite ${c} for user ${p}`, d);
        try {
          await Fr(
            "uum.acceptInvite",
            p,
            v(
              {
                sso_id: d.session_identifier.id,
                sso_account: d.sso_email,
                email: d.sso_email,
                first_name: d.first_name,
                last_name: d.last_name,
                sso_picture: d.picture,
              },
              d
            )
          );
        } catch (f) {
          t.error("Unable to accept invite", f);
        }
        l || (await Fr("redux.dispatch", KJ, c));
      },
      o = async (c, d) => {
        let u = await CN(),
          { userId: p } = u[c] || {};
        if (!p)
          return t.warn(
            "Unable to verify invite, invalid verification token:",
            c
          );
        t.info(`Verifying invitation token for user "${p}"`);
        try {
          await Fr("uum.verifyInvite", p, {
            sso_id: d.session_identifier.id,
            sso_account: d.sso_email,
            email: d.sso_email,
            first_name: d.first_name,
            last_name: d.last_name,
            sso_picture: d.picture,
          });
        } catch (l) {
          t.error("Invite verification failed:", l);
        }
      },
      n = async (c) => {
        let d = await Fr("uum.getUserBySsoId", c),
          u = d && d.unique_id;
        if (!u) return t.error("Unable to reject invite, invalid userId");
        t.info(`Rejecting invite for user ${u}`);
        try {
          await Fr("uum.rejectInvite", u), await Fr("uum.removeUser", u);
        } catch (p) {
          t.error("Unable to reject invite", p);
        }
      },
      i = [
        Lc("cloud.invites.send", async (c, d, u) => s(d, u)),
        Lc("cloud.invites.verify", async (c, d, u) => o(d, u)),
        Lc("cloud.invites.accept", async (c, d, u) => a(d, u)),
        Lc("cloud.invites.reject", async (c, d) => n(d)),
      ];
    return async () => {
      i.forEach((c) => VJ(c));
    };
  };
});
var qN = w((GIe, ON) => {
  var { publish: RN, subscribe: PN, unsubscribe: YJ } = require("handoff"),
    { v4: UN } = require("uuid"),
    { getCloudSettings: kN } = H();
  ON.exports = (e, t) => {
    let r = async (o) => {
        let n = UN();
        if ((t.info(`grant cloudAccess to UID SSO ${n}`), o === ""))
          throw new Error("uidAuthToken is empty");
        t.debug("uid auth token", o);
        let i = { requestId: n, uidAuthToken: o };
        t.debug("grant access to uid user", i);
        let { deviceId: c } = await kN();
        await RN("cloud.publish", `grant-access/${c}`, i);
      },
      s = async (o) => {
        let n = UN();
        if ((t.info(`revoke cloudAccess from UID SSO ${o}, ${n}`), o === ""))
          throw new Error("uidSsoId is empty");
        let { deviceId: i } = await kN();
        await RN("cloud.publish", `revoke-access/${i}`, {
          requestId: n,
          ssoId: o,
        });
      },
      a = [
        PN("cloud.uid.grant", async (o, n) => r(n)),
        PN("cloud.uid.revoke", async (o, n) => s(n)),
      ];
    return async () => {
      a.forEach((o) => YJ(o));
    };
  };
});
var $N = w((HIe, xN) => {
  var { publish: FN, subscribe: LN, unsubscribe: zJ } = require("handoff"),
    { getCloudSettings: MN } = H();
  xN.exports = (e, t) => {
    let r = async (o) => {
        t.info(`Revoke cloud access for user, ssoId: ${o}`);
        try {
          let { deviceId: n } = await MN();
          await FN("cloud.publish", `revoke-access/${n}`, { ssoId: o });
        } catch (n) {
          t.error(`Unable to revoke cloud access for user, ssoId: ${o}`, n);
        }
      },
      s = async (o) => {
        t.info(`Grant cloud access to user, ssoId: ${o}`);
        try {
          let { deviceId: n } = await MN();
          await FN("cloud.publish", `grant-access/${n}`, { ssoId: o });
        } catch (n) {
          t.error(`Unable to grant cloud access to user, ssoId: ${o}`, n);
        }
      },
      a = [
        LN("cloud.revokeAccess", async (o, n) => r(n)),
        LN("cloud.grantAccess", async (o, n) => s(n)),
      ];
    return async () => {
      a.forEach((o) => zJ(o));
    };
  };
});
var HN = w((WIe, GN) => {
  var BN = g(require("lodash")),
    { publish: VN, subscribe: pm, unsubscribe: JJ } = require("handoff"),
    jN = require("fs-extra"),
    { unzip: XJ } = require("zlib"),
    QJ = require("node-fetch"),
    { v4: ZJ } = require("uuid"),
    eX = require("path"),
    { getCloudSettings: mm } = H(),
    { formatBackupList: tX } = (Ue(), We),
    rX = async (e, t, r = {}) => {
      let a = (await jN.stat(e)).size,
        o = jN.createReadStream(e),
        n = await QJ(t, {
          method: "PUT",
          headers: v(
            { "Content-length": a },
            Object.entries(r).reduce(
              (i, [c, d]) =>
                B(v({}, i), { [`x-amz-meta-${c}`]: JSON.stringify(d) }),
              {}
            )
          ),
          body: o,
        });
      if (!n.ok)
        throw new Error(
          `Failed to upload backup file to cloud. Reason: ${n.statusText}`
        );
      return n;
    };
  GN.exports = (e, t) => {
    let r = async (d, u, p = null) => {
        let l = await VN("cloud.devicePublish", d, u, ZJ());
        if (p === null) return l;
        let f = (0, BN.get)(l, p);
        if (f === void 0)
          throw new Error(
            `Requested path = ${p} not found in response = ${JSON.stringify(l)}`
          );
        return f;
      },
      s = async (d, u) => {
        let { deviceId: p } = await mm(),
          l = `ucore/download-backup/${p}`;
        return await r(l, { deviceId: u, fileKey: d }, "payload.url");
      },
      a = async ({ filename: d, metadata: u = {} }) => {
        try {
          let { deviceId: p } = await mm();
          return await r(
            `ucore/backup/${p}`,
            {
              filename: d,
              metadata: Object.entries(u).reduce(
                (f, [m, E]) => B(v({}, f), { [m]: JSON.stringify(E) }),
                {}
              ),
            },
            "payload.url"
          );
        } catch (p) {
          throw (t.error("Unable to get backup upload url", p), p);
        }
      },
      o = (d = {}) => {
        Object.entries(d).forEach(([u, p]) => {
          if (u !== u.toLowerCase())
            throw new Error(`invalid key: "${u}", should be lowercase`);
          if (p === void 0)
            throw new Error(`invalid "undefined" value for key: "${u}"`);
        });
      },
      n = async (d, u) => {
        t.info("Uploading backup to cloud"), o(u);
        let p = await a({ filename: eX.basename(d), metadata: u });
        await rX(d, p, u), t.info("Backup uploaded to cloud");
      },
      i = async () => {
        let { deviceId: d, ssoId: u } = await mm(),
          p = `ucore/list-backups/${d}`,
          l = await r(p, { ssoId: u }),
          f = async ({ payload: E, compression: y }) => {
            if (y === "gzip")
              return await new Promise((h, S) => {
                let D = Buffer.from(E, "base64");
                XJ(D, (A, C) => {
                  if (A) return S(A);
                  try {
                    return h(JSON.parse(C.toString("utf8")));
                  } catch (R) {
                    return S(R);
                  }
                });
              });
            if (E.backups) return E;
            throw new Error(
              `Unexpected response from ${p} = ${JSON.stringify(l)}`
            );
          },
          { backups: m } = await f(l);
        return m.map((h) => {
          var S = h,
            { backups: E } = S,
            y = dt(S, ["backups"]);
          return B(v({}, y), {
            backups: E.map((C) => {
              var R = C,
                { metadata: D = {} } = R,
                A = dt(R, ["metadata"]);
              return B(v({}, A), {
                metadata: Object.entries(D).reduce(
                  (N, [b, T]) => B(v({}, N), { [b]: JSON.parse(T) }),
                  {}
                ),
              });
            }),
          });
        });
      },
      c = [
        pm("cloud.storeBackup", (d, u, p) => n(u, p)),
        pm("cloud.getBackupUrl", (d, u, p) => s(u, p)),
        pm("cloud.getBackupList", async () => {
          let [d, u] = await Promise.all([VN("system.hardware"), i()]);
          return tX(u, d.shortname);
        }),
      ];
    return () => {
      c.forEach((d) => JJ(d));
    };
  };
});
var YN = w((KIe, KN) => {
  var { publish: vn } = require("handoff"),
    { get: sX } = require("lodash"),
    aX = "request_response",
    oX = "request_error",
    WN = class {
      constructor(t = {}, r, s = null) {
        (this.events = t), (this.logger = r);
        let a = {
          StringEquals: {
            type: ["event"],
            namespace: ["common:controller"],
            name: Object.keys(this.events),
          },
        };
        (this.send = this.send.bind(this)),
          (this.close = this.close.bind(this)),
          (this.detach = this.detach.bind(this)),
          (this.mbToken = s),
          vn("messageBox.sub", a, s)
            .then((o) => {
              (this.mbToken = o),
                vn("messageBox.listen", o, this).catch((n) => r.error(n));
            })
            .catch((o) => r.error(o));
      }
      async send(t) {
        let r = null;
        try {
          let s = JSON.parse(t),
            a = sX(s, "payload.data", {});
          r = a.requestId || null;
          let { responseEvent: o = aX } = a;
          if (typeof this.events[s.name] == "function") {
            let n = await this.events[s.name](a);
            n &&
              r &&
              vn("messageBox.pub", {
                type: "event",
                namespace: "common:controller",
                name: o,
                payload: { data: B(v({}, n), { requestId: r }) },
              }).catch((i) => this.logger.error("Failed to send response:", i));
            return;
          }
          this.logger.warn(`Unhandled MessageBox event ${s.name}`);
        } catch (s) {
          this.logger.error("MessageBox listener error:", s),
            r &&
              vn("messageBox.pub", {
                type: "event",
                namespace: "common:controller",
                name: oX,
                payload: { data: { requestId: r, error: s.message } },
              }).catch((a) => this.logger.error("Failed to send response:", a));
        }
      }
      close() {}
      detach() {
        this.mbToken && vn("messageBox.unsub", this.mbToken);
      }
    };
  KN.exports = WN;
});
var eR = w((YIe, ZN) => {
  var { publish: Ja } = require("handoff"),
    { v4: zN } = require("uuid"),
    nX = require("ajv"),
    { get: JN } = require("lodash"),
    { takeEvery: iX } = require("redux-saga/effects"),
    cX = YN(),
    { ValidationError: uX } = (se(), me),
    { getCloudSettings: XN } = H(),
    { CONSOLE_LOCATION_CHANGED: dX } = Z(),
    lX = new nX(),
    pX = {
      type: "object",
      properties: {
        token: { type: "string" },
        expirationTimestamp: { type: "number" },
        operation: { enum: ["CREATE", "REMOVE", "UPDATE"] },
        metadata: { type: "object" },
      },
      required: ["token", "operation"],
    },
    QN = lX.compile(pX),
    mX = "teleport_device_token_update",
    fX = "teleport_response",
    hX = "get_ice_config",
    yX = "console_location_changed",
    wX = "TELEPORT";
  ZN.exports = async (e, t) => {
    let r = new cX(
        {
          [mX]: async (a) => {
            if (!QN(a)) throw new uX(QN);
            t.debug(`Publishing device token ${a.operation} update`);
            let { deviceId: o } = await XN(),
              n = await Ja(
                "cloud.devicePublish",
                `ucore/token/teleport/${o}`,
                a,
                zN()
              ),
              i = JN(n, "payload.status", ""),
              c = JN(n, "payload.message", "");
            return (
              i === "success"
                ? t.debug(`Device token ${a.operation} successful.`)
                : t.warn(
                    "Device token update failed.",
                    c.replace(new RegExp(a.token, "g"), "[TOKEN HIDDEN]")
                  ),
              n.payload
            );
          },
          [fX]: async (a) => {
            if (!a.teleportRequestId)
              throw new Error("Teleport request ID not provided for response.");
            let { deviceId: o } = await XN();
            return await Ja(
              "cloud.devicePublish",
              `ucore/teleport/${o}`,
              a,
              zN()
            );
          },
          [hX]: () => (
            t.debug("Retrieving TURN credentials"),
            Ja("cloud.getTurnCredentials")
          ),
        },
        t,
        wX
      ),
      s = [
        function* () {
          yield iX(dX, ({ payload: a }) => {
            Ja("messageBox.pub", {
              type: "event",
              namespace: "common:controller",
              name: yX,
              payload: { data: { location: a } },
            }).catch((o) => t.error("Failed to send location change:", o));
          });
        },
      ];
    return (
      s.forEach((a) => Ja("redux.saga.add", a)),
      async () => {
        r.detach(),
          s.forEach((a) => Ja("redux.saga.remove", a).catch(() => null));
      }
    );
  };
});
var oR = w((QIe, aR) => {
  Ns();
  dD();
  mD();
  var Mc = require("bluebird"),
    { publish: aa, subscribe: or, unsubscribe: gX } = require("handoff"),
    { getCloudSettings: oa } = H(),
    { UPDATE_CLOUD_SETTINGS: tR } = Z(),
    rR = Wa(),
    Xa = as(),
    EX = yD(),
    SX = iN(),
    bX = dN(),
    _X = pN(),
    TX = fN(),
    IX = EN(),
    AX = bN(),
    vX = TN(),
    CX = AN(),
    DX = NN(),
    NX = qN(),
    RX = $N(),
    PX = HN(),
    UX = eR(),
    sR = 10 * 1e3,
    kX = 60 * 60 * 1e3;
  aR.exports = async (e, t) => {
    let r = null,
      s = !1,
      a = EX(e, t),
      o = SX(e, t),
      n = bX(e, t),
      i = _X(e, t),
      c = TX(e, t),
      d = pD(e, t),
      u = uD(e, t),
      p = IX(e, t),
      l = AX(e, t),
      f = vX(e, t),
      m = async (N) => {
        if (s) throw new Error("Console is already attempting to connect...");
        if (!r)
          try {
            (s = !0), (r = await o(N));
          } finally {
            s = !1;
          }
      },
      E = async (N) => {
        await R(),
          await Mt(
            m,
            rR,
            { maxAttempts: 8, interval: 500, backoff: 2, logger: t },
            N
          );
      },
      y = [],
      h = () => Mc.map(y, (N) => N()),
      S = await Xa(t, "cloud.api", CX(e, t.wrap("cloud.api"))),
      D = async () => {
        let N = sR;
        for (; !r; )
          try {
            let b = await oa();
            if (!b.deviceId) return;
            let T = await p(b);
            await m(T);
          } catch (b) {
            let T = sR;
            rR(b) || ((N = Math.min(kX, N * 2)), (T = N * Math.random())),
              t.error(
                `Unable to connect to cloud, retrying in ${Math.round(
                  T / 1e3
                )} seconds...`,
                b.message
              ),
              aa("trace.cloud.reconnect", b.message),
              await Mc.delay(T);
          }
      },
      A = async () => {
        let { features: N } = await aa("system.device");
        await aa(
          "system.patch",
          v(
            { releaseChannel: "release" },
            N.cloudBackup ? { autoBackupEnabled: !1 } : {}
          )
        ),
          await aa("firmware.clearUpdateToken");
      },
      C = [
        or("cloud.api.getFirmwareToken", (N, b) => f.getToken(b)),
        or("cloud.register", async (N, { ssoUser: b }) => {
          let { deviceId: T } = await oa();
          if (T)
            return (
              t.info(
                `Device already registered to cloud, skipping registration. DeviceId: ${T}`
              ),
              !0
            );
          let M = await a(b);
          return M ? (await E(M), !0) : !1;
        }),
        or("cloud.unregister", async () => {
          try {
            process.env.IS_CLOUD_INSTANCE || (await A());
            let { deviceId: N } = await oa(),
              b = N,
              T = r;
            (r = null),
              await aa("redux.dispatch", tR, {}),
              await h(),
              (y.length = 0),
              await i(b, T),
              await n(T);
          } catch (N) {
            t.error("Failed to unregister from cloud:", N);
          }
        }),
        or("cloud.forceReconnect", async () => {
          t.info("Forcing cloud reconnection...");
          try {
            await n(r, !0);
          } catch (N) {
            t.error(`Failed to disconnect: ${N.message}`);
          } finally {
            r = null;
          }
          try {
            await D(), t.info("Reconnected!");
          } catch (N) {
            t.error("Reconnection failed.", N);
          }
        }),
        or("cloud.publish", async (N, b, T) =>
          Mc.promisify(r.publish)(b, JSON.stringify(T), { qos: 1 })
        ),
        or("cloud.status", async () => c(r)),
        or("cloud.sendPushNotification", async (N, b, T) => {
          let { deviceId: M } = await oa();
          return d(M, b, T);
        }),
        or("cloud.sendEmail", async (N, b, T) => {
          let { deviceId: M } = await oa();
          return u(M, b, T);
        }),
        or("cloud.migrate", async (N, b) => {
          let { deviceId: T } = await oa();
          if (T) {
            t.info(
              `Device already registered to cloud, skipping migration. DeviceId: ${T}`
            );
            return;
          }
          await aa("redux.dispatch", tR, v({}, b)), await E(b);
        }),
        or("cloud.updateUCareState", async () => {
          await l.updateUCareState();
        }),
        or("cloud.getWarrantyList", (N, b) => l.getList(b)),
        or("cloud.getUCareOwnerEmail", () => l.getUCareOwnerEmail()),
      ],
      R = async () => (
        y.length !== 0 && t.warn("middleware already attached - ", y.length),
        y.push(
          Xa(t, "cloud.invites", DX(e, t.wrap("cloud.invites"))),
          Xa(t, "cloud.access", RX(e, t.wrap("cloud.access"))),
          Xa(t, "cloud.uid", NX(e, t.wrap("cloud.uid"))),
          Xa(t, "cloud.teleport", UX(e, t.wrap("cloud.teleport")))
        ),
        (await aa("system.device")).features.cloudBackup &&
          y.push(Xa(t, "cloud.backup", PX(e, t.wrap("cloud.backup")))),
        Mc.all(y)
      );
    return (
      (async () => {
        let { deviceId: N } = await oa();
        !N || (await R(), await D());
      })(),
      async () => (
        r && (await n(r, !0)), C.forEach((N) => gX(N)), await S(), h()
      )
    );
  };
});
var nR,
  fm,
  xc,
  iR,
  cR = x(() => {
    (nR = g(require("handoff"))), (fm = g(require("lodash")));
    Ue();
    va();
    xc = g(H());
    Re();
    iR = (e, t) => async (r) => {
      let s = async () => {
        try {
          await (await Ye())(we.NOTIFICATIONS)
            .where({ event_id: "consoleUpdateAvailable" })
            .del();
        } catch (a) {
          t.error(
            "Failed to clean up existing available console update notifications",
            a
          );
        }
      };
      try {
        let { releaseDate: a } = r,
          o = await (0, xc.getSystemInfo)(),
          n = (0, fm.get)(o, "hardware.firmwareVersion"),
          i = (0, fm.get)(o, "hardware.shortname"),
          c = await (0, xc.getName)(),
          d = Zu(i, n),
          u = new Date(a),
          p = `${u.getDate()}.${u.getMonth()}.${u.getFullYear()}`;
        await (0, nR.publish)("notifications.add", {
          eventId: "consoleUpdated",
          eventData: {
            consoleName: { text: c },
            version: { text: n },
            action: { url: d },
          },
          email: { vars: { version_current: n, release_date: p } },
          push: { message: { body: `${c} has updated to UniFi OS ${n}!` } },
        }),
          s();
      } catch (a) {
        t.error('Failed to create "console updated" notification:', a);
      }
    };
  });
var uR,
  dR,
  lR,
  $c,
  OX,
  pR,
  mR = x(() => {
    (uR = g(require("handoff"))), (dR = g(require("lodash")));
    jt();
    (lR = g(Z())), ($c = g(H()));
    Zt();
    vo();
    cR();
    (OX = (e, t) => {
      let r = iR(e, t),
        s = () =>
          (0, uR.publish)("redux.dispatch", lR.CLEAR_FIRMWARE_UPDATING_INFO);
      return () =>
        setTimeout(async () => {
          try {
            let a = await (0, $c.getFWUpdatingInfo)();
            if (a.state !== Ao.IN_PROGRESS) return;
            let { fromVersion: o, toVersion: n, triggeredBy: i } = a,
              c = await (0, $c.getSystemInfo)(),
              d = (0, dR.get)(c, "hardware.firmwareVersion");
            if (n !== d) {
              t.warn(
                `Failed firmware update detected. Expected ${n}, current version: ${d}`
              ),
                si({
                  eventName: ts.FIRMWARE_UPDATE,
                  success: !1,
                  triggeredBy: i,
                  errorMessage: "Unknown error outside UCore",
                  params: { from_version: o, to_version: n },
                }).catch((u) =>
                  t.error('Failed to send "firmware_update" trace event:', u)
                );
              return;
            }
            t.info(
              `Firmware updated from ${o} to ${d}, creating notification...`
            ),
              await r(a),
              si({
                eventName: ts.FIRMWARE_UPDATE,
                success: !0,
                triggeredBy: i,
                params: { from_version: o, to_version: n },
              }).catch((u) =>
                t.error('Failed to send "firmware_update" trace event:', u)
              );
          } catch (a) {
            t.error("Failed to handle firmwaring updating state:", a);
          } finally {
            s().catch((a) =>
              t.error("Failed to reset firmware updating state:", a)
            );
          }
        }, 15e3);
    }),
      (pR = OX);
  });
var yR = w((lAe, hR) => {
  var { publish: hm } = require("handoff"),
    qX = require("cron"),
    { SET_FIRMWARE_UPDATE_SCHEDULE: FX, REMOVE_FIRMWARE_UPDATE_SCHEDULE: fR } =
      Z(),
    { getTimezone: LX } = H(),
    { updateFrequency: Bc } = Wr(),
    MX = [Bc.DAILY, Bc.WEEKLY],
    na = null;
  hR.exports = (e, t) => {
    let r = ({ frequency: i, day: c = 0, hour: d = 0 }) => {
        if (!i) throw new Error("No frequency provided.");
        let u = Math.round(Math.random() * 59),
          p = Math.round(Math.random() * 30);
        switch (i) {
          case Bc.DAILY:
            return `${u} ${p} ${d} * * *`;
          case Bc.WEEKLY:
            return `${u} ${p} ${d} * * ${c}`;
          default:
            throw new Error(`Invalid frequency provided: ${i}.`);
        }
      },
      s = (i) => {
        if ((t.debug("Validating given schedule", i), !i)) return null;
        let {
          frequency: c,
          includeFirmware: d,
          includeControllers: u,
          day: p,
          hour: l,
        } = i;
        if (d === !1 && u === !1) return null;
        if (MX.includes(c)) {
          let f = {};
          return (
            (f.frequency = c),
            (f.includeFirmware = d !== void 0 ? d : !0),
            (f.includeControllers = u !== void 0 ? u : !1),
            (f.day = p || 0),
            (f.hour = l || 0),
            f
          );
        }
        return t.warn("Schedule invalid."), null;
      },
      a = async () => {
        t.info("Clearing update schedule..."),
          na && (t.info("Stopping scheduled task..."), na.stop()),
          (na = null),
          await hm("redux.dispatch", fR);
      },
      o = async (i, c) => {
        t.info("Running update schedule: ", i);
        let d = await LX();
        try {
          let u = r(i);
          na = new qX.CronJob(u, () => c(i), null, !0, d);
        } catch (u) {
          t.error(`failed to set firmware update schedule ${i} ${d}`, u);
        }
      };
    return {
      runSchedule: o,
      createAndRunSchedule: async (i, c) => {
        try {
          let d = s(i);
          if (
            (t.info("Setting auto-update schedule to: ", d || "empty"),
            na &&
              (t.info("Stopping previous auto-update schedule..."),
              na.stop(),
              (na = null)),
            !d)
          ) {
            await hm("redux.dispatch", fR);
            return;
          }
          await hm("redux.dispatch", FX, d),
            await o(d, c),
            t.info("Update schedule created successfully");
        } catch (d) {
          t.error("Error creating and runing schedule", d);
        }
      },
      removeSchedule: a,
      ensureSafeSchedule: s,
    };
  };
});
var ER = w((pAe, gR) => {
  var { publish: wR } = require("handoff"),
    { get: xX } = require("lodash"),
    $X = require("semver"),
    { getFWVersionString: BX } = (Ue(), We),
    { DatabaseTable: VX } = (Re(), Hs),
    { getName: jX, getFWLatestAvailableVersion: GX, getSystemInfo: HX } = H();
  gR.exports = (e, t) => async (r) => {
    if (!!r)
      try {
        let [s, a] = await Promise.all([GX(), HX()]),
          o = BX(r),
          n = xX(a, "hardware.firmwareVersion"),
          i = "consoleUpdateAvailable";
        if ($X.gte(n, o)) {
          await (await wR("db.getClient"))(VX.NOTIFICATIONS)
            .where({ event_id: i })
            .del();
          return;
        }
        if (o !== s) {
          t.info("Creating notification for new available update", o);
          let c = await jX();
          await wR("notifications.add", {
            eventId: i,
            eventData: { consoleName: { text: c }, version: { text: o } },
            email: { vars: { version_current: n, version_new: o } },
            push: {
              message: { body: `${c} is ready to update to UniFi OS ${o}!` },
            },
          });
        }
      } catch (s) {
        t.error("Failed to create new available update notification", s);
      }
  };
});
var IR = w((mAe, TR) => {
  var { fetch: SR } = ie(),
    { setIntervalAsync: WX } = require("set-interval-async/dynamic"),
    { clearIntervalAsync: KX } = require("set-interval-async"),
    { getApp: bR } = H(),
    _R = 1e3,
    YX = 60 * 1e3;
  TR.exports = (e, t) => {
    let r = `http://127.0.0.1:${e.controllers.network.port}/v2/api/site/default/settings/mgmt/`,
      s = `http://127.0.0.1:${e.controllers.network.port}/v2/api/site/default/settings/mgmt/device_upgrade/enable`,
      a = null,
      o = null,
      n = async () => {
        let l = await bR("network");
        return l && l.isInstalled;
      },
      i = async () => {
        let l = await bR("network");
        return l && l.isRunning;
      },
      c = () =>
        a ||
        ((a = new Promise((l, f) => {
          let m = 0;
          o = WX(async () => {
            if (await i()) return l();
            if (((m += _R), m > YX))
              return f(new Error("Network application not running"));
          }, _R);
        }).finally(() =>
          KX(o).then(() => {
            (o = null), (a = null);
          })
        )),
        a),
      d = async () => {
        (await i()) || (await c());
      };
    return {
      shouldIncludeDeviceUpdates: async () => {
        if (!(await n()))
          return t.info("NET not installed, device updates not needed"), !1;
        await d();
        let l = await SR(r);
        if (!l.ok)
          throw new Error(
            `Request to NET failed, status: ${l.status} ${l.statusText}`
          );
        let { auto_upgrade: f } = await l.json();
        return f === !1;
      },
      enableDeviceUpdates: async (l) => {
        if (!(await n()))
          throw new Error("NET not installed, unable to process request");
        await d();
        let f = await SR(s, {
          method: "POST",
          body: JSON.stringify({ upgrade_hour: l }),
        });
        if (!f.ok)
          throw new Error(
            `Request to NET failed, status: ${f.status} ${f.statusText}`
          );
      },
    };
  };
});
var CR = w((fAe, vR) => {
  var { publish: ia } = require("handoff"),
    { getFWUpdateSchedule: AR, getSettings: zX, getFirmware: JX } = H(),
    { SET_AUTOUPDATE_PROMPT_REQUIRED: Vc } = Z(),
    XX = IR(),
    { FLAG_AUTO_UPDATE_PREFERENCES_ACKNOWLEDGED: ym } = Wr(),
    { DatabaseTable: wm } = (Re(), Hs);
  vR.exports = (e, t) => {
    let r = XX(e, t);
    return {
      checkIfAutoUpdatePromptNeeded: async () => {
        if (!process.env.IS_CLOUD_INSTANCE)
          try {
            let { isSetup: o, needsUbiosMigration: n } = await zX();
            if (!o || n) return;
            let i = await ia("db.getClient"),
              [c] = await i(wm.SYSTEM_FLAGS).where("flag", ym);
            if (c && c.value === !0) {
              let { autoUpdatePrompt: p } = await JX();
              p !== null &&
                (t.warn("Auto-update prompt state out of sync, resetting..."),
                await ia("redux.dispatch", Vc, null));
              return;
            }
            let d = {},
              u = await AR();
            if (!u)
              d.unifiOS = {
                firmware: !0,
                applications: !0,
                defaultSchedule: null,
              };
            else {
              let {
                includeFirmware: p,
                includeControllers: l,
                frequency: f,
                day: m,
                hour: E,
              } = u;
              (!p || !l) &&
                (d.unifiOS = {
                  firmware: !p,
                  applications: !l,
                  defaultSchedule: { frequency: f, day: m, hour: E },
                });
            }
            (await r.shouldIncludeDeviceUpdates()) && (d.devices = !0),
              t.info("Updates to enable:", d),
              Object.keys(d).length > 0 && (await ia("redux.dispatch", Vc, d));
          } catch (o) {
            t.error("Failed to check auto-update prompt status:", o);
          }
      },
      setPreferences: async (o, n) => {
        try {
          let i = await ia("db.getClient"),
            [c] = await i(wm.SYSTEM_FLAGS).where("flag", ym);
          if (c && c.value === !0)
            throw (
              (await ia("redux.dispatch", Vc, null),
              new Error("Auto-update preferences already set"))
            );
          if (o) {
            let { frequency: d, day: u, hour: p } = o;
            t.info("Enabling firmware and application auto-updates...");
            let l = await AR(),
              f = B(v({}, l || {}), {
                day: u,
                hour: p,
                frequency: d,
                includeFirmware: !0,
                includeControllers: !0,
              });
            await ia("firmware.setSchedule", f);
          }
          if (n) {
            let { hour: d } = n;
            t.info("Enabling UniFi device auto-updates..."),
              r.enableDeviceUpdates(d);
          }
          !o && !n && t.info("All auto-updates disabled"),
            await i(wm.SYSTEM_FLAGS)
              .insert({ flag: ym, value: !0, updated_at: new Date() })
              .onConflict("flag")
              .merge(["value", "updated_at"]),
            await ia("redux.dispatch", Vc, null);
        } catch (i) {
          throw (
            (t.error("Failed to set auto-update preferences:", i),
            new Error("Failed to set auto-update preferences"))
          );
        }
      },
    };
  };
});
var NR = w((hAe, DR) => {
  var { publish: QX } = require("handoff"),
    ZX = require("semver"),
    { getFWLatestAvailable: eQ, getFWLatestAvailableVersion: tQ } = H(),
    rQ = async () => {
      let e = await tQ(),
        t = await QX("system.hardware");
      try {
        if (ZX.gt(e, t.firmwareVersion)) return eQ();
      } catch {
        return null;
      }
    };
  DR.exports = rQ;
});
var kR = w((wAe, UR) => {
  var Cn = require("bluebird"),
    RR = require("crypto"),
    yAe = require("path"),
    ca = require("fs-extra"),
    { get: jc } = require("lodash"),
    { publish: Qa } = require("handoff"),
    { throttle: sQ } = require("lodash"),
    { fetch: aQ } = ie(),
    { getFWVersionString: oQ } = (Ue(), We),
    { getFWDownloadProgress: PR } = H(),
    { UPDATE_FIRMWARE_PROGRESS: Dn } = Z(),
    { CHUNK_TIMEOUT: gm, downloadState: Za } = Wr(),
    { getFirmwareFilePath: nQ } = (Ue(), We),
    Em = null,
    ua = null,
    Gc = null,
    da = null,
    Sm = class extends Error {
      constructor() {
        super("Download aborted");
      }
    };
  UR.exports = (e, t) => {
    let r = nQ(e),
      s = () => {
        da && (da.destroy(new Sm()), (da = null));
      },
      a = async () => {
        await Qa("redux.dispatch", Dn, {
          state: Za.NONE,
          bytes: 0,
          progress: 0,
          url: null,
        });
      },
      o = async (i, c = gm) => {
        let d = jc(i, "_links.data.href"),
          u = jc(i, "md5"),
          p = jc(i, "file_size"),
          l = await PR(),
          { state: f, url: m } = l;
        if (m && m !== d) {
          try {
            t.info(
              "Existing download found for another version. Cleaning up..."
            ),
              await ca.unlink(r);
          } catch (k) {
            t.warn("Existing download state marked but no file to remove.");
          }
          await a(), (l = await PR()), (f = l.state);
        }
        if (f === Za.DONE)
          if (
            (t.info(
              "Download state marked as done, checking if file really exists and corresponds to the expected version..."
            ),
            await ca.exists(r))
          ) {
            t.info("File exists, checking hash...");
            try {
              let I = ca.createReadStream(r),
                _ = RR.createHash("md5");
              if (
                (_.setEncoding("hex"),
                I.pipe(_),
                (await new Cn((U, j) => {
                  I.on(
                    "error",
                    (K) => (t.warn("Couldn't read existing file."), j(K))
                  ),
                    I.on("end", () => (_.end(), U(_.digest("hex"))));
                })) === u)
              )
                return (
                  t.info(
                    "Firmware update file already downloaded, hashes match."
                  ),
                  !0
                );
              throw new Error("Existing file hash is incorrect.");
            } catch (I) {
              t.info("File incorrect, redownloading. Reason: ", I),
                await ca.unlink(r),
                await a();
            }
          } else
            t.warn(
              "Download marked as done but no file found. Redownloading..."
            ),
              await a();
        let E = { timeout: 12e3 },
          y = {},
          h = 0,
          S = !1,
          D = sQ((k) => {
            Qa("redux.dispatch", Dn, { progress: Math.round((k / p) * 100) });
          }, 1e3);
        if (f === Za.STALLED) {
          let { bytes: k } = l;
          t.info(
            `Found download stalled at ${k} bytes. Continuing download...`
          ),
            (y.flags = "a"),
            (E.headers = { range: `bytes=${k}-` }),
            (h = k),
            (S = !0);
        }
        let A = RR.createHash("md5");
        A.setEncoding("hex");
        let C = await aQ(d, E);
        da = C.body;
        let R = ca.createWriteStream(r, y);
        Qa("firmware.download.started").catch(() => null);
        let N = setTimeout(() => C.body.destroy("Download timeout"), 1e3 * 10);
        Qa("redux.dispatch", Dn, { state: Za.DOWNLOADING, url: d }),
          C.body.pipe(R),
          S || C.body.pipe(A);
        let b = new Date(),
          T = 0;
        await new Cn((k, I) => {
          C.body.on(
            "error",
            (_) => (
              _ instanceof Sm ||
                (t.error(`Update file download error at ${h}`, _),
                Qa("redux.dispatch", Dn, { state: Za.STALLED, bytes: h }),
                (da = null),
                clearTimeout(N)),
              I(_)
            )
          ),
            C.body.on("data", (_) => {
              clearTimeout(N),
                (N = setTimeout(() => C.body.destroy("Download timeout"), c)),
                (h += _.length),
                (T += _.length),
                D(h);
            }),
            R.on("finish", async () => {
              if (
                (clearTimeout(N), (da = null), t.info("Download completed."), S)
              ) {
                t.info(
                  "Download completed from stalled state. Verifying full file..."
                );
                let _ = ca.createReadStream(r);
                _.pipe(A),
                  await new Cn((P, U) => {
                    _.on(
                      "error",
                      (j) => (t.warn("Couldn't read downloaded file."), U(j))
                    ),
                      _.on("end", () => P());
                  });
              }
              return (
                A.end(),
                u !== A.digest("hex")
                  ? I(new Error("Downloaded file hash is incorrect."))
                  : k()
              );
            });
        });
        let M = (new Date() - b) / 1e3,
          q = T / 1024 / M;
        return (
          t.info(
            `Download completed in ${M.toFixed(2)}s (avg ${q.toFixed(2)} KB/s)`
          ),
          Qa("redux.dispatch", Dn, { state: Za.DONE, progress: 100 }),
          !0
        );
      };
    return {
      downloadWithRetry: async (i, c = 3) => {
        if (!i)
          return (
            s(),
            (ua = null),
            (Gc = null),
            t.info("No target firmware version to download."),
            Cn.resolve()
          );
        let d = jc(i, "md5"),
          u = await oQ(i);
        if (ua && Gc === d) {
          if (da !== null)
            return t.info(`Download for ${u} already in progress`), ua;
          if (await ca.pathExists(r))
            return t.info(`Download for ${u} already completed`), ua;
        }
        s(), (Gc = d), (Em = u);
        let p = gm,
          l = c;
        return (
          (ua = new Cn(async (f, m) => {
            for (t.info(`Downloading firmware ${Em}.`); l > 0; ) {
              l -= 1;
              try {
                await o(i, p),
                  t.info(`Successfully downloaded firmware ${Em}.`),
                  f();
                break;
              } catch (E) {
                if (Gc !== d)
                  return m(
                    new Error(
                      `Expected firmware version changed, previous attempt for ${u} aborted.`
                    )
                  );
                l > 0
                  ? (t.warn(
                      `Download attempt failed for ${u}. ${l} tries left, increasing timeout. Reason:`,
                      E
                    ),
                    (p += gm))
                  : (t.warn(
                      `No more tries left, download for ${u} not successful.`
                    ),
                    (ua = null),
                    m(E));
              }
            }
          })),
          ua
        );
      },
      resetDownloadState: a,
    };
  };
});
var $R = w((DAe, xR) => {
  Zo();
  Re();
  mR();
  var { subscribe: Ut, unsubscribe: iQ, publish: Ze } = require("handoff"),
    { get: bm, noop: _m } = require("lodash"),
    bAe = require("path"),
    Tm = require("bluebird"),
    cQ = require("cron"),
    Hc = require("semver"),
    _Ae = require("fs-extra"),
    { fetch: OR } = ie(),
    uQ = yR(),
    dQ = ER(),
    lQ = CR(),
    Nn = NR(),
    pQ = kR(),
    { SUBSCRIPTION_PRIORITY: mQ } = Ko(),
    { getFWVersionString: Im, getFirmwareVersionAndPlatform: fQ } = (Ue(), We),
    {
      getFWReleaseChannel: hQ,
      getFWUpdateSchedule: Am,
      getFWLatestAvailableForChannel: yQ,
      getControllers: vm,
      getTimezone: wQ,
      getSystemInfo: TAe,
      getDeviceState: gQ,
      getFWLatestAvailable: IAe,
      getFWLatestAvailableVersion: AAe,
      getSettings: EQ,
      getRemoteAccessEnabled: SQ,
      getIsSetup: bQ,
    } = H(),
    {
      SET_FIRMWARE_RELEASE_CHANNEL: _Q,
      SET_FIRMWARE_UPDATE_SCHEDULE: TQ,
      UPDATE_FIRMWARE_API_TOKEN: qR,
      UPDATE_FIRMWARE_CHANNELS: IQ,
      UPDATE_FIRMWARE_LATEST_AVAILABLE: AQ,
      SET_FIRMWARE_UPDATING_INFO: FR,
    } = Z(),
    { setDeviceState: Cm, deviceStates: Dm } = Ot(),
    { traceUCoreEvent: Nm } = (jt(), ur),
    {
      UBIOS_HARDWARE_PLATFORM: vQ,
      UPDATE_CHECK_INTERVAL_HOURS: LR,
      FW_UPDATE_TTL: CQ,
      FLAG_UPDATE_APPLICATIONS_ON_STARTUP: Rm,
    } = Wr(),
    { UpdateState: MR, UpdateFailedReason: DQ } = (vo(), ri),
    { AppError: vAe, errorCodes: CAe } = (se(), me),
    { getFirmwareFilePath: NQ } = (Ue(), We),
    { TraceEvent: Pm } = (Zt(), rs),
    ds;
  xR.exports = async (e, t) => {
    let r = NQ(e),
      { downloadWithRetry: s, resetDownloadState: a } = pQ(e, t),
      o = async () => {
        let _ = await Nn();
        return s(_);
      },
      n = async () =>
        (await Ze("system.device")).firmware.product || "unifi-firmware",
      i = Rs(e, t),
      c = uQ(e, t),
      d = dQ(e, t),
      u = pR(e, t),
      p = lQ(e, t),
      l = (_, P) => `filter=eq~~${_}~~${P}`,
      f = (_, P, U, j, K) => {
        let J = [l("product", P), l("platform", j)];
        return (
          U && J.push(l("channel", U)),
          K &&
            (J.push(l("version_major", Hc.major(K))),
            J.push(l("version_minor", Hc.minor(K))),
            J.push(l("version_patch", Hc.patch(K)))),
          `${_}?${J.join("&")}`
        );
      },
      m = (_ = []) => {
        let P = {
            internal: ["internal"],
            alpha: ["alpha"],
            beta: ["beta", "release-candidate"],
          },
          U = new Set(["release"]);
        return (
          _.forEach((j) => {
            if (!!P[j]) for (let K of P[j]) U.add(K);
          }),
          Array.from(U)
        );
      },
      E = async () => {
        try {
          if (!(await bQ())) return null;
          let { token: _, roles: P } = await Ze("cloud.getFirmwareToken");
          await Ze("redux.dispatch", qR, { token: _ });
          let U = await m(P);
          return await Ze("redux.dispatch", IQ, { channels: U }), _;
        } catch (_) {
          return t.error("Failed to refresh fwupdate token:", _), null;
        }
      },
      y = async (_) => {
        let { shortname: P } = await Ze("system.hardware"),
          U = e.cloud[e.cloudEnv].fwUpdateUrl,
          j = await n(),
          K = f("/api/firmware", j, void 0, P, _);
        t.info(`Getting the target version "${_}" of firmware info`);
        let J = {},
          F = await E();
        F && (J.headers = { Authorization: `Bearer token:${F}` });
        let O = await (await OR(`${U}${K}`, J)).json();
        return bm(O, "_embedded.firmware.0") || {};
      },
      h = async (_ = null, P = {}) => {
        let { userId: U } = P;
        try {
          let [j = "release", K, J] = await Tm.all([
              hQ(),
              Ze("system.hardware"),
              n(),
            ]),
            F = K.shortname,
            $ = e.cloud[e.cloudEnv].fwUpdateUrl,
            O = f("/api/firmware-latest", J, j, F);
          t.info(`Checking firmware updates for "${j}" channel`);
          let V = {},
            Q = _ || (await E());
          Q && (V.headers = { Authorization: `Bearer token:${Q}` });
          let W = await (await OR(`${$}${O}`, V)).json(),
            z = {},
            ee = bm(W, "_embedded.firmware.0") || {},
            te = await yQ(j),
            He = Im(ee),
            St = Im(te),
            bt = Date.now(),
            Es = te && te.cachedAt && bt - te.cachedAt < CQ,
            ht = Hc.gte(St, He);
          te && Es && ht
            ? (t.info(
                `Using previously cached version ${St} for channel "${j}"`
              ),
              (z = te))
            : (z = B(v({}, ee), { cachedAt: bt })),
            (z.timestamp = bt);
          let { isUbios: Ss } = await Ze("system.hardware");
          if (Ss)
            try {
              let nr = bm(z, "tags.ubnt_version", ""),
                { hardwarePlatform: ha } = fQ(nr);
              z.needUbiosMigration = ha !== vQ;
            } catch (nr) {
              t.error(
                "Failed to get firmware version and platform",
                nr.message
              );
            }
          return (
            await d(z),
            await Ze("redux.dispatch", AQ, z),
            t.info(`Latest available version = ${JSON.stringify(z)}`),
            Nm({
              eventName: Pm.FIRMWARE_UPDATE_CHECK,
              success: !0,
              triggeredBy: U ? "user" : "system",
            }).catch((nr) =>
              t.error('Failed to send "firmware_update_check" trace event:', nr)
            ),
            z
          );
        } catch (j) {
          throw (
            (Nm({
              eventName: Pm.FIRMWARE_UPDATE_CHECK,
              success: !1,
              triggeredBy: U ? "user" : "system",
              errorMessage: j.message,
            }).catch((K) =>
              t.error('Failed to send "firmware_update_check" trace event:', K)
            ),
            j)
          );
        }
      },
      S = async (_, P, U = {}) => {
        let { firmwareVersion: j } = await Ze("system.hardware"),
          K = Im(_),
          { created: J, needUbiosMigration: F } = _;
        await Cm(Dm.UPGRADING),
          await Ze("redux.dispatch", FR, {
            state: MR.IN_PROGRESS,
            fromVersion: j,
            toVersion: K,
            releaseDate: J,
            triggeredBy: U.userId ? "user" : "system",
          }),
          Ze("firmware.update.started").catch(() => null),
          t.info(`Updating firmware from ${j} to ${K}`),
          await i.updateFirmware(r, P, F);
      },
      D = async () => {
        try {
          (await SQ()) && (await Ze("backup.export.cloud"));
        } catch (_) {
          t.error(
            `Failed to upload cloud backup before FW update: ${_.message}`
          );
        }
      },
      A = async (_ = {}) => {
        let P = await Nn();
        if (!!P) return (_.updateInfo = P), Ze("firmware.updateByVersion", _);
      },
      C = async (_ = {}) => {
        let {
            onStatusChange: P = _m,
            callbackBeforeUpgrade: U = _m,
            queued: j = !0,
            persistFullData: K = !0,
            updateInfo: J,
            context: F = {},
          } = _,
          $ = await gQ(),
          { userId: O } = F;
        try {
          if (!J)
            throw new Error("No specific target firmware version to update");
          await Cm(Dm.WILL_UPGRADE),
            P(Dm.WILL_UPGRADE),
            await s(J),
            U(),
            await D(),
            j
              ? await Ze("taskQueue.add", () => S(J, K, F), "firmwareUpdate")
              : await S(J, K, F);
        } catch (V) {
          throw (
            (t.error("Failed to update firmware:", V),
            await Ze("redux.dispatch", FR, {
              state: MR.FAILED,
              failedReason: V.reason || DQ.UNKNOWN,
            }),
            await Cm($),
            P($),
            Nm({
              eventName: Pm.FIRMWARE_UPDATE,
              success: !1,
              triggeredBy: O ? "user" : "system",
              errorMessage: V.message,
            }).catch((Q) =>
              t.error('Failed to send "firmware_update" trace event:', Q)
            ),
            V)
          );
        } finally {
          a().catch((V) => t.error(V));
        }
        return J;
      },
      R = async () => {
        let _ = (await vm()).filter((U) => U.isInstalled);
        await Ze(
          "controllers.checkForUpdates",
          _.map((U) => U.name)
        );
        let P = (await vm()).filter(
          (U) => U.isInstalled && U.updateAvailable && U.updatable
        );
        return Tm.all(
          P.map(({ name: U }) =>
            Ze("controllers.update", { applicationName: U }).then((j) =>
              j.getResult()
            )
          )
        );
      },
      N = async () => {
        try {
          let _ = await Ze("db.getClient"),
            [P] = await _(we.SYSTEM_FLAGS).where("flag", Rm);
          P &&
            P.value === !0 &&
            (t.info("Running scheduled application updates on startup"),
            await R(),
            await _(we.SYSTEM_FLAGS).where("flag", Rm).update("value", !1),
            t.info("Application successfully updated on startup"));
        } catch (_) {
          t.error("Failed to update applications on startup:", _);
        }
      },
      b = async () => {
        try {
          (await Nn()) &&
            (t.info(
              "Scheduled application updates will be run after firmware update and console reboot"
            ),
            await (await Ze("db.getClient"))(we.SYSTEM_FLAGS)
              .insert({ flag: Rm, value: !0 })
              .onConflict("flag")
              .merge());
        } catch (_) {
          t.error("Failed to schedule application updates after reboot:", _);
        }
      },
      T = async ({ includeFirmware: _, includeControllers: P }) => {
        if (!_ && !P) {
          t.warn("Trying to run an empty scheduled update."),
            c.removeSchedule();
          return;
        }
        t.info("Running scheduled updates...");
        try {
          if (_) {
            t.info("Running scheduled firmware update"),
              await h(),
              P && (await b());
            let [U, { autoBackupEnabled: j }] = await Tm.all([Nn(), EQ()]);
            U?.needUbiosMigration && !j
              ? t.info(
                  "Skip scheduled firmware update for UbiOS migration due to cloud backup is not enabled"
                )
              : await A().catch(_m);
          }
          P && (t.info("Running scheduled application updates"), await R());
        } catch (U) {
          t.error("Failed to run scheduled updates", U);
        }
      },
      M = async () => {
        try {
          await h();
          let _ = await vm();
          await Ze(
            "controllers.checkForUpdates",
            _.map((P) => P.name)
          );
        } catch (_) {
          t.warn("Failed to auto-check updates", _);
        }
      },
      q = () => {
        if (!ds) {
          let _ = Math.floor(Math.random() * 60),
            P = Math.floor(Math.random() * 60),
            U = Math.floor(Math.random() * LR),
            j = `${_} ${P} ${U}-23/${LR} * * *`;
          wQ()
            .then((K) => {
              t.info(
                `Setting update check job for timezone ${K} with randomly generated schedule`,
                j
              ),
                (ds = new cQ.CronJob(
                  j,
                  async () => {
                    t.info(
                      "Running scheduled check for firmware and controller updates..."
                    ),
                      await M();
                  },
                  null,
                  !0,
                  K
                ));
            })
            .catch((K) => {
              t.warn("Couldn't set up update check cron job.", K);
            });
        }
      };
    Am().then(async (_) => {
      if (!_) {
        t.info("Startup: No auto-update scheduled."), q();
        return;
      }
      t.info("Startup: Retrieved auto-update schedule", _);
      let P = c.ensureSafeSchedule(_);
      if (!P) {
        q(), c.removeSchedule();
        return;
      }
      P.includeFirmware || q(),
        await Ze("redux.dispatch", TQ, P),
        c.runSchedule(P, T);
    });
    let k = [
      Ut("firmware.clearUpdateToken", async () =>
        Ze("redux.dispatch", qR, { token: "" })
      ),
      Ut("firmware.refreshUpdateToken", () => E()),
      Ut("firmware.refreshUpdateInfo", (_, P, U) => h(P, U)),
      Ut("firmware.getUpdateInfo", (_, P) => y(P)),
      Ut("firmware.getLatestUpdateInfo", () => Nn()),
      Ut("firmware.update", (_, P) => A(P), mQ.MID),
      Ut("firmware.updateByVersion", (_, P) => C(P)),
      Ut("firmware.downloadLatestKnown", () => o()),
      Ut("firmware.setSchedule", async (_, P) => {
        await c.createAndRunSchedule(P, T);
        let U = await Am();
        if (U && U.includeFirmware && ds) {
          t.info(
            "Firmware auto-updates enabled. Disabling update check cron job."
          ),
            ds.stop(),
            (ds = null);
          return;
        }
        (!U || !U.includeFirmware) &&
          !ds &&
          (t.info(
            "Firmware auto-updates disabled. Enabling update check cron job."
          ),
          q());
      }),
      Ut("firmware.setReleaseChannel", async (_, P) => {
        try {
          t.info(
            `Firmware release channel changed to "${P}", checking for updates...`
          ),
            await Ze("redux.dispatch", _Q, P),
            await h();
        } catch (U) {
          t.error(
            "Failed to refresh firmware update info after release channel changed",
            U
          );
        }
      }),
      Ut("firmware.getSchedule", () => Am()),
      Ut("firmware.deleteSchedule", () => c.removeSchedule()),
      Ut("firmware.setAutoUpdatePreferences", (_, P, U) =>
        p.setPreferences(P, U)
      ),
      Ut("firmware.setAutoUpdateAcknowledged", () => p.setPreferences()),
      Ut("firmware.checkIfAutoUpdatePromptNeeded", () =>
        p.checkIfAutoUpdatePromptNeeded()
      ),
    ];
    setTimeout(() => {
      p.checkIfAutoUpdatePromptNeeded();
    }, 60 * 1e3);
    let I = u();
    return (
      N(),
      async () => {
        k.forEach((_) => iQ(_)),
          ds && (ds.stop(), (ds = null)),
          I && clearTimeout(I);
      }
    );
  };
});
var RQ,
  Wc,
  Um = x(() => {
    se();
    qt();
    (RQ = (e, t) => async (s, a) => {
      try {
        await a();
      } catch (o) {
        t.error(`${s.req.url} request failed:`, o),
          o instanceof at
            ? ((s.status = o.httpCode),
              (s.body = {
                validationErrors: o.validationErrors,
                message: o.message,
                code: o.code,
              }))
            : o instanceof _e.default
            ? ((s.status = o.httpCode),
              (s.body = { message: Te(o), code: o.code, data: o.data }),
              o.originalError && t.warn(o.originalError))
            : ((s.status = 500), (s.body = { errors: [Te(o)] }));
      }
    }),
      (Wc = RQ);
  });
var PQ,
  BR,
  VR = x(() => {
    (PQ = [
      "TLS_AES_128_GCM_SHA256",
      "TLS_AES_256_GCM_SHA384",
      "TLS_CHACHA20_POLY1305_SHA256",
      "DHE-PSK-AES128-GCM-SHA256",
      "DHE-PSK-AES256-GCM-SHA384",
      "DHE-PSK-CHACHA20-POLY1305",
      "DHE-RSA-AES128-GCM-SHA256",
      "DHE-RSA-AES256-GCM-SHA384",
      "DHE-RSA-CHACHA20-POLY1305",
      "ECDHE-ECDSA-AES128-GCM-SHA256",
      "ECDHE-ECDSA-AES256-GCM-SHA384",
      "ECDHE-ECDSA-CHACHA20-POLY1305",
      "ECDHE-PSK-CHACHA20-POLY1305",
      "ECDHE-RSA-AES128-GCM-SHA256",
      "ECDHE-RSA-AES256-GCM-SHA384",
      "ECDHE-RSA-CHACHA20-POLY1305",
    ].join(":")),
      (BR = PQ);
  });
var jR,
  GR,
  UQ,
  HR,
  WR = x(() => {
    jR = g(require("handoff"));
    se();
    (GR = g(H())),
      (UQ = async (e, t) => {
        let { name: r } = e.params;
        if (!(await (0, GR.getControllers)()).some((o) => o.name === r))
          throw new _e.default(
            Le.default.APPLICATION_NOT_FOUND({
              message: `Unsupported application name "${r}"`,
            })
          );
        let a = await (0, jR.publish)("controllers.update", {
          applicationName: r,
          context: { userId: e.user.id },
        });
        return a ? (e.body = await a.getStatus()) : (e.status = 409), t();
      }),
      (HR = UQ);
  });
var KR,
  kQ,
  YR,
  zR = x(() => {
    (KR = g(require("handoff"))),
      (kQ = async (e, t) => (
        (e.body = await (0, KR.publish)("homeKit.getSetupData")), t()
      )),
      (YR = kQ);
  });
var JR,
  OQ,
  XR,
  QR = x(() => {
    (JR = g(require("handoff"))),
      (OQ = async (e, t) => (
        await (0, JR.publish)("homeKit.factoryReset"), (e.status = 204), t()
      )),
      (XR = OQ);
  });
var km,
  Ls,
  Om = x(() => {
    (km = g(require("zod"))),
      (Ls = km.z.preprocess((e) => Number(e), km.z.number()));
  });
var ZR,
  qm,
  qQ,
  FQ,
  Fm,
  eP = x(() => {
    (ZR = g(require("handoff"))), (qm = g(require("zod")));
    se();
    Om();
    (qQ = qm.z
      .object({
        offset: Ls,
        limit: Ls,
        category: qm.z.string(),
        from: Ls,
        to: Ls,
      })
      .partial()),
      (FQ = async (e, t) => {
        let { offset: r, limit: s } = e.params,
          { category: a, from: o, to: n } = e.query,
          i = qQ.safeParse({
            offset: r,
            limit: s,
            category: a,
            from: o,
            to: n,
          });
        if (!i.success) throw new at(i.error);
        let c = await (0, ZR.publish)("notifications.get", {
          offset: r,
          limit: s,
          from: o,
          to: n,
          category: a && typeof a == "string" ? a.split(",") : void 0,
        });
        return (e.body = c), t();
      }),
      (Fm = FQ);
  });
var tP,
  LQ,
  rP,
  sP = x(() => {
    (tP = g(require("handoff"))),
      (LQ = async (e, t) => {
        let r = e.user.id,
          s = await (0, tP.publish)("notifications.getVisibleUserSettings", r);
        return (e.body = s), t();
      }),
      (rP = LQ);
  });
var aP,
  Lm,
  MQ,
  xQ,
  oP,
  nP = x(() => {
    (aP = g(require("handoff"))), (Lm = g(require("zod")));
    se();
    Om();
    (MQ = Lm.z.object({ category: Lm.z.string(), from: Ls, to: Ls }).partial()),
      (xQ = async (e, t) => {
        let { category: r, from: s, to: a } = e.query,
          o = MQ.safeParse({ category: r, from: s, to: a });
        if (!o.success) throw new at(o.error);
        let n = await (0, aP.publish)("notifications.totals", {
          category: r && typeof r == "string" ? r.split(",") : void 0,
          from: s,
          to: a,
        });
        return (e.body = n), t();
      }),
      (oP = xQ);
  });
var Ms,
  iP,
  cP = x(() => {
    Ms = g(require("zod"));
    al();
    iP = Ms.default
      .object({
        mode: Ms.default.nativeEnum(Ds),
        events: Ms.default
          .array(
            Ms.default.object({
              eventId: Ms.default.string(),
              emailEnabled: Ms.default.boolean(),
              pushEnabled: Ms.default.boolean(),
            })
          )
          .nonempty(),
      })
      .partial()
      .refine((e) => e.mode || e.events, {
        message: "At least one property is required",
      });
  });
var uP,
  $Q,
  dP,
  lP = x(() => {
    uP = g(require("handoff"));
    se();
    cP();
    ($Q = async (e, t) => {
      let r = iP.safeParse(e.request.body);
      if (!r.success) throw new at(r.error);
      let s = e.request.body,
        a = e.user.id;
      return (
        await (0, uP.publish)("notifications.updateUserSettings", a, s),
        (e.status = 204),
        t()
      );
    }),
      (dP = $Q);
  });
var pP,
  mP,
  BQ,
  VQ,
  fP,
  jQ,
  hP,
  yP = x(() => {
    pP = g(require("ajv"));
    se();
    (mP = g(ie())),
      (BQ = new pP.default({ useDefaults: !0 })),
      (VQ = {
        type: "object",
        properties: { email: { type: "string" } },
        required: ["email"],
      }),
      (fP = BQ.compile(VQ)),
      (jQ = async (e, t) => {
        let { config: r } = e,
          { ssoUrl: s } = r.cloud[r.cloudEnv],
          a = e.request.body;
        if (!fP(a)) throw new at(fP);
        let o = `${s}/verify/email/${encodeURIComponent(a.email)}`,
          n = await (0, mP.fetch)(o, { method: "PUT" });
        if (n.status === 429) {
          e.status = 429;
          let i = await n.json();
          return (e.body = { limitInSeconds: i.limit_in_seconds }), t();
        }
        if (!n.ok) {
          let i = await n.text().catch(() => null);
          throw new _e.default(
            Le.default.UNEXPECTED_RESPONSE({
              message: `${o} returned unexpected response. Status: ${n.status}. Text: ${i}`,
            })
          );
        }
        return (e.status = 204), t();
      }),
      (hP = jQ);
  });
var wP,
  gP,
  EP,
  GQ,
  SP,
  bP = x(() => {
    (wP = g(require("handoff"))),
      (gP = g(H())),
      (EP = g(Ot())),
      (GQ = async (e, t) => {
        if ((await (0, gP.getDeviceState)()) === EP.deviceStates.NOT_READY) {
          (e.status = 503), e.set("Retry-After", "10");
          return;
        }
        let r = await (0, wP.publish)("system.getPreviousSubnet");
        (e.body = { previousSubnet: r }), await t();
      }),
      (SP = GQ);
  });
var HQ,
  _P,
  TP = x(() => {
    se();
    Dp();
    (HQ = async (e, t) => {
      let { taskId: r } = e.params;
      if (!r) throw new _e.default(Le.default.TASK_NOT_FOUND);
      return (e.body = await fc(r)), t();
    }),
      (_P = HQ);
  });
var IP,
  WQ,
  AP,
  vP = x(() => {
    IP = g(require("node-fetch"));
    se();
    (WQ = async (e) => {
      let { ubicauth: t } = e.request.headers,
        { config: r } = e,
        { ssoUrl: s } = r.cloud[r.cloudEnv];
      try {
        let o = await (
          await (0, IP.default)(`${s}/user/self`, {
            headers: { Cookie: `${t}` },
          })
        ).json();
        e.body = o;
      } catch (a) {
        throw new _e.default(
          "Failed to fetch user using ubicAuth",
          a instanceof Error ? a : void 0
        );
      }
    }),
      (AP = WQ);
  });
var DP = w((ave, CP) => {
  var { publish: KQ } = require("handoff");
  CP.exports = async (e, t) => {
    try {
      await KQ("auth.jwt.revoke", e.jwt),
        (e.user = null),
        (e.jwt = {}),
        (e.body = { success: !0 });
    } catch (r) {
      e.logger.error("Failed to logout:", r),
        (e.status = 500),
        (e.body = { success: !1, errors: [r.message] });
    }
    await t();
  };
});
var UP = w((ove, PP) => {
  var { publish: Mm } = require("handoff"),
    YQ = require("ajv"),
    { AppError: NP, errorCodes: zQ } = (se(), me),
    JQ = new YQ(),
    XQ = {
      type: "object",
      properties: {
        ssoUser: {
          type: "object",
          properties: {
            uuid: { type: "string" },
            email: { type: "string" },
            username: { type: "string" },
            ssoAuth: {
              type: "object",
              properties: {
                value: { type: "string" },
                name: { type: "string" },
              },
              required: ["value"],
            },
          },
          required: ["uuid", "email", "username", "ssoAuth"],
        },
        password: { type: "string" },
      },
      required: ["ssoUser", "password"],
    },
    RP = JQ.compile(XQ);
  PP.exports = async (e, t) => {
    let r = e.request.body;
    if (!RP(r))
      return (e.status = 400), (e.body = { validationErrors: RP.errors }), t();
    let { ssoUser: s, password: a } = r,
      o = e.user;
    try {
      if (o.sso_uuid) {
        if (o.sso_uuid !== s.uuid)
          throw new NP(
            zQ.OWNER_NOT_MATCH({
              message: "Provided SSO user ID not matching owner",
            })
          );
      } else {
        e.logger.info(
          "Current owner doesn't have an SSO ID, binding SSO account..."
        );
        let n = {
          sso_uuid: s.uuid,
          sso_account: s.email,
          sso_username: s.username,
          sso_password: a,
          sso_avatar: s.picture,
          first_name: s.first_name,
          last_name: s.last_name,
        };
        await Mm("uum.bindSsoAccount", o.id, n),
          e.logger.info("SSO account bound, refreshing user..."),
          (e.user = await Mm("uum.getUser", o.id));
      }
      if (
        (e.logger.info("Registering Remote Access for SSO user", s.uuid),
        await Mm("cloud.register", { ssoUser: s }))
      )
        return (e.status = 204), t();
      throw new Error("Failed to register the console to Remote Access");
    } catch (n) {
      e.logger.error(n),
        n instanceof NP
          ? ((e.status = n.httpCode),
            (e.body = { data: n.data, code: n.code, message: n.message }))
          : ((e.status = 500),
            (e.body = {
              errors: ["Failed to register the console to Remote Access"],
            }));
    }
    await t();
  };
});
var OP = w((ive, kP) => {
  var nve = require("os"),
    QQ = require("tar"),
    Rn = require("fs-extra"),
    { publish: xm } = require("handoff"),
    ZQ = require("@koa/multer"),
    eZ = require("koa-compose"),
    { v4: tZ } = require("uuid"),
    { AppError: Kc, errorCodes: $m } = (se(), me),
    { getIsSetup: rZ } = H(),
    { UPLOAD_FOLDER_PATH: Bm } = ct(),
    Yc = !1,
    sZ = ZQ({
      dest: Bm,
      fileFilter: (e, t, r) => {
        if (Yc) {
          r(new Error("backup is already decrypting"));
          return;
        }
        r(null, !0);
      },
    }),
    aZ = async (e, t, r) => {
      try {
        try {
          await xm("chiper.decryptLocalBackup", e, t);
        } finally {
          Rn.remove(e).catch(() => null);
        }
        await Rn.ensureDir(r), await QQ.x({ file: t, cwd: r });
      } finally {
        Rn.remove(t).catch(() => null);
      }
    };
  kP.exports = eZ([
    sZ.single("backup"),
    async (e, t) => {
      let { path: r } = e.file;
      try {
        if (Yc) throw new Kc($m.BACKUPS_IS_DECRYPTING);
        let s = tZ(),
          a = `${Bm}/backup-archive-${s}`,
          o = `${Bm}/extracted-backup-${s}`,
          n = `${o}/backup/metadata.json`;
        (Yc = !0), await aZ(r, a, o);
        let { owner_id: i, hardware_shortname: c } = await Rn.readJson(n);
        if (i) {
          let d;
          if (await rZ()) {
            let u = (await xm("uum.getUsers")).find(({ isOwner: p }) => p);
            u && (d = u.sso_uuid);
          } else {
            let { userId: u } = e.request.body;
            d = u;
          }
          if (d !== i) throw new Kc($m.OWNER_NOT_MATCH);
        }
        if (c) {
          let { shortname: d } = await xm("system.hardware");
          if (d !== c) throw new Kc($m.CONSOLE_TYPE_NOT_MATCH);
        }
        (e.response.body = s), (e.status = 200);
      } catch (s) {
        s instanceof Kc ? (e.status = s.httpCode) : (e.status = 500),
          e.logger.error("Failed to upload backup file:", s),
          (e.body = { errors: [s.message] });
      } finally {
        (Yc = !1), Rn.remove(r).catch(() => null);
      }
      return t();
    },
  ]);
});
var FP = w((cve, qP) => {
  var { publish: oZ } = require("handoff"),
    nZ = require("path"),
    { AppError: iZ } = (se(), me);
  qP.exports = async (e, t) => {
    try {
      let { stream: r, filePath: s } = await oZ("backup.export.local");
      e.set("filename", nZ.basename(s)), (e.body = r), (e.status = 200);
    } catch (r) {
      r instanceof iZ
        ? ((e.status = r.httpCode),
          (e.body = { message: r.message, code: r.code }))
        : ((e.status = 500), (e.body = { errors: [r.message] })),
        e.logger.error("Failed to download backup:", r);
    }
    return t();
  };
});
var xP = w((uve, MP) => {
  var { publish: cZ } = require("handoff"),
    Vm = require("fs-extra"),
    uZ = require("path"),
    { ENCRYPTED_UBIOS_MIGRATION_DATA_FILE_PATH: LP } = ct();
  MP.exports = async (e, t) => {
    try {
      let s = (await Vm.exists(LP))
          ? LP
          : await cZ("backup.export.ubiosMigrationData"),
        a = Vm.createReadStream(s);
      a.on("end", () => Vm.remove(s).catch(() => null)),
        e.set("filename", uZ.basename(s)),
        (e.body = a),
        (e.status = 200);
    } catch (r) {
      e.logger.error("Failed to download UbiOS migration data:", r),
        (e.status = 500);
    }
    return t();
  };
});
var VP = w((dve, BP) => {
  var jm = require("path"),
    { publish: Gm } = require("handoff"),
    zc = require("fs-extra"),
    dZ = require("js-yaml"),
    { isRestoreInProgress: lZ } = H(),
    { AppError: $P, errorCodes: pZ } = (se(), me),
    {
      DEBIAN_PACKAGE_VERSIONS_FILE_NAME: mZ,
      BACKUP_BASE_FOLDER_NAME: fZ,
      UPLOAD_FOLDER_PATH: hZ,
    } = ct();
  BP.exports = async (e, t) => {
    let { id: r } = e.params,
      s = `${hZ}/extracted-backup-${r}`;
    if (!(await zc.exists(s)))
      return (
        (e.status = 404),
        (e.body = { error: `Backup file with id=${r} not found` }),
        t()
      );
    if (await lZ()) {
      let a = new $P(pZ.RESTORE_IN_PROGRESS);
      return (
        (e.status = a.httpCode),
        (e.body = { success: !1, errors: [a.message] }),
        t()
      );
    }
    try {
      let a = await Gm("uum.getUsers"),
        { sso_uuid: o } = a.find(({ isOwner: m }) => m),
        n = await Gm("uum.ubicAuth"),
        i = { uuid: o, ssoAuth: { value: n } },
        c = jm.join(s, fZ),
        { controllers: d, services: u } = await zc.readJson(jm.join(c, mZ)),
        { firmware_version: p, created_at: l } = await zc.readJson(
          jm.join(c, "metadata.json")
        ),
        { name: f } = dZ.safeLoad(
          await zc.readFile(`${c}/ucore/config/settings.yaml`)
        );
      (e.status = 202),
        Gm("backup.import", {
          ssoUser: i,
          backupUrl: c,
          controllers: d,
          services: u,
          firmwareVersion: p,
          createdAt: l,
          consoleName: f,
          isUploadedBackup: !0,
        }).catch((m) => {
          e.logger.error("Failed to restore with the background process:", m);
        });
    } catch (a) {
      a instanceof $P ? (e.status = a.httpCode) : (e.status = 500),
        e.logger.error("Failed to restore from settings:", a),
        (e.body = { errors: [a.message] });
    }
    return t();
  };
});
var HP = w((lve, GP) => {
  var Hm = require("path"),
    { publish: yZ } = require("handoff"),
    Jc = require("fs-extra"),
    wZ = require("js-yaml"),
    gZ = require("ajv"),
    { isRestoreInProgress: EZ } = H(),
    { AppError: jP, errorCodes: SZ } = (se(), me),
    {
      DEBIAN_PACKAGE_VERSIONS_FILE_NAME: bZ,
      BACKUP_BASE_FOLDER_NAME: _Z,
      UPLOAD_FOLDER_PATH: TZ,
    } = ct(),
    IZ = new gZ({ useDefaults: !0 }),
    AZ = {
      type: "object",
      properties: {
        body: {
          type: "object",
          properties: {
            ssoUser: {
              type: "object",
              properties: {
                uuid: { type: "string" },
                ssoAuth: {
                  type: ["object", "string"],
                  properties: {
                    name: { type: "string" },
                    value: { type: "string" },
                    path: { type: "string" },
                    domain: { type: "string" },
                    expires: { type: "string" },
                    secure: { type: "boolean" },
                    httpOnly: { type: "boolean" },
                  },
                  required: ["name", "value", "expires"],
                },
              },
              required: ["ssoAuth", "uuid"],
            },
          },
          required: ["ssoUser"],
        },
      },
      required: ["body"],
    };
  GP.exports = async (e, t) => {
    let r = IZ.compile(AZ);
    if (!r({ body: e.request.body }))
      return (e.status = 400), (e.body = { validationErrors: r.errors }), t();
    let { id: s } = e.params,
      a = `${TZ}/extracted-backup-${s}`;
    if (!(await Jc.exists(a)))
      return (
        (e.status = 404),
        (e.body = { error: `Backup file with id=${s} not found` }),
        t()
      );
    if (await EZ()) {
      let o = new jP(SZ.RESTORE_IN_PROGRESS);
      return (
        (e.status = o.httpCode),
        (e.body = { success: !1, errors: [o.message] }),
        t()
      );
    }
    try {
      let { ssoUser: o } = e.request.body,
        n = Hm.join(a, _Z),
        { controllers: i, services: c } = await Jc.readJson(Hm.join(n, bZ)),
        { firmware_version: d, created_at: u } = await Jc.readJson(
          Hm.join(n, "metadata.json")
        ),
        { name: p } = wZ.safeLoad(
          await Jc.readFile(`${n}/ucore/config/settings.yaml`)
        );
      (e.status = 202),
        yZ("backup.import", {
          ssoUser: o,
          backupUrl: n,
          controllers: i,
          services: c,
          firmwareVersion: d,
          createdAt: u,
          consoleName: p,
          isUploadedBackup: !0,
        }).catch((l) => {
          e.logger.error("Failed to restore with the background process:", l);
        });
    } catch (o) {
      o instanceof jP ? (e.status = o.httpCode) : (e.status = 500),
        e.logger.error("Failed to restore from setup:", o),
        (e.body = { errors: [o.message] });
    }
    return t();
  };
});
var KP = w((pve, WP) => {
  var { getRestoreProgress: vZ } = H();
  WP.exports = async (e, t) => {
    try {
      (e.body = await vZ()), (e.status = 200);
    } catch (r) {
      (e.status = 500),
        (e.body = { errors: [r.message] }),
        e.logger.error("Failed to get backup restore progress:", r);
    }
    return t();
  };
});
var JP = w((mve, zP) => {
  var CZ = require("ajv"),
    { publish: Wm } = require("handoff"),
    DZ = ki(),
    { isRestoreInProgress: NZ } = H(),
    { AppError: YP, errorCodes: RZ } = (se(), me),
    PZ = new CZ({ useDefaults: !0 }),
    UZ = {
      type: "object",
      properties: {
        body: {
          type: "object",
          properties: {
            password: { type: "string" },
            ssoUser: {
              type: "object",
              properties: {
                uuid: { type: "string" },
                ssoAuth: {
                  type: ["object", "string"],
                  properties: {
                    name: { type: "string" },
                    value: { type: "string" },
                    path: { type: "string" },
                    domain: { type: "string" },
                    expires: { type: "string" },
                    secure: { type: "boolean" },
                    httpOnly: { type: "boolean" },
                  },
                  required: ["name", "value", "expires"],
                },
              },
              required: ["ssoAuth", "uuid"],
            },
          },
          required: ["password", "ssoUser"],
        },
      },
      required: ["body"],
    };
  zP.exports = async (e, t) => {
    let r = PZ.compile(UZ);
    if (!r({ body: e.request.body }))
      return (e.status = 400), (e.body = { validationErrors: r.errors }), t();
    try {
      if (await NZ()) throw new YP(RZ.RESTORE_IN_PROGRESS);
      let { id: s } = e.params,
        { ssoUser: a, password: o } = e.request.body,
        { ssoAuth: n } = a,
        i = (await Wm("cloud.api.getBackupList", n))
          .reduce(
            (h, { backups: S, deviceId: D, name: A }) => [
              ...h,
              ...S.map(({ fileKey: C, filename: R, metadata: N, time: b }) => ({
                id: N.id,
                fileKey: C,
                filename: R,
                metadata: N,
                time: b,
                deviceId: D,
                name: A,
              })),
            ],
            []
          )
          .find((h) => h.id === s);
      if (!i) return (e.status = 404), t();
      let {
          deviceId: c,
          fileKey: d,
          filename: u,
          time: p,
          name: l,
          metadata: { controllers: f, firmware_version: m, services: E },
        } = i,
        y = await Wm("cloud.api.getBackupUrl", n, d, c);
      (e.status = 202),
        Wm("backup.import", {
          ssoUser: a,
          backupUrl: y,
          controllers: f,
          services: E,
          firmwareVersion: m,
          createdAt: p,
          consoleName: l,
          filename: u,
          password: o,
          isUploadedBackup: !1,
        }).catch((h) => {
          e.logger.error("Failed to restore with the background process:", h);
        });
    } catch (s) {
      e.logger.error("Failed to restore from setup", s),
        s instanceof YP
          ? (e.status = s.httpCode)
          : DZ(s)
          ? (e.status = 408)
          : (e.status = 500),
        (e.body = { errors: [s.message] });
    }
    return t();
  };
});
var ZP = w((fve, QP) => {
  var kZ = require("ajv"),
    { publish: eo } = require("handoff"),
    { isRestoreInProgress: OZ } = H(),
    { AppError: XP, errorCodes: qZ } = (se(), me),
    FZ = new kZ({ useDefaults: !0 }),
    LZ = {
      type: "object",
      properties: {
        body: {
          type: "object",
          properties: { password: { type: "string" } },
          required: ["password"],
        },
      },
      required: ["body"],
    };
  QP.exports = async (e, t) => {
    let r = FZ.compile(LZ);
    if (!r({ body: e.request.body }))
      return (e.status = 400), (e.body = { validationErrors: r.errors }), t();
    try {
      if (await OZ()) throw new XP(qZ.RESTORE_IN_PROGRESS);
      let { password: s } = e.request.body,
        o = (await eo("uum.getUsers")).find(({ isOwner: A }) => A);
      if (
        !(await eo("uum.verifyPassword", {
          username: o.sso_account || o.email,
          password: s,
        }))
      )
        throw new Error("Invalid username or password");
      let { id: i } = e.params,
        c = (await eo("cloud.getBackupList"))
          .reduce(
            (A, { backups: C, deviceId: R, name: N }) => [
              ...A,
              ...C.map(({ fileKey: b, filename: T, metadata: M, time: q }) => ({
                id: M.id,
                fileKey: b,
                filename: T,
                metadata: M,
                time: q,
                deviceId: R,
                name: N,
              })),
            ],
            []
          )
          .find((A) => A.id === i);
      if (!c) return (e.status = 404), t();
      let {
          deviceId: d,
          fileKey: u,
          filename: p,
          time: l,
          name: f,
          metadata: { controllers: m, firmware_version: E, services: y },
        } = c,
        h = await eo("cloud.getBackupUrl", u, d),
        S = await eo("uum.ubicAuth"),
        D = { uuid: o.sso_uuid, ssoAuth: { value: S } };
      (e.status = 202),
        eo("backup.import", {
          ssoUser: D,
          backupUrl: h,
          controllers: m,
          services: y,
          firmwareVersion: E,
          createdAt: l,
          consoleName: f,
          filename: p,
          password: s,
          isUploadedBackup: !1,
        }).catch((A) => {
          e.logger.error("Failed to restore with the background process:", A);
        });
    } catch (s) {
      s instanceof XP
        ? (e.status = s.httpCode)
        : (e.status = s.message === "Invalid username or password" ? 403 : 500),
        e.logger.error("Failed to import backup:", s),
        (e.body = { errors: [s.message] });
    }
    return t();
  };
});
var tU = w((hve, eU) => {
  var { publish: MZ } = require("handoff"),
    { AppError: xZ } = (se(), me);
  eU.exports = async (e, t) => {
    try {
      let { controllers: r, services: s } = await MZ("backup.export.cloud", {
        userId: e.user.id,
      });
      e.body = { success: !0, controllers: r, services: s };
    } catch (r) {
      r instanceof xZ
        ? ((e.status = r.httpCode),
          (e.body = { message: r.message, code: r.code }))
        : ((e.status = 500), (e.body = { errors: [r.message] })),
        e.logger.error("Failed to upload backup to cloud:", r);
    }
    return t();
  };
});
var aU = w((yve, sU) => {
  var $Z = require("ajv"),
    { publish: Km } = require("handoff"),
    BZ = new $Z({ useDefaults: !0 }),
    VZ = {
      type: "object",
      properties: {
        body: {
          type: "object",
          properties: { password: { type: "string" } },
          required: ["password"],
        },
      },
      required: ["body"],
    },
    rU = BZ.compile(VZ);
  sU.exports = async (e, t) => {
    try {
      if (!rU({ body: e.request.body, params: e.params }))
        return (
          (e.status = 400), (e.body = { validationErrors: rU.errors }), t()
        );
      let { password: r } = e.request.body,
        a = (await Km("uum.getUsers")).find(({ isOwner: n }) => n);
      if (
        !(await Km("uum.verifyPassword", {
          username: a.sso_account || a.email,
          password: r,
        }))
      )
        throw new Error("Invalid username or password");
      await Km("cloud.createEncryptionKey", r), (e.body = { success: !0 });
    } catch (r) {
      r.message.includes("Invalid username or password")
        ? (e.status = 403)
        : (e.status = 500),
        e.logger.error(r),
        (e.body = { errors: [r.message] });
    }
    return t();
  };
});
var nU = w((wve, oU) => {
  var { publish: jZ } = require("handoff");
  oU.exports = async (e, t) => {
    try {
      e.body = await jZ("cloud.getBackupList");
    } catch (r) {
      (e.status = 500),
        e.logger.error(r),
        (e.body = { success: !1, errors: [r.message] });
    }
    return t();
  };
});
var cU = w((gve, iU) => {
  var { publish: GZ } = require("handoff"),
    HZ = require("ajv"),
    WZ = ki(),
    KZ = new HZ({ useDefaults: !0 }),
    YZ = {
      type: "object",
      properties: {
        body: {
          type: "object",
          properties: {
            ssoAuth: {
              type: ["object", "string"],
              properties: {
                name: { type: "string" },
                value: { type: "string" },
                path: { type: "string" },
                domain: { type: "string" },
                expires: { type: "string" },
                secure: { type: "boolean" },
                httpOnly: { type: "boolean" },
              },
              required: ["name", "value", "expires"],
            },
          },
          required: ["ssoAuth"],
        },
      },
      required: ["body"],
    };
  iU.exports = async (e, t) => {
    try {
      let r = KZ.compile(YZ);
      if (!r({ body: e.request.body }))
        return (e.status = 400), (e.body = { validationErrors: r.errors }), t();
      let { ssoAuth: s } = e.request.body;
      e.body = await GZ("cloud.api.getBackupList", s);
    } catch (r) {
      e.logger.error("Failed to get backup list", r),
        (e.status = WZ(r) ? 408 : 500),
        (e.body = { errors: [r.message] });
    }
    return t();
  };
});
var dU = w((Eve, uU) => {
  var { publish: zZ } = require("handoff"),
    JZ = require("ajv"),
    XZ = new JZ({ useDefaults: !0 }),
    QZ = {
      type: "object",
      properties: {
        body: {
          type: "object",
          properties: {
            ssoAuth: {
              type: ["object", "string"],
              properties: {
                name: { type: "string" },
                value: { type: "string" },
                path: { type: "string" },
                domain: { type: "string" },
                expires: { type: "string" },
                secure: { type: "boolean" },
                httpOnly: { type: "boolean" },
              },
              required: ["name", "value", "expires"],
            },
          },
          required: ["ssoAuth"],
        },
      },
      required: ["body"],
    };
  uU.exports = async (e, t) => {
    try {
      let r = XZ.compile(QZ);
      if (!r({ body: e.request.body }))
        return (e.status = 400), (e.body = { validationErrors: r.errors }), t();
      let { ssoAuth: s } = e.request.body;
      e.body = await zZ("cloud.getWarrantyList", s);
    } catch (r) {
      (e.status = 500), e.logger.error(r), (e.body = { errors: [r.message] });
    }
    return t();
  };
});
var Ym = w((Sve, lU) => {
  lU.exports = (e) => {
    let [t, r] = e.split("@");
    return t.length < 3
      ? `${t.substring(0, 1)}************@${r}`
      : `${t.substring(0, 2)}************@${r}`;
  };
});
var mU = w((bve, pU) => {
  var { publish: ZZ } = require("handoff"),
    eee = Ym();
  pU.exports = async (e, t) => {
    try {
      let r = await ZZ("cloud.getUCareOwnerEmail");
      if (!r) return (e.status = 204), t();
      (e.status = 200), (e.body = eee(r));
    } catch (r) {
      (e.status = r.status || 500),
        e.logger.error(r),
        (e.body = { errors: [r.message] });
    }
    return t();
  };
});
var wU = w((Tve, yU) => {
  var fU = g(require("handoff"));
  qt();
  var hU = g(H()),
    tee = async (e) => {
      let { name: t } = e.params;
      if (!(await (0, hU.getControllers)()).some((s) => s.name === t)) {
        (e.status = 400), (e.body = { error: "Invalid application name" });
        return;
      }
      (0, fU.publish)("controllers.update", {
        applicationName: t,
        context: { userId: e.user.id },
      }).catch((s) => {
        e.logger.error(`Application "${t}" update request failed`, Te(s));
      }),
        (e.status = 204);
    };
  yU.exports = tee;
});
var SU = w((Ive, EU) => {
  var { publish: gU } = require("handoff"),
    { getApps: ree } = H();
  EU.exports = async (e, t) => {
    let { name: r, action: s } = e.params,
      a = await gU("controllers.allowedActions");
    return a.includes(s)
      ? (await ree()).filter((i) => i.type === "controller" && i.name === r)
          .length
        ? (await gU(`controllers.${s}`, r, {
            source: "api",
            userId: e.user.id,
          }),
          (e.status = 204),
          t())
        : ((e.status = 404),
          (e.body = { error: `Application named "${r}" not found` }),
          t())
      : ((e.status = 400),
        (e.body = {
          error: `Action not allowed. Allowed actions: ${a.join(", ")}`,
        }),
        t());
  };
});
var TU = w((Ave, _U) => {
  var see = require("ajv"),
    { publish: aee } = require("handoff"),
    oee = new see({ useDefaults: !0 }),
    nee = {
      type: "object",
      properties: {
        controllersToCheck: { type: "array", items: { type: "string" } },
      },
      required: ["controllersToCheck"],
    },
    bU = oee.compile(nee);
  _U.exports = async (e, t) => {
    if (!bU(e.request.body))
      return (e.status = 400), (e.body = { validationErrors: bU.errors }), t();
    let { controllersToCheck: r } = e.request.body;
    return r.length === 0
      ? ((e.body = {}), t())
      : ((e.body = await aee("controllers.checkForUpdates", r, {
          userId: e.user.id,
        })),
        t());
  };
});
var AU = w((Dve, IU) => {
  var { publish: iee } = require("handoff"),
    { AppError: vve, errorCodes: Cve } = (se(), me),
    { deviceStates: cee } = Ot();
  IU.exports = async (e, t) => {
    let { persistFullData: r = !0 } = e.request.body;
    await new Promise((s, a) => {
      iee("firmware.update", {
        persistFullData: r,
        onStatusChange: (o) => {
          if (o === cee.WILL_UPGRADE) return s(o);
        },
      }).catch((o) => {
        e.logger.error("Firmware updated failed", o), a(o);
      });
    }),
      (e.status = 204),
      await t();
  };
});
var CU = w((Nve, vU) => {
  var { publish: uee } = require("handoff");
  vU.exports = async (e, t) => {
    try {
      e.body = await uee("firmware.refreshUpdateInfo", null, {
        userId: e.user.id,
      });
    } catch (r) {
      (e.status = 500), (e.body = { errors: [r.message] });
    }
    await t();
  };
});
var NU = w((Rve, DU) => {
  var { publish: dee } = require("handoff");
  DU.exports = async (e, t) => {
    let r = await dee("firmware.getSchedule");
    (e.status = 200), (e.body = r), await t();
  };
});
var Xc = w((Pve, RU) => {
  var lee = () => !process.env.IS_CLOUD_INSTANCE;
  RU.exports = { isFirmwareScheduleUpdateAllowed: lee };
});
var Qc = w((Uve, PU) => {
  var pee = {
    type: ["object", "null"],
    properties: {
      frequency: { enum: ["daily", "weekly", "monthly"], default: "weekly" },
      day: { type: "integer", minimum: 0, maximum: 7, default: 0 },
      hour: { type: "integer", minimum: 0, maximum: 23, default: 0 },
      includeFirmware: { type: "boolean", default: !0 },
      includeControllers: { type: "boolean", default: !0 },
    },
  };
  PU.exports = pee;
});
var OU = w((kve, kU) => {
  var { publish: mee } = require("handoff"),
    fee = require("ajv"),
    { errorCodes: hee, ValidationError: yee, AppError: wee } = (se(), me),
    { isFirmwareScheduleUpdateAllowed: gee } = Xc(),
    Eee = Qc(),
    See = new fee({ useDefaults: !0 }),
    UU = See.compile(Eee);
  kU.exports = async (e, t) => {
    let r = e.request.body;
    if (!UU(r)) throw new yee(UU);
    if (!gee()) throw new wee(hee.ACTION_FORBIDDEN);
    try {
      await mee("firmware.setSchedule", r), (e.status = 200);
    } catch (s) {
      (e.status = 500), (e.body = { errors: [s.message] });
    }
  };
});
var FU = w((Ove, qU) => {
  var { publish: bee } = require("handoff"),
    { errorCodes: _ee, AppError: Tee } = (se(), me),
    { isFirmwareScheduleUpdateAllowed: Iee } = Xc();
  qU.exports = async (e, t) => {
    if (!Iee()) throw new Tee(_ee.ACTION_FORBIDDEN);
    await bee("firmware.deleteSchedule"), (e.status = 200), await t();
  };
});
var xU = w((qve, MU) => {
  var { publish: Aee } = require("handoff"),
    vee = require("ajv"),
    { ValidationError: Cee } = (se(), me),
    { updateFrequency: zm } = Wr(),
    Dee = new vee(),
    Nee = {
      type: "object",
      properties: {
        unifiOS: {
          type: "object",
          properties: {
            frequency: { enum: [zm.DAILY, zm.WEEKLY], default: zm.DAILY },
            day: { type: "integer", minimum: 0, maximum: 6, default: 0 },
            hour: { type: "integer", minimum: 0, maximum: 23, default: 3 },
          },
          required: ["frequency", "hour"],
        },
        devices: {
          type: "object",
          properties: {
            hour: { type: "integer", minimum: 0, maximum: 23, default: 4 },
          },
          required: ["hour"],
        },
      },
    },
    LU = Dee.compile(Nee);
  MU.exports = async (e, t) => {
    if (!LU(e.request.body)) throw new Cee(LU);
    try {
      let { unifiOS: r, devices: s } = e.request.body;
      await Aee("firmware.setAutoUpdatePreferences", r, s), (e.status = 200);
    } catch (r) {
      (e.status = 500), (e.body = { errors: [r.message] });
    }
  };
});
var BU = w((Fve, $U) => {
  var { getFirmware: Ree } = H();
  $U.exports = async (e, t) => {
    try {
      let { autoUpdatePrompt: r = {} } = await Ree();
      (e.status = 200), (e.body = r);
    } catch (r) {
      e.logger.error(r), (e.status = 500), (e.body = { errors: [r.message] });
    }
    return t();
  };
});
var Zc = w((Lve, VU) => {
  VU.exports = {
    BACKGROUNDS_DIR: "/data/unifi-core/floorplans/",
    ALLOWED_MIME_TYPES: ["image/png", "image/jpeg"],
    MAX_FILESIZE_BYTES: 5e6,
  };
});
var YU = w((Mve, KU) => {
  var { publish: Pee } = require("handoff"),
    jU = require("@koa/multer"),
    { v4: Uee } = require("uuid"),
    GU = require("path"),
    Jm = require("fs-extra"),
    Xm = yi(),
    HU = Mo(),
    {
      BACKGROUNDS_DIR: Qm,
      ALLOWED_MIME_TYPES: kee,
      MAX_FILESIZE_BYTES: WU,
    } = Zc(),
    Oee = jU({
      storage: jU.diskStorage({
        destination: async (e, t, r) => {
          await Jm.ensureDir(Qm), r(null, Qm);
        },
        filename: (e, t, r) => {
          r(null, Uee() + GU.extname(t.originalname));
        },
      }),
      fileFilter: (e, t, r) =>
        kee.includes(t.mimetype)
          ? r(null, !0)
          : r(
              new Xm(
                HU.UPLOAD_ERROR({
                  message: `Unsupported file type ${t.mimetype}`,
                  httpCode: 415,
                })
              )
            ),
      limits: { fileSize: WU },
    }).single("background");
  KU.exports = async (e, t) => {
    try {
      await Oee(e, () => {});
      let r = await Pee("floorplans.add", e.file);
      e.body = { backgroundURL: r };
    } catch (r) {
      if ((e.logger.error(r), r instanceof Xm)) throw r;
      if (r.code === "LIMIT_FILE_SIZE")
        throw new Xm(
          HU.UPLOAD_ERROR({
            message: "File too large",
            httpCode: 413,
            data: { maxLimit: WU },
          })
        );
      let s = GU.join(Qm, e.file.filename);
      (await Jm.pathExists(s)) &&
        Jm.remove(s).catch((a) => e.logger.error("Failed to cleanup file", a)),
        (e.status = 500),
        (e.body = { errors: [r.message] });
    }
    return t();
  };
});
var XU = w((xve, JU) => {
  var qee = require("ajv"),
    { publish: Fee } = require("handoff"),
    Lee = new qee(),
    Mee = {
      type: "object",
      properties: {
        distanceUnit: { enum: ["m", "ft"] },
        distanceValue: { type: "number" },
        startX: { type: "number" },
        startY: { type: "number" },
        endX: { type: "number" },
        endY: { type: "number" },
      },
      minProperties: 1,
      additionalProperties: !1,
    },
    zU = Lee.compile(Mee);
  JU.exports = async (e, t) => {
    if (!zU(e.request.body))
      return (e.status = 400), (e.body = { validationErrors: zU.errors }), t();
    let { id: r } = e.params;
    try {
      await Fee("floorplans.updateCalibration", r, e.request.body),
        (e.status = 204);
    } catch (s) {
      e.logger.error(s), (e.status = 500), (e.body = { errors: [s.message] });
    }
    return t();
  };
});
var ek = w(($ve, ZU) => {
  var xee = require("ajv"),
    { publish: $ee } = require("handoff"),
    Bee = new xee(),
    Vee = {
      type: "object",
      properties: {
        x: { type: "number" },
        y: { type: "number" },
        direction: { type: "number", default: null },
        moved: { type: "boolean", default: !0 },
      },
      required: ["x", "y"],
    },
    QU = Bee.compile(Vee);
  ZU.exports = async (e, t) => {
    if (!QU(e.request.body))
      return (e.status = 400), (e.body = { validationErrors: QU.errors }), t();
    let { id: r, mac: s } = e.params;
    try {
      await $ee("floorplans.updateDevice", r, s, e.request.body),
        (e.status = 204);
    } catch (a) {
      e.logger.error(a), (e.status = 500), (e.body = { errors: [a.message] });
    }
    return t();
  };
});
var rk = w((Bve, tk) => {
  var { publish: Zm } = require("handoff");
  tk.exports = async (e, t) => {
    let { id: r } = e.params;
    Zm("applications.realtimeUpdates.enable").catch((s) => e.logger.error(s));
    try {
      let s = await Zm("floorplans.getLastUpdated", r);
      if (((e.response.lastModified = s), (e.status = 200), e.fresh))
        return (e.status = 304), t();
      let a = await Zm("floorplans.get", r);
      e.body = a;
    } catch (s) {
      e.logger.error(s), (e.status = 500), (e.body = { errors: [s.message] });
    }
    return t();
  };
});
var ak = w((Vve, sk) => {
  var { publish: jee } = require("handoff");
  sk.exports = async (e, t) => {
    let { id: r } = e.params;
    try {
      await jee("system.ustorage.erase", r), (e.status = 204);
    } catch (s) {
      e.logger.error(s), (e.status = 500);
    }
    await t();
  };
});
var nk = w((jve, ok) => {
  var { publish: Gee } = require("handoff");
  ok.exports = async (e, t) => {
    try {
      await Gee("system.ustorage.nuke"), (e.status = 204);
    } catch (r) {
      e.status = 500;
    }
    await t();
  };
});
var ef = w((Hve, ik) => {
  var { publish: Hee } = require("handoff"),
    Gve = require("path");
  ik.exports = async (e, t) => {
    try {
      let r = await Hee("system.generateSupportFile");
      e.set("filename", r.getFileName()), (e.body = r.getStream());
    } catch (r) {
      e.logger.error("Failed to generate support file", r), (e.status = 500);
    }
    await t();
  };
});
var tf = w((Wve, ck) => {
  ck.exports = (e, t) => {
    let { isSetup: r, hardware: s, name: a, mac: o } = e;
    return !t && r
      ? { hardware: { shortname: s.shortname }, name: a, mac: o }
      : B(v({}, e), {
          owner: e.owner
            ? {
                avatar: `/proxy/users${e.owner.avatar_relative_path}`,
                full_name: e.owner.full_name,
                sso_uuid: e.owner.sso_uuid,
                unique_id: e.owner.unique_id,
              }
            : null,
        });
  };
});
var dk = w((Kve, uk) => {
  uk.exports = { type: "string", minLength: 1, maxLength: 32 };
});
var rf = w((Yve, lk) => {
  var Wee = dk();
  lk.exports = { deviceName: Wee };
});
var hk = w((Xve, fk) => {
  Jo();
  _s();
  var Kee = require("ajv"),
    { publish: sf } = require("handoff"),
    Yee = Yo(),
    { UserPermission: wr } = (Re(), Hs),
    zee = tf(),
    Jee = Qc(),
    { deviceName: Xee } = rf(),
    { AppError: af, errorCodes: pk, ValidationError: Qee } = (se(), me),
    { isFirmwareScheduleUpdateAllowed: Zee } = Xc(),
    { getIsSetup: ete } = H(),
    tte = new Kee({ useDefaults: !0, removeAdditional: "all" }),
    rte = {
      type: "object",
      properties: {
        name: { type: "string", pattern: "^[a-zA-Z0-9-_]+$" },
        type: { type: "string" },
        mode: { type: "string" },
        address: { type: "string" },
        netmask: { type: "string" },
        "dhcp-fallback-ip": { type: "string" },
        "dhcp-fallback-netmask": { type: "string" },
        gateway: { type: "string" },
        dns: { maxItems: 4, items: { type: "string" } },
      },
    },
    ste = { type: "array", items: rte },
    ate = async () => ({
      type: "object",
      properties: {
        clientNetwork: ste,
        location: {
          type: "object",
          properties: {
            lat: { type: "number" },
            long: { type: "number" },
            radius: { type: "number" },
            text: { type: "string" },
          },
          required: ["lat", "long", "radius"],
        },
        ssh: {
          type: "object",
          properties: {
            enabled: { type: "boolean" },
            agreementAccepted: { const: !0 },
          },
          minProperties: 1,
        },
        timezone: { enum: Array.from(await Zr()) },
        name: Xee,
        updateSchedule: Jee,
        releaseChannel: { type: "string" },
        sendDiagnostics: { enum: ["none", "anonymous", "full"] },
        hotspare: { type: "boolean" },
        raid: { type: "string" },
        wanLinkSpeed: { enum: [Vt.FDX_1_000, Vt.FDX_10_000, Vt.AUTONEG] },
      },
      anyOf: [
        { required: ["clientNetwork"] },
        { required: ["location"] },
        { required: ["ssh"] },
        { required: ["timezone"] },
        { required: ["name"] },
        { required: ["updateSchedule"] },
        { required: ["releaseChannel"] },
        { required: ["sendDiagnostics"] },
        { required: ["hotspare"] },
        { required: ["raid"] },
        { required: ["wanLinkSpeed"] },
      ],
    }),
    mk = {
      releaseChannel: wr.EDIT_RELEASE_CHANNEL,
      location: wr.EDIT_CONSOLE_SETTINGS,
      timezone: wr.EDIT_CONSOLE_SETTINGS,
      name: wr.EDIT_CONSOLE_SETTINGS,
      ssh: wr.EDIT_SSH,
      autoBackupEnabled: wr.EDIT_BACKUPS,
      clientNetwork: wr.EDIT_CONSOLE_SETTINGS,
      sendDiagnostics: wr.EDIT_CONSOLE_SETTINGS,
      raid: wr.EDIT_CONSOLE_SETTINGS,
      hotspare: wr.EDIT_CONSOLE_SETTINGS,
      updateSchedule: wr.EDIT_CONSOLE_SETTINGS,
    };
  fk.exports = async (e, t) => {
    let r = e.request.body,
      [s, a] = await Promise.all([sf("system.device"), ete()]),
      o = await ate();
    s.features.cloudBackup &&
      ((o.properties.autoBackupEnabled = { type: "boolean" }),
      o.anyOf.push({ required: ["autoBackupEnabled"] }));
    let n = tte.compile(o);
    if (!n(r)) throw new Qee(n);
    if (r.updateSchedule && !Zee())
      throw new af(
        pk.ACTION_FORBIDDEN({
          message: "Firmware schedule configuration is not allowed",
        })
      );
    try {
      if (
        a &&
        Object.keys(r).some((d) => mk[d] && !e.user.ucorePermission[mk[d]])
      )
        throw new af(pk.ACTION_FORBIDDEN);
      if (r.timezone)
        try {
          let { timezone: d } = await Yee();
          r.skipTimezoneAutoUpdate = r.timezone !== d;
        } catch {}
      await sf("system.patch", r, { userId: e.user?.id });
      let c = await sf("system.info", !0);
      (e.body = zee(c, e.user)), (e.status = 200);
    } catch (i) {
      e.logger.error("Failed to patch system settings", i),
        i instanceof af
          ? ((e.status = i.httpCode),
            (e.body = { message: i.message, code: i.code }))
          : ((e.body = { errors: [i.message], code: i.code }),
            (e.status = 500));
    }
    await t();
  };
});
var wk = w((Qve, yk) => {
  var { publish: ote } = require("handoff"),
    { getControllers: nte, getDeviceState: ite } = H(),
    { WILL_UPGRADE: cte, UPGRADING: ute } = Ot().deviceStates;
  yk.exports = async (e, t) => {
    try {
      let [r, s] = await Promise.all([ite(), nte()]);
      if (
        [cte, ute].includes(r) ||
        s.some((a) =>
          ["installing", "updating", "updatePending"].includes(a.installState)
        )
      )
        return (
          (e.status = 400),
          (e.body = {
            error:
              "Not allowed to reboot console while firmware or applications are updating",
          }),
          t()
        );
      await ote("system.reboot"), (e.status = 204);
    } catch (r) {
      e.logger.error("Failed to reboot: ", r), (e.status = 500);
    }
    await t();
  };
});
var of = w((Zve, gk) => {
  var { publish: dte } = require("handoff");
  gk.exports = async (e, t) => {
    try {
      await dte("system.resetToDefaults"), (e.status = 204);
    } catch (r) {
      e.status = 500;
    }
    await t();
  };
});
var Sk = w((eCe, Ek) => {
  var { publish: lte } = require("handoff"),
    { getControllers: pte, getDeviceState: mte } = H(),
    { WILL_UPGRADE: fte, UPGRADING: hte } = Ot().deviceStates;
  Ek.exports = async (e, t) => {
    try {
      let [r, s] = await Promise.all([mte(), pte()]);
      if (
        [fte, hte].includes(r) ||
        s.some((a) =>
          ["installing", "updating", "updatePending"].includes(a.installState)
        )
      )
        return (
          (e.status = 400),
          (e.body = {
            error:
              "Not allowed to power off console while firmware or applications are updating",
          }),
          t()
        );
      await lte("system.poweroff"), (e.status = 204);
    } catch (r) {
      e.logger.error("Failed to poweroff: ", r), (e.status = 500);
    }
    await t();
  };
});
var Tk = w((tCe, _k) => {
  var yte = require("ajv"),
    { publish: wte } = require("handoff"),
    gte = new yte({ useDefaults: !0 }),
    Ete = {
      type: "object",
      properties: { password: { type: "string", minLength: 8 } },
      required: ["password"],
    },
    bk = gte.compile(Ete);
  _k.exports = async (e, t) => {
    let r = e.request.body;
    if (!bk(r))
      return (e.status = 400), (e.body = { validationErrors: bk.errors }), t();
    let { password: s } = r;
    try {
      await wte("system.setSshPassword", s, { userId: e.user.id }),
        (e.status = 204);
    } catch (a) {
      e.status = 500;
    }
    await t();
  };
});
var Ak = w((rCe, Ik) => {
  Ik.exports = async (e, t) => {
    (e.status = 200), (e.body = e.user), await t();
  };
});
var Dk = w((sCe, Ck) => {
  var Ste = require("ajv"),
    { publish: Pn } = require("handoff"),
    bte = new Ste({ useDefaults: !0 }),
    _te = { type: "object", properties: { email: { type: "string" } } },
    vk = bte.compile(_te);
  Ck.exports = async (e, t) => {
    let r = e.request.body;
    if (!vk(r))
      return (e.status = 400), (e.body = { validationErrors: vk.errors }), t();
    let { email: s } = r;
    try {
      if (
        !(await Pn("uum.getUsers")).find(
          (n) => n.isSuperAdmin && n.email === s && n.status === "ACTIVE"
        )
      )
        return (
          (e.status = 400),
          (e.body = {
            errors: "Not allowed to transfer the ownership to provided user",
          }),
          t()
        );
      await Pn("uum.transferOwner", s), await Pn("cloud.syncOwner");
      try {
        await Pn("cloud.downloadEncryptionKey");
      } catch (n) {
        e.logger.warn(
          "Disable scheduled backups as new owner doesn't have the encryption key."
        ),
          await Pn("backup.schedule.setAutoBackupEnabled", !1);
      }
      (e.status = 200), (e.body = e.user);
    } catch (a) {
      e.logger.error("Failed to transfer owner:", a),
        (e.status = 500),
        (e.body = { errors: `Failed to transfer owner: ${a.message}` });
    }
    await t();
  };
});
var Rk = w((aCe, Nk) => {
  var { publish: Tte } = require("handoff");
  Nk.exports = async (e, t) => {
    (e.body = await Tte("webrtc.config")), await t();
  };
});
var Uk = w((oCe, Pk) => {
  var { publish: Ite } = require("handoff");
  Pk.exports = async (e, t) => {
    let { offer: r } = e.request.body;
    try {
      let s = await Ite("webrtc.connect", r, e.user.id, e.request.body);
      e.body = { answer: s };
    } catch (s) {
      e.logger.error(s),
        (e.status = 500),
        (e.body = { error: "Unable to generate answer" });
    }
    return t();
  };
});
var Ok = w((nCe, kk) => {
  var { publish: Ate } = require("handoff");
  kk.exports = async (e, t) => {
    e.body = await Ate("apps.getNormalized", e.user);
  };
});
var Fk = w((iCe, qk) => {
  var { publish: vte } = require("handoff"),
    { getIsSetup: Cte } = H(),
    { AppError: Dte } = (se(), me);
  qk.exports = async (e, t) => {
    let r = await Cte(),
      {
        username: s,
        password: a,
        token: o,
        rememberMe: n,
        deviceToken: i,
        sendDefaultMfa: c,
      } = e.request.body;
    (!s || !a) &&
      ((e.status = 401),
      (e.body = { error: "Username and password is required." }));
    try {
      let d = await vte("auth.login", {
        username: s,
        password: a,
        token: o,
        deviceToken: i,
        ssoLoginOnly: !r,
        sendDefaultMfa: c,
      });
      if (d && !r) return (e.body = d), t();
      if (!d || !d.user)
        (e.status = 401), (e.body = { error: "Invalid username or password." });
      else {
        let { user: u, deviceToken: p, ssoAuth: l } = d;
        (e.jwt.userId = u.id),
          n && (e.jwt.rememberMe = n),
          (e.user = u),
          (e.body = B(v({}, u), { deviceToken: p, ssoAuth: l }));
      }
    } catch (d) {
      d instanceof Dte
        ? ((e.status = d.httpCode),
          (e.body = { data: d.data, code: d.code, message: d.message }))
        : ((e.status = 401), (e.body = { errors: [d.message] })),
        e.logger.error(d);
    }
    await t();
  };
});
var xk = w((cCe, Mk) => {
  var Nte = require("ajv"),
    { publish: Rte } = require("handoff"),
    { getIsSetup: Pte } = H(),
    { AppError: Ute } = (se(), me),
    Lk = new Nte({ useDefaults: !0 }),
    kte = {
      type: "object",
      properties: { mfaCookie: { type: "string" } },
      required: ["mfaCookie"],
    },
    Ote = Lk.compile(kte);
  Mk.exports = async (e, t) => {
    let r = e.request.body;
    if (!Ote(r))
      return (e.status = 400), (e.body = { validationErrors: Lk.errors }), t();
    let { mfaCookie: s, rememberMe: a } = r,
      o = await Pte();
    try {
      let n = await Rte("uum.pollMfa", { mfaCookie: s, ssoLoginOnly: !o });
      if (o && n) {
        let { user: i, deviceToken: c, ssoAuth: d } = n;
        (e.jwt.userId = i.id),
          a && (e.jwt.rememberMe = a),
          (e.user = i),
          (e.body = B(v({}, i), { deviceToken: c, ssoAuth: d }));
      } else (e.body = n || {}), (e.status = n ? 200 : 202);
    } catch (n) {
      n instanceof Ute
        ? ((e.status = n.httpCode),
          (e.body = { data: n.data, code: n.code, message: n.message }))
        : ((e.status = n.status || 500), (e.body = { errors: [n.message] }));
    }
    await t();
  };
});
var Bk = w((uCe, $k) => {
  var { publish: qte } = require("handoff");
  $k.exports = async (e, t) => {
    let { token: r, ssoId: s } = e.request.body;
    r || ((e.status = 401), (e.body = { error: "token is required." })),
      s || ((e.status = 401), (e.body = { error: "ssoId is required." }));
    try {
      let a = await qte("auth.loginByNcaToken", r, s);
      a
        ? ((e.jwt.userId = a.id),
          (e.jwt.rememberMe = !0),
          (e.user = a),
          (e.body = a))
        : ((e.status = 401), (e.body = { error: "Invalid Token." }));
    } catch (a) {
      (e.status = 401), e.logger.error(a), (e.body = { errors: [a.message] });
    }
    await t();
  };
});
var jk = w((dCe, Vk) => {
  Vk.exports = async (e, t) => {
    let { ssoId: r } = e.params;
    return (
      (e.user || {}).sso_uuid === r
        ? (e.status = 204)
        : ((e.jwt = void 0),
          (e.status = 403),
          (e.body = { error: "Invalid User" })),
      await t()
    );
  };
});
var Hk = w((lCe, Gk) => {
  var { publish: Fte } = require("handoff");
  Gk.exports = async (e, t) => {
    let { token: r } = e.request.body;
    r || ((e.status = 401), (e.body = { error: "Token is required." }));
    try {
      let s = await Fte("auth.loginByOauthToken", r);
      s
        ? ((e.jwt.userId = s.id),
          (e.jwt.rememberMe = !0),
          (e.user = s),
          (e.status = 204))
        : ((e.status = 401), (e.body = { error: "Invalid Token." }));
    } catch (s) {
      (e.status = 401), e.logger.error(s), (e.body = { errors: [s.message] });
    }
    await t();
  };
});
var Yk = w((pCe, Kk) => {
  var Lte = require("ajv"),
    { publish: Mte } = require("handoff"),
    { AppError: xte } = (se(), me),
    Wk = new Lte({ useDefaults: !0 }),
    $te = {
      type: "object",
      properties: {
        username: { type: "string" },
        password: { type: "string" },
        token: { type: "string" },
      },
      required: ["username", "password"],
    },
    Bte = Wk.compile($te);
  Kk.exports = async (e, t) => {
    let r = e.request.body;
    if (!Bte(r))
      return (e.status = 400), (e.body = { validationErrors: Wk.errors }), t();
    let { username: s, password: a, token: o } = r;
    try {
      let n = await Mte("uum.login", {
        username: s,
        password: a,
        token: o,
        ssoLoginOnly: !0,
      });
      e.body = n;
    } catch (n) {
      n instanceof xte
        ? ((e.status = n.httpCode),
          (e.body = { data: n.data, code: n.code, message: n.message }))
        : ((e.status = 403), (e.body = { errors: [n.message] }));
    }
    await t();
  };
});
var Xk = w((mCe, Jk) => {
  var Vte = require("ajv"),
    { publish: jte } = require("handoff"),
    { AppError: Gte } = (se(), me),
    zk = new Vte({ useDefaults: !0 }),
    Hte = {
      type: "object",
      properties: { mfaCookie: { type: "string" } },
      required: ["mfaCookie"],
    },
    Wte = zk.compile(Hte);
  Jk.exports = async (e, t) => {
    let r = e.request.body;
    if (!Wte(r))
      return (e.status = 400), (e.body = { validationErrors: zk.errors }), t();
    let { mfaCookie: s } = r;
    try {
      let a = await jte("uum.pollMfa", { mfaCookie: s, ssoLoginOnly: !0 });
      (e.body = a || {}), (e.status = a ? 200 : 202);
    } catch (a) {
      a instanceof Gte
        ? ((e.status = 403),
          (e.body = { data: a.data, code: a.code, message: a.message }))
        : ((e.status = a.status || 500), (e.body = { errors: [a.message] }));
    }
    await t();
  };
});
var e0 = w((fCe, Zk) => {
  var Kte = require("ajv"),
    { publish: Yte } = require("handoff"),
    zte = new Kte({ useDefaults: !0 }),
    Jte = {
      type: "object",
      properties: { id: { type: "string" }, mfaCookie: { type: "string" } },
      if: { properties: { method: { enum: ["email", "sms"] } } },
      then: { required: ["id"] },
      else: { properties: { method: { const: "push" } } },
      required: ["method", "mfaCookie"],
    },
    Qk = zte.compile(Jte);
  Zk.exports = async (e, t) => {
    let r = e.request.body;
    if (!Qk(r))
      return (e.status = 400), (e.body = { validationErrors: Qk.errors }), t();
    let { method: s, id: a, mfaCookie: o } = r;
    try {
      let n = await Yte("sso.sendMfa", { method: s, id: a, mfaCookie: o });
      n ? (e.body = n) : (e.status = 204);
    } catch (n) {
      (e.status = n.status || 500), (e.body = { errors: [n.message] });
    }
    await t();
  };
});
var s0 = w((hCe, r0) => {
  var Xte = require("ajv"),
    { publish: Qte } = require("handoff"),
    t0 = new Xte({ useDefaults: !0 }),
    Zte = {
      type: "object",
      properties: {
        password: { type: "string" },
        user_inputs: { type: "array", items: { type: "string" } },
      },
      required: ["password"],
    },
    ere = t0.compile(Zte);
  r0.exports = async (e, t) => {
    let {
        first_name: r,
        last_name: s,
        email: a,
        username: o,
        password: n,
      } = e.request.body,
      i = [r, s].filter((d) => d),
      c = { password: n, user_inputs: [...i, a, o] };
    ere(c) || ((e.status = 400), (e.body = { validationErrors: t0.errors }));
    try {
      let d = await Qte("sso.passwordStrength", c),
        { is_acceptable_password: u } = d;
      u ? await t() : ((e.status = 400), (e.body = d));
    } catch (d) {
      (e.status = d.status || 500), (e.body = { errors: [d.message] });
    }
  };
});
var n0 = w((yCe, o0) => {
  var tre = require("ajv"),
    { publish: rre } = require("handoff"),
    a0 = new tre({ useDefaults: !0 }),
    sre = {
      type: "object",
      properties: {
        email: { type: "string" },
        first_name: { type: "string" },
        last_name: { type: "string" },
        username: { type: "string" },
        password: { type: "string" },
        newsletter: { type: "boolean" },
      },
      required: ["email", "username", "password"],
    },
    are = a0.compile(sre);
  o0.exports = async (e, t) => {
    let r = e.request.body;
    if (!are(r))
      return (e.status = 400), (e.body = { validationErrors: a0.errors }), t();
    try {
      e.body = await rre("sso.register", r);
    } catch (s) {
      (e.status = s.status || 500), (e.body = { errors: [s.message] });
    }
    await t();
  };
});
var c0 = w((wCe, i0) => {
  var ore = tf(),
    { publish: Un } = require("handoff"),
    {
      getSettings: nre,
      getFirmware: ire,
      getUnadoptedUnifiOSDevices: cre,
      getDeviceList: ure,
      getDirectConnectDomain: dre,
      getDeviceState: lre,
    } = H();
  i0.exports = async (e, t) => {
    let r = e.user,
      [s, a, o, n, i, c, d, u, p, l, f] = await Promise.all([
        Un("system.info"),
        Un("apps.getNormalized", e.user),
        nre(),
        ire(),
        cre(),
        ure(),
        Un("system.getFeaturesToExpose"),
        Un("uum.isSingleUser"),
        Un("uum.isSsoEnabled"),
        dre(),
        lre(),
      ]),
      m = ore(s, r);
    (e.body = e.user
      ? B(
          v(
            {
              apps: a,
              settings: o,
              firmware: n,
              unadoptedUnifiOSDevices: i,
              features: d,
              devices: c,
            },
            m
          ),
          { directConnectDomain: l, deviceState: f }
        )
      : B(v({}, m), {
          isSingleUser: u,
          isSsoEnabled: p,
          directConnectDomain: l,
          deviceState: f,
        })),
      (e.status = 200),
      await t();
  };
});
var nf = w((gCe, u0) => {
  var { publish: pre } = require("handoff");
  u0.exports = async (e, t) => {
    if (e.webrtc)
      return (
        e.logger.warn(
          "Cannot unregister console from cloud via remote connection"
        ),
        (e.status = 403),
        (e.body = {}),
        t()
      );
    await pre("cloud.unregister"), (e.status = 204), await t();
  };
});
var p0 = w((ECe, l0) => {
  var mre = require("ajv"),
    fre = new mre({ useDefaults: !0 }),
    { publish: hre } = require("handoff"),
    yre = {
      type: "object",
      properties: {
        type: { type: "string" },
        errorLog: { type: "string", default: "" },
        step: { type: "string", default: "" },
      },
      required: ["type"],
    },
    d0 = fre.compile(yre);
  l0.exports = async (e, t) => {
    if (!d0(e.request.body))
      return (e.status = 400), (e.body = { validationErrors: d0.errors }), t();
    let r = e.req.headers["user-agent"],
      { type: s, errorLog: a, step: o } = e.request.body;
    return (
      await hre("system.setup.error", {
        errorType: s,
        errorLog: a || s,
        data: { userAgent: r, step: o },
      }),
      (e.status = 204),
      t()
    );
  };
});
var f0 = w((SCe, m0) => {
  var { publish: wre } = require("handoff");
  m0.exports = async (e, t) => {
    try {
      await wre("system.tempDisableFirewall"), (e.status = 204);
    } catch (r) {
      e.status = 500;
    }
    await t();
  };
});
var eu = w((bCe, h0) => {
  h0.exports = {
    macOverrideSchema: {
      mac_override: {
        type: "string",
        regex:
          "/^((([0-9A-F]{2}:){5})|(([0-9A-F]{2}-){5})|([0-9A-F]{10}))([0-9A-F]{2})$/i",
      },
      mac_override_enabled: { type: "boolean" },
    },
    portOverridesSchema: {
      port_overrides: {
        type: "array",
        items: {
          type: "object",
          properties: {
            port_idx: { type: "number" },
            autoneg: { type: "boolean" },
            speed: { type: "number" },
            full_duplex: { type: "boolean" },
          },
          required: ["port_idx", "autoneg"],
        },
      },
    },
  };
});
var g0 = w((TCe, w0) => {
  Qr();
  var gre = require("ajv"),
    { publish: Ere } = require("handoff"),
    { macOverrideSchema: Sre, portOverridesSchema: bre } = eu(),
    _re = new gre({ useDefaults: !0, removeAdditional: "all" }),
    Tre = {
      type: "object",
      properties: v(
        v(
          {
            vlanId: { type: "number" },
            qostag: { type: "number" },
            dns1: { type: "string" },
            dns2: { type: "string" },
            wan: { type: "string" },
            options: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  optionNumber: { type: "number" },
                  value: { type: "string" },
                },
              },
            },
          },
          Sre
        ),
        bre
      ),
    },
    y0 = _re.compile(Tre);
  w0.exports = async (e, t) => {
    let r = e.request.body;
    if (!y0(r))
      return (e.status = 400), (e.body = { validationErrors: y0.errors }), t();
    try {
      let s = r.wan || "WAN",
        a = {
          type: "dhcp",
          dns1: r.dns1,
          dns2: r.dns2,
          vlan_enabled: r.vlanId !== void 0,
          vlan: r.vlanId,
          egress_qos: r.qostag,
          wanNetworkGroup: s,
          dhcp_options: r.options,
          mac_override_enabled: r.mac_override_enabled,
          mac_override: r.mac_override && gt(r.mac_override),
          port_overrides: r.port_overrides,
        };
      await Ere("system.configWan", a), (e.status = 204);
    } catch (s) {
      e.logger.error("Setting DHCP failed: ", s), (e.status = 500);
    }
    await t();
  };
});
var b0 = w((ACe, S0) => {
  Qr();
  var Ire = require("ajv"),
    { publish: Are } = require("handoff"),
    { macOverrideSchema: vre, portOverridesSchema: Cre } = eu(),
    Dre = new Ire({ useDefaults: !0, removeAdditional: "all" }),
    Nre = {
      type: "object",
      properties: v(
        v(
          {
            username: { type: "string" },
            password: { type: "string" },
            dns1: { type: "string" },
            dns2: { type: "string" },
            wan: { type: "string" },
            vlanId: { type: "number" },
            qostag: { type: "number" },
          },
          vre
        ),
        Cre
      ),
      required: ["username", "password"],
    },
    E0 = Dre.compile(Nre);
  S0.exports = async (e, t) => {
    let r = e.request.body;
    if (!E0(r))
      return (e.status = 400), (e.body = { validationErrors: E0.errors }), t();
    try {
      let s = r.wan || "WAN",
        a = {
          type: "pppoe",
          username: r.username,
          x_password: r.password,
          dns1: r.dns1,
          dns2: r.dns2,
          vlan: r.vlanId,
          vlan_enabled: r.vlanId !== void 0,
          egress_qos: r.qostag,
          wanNetworkGroup: s,
          mac_override_enabled: r.mac_override_enabled,
          mac_override: r.mac_override && gt(r.mac_override),
          port_overrides: r.port_overrides,
        };
      await Are("system.configWan", a), (e.status = 204);
    } catch (s) {
      e.status = 500;
    }
    await t();
  };
});
var I0 = w((CCe, T0) => {
  Qr();
  var Rre = require("ajv"),
    { publish: Pre } = require("handoff"),
    { macOverrideSchema: Ure, portOverridesSchema: kre } = eu(),
    Ore = new Rre({ useDefaults: !0, removeAdditional: "all" }),
    qre = {
      type: "object",
      properties: v(
        v(
          {
            ip_address: { type: "string" },
            gateway: { type: "string" },
            netmask: { type: "string" },
            dns1: { type: "string" },
            dns2: { type: "string" },
            wan: { type: "string" },
            vlanId: { type: "number" },
            qostag: { type: "number" },
          },
          Ure
        ),
        kre
      ),
      required: ["ip_address", "gateway", "netmask"],
    },
    _0 = Ore.compile(qre);
  T0.exports = async (e, t) => {
    let r = e.request.body;
    if (!_0(r))
      return (e.status = 400), (e.body = { validationErrors: _0.errors }), t();
    try {
      let s = r.wan || "WAN",
        a = {
          type: "static",
          ip: r.ip_address,
          gateway: r.gateway,
          netmask: r.netmask,
          dns1: r.dns1,
          dns2: r.dns2,
          wanNetworkGroup: s,
          mac_override_enabled: r.mac_override_enabled,
          mac_override: r.mac_override && gt(r.mac_override),
          vlan_enabled: r.vlanId !== void 0,
          vlan: r.vlanId,
          egress_qos: r.qostag,
          port_overrides: r.port_overrides,
        };
      await Pre("system.configWan", a), (e.status = 204);
    } catch (s) {
      e.status = 500;
    }
    await t();
  };
});
var C0 = w((DCe, v0) => {
  var { publish: A0 } = require("handoff");
  v0.exports = async (e, t) => {
    try {
      await A0("speedTest.start");
      let r = await A0("speedTest.status");
      (e.body = r), (e.status = 200);
    } catch (r) {
      ["ENETUNREACH", "ENOTFOUND"].includes(r.code)
        ? (e.status = 503)
        : (e.status = 500),
        (e.body = { errors: [r.message] });
    }
  };
});
var N0 = w((NCe, D0) => {
  var { publish: Fre } = require("handoff");
  D0.exports = async (e, t) => {
    try {
      await Fre("speedTest.stop"), (e.status = 204);
    } catch (r) {
      (e.status = 500), (e.body = { errors: [r.message] });
    }
  };
});
var P0 = w((RCe, R0) => {
  var { publish: Lre } = require("handoff"),
    { getSpeedTestResult: Mre } = H();
  R0.exports = async (e, t) => {
    try {
      let r = (await Lre("speedTest.status")) || (await Mre());
      e.body = r;
    } catch (r) {
      (e.status = 500), (e.body = { errors: [r.message] });
    }
    return t();
  };
});
var k0 = w((PCe, U0) => {
  var xre = Yo();
  U0.exports = async (e, t) => {
    try {
      e.body = await xre();
    } catch (r) {
      (e.status = 500),
        (e.body = r.message),
        e.logger.error("Failed to get GEO IP:", r);
    }
    await t();
  };
});
var F0 = w((UCe, q0) => {
  var $re = require("ajv"),
    Bre = nl(),
    Vre = {
      type: "object",
      properties: {
        lat: { type: "number" },
        long: { type: "number" },
        token: { type: "string" },
      },
      required: ["lat", "long", "token"],
    },
    jre = new $re({ useDefaults: !0, removeAdditional: "all" }),
    O0 = jre.compile(Vre);
  q0.exports = async (e, t) => {
    let r = e.request.body;
    if (!O0(r))
      return (e.status = 400), (e.body = { validationErrors: O0.errors }), t();
    try {
      let { lat: s, long: a, token: o } = r;
      e.body = await Bre({ lat: s, long: a, token: o });
    } catch (s) {
      e.logger.error(s),
        (e.status = s.status || 500),
        (e.body = { errors: [s.message] });
    }
    await t();
  };
});
var x0 = w((kCe, M0) => {
  var { publish: Gre } = require("handoff"),
    Hre = require("ajv"),
    { v4: Wre } = require("uuid"),
    Kre = new Hre({ useDefaults: !0 }),
    Yre = {
      type: "object",
      properties: {
        sendTrace: { type: "boolean" },
        type: { type: "string" },
        setupId: { type: "string" },
        setup_device_id: { type: "string" },
        internetRequired: { type: "boolean" },
      },
    },
    zre = (e) => {
      if (e) {
        let t = e.toLowerCase();
        if (t.includes("ipad") || t.includes("iphone")) return "ios";
        if (t.includes("android")) return "android";
      }
      return "webui";
    },
    L0 = Kre.compile(Yre);
  M0.exports = async (e, t) => {
    let r = e.request.body;
    if (!L0(r))
      return (e.status = 400), (e.body = { validationErrors: L0.errors }), t();
    let { sendTrace: s, type: a, internetRequired: o = !0 } = r,
      n = r.setupId ? r.setupId : Wre(),
      i = r.setup_device_id;
    e.body = { setupId: n };
    let c = e.req.headers["user-agent"];
    return (
      await Gre("system.setup.start", {
        setupId: n,
        setupDeviceId: i,
        internetRequired: o,
        type: a || zre(c),
        userAgent: c,
        sendTrace: !!s,
      }),
      t()
    );
  };
});
var V0 = w((OCe, B0) => {
  var Jre = require("ajv"),
    Xre = new Jre({ useDefaults: !0 }),
    { publish: Qre } = require("handoff"),
    Zre = {
      type: "object",
      properties: {
        setupId: { type: "string" },
        errorType: { type: "string" },
        errorLog: { type: "string" },
      },
      required: ["setupId"],
    },
    $0 = Xre.compile(Zre);
  B0.exports = async (e, t) => {
    let r = e.request.body;
    if (!$0(r))
      return (e.status = 400), (e.body = { validationErrors: $0.errors }), t();
    let s = e.req.headers["user-agent"];
    return (
      await Qre("system.setup.error", {
        errorType: r.errorType,
        errorLog: r.errorLog,
        data: { userAgent: s },
      }),
      (e.status = 204),
      t()
    );
  };
});
var H0 = w((qCe, G0) => {
  var ese = require("ajv"),
    tse = new ese({ useDefaults: !0 }),
    { publish: rse } = require("handoff"),
    sse = { type: "object", properties: { setupId: { type: "string" } } },
    j0 = tse.compile(sse);
  G0.exports = async (e, t) => {
    let r = e.request.body;
    if (!j0(r))
      return (e.status = 400), (e.body = { validationErrors: j0.errors }), t();
    let s = r.setupId;
    return await rse("system.setup.cancel", s), (e.status = 204), t();
  };
});
var K0 = w((FCe, W0) => {
  var { publish: ase } = require("handoff"),
    { SET_INTERNET_REQUIRED: ose } = Z();
  W0.exports = async (e, t) => {
    try {
      await ase("redux.dispatch", ose, !1), (e.status = 204);
    } catch (r) {
      (e.status = 500), e.logger.error(r), (e.body = { errors: [r.message] });
    }
    return t();
  };
});
var z0 = w((LCe, Y0) => {
  var { publish: nse } = require("handoff"),
    { SET_INTERNET_REQUIRED: ise } = Z();
  Y0.exports = async (e, t) => {
    try {
      await nse("redux.dispatch", ise, !0), (e.status = 204);
    } catch (r) {
      (e.status = 500), e.logger.error(r), (e.body = { errors: [r.message] });
    }
    return t();
  };
});
var cf = w((MCe, J0) => {
  J0.exports =
    (e) =>
    ({ getState: t }) =>
    (r) =>
    (s) => {
      let a = t(),
        o = r(s),
        n = t();
      return (
        e.debug()
          ? e.debug("action", { action: s, previousState: a, nextState: n })
          : e.verbose("action", s.type || s),
        o
      );
    };
});
var Q0 = w(($Ce, X0) => {
  Zo();
  var { publish: kn } = require("handoff"),
    cse = require("bluebird"),
    { SETUP_COMPLETED: use } = Z(),
    { setDeviceState: dse, deviceStates: lse } = Ot(),
    {
      getSsoIdFromRestore: pse,
      getName: mse,
      getTimezone: fse,
      getLocation: hse,
      getSettings: yse,
    } = H(),
    On = cf();
  X0.exports = async (e, t) => {
    try {
      let r = await kn("uum.getUserBySsoId", await pse());
      r && ((e.body = r), (e.user = r), (e.jwt.userId = r.id));
      let s = mse(),
        a = fse(),
        o = hse(),
        [n = null, i = null, c = null, { mac: d = null }, u = null] =
          await cse.all([
            Rs(e.config, e.logger)
              .getHostname()
              .catch((l) => On.error(l)),
            kn("uum.getOwner").catch((l) => On.error(l)),
            kn("system.setup.getSetupDeviceId").catch((l) => On.error(l)),
            kn("system.hardware").catch((l) => On.error(l)),
            yse().catch((l) => On.error(l)),
          ]),
        p = {
          name: s,
          hostname: n,
          timezone: a,
          location: o,
          owner: i,
          cloudEnv: e.config.cloudEnv,
          mac: d,
          ssoLoginEnabled: !0,
          cloudAccessEnabled: !0,
          setup_device_id: c,
          anonymous_device_id: u?.anonymous_device_id,
        };
      await kn("redux.dispatch", use, p),
        await dse(lse.SETUP),
        (e.status = 200);
    } catch (r) {
      (e.status = 500), e.logger.error(r), (e.body = { errors: [r.message] });
    }
    await t();
  };
});
var eO = w((BCe, Z0) => {
  var { fetch: wse } = ie(),
    gse = "https://account-cdn.svc.ui.com/";
  Z0.exports = async (e, t) => {
    let r = e.request.query.uuid;
    if (!r) return (e.status = 400), (e.body = "Invalid uuid"), t();
    let s = `${gse}${r}`;
    try {
      let a = await wse(s);
      a.status === 200
        ? (e.body = a.body)
        : ((e.status = 400), (e.body = "Invalid uuid"));
    } catch (a) {
      (e.status = a.status || 500), (e.body = { errors: [a.message] });
    }
    await t();
  };
});
var sO = w((VCe, rO) => {
  var tO = g(require("handoff")),
    Ese = async (e, t) => {
      let { mac: r } = e.request.body;
      try {
        await (0, tO.publish)("stackable.updateUnstackedConsole", r),
          (e.status = 204);
      } catch (s) {
        e.logger.error(`Failed to update unstacked console with mac="${r}"`, s),
          (e.status = 500);
      }
      await t();
    };
  rO.exports = Ese;
});
var oO = w((jCe, aO) => {
  var { publish: Sse } = require("handoff");
  aO.exports = async (e, t) => {
    try {
      await Sse("stackable.adoptAsSecondary", e.request.body), (e.status = 204);
    } catch (r) {
      e.logger.error("Failed to handle adoption request", r),
        (e.status = r.status || 500),
        (e.body = { errors: [r.message] });
    }
    await t();
  };
});
var iO = w((GCe, nO) => {
  var { publish: bse } = require("handoff");
  nO.exports = async (e, t) => {
    let { mac: r, id: s } = e.params;
    try {
      await bse("stackable.eraseDiskOnSecondary", r, s), (e.status = 204);
    } catch (a) {
      e.logger.error(
        `Failed to erase the disk with id="${s}" on the secondary console with mac="${r}"`,
        a
      ),
        (e.status = 500);
    }
    await t();
  };
});
var uf = w((HCe, cO) => {
  cO.exports = {
    type: "object",
    properties: {
      lat: { type: "number" },
      long: { type: "number" },
      radius: { type: "number" },
      text: { type: "string" },
    },
    required: ["lat", "long", "radius"],
  };
});
var dO = w((KCe, uO) => {
  Jo();
  var _se = require("ajv"),
    Tse = new _se({ allErrors: !0, useDefaults: !0, allowUnionTypes: !0 }),
    Ise = uf(),
    Ase = Qc(),
    vse = {
      type: "object",
      properties: {
        uuid: { type: "string" },
        ssoAuth: {
          type: ["object", "string"],
          properties: {
            name: { type: "string" },
            value: { type: "string" },
            path: { type: "string" },
            domain: { type: "string" },
            expires: { type: "string" },
            secure: { type: "boolean" },
            httpOnly: { type: "boolean" },
          },
          required: ["name", "value", "expires"],
        },
        first_name: { type: "string" },
        last_name: { type: "string" },
        email: { type: "string" },
        subnetCidr: { type: "string" },
      },
      required: ["uuid", "ssoAuth", "email"],
    },
    Cse = {
      type: "object",
      properties: {
        ssid: { type: "string" },
        password: { type: "string" },
        splitNetworks: { type: "boolean" },
      },
    },
    Dse = {
      type: "object",
      properties: {
        mode: { type: "string" },
        vlan_id: { type: "number" },
        vlan_priority: { type: "number" },
        dnsCount: { type: "number" },
      },
    },
    Nse = async () => ({
      type: "object",
      properties: {
        username: { type: "string" },
        password: { type: "string" },
        token: { type: "string" },
        name: { type: "string" },
        timezone: { enum: Array.from(await Zr()) },
        location: Ise,
        schedule: B(v({}, Ase), {
          default: {
            frequency: "weekly",
            day: 0,
            hour: 0,
            includeFirmware: !0,
            includeControllers: !0,
          },
        }),
        ssoUser: vse,
        country: { type: "number" },
        wifi: Cse,
        sendDiagnostics: { enum: [!0, !1, "none", "anonymous", "full"] },
        optimizeNetwork: { type: "boolean" },
        newAccount: { type: "boolean" },
        setupId: { type: "string" },
        isp: {
          type: "object",
          properties: {
            download: { type: "number" },
            upload: { type: "number" },
            downloadResults: { type: "number" },
            uploadResults: { type: "number" },
            pingResult: { type: "number" },
            speedTestProvider: { type: "string" },
          },
          required: ["upload", "download"],
        },
        advancedSetup: Dse,
        updateFirmware: { type: "boolean", default: !0 },
      },
      required: [
        "name",
        "timezone",
        ...(process.env.IS_CLOUD_INSTANCE ? [] : ["password"]),
      ],
      anyOf: [{ required: ["username"] }, { required: ["ssoUser"] }],
    });
  uO.exports = Nse().then((e) => Tse.compile(e));
});
var mO = w((YCe, pO) => {
  var { publish: to } = require("handoff"),
    Rse = require("ip"),
    { ValidationError: lO, errorCodes: Pse } = (se(), me),
    df = dO();
  pO.exports = async (e, t) => {
    if ((await to("system.info")).isSetup)
      return (
        (e.status = 401),
        (e.body = { errors: "Device is already setup." }),
        await to("system.setup.error", {
          errorType: "InvalidConfig",
          errorLog: "Already Setup",
        }),
        t()
      );
    let s = e.request.body;
    if (
      (!s.name && s.hostname && ((s.name = s.hostname), delete s.hostname),
      !(await df)(s))
    )
      throw (
        (await to("system.setup.error", {
          errorType: "Invalid setup payload",
          errorLog: `${df.errors}`,
        }),
        new lO(df))
      );
    let { subnetCidr: a } = s;
    if (a)
      try {
        Rse.cidr(a);
      } catch {
        let o = "Invalid subnetCidr";
        throw (
          (await to("system.setup.error", {
            errorType: "Invalid setup payload",
            errorLog: o,
          }),
          new lO(Pse.VALIDATION_ERROR({ message: o })))
        );
      }
    s.ssoUser &&
      typeof s.ssoUser.ssoAuth == "string" &&
      (s.ssoUser.ssoAuth = { value: s.ssoUser.ssoAuth }),
      typeof s.sendDiagnostics == "boolean" &&
        (s.sendDiagnostics = s.sendDiagnostics ? "full" : "anonymous");
    try {
      s.userAgent = e.req.headers["user-agent"];
      let o = await to("system.setup", s);
      if (!o) throw new Error("UUM failed to return owner user");
      (e.body = o), (e.jwt.userId = o.id), (e.user = o), await t();
    } catch (o) {
      o.message.includes("2fa token") && (e.status = 499),
        o.message.includes("ssoAuthError")
          ? (e.status = 401)
          : (e.status = 500),
        e.logger.error(o),
        (e.body = { errors: [o.message] }),
        await to("system.setup.error", {
          errorType: "Server Error",
          errorLog: o.message,
          data: { userAgent: s.userAgent },
        }),
        await t();
    }
  };
});
var yO = w((nDe, hO) => {
  var fO = g(require("lodash"));
  WR();
  zR();
  QR();
  eP();
  sP();
  nP();
  lP();
  yP();
  bP();
  TP();
  vP();
  var Use = require("koa-compose"),
    ls = require("koa-router"),
    kse = require("koa-mount"),
    Ose = require("koa-json"),
    qse = require("koa-bodyparser"),
    { getIsSetup: tu, getFeatures: Fse } = H(),
    { UserPermission: xe } = (Re(), Hs),
    { AppError: Lse, errorCodes: Mse } = (se(), me),
    Se = new ls(),
    Kt = new ls(),
    Yt = new ls(),
    Ae = new ls(),
    qn = new ls(),
    ru = new ls(),
    Fn = new ls(),
    su = new ls(),
    au = new ls(),
    At = (e) => async (t, r) => {
      let s = await Fse();
      if ((0, fO.get)(s, e)) return r();
      t.status = 404;
    },
    $e = (e) => (t, r) => {
      if (!t.user.ucorePermission[e])
        throw new Lse(Mse.ACTION_FORBIDDEN({ message: "No permission" }));
      return r();
    };
  au.use((e, t) => {
    let r = e.req.socket;
    if (r.remoteAddress === r.localAddress) return t();
    e.status = 401;
  });
  Se.use(async (e, t) => {
    if (e.user) return t();
    e.status = 401;
  });
  su.use(async (e, t) => {
    if (e.user || !(await tu())) return t();
    e.status = 401;
  });
  qn.use((e, t) => {
    if (e.user && e.user.isOwner) return t();
    e.status = 401;
  });
  Kt.use(async (e, t) => {
    let { user: r } = e;
    if (r && r.isSuperAdmin) return t();
    e.status = r ? 403 : 401;
  });
  Ae.use(async (e, t) => {
    if (!(await tu())) return t();
    e.status = 404;
  });
  ru.use(async (e, t) => {
    if ((e.user && e.user.isOwner) || !(await tu())) return t();
    e.status = 401;
  });
  Fn.use(async (e, t) => {
    let r = await tu(),
      { user: s } = e;
    if (!r || (s && s.isSuperAdmin)) return t();
    e.status = s ? 403 : 401;
  });
  Se.post("/auth/logout", DP());
  Se.post("/cloud/register", $e(xe.EDIT_REMOTE_ACCESS), UP());
  ru.post("/backup/upload", OP());
  Se.get("/backup/download", At("cloudBackup"), $e(xe.EDIT_BACKUPS), FP());
  qn.get("/backup/download/ubios-migration", xP());
  Se.post(
    "/backup/settings/restore/:id",
    At("cloudBackup"),
    $e(xe.EDIT_BACKUPS),
    VP()
  );
  Ae.post("/backup/setup/restore/:id", At("cloudBackup"), HP());
  Ae.get("/backup/setup/restore/progress", At("cloudBackup"), KP());
  Ae.post("/cloud/backup/setup/restore/:id", At("cloudBackup"), JP());
  Se.post(
    "/cloud/backup/settings/restore/:id",
    At("cloudBackup"),
    $e(xe.EDIT_BACKUPS),
    ZP()
  );
  Se.post("/cloud/backup", At("cloudBackup"), $e(xe.EDIT_BACKUPS), tU());
  Se.post(
    "/cloud/createEncryptionKey",
    At("cloudBackup"),
    $e(xe.EDIT_BACKUPS),
    aU()
  );
  Se.get(
    "/cloud/backup/settings/list",
    At("cloudBackup"),
    $e(xe.EDIT_BACKUPS),
    nU()
  );
  Ae.post("/cloud/backup/setup/list", At("cloudBackup"), cU());
  Ae.post("/cloud/warrantyList", At("cloudBackup"), dU());
  Ae.get("/cloud/uCareOwnerEmail", mU());
  Se.post("/controllers/:name/update", $e(xe.MANAGE_APPLICATIONS), wU());
  Se.post("/controllers/:name/:action", $e(xe.MANAGE_APPLICATIONS), SU());
  Se.post("/controllers/checkUpdates", $e(xe.MANAGE_APPLICATIONS), TU());
  Kt.post("/applications/:name/update", HR);
  Kt.get("/homeKit/setupData", At("homeKit"), YR);
  Kt.post("/homeKit/reset", At("homeKit"), XR);
  Fn.post("/firmware/update", AU());
  Fn.get("/firmware/update", CU());
  Se.get("/firmware/schedule", $e(xe.MANAGE_AUTO_UPDATE), NU());
  Se.post("/firmware/schedule", $e(xe.MANAGE_AUTO_UPDATE), OU());
  Se.delete("/firmware/schedule", $e(xe.MANAGE_AUTO_UPDATE), FU());
  Se.post("/autoUpdates/preferences", $e(xe.MANAGE_AUTO_UPDATE), xU());
  Se.get("/autoUpdates/prompt", $e(xe.MANAGE_AUTO_UPDATE), BU());
  Kt.post("/floorplans", YU());
  Kt.post("/floorplans/:id/calibration", XU());
  Kt.post("/floorplans/:id/device/:mac", ek());
  Se.get("/floorplans/:id", rk());
  Se.get("/notifications/totals", $e(xe.EDIT_NOTIFICATIONS), oP);
  Se.get("/notifications/settings", $e(xe.EDIT_NOTIFICATIONS), rP);
  Se.get("/notifications", $e(xe.EDIT_NOTIFICATIONS), Fm);
  Se.get("/notifications/:offset/:limit", $e(xe.EDIT_NOTIFICATIONS), Fm);
  Se.put("/notifications/settings", $e(xe.EDIT_NOTIFICATIONS), dP);
  Kt.post("/storage/:id/erase", At("storage.canFormat"), ak());
  Kt.post("/ustorage/nuke", At("storage.canFormat"), nk());
  Se.get("/support/generate", $e(xe.SUPPORT_FILE), ef());
  su.patch("/system", hk());
  Se.post("/system/reboot", $e(xe.RESTART_CONSOLE), wk());
  Se.post("/system/reset", $e(xe.FACTORY_RESET), of());
  Se.post("/system/poweroff", $e(xe.POWER_OFF_CONSOLE), Sk());
  Se.post("/system/ssh/setpassword", $e(xe.EDIT_SSH), Tk());
  Se.get("/tasks/:taskId", _P);
  Se.get("/users/self", Ak());
  Se.post("/users/owner/transfer", $e(xe.TRANSFER_OWNER), Dk());
  Se.get("/webrtc/config", Rk());
  Se.post("/webrtc/connect", Uk());
  Yt.get("/apps", Ok());
  Yt.post("/auth/login", Fk());
  Yt.post("/auth/login/poll", xk());
  Yt.post("/auth/nca", Bk());
  Se.get("/auth/validate-sso/:ssoId", jk());
  Yt.post("/oauth/token", Hk());
  Yt.post("/sso/login", Yk());
  Yt.post("/sso/login/mfa/poll", Xk());
  Yt.post("/sso/login/mfa/send", e0());
  Yt.post("/sso/register", s0(), n0());
  Yt.get("/system", c0());
  process.env.IS_CLOUD_INSTANCE
    ? au.post("/cloud/unregister", nf())
    : (Ae.post("/verify/email", hP),
      Ae.get("/system/previous-subnet", SP),
      qn.post("/cloud/unregister", nf()),
      Ae.post("/setup/trace/error", p0()),
      Ae.post("/system/tmpDisableFirewall", f0()),
      Ae.post("/system/dhcp", g0()),
      Ae.post("/system/pppoe", b0()),
      Ae.post("/system/static", I0()),
      Ae.post("/speed", C0()),
      Ae.delete("/speed", N0()),
      Ae.get("/speed", P0()),
      Ae.get("/location/by-ip", k0()),
      Ae.post("/location/reverse", F0()),
      Ae.post("/setup/reset", of()),
      Ae.post("/setup/start", x0()),
      Ae.post("/setup/error", V0()),
      Ae.post("/setup/cancel", H0()),
      Ae.post("/setup/offline", K0()),
      Ae.delete("/setup/offline", z0()),
      Ae.post("/setup/backup", At("cloudBackup"), Q0()),
      Ae.get("/avatar", eO()),
      Ae.get("/setup/support/generate", ef()),
      Kt.post("/stackable/update-unstacked-console", sO()),
      Ae.post("/stackable/adopt", oO()),
      Kt.post("/stackable/:mac/storage/:id/erase", iO()),
      Ae.get("/users/by-ubic-token", AP));
  Yt.post("/setup", mO());
  hO.exports = (e) => {
    let t = [
      Ose(),
      qse(),
      (r, s) => ((r._config = e), s()),
      Yt.routes(),
      Yt.allowedMethods(),
      Se.routes(),
      Se.allowedMethods(),
      Kt.routes(),
      Kt.allowedMethods(),
      qn.routes(),
      qn.allowedMethods(),
      Ae.routes(),
      Ae.allowedMethods(),
      su.routes(),
      su.allowedMethods(),
      ru.routes(),
      ru.allowedMethods(),
      Fn.routes(),
      Fn.allowedMethods(),
      au.routes(),
      au.allowedMethods(),
    ];
    return kse("/api", Use(t));
  };
});
var gO = w((iDe, wO) => {
  var xse = require("ws");
  wO.exports = async (e, t) => {
    let r = e.logger,
      s = e.websocket,
      a = e.config.controllers.protect.pion.port,
      o = new xse(`ws://localhost:${a}/websocket`);
    r.info(`Started pion proxy on port ${a}`),
      s.on("message", (n) => {
        o.send(n);
      }),
      s.on("error", (n) => {
        r.error("Pion pseudoWs error", n);
      }),
      s.on("close", () => {
        o.close();
      }),
      o.on("message", (n) => {
        s.send(n);
      }),
      o.on("error", (n) => {
        r.error("Pion pionWs error", n);
      }),
      o.on("close", () => {
        s.terminate();
      });
  };
});
var SO = w((cDe, EO) => {
  EO.exports = async (e, t) => {
    let r = 1e4,
      s = e.websocket;
    s.send(1);
    let a = setInterval(() => s.send(1), r);
    s.on("close", () => clearInterval(a));
  };
});
var TO = w((uDe, _O) => {
  var { publish: Ln } = require("handoff"),
    {
      getSystem: $se,
      getSettings: bO,
      getFirmware: Bse,
      getUnadoptedUnifiOSDevices: Vse,
      getBackup: jse,
      getDeviceTopology: Gse,
      getDeviceList: Hse,
      getUserData: Wse,
      getSecondaryConsoles: Kse,
    } = H(),
    Yse = async (e, t) => {
      let [r, s, a, o, n, i, c, d, u, p, l] = await Promise.all([
          Ln("apps.getNormalized", t),
          bO(),
          $se(),
          Bse(),
          Vse(),
          jse(),
          Gse(),
          Hse(),
          Ln("system.getFeaturesToExpose"),
          Wse(),
          Kse(),
        ]),
        f;
      if (t) {
        let m = t.sso_uuid || t.uid_sso_id || t.id;
        f = p[m];
      }
      e.send(
        JSON.stringify({
          type: "SYSTEM",
          apps: r,
          settings: s,
          system: a,
          firmware: o,
          unadoptedUnifiOSDevices: n,
          features: u,
          topology: c,
          devices: d,
          userData: f,
          secondaryConsoles: l,
        })
      ),
        e.send(
          JSON.stringify({ type: "UPDATE_DEVICE_RESTORE_PROGRESS", backup: i })
        );
    };
  _O.exports = async (e, t) => {
    let r = e.websocket;
    Yse(r, e.user).catch((s) => {
      e.logger.error(s), r.close();
    }),
      Ln("redux.wsUpdates.open", r, e.user),
      r.on("close", async () => {
        r.removeAllListeners(), Ln("redux.wsUpdates.close", r);
        let { setupId: s, isSetup: a } = await bO();
        !a && s && Ln("system.setup.cancel", s);
      });
  };
});
var AO = w((dDe, IO) => {
  var { publish: Mn } = require("handoff");
  IO.exports = async (e, t) => {
    let r = e.websocket;
    await Mn("redux.wsUpdates.speedTest.open", r, e.user),
      await Mn("speedTest.start"),
      r.on("close", async () => {
        (await Mn("http.getWsServer")).clients.size ||
          (await Mn("speedTest.stop"),
          await Mn("redux.wsUpdates.speedTest.close", r));
      });
  };
});
var CO = w((lDe, vO) => {
  var zse = require("ajv"),
    Jse = new zse({ useDefaults: !0 }),
    { publish: Xse } = require("handoff"),
    { ValidationError: Qse, errorCodes: Zse } = (se(), me),
    eae = {
      type: "object",
      properties: {
        step: { type: "string" },
        start_time: { type: "number" },
        step_duration: { type: "number" },
        setup_data: { type: "object" },
      },
      required: ["step"],
    },
    tae = Jse.compile(eae);
  vO.exports = async (e, t) => {
    if (!tae(e))
      throw new Qse(Zse.VALIDATION_ERROR("Setup WS received unkown payload"));
    let { start_time: r, step: s, step_duration: a, setup_data: o } = e;
    await Xse("system.setup.traceStep", s, a, o, {
      userAgent: t,
      timestamp: r,
    });
  };
});
var NO = w((pDe, DO) => {
  var rae = require("ajv"),
    sae = new rae({ useDefaults: !0 }),
    { publish: aae } = require("handoff"),
    { ValidationError: oae, errorCodes: nae } = (se(), me),
    iae = {
      type: "object",
      properties: {
        type: { type: "string" },
        errorLog: { type: "string", default: "" },
        step: { type: "string", default: "" },
      },
      required: ["type"],
    },
    cae = sae.compile(iae);
  DO.exports = async (e, t) => {
    if (!cae(e))
      throw new oae(nae.VALIDATION_ERROR("Setup WS received unkown payload"));
    let { type: r, errorLog: s, step: a } = e;
    await aae("system.setup.error", {
      errorType: r,
      errorLog: s || r,
      data: { userAgent: t, step: a },
    });
  };
});
var PO = w((mDe, RO) => {
  var { ValidationError: uae, errorCodes: dae } = (se(), me),
    lae = CO(),
    pae = NO();
  RO.exports = async (e, t) => {
    let r = e.websocket,
      s = e.req.headers["user-agent"];
    r.onmessage = async ({ data: a }) => {
      try {
        let { action: o, payload: n } = JSON.parse(a);
        switch (o) {
          case "trace/step":
            await lae(n, s);
            break;
          case "trace/error":
            await pae(n, s);
            break;
          default:
            throw new uae(
              dae.VALIDATION_ERROR("Setup WS received unkown action")
            );
        }
      } catch (o) {
        e.logger.warn(`Received setup WS message ${a} caused error`, o);
      }
    };
  };
});
var OO = w((fDe, kO) => {
  var mae = require("koa-compose"),
    ou = require("koa-router"),
    fae = require("koa-mount"),
    { getIsSetup: UO } = H();
  kO.exports = (e) => {
    let t = new ou(),
      r = new ou(),
      s = new ou(),
      a = new ou();
    return (
      t.use(async (o, n) => {
        if (o.user) return n();
        let i = o.websocket;
        i.send(JSON.stringify({ type: "ERROR", message: "Not authorized" })),
          i.close();
      }),
      r.use(async (o, n) => {
        let i = await UO();
        if (o.user || !i) return n();
        let c = o.websocket;
        c.send(JSON.stringify({ type: "ERROR", message: "Not authorized" })),
          c.close();
      }),
      a.use(async (o, n) => {
        if (!(await UO())) return n();
        let c = o.websocket;
        c.send(JSON.stringify({ type: "ERROR", message: "Not available" })),
          c.close();
      }),
      t.get("/pion", gO()),
      s.get("/heartbeat", SO()),
      r.get("/system", TO()),
      a.get("/speedtest", AO()),
      a.get("/setup", PO()),
      fae("/api/ws", mae([t.routes(), s.routes(), r.routes(), a.routes()]))
    );
  };
});
var LO = w((hDe, FO) => {
  var { publish: lf } = require("handoff"),
    hae = "TOKEN",
    qO = (e) => `${hae}${e ? "" : "_http"}`;
  FO.exports = {
    decode: async (e, t) => {
      let r = e.cookies.get(qO(e.secure));
      if (r)
        try {
          e.jwt = await lf("auth.jwt.decode", r);
        } catch (s) {
          e.logger.warn("Failed to decode JWT token:", s.message), (e.jwt = {});
        }
      else e.jwt = {};
      return t();
    },
    encode: async (e, t) => {
      if (e.guestMeta) return t();
      if (!e.res || !e.res.headerSent) {
        let r = await lf("auth.jwt.encode", e.jwt);
        (e.token = r), (e._cookies[qO(e.secure)] = r);
      }
      return t();
    },
    isBlocked: async (e, t) => (
      (await lf("auth.jwt.isBlocked", e.jwt)) &&
        (e.logger.warn("Session expired as user already logged out"),
        (e.jwt = {})),
      t()
    ),
  };
});
var $O = w((yDe, xO) => {
  var { v4: yae } = require("uuid"),
    MO = "X-CSRF-Token",
    wae = "Invalid CSRF Token",
    gae = 403,
    Eae = ["GET", "HEAD", "OPTIONS"],
    Sae = ["/api/auth/nca"];
  xO.exports = async (e, t) => {
    if (e.config.disableCsrf) return t();
    let r = e.req.socket;
    if (r.remoteAddress === r.localAddress || e.webrtc || e.mqtt) return t();
    let s = e.jwt.csrfToken,
      a = e.get(MO);
    if (
      (s || (s = a = e.jwt.csrfToken = yae()),
      s !== a && !Eae.includes(e.method) && !Sae.includes(e.path))
    ) {
      (e.status = gae), (e.body = { message: wae });
      return;
    }
    await t(), !e.headerSent && e.status < 400 && e.set(MO, s);
  };
});
var pf = w((wDe, BO) => {
  BO.exports = (e, t) => {
    Object.keys(e._cookies).forEach((r) => {
      let s = e._cookies[r];
      t.set(r, s, {
        httpOnly: !0,
        overwrite: !0,
        secure: e.protocol === "https",
        sameSite: "none",
      });
    });
  };
});
var jO = w((gDe, VO) => {
  var bae = pf();
  VO.exports = async (e, t) => {
    (e._cookies = []), await t();
    try {
      e.headerSent || bae(e, e.cookies);
    } catch (r) {
      return null;
    }
  };
});
var WO = w((EDe, HO) => {
  var { publish: GO } = require("handoff");
  HO.exports = async (e, t) => {
    let r = (e.user && e.user.id) || e.userId || (e.jwt && e.jwt.userId);
    if (r)
      try {
        let s = await GO("auth.getUser", r);
        if (
          !s ||
          (e.jwt.passwordRevision &&
            e.jwt.passwordRevision !== s.password_revision)
        )
          (e.user = null), (e.logUser = ""), (e.jwt = {});
        else {
          let a = await GO("uum.getUsers");
          (e.user = s),
            (e.logUser = a.length > 1 ? `[${s.full_name}]` : ""),
            (e.jwt.userId = r),
            (e.jwt.passwordRevision = s.password_revision);
        }
      } catch (s) {
        e.logger.warn(s.message);
      }
    await t();
  };
});
var YO = w((SDe, KO) => {
  var _ae = require("koa-compose"),
    Tae = require("koa-router"),
    Iae = require("empty-gif"),
    mf = new Tae();
  mf.get("/status-check", async (e, t) => {
    (e.type = "image/gif"), (e.body = Iae);
  });
  KO.exports = (e) => _ae([mf.routes(), mf.allowedMethods()]);
});
var JO = w((bDe, zO) => {
  zO.exports = (e) => async (t, r) => ((t.logger = e), r());
});
var ZO = w((_De, QO) => {
  var XO = (e, t = null) => {
    let r;
    e.webrtc ? (r = "[webrtc]") : e.mqtt ? (r = "[mqtt]") : (r = e.protocol);
    let s = (e.req && e.req.oldPath) || e.url,
      { logUser: a = "", status: o, method: n, responseTime: i } = e,
      c = `${r}${a} ${i}ms ${o} ${n} ${s}`;
    if (t) {
      e.logger.error(c, t), e.logger.debug(e.request.body);
      return;
    }
    o >= 500
      ? e.logger.error(c)
      : i > 1e3 || o >= 400
      ? e.logger.warn(c)
      : e.logger.info(c),
      e.logger.debug(e.request.body),
      e.logger.debug(e.response.body);
  };
  QO.exports = async (e, t) => {
    try {
      await t(), XO(e);
    } catch (r) {
      XO(e, r);
    }
  };
});
var tq = w((TDe, eq) => {
  var Aae = require("bluebird");
  eq.exports = async (e, t) => {
    let r = Date.now();
    return Aae.resolve(t()).finally(() => {
      let s = Date.now() - r;
      (e.responseTime = s), e.set("X-Response-Time", `${s}ms`);
    });
  };
});
var sq = w((IDe, rq) => {
  var vae = require("net");
  rq.exports = (e) => async (t, r, s) => {
    if (r.webrtc || r.mqtt) return s();
    let a = r.req.socket;
    if (a.remoteAddress === a.localAddress) return s();
    let { redirectHostname: o, enforceHttps: n } = e;
    if (!o && n && r.protocol === "https") return s();
    let i = t && !r.user && n ? "https" : r.protocol,
      c = e.ports[i],
      d = r.hostname;
    if (
      (!t &&
        o &&
        !vae.isIP(r.hostname) &&
        r.hostname !== "localhost" &&
        (d = o),
      i === r.protocol && d === r.hostname)
    )
      return s();
    r.redirect(`${i}://${d}${c !== 80 && c !== 443 ? `:${c}` : ""}`),
      (r.status = 302);
  };
});
var nu = w((ADe, aq) => {
  aq.exports = {
    USER_ID_HEADER: "X-UserId",
    TOKEN_HEADER: "X-Token",
    CSRF_HEADER: "X-CSRF-Token",
    PUBLIC_PATH_PREFIX: "public",
    CLIENT_PLATFORM_HEADER: "X-Client-Platform",
    HIGHT_WATER_MARK: 512 * 1024,
  };
});
var ff = w((vDe, nq) => {
  var Cae = require("http2-proxy"),
    Dae = require("http"),
    Nae = require("cookies"),
    { URL: Rae } = require("url"),
    Pae = ["x-powered-by"],
    {
      USER_ID_HEADER: Uae,
      TOKEN_HEADER: kae,
      PUBLIC_PATH_PREFIX: Oae,
      CSRF_HEADER: qae,
    } = nu(),
    Fae = pf(),
    oq = require("follow-redirects");
  oq.maxRedirects = 10;
  oq.maxBodyLength = 1024 * 1024 * 1024;
  nq.exports = (e, t, r) => {
    let s = (c) => async (d, u) => {
        let p = Dae.request(u),
          l = {
            "x-forwarded-for": d.socket.remoteAddress,
            "x-forwarded-port": d.socket.encrypted ? 443 : 80,
            "x-forwarded-proto": d.socket.encrypted ? "https" : "http",
          };
        Object.keys(l).forEach((m) => {
          let E = d.headers[m] || "";
          p.setHeader(m, `${E && `${E},`}${l[m]}`);
        });
        let f =
          d.headers["x-forwarded-host"] ||
          d.headers.host ||
          d.headers[":authority"];
        return (
          f && p.setHeader("x-forwarded-host", f),
          c.user && p.setHeader(Uae, c.user.id),
          c.token && p.setHeader(kae, c.token),
          (c._hasBody = d.readableLength > 0),
          p
        );
      },
      a = (c) => async (d, u, p) => {
        Object.keys(p.headers).forEach((l) => {
          Pae.includes(l) || u.setHeader(l, p.headers[l]);
        }),
          p.statusCode < 400 &&
            c.jwt.csrfToken &&
            u.setHeader(qae, c.jwt.csrfToken),
          c._cookies && Fae(c, new Nae(d, u)),
          (c.status = p.statusCode),
          p.pipe(u);
      },
      o = new RegExp(`^${e}/`),
      n = new RegExp(`^${e}/${Oae}/`),
      i = async (c, d) => {
        c.req.url = c.req.url.replace(o, "/");
        let u = c.req,
          p = c.res,
          l = new Rae(t);
        try {
          await Cae.web(u, p, {
            hostname: l.hostname,
            port: parseInt(l.port),
            protocol: l.protocol.replace(":", ""),
            path: `${l.pathname.length > 1 ? l.pathname : ""}${c.req.url}`,
            onReq: s(c),
            onRes: a(c),
          });
        } catch (f) {
          return r.error("Proxy error", f), d(f);
        }
      };
    return async (c, d) => {
      if (!c.path.match(o)) return d();
      if (!c.user && !c.guestMeta && !c.path.match(n)) {
        c.logger.warn(`Rejecting unauthenticated proxy request for ${c.url}`),
          (c.status = 401);
        return;
      }
      await i(c, d);
    };
  };
});
var lq = w((CDe, dq) => {
  var Lae = require("koa-mount"),
    iq = require("koa-compose"),
    Mae = require("koa-static"),
    { subscribe: xae, unsubscribe: $ae } = require("handoff"),
    cq = ff(),
    { getApps: uq } = H();
  dq.exports = (e, t, r) => {
    let s,
      a = (n) => {
        s = iq(
          n
            .filter((i) => !!i.uiDir || !!i.uiPath || !!i.uiProxy)
            .map((i) => {
              if (i.uiPath) {
                let { port: u, protocol: p, host: l } = i,
                  f = `${p}://${l}:${u}/${i.uiPath}`;
                return (
                  t.info(`Adding UI proxy: ${i.proxy.ui} > ${f}`),
                  cq(i.proxy.ui, f, t)
                );
              } else if (i.uiProxy)
                return (
                  t.info(`Adding UI proxy: ${i.proxy.ui} > ${i.uiProxy}`),
                  cq(i.proxy.ui, i.uiProxy, t)
                );
              let { uiDir: c, uiIndex: d } = i;
              return (
                t.info(`Adding UI proxy: ${i.proxy.ui} > ${c}`),
                Lae(
                  i.proxy.ui,
                  iq([
                    async (u, p) => {
                      let l = u.user || {};
                      if (
                        ((l && l.scopes) || []).includes(
                          `view:${i.type}:${i.name}`
                        )
                      )
                        return p();
                      u.status = 401;
                    },
                    Mae(c, { index: d }),
                  ])
                )
              );
            })
        );
      };
    uq().then((n) => a(n));
    let o = [xae("apps.changed", async () => a(await uq()))];
    return (
      r(async () => {
        o.forEach((n) => $ae(n));
      }),
      async (n, i) => (s ? s(n, i) : i())
    );
  };
});
var Eq = w((DDe, gq) => {
  var pq = g(require("lodash")),
    ps = require("ws"),
    { Duplex: Bae } = require("stream"),
    {
      USER_ID_HEADER: Vae,
      TOKEN_HEADER: jae,
      HIGHT_WATER_MARK: mq,
      CLIENT_PLATFORM_HEADER: fq,
    } = nu(),
    hq = (e) => {
      !e || e.readyState !== ps.OPEN || e.ping();
    },
    yq = (e) => {
      !e || e.readyState !== ps.OPEN || e.pong();
    },
    xn = (e, t, r) => {
      if (e && (e.readyState === ps.CONNECTING || e.readyState === ps.OPEN)) {
        let s = Hae(t) ? t : 4014;
        try {
          e.close(s, r);
        } catch {}
      }
    },
    wq = (e, t = "") => {
      let r = { highWaterMark: mq };
      if (
        (/^(webrtc-ws:\/)?\/proxy\/(protect|connect)\//.test(t)
          ? (r.objectMode = !1)
          : ((r.objectMode = !0),
            (r.decodeStrings = !1),
            (r.encoding = "utf8")),
        e instanceof ps)
      )
        return ps.createWebSocketStream(e, r);
      let s = new Bae(r);
      return (
        e.on("message", (a) => !s.destroyed && s.push(a)),
        e.once("error", (a) => !s.destroyed && s.destroy(a)),
        e.once("close", () => !s.destroyed && s.push(null)),
        (s._destroy = (a, o) => {
          if (e.readyState === ps.CLOSED) {
            o(a), s.emit("close");
            return;
          }
          e.close();
        }),
        (s._write = (a, o, n) => {
          e.readyState === ps.OPEN &&
            e
              .send(a)
              .then(() => {
                let i = () => {
                  if (e.bufferedAmount < mq) return n();
                  setTimeout(i, 50).unref();
                };
                i();
              })
              .catch(n);
        }),
        (s._read = () => {}),
        s
      );
    },
    Gae = (e, t) => {
      !e || (t && e.send(t));
    },
    Hae = (e) =>
      (e >= 1e3 && e <= 1013 && e !== 1004 && e !== 1005 && e !== 1006) ||
      (e >= 3e3 && e <= 4999);
  gq.exports = (e, t, r) => {
    let s,
      a,
      o = e.url || (e.request && e.request.url);
    r.logger.info(`proxying websocket: ${o} > ${t}`);
    let n = {};
    r.user && (n[Vae] = r.user.id), r.token && (n[jae] = r.token);
    let i = r.clientPlatform || (r.headers && r.headers[fq.toLowerCase()]);
    i && (n[fq] = i),
      (n["X-Forwarded-For"] = r.ip),
      (n["X-Forwarded-Proto"] = r.protocol),
      (n["X-Forwarded-Host"] = r.host);
    let c = new ps(t, { perMessageDeflate: !1, binary: !0, headers: n }),
      d = wq(c, o),
      u = wq(e, o);
    d.pipe(u), u.pipe(d);
    let p = (0, pq.once)(function (l, f = !1) {
      l && r.logger.error("Stream error:", l.message),
        f || (d.destroy(), u.destroy()),
        (d = null),
        (u = null);
    });
    d.on("error", (l) => p(l)),
      d.on("close", () => p(null, !0)),
      u.on("error", (l) => p(l)),
      u.on("close", () => p(null, !0)),
      c.on("error", (l) => {
        r.logger.error(
          `websocket proxy error from target: ${o} > ${t}`,
          l.message
        ),
          e.removeAllListeners(),
          c.removeAllListeners(),
          xn(e);
      }),
      c.on("open", () => {
        if (s) return xn(c, s, a);
        Gae(c),
          c.on("ping", () => hq(e)),
          c.on("pong", () => yq(e)),
          c.on("close", (l, f) => {
            r.logger.info(
              `websocket proxy closed from target: ${o} > ${t}`,
              l,
              f
            ),
              e.removeAllListeners(),
              c.removeAllListeners(),
              xn(e, l, f);
          });
      }),
      e.on("error", (l) => {
        r.logger.error(
          `websocket proxy error from src: ${o} > ${t}`,
          l.message
        ),
          e.removeAllListeners(),
          c.removeAllListeners(),
          xn(c);
      }),
      e.on("ping", () => hq(c)),
      e.on("pong", () => yq(c)),
      e.on("close", (l, f) => {
        (s = l),
          (a = f),
          r.logger.info(`websocket proxy closed from src: ${o} > ${t}`, l, f),
          e.removeAllListeners(),
          c.removeAllListeners(),
          xn(c, l, f);
      });
  };
});
var Tq = w((NDe, _q) => {
  var Wae = require("koa-router"),
    Kae = require("koa-compose"),
    { subscribe: Sq, unsubscribe: Yae } = require("handoff"),
    zae = Eq(),
    { getApps: bq } = H(),
    { PUBLIC_PATH_PREFIX: Jae } = nu();
  _q.exports = (e, t, r) => {
    let s,
      a = new Map(),
      o = (i) => {
        s = Kae(
          i
            .filter((c) => !!(c.proxy && c.proxy.api))
            .map((c) => {
              let { proxy: d, port: u, protocol: p, host: l } = c,
                m = `${p === "https" ? "wss" : "ws"}://${l}:${u}`;
              t.info(`Adding ws proxy: ${d.api} > ${m}`);
              let E = new Wae(),
                y = `${d.api}/:relPath*`,
                h = (S) => `${m}/${S.relPath || ""}`;
              return E.get(y, (S, D) => {
                if (!S.websocket) return D();
                if (
                  !S.user &&
                  !S.token &&
                  !S.guestMeta &&
                  S.params.relPath.indexOf(`${Jae}/`) !== 0
                ) {
                  t.warn(
                    `Rejecting unauthenticated proxy request for ${S.url}`
                  ),
                    S.websocket.close(1002, "Not authorized");
                  return;
                }
                S.user &&
                  (a.set(S.user.id, S.websocket),
                  S.websocket.on("close", () => {
                    a.delete(S.user.id);
                  })),
                  zae(S.websocket, h(S.params), S, t);
              }).routes();
            })
        );
      };
    bq().then((i) => o(i));
    let n = [
      Sq("apps.changed", async () => o(await bq())),
      Sq("uum.userChanged", (i, c) => {
        if (c.status === "DEACTIVATED" && a.has(c.id)) {
          t.info(`Killing connection for deactivated user ${c.id}`);
          let d = a.get(c.id);
          d && d.close(4401, "Not authorized");
        }
      }),
    ];
    return (
      r(async () => {
        n.forEach((i) => Yae(i));
      }),
      async (i, c) => (s ? s(i, c) : c())
    );
  };
});
var vq = w((RDe, Aq) => {
  var Xae = require("koa-compose"),
    { subscribe: Qae, unsubscribe: Zae } = require("handoff"),
    eoe = ff(),
    { getApps: Iq } = H();
  Aq.exports = (e, t, r) => {
    let s,
      a = (n) => {
        s = Xae(
          n
            .filter((i) => !!(i.proxy && i.proxy.api))
            .map((i) => {
              let { port: c, protocol: d, host: u } = i,
                p = `${d}://${u}:${c}`;
              return (
                t.info(`Adding API proxy: ${i.proxy.api} > ${p}`),
                eoe(i.proxy.api, p, t)
              );
            })
        );
      };
    Iq().then((n) => a(n));
    let o = [Qae("apps.changed", async () => a(await Iq()))];
    return (
      r(async () => {
        o.forEach((n) => Zae(n));
      }),
      async (n, i) => (s ? s(n, i) : i())
    );
  };
});
var kq = w((FDe, Uq) => {
  Um();
  tm();
  VR();
  var hf = require("fs-extra"),
    ro = require("path"),
    Cq = require("glob"),
    toe = require("http2"),
    roe = require("http"),
    Dq = require("koa"),
    soe = require("@koa/cors"),
    aoe = require("koa-helmet"),
    ooe = require("util"),
    noe = require("koa-range"),
    yf = require("koa-compose"),
    wf = require("koa-static"),
    ioe = require("koa-mount"),
    gf = require("bluebird"),
    coe = require("ws"),
    { takeEvery: uoe } = require("redux-saga/effects"),
    { publish: iu, subscribe: cu, unsubscribe: Nq } = require("handoff"),
    doe = yO(),
    loe = OO(),
    so = LO(),
    poe = $O(),
    moe = jO(),
    Rq = WO(),
    foe = YO(),
    hoe = JO(),
    yoe = ZO(),
    woe = tq(),
    goe = sq(),
    Eoe = lq(),
    Soe = Tq(),
    boe = vq(),
    _oe = om(),
    { AppError: ODe, ValidationError: qDe } = (se(), me),
    { getIsSetup: Toe } = H(),
    { SETUP_COMPLETED: Ioe, SET_DIRECT_CONNECT_DOMAIN: Aoe } = Z(),
    Pq = async (e, t) => {
      let r = ro.resolve(__dirname, "node_modules"),
        s = hf.existsSync(r) ? r : ro.resolve(__dirname, "../node_modules"),
        a = ro.dirname(
          Cq.sync(`${s}/@ubnt/unifi-portal/**/index.html`, { realpath: !0 })[0]
        ),
        o = ro.dirname(
          Cq.sync(`${s}/@ubnt/uhd-setup/**/index.html`, { realpath: !0 })[0]
        ),
        n = _oe(e, t);
      await n.checkSelfSignedCerts();
      let i = !1,
        c = hf.readFile(ro.resolve(a, "index.html")),
        d = hf.readFile(ro.resolve(o, "index.html")),
        u = c,
        p = async (O, V) => {
          await V(),
            O.status === 404 &&
              !O.originalUrl.startsWith("/api/") &&
              !O.originalUrl.startsWith("/proxy/") &&
              !O.originalUrl.startsWith("/floorplans") &&
              ((O.status = 200), (O.type = "text/html"), (O.body = await u));
        },
        l = [],
        f = (O) => l.push(O),
        m = e.ports.http,
        E = e.ports.https,
        y = [],
        h = new Dq(),
        S = new Dq(),
        D = (O, V) => {
          if (!(O instanceof Error))
            throw new TypeError(ooe.format("non-error thrown: %j", O));
          t.error("HTTP Server on error:", O);
        };
      h.on("error", (O) => D(O, h)), S.on("error", (O) => D(O, S));
      let A = yf([hoe(t), moe]),
        C = (O, V) => ((O.config = e), V()),
        R = /^.+\.ui\.com(:\d{1,5})?$/,
        N = (O) => R.test(O),
        b = (O) => {
          let V = O.get("Origin");
          return N(V) ? V : null;
        },
        T = /^(?<proto>\w+:\/\/)?(?<host>[^:]+):?(?<port>\d+)?$/,
        M = (O, V) => {
          let Q = O.match(T)?.groups,
            ae = V.match(T)?.groups;
          return (
            Q &&
            ae &&
            Q.host === ae.host &&
            (Q.port === ae.port || ae.port === "443")
          );
        },
        q = (O) => {
          let V = O.get("Origin");
          return N(V);
        },
        k = async (O, V) => {
          if (O.user && O.user.status === "DEACTIVATED") {
            O.logger.warn(`User ${O.user.id} deactivated, logging out`),
              iu("auth.jwt.revoke", O.jwt).catch((Q) =>
                O.logger.error("Failed to revoke JWT token", Q)
              ),
              (O.user = null),
              (O.jwt = {}),
              (O.status = 401),
              O.websocket && O.websocket.close(4401, "Not authorized");
            return;
          }
          return V();
        },
        I = Pc(e, t);
      if (
        (h
          .use(
            soe({
              origin: b,
              credentials: q,
              exposeHeaders: [
                "Filename",
                "Location",
                "Upload-Offset",
                "X-CSRF-Token",
                "X-File-Id",
              ],
              allowHeaders: [
                "Content-type",
                "If-Modified-Since",
                "JWT",
                "Tus-Resumable",
                "Upload-Length",
                "Upload-Metadata",
                "Upload-Offset",
                "X-CSRF-Token",
                "X-User-Agent",
                "x-uidtoken",
                "X-Requested-With",
              ],
            })
          )
          .use(aoe({ permittedPolicies: "none" }))
          .use(A)
          .use(C)
          .use(yoe)
          .use(noe)
          .use(woe)
          .use(so.decode)
          .use(so.isBlocked)
          .use(poe)
          .use(wf(a, { index: !1 }))
          .use(wf(o, { index: !1 }))
          .use(
            ioe(
              "/floorplans",
              wf("/data/unifi-core/floorplans/", { index: !1 })
            )
          )
          .use(foe(e))
          .use(p)
          .use(Rq)
          .use(Wc(e, t)),
        e.redirectHostname || e.enforceHttps)
      ) {
        let O = goe(e);
        h.use((V, Q) => O(i, V, Q));
      }
      h.use(Eoe(e, t.wrap("http.uiProxy"), f)),
        h
          .use(k)
          .use(doe(e))
          .use(so.encode)
          .use(boe(e, t.wrap("http.apiProxy"), f))
          .use(
            async (O, V) => (
              O.user &&
                O.request.socket.remoteAddress &&
                !O.webrtc &&
                !O.mqtt &&
                I(O.user, "local"),
              V()
            )
          ),
        S.use(A)
          .use(C)
          .use(so.decode)
          .use(so.isBlocked)
          .use(Rq)
          .use(k)
          .use(loe(e))
          .use(so.encode)
          .use(Soe(e, t.wrap("http.wsProxy"), f))
          .use(async (O, V) => {
            O.websocket && O.websocket.terminate();
          });
      let _ = yf(h.middleware),
        P = (O, V, Q = {}) => {
          let ae = h.createContext(O, V);
          return Object.assign(ae, Q), h.handleRequest(ae, _);
        },
        U = yf(S.middleware),
        j = (O, V = {}) => {
          let Q = S.createContext(O);
          return Object.assign(Q, V), U(Q);
        };
      if (E) {
        let [O, V] = await gf.all([
            n.getSelfSignedKey(),
            n.getSelfSignedCert(),
          ]),
          Q = toe.createSecureServer(
            { cert: V.raw, key: O, allowHTTP1: !0, ciphers: BR },
            P
          );
        Q.on("error", (ae) => {
          if (ae) return t.error(ae);
        }),
          Q.listen(E, () => {
            t.info(`HTTPS Server is now listening on port ${E}`);
          });
        try {
          let [ae, W] = await gf.all([n.getDirectKey(), n.getDirectCert()]);
          W &&
            (Q.addContext(W.hostname, { cert: W.raw, key: ae }),
            iu("redux.dispatch", Aoe, W.hostname));
        } catch (ae) {
          t.warn("Failed to attach SSL certificate for direct connection:", ae);
        }
        y.push(Q);
      }
      m &&
        y.push(
          roe.createServer(P).listen(m, (O) => {
            if (O) return t.error(O);
            t.info(`HTTP Server is now listening on port ${m}`);
          })
        );
      let K = (O, V) => {
        O.on("error", (Q) => {
          t.error("WS Socket Error", Q);
        }),
          j(V, { websocket: O, path: V.url }).catch((Q) => {
            O.terminate(), t.error("WS Handler Error", Q);
          });
      };
      y.forEach((O) => {
        O.on("upgrade", (V, Q, ae) => {
          let W = V.headers.origin;
          W === void 0 || N(W) || M(W, V.headers.host)
            ? J.handleUpgrade(V, Q, ae, (z) => {
                (z.request = V), J.emit("connection", z, V);
              })
            : (t.warn(`Rejecting cross site WS request from ${W}`),
              Q.write(`HTTP/1.1 401 Unauthorized\r
\r
`),
              Q.destroy());
        }),
          O.on("error", (V) => {
            t.error(V);
          });
      });
      let J = new coe.Server({ noServer: !0 });
      J.on("connection", K);
      let F = [
        cu("http.req", (O, V, Q, ae) => P(V, Q, ae)),
        cu("http.ws", (O, V, Q) => j(V, Q)),
        cu("http.getWsServer", () => J),
      ];
      u = Toe().then((O) =>
        O ? ((i = !0), c) : process.env.IS_CLOUD_INSTANCE ? "" : d
      );
      let $ = [
        function* () {
          yield uoe(Ioe, (O) => {
            (i = !0), (u = c);
          });
        },
      ];
      return (
        $.forEach((O) => iu("redux.saga.add", O)),
        async () => {
          y.forEach((O) => {
            O.removeAllListeners(), O.close();
          }),
            (y.length = 0),
            J.close(),
            $.forEach((O) => iu("redux.saga.remove", O)),
            F.forEach((O) => Nq(O)),
            await gf.map(l, (O) => O()),
            (l.length = 0);
        }
      );
    };
  Uq.exports = async (e, t) => {
    try {
      let r = await Pq(e, t)
      let s = [
          cu("http.restart", async () => {
            t.info("HTTP server restarting")
            try {
              await r()
              r = await Pq(e, t)
            } catch(ee) {
              throw new Error('>>>' + e + '????' + t + '::::' + ee)
            }
          }),
        ];
      return async () => {
        s.forEach((a) => Nq(a))
        try {
          await r();
        } catch(ee) {
          throw new Error('>>>' + e + '????' + t + '::::' + ee)
        }
      };
    } catch(ee) {
      throw new Error('>>>' + e + '????' + t + '::::' + ee)
    }
  };
});
var uu,
  Oq,
  qq,
  Fq,
  Lq,
  voe,
  Mq,
  xq = x(() => {
    (uu = g(require("handoff"))),
      (Oq = g(require("http"))),
      (qq = g(require("http2-proxy"))),
      (Fq = g(require("koa-compose"))),
      (Lq = g(H())),
      (voe = (e, t, r) => {
        let s = (c) => {
            let { port: d, protocol: u, host: p, proxy: l } = c;
            if (!l || !l.api) throw new Error(`No proxy defined for ${c.name}`);
            let f = `${u}://${p}:${d}`,
              m = new URL(f),
              E = new RegExp(`^${l.api}/homekit/`);
            return async (h, S) => {
              if (!h.req.url || !h.path.match(E)) return S();
              h.req.url = h.req.url.replace(E, "/");
              let { req: D, res: A } = h,
                C = m.protocol.replace(":", "");
              try {
                await qq.default.web(D, A, {
                  hostname: m.hostname,
                  port: parseInt(m.port),
                  protocol: C,
                  path: `${
                    m.pathname.length > 1 ? m.pathname : ""
                  }/api/homekit${h.req.url}`,
                  onReq: async (R, N) => {
                    let b = Oq.default.request(N);
                    b.setHeader(
                      "x-forwarded-for",
                      R.socket.remoteAddress || ""
                    ),
                      b.setHeader("x-forwarded-port", 11081),
                      b.setHeader("x-forwarded-proto", "http");
                    let T =
                      R.headers["x-forwarded-host"] ||
                      R.headers.host ||
                      R.headers[":authority"];
                    return T && b.setHeader("x-forwarded-host", T), b;
                  },
                  onRes: async (R, N, b) => {
                    Object.keys(b.headers).forEach((T) => {
                      let M = b.headers[T];
                      M && N.setHeader(T, M);
                    }),
                      (h.status = b.statusCode),
                      b.pipe(N);
                  },
                });
              } catch (R) {
                throw (t.error("Proxy error:", R), R);
              }
            };
          },
          a = null,
          n = [
            (0, uu.subscribe)("apps.changed", async () => {
              try {
                let c = await (0, Lq.getControllers)();
                a = (0, Fq.default)(
                  c.filter((d) => d.proxy && d.proxy.api).map((d) => s(d))
                );
              } catch (c) {
                t.error("Failed to start HomeKit proxy", c);
              }
            }),
          ];
        return (
          r(() => {
            n.forEach((c) => (0, uu.unsubscribe)(c));
          }),
          async (c, d) => (a ? a(c, d) : d())
        );
      }),
      (Mq = voe);
  });
var $q,
  Coe,
  Bq,
  Vq = x(() => {
    ($q = g(require("handoff"))),
      (Coe = async (e, t) => {
        let { message: r, options: s } = e.request.body;
        (e.body = await (0, $q.publish)("cloud.sendEmail", r, s)), await t();
      }),
      (Bq = Coe);
  });
var jq,
  Doe,
  Gq,
  Hq = x(() => {
    (jq = g(require("handoff"))),
      (Doe = async (e, t) => {
        let {
          app: r,
          appPrefix: s,
          collapseKey: a,
          message: o,
          ssoIds: n,
          imageToUpload: i,
          options: c,
        } = e.request.body;
        (e.body = await (0, jq.publish)(
          "cloud.sendPushNotification",
          {
            app: r,
            appPrefix: s,
            ssoIds: n,
            message: o,
            collapseKey: a,
            imageToUpload: i,
          },
          c
        )),
          await t();
      }),
      (Gq = Doe);
  });
var Kq = w(($De, Wq) => {
  Wq.exports = {
    PUSH_TARGET_APPS: [
      "network",
      "protect",
      "access",
      "protect-dev",
      "protect-nightly",
    ],
    SEVERITY_LEVELS: ["info", "warning"],
    EVENT_CATEGORIES: [
      "softwareUpdate",
      "system",
      "userActivity",
      "topology",
      "performance",
    ],
    NOTIFICATION_SOURCES: [
      "network",
      "protect",
      "access",
      "talk",
      "connect",
      "uid",
      "unifiOS",
    ],
    thumbnailType: {
      CONSOLE: "console",
      USER: "user",
      APPLICATION: "application",
      URL: "url",
    },
    settingsMode: { OFF: "off", DEFAULT: "default", CUSTOM: "custom" },
  };
});
var eF = w((BDe, Zq) => {
  var Noe = require("ajv"),
    Roe = new Noe({ useDefaults: !0 }),
    {
      PUSH_TARGET_APPS: Yq,
      EVENT_CATEGORIES: Poe,
      SEVERITY_LEVELS: Uoe,
      NOTIFICATION_SOURCES: koe,
      thumbnailType: Ooe,
    } = Kq(),
    zq = {
      type: "object",
      default: {},
      patternProperties: {
        "^.+$": {
          properties: {
            text: { type: "string" },
            url: { type: "string" },
            timestamp: { type: "number" },
          },
          minProperties: 1,
          additionalProperties: !1,
        },
      },
    },
    Jq = {
      type: "object",
      properties: {
        type: { enum: Object.values(Ooe) },
        value: { type: "string" },
      },
    },
    Xq = {
      type: "object",
      properties: {
        title: { type: "string" },
        body: { type: "string" },
        attributes: { type: "object" },
        type: { type: "string", default: "notification" },
        sound: { type: "string", default: "default" },
      },
    },
    Qq = {
      type: "object",
      properties: {
        senderEmail: { type: "string" },
        senderName: { type: "string" },
      },
    },
    qoe = {
      eventId: { type: "string" },
      eventData: zq,
      thumbnail: Jq,
      email: {
        type: "object",
        properties: {
          from: Qq,
          messageType: { type: "string" },
          vars: { type: "object" },
          subject: { type: "string" },
          bodyText: { type: "string" },
          bodyHtml: { type: "string" },
        },
      },
      push: { type: "object", properties: { message: Xq } },
    },
    Foe = {
      eventId: { type: "string" },
      source: { enum: koe },
      category: { enum: Poe },
      severity: { enum: Uoe },
      thumbnail: B(v({}, Jq), { required: ["type"] }),
      eventData: zq,
      showInList: { type: "boolean", default: !0 },
      isUnique: { type: "boolean", default: !1 },
      email: {
        type: "object",
        properties: {
          from: Qq,
          to: { type: "array", items: { type: "string" }, minItems: 1 },
          imagesToUpload: { type: "array" },
        },
        required: ["to"],
        oneOf: [
          {
            properties: {
              messageType: { type: "string" },
              vars: { type: "object" },
            },
            required: ["messageType"],
          },
          {
            properties: {
              subject: { type: "string" },
              bodyText: { type: "string" },
              bodyHtml: { type: "string" },
            },
            required: ["subject", "bodyText", "bodyHtml"],
          },
        ],
      },
      push: {
        type: "object",
        properties: {
          app: { enum: Yq },
          appPrefix: { type: "boolean" },
          alternativeApps: { type: "array", items: { enum: Yq } },
          ssoIds: { type: "array", items: { type: "string" }, minItems: 1 },
          collapseKey: { type: "string" },
          message: B(v({}, Xq), { required: ["title", "body"] }),
        },
        required: ["app", "message", "ssoIds"],
      },
    },
    Loe = {
      type: "object",
      if: { properties: { source: { const: "unifiOS" } } },
      then: { properties: qoe, required: ["eventId"] },
      else: {
        properties: Foe,
        required: ["eventId", "source", "category", "severity", "thumbnail"],
      },
    };
  Zq.exports = Roe.compile(Loe);
});
var tF,
  Ef,
  Moe,
  rF,
  sF = x(() => {
    tF = g(require("handoff"));
    se();
    (Ef = g(eF())),
      (Moe = async (e, t) => {
        let r = e.request.body || {};
        if (!(0, Ef.default)(r)) throw new at(Ef.default);
        let s = await (0, tF.publish)("notifications.add", r);
        return (e.body = { notificationId: s }), t();
      }),
      (rF = Moe);
  });
var aF,
  xoe,
  oF,
  nF = x(() => {
    (aF = g(require("handoff"))),
      (xoe = async (e, t) => {
        let { notificationId: r } = e.params;
        return (
          await (0, aF.publish)("notifications.remove", r),
          (e.status = 204),
          t()
        );
      }),
      (oF = xoe);
  });
var cF = w((HDe, iF) => {
  var { publish: $oe } = require("handoff");
  iF.exports = async (e, t) => {
    let r = (await $oe("apps.getNormalizedForCloud")).apps;
    e.body = r;
  };
});
var dF = w((WDe, uF) => {
  var { getApps: Boe } = H();
  uF.exports = async (e, t) => {
    let r = (await Boe()).filter(
      (s) => s.type === "controller" && !s.hidden && s.isInstalled
    );
    e.body = r;
  };
});
var pF = w((KDe, lF) => {
  var { publish: Voe } = require("handoff");
  lF.exports = async (e, t) => {
    try {
      let { source: r } = e.query,
        s = null;
      r && (s = r.split(","));
      let a = await Voe("applications.deviceList.get", s);
      e.body = a;
    } catch (r) {
      e.logger.error("Failed to get device list:", r),
        (e.status = 500),
        (e.body = { errors: [r.message] });
    }
    return t();
  };
});
var fF = w((YDe, mF) => {
  var { publish: joe } = require("handoff"),
    { getControllers: Goe } = H();
  mF.exports = async (e, t) => {
    let { name: r } = e.params;
    try {
      if (!(await Goe()).some((a) => a.name === r)) {
        (e.status = 400),
          (e.body = { error: `Unknown application name: '${r}'` });
        return;
      }
      joe("controllers.update", { applicationName: r })
        .then((a) => a.getResult())
        .catch((a) => {
          e.logger.error(`Application ${r} update request failed`, a);
        }),
        (e.status = 204);
    } catch (s) {
      (e.status = 500), (e.body = { error: s.message });
    }
  };
});
var wF = w((zDe, yF) => {
  var { publish: Hoe } = require("handoff"),
    { ValidationError: hF } = (se(), me),
    { devicesUpdateSchema: Woe } = (mn(), Ip);
  yF.exports = async (e, t) => {
    let { controllerName: r } = e.params,
      s = e.request.body,
      { devices: a } = s;
    try {
      let o = Woe.safeParse(s);
      if (!o.success) throw new hF(o.error);
      await Hoe("applications.deviceList.update", r, a), (e.status = 204);
    } catch (o) {
      if ((e.logger.error(o), o instanceof hF))
        return (
          (e.status = 400),
          (e.body = { validationErrors: o.validationErrors }),
          t()
        );
      (e.status = 500), (e.body = { errors: [o.message] });
    }
    return t();
  };
});
var EF = w((JDe, gF) => {
  var { publish: Koe } = require("handoff");
  gF.exports = async (e, t) => {
    let { controllerName: r, deviceMac: s } = e.params;
    try {
      await Koe("applications.deviceList.remove", r, s), (e.status = 204);
    } catch (a) {
      e.logger.error(a), (e.status = 500), (e.body = { errors: [a.message] });
    }
    return t();
  };
});
var bF = w((XDe, SF) => {
  var { publish: Yoe } = require("handoff");
  SF.exports = async (e, t) => {
    let { controllerName: r } = e.params;
    try {
      await Yoe("applications.deviceList.clear", r), (e.status = 204);
    } catch (s) {
      e.logger.error(s), (e.status = 500), (e.body = { errors: [s.message] });
    }
    return t();
  };
});
var TF = w((QDe, _F) => {
  var { publish: zoe } = require("handoff");
  _F.exports = async (e, t) => {
    try {
      zoe("firmware.update").catch((r) => {
        e.logger.error("Firmware updated failed", r);
      }),
        (e.status = 204);
    } catch (r) {
      (e.status = 500), (e.body = { errors: [r.message] });
    }
    await t();
  };
});
var CF = w((tNe, vF) => {
  var IF = g(require("handoff"));
  se();
  qt();
  var AF = g(H()),
    Joe = async (e, t) => {
      try {
        let r = await (0, IF.publish)("system.info", !0);
        e.body = B(v({}, r), {
          releaseChannel: await (0, AF.getFWReleaseChannel)(),
        });
      } catch (r) {
        e.logger.error("Failed to get system info:", r),
          r instanceof _e.default
            ? ((e.status = r.httpCode),
              (e.body = { data: r.data, code: r.code, message: r.message }))
            : ((e.status = 500), (e.body = { error: Te(r) }));
      }
      await t();
    };
  vF.exports = Joe;
});
var NF = w((rNe, DF) => {
  var { publish: Xoe } = require("handoff");
  DF.exports = async (e, t) => {
    let r = await Xoe("uum.getUsers");
    return r.length ? (e.body = r) : (e.status = 400), t();
  };
});
var du = w((sNe, PF) => {
  var { publish: RF } = require("handoff");
  PF.exports = async (e, t) => {
    let { id: r, token: s } = e.params;
    return (
      r
        ? (e.body = await RF("auth.getUser", r))
        : s
        ? (e.body = await RF("auth.getUserByToken", s))
        : (e.status = 404),
      t()
    );
  };
});
var OF = w((aNe, kF) => {
  var { publish: UF } = require("handoff"),
    { getCloudSettings: Qoe } = H();
  kF.exports = async (e, t) => {
    let r = e.request.body;
    try {
      (e.body = await UF("uum.migrateUser", r)),
        (await Qoe()).deviceId &&
          (await UF("cloud.syncAccess").catch((a) => {
            e.logger.error(a);
          }));
    } catch (s) {
      e.logger.error("unable to migrate user", s),
        (e.status = 500),
        (e.body = { error: s.message });
    }
    return t();
  };
});
var LF = w((oNe, FF) => {
  var Zoe = require("ajv"),
    { publish: $n } = require("handoff"),
    ene = new Zoe({ useDefaults: !0 }),
    tne = {
      type: "object",
      properties: {
        ownerUserId: { type: "string" },
        email: { type: "string" },
      },
    },
    qF = ene.compile(tne);
  FF.exports = async (e, t) => {
    let r = e.request.body;
    if (!qF(r))
      return (e.status = 400), (e.body = { validationErrors: qF.errors }), t();
    let { email: s, ownerUserId: a } = r;
    try {
      let o = await $n("uum.getUsers"),
        n = o.find(
          (c) => c.isSuperAdmin && c.email === s && c.status === "ACTIVE"
        );
      if (o.find((c) => c.id === a && c.isOwner) && n) {
        await $n("uum.transferOwner", s), await $n("cloud.syncOwner");
        try {
          await $n("cloud.downloadEncryptionKey");
        } catch (c) {
          e.logger.warn(
            "Disable scheduled backups as new owner doesn't have the encryption key."
          ),
            await $n("backup.schedule.setAutoBackupEnabled", !1);
        }
        e.status = 204;
      } else
        (e.status = 403),
          (e.body = { errors: "Not allowed to transfer owner" });
    } catch (o) {
      e.logger.error("Failed to transfer owner:", o),
        (e.status = 500),
        (e.body = { errors: `Failed to transfer owner: ${o.message}` });
    }
    await t();
  };
});
var xF = w((nNe, MF) => {
  var { publish: rne } = require("handoff");
  MF.exports = async (e, t) => {
    let r = e.request.body;
    try {
      await rne("cloud.invites.send", r.unique_id, r),
        (e.body = { success: !0 });
    } catch (s) {
      e.logger.error("unable to invite user to device", s),
        (e.status = 500),
        (e.body = { error: s.message });
    }
    return t();
  };
});
var BF = w((iNe, $F) => {
  var { publish: sne } = require("handoff");
  $F.exports = async (e, t) => {
    (e.body = await sne("cloud.status")), await t();
  };
});
var jF = w((cNe, VF) => {
  var { publish: ane } = require("handoff");
  VF.exports = async (e, t) => {
    (e.body = await ane("cloud.getTurnCredentials")), await t();
  };
});
var HF = w((uNe, GF) => {
  var { publish: one } = require("handoff");
  GF.exports = async (e, t) => {
    let { filename: r } = e.request.body;
    (e.body = await one("cloud.fingerprintAssets", r)), await t();
  };
});
var KF = w((dNe, WF) => {
  var { publish: nne } = require("handoff");
  WF.exports = async (e, t) => {
    (e.body = await nne("cloud.fingerprintKey")), await t();
  };
});
var zF = w((lNe, YF) => {
  var { publish: ine } = require("handoff"),
    { getCloudSettings: cne } = H();
  YF.exports = async (e, t) => {
    if ((await cne()).deviceId)
      try {
        await ine("cloud.syncAccess"), (e.body = { success: !0 });
      } catch (s) {
        e.logger.error("unable to sync access", s),
          (e.status = 500),
          (e.body = { error: s.message });
      }
    else e.body = { success: !1 };
    return t();
  };
});
var XF = w((pNe, JF) => {
  var { publish: une } = require("handoff");
  JF.exports = async (e, t) => {
    let r = e.request.body;
    try {
      await une("cloud.revokeAccess", r.sso_id), (e.body = { success: !0 });
    } catch (s) {
      e.logger.error("unable to revoke access of user", s),
        (e.status = 500),
        (e.body = { error: s.message });
    }
    return t();
  };
});
var ZF = w((mNe, QF) => {
  var { publish: dne } = require("handoff");
  QF.exports = async (e, t) => {
    let r = e.request.body;
    try {
      await dne("cloud.grantAccess", r.sso_id), (e.body = { success: !0 });
    } catch (s) {
      e.logger.error("unable to grant access of user", s),
        (e.status = 500),
        (e.body = { error: s.message });
    }
    return t();
  };
});
var tL = w((fNe, eL) => {
  var { publish: lne } = require("handoff");
  eL.exports = async (e, t) => {
    try {
      let r = await lne("cloud.mfaReset");
      (e.body = r),
        r.status === "error" && (e.logger.warn(r), (e.status = 400));
    } catch (r) {
      r.code && r.code.includes("DEVICE_PUBLISH_TIMEOUT")
        ? (e.logger.error("Unable to reset mfa from NCA", r),
          (e.status = 408),
          (e.body = { error: r.code, message: "Unable to reset mfa from NCA" }))
        : (e.logger.error("Unable to reset mfa", r),
          (e.status = 500),
          (e.body = { status: "failed", message: r.message }));
    }
    await t();
  };
});
var sL = w((hNe, rL) => {
  var { publish: pne } = require("handoff");
  rL.exports = async (e, t) => {
    try {
      let r = await pne("cloud.mfaCheck");
      (e.body = r),
        r.status === "error" && (e.logger.warn(r), (e.status = 400));
    } catch (r) {
      r.code && r.code.includes("DEVICE_PUBLISH_TIMEOUT")
        ? (e.logger.error("Unable to check reset from NCA", r),
          (e.status = 408),
          (e.body = {
            error: r.code,
            message: "Unable to check reset from NCA",
          }))
        : (e.logger.error("Unable to check reset", r),
          (e.status = 500),
          (e.body = { status: "failed", message: r.message }));
    }
    await t();
  };
});
var oL = w((yNe, aL) => {
  var { publish: lu } = require("handoff"),
    mne = require("bluebird"),
    { deviceName: fne } = rf(),
    { getCloudSettings: hne, getIsSetup: yne, getHasInternet: wne } = H();
  aL.exports = async (e, t) => {
    let r = await yne(),
      s = e.request.body;
    try {
      let {
          owner: a,
          timezone: o,
          name: n,
          location: i,
          updateFirmware: c = !1,
        } = s,
        { username: d, password_hash: u, hash_type: p } = a,
        l = {
          name:
            typeof n == "string"
              ? n.slice(0, fne.maxLength)
              : "Ubiquiti Device",
          timezone: o,
          location: i,
          username: d,
          password_hash: u,
          hash_type: p,
          isMigration: !0,
          ssoUser: a.ssoUser || {},
          updateFirmware: c,
          sendDiagnostics: "anonymous",
        };
      if (
        (r
          ? e.logger.warn("already setup, skipping settings migration")
          : await lu("system.setup", l),
        s.cloudAccess)
      ) {
        let f = await hne();
        if (!(await wne()))
          throw new Error("no internet connection, can't migrate cloud access");
        f.deviceId
          ? e.logger.warn(
              "already registered to cloud, skipping cloud migration"
            )
          : await lu("cloud.migrate", s.cloudAccess);
      }
      Array.isArray(s.users) &&
        (await mne.all(
          s.users
            .filter((f) => !!f)
            .map((f) =>
              lu("uum.migrateUser", f).catch((m) => {
                e.logger.warn("unable to migrate user", f), e.logger.warn(m);
              })
            )
        )),
        s.cloudAccess &&
          (await lu("cloud.syncAccess").catch((f) => {
            e.logger.error(f);
          })),
        (e.body = { success: !0 }),
        await t();
    } catch (a) {
      (e.status = 500),
        e.logger.error(a),
        (e.body = { errors: [a.message] }),
        await t();
    }
  };
});
var uL = w((wNe, cL) => {
  var { publish: gne } = require("handoff"),
    { UPDATE_DEVICE_SETTINGS: Ene } = Z(),
    { getSettings: Sne } = H(),
    { setDeviceState: nL, deviceStates: iL } = Ot();
  cL.exports = async (e, t) => {
    await gne("redux.dispatch", Ene, { needsMigration: void 0 }),
      Sne().then(async ({ isSetup: r }) => {
        r ? await nL(iL.SETUP) : await nL(iL.NOT_SETUP);
      }),
      await t();
  };
});
var pL = w((gNe, lL) => {
  var bne = require("ajv"),
    { publish: Sf } = require("handoff"),
    _ne = uf(),
    Tne = new bne({ useDefaults: !0 }),
    Ine = {
      type: "object",
      properties: { uuid: { type: "string" }, email: { type: "string" } },
      required: ["uuid", "email"],
    },
    Ane = {
      type: "object",
      properties: {
        name: { type: "string" },
        timezone: { type: "string" },
        location: _ne,
        ssoUser: Ine,
      },
      required: ["name", "timezone", "ssoUser"],
    },
    dL = Tne.compile(Ane);
  lL.exports = async (e, t) => {
    if ((await Sf("system.info")).isSetup)
      return (
        (e.status = 401), (e.body = { errors: "Device is already setup." }), t()
      );
    let s = e.request.body;
    if (
      (!s.name && s.hostname && ((s.name = s.hostname), delete s.hostname),
      !dL(s))
    )
      return (e.status = 400), (e.body = { validationErrors: dL.errors }), t();
    try {
      let a = await Sf("system.setup", s),
        o = await Sf("uum.getUserBySsoId", a.uuid);
      (e.body = o), await t();
    } catch (a) {
      a.message.includes("2fa token") && (e.status = 499),
        a.message.includes("ssoAuthError")
          ? (e.status = 401)
          : (e.status = 500),
        e.logger.error(a),
        (e.body = { errors: [a.message] }),
        await t();
    }
  };
});
var fL = w((ENe, mL) => {
  var { publish: vne } = require("handoff");
  mL.exports = async (e, t) => {
    let r = e.request.body,
      { appName: s } = e.params;
    try {
      await vne("uum.updatePermissionsManifest", s, r), (e.status = 204);
    } catch (a) {
      e.logger.error("unable to update permissions", a),
        (e.status = 500),
        (e.body = { error: a.message });
    }
    return t();
  };
});
var yL = w((SNe, hL) => {
  hL.exports = async (e, t) => {
    let { message: r, level: s = "info" } = e.request.body;
    e.logger.log("ipc", s, r), await t();
  };
});
var gL = w((bNe, wL) => {
  var { publish: Cne } = require("handoff");
  wL.exports = async (e, t) => {
    let r = e.request.body;
    try {
      await Cne("cloud.uid.grant", r.token), (e.body = { success: !0 });
    } catch (s) {
      e.logger.error("unable to grant uid user", s),
        (e.status = 500),
        (e.body = { error: s.message });
    }
    return t();
  };
});
var SL = w((_Ne, EL) => {
  var { publish: Dne } = require("handoff");
  EL.exports = async (e, t) => {
    let r = e.request.body;
    try {
      await Dne("cloud.uid.revoke", r.uidSsoId), (e.body = { success: !0 });
    } catch (s) {
      e.logger.error("unable to revoke uid user", s),
        (e.status = 500),
        (e.body = { error: s.message });
    }
    return t();
  };
});
var _L = w((TNe, bL) => {
  var { publish: Nne } = require("handoff");
  bL.exports = async (e, t) => {
    e.body = await Nne("system.basicInfo");
  };
});
var vL = w((INe, AL) => {
  var { publish: TL } = require("handoff"),
    Rne = require("ajv"),
    Pne = new Rne({ useDefaults: !0 }),
    Une = {
      type: ["object"],
      properties: { identities: { type: "string" } },
      required: ["identities"],
    },
    { ValidationError: kne, AppError: One, errorCodes: qne } = (se(), me),
    IL = Pne.compile(Une);
  AL.exports = async (e, t) => {
    if (!IL(e.params)) throw new kne(IL);
    let { connected: r } = await TL("cloud.status");
    if (!r) throw new One(qne.DEVICE_NOT_CONNECTED_TO_CLOUD);
    try {
      let s = e.params.identities.split(",");
      e.body = await TL("cloud.getTwilioToken", s);
    } catch (s) {
      (e.status = s.status || 500),
        e.logger.error(s),
        (e.body = { errors: [s.message] });
    }
  };
});
var DL = w((vNe, CL) => {
  var { publish: Fne } = require("handoff"),
    ANe = require("fs-extra");
  CL.exports = async (e, t) => {
    try {
      let r = await Fne("system.generateSupportFile");
      e.body = r.getStream();
    } catch (r) {
      e.logger.error("Failed to generate support file", r), (e.status = 500);
    }
    await t();
  };
});
var RL = w((CNe, NL) => {
  var { publish: Lne } = require("handoff");
  NL.exports = async (e, t) => {
    try {
      let { includeFullData: r = !0 } = e.request.body,
        s = await Lne("backup.export.ubiosMigrationData", r, !1);
      e.body = { success: !0, path: s };
    } catch (r) {
      e.logger.error(
        "Failed to export UbiOS migration files to persistent storage",
        r
      ),
        (e.status = 500),
        (e.body = { error: r.message });
    }
    return t();
  };
});
var UL = w((UNe, PL) => {
  Vq();
  Hq();
  sF();
  nF();
  var Mne = require("koa-compose"),
    xne = require("koa-router"),
    $ne = require("koa-json"),
    Bne = require("koa-bodyparser"),
    fe = new xne({ prefix: "/api" });
  fe.get("/apps", cF());
  fe.get("/(controllers|applications)", dF());
  fe.get("/applications/devices", pF());
  fe.post("/applications/:name/update", fF());
  fe.post("/applications/:controllerName/devices", wF());
  fe.delete("/applications/:controllerName/devices/:deviceMac", EF());
  fe.delete("/applications/:controllerName/devices", bF());
  fe.post("/firmware/update", TF());
  fe.get("/info", CF());
  fe.get("/users", NF());
  fe.get("/users/:id", du());
  fe.put("/users/:id", du());
  fe.get("/users/token/:token", du());
  fe.post("/users/migrate", OF());
  fe.post("/users/owner/transfer", LF());
  fe.post("/cloud/invite", xF());
  fe.get("/cloud/status", BF());
  fe.post("/cloud/notification", Gq);
  fe.post("/cloud/email", Bq);
  fe.get("/cloud/icecredentials", jF());
  fe.post("/cloud/fingerprintAssets", HF());
  fe.get("/cloud/fingerprintKey", KF());
  fe.put("/cloud/syncAccess", zF());
  fe.post("/cloud/revokeAccess", XF());
  fe.post("/cloud/grantAccess", ZF());
  fe.post("/cloud/mfa/reset", tL());
  fe.get("/cloud/mfa/check", sL());
  fe.post("/migrate", oL());
  fe.delete("/migrate", uL());
  fe.post("/setup", pL());
  fe.post("/permissions/:appName", fL());
  fe.post("/analytics/log", yL());
  fe.post("/uid/grant", gL());
  fe.post("/uid/revoke", SL());
  fe.get("/system", _L());
  fe.get("/twilioToken/:identities", vL());
  fe.get("/support/generate", DL());
  fe.post("/notifications", rF);
  fe.delete("/notifications/:notificationId", oF);
  fe.post("/ubios-migration/export", RL());
  PL.exports = Mne([$ne(), Bne(), fe.routes(), fe.allowedMethods()]);
});
var kL,
  OL,
  qL = x(() => {
    (kL = g(require("handoff"))),
      (OL = ({ ttl: e }) => (0, kL.publish)("sharedToken.create", e));
  });
var FL,
  LL,
  ML = x(() => {
    (FL = g(require("handoff"))),
      (LL = async (e = {}, t) => (
        await (0, FL.publish)("homeKit.deviceAction", {
          action: t,
          payload: e,
        }),
        { success: !0 }
      ));
  });
var xL,
  $L,
  BL = x(() => {
    (xL = g(require("handoff"))),
      ($L = async ({ token: e }) => {
        if (!e) throw new Error("No token specified");
        return await (0, xL.publish)("sharedToken.revoke", e), { success: !0 };
      });
  });
var VL,
  jL,
  GL = x(() => {
    (VL = g(require("handoff"))),
      (jL = async (e) => {
        let { message: t, options: r } = e;
        return await (0, VL.publish)("cloud.sendEmail", t, r), { success: !0 };
      });
  });
var HL,
  WL,
  KL = x(() => {
    (HL = g(require("handoff"))),
      (WL = async (e) => {
        let {
          app: t,
          appPrefix: r,
          collapseKey: s,
          message: a,
          ssoIds: o,
          imageToUpload: n,
          options: i,
        } = e;
        return (
          await (0, HL.publish)(
            "cloud.sendPushNotification",
            {
              app: t,
              appPrefix: r,
              ssoIds: o,
              message: a,
              collapseKey: s,
              imageToUpload: n,
            },
            i
          ),
          { success: !0 }
        );
      });
  });
var JL = w((MNe, zL) => {
  var { publish: YL } = require("handoff"),
    { getFWApiToken: Vne, getFWReleaseChannel: jne } = H();
  zL.exports = async (e, t = !1) => {
    let r = await YL("system.info", t),
      s = await YL("system.getFeaturesToExpose");
    return B(v({}, r), {
      firmware: { token: await Vne(), releaseChannel: await jne() },
      features: s,
    });
  };
});
var QL = w((xNe, XL) => {
  var { publish: Gne } = require("handoff");
  XL.exports = async (e) => {
    let { email: t, app: r, roles: s, resend: a } = e;
    return {
      user: await Gne("uum.inviteUser", {
        email: t,
        app: r,
        roles: s,
        resend: a,
      }),
    };
  };
});
var eM = w(($Ne, ZL) => {
  var { publish: Hne } = require("handoff");
  ZL.exports = async (e) => Hne("cloud.status");
});
var rM = w((BNe, tM) => {
  var { publish: Wne } = require("handoff");
  tM.exports = async ({ sources: e }) =>
    await Wne("applications.deviceList.get", e);
});
var aM = w((VNe, sM) => {
  var { publish: Kne } = require("handoff");
  sM.exports = async (e) => Kne("uum.getUsers");
});
var nM = w((jNe, oM) => {
  var { publish: Yne } = require("handoff");
  oM.exports = async (e) => Yne("auth.getUser", e);
});
var cM = w((GNe, iM) => {
  var { publish: zne } = require("handoff");
  iM.exports = async (e) => {
    if (e) return zne("auth.getUserByToken", e);
    throw new Error("no token provided");
  };
});
var dM = w((HNe, uM) => {
  var { publish: Jne } = require("handoff");
  uM.exports = async (e) => Jne("uum.migrateUser", e);
});
var pM = w((WNe, lM) => {
  var { publish: Xne } = require("handoff");
  lM.exports = async (e) => {
    let { application: t, deviceMac: r } = e;
    return await Xne("applications.deviceList.remove", t, r), { success: !0 };
  };
});
var fM = w((KNe, mM) => {
  var { publish: Qne } = require("handoff");
  mM.exports = async (e) => {
    let { notificationId: t } = e;
    return await Qne("notifications.remove", t), { success: !0 };
  };
});
var yM = w((YNe, hM) => {
  var { publish: Zne } = require("handoff");
  hM.exports = async (e) => {
    let { userId: t } = e;
    return await Zne("uum.removeUser", t), { success: !0 };
  };
});
var gM = w((zNe, wM) => {
  var { publish: eie } = require("handoff"),
    { ValidationError: tie } = (se(), me),
    { devicesUpdateWithApplicationSchema: rie } = (mn(), Ip);
  wM.exports = async (e) => {
    let t = rie.safeParse(e);
    if (!t.success) throw new tie(t.error);
    let { application: r, devices: s } = e;
    return await eie("applications.deviceList.update", r, s), { success: !0 };
  };
});
var SM = w((JNe, EM) => {
  var { publish: sie } = require("handoff");
  EM.exports = async (e) => sie("system.notify", e);
});
var _M = w((XNe, bM) => {
  var { publish: aie } = require("handoff");
  bM.exports = async (e) => (
    await aie("uum.updatePermissionsManifest", e.name, e.roles), { success: !0 }
  );
});
var IM = w((QNe, TM) => {
  var { publish: oie } = require("handoff");
  TM.exports = async (e) => {
    let { userId: t, app: r, roles: s } = e;
    return await oie("uum.updateRoles", t, r, s), { success: !0 };
  };
});
var vM = w((ZNe, AM) => {
  var { publish: nie } = require("handoff");
  AM.exports = async ({ mac: e }) => (
    await nie("stackable.adoptSecondary", e), { success: !0 }
  );
});
var DM = w((eRe, CM) => {
  var { publish: iie } = require("handoff");
  CM.exports = async ({ mac: e }) => (
    await iie("stackable.unadoptSecondary", e), { success: !0 }
  );
});
var OM = w((nRe, kM) => {
  qL();
  ML();
  BL();
  GL();
  KL();
  var cie = require("koa-compose"),
    uie = require("koa-router"),
    die = require("@ubnt/ucp4"),
    { publish: NM, subscribe: RM, unsubscribe: lie } = require("handoff"),
    { takeEvery: pu } = require("redux-saga/effects"),
    { ValidationError: pie } = (se(), me),
    PM = {
      info: JL(),
      inviteUser: QL(),
      getCloudStatus: eM(),
      getApplicationDeviceList: rM(),
      getUsers: aM(),
      getUserById: nM(),
      getUserByToken: cM(),
      migrateUser: dM(),
      removeApplicationDevice: pM(),
      removeNotification: fM(),
      removeUser: yM(),
      updateApplicationDeviceList: gM(),
      updateInfo: SM(),
      updatePermissions: _M(),
      updateUserRoles: IM(),
      adoptStackable: vM(),
      unadoptStackable: DM(),
      createSharedToken: OL,
      revokeSharedToken: $L,
      sendEmail: jL,
      sendPushNotification: WL,
    },
    {
      CONSOLE_LOCATION_CHANGED: mie,
      CONSOLE_NAME_CHANGED: fie,
      CONSOLE_TIMEZONE_CHANGED: hie,
      SETUP_STARTED: yie,
      SETUP_CANCELED: wie,
      SETUP_COMPLETED: UM,
      UPDATE_DEVICE_SETTINGS: gie,
      UPDATE_DEVICE_STATE: Eie,
      UPDATE_APP: Sie,
      UPDATE_FIRMWARE_CHANNELS: bie,
      UPDATE_FIRMWARE_API_TOKEN: _ie,
      UPDATE_SYSTEM_IS_STACKED: Tie,
    } = Z(),
    Iie = (e) => {
      let t = PM[e];
      return t || (e.startsWith("homeKit.") ? ((t = LL), t) : null);
    };
  kM.exports = (e, t, r) => {
    let s = new Set(),
      a = async (u, p) => {
        let l = Iie(u.action);
        if (!l) {
          t.warn(`received unsupported ${u.action} request`);
          try {
            return u.respond(null, `Unsupported action: ${u.action}`, 2);
          } catch (f) {
            t.error(f);
            return;
          }
        }
        try {
          t.debug(`Received ${u.action} request:`, u.body);
          let f = await l(u.body, u.action);
          await u.respond(f);
        } catch (f) {
          let m = null;
          f instanceof pie
            ? ((m = f.validationErrors),
              t.error(
                `UCP action ${u.action} failed due to validation errors:`,
                m
              ))
            : ((m = f.message), t.error(`UCP action ${u.action} failed: ${m}`));
          try {
            await u.respond({}, m, 1);
          } catch (E) {
            t.error(E);
          }
        }
      },
      o = (u) => {
        let p = new die(u);
        s.add(p),
          p.on("error", (l) => t.error(l)),
          p.once("close", () => s.delete(p)),
          p.on("request", (l) => a(l, p, t));
      },
      n = new uie({ prefix: "/ipc" });
    n.get("/", async (u, p) => {
      if (!u.websocket) return p();
      t.info("new UCP4 ipc connection"), o(u.websocket);
    });
    let i = (u, p) => {
        s.forEach((l) =>
          l
            .sendEvent(u, p)
            .catch((f) =>
              t.info(`Failed to send event ${u} to connection error`)
            )
        );
      },
      c = [
        function* () {
          yield pu(UM, (u) => {
            i("setup", u.payload);
          });
        },
        function* () {
          yield pu(
            [mie, fie, hie, gie, yie, wie, UM, bie, _ie, Tie],
            async () => i("infoChanged", await PM.info(null, !0))
          );
        },
        function* () {
          yield pu([Eie], async ({ payload: u }) => {
            u && i("deviceStateChanged", u);
          });
        },
        function* () {
          yield pu([Sie], async ({ payload: u }) => {
            "name" in u &&
              "updates" in u &&
              "installState" in u.updates &&
              i("appStateChanged", {
                app: u.name,
                installState: u.updates.installState,
              });
          });
        },
      ],
      d = [
        RM("uum.userChanged", (u, p) => i("userChanged", { user: p })),
        RM("cloud.clientData", (u, p) => i("clientData", p)),
      ];
    return (
      c.forEach((u) => NM("redux.saga.add", u)),
      r(async () => {
        c.forEach((u) =>
          NM("redux.saga.remove", u).catch((p) => {
            t.error("Failed to redux.saga.remove:", p);
          })
        ),
          d.forEach((u) => lie(u));
      }),
      cie([n.routes()])
    );
  };
});
var FM = w((iRe, qM) => {
  var { publish: Aie } = require("handoff");
  qM.exports = async (e, t) => {
    try {
      await Aie("messageBox.pub", e.request.body),
        (e.body = { meta: { rc: "ok" }, data: null });
    } catch (r) {
      e.logger.error("error publishing to messagebox", r),
        (e.status = 500),
        (e.body = { meta: { rc: "error" }, data: r.message });
    }
    return t();
  };
});
var MM = w((cRe, LM) => {
  var { publish: vie } = require("handoff");
  LM.exports = async (e, t) => {
    let r = (e.params && e.params.token) || null;
    try {
      (r = await vie("messageBox.sub", e.request.body, r)),
        (e.body = { meta: { rc: "ok" }, data: { token: r } });
    } catch (s) {
      e.logger.error("error subscribing to messagebox", s),
        (e.status = 500),
        (e.body = { meta: { rc: "error" }, data: s.message });
    }
    return t();
  };
});
var $M = w((uRe, xM) => {
  var { publish: Cie } = require("handoff");
  xM.exports = async (e, t) => {
    let r = (e.params && e.params.token) || null;
    try {
      (r = await Cie("messageBox.unsub", r)),
        (e.body = { meta: { rc: "ok" }, data: { token: r } });
    } catch (s) {
      e.logger.error("error unsubscribing from messagebox", s),
        (e.status = 500),
        (e.body = { meta: { rc: "error" }, data: s.message });
    }
    return t();
  };
});
var VM = w((dRe, BM) => {
  var { publish: Die } = require("handoff");
  BM.exports = async (e, t) => {
    let { token: r } = e.params,
      s = e.query.count
        ? e.query.count > 1e3
          ? 1e3
          : e.query.count < 1
          ? 1
          : e.query.count
        : 100;
    try {
      let a = (await Die("messageBox.poll", r, s)).map(JSON.parse);
      e.body = { meta: { rc: "ok" }, data: a };
    } catch (a) {
      e.logger.error("error polling from messagebox", a),
        (e.status = 500),
        (e.body = { meta: { rc: "error" }, data: a.message });
    }
    return t();
  };
});
var HM = w((lRe, GM) => {
  var { publish: jM } = require("handoff");
  GM.exports = async (e, t) => {
    let { token: r } = e.params,
      s = e.query.count
        ? e.query.count > 1e3
          ? 1e3
          : e.query.count < 1
          ? 1
          : e.query.count
        : 100;
    try {
      let a = (await jM("messageBox.poll", r, s)).map(JSON.parse);
      a.length || (a = [JSON.parse(await jM("messageBox.longPoll", r))]),
        (e.body = { meta: { rc: "ok" }, data: a });
    } catch (a) {
      e.logger.error("error polling from messagebox", a),
        (e.status = 500),
        (e.body = { meta: { rc: "error" }, data: a.message });
    }
    return t();
  };
});
var YM = w((pRe, KM) => {
  var Nie = require("ajv"),
    ao = new Nie(),
    Rie = {
      $id: "https://message-box.uidev.tools/schemas/defs.json",
      $schema: "http://json-schema.org/draft-07/schema#",
      definitions: {
        stringCondition: {
          type: "object",
          minProperties: 1,
          maxProperties: 10,
          patternProperties: {
            "^[A-Za-z0-9-_:.]{1,256}$": {
              type: "array",
              maxItems: 10,
              minItems: 1,
              items: {
                type: "string",
                minLength: 1,
                maxLength: 256,
                pattern: "^[A-Za-z0-9-_:.]*$",
              },
            },
          },
        },
        numericCondition: {
          type: "object",
          minProperties: 1,
          maxProperties: 10,
          patternProperties: {
            "^[A-Za-z0-9-_:.]{1,256}$": {
              type: "array",
              maxItems: 10,
              minItems: 1,
              items: { type: "number", minimum: 0 },
            },
          },
        },
        booleanCondition: {
          type: "object",
          minProperties: 1,
          maxProperties: 10,
          patternProperties: {
            "^[A-Za-z0-9-_:.]{1,256}$": {
              type: "array",
              maxItems: 1,
              minItems: 1,
              items: { type: "boolean" },
            },
          },
        },
        timestamp: {
          type: "integer",
          description: "The timestamp in milliseconds",
          minimum: 0,
          maximum: 72581472e5,
        },
        safeString: {
          type: "string",
          description: "Safe 256 char strings.",
          minLength: 1,
          maxLength: 256,
          pattern: "^[A-Za-z-_:.*]*$",
        },
        safeObject: {
          type: "object",
          description: "Safe 256 char string:string objects",
          maxProperties: 10,
          patternProperties: {
            "^[A-Za-z0-9-_:.]{1,256}$": {
              type: "string",
              minLength: 1,
              maxLength: 256,
              pattern: "^[A-Za-z0-9-_:.]*$",
            },
          },
        },
      },
    },
    bf = {
      $id: "https://message-box.uidev.tools/schemas/conditional.json",
      $schema: "http://json-schema.org/draft-07/schema#",
      definitions: {
        conditional: {
          type: "object",
          additionalProperties: !1,
          minProperties: 1,
          maxProperties: 10,
          properties: {
            StringEquals: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/stringCondition",
            },
            StringNotEquals: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/stringCondition",
            },
            StringEqualsIgnoreCase: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/stringCondition",
            },
            StringNotEqualsIgnoreCase: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/stringCondition",
            },
            StringStartsWith: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/stringCondition",
            },
            StringStartsWithIgnoreCase: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/stringCondition",
            },
            StringNotStartsWith: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/stringCondition",
            },
            StringNotStartsWithIgnoreCase: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/stringCondition",
            },
            StringEqualsIfExists: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/stringCondition",
            },
            StringNotEqualsIfExists: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/stringCondition",
            },
            StringEqualsIgnoreCaseIfExists: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/stringCondition",
            },
            StringNotEqualsIgnoreCaseIfExists: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/stringCondition",
            },
            StringStartsWithIfExists: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/stringCondition",
            },
            StringStartsWithIgnoreCaseIfExists: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/stringCondition",
            },
            StringNotStartsWithIfExists: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/stringCondition",
            },
            StringNotStartsWithIgnoreCaseIfExists: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/stringCondition",
            },
            NumericEquals: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/numericCondition",
            },
            NumericNotEquals: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/numericCondition",
            },
            NumericLessThan: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/numericCondition",
            },
            NumericLessThanEquals: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/numericCondition",
            },
            NumericGreaterThan: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/numericCondition",
            },
            NumericGreaterThanEquals: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/numericCondition",
            },
            NumericEqualsIfExists: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/numericCondition",
            },
            NumericNotEqualsIfExists: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/numericCondition",
            },
            NumericLessThanIfExists: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/numericCondition",
            },
            NumericLessThanEqualsIfExists: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/numericCondition",
            },
            NumericGreaterThanIfExists: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/numericCondition",
            },
            NumericGreaterThanEqualsIfExists: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/numericCondition",
            },
            Bool: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/booleanCondition",
            },
          },
        },
      },
    },
    _f = {
      $id: "https://message-box.uidev.tools/schemas/payload.json",
      $schema: "http://json-schema.org/draft-07/schema#",
      definitions: {
        payload: {
          type: "object",
          description: "Payload object",
          required: ["data"],
          additionalProperties: !1,
          properties: {
            encoding: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/safeString",
            },
            contentType: {
              $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/safeString",
            },
            data: {
              anyOf: [
                { type: "string" },
                { type: "integer" },
                { type: "boolean" },
                { type: "object" },
                { type: "array" },
              ],
            },
          },
        },
      },
    };
  ao.addSchema(Rie);
  ao.addSchema(bf);
  ao.addSchema(_f);
  var WM = {
      $id: "https://i-can.uidev.tools/schemas/message.json",
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      required: ["type", "payload"],
      additionalProperties: !1,
      properties: {
        timestamp: {
          $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/timestamp",
        },
        type: {
          $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/safeString",
        },
        namespace: {
          $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/safeString",
        },
        name: {
          $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/safeString",
        },
        meta: {
          $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/safeObject",
        },
        source: {
          $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/safeObject",
        },
        principals: {
          $ref: "https://message-box.uidev.tools/schemas/defs.json#/definitions/safeObject",
        },
        payload: {
          $ref: "https://message-box.uidev.tools/schemas/payload.json#/definitions/payload",
        },
      },
    },
    Pie = Object.assign(
      {},
      {
        $id: "https://i-can.uidev.tools/schemas/conditionalSchema.json",
        $schema: "http://json-schema.org/draft-07/schema#",
      },
      bf.definitions.conditional
    );
  KM.exports = {
    schemas: { conditional: bf, payload: _f, message: WM },
    validators: {
      conditional: ao.compile(Pie),
      payload: ao.compile(_f),
      message: ao.compile(WM),
    },
  };
});
var XM = w((mRe, JM) => {
  var oo = {
    StringEquals: (e, t, r) => r.some((s) => e[t] === s),
    StringNotEquals: (e, t, r) => r.some((s) => e[t] !== s),
    StringEqualsIgnoreCase: (e, t, r) =>
      r.some((s) => e[t].toLowerCase() === s.toLowerCase()),
    StringNotEqualsIgnoreCase: (e, t, r) =>
      r.some((s) => e[t].toLowerCase() !== s.toLowerCase()),
    StringStartsWith: (e, t, r) => r.some((s) => e[t].startsWith(s)),
    StringStartsWithIgnoreCase: (e, t, r) =>
      r.some((s) => e[t].toLowerCase().startsWith(s.toLowerCase())),
    StringNotStartsWith: (e, t, r) => r.some((s) => !e[t].startsWith(s)),
    StringNotStartsWithIgnoreCase: (e, t, r) =>
      r.some((s) => !e[t].toLowerCase().startsWith(s.toLowerCase())),
    NumericEquals: (e, t, r) => r.some((s) => e[t] === s),
    NumericNotEquals: (e, t, r) => r.some((s) => e[t] !== s),
    NumericLessThan: (e, t, r) => r.some((s) => e[t] < s),
    NumericLessThanEquals: (e, t, r) => r.some((s) => e[t] <= s),
    NumericGreaterThan: (e, t, r) => r.some((s) => e[t] > s),
    NumericGreaterThanEquals: (e, t, r) => r.some((s) => e[t] >= s),
    Bool: (e, t, r) => r.some((s) => !!e[t]),
  };
  Object.keys(oo).forEach((e) => {
    oo[`${e}IfExists`] = (t, r, s) =>
      typeof t[r] != "undefined" ? oo[e](t, r, s) : !0;
  });
  oo.Null = (e, t, r) => r.some((s) => typeof e[t] == "undefined" && s);
  var zM = (e, t) =>
      Object.keys(t).every((r) =>
        Object.keys(t[r]).every((s) => (oo[r] ? oo[r](e, s, t[r][s]) : !1))
      ),
    Uie = (e, t) => e.filter((r) => zM(r, t));
  JM.exports = { check: zM, filter: Uie };
});
var tx = w((hRe, ex) => {
  var { v4: kie } = require("uuid"),
    mu = YM(),
    { check: Oie } = XM(),
    Lr = Symbol("subscriptions"),
    xs = Symbol("logger"),
    QM = Symbol("config"),
    ZM = (e) =>
      e && typeof e == "object" && !Array.isArray(e) && !(e instanceof Date),
    Tf = (e) => {
      let t = {};
      for (let r in e)
        if (ZM(e[r])) {
          let s = Tf(e[r]);
          for (let a in s) t[`${r}.${a}`] = s[a];
        } else
          Array.isArray(e[r])
            ? e[r].forEach((s, a) => {
                if (ZM(s) || Array.isArray(s)) {
                  let o = Tf(s);
                  for (let n in o) t[`${r}[${a}].${n}`] = o[n];
                } else t[`${r}[${a}]`] = s;
              })
            : (t[r] = e[r]);
      return t;
    };
  ex.exports = class {
    constructor(t, r) {
      (this[Lr] = {}),
        (this[xs] = r),
        (this[QM] = t),
        setInterval(() => this.reap(), t.subscriptionReaperInterval);
    }
    reap() {
      let t = this[Lr],
        r = this[xs],
        { maxSubscriptionBacklog: s } = this[QM];
      r.debug("Reaping subscriptions backlog");
      for (let a in t) {
        let o = t[a],
          n = o.queue.length;
        n > s &&
          (r.warn("Reaping messages", {
            token: o.token,
            queueSize: n,
            maxBacklogSize: s,
          }),
          r.debug({ conditonal: o.conditional }),
          this.unsub(a));
      }
    }
    pub(t) {
      let r = this[Lr],
        s = this[xs];
      if ((s.debug("pub", t), !mu.validators.message(t)))
        throw new Error(JSON.stringify(mu.validators.message.errors));
      let a = Tf(t);
      for (let o in r) {
        let n = r[o];
        if (Oie(a, n.conditional))
          if (n.listener)
            try {
              n.listener.send(JSON.stringify(t));
            } catch (i) {
              s.error("Failed to publish to Listener", i),
                n.queue.push(JSON.stringify(t));
            }
          else if (n.poll)
            try {
              n.poll(JSON.stringify(t)), delete n.poll;
            } catch (i) {
              s.error("Failed to publish to LongPoller", i),
                n.queue.push(JSON.stringify(t));
            }
          else n.queue.push(JSON.stringify(t));
      }
      return !0;
    }
    sub(t, r) {
      let s = this[Lr],
        a = this[xs];
      if (!mu.validators.conditional(t))
        throw new Error(JSON.stringify(mu.validators.conditional.errors));
      if (((r = r || kie()), s[r]))
        throw new Error("Subscription already exists for provided token");
      return (
        (s[r] = { conditional: t, queue: [] }),
        a.info(`Subscribe token: ${r}`),
        a.debug({ conditional: t }),
        r
      );
    }
    unsub(t) {
      let r = this[Lr],
        s = this[xs];
      if ((s.info("Unsubscribe token:", t), r[t] && r[t].listener))
        try {
          r[t].listener.close();
        } catch (a) {
          s.error("Failed to close Listener during unsub", a);
        }
      return delete r[t], !0;
    }
    poll(t, r) {
      let s = this[Lr];
      if ((this[xs].debug("poll", t, r), !t || typeof t != "string" || !s[t]))
        throw new Error("Invalid token");
      if (s[t].listener)
        throw new Error("Already listening for subscription, wasted poll");
      return s[t].queue.splice(0, r);
    }
    longPoll(t) {
      let r = this[Lr];
      if ((this[xs].debug("longpoll", t), !t || typeof t != "string" || !r[t]))
        throw new Error("Invalid token");
      if (r[t].listener)
        throw new Error("Already listening for subscription, wasted poll");
      if (r[t].poll)
        throw new Error("Already polled for subscription, wasted poll");
      return new Promise((a) => {
        r[t].poll = a;
      });
    }
    flush(t) {
      let r = this[Lr],
        s = this[xs],
        a = r[t].queue;
      (r[t].queue = []),
        s.debug("flush", t),
        a.forEach((o) => {
          try {
            r[t].listener.send(o);
          } catch (n) {
            s.error("Failed to publish to Listener", n), r[t].queue.push(o);
          }
        });
    }
    listen(t, r) {
      let s = this[Lr];
      if (!t || typeof t != "string" || !s[t]) throw new Error("Invalid token");
      if (s[t].listener) throw new Error("One Listener per Subscription");
      (s[t].listener = r), this.flush(t);
    }
    unlisten(t) {
      let r = this[Lr];
      r[t] && delete r[t].listener;
    }
  };
});
var ax = w((yRe, sx) => {
  var qie = require("koa-compose"),
    Fie = require("koa-router"),
    Lie = require("koa-json"),
    Mie = require("koa-bodyparser"),
    { publish: fu, subscribe: no, unsubscribe: xie } = require("handoff"),
    { takeEvery: rx } = require("redux-saga/effects"),
    { UPDATE_DEVICE_STATE: $ie, UPDATE_APP: Bie } = Z(),
    io = { pub: FM(), sub: MM(), unsub: $M(), poll: VM(), longpoll: HM() },
    Vie = tx();
  sx.exports = (e, t, r) => {
    let s = new Vie(e.messageBox, t),
      a = new Fie({ prefix: "/mb" });
    a.get("/:token", (i, c) => {
      if (!i.websocket) return c();
      let d = i.websocket;
      try {
        s.listen(i.params.token, d),
          t.info("new ws connection", i.params.token);
      } catch (u) {
        d.close(), t.error(u);
      }
      d.on("message", (u) => {
        try {
          s.pub(JSON.parse(u));
        } catch (p) {
          i.logger.error("ws publish error", p),
            d.send({ meta: { rc: "error" }, data: p.message });
        }
      }),
        d.on("close", (u, p) => {
          i.logger.info("ws closed"), s.unlisten(i.params.token);
        }),
        d.on("error", (u) => {
          t.error("Sub WS error", u), s.unlisten(i.params.token);
        });
    }),
      a
        .post("/pub", io.pub)
        .post("/sub/:token?", io.sub)
        .get("/unsub/:token", io.unsub)
        .post("/unsub/:token", io.unsub)
        .get("/poll/:token", io.poll)
        .get("/longpoll/:token", io.longpoll);
    let o = [
        function* () {
          yield rx(Bie, async ({ payload: i }) => {
            "name" in i &&
              "updates" in i &&
              "installState" in i.updates &&
              fu("messageBox.pub", {
                type: "event",
                namespace: "common:controller",
                name: "application_state_changed",
                payload: {
                  data: { app: i.name, installState: i.updates.installState },
                },
              });
          });
        },
        function* () {
          yield rx($ie, async ({ payload: i }) => {
            fu("messageBox.pub", {
              type: "event",
              namespace: "common:controller",
              name: "console_state_changed",
              payload: { data: { state: i } },
            });
          });
        },
      ],
      n = [
        no("messageBox.pub", async (i, c) => s.pub(c)),
        no("messageBox.sub", async (i, c, d) => s.sub(c, d)),
        no("messageBox.listen", async (i, c, d) => s.listen(c, d)),
        no("messageBox.unsub", async (i, c) => s.unsub(c)),
        no("messageBox.poll", async (i, c, d) => s.poll(c, d)),
        no("messageBox.longPoll", async (i, c) => s.longPoll(c)),
      ];
    return (
      r.use(qie([Lie(), Mie(), a.routes()])),
      o.forEach((i) => fu("redux.saga.add", i)),
      async () => {
        o.forEach((i) =>
          fu("redux.saga.remove", i).catch((c) => {
            t.error("Failed to redux.saga.remove:", c);
          })
        ),
          n.forEach((i) => xie(i));
      }
    );
  };
});
var ix = w((ERe, nx) => {
  Um();
  xq();
  var jie = require("http"),
    If = require("koa"),
    ox = require("koa-mount"),
    Gie = require("koa-compose"),
    Hie = require("koa-helmet"),
    Af = require("bluebird"),
    Wie = require("ws"),
    { unsubscribe: Kie } = require("handoff"),
    Yie = UL(),
    zie = OM(),
    Jie = ax(),
    Xie = as();
  nx.exports = async (e, t) => {
    let r = [],
      s = (y) => r.push(y),
      a = new If(),
      o = new If(),
      n = new If();
    a.use(async (y, h) => ((y.logger = t), h())),
      o
        .use(Mq(e, t.wrap("ipc.homeKitProxy"), s))
        .use(Hie())
        .use(ox(a))
        .use(async (y, h) => {
          let S = Date.now();
          await h();
          let D = Date.now() - S;
          (y.responseTime = D), y.set("X-Response-Time", `${D}ms`);
          let A = `${D}ms ${y.status} ${y.method} ${
            (y.req && y.req.oldPath) || y.url
          }`;
          D > 1e3 || y.status >= 400 ? y.logger.warn(A) : y.logger.verbose(A);
        })
        .use(Wc(e, t))
        .use(Yie),
      n.use(ox(a)).use(zie(e, t.wrap("ipc.ucp4"), s));
    let i = [Xie(t, "messageBox", Jie(e, t.wrap("messageBox"), a))],
      c = o.callback(),
      d = Gie(n.middleware),
      u = (y, h = {}) => {
        let S = n.createContext(y);
        return Object.assign(S, h), d(S);
      };
    await Af.all(i);
    let p = e.ports.ipc,
      l = jie.createServer(c).listen(p, "127.0.0.1", (y) => {
        if (y) return t.error(y);
        t.info(`IPC Server is now listening on port ${p}`);
      }),
      f = (y, h) => {
        y.on("error", (S) => {
          t.error("WS Socket Error", S);
        }),
          u(h, { websocket: y, path: h.url }).catch((S) => {
            t.error("WS Handler Error", S);
          });
      };
    l.on("upgrade", (y, h, S) => {
      m.handleUpgrade(y, h, S, (D) => {
        (D.request = y), m.emit("connection", D, y);
      });
    });
    let m = new Wie.Server({ noServer: !0 });
    m.on("connection", f);
    let E = [];
    return async () => (
      l.removeAllListeners(),
      l.close(),
      m.close(),
      E.forEach((y) => Kie(y)),
      await Af.map(r, (y) => y()),
      (r.length = 0),
      Af.map(i, (y) => y())
    );
  };
});
var cx,
  ux,
  dx,
  lx,
  px,
  mx,
  hu,
  fx,
  hx,
  yx,
  wx,
  gx,
  Ex,
  Sx,
  bx,
  _x,
  Tx = x(() => {
    (cx = g(require("redux"))),
      (ux = g($u())),
      (dx = g(ju())),
      (lx = g(Gu())),
      (px = g(Hu())),
      (mx = g(Wu())),
      (hu = g(Ku())),
      (fx = g(nd())),
      (hx = g(id())),
      (yx = g(cd())),
      (wx = g(ud()));
    dd();
    (gx = g(ld())),
      (Ex = g(pd())),
      (Sx = g(md())),
      (bx = g(fd())),
      (_x = (0, cx.combineReducers)({
        apps: ux.default.reducer,
        cloud: px.default.reducer,
        firmware: fx.default.reducer,
        jwt: hx.default.reducer,
        settings: wx.default.reducer,
        system: Ex.default.reducer,
        unadoptedUnifiOSDevices: hu.default.unifiOSDevicesReducer,
        unadoptedWirelessDevices: hu.default.wirelessDevicesReducer,
        consolesOnSameLocalNetwork: hu.default.unifiConsolesReducer,
        backup: dx.default.reducer,
        topology: Sx.default.reducer,
        devices: mx.default.reducer,
        clients: lx.default.reducer,
        userData: bx.default.reducer,
        stackableConsole: gx.default.reducer,
        secondaryConsoles: yx.default.reducer,
        speedTest: $y,
      }));
  });
var Ax = w((TRe, Ix) => {
  Jo();
  var Qie = require("fs-extra"),
    { set: Bn, get: co } = require("lodash"),
    Zie = ({ initialState: e, migratedKeys: t }) => {
      let r = co(e, "settings.sendDiagnostics");
      return (
        typeof r == "boolean" &&
          (Bn(e, "settings.sendDiagnostics", r ? "full" : "anonymous"),
          t.add("settings")),
        { initialState: e, migratedKeys: t }
      );
    },
    ece = ({ initialState: e, migratedKeys: t }) => {
      let r = co(e, "settings.autoBackupEnabled"),
        s = co(e, "settings.backupEnabled");
      return (
        typeof r == "undefined" &&
          typeof s == "boolean" &&
          (Bn(e, "settings.autoBackupEnabled", s), t.add("settings")),
        { initialState: e, migratedKeys: t }
      );
    },
    tce = ({ initialState: e, migratedKeys: t }) =>
      co(e, "settings")
        ? (co(e, "settings.internetRequired") === void 0 &&
            (Bn(e, "settings.internetRequired", !0), t.add("settings")),
          { initialState: e, migratedKeys: t })
        : { initialState: e, migratedKeys: t },
    rce = async (e, { initialState: t, migratedKeys: r }) => {
      let s = co(t, "settings.timezone");
      if (!s) return { initialState: t, migratedKeys: r };
      if ((await Zr()).has(s)) return { initialState: t, migratedKeys: r };
      let o = (await Qie.readFile("/etc/timezone", "utf-8")).trim();
      return (
        s !== o &&
          (e.info(`Timezone mismatch found, changed from "${s}" to "${o}"`),
          Bn(t, "settings.timezone", o),
          Bn(t, "settings.skipTimezoneAutoUpdate", !1),
          r.add("settings")),
        { initialState: t, migratedKeys: r }
      );
    };
  Ix.exports = async (e, t) => {
    let r = { initialState: t, migratedKeys: new Set() };
    return (r = Zie(r)), (r = ece(r)), (r = tce(r)), (r = await rce(e, r)), r;
  };
});
var Nx = w((ARe, Dx) => {
  var vx = require("fs-extra"),
    sce = require("debounce-promise"),
    Cx = require("js-yaml");
  Dx.exports = class {
    constructor(t, r) {
      (this.key = t),
        (this.file = r),
        (this.save = sce((s) => this._save(s), 250));
    }
    async read() {
      try {
        let t = await vx.readFile(this.file);
        return Cx.safeLoad(t);
      } catch(eee) {
        throw new Error('FFF' + this.file + eee)
      }
    }
    async _save(t) {
      return (
        await vx.writeFile(this.file, Cx.safeDump(t, { skipInvalid: !0 })), t
      );
    }
  };
});
var Ux = w((DRe, Px) => {
  var ace = require("path"),
    { set: oce, get: Rx, isEqual: nce } = require("lodash"),
    vRe = require("js-yaml"),
    CRe = require("fs-extra"),
    ice = Ax(),
    cce = Nx(),
    { getIsSetupFromConfigFile: uce } = (Ue(), We);
  Px.exports = async (e, t) => {
    let r = [
        "settings",
        "cloud",
        "firmware",
        "jwt",
        "apps.userPrefs",
        "apps.availableUpdates",
        "backup",
        "stackableConsole",
      ].map((o) => new cce(o, ace.join(e.configPath, `${o}.yaml`))),
      s = {};
    await Promise.all(
      r.map(async (o) => {
        try {
          let n = await o.read();
          oce(s, o.key, n);
        } catch (n) {
          (await uce(e.configPath)) &&
            t.error(`Unable to read ${o.file}: ${n.message}`, n.mark);
        }
      })
    );
    try {
      let { migratedKeys: o } = await ice(t, s);
      r.filter(({ key: n }) => o.has(n)).forEach((n) => {
        n.save(s[n.key])
          .then(() => {
            t.info(`migrated ${n.file}`);
          })
          .catch((i) => {
            t.error(`unable to migrate ${n.file}`, i);
          });
      });
    } catch (o) {
      t.error("Error migrating initial state", o);
    }
    return {
      middleware: (o) => (n) => (i) => {
        let c = o.getState(),
          d = n(i),
          u = o.getState();
        return (
          r.forEach((p) => {
            let l = Rx(c, p.key),
              f = Rx(u, p.key);
            nce(l, f) ||
              p
                .save(f)
                .then(() => {
                  t.debug(`saved ${p.file}`);
                })
                .catch((m) => {
                  t.error(`unable to save ${p.file}`, m), t.warn(f);
                });
          }),
          d
        );
      },
      initialState: s,
    };
  };
});
var Ox = w((NRe, kx) => {
  var dce = require("jsondiffpatch").create({}),
    { STATE_DIFF: lce } = Z(),
    pce = [
      "settings",
      "system",
      "firmware",
      "apps",
      "unadoptedUnifiOSDevices",
      "features",
      "backup",
      "topology",
      "devices",
      "userData",
      "secondaryConsoles",
    ];
  kx.exports = (e) => (t) => (r) => {
    let s = e.getState(),
      a = t(r),
      o = e.getState(),
      n = dce.diff(s, o);
    return (
      n &&
        Object.keys(n)
          .filter((c) => pce.includes(c))
          .forEach((c) => {
            let d = o[c],
              u = s[c];
            e.dispatch({
              type: lce,
              payload: { key: c, update: d },
              previous: u,
            });
          }),
      a
    );
  };
});
var Fx = w((RRe, qx) => {
  var { throttle: mce, isEqual: fce } = require("lodash"),
    { publish: vf, subscribe: uo, unsubscribe: hce } = require("handoff"),
    { takeEvery: Cf } = require("redux-saga/effects"),
    {
      STATE_DIFF: yce,
      SPEED_TEST_FAILED: wce,
      SPEED_TEST_FINISHED: gce,
      SPEED_TEST_RUNNING: Ece,
    } = Z(),
    Sce = 1e3;
  qx.exports = (e, t) => {
    let r = new Map(),
      s = new Map(),
      a = (l, f) => {
        r.set(l, f);
      },
      o = (l) => {
        r.forEach((f, m) => {
          f.id === l.id && r.set(m, l);
        });
      },
      n = (l) => {
        r.delete(l);
      },
      i = (l, f) => {
        s.set(l, f);
      },
      c = (l) => {
        s.delete(l);
      },
      d = {
        userData: (l, f) => {
          let { key: m, update: E } = l;
          r.forEach((y, h) => {
            if (!y) return;
            let S = y.sso_uuid || y.uid_sso_id || y.id,
              D = f[S],
              A = E[S];
            fce(A, D) ||
              h.send(JSON.stringify({ type: "DEVICE_STATE_CHANGED", [m]: A }));
          });
        },
        apps: (l) => {
          r.forEach(async (f, m) => {
            let E = await vf("apps.getNormalized", f);
            m.send(JSON.stringify({ type: "DEVICE_STATE_CHANGED", apps: E }));
          });
        },
        firmware: (l) => {
          let { key: f, update: m } = l;
          r.forEach((E, y) => {
            y.send(JSON.stringify({ type: "DEVICE_STATE_CHANGED", [f]: m }));
          });
        },
        settings: (l) => {
          let { key: f, update: m } = l;
          r.forEach((E, y) => {
            y.send(JSON.stringify({ type: "DEVICE_STATE_CHANGED", [f]: m }));
          });
        },
        system: (l) => {
          let { key: f, update: m } = l;
          r.forEach((E, y) => {
            y.send(JSON.stringify({ type: "DEVICE_STATE_CHANGED", [f]: m }));
          });
        },
        unadoptedUnifiOSDevices: (l) => {
          let { key: f, update: m } = l;
          r.forEach((E, y) => {
            y.send(JSON.stringify({ type: "DEVICE_STATE_CHANGED", [f]: m }));
          });
        },
        backup: (l) => {
          let { key: f, update: m } = l;
          r.forEach((E, y) => {
            y.send(
              JSON.stringify({ type: "UPDATE_DEVICE_RESTORE_PROGRESS", [f]: m })
            );
          });
        },
        topology: (l) => {
          let { key: f, update: m } = l;
          r.forEach((E, y) => {
            y.send(JSON.stringify({ type: "DEVICE_STATE_CHANGED", [f]: m }));
          });
        },
        devices: (l) => {
          let { key: f, update: m } = l;
          r.forEach((E, y) => {
            y.send(JSON.stringify({ type: "DEVICE_STATE_CHANGED", [f]: m }));
          });
        },
        features: (l) => {
          let { key: f, update: m } = l;
          r.forEach((E, y) => {
            y.send(JSON.stringify({ type: "DEVICE_STATE_CHANGED", [f]: m }));
          });
        },
        secondaryConsoles: (l) => {
          let { key: f, update: m } = l;
          r.forEach((E, y) => {
            y.send(JSON.stringify({ type: "DEVICE_STATE_CHANGED", [f]: m }));
          });
        },
      };
    Object.keys(d).forEach((l) => {
      d[l] = mce(d[l], Sce, { leading: !0, trailing: !0 });
    });
    let u = [
        uo("redux.wsUpdates.count", (l) => r.size),
        uo("redux.wsUpdates.open", (l, f, m) => a(f, m)),
        uo("redux.wsUpdates.close", (l, f) => n(f)),
        uo("uum.userChanged", (l, f) => o(f)),
        uo("redux.wsUpdates.speedTest.open", (l, f, m) => i(f, m)),
        uo("redux.wsUpdates.speedTest.close", (l, f) => c(f)),
      ],
      p = [
        function* () {
          yield Cf(yce, ({ payload: l, previous: f }) => {
            d[l.key](l, f);
          });
        },
        function* () {
          yield Cf(Ece, ({ payload: l }) => {
            s.forEach((f, m) => {
              try {
                m.send(JSON.stringify(l));
              } catch (E) {
                t.error("Failed to send speed test data:", E);
              }
            });
          });
        },
        function* () {
          yield Cf([wce, gce], ({ payload: l }) => {
            s.forEach((f, m) => {
              try {
                m.send(JSON.stringify(l)), m.close();
              } catch (E) {
                t.error("Failed to send speed test data:", E);
              }
            });
          });
        },
      ];
    return (
      p.forEach((l) => vf("redux.saga.add", l)),
      async () => {
        u.forEach((l) => hce(l)),
          p.forEach((l) =>
            vf("redux.saga.remove", l).catch((f) => {
              t.error("Failed to redux.saga.remove:", f);
            })
          );
      }
    );
  };
});
var xx = w((URe, Mx) => {
  Tx();
  var Lx = require("bluebird"),
    { subscribe: yu, unsubscribe: bce } = require("handoff"),
    { createStore: _ce, applyMiddleware: Tce } = require("redux"),
    Ice = require("redux-saga").default,
    Ace = cf(),
    vce = Ux(),
    Cce = Ox(),
    Dce = Fx(),
    Nce = as();
  Mx.exports = async (e, t) => {
    let r = new Map(),
      s = await vce(e, t);
    s.initialState.settings && delete s.initialState.settings.setupStartTime;
    let a = Ice(),
      o = _ce(_x, s.initialState, Tce(a, s.middleware, Cce, Ace(t))),
      n = (u) => {
        r.set(u, a.run(u));
      },
      i = (u) => {
        let p = r.get(u);
        p && (p.cancel(), r.delete(u));
      },
      c = [
        yu("redux.select", (u, p, ...l) => p(o.getState(), ...l)),
        yu("redux.dispatch", (u, p, l) =>
          typeof p == "function"
            ? o.dispatch(p)
            : o.dispatch({ type: p, payload: l })
        ),
        yu("redux.saga.add", (u, p) => n(p)),
        yu("redux.saga.remove", (u, p) => i(p)),
      ],
      d = [Nce(t, "redux.wsUpdates", Dce(e, t.wrap("redux.wsUpdates")))];
    return (
      await Lx.all(d),
      async () => {
        await Lx.map(d, (u) => u()), c.forEach((u) => bce(u));
      }
    );
  };
});
var Vx = w((kRe, Bx) => {
  var { subscribe: Rce, unsubscribe: Pce } = require("handoff"),
    $s,
    $x;
  try {
    $s = require("sd-notify");
  } catch (e) {
    ($x = e), ($s = null);
  }
  Bx.exports = async (e, t) => {
    let s = [
      Rce(
        "app.ready",
        async () => {
          if ($s) {
            t.info("sd-notify ready()"), $s.ready();
            let a = $s.watchdogInterval();
            if (a > 0) {
              t.info(`Starting Watchdog mode (interval = ${a}ms)`);
              let o = Math.floor(a / 2);
              $s.startWatchdogMode(o);
            }
          } else t.warn("sd-notify not available"), t.warn($x);
        },
        100
      ),
    ];
    return async () => {
      s.forEach((a) => Pce(a));
      try {
        $s && $s.stopWatchdogMode();
      } catch (a) {
        t.error(a);
      }
    };
  };
});
var Df = w((ORe, jx) => {
  var Uce = require("set-cookie-parser");
  jx.exports = (e, t) =>
    Uce.parse({ headers: e.headers.raw() })
      .filter((r) => r.name === t)
      .map((r) => B(v({}, r), { value: r.value.replace(/"/g, "") }))[0];
});
var wu = w((qRe, Gx) => {
  Gx.exports = { MFA_COOKIE_NAME: "UBIC_2FA", LOCAL_USER_USERNAME: "admin" };
});
var Wx = w((FRe, Hx) => {
  var { fetch: kce } = ie(),
    Oce = Df(),
    { MFA_COOKIE_NAME: qce } = wu();
  Hx.exports = (e, t) => async (r) => {
    let s = e.cloudEnv || "production",
      { method: a, id: o } = r,
      n = `/user/self/mfa/${a}`,
      i = ["email", "sms"].includes(a),
      c = i ? `${n}/${o}/send` : `${n}/send`;
    return kce(`${e.cloud[s].ssoUrl}${c}`, {
      headers: { cookie: r.mfaCookie },
      method: "post",
    }).then(async (d) => {
      if (d.ok) {
        if (!i) {
          let { name: u, value: p } = Oce(d, qce) || {};
          return { mfaCookie: `${u}=${p}` };
        }
        return null;
      } else {
        let u = new Error(`ssoAuthError: ${d.status} ${d.statusText}`);
        throw ((u.status = d.status), u);
      }
    });
  };
});
var zx = w((LRe, Yx) => {
  var { fetch: Kx } = ie(),
    Fce = Df();
  Yx.exports = (e, t) => {
    let r = async (s) => (await Kx(`${s}/legal`)).json();
    return async (s) => {
      let a = e.cloudEnv,
        o = e.cloud[a].ssoUrl,
        { newsletter: n } = s,
        i = await r(o),
        { rev_terms: c, rev_privacy: d, rev_terms_aircrm: u } = i,
        p = B(v({}, s), {
          curr_terms_rev: c,
          curr_privacy_rev: d,
          curr_terms_aircrm_rev: n ? u : void 0,
        });
      return Kx(`${o}/user`, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
        method: "post",
        body: JSON.stringify(p),
      }).then(async (l) => {
        if (l.ok) {
          let E = await l.json(),
            {
              name: y,
              value: h,
              path: S,
              domain: D,
              expires: A,
              secure: C,
              httpOnly: R,
            } = Fce(l, e.cloud[a].ssoCookieName) || {};
          return B(v({}, E), {
            ssoAuth: {
              name: y,
              value: h,
              path: S,
              domain: D,
              expires: A,
              secure: C,
              httpOnly: R,
            },
          });
        }
        let f = await l.text().catch(() => null);
        t.warn(`SSO failed to register new user:${f}`);
        let m = new Error(
          `ssoRegisterError: ${l.status} ${l.statusText}. Response from server: ${f}`
        );
        throw ((m.status = l.status), m);
      });
    };
  };
});
var Xx = w((MRe, Jx) => {
  var { fetch: Lce } = ie();
  Jx.exports = (e, t) => {
    let r = e.cloud[e.cloudEnv].ssoUrl;
    return async (s) => {
      let a = await Lce(`${r}/password-strength`, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
        method: "post",
        body: JSON.stringify(s),
      });
      if (a.ok) return a.json();
      let o = new Error(`ssoRegisterError: ${a.status} ${a.statusText}`);
      throw ((o.status = a.status), o);
    };
  };
});
var Zx = w((xRe, Qx) => {
  var { subscribe: Nf, unsubscribe: Mce } = require("handoff"),
    xce = Wx(),
    $ce = zx(),
    Bce = Xx();
  Qx.exports = async (e, t) => {
    let r = xce(e, t),
      s = $ce(e, t),
      a = Bce(e, t),
      o = [
        Nf("sso.sendMfa", (n, i) => r(i)),
        Nf("sso.register", (n, i) => s(i)),
        Nf("sso.passwordStrength", (n, i) => a(i)),
      ];
    return async () => {
      o.forEach((n) => Mce(n));
    };
  };
});
var t$ = w(($Re, e$) => {
  var { fetch: Vce } = ie(),
    { publish: jce } = require("handoff");
  e$.exports = (e, t) => async (r, s) => {
    let a = `${e}/api/v2/user/${r}/invitation/accepted`,
      o = await Vce(a, { method: "PUT", body: JSON.stringify(s) }),
      n = await o.json();
    if (!o.ok) throw (t.error(n), new Error("Unable to accept invite"));
    return t.debug("invite accepted", n), jce("uum.getUser", r, !0);
  };
});
var s$ = w((BRe, r$) => {
  var { fetch: Gce } = ie(),
    { publish: Hce } = require("handoff");
  r$.exports = (e, t) => async (r, s) => {
    let a = `${e}/api/v2/user/${r}/sso`,
      o = await Gce(a, { method: "POST", body: JSON.stringify(s) }),
      n = await o.json();
    if (!o.ok) throw new Error("Unable to bind sso account to user", r);
    return t.debug("bindSsoAccount", n), Hce("uum.refreshUsers");
  };
});
var ut,
  a$ = x(() => {
    (function (y) {
      (y.VIEW_USER = "view:user"),
        (y.EDIT_USER = "edit:unifi-os:user"),
        (y.VIEW_CONSOLE_SETTINGS = "view:app:settings"),
        (y.EDIT_RELEASE_CHANNEL = "edit:os-settings:update_channel"),
        (y.EDIT_CONSOLE_SETTINGS = "edit:os-settings:general"),
        (y.MANAGE_APPLICATIONS = "edit:os-settings:update_install"),
        (y.MANAGE_AUTO_UPDATE = "edit:os-settings:auto_update"),
        (y.EDIT_NOTIFICATIONS = "edit:os-settings:notify"),
        (y.EDIT_REMOTE_ACCESS = "edit:os-settings:remote_access"),
        (y.EDIT_BACKUPS = "edit:os-settings:backup"),
        (y.RESTART_CONSOLE = "edit:os-settings:restart"),
        (y.POWER_OFF_CONSOLE = "edit:os-settings:poweroff"),
        (y.FACTORY_RESET = "edit:os-settings:reset"),
        (y.TRANSFER_OWNER = "edit:os-settings:transfer_owner"),
        (y.EDIT_SSH = "edit:os-settings:ssh"),
        (y.SUPPORT_FILE = "edit:os-settings:support_file");
    })(ut || (ut = {}));
  });
var o$,
  Wce,
  gu,
  Rf = x(() => {
    o$ = g(Ym());
    Re();
    a$();
    (Wce = (e) => {
      switch (e) {
        case Ve.VIEW_USER:
          return ut.VIEW_USER;
        case Ve.EDIT_USER:
          return ut.EDIT_USER;
        case Ve.VIEW_CONSOLE_SETTINGS:
          return ut.VIEW_CONSOLE_SETTINGS;
        case Ve.EDIT_RELEASE_CHANNEL:
          return ut.EDIT_RELEASE_CHANNEL;
        case Ve.EDIT_CONSOLE_SETTINGS:
          return ut.EDIT_CONSOLE_SETTINGS;
        case Ve.MANAGE_APPLICATIONS:
          return ut.MANAGE_APPLICATIONS;
        case Ve.MANAGE_AUTO_UPDATE:
          return ut.MANAGE_AUTO_UPDATE;
        case Ve.EDIT_NOTIFICATIONS:
          return ut.EDIT_NOTIFICATIONS;
        case Ve.EDIT_REMOTE_ACCESS:
          return ut.EDIT_REMOTE_ACCESS;
        case Ve.EDIT_BACKUPS:
          return ut.EDIT_BACKUPS;
        case Ve.RESTART_CONSOLE:
          return ut.RESTART_CONSOLE;
        case Ve.POWER_OFF_CONSOLE:
          return ut.POWER_OFF_CONSOLE;
        case Ve.FACTORY_RESET:
          return ut.FACTORY_RESET;
        case Ve.TRANSFER_OWNER:
          return ut.TRANSFER_OWNER;
        case Ve.EDIT_SSH:
          return ut.EDIT_SSH;
        case Ve.SUPPORT_FILE:
          return ut.SUPPORT_FILE;
      }
    }),
      (gu = (e) => {
        let t = e.roles.length === 0,
          r = e.roles.some((n) => n.system_key === "owner"),
          s = r || e.roles.some((n) => n.system_key === "super_administrator"),
          a = new Set(e.scopes),
          o = Object.values(Ve).reduce(
            (n, i) => B(v({}, n), { [i]: a.has(Wce(i)) }),
            {}
          );
        return B(v({}, e), {
          id: e.unique_id,
          isOwner: r,
          isSuperAdmin: s,
          isMember: t,
          avatar: e.avatar_relative_path
            ? `/proxy/users${e.avatar_relative_path}`
            : null,
          ucorePermission: o,
          maskedEmail: r ? (0, o$.default)(e.email) : "",
        });
      });
  });
var n$,
  Pf,
  i$ = x(() => {
    Rf();
    (n$ = g(ie())),
      (Pf = (e) => async (t) => {
        let r = `${e}/api/v2/user/${t}`,
          a = await (await n$.default.fetch(r)).json();
        if (!a.data) return null;
        let o = a.data;
        return o.unique_id ? gu(o) : null;
      });
  });
var c$,
  Uf,
  u$ = x(() => {
    Rf();
    (c$ = g(ie())),
      (Uf = (e) => async () => {
        let t = `${e}/api/v2/users/active`,
          s = await (await (0, c$.fetch)(t)).json();
        return (Array.isArray(s.data) ? s.data : []).reduce(
          (o, n) => (n.unique_id && o.set(n.unique_id, gu(n)), o),
          new Map()
        );
      });
  });
var l$ = w((QRe, d$) => {
  var { fetch: Kce } = ie();
  d$.exports = (e) => async () => {
    let t = `${e}/api/v2/info`;
    return (await (await Kce(t)).json()).data;
  };
});
var $t = w((ZRe, p$) => {
  p$.exports = {
    SUCCESS: 1,
    TWO_FACTOR_TOKEN_REQUIRED: 430022,
    ACCOUNT_NOT_EXIST_LOCALLY: 100019,
    USER_ALREADY_REGISTERED: 100007,
    INVALID_TWO_FACTOR_TOKEN: 430030,
    INVALID_USERNAME_PASSWORD: 100036,
    INVALID_PASSWORD: 100028,
    LOGIN_AWAITING_APPROVAL: 700009,
    UNVERIFIED_USER: 700010,
    SESSION_EXPIRED: 700011,
    MFA_PUSH_LOGIN_APPROVAL_DENIED: 700012,
    NO_INTERNET: 680005,
  };
});
var f$ = w((ePe, m$) => {
  var { fetch: Yce } = ie(),
    { publish: zce } = require("handoff"),
    { SUCCESS: Jce } = $t();
  m$.exports = (e, t) => async (r) => {
    let { email: s, app: a, roles: o, resend: n } = r,
      i = `${e}/api/v2/users/invite_add`,
      c = {
        email: s,
        role_system_key: "administrator",
        permissions: { [`${a}.management`]: o },
        is_resend: n || !1,
      },
      d = await Yce(i, { method: "POST", body: JSON.stringify(c) }),
      u = await d.json();
    if ((t.debug("inviteUser", c, u), !d.ok || u.code !== Jce))
      throw new Error(JSON.stringify(u));
    return (await zce("uum.getUsers", !0)).find((l) => l.email === s);
  };
});
var kf = w((tPe, h$) => {
  var Xce = require("set-cookie-parser");
  h$.exports = (e, t) =>
    Xce.parse({ headers: e.headers.raw() })
      .filter((r) => r.name === t)
      .map((r) => B(v({}, r), { value: r.value.replace(/"/g, "") }))[0];
});
var g$ = w((rPe, w$) => {
  var { fetch: Qce } = ie(),
    { publish: Eu } = require("handoff"),
    { AppError: Bs, errorCodes: Vs } = (se(), me),
    y$ = kf(),
    {
      SUCCESS: Zce,
      TWO_FACTOR_TOKEN_REQUIRED: eue,
      ACCOUNT_NOT_EXIST_LOCALLY: tue,
      INVALID_TWO_FACTOR_TOKEN: rue,
      UNVERIFIED_USER: sue,
      INVALID_USERNAME_PASSWORD: aue,
      INVALID_PASSWORD: oue,
      NO_INTERNET: nue,
    } = $t(),
    { MFA_COOKIE_NAME: iue } = wu();
  w$.exports = (e, t, r) => async (s) => {
    let a = t.cloudEnv || "production",
      {
        username: o,
        password: n,
        token: i,
        deviceToken: c,
        ssoLoginOnly: d = !1,
        sendDefaultMfa: u = !0,
      } = s,
      p = d ? `${e}/api/v2/login_by_setup` : `${e}/api/v2/login_v2`,
      l = { username: o, password: n, send_default_mfa: u };
    i && (l.mfa_token = i), c && (l.device_token = c);
    let f = await Qce(p, { method: "POST", body: JSON.stringify(l) }),
      m = await f.json();
    if ((r.debug("login", m), m.code === eue)) {
      let N = new Bs(Vs.MFA_AUTH_REQUIRED),
        { name: b, value: T } = y$(f, iue) || {};
      throw ((N.data = B(v({}, m.data), { mfaCookie: `${b}=${T}` })), N);
    } else {
      if (m.code === sue) throw new Bs(Vs.USER_NOT_VERIFIED);
      if (m.code === tue)
        throw new Bs(Vs.AUTHENTICATION_FAILED_ACCOUNT_NOT_EXIST_LOCALLY);
      if (m.code === rue) throw new Bs(Vs.AUTHENTICATION_FAILED_INVALID_2FA);
      if (m.code === aue || m.code === oue)
        throw new Bs(Vs.AUTHENTICATION_FAILED_INVALID_CREDENTIALS);
      if (!f.ok || m.code !== Zce) {
        r.warn(
          `Authentication failed. POST: ${p} returned ${JSON.stringify(m)}`
        );
        let { features: N } = await Eu("system.device");
        if (N.hasUdapi) {
          let T;
          try {
            let { dnsServers: M } = await Eu(
              "firmware.udapi.getBasicNetworkConfiguration"
            );
            T = M.some(({ address: q }) => ["1.1.1.1", "8.8.8.8"].includes(q));
          } catch (M) {
            (T = !0), r.error(M);
          }
          if (!T) throw new Bs(Vs.AUTHENTICATION_FAILED_BAD_DNS);
        }
        throw m.code === nue || !(await Eu("system.info")).hasInternet
          ? new Bs(Vs.AUTHENTICATION_FAILED_NO_INTERNET)
          : new Bs(Vs.AUTHENTICATION_FAILED);
      }
    }
    let {
        name: E,
        value: y,
        path: h,
        domain: S,
        expires: D,
        secure: A,
        httpOnly: C,
      } = y$(f, t.cloud[a].ssoCookieName) || {},
      R = {
        name: E,
        value: y,
        path: h,
        domain: S,
        expires: D,
        secure: A,
        httpOnly: C,
      };
    return d
      ? B(v({}, m.data), { ssoAuth: R })
      : {
          user: await Eu("uum.getUser", m.data.id),
          deviceToken: m.data.device_token,
          ssoAuth: R,
        };
  };
});
var S$ = w((sPe, E$) => {
  var { fetch: cue } = ie(),
    { publish: uue } = require("handoff"),
    { SUCCESS: due } = $t();
  E$.exports = (e, t) => async (r) => {
    let s = `${e}/api/v2/login_by_oauth_token`,
      a = await cue(s, { method: "POST", body: JSON.stringify(r) }),
      o = await a.json();
    if ((t.debug("login", o), !a.ok || o.code !== due))
      throw new Error("Invalid oauth token");
    return uue("uum.getUser", o.data.id);
  };
});
var T$ = w((aPe, _$) => {
  var { fetch: lue } = ie(),
    { publish: b$ } = require("handoff"),
    { SUCCESS: pue, USER_ALREADY_REGISTERED: mue } = $t();
  _$.exports = (e, t) => async (r) => {
    let s = `${e}/api/v2/users/migrate`;
    t.info("Send request to migrate user", r),
      !r.sso_id &&
        r.email &&
        (t.error("Deleting local user email address", r.email), delete r.email);
    let a = await lue(s, { method: "POST", body: JSON.stringify(r) }),
      o = await a.json();
    if ((t.debug("migrateUser", o), a.ok))
      switch (o.code) {
        case pue:
          return b$("uum.getUser", o.data.unique_id);
        case mue:
          return (
            t.info("Migrate user returned USER_ALREADY_REGISTERED", o),
            (await b$("uum.getUsers")).find(({ sso_uuid: c, username: d }) =>
              c ? c === r.sso_id : d === r.username
            )
          );
        default:
          break;
      }
    throw (
      (t.warn("Migrate user returned bad response", o, a.status),
      new Error("Migrate user failed"))
    );
  };
});
var A$ = w((oPe, I$) => {
  var { fetch: fue } = ie(),
    { publish: hue } = require("handoff");
  I$.exports = (e, t) => async (r, s) => {
    let a = `${e}/api/v2/user/${r}/pending_invitation_accepted`,
      o = await fue(a, { method: "PUT", body: JSON.stringify(s) }),
      n = await o.json();
    if (!o.ok)
      throw (
        (t.error("Failed to accept invite: ", n),
        new Error("Failed to accept invite", n))
      );
    return t.debug("invite accepted", n), hue("uum.getUser", r, !0);
  };
});
var N$ = w((nPe, D$) => {
  var { fetch: yue } = ie(),
    { publish: wue } = require("handoff"),
    { AppError: v$, errorCodes: C$ } = (se(), me),
    gue = kf(),
    {
      SUCCESS: Eue,
      LOGIN_AWAITING_APPROVAL: Sue,
      SESSION_EXPIRED: bue,
      MFA_PUSH_LOGIN_APPROVAL_DENIED: _ue,
    } = $t();
  D$.exports =
    (e, t, r) =>
    async ({ mfaCookie: s, ssoLoginOnly: a = !1 }) => {
      let o = t.cloudEnv || "production",
        n = `${e}/api/v2/login_by_poll${a ? "?is_setup=true" : ""}`;
      try {
        let i = await yue(n, { headers: { cookie: s }, method: "get" });
        if (!i.ok) {
          let p = new Error(`ssoAuthError: ${i.status} ${i.statusText}`);
          throw ((p.status = i.status), p);
        }
        let { code: c, data: d, msg: u } = await i.json();
        switch (c) {
          case Eue: {
            let {
                name: p,
                value: l,
                path: f,
                domain: m,
                expires: E,
                secure: y,
                httpOnly: h,
              } = gue(i, t.cloud[o].ssoCookieName) || {},
              S = {
                name: p,
                value: l,
                path: f,
                domain: m,
                expires: E,
                secure: y,
                httpOnly: h,
              };
            return a
              ? B(v({}, d), { ssoAuth: S })
              : {
                  user: await wue("uum.getUser", d.id),
                  deviceToken: d.device_token,
                  ssoAuth: S,
                };
          }
          case Sue:
            return null;
          case bue:
            throw new v$(C$.MFA_SESSION_EXPIRED);
          case _ue:
            throw new v$(C$.MFA_PUSH_LOGIN_APPROVAL_DENIED);
          default:
            throw new Error(`ULP Error: ${c} ${u}`);
        }
      } catch (i) {
        throw (r.error("Failed to poll MFA login:", i), i);
      }
    };
});
var P$ = w((iPe, R$) => {
  var { fetch: Tue } = ie(),
    { publish: Iue } = require("handoff");
  R$.exports = (e, t) => async (r) => {
    let s = `${e}/api/v2/user/${r}/invitation/rejected`,
      a = await Tue(s, { method: "PUT" }),
      o = await a.json();
    if (!a.ok) throw new Error("Unable to reject invite");
    return t.debug("invite rejected", o), Iue("uum.getUser", r);
  };
});
var O$ = w((cPe, k$) => {
  var { fetch: U$ } = ie(),
    { SUCCESS: Aue } = $t();
  k$.exports = (e, t) => async (r) => {
    await U$(`${e}/api/v2/user/${r}/deactivate`, { method: "PUT" });
    let s = await U$(`${e}/api/v2/user/${r}`, { method: "DELETE" }),
      a = await s.json();
    if ((t.debug("removeUser", a), !s.ok || a.code !== Aue))
      throw new Error(JSON.stringify(a));
    return !0;
  };
});
var q$,
  F$,
  L$,
  Of,
  M$ = x(() => {
    (q$ = g(require("handoff"))),
      (F$ = g(ie())),
      (L$ = g($t())),
      (Of = (e, t) => async (r) => {
        if (await (0, q$.publish)("uum.isSetup")) {
          t.warn("ULP already set-up, can't change environment");
          return;
        }
        try {
          let a = `${e}/api/v2/setup/sso_env`,
            o = await (0, F$.fetch)(a, {
              method: "POST",
              body: JSON.stringify({ sso_env: r }),
            }),
            n = await o.json();
          if (!o.ok)
            throw (t.error(n), new Error(`Request failed (${o.status})`));
          if (n.code !== L$.SUCCESS)
            throw (t.error(n), new Error(`ULP Error (${n.code})`));
          t.info(`ULP environment changed to "${r}"`);
        } catch (a) {
          throw (t.error("Failed to set ULP environment:", a), a);
        }
      });
  });
var $$ = w((dPe, x$) => {
  var { fetch: vue } = ie(),
    { publish: Cue } = require("handoff"),
    { SUCCESS: Due } = $t();
  x$.exports = (e, t) => async (r) => {
    let s = `${e}/api/v2/user/${r}/sso_password_changed`,
      a = await vue(s, { method: "POST", body: {} }),
      o = await a.json();
    if (!a.ok || o.code !== Due) throw new Error(JSON.stringify(o));
    return Cue("uum.getUser", r);
  };
});
var V$ = w((lPe, B$) => {
  var { fetch: Nue } = ie(),
    { publish: Rue } = require("handoff");
  B$.exports = (e, t) => async (r) => {
    let s = `${e}/api/v2/transfer_ownership`,
      a = await Nue(s, { method: "PUT", body: JSON.stringify({ email: r }) }),
      o = await a.json();
    if (!a.ok) throw new Error("Unable to transfer ownership for user", r);
    return t.debug("transferOwnership", o), Rue("uum.refreshUsers");
  };
});
var G$ = w((pPe, j$) => {
  var { fetch: Pue } = ie(),
    { SUCCESS: Uue } = $t();
  j$.exports = (e, t) => async (r) => {
    if (!r || !r.id) return null;
    let s = `${e}/api/v2/user/${r.id}/sso_cookie`,
      a = await Pue(s, { method: "GET" }),
      o = await a.json();
    return (
      t.debug("ubicAuth", o),
      !a.ok || o.code !== Uue
        ? (t.error("UUM failed to return ubicAuth"),
          t.error(new Error(JSON.stringify(o))),
          null)
        : o.data.value
    );
  };
});
var W$ = w((mPe, H$) => {
  var { fetch: kue } = ie(),
    { publish: Oue } = require("handoff");
  H$.exports = (e, t) => async (r, s) => {
    let a = `${e}/api/v2/controller_manifest/${r}`,
      o = {
        name: r,
        revision: Math.round(Date.now() / 1e3),
        permissions: {
          [`${r}.management`]: {
            name: `${r}.ucore.manifest`,
            choice: "multi",
            groups: s,
          },
        },
      },
      n = await kue(a, { method: "PUT", body: JSON.stringify(o) }),
      i = await n.json();
    if (!n.ok)
      throw new Error(`Unable to update persmissions manifest for ${r}`);
    return t.debug("updatePermissionsManifest", o, i), Oue("uum.refreshUsers");
  };
});
var z$ = w((fPe, Y$) => {
  var { fetch: que } = ie(),
    { publish: K$ } = require("handoff"),
    { SUCCESS: Fue } = $t();
  Y$.exports = (e, t) => async (r, s, a) => {
    let o = `${e}/api/v2/user/${r}/permissions`,
      n = await K$("uum.getUser", r),
      i = B(v({}, n.permissions), { [`${s}.management`]: a }),
      c = await que(o, { method: "PUT", body: JSON.stringify(i) }),
      d = await c.json();
    if ((t.debug("updateRoles", d), !c.ok || d.code !== Fue))
      throw (
        (t.warn("UpdateRoles failed", { userId: r, app: s, roles: a }),
        new Error(JSON.stringify(d)))
      );
    return K$("uum.getUser", r);
  };
});
var X$ = w((hPe, J$) => {
  var { fetch: Lue } = ie(),
    { publish: Mue } = require("handoff"),
    { SUCCESS: xue } = $t();
  J$.exports = (e, t) => async (a) => {
    var o = a,
      { userId: r } = o,
      s = dt(o, ["userId"]);
    let n = `${e}/api/v2/user/${r}`,
      i = await Lue(n, { method: "PUT", body: JSON.stringify(s) }),
      c = await i.json();
    if ((t.debug("update user", c), !i.ok || c.code !== xue))
      throw new Error(JSON.stringify(c));
    return Mue("uum.getUser", r);
  };
});
var Q$,
  Z$,
  qf,
  e1 = x(() => {
    (Q$ = g(require("handoff"))),
      (Z$ = g(ie())),
      (qf = (e, t) => async (r, s) => {
        let a = `${e}/api/v2/user/${r}/invitation/verified`,
          o = await (0, Z$.fetch)(a, {
            method: "PUT",
            body: JSON.stringify(s),
          }),
          n = await o.json();
        if (!o.ok) throw (t.error(n), new Error("Unable to verify invitation"));
        return (
          t.debug("Invitation verified", n),
          (0, Q$.publish)("uum.getUser", r, !0)
        );
      });
  });
var r1 = w((wPe, t1) => {
  var { fetch: $ue } = ie(),
    { SUCCESS: Bue, TWO_FACTOR_TOKEN_REQUIRED: Vue } = $t();
  t1.exports =
    (e, t) =>
    async ({ username: r, password: s }) => {
      let a = await $ue(`${e}/api/v2/login_v2`, {
          method: "POST",
          body: JSON.stringify({
            username: r,
            password: s,
            send_default_mfa: !1,
          }),
        }),
        o = await a.json();
      return (
        t.debug("Received login response from ULP-GO side:", o),
        !!(o.code === Vue || (a.ok && o.code === Bue))
      );
    };
});
var Ff,
  Lf,
  Mf,
  xf,
  $f,
  Bf,
  Vf,
  jf,
  Gf,
  Hf,
  Wf,
  Kf,
  Yf,
  zf,
  Jf,
  Xf,
  Qf,
  Zf,
  eh = x(() => {
    (Ff = g(t$())), (Lf = g(s$()));
    i$();
    u$();
    (Mf = g(l$())),
      (xf = g(f$())),
      ($f = g(g$())),
      (Bf = g(S$())),
      (Vf = g(T$())),
      (jf = g(A$())),
      (Gf = g(N$())),
      (Hf = g(P$())),
      (Wf = g(O$()));
    M$();
    (Kf = g($$())),
      (Yf = g(V$())),
      (zf = g(G$())),
      (Jf = g(W$())),
      (Xf = g(z$())),
      (Qf = g(X$()));
    e1();
    Zf = g(r1());
  });
var th,
  s1,
  rh,
  sh,
  ah,
  a1,
  o1 = x(() => {
    (th = g(require("lodash"))), (s1 = g(require("stream")));
    eh();
    (rh = "userCacheChanged"),
      (sh = "ownerChanged"),
      (ah = class extends s1.EventEmitter {
        constructor(t, r) {
          super();
          this.prefix = t;
          this.logger = r;
          this.users = new Map();
          this.owner = null;
          this.latestUsers = null;
          this.latestOwner = null;
          (this.fetchUser = Pf(this.prefix)),
            (this.fetchUsers = Uf(this.prefix));
        }
        sendUserChanged() {
          (0, th.isEqual)(this.users, this.latestUsers) ||
            (this.emit(rh),
            (this.latestUsers = new Map(this.users)),
            (0, th.isEqual)(this.owner, this.latestOwner) ||
              (this.emit(sh, this.owner), (this.latestOwner = this.owner)));
        }
        async refresh(t = void 0) {
          try {
            if (t) {
              let s = await this.fetchUser(t);
              s?.id ? this.users.set(s.id, s) : this.users.delete(t);
            } else this.users = await this.fetchUsers();
          } catch (s) {
            t
              ? this.logger.error(`Failed to fetch user "${t}" from ULP`, s)
              : this.logger.error("Failed to fetch users from ULP", s);
            return;
          }
          let r = Array.from(this.users.values()).find((s) => s.isOwner);
          r
            ? (this.owner = r)
            : this.users.size &&
              ((this.owner = null),
              this.logger.error("Missing owner from ulp-go", this.users)),
            this.sendUserChanged();
        }
        async getUsers(t = !1) {
          return (
            (!this.users.size || t) && (await this.refresh()),
            Array.from(this.users.values())
          );
        }
        async getUser(t, r = !1) {
          return (
            (!this.users.get(t) || r) && (await this.refresh(t)),
            this.users.get(t)
          );
        }
        async getOwner() {
          return this.owner || (await this.refresh()), this.owner;
        }
        async clear() {
          this.users.clear(), this.sendUserChanged();
        }
        async del(t) {
          this.users.delete(t), this.sendUserChanged();
        }
      }),
      (a1 = ah);
  });
var i1 = w((APe, n1) => {
  var { fetch: jue } = ie(),
    { SUCCESS: Gue } = $t();
  n1.exports = (e, t) => async (r) => {
    let s = `${e}/api/v2/setup`,
      a = await jue(s, { method: "POST", body: JSON.stringify(r) });
    t.debug("POST", s, r);
    let o = await a.json();
    if (!a.ok || o.code !== Gue) throw (t.error(o), new Error("Setup failed"));
  };
});
var d1 = w((vPe, u1) => {
  var Hue = require("events"),
    { publish: Su } = require("handoff"),
    Wue = "UUM",
    Kue = {
      StringEquals: {
        type: ["event"],
        namespace: ["common:controller"],
        name: [
          "user_add",
          "user_update",
          "user_delete",
          "permission_grant",
          "permission_revoke",
        ],
      },
    },
    c1 = class extends Hue {
      send(t) {
        this.emit("message", JSON.parse(t));
      }
      close() {
        this.emit("close");
      }
    };
  u1.exports = async (e, t) => {
    let r = (a) => {
        Su("uum.refreshUser", a.unique_id);
      },
      s = new c1();
    return (
      s.on("message", (a) => {
        switch (a.name) {
          case "user_add":
          case "user_update":
            r(a.payload.data);
            break;
          case "user_delete":
            Su("uum.removeUserInCache", a.payload.data.unique_id);
            break;
          case "permission_grant":
          case "permission_revoke":
            r(a.payload.data.user);
            break;
        }
      }),
      Su("messageBox.sub", Kue, Wue).then((a) => {
        Su("messageBox.listen", a, s);
      }),
      async () => {
        s.close();
      }
    );
  };
});
var g1 = w((NPe, w1) => {
  var bu = g(require("bluebird")),
    ue = g(require("handoff")),
    l1 = g(require("redux-saga/effects")),
    la = g(Z()),
    p1 = g(wu());
  o1();
  var m1 = g(as());
  eh();
  var f1 = g(i1()),
    h1 = g(d1()),
    y1 = 3e4,
    Yue = "console_owner_changed",
    zue = async (e, t) => {
      let r = !0,
        s = `http://127.0.0.1:${e.services.uum.port}`,
        a = new a1(s, t),
        o = (0, f1.default)(s, t),
        n = Ff.default(s, t),
        i = Lf.default(s, t),
        c = Mf.default(s),
        d = xf.default(s, t),
        u = $f.default(s, e, t),
        p = Bf.default(s, t),
        l = Vf.default(s, t),
        f = jf.default(s, t),
        m = Gf.default(s, e, t),
        E = Hf.default(s, t),
        y = Wf.default(s, t),
        h = Of(s, t),
        S = Kf.default(s, t),
        D = Yf.default(s, t),
        A = zf.default(s, t),
        C = Jf.default(s, t),
        R = Xf.default(s, t),
        N = Qf.default(s, t),
        b = qf(s, t),
        T = Zf.default(s, t);
      a.on(rh, () => {
        j();
      }),
        a.on(sh, (W) => {
          K(),
            (0, ue.publish)("messageBox.pub", {
              type: "event",
              namespace: "common:controller",
              name: Yue,
              payload: { data: { owner: W } },
            }).catch((z) => t.error("Failed to send owner change:", z));
        });
      let M = async (W, z = !1) => a.getUser(W, z),
        q = async (W = !1) =>
          (await a.getUsers(W)).filter(
            (z) =>
              (z.email_is_null || z.email_status === "VERIFIED") &&
              z.status === "ACTIVE"
          ),
        k = async (W = !1) =>
          (await a.getUsers(W)).filter((z) => z.status === "ACTIVE"),
        I = async (W) =>
          (await a.getUsers()).find(
            (z) =>
              (z.sso_uuid === W || z.uid_sso_id === W) && z.status === "ACTIVE"
          ),
        _ = async () => {
          try {
            r = (await c()).is_setuped;
          } catch (W) {
            W instanceof Error &&
              t.error(`UUM does not appear to be running: ${W.message}`),
              await a.clear();
          }
        },
        P = async () => {
          let W = await a.getOwner();
          if (!!W) return W;
        },
        U = async () => {
          try {
            await (0, ue.publish)("apps.fetchManifest", e.services.uum.port),
              await a.refresh();
          } catch (W) {
            W instanceof Error &&
              t.error(`UUM does not appear to be running: ${W.message}`),
              setTimeout(() => U(), 5e3);
          }
        },
        j = async () => {
          let W = await a.getUsers(),
            z = {};
          await bu.Promise.all(
            W.map(async (ee) => {
              let te = ee.sso_uuid || ee.uid_sso_id || ee.id;
              !te || (z[te] = await (0, ue.publish)("system.getUserData", ee));
            })
          ),
            await (0, ue.publish)("redux.dispatch", la.UPDATE_USER_DATA, z);
        },
        K = async () => {
          let W = !1,
            z = await a.getOwner();
          if (z && z.sso_account) {
            let ee = z.sso_account.toLowerCase();
            W = ee.endsWith("@ui.com") || ee.endsWith("@ubnt.com");
          }
          return (0, ue.publish)("redux.dispatch", la.UPDATE_DEVICE_SETTINGS, {
            isInternalUser: W,
          });
        },
        J = () => {
          let W = (ee) => {
              try {
                let te = JSON.parse(ee),
                  He = te.info
                    ? {
                        users: {
                          owners: te.info.counts.owner,
                          superAdmins: te.info.counts.super_admins,
                          limitedAdmins: te.info.counts.limited_admins,
                          users: te.info.counts.users,
                        },
                      }
                    : void 0;
                (0, ue.publish)("redux.dispatch", la.UPDATE_APP, {
                  name: "users",
                  updates: { info: He, controllerStatus: te.controllerStatus },
                });
              } catch (te) {
                t.error(
                  `unable to parse sd_notify status for ulp-go: ${ee}`,
                  te
                );
              }
            },
            z;
          return (
            (0, ue.publish)(
              "systemd.subscribeToService",
              e.services.uum.serviceName,
              { onStatusChange: W }
            ).then(({ unsubscribe: ee }) => {
              z = ee;
            }),
            () => {
              z && z();
            }
          );
        };
      U();
      let F = J(),
        $ = [
          (0, m1.default)(
            t,
            "uumMessageBox",
            (0, h1.default)(e, t.wrap("uumMessageBox"))
          ),
        ];
      await bu.Promise.all($);
      let O = setInterval(() => _(), y1),
        V = () => {
          O || (O = setInterval(() => _(), y1));
        },
        Q = [
          function* () {
            yield (0, l1.takeEvery)(la.UPDATE_APP, ({ payload: W }) => {
              [
                "hidden",
                "preinstall",
                "isInstalled",
                "prerelease",
                "installable",
              ].some((ee) => ee in W.updates) && j();
            });
          },
        ];
      Q.forEach((W) => (0, ue.publish)("redux.saga.add", W));
      let ae = [
        (0, ue.subscribe)("uum.isSetup", async () => (await _(), r)),
        (0, ue.subscribe)("uum.login", (W, z) => u(z)),
        (0, ue.subscribe)("uum.verifyPassword", (W, z) => T(z)),
        (0, ue.subscribe)("uum.loginByOauthToken", (W, z) => p(z)),
        (0, ue.subscribe)("uum.setEnvironment", (W, z) => h(z)),
        (0, ue.subscribe)(
          "uum.setup",
          async (W, z) => (await o(z), await a.refresh(), P())
        ),
        (0, ue.subscribe)("uum.updatePermissionsManifest", (W, z, ee) =>
          C(z, ee)
        ),
        (0, ue.subscribe)("uum.getUser", (W, z, ee = !1) => M(z, ee)),
        (0, ue.subscribe)("uum.acceptInvite", (W, z, ee) => n(z, ee)),
        (0, ue.subscribe)("uum.verifyInvite", (W, z, ee) => b(z, ee)),
        (0, ue.subscribe)("uum.notifyInviteAccepted", (W, z, ee) => f(z, ee)),
        (0, ue.subscribe)("uum.migrateUser", (W, z) => l(z)),
        (0, ue.subscribe)("uum.rejectInvite", (W, z) => E(z)),
        (0, ue.subscribe)("uum.refreshUser", async (W, z) => {
          let ee = await M(z, !0);
          (0, ue.publish)("uum.userChanged", ee).catch(() => null);
        }),
        (0, ue.subscribe)("uum.refreshUsers", () => a.refresh()),
        (0, ue.subscribe)("uum.bindSsoAccount", (W, z, ee) => i(z, ee)),
        (0, ue.subscribe)("uum.getUserBySsoId", (W, z) => I(z)),
        (0, ue.subscribe)("uum.getUsers", (W, z = !1) => q(z)),
        (0, ue.subscribe)("uum.getActiveUsers", (W, z = !1) => k(z)),
        (0, ue.subscribe)("uum.isSsoEnabled", async () =>
          (await a.getUsers()).some((W) => !!W.sso_uuid)
        ),
        (0, ue.subscribe)("uum.isSingleUser", async () => {
          let W = await a.getUsers();
          return W.length === 1 && W[0]?.username === p1.LOCAL_USER_USERNAME;
        }),
        (0, ue.subscribe)("uum.getOwner", () => P()),
        (0, ue.subscribe)(
          "uum.ubicAuth",
          async () => await (async () => (await a.refresh(), A(await P())))()
        ),
        (0, ue.subscribe)("uum.updateUser", (W, z) => N(z)),
        (0, ue.subscribe)("uum.inviteUser", (W, z) => d(z)),
        (0, ue.subscribe)("uum.transferOwner", (W, z) => D(z)),
        (0, ue.subscribe)("uum.removeUser", (W, z) => y(z)),
        (0, ue.subscribe)("uum.updateRoles", (W, z, ee, te) => R(z, ee, te)),
        (0, ue.subscribe)("uum.removeUserInCache", async (W, z) => {
          await a.del(z);
        }),
        (0, ue.subscribe)("uum.ssoAccountPasswordChanged", (W, z) => S(z)),
        (0, ue.subscribe)("uum.pollMfa", (W, z) => m(z)),
        (0, ue.subscribe)("events.backupImportStarted", () => {
          O && clearInterval(O), (O = null);
        }),
        (0, ue.subscribe)("events.backupImportFinished", V),
        (0, ue.subscribe)("events.backupImportCanceled", V),
      ];
      return async () => (
        O && clearInterval(O),
        F(),
        ae.forEach((W) => (0, ue.unsubscribe)(W)),
        Q.forEach((W) => (0, ue.publish)("redux.saga.remove", W)),
        bu.Promise.map($, (W) => W())
      );
    };
  w1.exports = zue;
});
var b1 = w((RPe, S1) => {
  var Jue = require("path"),
    E1 = require("@ubnt/binme"),
    Xue = require("@ubnt/promise-queue"),
    Que = require("events"),
    Mr = class extends Que {
      constructor(t, r = !0) {
        super();
        (this.channel = t),
          (this.useCompression = r),
          (this.sendQueue = new Xue()),
          (this.url = `webrtc-ws:/${Jue.normalize(
            `/${t.label.split("ws:")[1]}`
          )}`),
          (this.readyState = 1),
          (this.streamer = new E1.Streamer()),
          t.on("message", (s) => this.streamer && this.streamer.feed(s)),
          this.streamer.on("message", (s) => this.onMessage(s)),
          t.on("close", () => this.onClose()),
          this.on("ping", () => this.pong());
      }
      async _send(t, r = "") {
        if (Buffer.isBuffer(r)) return this.channel.send(r);
        let s = await E1.create({ type: t }, r, this.useCompression);
        return this.channel.send(s);
      }
      onMessage(t) {
        let { header: r, body: s } = t;
        !r.type ||
          (r.type !== "ping" && r.type !== "pong" && r.type !== "message") ||
          this.emit(r.type, s);
      }
      onClose() {
        (this.readyState = 3),
          this.emit("close"),
          this.removeAllListeners(),
          this.channel.removeAllListeners(),
          this.streamer.destroy(),
          (this.channel = null);
      }
      emit(t, ...r) {
        return t === "error" && (!this.channel || this.readyState !== 1)
          ? null
          : super.emit(t, ...r);
      }
      close(t, r) {
        this.send({ code: t, reason: r }, "close");
      }
      terminate() {
        this.channel && this.channel.close();
      }
      ping() {
        this.send({}, "ping");
      }
      pong() {
        this.send({}, "pong");
      }
      send(t, r = "message") {
        return this.sendQueue.add(() =>
          this._send(r, t).catch((s) => this.emit("error", s))
        );
      }
      get bufferedAmount() {
        return this.channel ? this.channel.bufferSize : 0;
      }
    };
  Mr.CONNECTING = Mr.prototype.CONNECTING = 0;
  Mr.OPEN = Mr.prototype.OPEN = 1;
  Mr.CLOSING = Mr.prototype.CLOSING = 2;
  Mr.CLOSED = Mr.prototype.CLOSED = 3;
  S1.exports = Mr;
});
var T1 = w((PPe, _1) => {
  var Zue = require("bluebird");
  _1.exports = (e, t, r, s) => {
    let a = { uri: r, wrtcId: t.peer.id, channelId: t.id },
      o = (i) => e.debug("TcpWrtcBridge opened", i, t.label),
      n = async (i, c, d) => {
        if ((t.isOpen && (await Zue.delay(5e3), t.close()), i))
          return e.error("TcpWrtcBridge closed with error", i);
        e.info("TcpWrtcBridge closed", c);
      };
    return t.peer.addon.tcpWrtcBridge(
      B(v({}, a), { leadingData: s, startCallback: o }),
      n
    );
  };
});
var A1 = w((UPe, I1) => {
  I1.exports = (e, t) => {
    let r = async (s, a, o) => {
      if ((t.isOpen && t.close(), s))
        return e.error("WebRTC benchmark stoped with error", s);
      e.info("WebRTC benchmark stoped", a);
    };
    return t.peer.addon.wrtcBenchmark(
      { wrtcId: t.peer.id, channelId: t.id },
      r
    );
  };
});
var N1 = w((kPe, D1) => {
  var { publish: pa } = require("handoff"),
    { get: ede } = require("lodash"),
    v1 = {
      WAN_TO_WAN2: "WAN_TO_WAN2",
      WAN_TO_LTE: "WAN_TO_LTE",
      FAILOVER_TO_WAN: "FAILOVER_TO_WAN",
    },
    C1 = "WAN_TRANSITION";
  D1.exports = (e, t) => {
    let r = {
        StringEquals: {
          type: ["event"],
          namespace: ["common:controller"],
          name: ["wan_transition"],
        },
      },
      s = async (i) => {
        t.info(`Received WAN transition: ${i}.`),
          i === v1.WAN_TO_LTE
            ? (t.info(
                "LTE Failover active. Allowing all interfaces to be used."
              ),
              await pa("webrtc.allowAllInterfaces"))
            : i === v1.FAILOVER_TO_WAN &&
              (t.info(
                "Failover not active. Restricting interfaces, closing existing peers and forcing cloud reconnection."
              ),
              await pa("webrtc.restrictInterfaces"),
              await pa("webrtc.closeAllPeers"),
              await pa("cloud.forceReconnect"));
      },
      o = {
        send: (i) => {
          let c = ede(JSON.parse(i), "payload.data.wan_transition_type", null);
          c && s(c);
        },
        close: () => {},
      },
      n = !1;
    return (
      pa("messageBox.sub", r, C1).then((i) => {
        (n = !0), pa("messageBox.listen", i, o);
      }),
      async () => {
        n && (pa("messageBox.unsub", C1), (n = !1));
      }
    );
  };
});
var k1 = w((qPe, U1) => {
  var ms = require("fs-extra"),
    fs = require("path"),
    tde = require("os"),
    OPe = require("crypto"),
    oh = require("bluebird"),
    rde = require("@ubnt/ucp4"),
    sde = require("@ubnt/webrtc"),
    R1 = require("@ubnt/mock-http"),
    { publish: lo, subscribe: hs, unsubscribe: ade } = require("handoff"),
    ode = b1(),
    nde = T1(),
    ide = A1(),
    cde = N1(),
    { GuestPeerError: nh, GUEST_PEER_ERRORS: ih } = sm(),
    { SharedTokenExpiredError: ude } = (ol(), IS),
    P1 = 2e4,
    dde = 50,
    lde = 1e3 * 60 * 10,
    pde = ["gre1"];
  U1.exports = async (e, t) => {
    let r = new Map(),
      s = fs.resolve(e.logs.dir, "webrtc"),
      a = null,
      o = {},
      n = !1,
      i = async () => {
        let I = tde.networkInterfaces(),
          _ = ["br0"],
          P = await lo("system.device");
        return (
          P.wanPorts && P.wanPorts.length
            ? _.push(...P.wanPorts)
            : P.primaryInterfaces &&
              P.primaryInterfaces.length &&
              _.push(...P.primaryInterfaces.map((U) => U.name)),
          n && _.push(...pde),
          Object.entries(I)
            .filter(([, U]) => U.some((j) => j.internal === !1))
            .map(([U]) => U)
            .filter((U) => _.includes(U))
        );
      },
      c = () => {
        n = !0;
      },
      d = () => {
        n = !1;
      },
      u = () => (
        (a = Date.now()),
        ms
          .readdir(s)
          .then((I) => {
            let _ = I.map((U) => ({
                name: U,
                stats: o[U] || ms.statSync(fs.join(s, U)),
              })).sort(
                (U, j) => j.stats.mtime.getTime() - U.stats.mtime.getTime()
              ),
              P = _.splice(dde);
            return oh
              .map(P, (U) => {
                let j = fs.join(s, U.name);
                return (
                  t.verbose("removing webrtc debug file...", j), ms.remove(j)
                );
              })
              .then(() => {
                (o = {}), _.forEach((U) => (o[U.name] = U.stats));
              });
          })
          .catch((I) => t.error(I))
      ),
      p = () => {
        let { iceServers: I } = e.webrtc;
        return { iceServers: I };
      },
      l = () => {
        r.forEach((I) => I.close()), r.clear();
      },
      f = async (I, _) => {
        let { peer: P } = _,
          { method: U, path: j, headers: K, body: J } = I;
        if (!P) {
          t.warn(`webrtc api request on closed peer - ${U} ${j}`);
          return;
        }
        t.debug(`webrtc api request ${U} ${j}`, {
          userId: P.userId,
          channel: _.label,
        });
        let F = await R1(
          U,
          j,
          K,
          U === "GET" || U === "DELETE" ? null : J,
          ($, O) =>
            lo("http.req", $, O, {
              guestMeta: P.guestMeta,
              userId: P.userId,
              webrtc: !0,
            })
        );
        try {
          await I.respond(
            F.statusCode,
            F.statusMessage,
            F.headers,
            F.body || ""
          );
        } catch ($) {
          t.error($);
        }
      },
      m = (I) => {
        let { label: _, peer: P } = I,
          U = new rde(I);
        t.debug(`new api channel ${_} for user ${P.userId}`),
          U.on("httpRequest", (j) => setImmediate(() => f(j, I))),
          U.on("error", (j) => t.error(j));
      },
      E = async (I, _ = !0) => {
        let { label: P, peer: U } = I,
          j = P.split("ws:")[1];
        t.debug(`new ws channel ${P} for user ${U.userId}`);
        let K = new ode(I, _),
          J = new R1.Request("GET", j, {}, null);
        K.on("error", (F) => {
          t.error(F), I.close();
        }),
          lo("http.ws", J, {
            path: j,
            websocket: K,
            logger: t,
            userId: U.userId,
            guestMeta: U.guestMeta,
            clientPlatform: U.clientPlatform,
          }).catch((F) => {
            t.error(F), I.close();
          });
      },
      y = async (I) => {
        let { label: _, peer: P } = I;
        I.on("message", (U) => {
          if (I.pendingData) {
            let j = Buffer.concat([I.pendingData, U]);
            if (j.length > 1e6) {
              t.error(
                "Unsent data in tcp channel too large. Closing the channel"
              ),
                I.close();
              return;
            }
            I.pendingData = j;
          } else I.pendingData = U;
        }),
          t.info(`new tcp channel ${_} for user ${P.userId}`),
          await f(
            {
              method: "GET",
              path: I.label.split("tcp:")[1],
              respond: async (U, j, K, J) => {
                if (U !== 200) return I.close();
                try {
                  let F = JSON.parse(Buffer.from(J).toString()),
                    $ = Buffer.from(F.data);
                  I.pendingData && ($ = Buffer.concat([$, I.pendingData])),
                    await nde(t, I, F.uri, $),
                    (I.pendingData = null);
                } catch (F) {
                  t.error("Failed to register TCP channel", F), I.close();
                }
              },
            },
            I
          );
      },
      h = async (I, _) => {
        let {
            logs: P,
            traffic: U,
            turnTraffic: j,
            localCert: K,
            remoteCert: J,
          } = _,
          F = I.didOpen ? "success" : "fail",
          $ = fs.join(s, `${Date.now()}_${F}_${I.id}`);
        try {
          await ms.mkdirp($),
            P && (await ms.writeFile(fs.join($, "webrtc.log"), P)),
            U && (await ms.writeFile(fs.join($, "data.pcap"), U)),
            j && (await ms.writeFile(fs.join($, "turn.pcap"), j)),
            K && (await ms.writeFile(fs.join($, "local.crt"), K)),
            J && (await ms.writeFile(fs.join($, "remote.crt"), J));
        } catch (O) {
          if (O) return t.warn(O);
        }
        t.verbose("created webrtc debug dir...", $),
          (!a || Date.now() - a > lde) && u();
      },
      S = (I) => {
        try {
          let _ = new URLSearchParams(I.label.substring(I.label.indexOf("?"))),
            P = {};
          _.has("chunkSize") &&
            (P.maxMessageSize = parseInt(_.get("chunkSize"))),
            _.has("priority") && (P.priority = parseInt(_.get("priority"))),
            Object.entries(P).length > 0 && I.setOptions(P);
        } catch (_) {
          t.error("Failed to parse channel options", _);
        }
      },
      D = async (I, _) => {
        if (I.userId || !I.guestMeta) {
          _.close();
          return;
        }
        let P = new URLSearchParams(_.label.substring(_.label.indexOf("?")));
        S(_);
        let { token: U } = I.guestMeta;
        if (P.get("token") !== U) {
          _.close();
          return;
        }
        if (_.label.startsWith("tcp:/proxy/protect/api/tcp/sharedStream")) {
          y(_);
          return;
        }
        _.label.startsWith("ws:/proxy/protect/ws/sharedStream") && E(_, !1);
      },
      A = async (I, _) => {
        if (!I.userId || I.guestMeta) {
          _.close();
          return;
        }
        if ((S(_), _.label.startsWith("api:"))) {
          m(_);
          return;
        }
        if (_.label.startsWith("tcp:")) {
          y(_);
          return;
        }
        if (_.label.startsWith("ws:")) {
          let P = !_.label.includes("/protect/");
          E(_, P);
          return;
        }
        if (_.label.startsWith("benchmark:"))
          try {
            await ide(t, _);
          } catch (P) {
            t.error("Failed to start WebRTC benchmark", P), _.close();
          }
      },
      C = (I, _, P) => {
        let {
            os: U,
            client: j,
            clientId: K,
            connectionId: J,
            clientVersion: F,
          } = P,
          { timeToConnect: $, isTurnClient: O, isTurnPeer: V } = _;
        I.clientPlatform = j;
        let Q = {
          os: U,
          client: j,
          clientId: K,
          connectionId: J,
          clientVersion: F,
          timeToConnect: $,
          trickle: !!I.trickle,
          isTurnPeer: V,
          isTurnClient: O,
        };
        t.info(`new webrtc connection from peer: ${I.userId}, id: ${I.id}`, Q),
          lo("legacyTrace", {
            type: "event",
            namespace: "unifi:core:webrtc",
            payload: { name: "webrtc-connect", success: !0 },
            meta: Q,
          });
      },
      R = (I, _, P) => {
        r.delete(I);
        let {
            os: U,
            client: j,
            clientId: K,
            connectionId: J,
            clientVersion: F,
          } = P,
          $ = {
            os: U,
            client: j,
            clientId: K,
            connectionId: J,
            clientVersion: F,
            timeToConnect: I.timedOut ? P1 : null,
            trickle: !!I.trickle,
            isGuest: !!I.guestMeta,
          };
        I.guestMeta
          ? t.info(`WebRTC connection closed from guest peer, id: ${I.id}`, $)
          : t.info(
              `WebRTC connection closed from peer: ${I.userId}, id: ${I.id}`,
              $
            ),
          !I.didOpen &&
            lo("legacyTrace", {
              type: "event",
              namespace: "unifi:core:webrtc",
              payload: { name: "webrtc-connect", success: !1 },
              meta: $,
            });
      },
      N = async (I, _ = !1) => {
        let P = await i(),
          U = P.reduce(($, O, V) => (($[O] = V + 1), $), {});
        t.info("Creating peer with allowed interfaces: ", P.length ? U : "all");
        let j = {
            dnsResolveTimeoutMillis: e.webrtc.dnsResolveTimeoutMillis,
            iceServers: I.iceServers || e.webrtc.iceServers,
            interfaces: U,
            debug: !0,
            maxDataChannelMessageSize: e.webrtc.maxDataChannelMessageSize,
            bufferLimit: e.webrtc.maxBufferSize || 0,
          },
          K = new sde(j);
        r.set(K.id, K);
        let J = _ === !0 ? ($) => D(K, $, I) : ($) => A(K, $, I);
        K.once("debugpkg", ($) => h(K, $, I)),
          K.on("datachannel", J),
          K.once("open", ($) => C(K, $, I)),
          K.once(
            "close",
            ($) => (
              K.guestMeta &&
                K.guestMeta.timeout &&
                clearTimeout(K.guestMeta.timeout),
              r.delete(K.id),
              R(K, $, I)
            )
          );
        let F = setTimeout(() => {
          clearTimeout(F), !K.didOpen && ((K.timedOut = !0), K.close());
        }, P1);
        return K;
      },
      b = async (I, _) => {
        let P;
        try {
          P = (await lo("sharedToken.validate", I)).expiresAt;
        } catch (J) {
          throw J instanceof ude
            ? new nh(ih.STREAM_EXPIRED)
            : new nh(ih.INVALID_TOKEN);
        }
        for (let J of r.values())
          if (J.guestMeta && J.guestMeta.token === I)
            throw new nh(ih.STREAM_ALREADY_IN_USE);
        let U = await N(_, !0),
          j = { token: I },
          K = Math.min(Math.floor(P - Date.now()), 10 * 864e5);
        return (
          (j.timeout = setTimeout(() => {
            t.info(`Guest peer connection expired, closing peer id=${U.id}`),
              U.close();
          }, K)),
          (U.guestMeta = j),
          (U.trickle = !0),
          U
        );
      },
      T = async (I, _) => {
        let P = await N(_, !1);
        return (P.userId = I), (P.trickle = !0), P;
      },
      M = async (I, _, P) => {
        let U = await N(P, !1);
        U.userId = _;
        try {
          return await U.createAnswer(I, !0);
        } catch (j) {
          throw (U.close(), j);
        }
      },
      q = [cde(e, t)];
    await oh.all(q);
    let k = [
      hs("webrtc.config", (I) => p()),
      hs("webrtc.connect", (I, _, P, U) => M(_, P, U)),
      hs("webrtc.trickle", (I, _, P) => T(_, P)),
      hs("webrtc.trickleGuest", (I, _, P) => b(_, P)),
      hs("webrtc.checkPeerIsClosed", (I, _) => !r.has(_)),
      hs("webrtc.closeAllPeers", () => l()),
      hs("webrtc.getPeers", () => Array.from(r.values())),
      hs("webrtc.allowAllInterfaces", () => c()),
      hs("webrtc.restrictInterfaces", () => d()),
    ];
    return async () => (k.forEach((I) => ade(I)), oh.map(q, (I) => I()));
  };
});
var ch = w((FPe, O1) => {
  var mde = {
    PORT: 10001,
    VERSION_V1: 1,
    VERSION_V2: 2,
    MCAST_ADDR: "233.89.188.1",
    BCAST_ADDR: "255.255.255.255",
    CMD_INFO_V1: 0,
    CMD_INFO_V2: 6,
    HWADDR: 1,
    IPINFO: 2,
    FWVERSION: 3,
    USERNAME: 6,
    SALT: 7,
    RND_CHALLENGE: 8,
    CHALLENGE: 9,
    UPTIME: 10,
    HOSTNAME: 11,
    PLATFORM: 12,
    ESSID: 13,
    WMODE: 14,
    WEBUI: 15,
    SYSTEM_ID: 16,
    PLATFORM_FULL: 20,
    MODEL: 21,
    SW_VERSION: 22,
    MGMT_IS_DEFAULT: 23,
    DEVICE_ID: 32,
    GUID: 43,
    ADOPTED_BY_APPLICATION_UID: 46,
    PRIMARY_ADDRESS: 47,
    DIRECT_DOMAIN: 48,
    IS_STACKABLE: 49,
  };
  O1.exports = mde;
});
var _u = w((LPe, q1) => {
  "use strict";
  var fde = ch();
  q1.exports = B(v({}, fde), {
    parseMAC(e) {
      let t = "";
      for (let r = 0; r < e.length; r++) {
        let s = e[r].toString(16);
        s.length < 2 && (s = "0" + s), (t += s);
      }
      return t.toUpperCase();
    },
    formatMAC(e) {
      return Buffer.from(e.replace(/:/g, "").toUpperCase(), "hex");
    },
    parseIP(e) {
      let t = [];
      for (let r = 0; r < e.length; r++) t.push(e[r]);
      return t.join(".");
    },
    parseGUID(e) {
      let t = "";
      for (let r = 0; r < e.length; r++) {
        let s = e[r].toString(16);
        s.length < 2 && (s = "0" + s),
          [4, 6, 8, 10].includes(r) && (t += "-"),
          (t += s);
      }
      return t;
    },
    formatIP(e) {
      let t = Buffer.alloc(4),
        r = e.split(".");
      for (let s = 0; s < r.length; s++) t.writeUInt8(parseInt(r[s], 10), s);
      return t;
    },
    createPiece(e, t, r) {
      let s,
        a,
        o = Buffer.alloc(3);
      if (typeof t == "string") (a = Buffer.from(t)), (s = a.length);
      else if (typeof t == "boolean") (s = 1), (a = Buffer.from([t ? 1 : 0]));
      else if (typeof t == "number")
        if ((r || (r = "uint8"), r === "uint32" && t >= 0 && t <= 4294967295))
          (s = 4), (a = Buffer.allocUnsafe(s)), a.writeUInt32BE(t, 0);
        else if (r === "uint8" && t >= 0 && t <= 255)
          (s = 1), (a = Buffer.from([t]));
        else throw new Error(`${r} is out of range`);
      else if (Buffer.isBuffer(t)) (s = t.length), (a = t);
      else
        throw new Error(
          "Must be string, buffer, boolean or number between 0-255."
        );
      return (
        o.writeUInt8(e, 0), o.writeUInt16BE(s, 1), Buffer.concat([o, a], 3 + s)
      );
    },
    createResponse(e, t) {
      let r = e.name,
        s = e.platform,
        a = e.wmode,
        o = e.essid,
        n = e.firmwareVersion,
        i = e.interfaces,
        c = e.webPort,
        d = e.webProtocol,
        u = e.deviceId,
        p = e.sysid,
        l = e.uptime,
        f = e.isManaged,
        m = e.swVersion,
        E = e.model,
        y = e.hardwareAddress ? this.formatMAC(e.hardwareAddress) : null,
        h = e.primaryMac ? this.formatMAC(e.primaryMac) : null,
        S = e.primaryIp ? this.formatIP(e.primaryIp) : null,
        D = e.directConnectDomain,
        A = e.guid,
        C = e.isStackable,
        R = [],
        N = Buffer.alloc(4);
      for (let M in i)
        i[M].forEach((q) => {
          if (q.internal || q.family.toLowerCase() !== "ipv4") return;
          let k = this.formatMAC(q.mac),
            I = this.formatIP(q.address),
            _ = Buffer.concat([k, I], 10);
          R.push(this.createPiece(this.IPINFO, _)),
            y || (y = k),
            !h && !S && ((h = k), (S = I));
        });
      if (h && S) {
        let M = Buffer.concat([h, S], 10);
        R.push(this.createPiece(this.PRIMARY_ADDRESS, M));
      }
      y && R.push(this.createPiece(this.HWADDR, y)),
        D && R.push(this.createPiece(this.DIRECT_DOMAIN, D)),
        C && R.push(this.createPiece(this.IS_STACKABLE, C)),
        R.push(this.createPiece(this.HOSTNAME, r)),
        R.push(this.createPiece(this.PLATFORM, s)),
        R.push(this.createPiece(this.WMODE, a, "uint8")),
        R.push(this.createPiece(this.ESSID, o)),
        R.push(this.createPiece(this.FWVERSION, n)),
        u && R.push(this.createPiece(this.DEVICE_ID, u)),
        l && R.push(this.createPiece(this.UPTIME, l, "uint32")),
        typeof f != "undefined" &&
          R.push(this.createPiece(this.MGMT_IS_DEFAULT, f ? 0 : 1)),
        m && R.push(this.createPiece(this.SW_VERSION, m)),
        E && R.push(this.createPiece(this.MODEL, E)),
        A && R.push(this.createPiece(this.GUID, A));
      let b = Buffer.alloc(4);
      if (
        (b.writeUInt16BE(d === "https" ? 1 : 0, 0),
        b.writeUInt16BE(c || 80, 2),
        R.push(this.createPiece(this.WEBUI, b)),
        p)
      ) {
        let M = Buffer.allocUnsafe(2);
        M.writeUInt16LE(parseInt(p.toString(16), 16)),
          R.push(this.createPiece(this.SYSTEM_ID, M));
      }
      let T = 0;
      if ((R.forEach((M) => (T += M.length)), t === this.VERSION_V1))
        N.writeUInt8(this.VERSION_V1, 0), N.writeUInt8(this.CMD_INFO_V1, 1);
      else if (t === this.VERSION_V2)
        N.writeUInt8(this.VERSION_V2, 0), N.writeUInt8(this.CHALLENGE, 1);
      else throw new Error(`Not supported discovery response version ${t}`);
      return N.writeUInt16BE(T, 2), R.unshift(N), (T += 4), Buffer.concat(R, T);
    },
    parseResponse(e, t) {
      let r = 2,
        s = { addresses: [] },
        a = e.slice(r, r + 2);
      r += a.length;
      let o = a.readUInt16BE(0);
      if (r + o > e.length)
        throw new Error("Packet reports invalid data length");
      let n = o + 1 + 1 + 2;
      for (; r < n; ) {
        let i = e.readUInt8(r++);
        switch (
          ((a = e.slice(r, r + 2)),
          (o = a.readUInt16BE(0)),
          (r += a.length),
          (a = e.slice(r, r + o)),
          i)
        ) {
          case this.PRIMARY_ADDRESS:
            a.length === 10 &&
              ((s.mac = this.parseMAC(a.slice(0, 6))),
              (s.ip = this.parseIP(a.slice(6, 10))));
            break;
          case this.HWADDR:
            a.length === 6 && (s.hardwareAddress = this.parseMAC(a));
            break;
          case this.FWVERSION:
            s.firmware = a.toString();
            break;
          case this.HOSTNAME:
            s.hostname = a.toString();
            break;
          case this.PLATFORM:
            s.platform = a.toString();
            break;
          case this.IPINFO:
            if (a.length === 10) {
              let c = this.parseMAC(a.slice(0, 6)),
                d = this.parseIP(a.slice(6, 10));
              s.addresses.push({ mac: c, ip: d });
            }
            break;
          case this.WEBUI:
            a.length === 4 &&
              ((s.webProtocol = a.readUInt16BE(0) > 0 ? "https" : "http"),
              (s.webPort = a.readUInt16BE(2)));
            break;
          case this.WMODE:
            a.length === 4 ? (s.wmode = "wmode") : (s.wmode = a.readUInt8(0));
            break;
          case this.ESSID:
            s.essid = a.toString();
            break;
          case this.PLATFORM_FULL:
            s.platformFull = a.toString();
            break;
          case this.MODEL:
            s.model = a.toString();
            break;
          case this.GUID:
            a.length === 16
              ? (s.guid = this.parseGUID(a))
              : (s.guid = a.toString());
            break;
          case this.MGMT_IS_DEFAULT:
            a.length === 4
              ? (s.isManaged = !a.readUInt32BE(0))
              : a.length === 1 && (s.isManaged = !a.readUInt8());
            break;
          case this.UPTIME:
            s.uptime = a.readUInt32BE();
            break;
          case this.ADOPTED_BY_APPLICATION_UID:
            a.length === 16 &&
              (a.readUInt16BE() === 0
                ? (s.adoptedBy = null)
                : (s.adoptedBy = a.toString("hex")));
            break;
          case this.DEVICE_ID:
            s.deviceId = a.toString();
            break;
          case this.SYSTEM_ID:
            s.sysid = `0x${a.readUInt16LE().toString(16)}`;
            break;
          case this.SW_VERSION:
            s.swVersion = a.toString();
            break;
          case this.DIRECT_DOMAIN:
            s.directConnectDomain = a.toString();
            break;
          case this.IS_STACKABLE:
            s.isStackable = Boolean(a.readUInt8());
            break;
          default:
            break;
        }
        r += o;
      }
      return (
        s.addresses.length > 0 &&
          ((s.mac = s.mac || s.addresses[0].mac),
          (s.ip = s.ip || s.addresses[0].ip)),
        (s.hardwareAddress = s.hardwareAddress || s.mac),
        s
      );
    },
  });
});
var M1 = w((xPe, L1) => {
  "use strict";
  var hde = require("os"),
    yde = require("dgram"),
    wde = require("events"),
    xr = _u(),
    gde = 5e3;
  function F1(e, t) {
    return (...r) =>
      new Promise((s, a) => {
        e.apply(
          t,
          r.concat((o, n) => {
            o && a(o), s(n);
          })
        );
      });
  }
  L1.exports = class extends wde {
    static create(t) {
      let r = new this();
      for (let s in (t = t || {})) r[s] = t[s];
      return r.init(), r;
    }
    constructor() {
      super();
      (this.port = 0),
        (this.address = null),
        (this.exclusive = !1),
        (this.responderPort = xr.PORT),
        (this.broadcastAddr = xr.BCAST_ADDR),
        (this.multicastAddr = xr.MCAST_ADDR);
    }
    init() {}
    _scan(t, r) {
      t = t || gde;
      let s = Buffer.from([xr.VERSION_V1, xr.CMD_INFO_V1, 0, 0]),
        a = [],
        o = [],
        n = (c) => {
          ~o.indexOf(c.mac) ||
            (delete c.rinfo, o.push(c.mac), (!r || r(c)) && a.push(c));
        };
      this.on("discover", n);
      let i = new Promise((c, d) => {
        setTimeout(() => {
          this.removeListener("discover", n), c(a);
        }, t).unref();
      });
      return this.address === xr.BCAST_ADDR
        ? i
        : Promise.all([
            F1(this.socket.send, this.socket)(
              s,
              0,
              s.length,
              this.responderPort,
              this.multicastAddr
            ),
            F1(this.socket.send, this.socket)(
              s,
              0,
              s.length,
              this.responderPort,
              this.broadcastAddr
            ),
          ]).then(() => i);
    }
    addMembershipSafe(t, r, s) {
      if (r !== xr.BCAST_ADDR)
        try {
          t.addMembership(this.multicastAddr, r);
        } catch (a) {
          if (a && a.code === "ENOBUFS") {
            s.warn(
              `UDP multicast addMembership exceeded system treshold net.ipv4.igmp_max_memberships, interfaces: ${r}`
            );
            return;
          }
          throw a;
        }
    }
    scan(t, r, s) {
      return this.socket
        ? this._scan(t, s)
        : new Promise((a, o) => {
            let n = (this.socket = yde
              .createSocket({ type: "udp4", reuseAddr: !0 })
              .unref());
            n.on("message", (i, c) => {
              try {
                this.onResponse(i, c);
              } catch (d) {
                r.warn(
                  `Bad discovery message received from ${c.address}: ${d.message}`
                );
              }
            }),
              n.on("close", () => n.removeAllListeners()),
              n.on("error", (i) => {
                o(i), n.removeAllListeners(), n.close();
              }),
              n.bind(
                {
                  port: this.port,
                  address: this.address,
                  exclusive: this.exclusive,
                },
                () => {
                  let i = [];
                  try {
                    if (
                      (n.setBroadcast(!0),
                      n.setMulticastLoopback(this.loopback || !1),
                      this.address)
                    )
                      this.addMembershipSafe(n, this.address, r);
                    else {
                      let c = hde.networkInterfaces();
                      for (let d in c)
                        c[d].forEach((u) => {
                          u.internal ||
                            u.family.toLowerCase() !== "ipv4" ||
                            ~i.indexOf(d) ||
                            i.push(u.address);
                        });
                      i.forEach((d) => this.addMembershipSafe(n, d, r));
                    }
                    a(this._scan(t, s));
                  } catch (c) {
                    n.removeAllListeners(), n.close(), o(c);
                  }
                }
              );
          });
    }
    onResponse(t, r) {
      let s = t.readUInt8(0),
        a = t.readUInt8(1),
        o = t.readUInt16BE(2),
        n = { rinfo: r };
      if (
        (s === 1 || s === 2) &&
        (a === xr.CMD_INFO_V1 || a === xr.CMD_INFO_V2) &&
        o > 0
      )
        n = v(v({}, n), xr.parseResponse(t, r));
      else return;
      this.emit("discover", n);
    }
    close() {
      this.socket &&
        (this.socket.removeAllListeners(),
        this.socket.close(),
        (this.socket = null));
    }
  };
});
var H1 = w((jPe, G1) => {
  var gr = g(require("lodash"));
  ga();
  ta();
  Re();
  var Ede = require("os"),
    js = require("bluebird"),
    { publish: $r, subscribe: uh, unsubscribe: Sde } = require("handoff"),
    { fetch: bde } = ie(),
    { clearIntervalAsync: x1 } = require("set-interval-async"),
    { setIntervalAsync: $1 } = require("set-interval-async/dynamic"),
    { InMemoryRateLimiter: _de } = require("rolling-rate-limiter"),
    { errorCodes: Tde } = (se(), me),
    { getSystemInfo: Ide, getStackableConsoleRole: Ade } = H(),
    vde = M1(),
    Cde = _u(),
    { canStack: B1, canAdoptViaDiscovery: Dde } = (Ue(), We),
    { SECONDARY_ROLE: Nde } = cr(),
    Rde = Object.entries(Xt).reduce(
      (e, [t, { legacyShortname: r }]) => (
        r && e.push(r), e.push(t.toUpperCase()), e
      ),
      []
    ),
    {
      getControllers: Pde,
      getUnadoptedUnifiOSDevices: Ude,
      getDisabledApps: kde,
      getConsolesOnSameLocalNetwork: Ode,
      getUnadoptedWirelessDevices: qde,
      getSystemIsStarted: Fde,
    } = H(),
    {
      UPDATE_APP: Lde,
      SET_DISCOVERED_UNIFIOS_DEVICES: Mde,
      SET_CONSOLES_ON_SAME_LOCAL_NETWORK: xde,
    } = Z(),
    Tu = 3,
    $de = 20 * 1e3,
    V1 = null,
    dh = {},
    j1 = !1,
    Iu = [],
    ma = [],
    lh = !1,
    ph = ({ address: e, port: t }, r) => {
      let s = vde.create({ address: e, port: t });
      return (
        s.on("discover", async (a) => {
          let { rinfo: o } = a;
          if (await V1.limit(`${o.address}:${o.port}`)) {
            let { address: i, port: c } = s;
            r.warn(
              `Rate exceeded by ${o.address}:${o.port} - limiting client ${i}:${c}`
            ),
              s.close(),
              (ma = ma.filter((d) => d.address !== i && d.port !== c)),
              i && (delete dh[i], Iu.push(i)),
              setTimeout(() => {
                if ((r.info(`Reallowing client ${i}:${c}`), !i)) {
                  ma.push(ph({ port: c }, r));
                  return;
                }
                Iu = Iu.filter((d) => d !== i);
              }, $de);
          }
        }),
        s
      );
    },
    Bde = async (e) => {
      try {
        let t = Ede.networkInterfaces(),
          r = new Set(),
          { portStatus: s } = await Ide();
        if (
          (s &&
            s.length > 0 &&
            s.forEach((a) => {
              a.type.includes("WAN") && r.add(a.id);
            }),
          Object.keys(t).forEach((a) => {
            r.has(a) && t[a].forEach((o) => r.add(o.address));
          }),
          Object.keys(t).forEach((a) => {
            r.has(a) ||
              t[a].forEach((n) => {
                if (n.internal || n.family.toLowerCase() !== "ipv4") return;
                if (
                  !r.has(n.address) &&
                  !dh[n.address] &&
                  !Iu.includes(n.address)
                ) {
                  dh[n.address] = a;
                  let c = ph({ address: n.address, port: 0 }, e);
                  ma.push(c);
                }
              });
          }),
          !j1)
        ) {
          j1 = !0;
          let a = ph({ address: Cde.BCAST_ADDR, port: 10001 }, e);
          ma.push(a);
        }
      } catch (t) {
        e.error("Failed to add UDP clients:", t);
      }
    },
    Vde = (e) =>
      e.filter((t, r) => {
        if (t.firmware && t.firmware.includes("unifi-protect")) {
          let s = [...e];
          return (
            s.splice(r, 1),
            s.find((o) => o.hardwareAddress === t.hardwareAddress) === void 0
          );
        }
        return !0;
      }),
    jde = async (e, t) => {
      await Bde(t);
      let r = await js.all(
          ma.map(async (o) => {
            try {
              return await o.scan(e, t);
            } catch (n) {
              let {
                port: i,
                address: c,
                exclusive: d,
                responderPort: u,
                broadcastAddr: p,
                multicastAddr: l,
              } = o;
              return (
                t.warn(
                  `Error on client scan: ${
                    n && n.message
                  }; client: ${JSON.stringify({
                    port: i,
                    address: c,
                    exclusive: d,
                    responderPort: u,
                    broadcastAddr: p,
                    multicastAddr: l,
                  })}`
                ),
                []
              );
            }
          })
        ),
        s = Vde(r.flat());
      return (0, gr.uniqBy)(s, (o) => o.hardwareAddress || o.mac) || [];
    },
    mh = async (e) =>
      e.reduce((r, s) => {
        r.has(s.controller) || r.set(s.controller, []);
        let a = r.get(s.controller).findIndex(({ model: o }) => o === s.model);
        if (a < 0)
          r.get(s.controller).push({
            model: s.model,
            name: s.name,
            iconId: s.iconId,
            addresses: [s.addresses],
            totalCount: 1,
            stackable: s.isStackable,
            updateRequiredToStack: s.updateRequiredToStack,
          });
        else {
          let o = r.get(s.controller)[a];
          (o.totalCount += 1), o.addresses.push(s.addresses);
        }
        return r;
      }, new Map()),
    Gde = async (e, t, r) => {
      let s = e.filter(
          (n) =>
            !(
              (!Dde([n.platform]) && !B1([n.platform])) ||
              n.hardwareAddress === t ||
              Boolean(n.wmode || n.isManaged)
            )
        ),
        a = await js.filter(s, async (n) => {
          try {
            return B1([n.platform]) &&
              (!(await on()) ||
                (await $r("stackable.isUnstackConsoleUpdating", n.mac)))
              ? !1
              : (await bde(`http://${n.ip}/api/system`, { timeout: 3e3 })).ok;
          } catch (i) {
            return (
              r.warn(
                "Failed to reach to the adopted discovered console:",
                n,
                i
              ),
              !1
            );
          }
        }),
        o = await js.all(a.map((n) => $r("fingerprint.identifyDevice", n)));
      return (await mh(o)).get("unifiOS") || [];
    },
    Hde = async (e, t) => {
      let r = new Map(Object.keys(e.controllers).map((u) => [u, Tu]));
      V1 = new _de({
        interval: e.discovery.discoveryInterval,
        maxInInterval: 10,
      });
      let s = [[], []],
        a = (u) => {
          let p = u.filter((m) => m.controller === "talk"),
            [l = [], f = []] = s;
          return (
            l.length && (u = (0, gr.unionBy)(u, l, "addresses.mac")),
            f.length && (u = (0, gr.unionBy)(u, f, "addresses.mac")),
            (s[0] = f),
            (s[1] = p),
            u
          );
        },
        o = async (u) => {
          let p = await qde(),
            l = await js
              .all([...u, ...p].map((C) => $r("fingerprint.identifyDevice", C)))
              .filter((C) => C && C.controller);
          l = a(l);
          let f = l.filter((C) => !C.isManaged);
          await $r("applications.deviceList.discover", l);
          let m = await mh(l),
            E = await mh(f),
            [y, h] = await js.all([Pde(), kde()]),
            S = y.filter((C) => !C.adoptionDisabled),
            D = S.filter(({ state: C, isInstalled: R, name: N }) => {
              let b = r.get(N);
              return C === ot.ACTIVE
                ? (b < Tu && r.set(N, Tu), !1)
                : R && C === ot.INACTIVE && !h.includes(N) && m.has(N) && b > 0;
            });
          !lh &&
            !(await Fde()) &&
            (await js.all(
              D.map(({ name: C }) => {
                let R = r.get(C) - 1;
                return (
                  r.set(C, R),
                  t.info(
                    `Starting controller ${C}, tries left after this attempt:`,
                    R
                  ),
                  $r("controllers.enable", C, { source: "ucore-discovery" })
                    .then(() => {
                      t.info(`Succeeded starting ${C} on discovery.`),
                        r.set(C, Tu);
                    })
                    .catch((N) => {
                      N && N.code === Tde.FAILED_TO_MANAGE_MASKED_SERVICE.code
                        ? t.warn(
                            `Failed to enable ${C} on discovery, service is masked`
                          )
                        : t.error(
                            `Failed to enable ${C} on discovery`,
                            N && N.message
                          );
                    })
                );
              })
            ));
          let A = S.reduce((C, R) => {
            let { hidden: N, unadoptedDevices: b, name: T } = R,
              M = {};
            if (m.has(T)) {
              let q = (0, gr.sortBy)(E.get(T), "model");
              N && (M.hidden = !1),
                (0, gr.isEqual)(b, q) || (M.unadoptedDevices = q);
            } else (!b || b.length !== 0) && (M.unadoptedDevices = []);
            return (
              Object.entries(M).length !== 0 && C.push(v({ name: T }, M)), C
            );
          }, []);
          await js.all(
            A.map((N) => {
              var b = N,
                { name: C } = b,
                R = dt(b, ["name"]);
              return $r("redux.dispatch", Lde, { name: C, updates: v({}, R) });
            })
          ),
            A.length &&
              t.info(
                `Controllers info updated due to device discovery: ${A.map(
                  ({ name: C }) => C
                )}`
              );
        },
        n = async () => {
          try {
            let [u, { mac: p }, l] = await js.all([
              jde(e.discovery.discoveryInterval, t),
              $r("system.info"),
              Ade(),
            ]);
            if (
              (u.sort((h, S) =>
                h.hardwareAddress < S.hardwareAddress
                  ? -1
                  : h.hardwareAddress > S.hardwareAddress
                  ? 1
                  : 0
              ),
              l === Nde)
            )
              try {
                await $r("stackable.updatePrimaryHost", u);
              } catch (h) {
                t.warn("Failed to update the primary host", h);
              }
            let f = u
                .filter((h) => {
                  let S = Boolean(h.wmode || h.isManaged);
                  return (
                    Rde.includes(h.platform) && S && h.hardwareAddress !== p
                  );
                })
                .map((h) => ({
                  mac: h.hardwareAddress,
                  directConnectDomain: h.directConnectDomain,
                })),
              m = await Ode();
            (0, gr.isEqual)(m, f) ||
              (t.info("Update Unifi consoles on same local network:", f),
              await $r("redux.dispatch", xde, f));
            let E = await Gde(u, p, t),
              y = await Ude();
            (0, gr.isEqual)(y, E) ||
              (t.info("Update unadopted Unifi console:", E),
              await $r("redux.dispatch", Mde, E)),
              await o(u);
          } catch (u) {
            t.error("Discovery error, ", u);
          }
        },
        i = $1(n, e.discovery.discoveryInterval + 500);
      t.info("Discovery Client is now listening on ports 0 10001");
      let c = () => {
          (lh = !1), !i && (i = $1(n, e.discovery.discoveryInterval + 500));
        },
        d = [
          uh("events.backupImportStarted", async () => {
            (lh = !0),
              i && (await x1(i)),
              (i = null),
              t.info("Discovery stopped because of restore started");
          }),
          uh("events.backupImportFinished", c),
          uh("events.backupImportCanceled", c),
        ];
      return async () => {
        d.map((u) => Sde(u)), i && (await x1(i)), ma.forEach((u) => u.close());
      };
    };
  G1.exports = Hde;
});
var J1 = w((HPe, z1) => {
  var W1 = require("os"),
    Wde = require("dgram"),
    Kde = require("events"),
    Yde = require("private-ip"),
    { publish: zde } = require("handoff"),
    { getHasInternet: Jde } = H(),
    {
      VERSION_V1: Xde,
      VERSION_V2: Qde,
      CMD_INFO_V1: Zde,
      RND_CHALLENGE: ele,
      PORT: K1,
      MCAST_ADDR: tle,
      BCAST_ADDR: rle,
    } = ch(),
    sle = _u(),
    Y1 = 0;
  z1.exports = class extends Kde {
    static create(t) {
      let r = new this();
      for (let s in (t = t || {})) r[s] = t[s];
      return r.init(), r;
    }
    constructor() {
      super();
      (this.port = K1),
        (this.broadcastAddr = rle),
        (this.multicastAddr = tle),
        (this.address = null),
        (this.exclusive = !1),
        (this.reuseAddr = !0),
        (this.name = "NO NAME"),
        (this.platform = "UNSPECIFIED"),
        (this.wmode = 0),
        (this.essid = ""),
        (this.webPort = 443),
        (this.webProtocol = "https"),
        (this.firmwareVersion = "X.Y.v1.0.0.0"),
        (this.interfaces = null),
        (this.sysid = 0),
        (this.primaryMac = null),
        (this.primaryIp = null),
        (this.deviceId = null),
        (this.directConnectDomain = null),
        (this.isStackable = !1);
    }
    init() {}
    start() {
      return new Promise((t, r) => {
        (this.socket = Wde.createSocket({
          type: "udp4",
          reuseAddr: this.reuseAddr,
        })),
          this.socket.on("message", (...s) => this.onCommand(...s)),
          this.socket.on("error", (s) => {
            r(s), this.socket.close(), (this.socket = null);
          }),
          this.socket.bind(
            { port: K1, address: this.address, exclusive: this.exclusive },
            async () => {
              let s = await this.getMulticastInterfaces();
              try {
                if (
                  (this.socket.setBroadcast(!0),
                  this.socket.setMulticastLoopback(!1),
                  s.length)
                )
                  for (let a of s)
                    this.socket.addMembership(this.multicastAddr, a);
                else this.socket.addMembership(this.multicastAddr);
                t();
              } catch (a) {
                this.socket.close(), (this.socket = null), r(a);
              }
            }
          );
      });
    }
    stop() {
      return this.close(), Promise.resolve();
    }
    close() {
      this.socket && (this.socket.close(), (this.socket = null));
    }
    onCommand(t, r) {
      try {
        let s = t.readUInt8(0),
          a = t.readUInt8(1),
          o = t.readUInt16BE(2);
        if (r.port === this.port || !Yde(r.address)) return;
        this.emit("command", t, r),
          ((s === Xde && a === Zde && o === Y1) ||
            (s === Qde && a === ele && o === Y1)) &&
            this.sendDiscoveryResponse(r.port, r.address, s);
      } catch (s) {
        return this.emit("error", s);
      }
    }
    sendDiscoveryResponse(t, r, s) {
      let a = sle.createResponse(
        {
          interfaces: this.interfaces || W1.networkInterfaces(),
          primaryMac: this.primaryMac,
          primaryIp: this.primaryIp,
          name: this.name,
          platform: this.platform,
          wmode: this.wmode,
          essid: this.essid,
          webPort: this.webPort,
          webProtocol: this.webProtocol,
          firmwareVersion: this.firmwareVersion,
          hardwareAddress: this.hardwareAddress,
          sysid: this.sysid,
          deviceId: this.deviceId,
          uptime: this.uptime,
          isManaged: this.isManaged,
          swVersion: this.swVersion,
          model: this.model,
          directConnectDomain: this.directConnectDomain,
          guid: this.guid,
          isStackable: this.isStackable,
        },
        s
      );
      this.send(a, t, r).catch((o) => {
        this.emit("error", o);
      });
    }
    send(...t) {
      return new Promise((r, s) => {
        this.socket.send.apply(
          this.socket,
          t.concat((a, o) => (a && s(a), o))
        );
      });
    }
    destroy() {
      this.stop();
    }
    async getMulticastInterfaces() {
      let [t, r] = await Promise.all([zde("system.device"), Jde()]);
      if (!t.features.hasGateway || r) return [];
      let s = [],
        a = W1.networkInterfaces();
      for (let [o, n] of Object.entries(a)) {
        if (!o.startsWith("br")) continue;
        let i = n.find((c) => c.family === "IPv4")?.address;
        i && s.push(i);
      }
      return s;
    }
  };
});
var Z1 = w((KPe, Q1) => {
  ta();
  var { publish: fh } = require("handoff"),
    { takeEvery: X1 } = require("redux-saga/effects"),
    ale = J1(),
    { UPDATE_SYSTEM_INFO: ole, UPDATE_HAS_INTERNET: nle } = Z(),
    {
      getIsSetup: ile,
      getControllers: cle,
      getDirectConnectDomain: ule,
      getCloudSettings: dle,
    } = H(),
    lle = 10 * 1e3;
  Q1.exports = async (e, t) => {
    let r = ale.create({ logger: t }),
      s = async (n) => {
        let [i, c, d, u, p] = await Promise.all([
          ile(),
          cle(),
          ule(),
          fh("system.device"),
          dle(),
        ]);
        (r.name = n.hostname),
          (r.platform = n.hardware.shortname),
          (r.firmwareVersion = n.hardware.firmwareVersion),
          (r.interfaces = n.network.interfaces),
          (r.hardwareAddress = n.mac),
          (r.primaryMac = n.mac),
          (r.primaryIp = n.ip),
          (r.uptime = n.uptime),
          (r.isManaged = i),
          (r.deviceId = p?.deviceId),
          (r.directConnectDomain = d),
          (r.guid = u.guid),
          (r.isStackable = !i && (await on()));
        let l = c.find((m) => m.name === "protect");
        l &&
          ((r.webProtocol = "http"),
          (r.webPort = "7080"),
          (r.wmode = l.isConfigured));
        let f = c.find((m) => m.name === "network");
        f && ((r.swVersion = f.version), (r.model = n.hardware.shortname));
      },
      a = async () => {
        try {
          await r.start();
          let n = r.socket.address();
          t.info(`Discovery responder listening on ${n.address}:${n.port}`);
        } catch (n) {
          return (
            t.warn(`Failed to start discovery responder: ${n.message}`),
            setTimeout(() => a(), lle).unref(),
            null
          );
        }
      };
    r.on("error", (n) => {
      t.error(`Error in discovery responder: ${n.message}`);
    });
    let o = [
      function* () {
        yield X1(ole, ({ payload: n }) => {
          s(n);
        });
      },
      function* () {
        yield X1(nle, async ({ payload: n }) => {
          n === !0 && (await r.stop(), await a());
        });
      },
    ];
    return (
      o.forEach((n) => fh("redux.saga.add", n)),
      a(),
      async () => {
        try {
          r.stop()
          o.forEach((n) =>
            fh("redux.saga.remove", n).catch((i) => {
              // t.error("Failed to redux.saga.remove:", i);
            })
          );
        } catch(e) {
          console.log(e)
        }
      }
    );
  };
});
var rB = w((YPe, tB) => {
  var ple = H1(),
    mle = Z1(),
    eB = require("bluebird");
  tB.exports = async (e, t) => {
    let r = [
      ple(e, t.wrap("discovery.client")),
      mle(e, t.wrap("discovery.responder")),
    ];
    return await eB.all(r), async () => eB.map(r, (s) => s());
  };
});
var oB = w((zPe, aB) => {
  var sB = "(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])",
    po = `\\b(${sB}\\.){3}${sB}\\b`,
    et = "[0-9a-fA-F]{1,4}",
    Au = "[a-fA-F0-9]{2}",
    fle = "(?<![0-9a-zA-Z_-])",
    hle = {
      "censored-ipv4": [
        new RegExp(`\\b(${et}:){4}(:${et}){0,1}:${po}`, "g"),
        new RegExp(`\\b(${et}:){3}(:${et}){0,2}:${po}`, "g"),
        new RegExp(`\\b(${et}:){2}(:${et}){0,3}:${po}`, "g"),
        new RegExp(`\\b(${et}:){1}(:${et}){0,4}:${po}`, "g"),
        new RegExp(`:(:${et}){0,5}:${po}`, "g"),
        new RegExp(`${po}`, "g"),
      ],
      "censored-ipv6": [
        new RegExp(`\\b(${et}:){7}${et}\\b`, "g"),
        new RegExp(`\\b(${et}:){5}(:${et}){1,2}\\b`, "g"),
        new RegExp(`\\b(${et}:){4}(:${et}){1,3}\\b`, "g"),
        new RegExp(`\\b(${et}:){3}(:${et}){1,4}\\b`, "g"),
        new RegExp(`\\b(${et}:){2}(:${et}){1,5}\\b`, "g"),
        new RegExp(`\\b(${et}:){1}(:${et}){1,6}\\b`, "g"),
        new RegExp(`\\b(${et}:){1,7}:`, "g"),
        new RegExp(`:(:${et}){1,7}\\b`, "g"),
      ],
      "censored-mac": [
        new RegExp(`${fle}${Au}([ :-]?)(${Au}\\1){4}${Au}\\b`, "g"),
      ],
      "censored-cloud-device-id": [new RegExp(`\\b(${Au}){30}:\\d+\\b`)],
    };
  aB.exports = (e) =>
    typeof e != "string"
      ? e
      : Object.entries(hle).reduce((t, [r, s]) => {
          let a = t;
          for (let o of s) a = a.replace(o, r);
          return a;
        }, e);
});
var cB = w((JPe, iB) => {
  var { publish: nB } = require("handoff"),
    { throttle: yle } = require("lodash"),
    { getConsoleMeta: wle } = (Do(), gd),
    gle = 5 * 60 * 1e3,
    mo = {},
    Ele = async (e) => {
      let { anonymous_device_id: t, hardware: r } = await nB("system.info"),
        s = await wle({ board_rev: r.hwrev, unifi_core_version: e.version });
      await Promise.all(
        Object.keys(mo).map(async (a) => {
          await nB("trace", {
            namespace: "unifi:core:cloud:reconnect",
            type: "event",
            payload: { reason: a, count: mo[a] },
            meta: s,
          });
        })
      ),
        (mo = {});
    },
    Sle = yle(Ele, gle, { leading: !1, trailing: !0 });
  iB.exports = async (e, t, r) => {
    try {
      mo[r] || (mo[r] = 0), (mo[r] += 1), await Sle(e);
    } catch (s) {
      t.error("Failed to send reconnect trace event:", s);
    }
  };
});
var pB = w((XPe, lB) => {
  var { publish: uB } = require("handoff"),
    { throttle: ble } = require("lodash"),
    { getConsoleMeta: _le } = (Do(), gd),
    dB = "***",
    Tle = 60 * 5 * 1e3,
    fo = {},
    Ile = (e, t) => `${e}${dB}${t}`,
    Ale = (e) => {
      let t = e.split(dB);
      return { topic: t[0], reason: t[1] };
    },
    vle = async (e) => {
      let { anonymous_device_id: t, hardware: r } = await uB("system.info"),
        s = await _le({ board_rev: r.hwrev, ucore_version: e.version });
      await Promise.all(
        Object.keys(fo).map(async (a) => {
          let { topic: o, reason: n } = Ale(a);
          await uB("trace", {
            namespace: "unifi:core:cloud:resubscribe",
            type: "event",
            payload: { topic: o, reason: n, count: fo[a] },
            meta: s,
          }),
            (fo[a] = 0);
        })
      );
    },
    Cle = ble(vle, Tle, { leading: !1, trailing: !0 });
  lB.exports = async (e, t, r, s) => {
    try {
      let a = Ile(r, s);
      fo[a] || (fo[a] = 0), (fo[a] += 1), await Cle(e);
    } catch (a) {
      t.error("Failed to send resubscribe trace:", a);
    }
  };
});
var bB = w((eUe, SB) => {
  var mB = g(require("cron")),
    vt = g(require("handoff")),
    fB = g(require("node-fetch")),
    hB = g(require("os"));
  Ei();
  var yB = g(Wa()),
    Bt = g(H()),
    wB = g(oB());
  Do();
  var gB = g(cB()),
    EB = g(pB()),
    Vn,
    Dle = async (e, t) => {
      let r = async ({
          type: i,
          namespace: c,
          payload: d,
          meta: u,
          source: p,
          timestamp: l,
        }) => {
          try {
            let f = await (0, Bt.getSendDiagnostics)();
            if (f !== "anonymous" && f !== "full") return !1;
            let m = {
                namespace: c,
                type: i,
                meta: u,
                payload: {
                  contentType: "application/json",
                  data: JSON.stringify(d),
                },
                timestamp: l || Date.now(),
                source: p,
              },
              E = e.cloud[e.cloudEnv].traceUrl,
              y = JSON.stringify({ traces: [m] });
            t.debug("sending trace: ", y);
            let h = await (0, fB.default)(E, {
                method: "PUT",
                body: f === "anonymous" ? (0, wB.default)(y) : y,
                headers: { "Content-Type": "application/json" },
              }),
              S = await h.json();
            return (
              t.debug("trace response: ", h.status, h.statusText, S),
              S.errors.length &&
                (t.warn("Received error response from server"), t.warn(S)),
              !0
            );
          } catch (f) {
            return (
              ((await (0, Bt.getInternetRequired)()) || !(0, yB.default)(f)) &&
                t.warn(
                  `Error during metric send type="${i}" namespace="${c}"`,
                  f
                ),
              !1
            );
          }
        },
        s = async () => {
          let { namespace: i } = await (0, vt.publish)("system.device");
          return i;
        },
        a = async () => {
          let [i, c] = await Promise.all([
              (0, vt.publish)("system.info"),
              (0, Bt.getDeviceState)(),
            ]),
            { hardware: d } = i,
            { firmwareVersion: u, shortname: p } = d;
          return {
            app: e.app,
            version: e.version,
            deviceState: c,
            platform: p,
            firmwareVersion: u,
          };
        },
        o = async () => {
          let [{ updateSchedule: i, hardware: c }, d, u, p, l] =
              await Promise.all([
                (0, vt.publish)("system.info"),
                (0, vt.publish)("system.setup.getSetupDeviceId"),
                (0, Bt.getIsSetup)(),
                (0, Bt.getFWReleaseChannel)(),
                (0, Bt.getControllers)(),
              ]),
            f = {},
            m = l.reduce((A, C) => {
              let R;
              if (C.info)
                switch (C.name) {
                  case "network":
                    (R = (C.info.apCount || 0) + (C.info.switchCount || 0)),
                      (f.network = C.version);
                    break;
                  case "protect":
                    (R = C.info.managedCameras || 0), (f.protect = C.version);
                    break;
                  case "access":
                    (R =
                      (C.info.doorCount || 0) +
                      (C.info.uahCount || 0) +
                      (C.info.udaProCount || 0) +
                      (C.info.udaLiteCount || 0)),
                      (f.access = C.version);
                    break;
                  case "led":
                    (R =
                      (C.info.ledsOn || 0) +
                      (C.info.ledsOff || 0) +
                      (C.info.panelsOnline || 0) +
                      (C.info.panelsOffline || 0)),
                      (f.led = C.version);
                    break;
                  case "talk":
                    (R = C.info.phones || 0), (f.talk = C.version);
                    break;
                  default:
                    R = 0;
                }
              else R = 0;
              return B(v({}, A), {
                [C.name]: {
                  isConfigured: C.isConfigured,
                  isInstalled: C.isInstalled,
                  isRunning: C.isRunning,
                  adoptedDevices: R,
                },
              });
            }, {}),
            E = await br({
              board_rev: c.hwrev,
              version: e.version,
              controller_versions: f,
            });
          await (0, vt.publish)("trace", {
            namespace: "unifi:core:devices_setup",
            type: "daily_report",
            payload: v(
              {
                isSetupComplete: u,
                setup_device_id: d,
                uptime: hB.default.uptime(),
                auto_update: !!i,
                auto_update_time: i ? i.hour : null,
                auto_update_frequency: i ? i.frequency : null,
                auto_update_day: i && i.frequency === "weekly" ? i.day : null,
                release_channel: p,
              },
              m
            ),
            meta: E,
          });
          let { free: y, total: h } = await Ys(),
            S = h ? h - y : 0,
            D = await br({ ucore_version: e.version, board_rev: c.hwrev });
          await (0, vt.publish)("trace", {
            namespace: "unifi:core:analytics:metric",
            type: "report",
            payload: {
              metric_name: "memory_usage",
              metric_value: S,
              metric_baseline: h,
              measure_type: "instant",
              metric_unit: "kilobytes",
            },
            meta: D,
          });
        },
        n = [
          (0, vt.subscribe)("trace", (i, c) => r(c)),
          (0, vt.subscribe)(
            "legacyTrace",
            async (i, c, { withSource: d = !0 } = {}) =>
              r(
                B(v({}, c), {
                  meta: await br(c.meta),
                  source: d ? await a() : void 0,
                })
              )
          ),
          (0, vt.subscribe)("trace.networkSetup", async (i, c) =>
            r(
              B(v({}, c), {
                meta: await wd(e, c.meta, c.userAgent),
                namespace: await s(),
              })
            )
          ),
          (0, vt.subscribe)("app.ready", async () => {
            if (!Vn) {
              let i = await (0, Bt.getTimezone)(),
                c = Math.round(Math.random() * 59),
                d = Math.round(Math.random() * 59);
              Vn = new mB.default.CronJob(
                `${c} ${d} 0 * * *`,
                async () => {
                  try {
                    await o();
                  } catch (u) {
                    t.warn("Failed to send daily trace", u);
                  }
                },
                null,
                !0,
                i
              );
            }
          }),
          (0, vt.subscribe)("trace.cloud.reconnect", (i, c) =>
            (0, gB.default)(e, t, c)
          ),
          (0, vt.subscribe)("trace.cloud.resubscribe", (i, c, d) =>
            (0, EB.default)(e, t, c, d)
          ),
        ];
      return () => {
        Vn && (Vn.stop(), (Vn = null)),
          n.forEach((i) => (0, vt.unsubscribe)(i));
      };
    };
  SB.exports = Dle;
});
var IB = w((tUe, TB) => {
  var { Transform: Nle } = require("stream"),
    _B = class extends Nle {
      constructor(t, r) {
        super(r);
        (this.iv = t), (this.added = !1);
      }
      _transform(t, r, s) {
        this.added || (this.push(this.iv), (this.added = !0)),
          this.push(t),
          s();
      }
    };
  TB.exports = _B;
});
var NB = w((rUe, DB) => {
  var ys = require("fs-extra"),
    jn = require("crypto"),
    { subscribe: vu, unsubscribe: Rle } = require("handoff"),
    AB = require("@ubnt/encrypted-archive"),
    Ple = IB(),
    { AppError: Ule, errorCodes: kle } = (se(), me),
    vB = require("util").promisify(require("stream").pipeline),
    CB = "ubiquiti";
  DB.exports = ({ config: e, logger: t }) => {
    let r = async (i, c, d) => {
        await AB.encrypt(ys.createReadStream(i), ys.createWriteStream(c), d);
      },
      s = async (i, c, d, u, p, l) => {
        try {
          let f = ys.createReadStream(i),
            m = ys.createWriteStream(c);
          await Promise.race([
            new Promise((E, y) => {
              let h = !1,
                S = (...D) => {
                  if (!h) return (h = !0), y(...D);
                };
              f.once("error", S), m.once("error", S);
            }),
            AB.decrypt(f, m, {
              password: d,
              pepper: l,
              uuid: u,
              privateKey: p,
            }),
          ]);
        } catch (f) {
          throw f.code === "ERR_OSSL_EVP_BAD_DECRYPT"
            ? new Error("Wrong password")
            : f;
        }
        return c;
      },
      a = (i, c) =>
        new Promise(async (d, u) => {
          try {
            let p = jn.createHash("sha256").update(CB).digest(),
              l = jn.randomBytes(16),
              f = jn.createCipheriv("aes256", p, l),
              m = new Ple(l),
              E = ys.createReadStream(i),
              y = ys.createWriteStream(c);
            E.on("error", (h) => u(h)),
              y.on("error", (h) => u(h)),
              await vB(E, f, m, y),
              d(c);
          } catch (p) {
            u(p);
          }
        }),
      o = (i, c) =>
        new Promise((d, u) => {
          let p,
            l = ys.createReadStream(i, { end: 15 });
          l.on("data", (f) => {
            p = f;
          }),
            l.on("error", (f) => {
              u(f);
            }),
            l.on("close", async () => {
              try {
                let f = jn.createHash("sha256").update(CB).digest(),
                  m = ys.createReadStream(i, { start: 16 }),
                  E = jn.createDecipheriv("aes256", f, p),
                  y = ys.createWriteStream(c);
                await vB(m, E, y), d();
              } catch (f) {
                u(new Ule(kle.BAD_FILE));
              }
            });
        }),
      n = [
        vu("chiper.encryptFile", async (i, ...c) => r(...c)),
        vu("chiper.decryptFile", async (i, ...c) => s(...c)),
        vu("chiper.encryptLocalBackup", async (i, ...c) => a(...c)),
        vu("chiper.decryptLocalBackup", async (i, ...c) => o(...c)),
      ];
    return () => {
      n.forEach((i) => Rle(i));
    };
  };
});
var UB = w((aUe, PB) => {
  var { publish: RB } = require("handoff"),
    { setIntervalAsync: Ole } = require("set-interval-async/dynamic"),
    { clearIntervalAsync: qle } = require("set-interval-async"),
    { getApps: Fle, getName: sUe } = H(),
    Lle = Ce();
  PB.exports = (e, t) => {
    let r = async () => {
        try {
          let i = (await Fle())
              .filter((u) => u.state === "active")
              .map((u) => e.controllers[u.name].serviceName),
            { stdout: c } = await Lle(
              `systemctl show --property=MemoryCurrent --property=Id unifi-core ulp-go ${i.join(
                " "
              )}`
            );
          c.split(
            `

`
          ).forEach((u) => {
            let p = {};
            u
              .split(
                `
`
              )
              .forEach((f) => {
                let [m, E] = f.split("=");
                p[m] = E;
              }),
              t.info(`Memory usage for ${p.Id} = ${p.MemoryCurrent}`);
          });
        } catch (i) {
          t.warn("Failed to get memory usage data", i.message);
        }
      },
      s = async () => {
        try {
          let i = await RB("webrtc.getPeers");
          t.info(`Open WebRTC peer connections: ${i.length}`);
        } catch (i) {
          t.warn("Failed to get WebRTC connection count", i.message);
        }
      },
      a = async () => {
        try {
          let i = await RB("redux.wsUpdates.count");
          t.info(`Open WebSocket update channels: ${i}`);
        } catch (i) {
          t.warn("Failed to get WebSocket update channel count", i.message);
        }
      },
      n = Ole(async () => Promise.all([r(), s(), a()]), e.health.interval);
    return async () => {
      await qle(n);
    };
  };
});
var Gn = w((oUe, qB) => {
  var kB = require("node-fetch"),
    Mle = 304,
    OB = new Map(),
    xle = async (e, t = {}) => {
      let r = OB.get(e),
        s = null;
      if (r) {
        if (
          ((s = await kB(e, B(v({}, t), { headers: { "If-None-Match": r } }))),
          s.status === Mle)
        )
          return null;
      } else s = await kB(e, t);
      if (!s.ok) {
        let o = new Error(
          `Fetch failed with status code ${s.status}`,
          s.statusText
        );
        throw ((o.status = s.status), o);
      }
      let a = s.headers.get("etag");
      return a && a !== r && OB.set(e, a), s;
    },
    $le = ({ platform: e, platformFull: t, model: r }) =>
      e || t || r ? { k1: e, k2: t, k3: r } : null,
    Ble = ({ k1: e = "", k2: t = "", k3: r = "" }) => `${e}|${t}|${r}`;
  qB.exports = {
    fetchIfNotModified: xle,
    makeDeviceTriplet: $le,
    makeTripletKey: Ble,
  };
});
var hh = w((nUe, FB) => {
  FB.exports = {
    FINGERPRINT_REFRESH_INTERVAL_MS: 60 * 60 * 1e3,
    UI_DB_BUNDLED_COPY_PATH: "./data/uidb.json",
  };
});
var $B = w((iUe, xB) => {
  var { throttle: Vle } = require("lodash"),
    { publish: jle } = require("handoff"),
    Cu = require("fs-extra"),
    { getHasInternet: Gle } = H(),
    { fetchIfNotModified: Hle, makeTripletKey: Wle } = Gn(),
    { FINGERPRINT_REFRESH_INTERVAL_MS: Kle, UI_DB_BUNDLED_COPY_PATH: Yle } =
      hh(),
    LB = (e) => {
      let t = e.devices || [],
        r = {
          byGUID: new Map(),
          byTripletKey: new Map(),
          byShortname: new Map(),
          bySysId: new Map(),
          reservedNames: new Set(),
        };
      return (
        t.forEach((s) => {
          s.triplets.forEach((a) => {
            let o = Wle(a);
            r.byTripletKey.set(o, s),
              Object.values(a).forEach((n) => r.reservedNames.add(n));
          }),
            s.shortnames.forEach((a) => {
              r.byShortname.set(a, s), r.reservedNames.add(a);
            }),
            s.guids.forEach((a) => {
              r.byGUID.set(a, s);
            }),
            s.sysid && r.bySysId.set(s.sysid, s);
        }),
        r
      );
    },
    zle = async (e, t) => {
      try {
        let r = await Hle(e.discovery.uidbUrl, {
          timeout: e.discovery.discoveryInterval,
        });
        if (!r) return null;
        let s = await r.json();
        return (
          Cu.writeJSON(e.discovery.uidbLocalPath, s)
            .then(() => {
              t.info(`UI DB data saved to local file (version ${s.version})`);
            })
            .catch((o) => {
              t.error("Failed to save UI DB data to local file", o);
            }),
          LB(s)
        );
      } catch (r) {
        throw (t.warn("Failed to fetch fingerprint DB", r), r);
      }
    },
    Jle = async (e, t) => {
      try {
        let r = null;
        return (
          (await Cu.pathExists(e.discovery.uidbLocalPath))
            ? ((r = await Cu.readJSON(e.discovery.uidbLocalPath)),
              t.info(`Using latest saved copy of UI DB (version ${r.version})`))
            : ((r = await Cu.readJSON(Yle)),
              t.info(`Using bundled copy of UI DB (version ${r.version})`)),
          LB(r)
        );
      } catch (r) {
        return t.error("Failed to retrieve UI DB local file", r), null;
      }
    },
    Gs = null,
    MB = Vle(
      async (e, t) => {
        try {
          if (Gs && !(await Gle()))
            throw new Error("No internet connection, can't fetch fingerprints");
          let r = await zle(e, t);
          r && ((Gs = r), jle("applications.deviceList.refresh", Gs));
        } catch (r) {
          if ((MB.cancel(), !Gs)) {
            if (((Gs = await Jle(e, t)), Gs)) return Gs;
            throw r;
          }
        }
        return Gs;
      },
      Kle,
      { leading: !0, trailing: !0 }
    );
  xB.exports = MB;
});
var gh = w((uUe, HB) => {
  var { publish: cUe } = require("handoff"),
    { traceUiDbMissingData: yh } = (jt(), ur),
    { makeDeviceTriplet: wh, makeTripletKey: BB } = Gn(),
    VB = [],
    jB = [],
    GB = [],
    Xle = (e, t) => {
      let { guid: r } = e;
      if (!!r && !VB.includes(r)) {
        let s = wh(e);
        yh({
          type: "ui-db-missing-guid",
          guid: r,
          deviceTriplet: s,
          firmwareVersion: e.firmware,
        }).catch((a) => t.error("Failed to send missing GUID trace", a)),
          VB.push(r),
          t.warn(`Missing GUID (${r}) for device:`, e);
      }
    },
    Qle = (e, t) => {
      let r = wh(e),
        s = BB(r);
      jB.includes(s) ||
        (yh({
          type: "ui-db-missing-triplet",
          deviceTriplet: r,
          firmwareVersion: e.firmware,
        }).catch((a) => t.error("Failed to send missing triplet trace", a)),
        jB.push(s),
        t.warn(`Missing triplet (${s})`),
        t.debug("Device:", e));
    },
    Zle = (e, t) => {
      let r = wh(e);
      if (!r && e.sysid) {
        t.warn(`Missing device with sysid ${e.sysid}`), t.debug("Device:", e);
        return;
      }
      let s = BB(r);
      GB.includes(s) ||
        (yh({
          type: "ui-db-missing-device",
          deviceTriplet: r,
          firmwareVersion: e.firmware,
        }).catch((a) => t.error("Failed to send missing device trace", a)),
        GB.push(s),
        t.warn(`Missing device with triplet ${s}`),
        t.debug("Device:", e));
    };
  HB.exports = {
    reportMissingGUID: Xle,
    reportMissingTriplet: Qle,
    reportMissingDevice: Zle,
  };
});
var Sh = w((dUe, KB) => {
  var { reportMissingGUID: epe } = gh(),
    { fetchIfNotModified: tpe } = Gn(),
    rpe = 3e3,
    WB = 60 * 60 * 1e3,
    spe = 404,
    Eh = new Map(),
    Du = new Map(),
    ape = async (e, t, r, s) => {
      let { guid: a } = e;
      if (!a) return null;
      let o = a.toLowerCase();
      if (t && t.byGUID.has(o)) return t.byGUID.get(o);
      let n = null,
        i = new Date();
      if (Du.has(o) && i - Du.get(o) < WB) return null;
      if (Eh.has(o) && ((n = Eh.get(o)), i - n.lastUpdated < WB)) return n;
      try {
        let c = `${r.discovery.guidDiscoveryBaseUrl}${o}.json`,
          d = await tpe(c, { timeout: rpe });
        return (
          d && (n = (await d.json()).device),
          (n.lastUpdated = i),
          Eh.set(o, n),
          Du.delete(o),
          n
        );
      } catch (c) {
        return c.status === spe && (epe(e, s), Du.set(o, i)), null;
      }
    };
  KB.exports = ape;
});
var zB = w((lUe, YB) => {
  var ope = Sh(),
    { reportMissingTriplet: npe, reportMissingDevice: ipe } = gh(),
    { makeDeviceTriplet: cpe, makeTripletKey: upe } = Gn(),
    dpe = async (e, t, r, s) => {
      let a = await ope(e, t, r, s);
      if (a) return a;
      if (!t) return null;
      if (e.sysid && ((a = t.bySysId.get(e.sysid)), a)) return a;
      let o = cpe(e);
      if (o) {
        let n = upe(o);
        if (((a = t.byTripletKey.get(n)), a)) return a;
        npe(e, s),
          (a = t.byShortname.get(
            Object.values(o).find((i) => t.byShortname.has(i))
          ));
      }
      return a || (ipe(e, s), null);
    };
  YB.exports = dpe;
});
var XB = w((hUe, JB) => {
  ga();
  ta();
  wp();
  var { get: Hn } = require("lodash"),
    { truncateProductLine: lpe } = (Ue(), We),
    ppe = zB(),
    mpe = Ep(),
    fpe = Object.keys(Xt).map((e) => e.toUpperCase()),
    hpe = { ADOPTABLE: "adoptable", STANDALONE: "standalone" },
    ype = ["UAS", "UASXG", "NVR"],
    wpe = async (e, t, r, s) => {
      let a = await ppe(e, t, r, s);
      if (!a) return null;
      let o = a.shortnames || [];
      if (o.some((b) => ype.includes(b))) return null;
      let n = Hn(a, "icon.id"),
        i = Hn(a, "icon.resolutions", []),
        c = Hn(a, "line.id", ""),
        d = c.startsWith("unifi-"),
        { model: u, platform: p, platformFull: l } = e,
        f = fpe.find((b) => o.includes(b)),
        m = Hn(a, "unifi.adoptability") === hpe.ADOPTABLE,
        E = null,
        y = lpe(c);
      d && m && (E = y), f && (E = "unifiOS");
      let h = Hn(a, "product.abbrev");
      if (!h)
        switch (E) {
          case "unifiOS":
            h = f.name.toUpperCase();
            break;
          case "access":
            h = p || l || u;
            break;
          default:
            h = u || l || p;
        }
      let S = mpe(a, E),
        D = uc(a),
        A = e.uptime ? Math.floor(Date.now() / 1e3) - e.uptime : null,
        C,
        { hostname: R } = e;
      return (
        R && t && !t.reservedNames.has(R) ? (C = R) : (C = a.product.name || h),
        {
          name: C,
          model: h,
          shortnames: a.shortnames || [],
          controller: E,
          productLine: y,
          iconId: n,
          iconResolutions: i,
          startupTime: A,
          addresses: { ip: e.ip, mac: e.mac },
          isManaged: e.isManaged || !1,
          firmware: e.firmware,
          metadata: S,
          isWireless: e.isWireless || !1,
          isStackable: e.isStackable || !1,
          updateRequiredToStack: await Yl(e),
          deviceId: e.deviceId,
          directConnectDomain: e.directConnectDomain,
          capabilities: D,
        }
      );
    };
  JB.exports = wpe;
});
var ZB = w((yUe, QB) => {
  var { subscribe: bh, unsubscribe: gpe } = require("handoff"),
    { setIntervalAsync: Epe } = require("set-interval-async/dynamic"),
    { clearIntervalAsync: Spe } = require("set-interval-async"),
    Nu = $B(),
    bpe = Sh(),
    _pe = XB(),
    { FINGERPRINT_REFRESH_INTERVAL_MS: Tpe } = hh(),
    Ipe = async (e, t) => {
      let r = null,
        s = async (n, i) => {
          let c = await Nu(e, t),
            d = await bpe(i, c, e, t);
          return d || (c ? ((d = c.byShortname.get(i.shortname)), d) : null);
        },
        a = async (n, i) => (await Nu(e, t)).bySysId.get(i),
        o = [
          bh("fingerprint.reportedDevice", s),
          bh("fingerprint.bySysId", a),
          bh("fingerprint.identifyDevice", async (n, i) => {
            let c = await Nu(e, t);
            return _pe(i, c, e, t);
          }),
        ];
      return (
        r ||
          (r = Epe(async () => {
            try {
              await Nu(e, t);
            } catch (n) {
              t.error("Failed to refresh fingerprints:", n);
            }
          }, Tpe)),
        async () => {
          r && (await Spe(r)), o.map((n) => gpe(n));
        }
      );
    };
  QB.exports = Ipe;
});
var eV = {};
lt(eV, {
  DB_INFO_FILE: () => Ape,
  DUPLICATE_DB_ERROR_CODE: () => _h,
  TABLES_TO_BACKUP: () => vpe,
  TABLES_TO_BACKUP_FOR_UBIOS_MIGRATION: () => Cpe,
});
var _h,
  Ape,
  vpe,
  Cpe,
  Th = x(() => {
    (_h = "42P04"),
      (Ape = "dbinfo.json"),
      (vpe = [
        "notification_settings",
        "user_settings",
        "unique_logins",
        "system_flags",
        "floorplans",
        "floorplan_devices",
      ]),
      (Cpe = ["notifications"]);
  });
var aV = w((wUe, sV) => {
  var Ru = require("path"),
    Dpe = require("os"),
    Wn = require("fs-extra"),
    { v4: Npe } = require("uuid"),
    { publish: Rpe } = require("handoff"),
    Pu = Ce(),
    {
      TABLES_TO_BACKUP: Ppe,
      TABLES_TO_BACKUP_FOR_UBIOS_MIGRATION: tV,
      DB_INFO_FILE: rV,
    } = (Th(), eV);
  sV.exports = (e, t, r, s) => {
    let {
        getCurrentMigrationVersion: a,
        getCurrentTables: o,
        migrateToVersion: n,
        runMigrations: i,
      } = s,
      c = async (l, f, m) => {
        t.info("Creating database backup...");
        let E = Ru.join(f, "database");
        await Wn.ensureDir(E);
        let y = await a(),
          h = Ppe;
        m &&
          (t.info("Backup extra tables for UbiOS migration:", tV.join(", ")),
          h.push(...tV));
        let S = h.map((T) => `-t '${T}'`).join(" "),
          { database: D, host: A, port: C, user: R } = e.postgres,
          { stdout: N, stderr: b } = await Pu(`
      pg_dump ${D} -F d --data-only ${S} -f ${E} -h ${A} -p ${C} -U ${R}
    `);
        N && t.info(N),
          b && t.warn(b),
          await Wn.writeJSON(Ru.join(E, rV), {
            tables: h,
            migrationVersion: y,
          }),
          t.info(`Backup created at ${E}, latest migration version: `, y);
      },
      d = async () => {
        let f = `${Dpe.tmpdir()}/${Npe()}`;
        await Wn.ensureDir(f), t.info("Persisting non-backup table data...");
        let { database: m, host: E, port: y, user: h } = e.postgres;
        return (
          await Pu(`
      pg_dump ${m} -F d --data-only -f ${f}/dbPersistData -h ${E} -p ${y} -U ${h}
    `),
          f
        );
      },
      u = async (l, f) => {
        if (f.length > 0)
          try {
            t.info("Restoring persisted non-backup table data...", f);
            let { database: m, host: E, port: y, user: h } = e.postgres;
            await Pu(`
          pg_restore -n public -F d ${f} -d ${m} -h ${E} -p ${y} -U ${h} ${l}/dbPersistData
        `);
          } catch (m) {
            t.error("Errors restoring persisted data:", m);
          }
      };
    return {
      createBackup: c,
      restoreBackup: async (l, f) => {
        t.info("Restoring database...");
        let m = Ru.join(f, "database");
        if (!(await Wn.exists(m))) {
          t.info("No database backup found");
          return;
        }
        let { database: y, host: h, port: S, user: D } = e.postgres,
          { tables: A = [], migrationVersion: C } = await Wn.readJSON(
            Ru.join(m, rV)
          );
        t.info(
          `Backup has migration version ${C} and includes tables: `,
          A.join(", ")
        );
        let R = await d(),
          N = await o();
        await n(C);
        let b = "",
          T = null;
        try {
          await r.raw(`TRUNCATE TABLE ${A.join(", ")}`),
            t.info("Restoring data from backup..."),
            await Pu(`
        pg_restore --clean --single-transaction -n public -F d -d ${y} -h ${h} -p ${S} -U ${D} ${m}
      `),
            await Rpe("notifications.clearCache");
          let M = await o();
          b = N.filter((q) => !M.includes(q))
            .map((q) => `-t '${q}'`)
            .join(" ");
        } catch (M) {
          t.error("Failed to restore database from backup:", M),
            (T = M),
            (b = A.length ? A.map((q) => `-t '${q}'`).join(" ") : "");
        }
        if ((await i(), await u(R, b), T)) throw T;
        t.info("Backup restore finished");
      },
    };
  };
});
var oV,
  Uu,
  nV,
  iV = x(() => {
    (oV = g(require("knex"))), (Uu = g(require("pg")));
    Th();
    nV = (e, t) => {
      let r = async () => {
        let a = {
            host: e.postgres.host,
            user: e.postgres.user,
            password: e.postgres.password,
            port: e.postgres.port,
            database: "postgres",
          },
          o = new Uu.Client(a);
        await o.connect();
        try {
          await o.query(`CREATE DATABASE "${e.postgres.database}"`),
            t.info(`Created database "${e.postgres.database}".`);
        } catch (n) {
          if (n instanceof Uu.DatabaseError) {
            if (n.code !== _h) throw (t.error("Database error:", n), n);
          } else
            throw (
              (t.error("Error creating database:", n),
              new Error("Failed to create database"))
            );
        } finally {
          o.end();
        }
      };
      return async () => {
        let a = null;
        try {
          await r();
          let o = {
            client: "pg",
            connection: {
              host: e.postgres.host,
              user: e.postgres.user,
              password: e.postgres.password,
              database: e.postgres.database,
              port: e.postgres.port,
            },
            pool: e.postgres.pool,
            log: {
              warn: (n) => t.warn(n),
              error: (n) => t.error(n),
              deprecate: (n) => t.info(n),
              debug: (n) => t.debug(n),
            },
          };
          (a = (0, oV.default)(o)), await a.raw("SELECT 1+1 AS result");
        } catch (o) {
          t.error("Failed to init db client:", o);
        }
        return a;
      };
    };
  });
var uV = w((bUe, cV) => {
  cV.exports = (e, t, r) => {
    let s = { directory: "./migrations" },
      a = async () => {
        t.info("Running migrations...");
        let [, c] = await r.migrate.latest(s);
        c.length
          ? t.info(
              `Ran ${c.length} migrations:
`,
              c.join(`
`)
            )
          : t.info("All up to date!");
      },
      o = async () => {
        let c = await r.migrate.currentVersion();
        return parseInt(c);
      };
    return {
      runMigrations: a,
      getCurrentMigrationVersion: o,
      getCurrentTables: async () => {
        let { rows: c = [] } = await r.raw(
          "SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname = 'public'"
        );
        return c.map((d) => d.tablename);
      },
      migrateToVersion: async (c) => {
        let d = await o();
        if (c === d) {
          t.info(`Migrations are already at ${c}`);
          return;
        }
        if ((t.info(`Migrating from ${d} to ${c}`), c < d))
          for (t.info("Rolling back migrations..."); c < d; )
            await r.migrate.down(s), (d = await o());
        else if (c > d)
          for (t.info("Running new migrations..."); c > d; )
            await r.migrate.up(s), (d = await o());
        d !== c && t.warn(`No match found for ${c}, currently at ${d}`);
      },
    };
  };
});
var mV = w((IUe, pV) => {
  var ho = g(require("handoff")),
    dV = g(aV());
  iV();
  var lV = g(uV()),
    ws = null,
    Upe = async (e, t) => {
      let r = nV(e, t),
        s = [],
        o = ws
          ? Promise.resolve(ws)
          : (async () => {
              ws = await r();
              let n = (0, lV.default)(e, t, ws);
              try {
                await n.runMigrations();
              } catch (c) {
                t.error("Failed to run migrations:", c);
              }
              let i = (0, dV.default)(e, t, ws, n);
              return (
                s.push(
                  (0, ho.subscribe)("db.createBackup", i.createBackup),
                  (0, ho.subscribe)("db.restoreBackup", i.restoreBackup)
                ),
                ws
              );
            })();
      return (
        s.push((0, ho.subscribe)("db.getClient", () => o)),
        async () => {
          s.forEach((n) => (0, ho.unsubscribe)(n)),
            ws && (ws.destroy(), (ws = null));
        }
      );
    };
  pV.exports = Upe;
});
var yV = w((AUe, hV) => {
  var ku = require("fs-extra"),
    Ou = require("path"),
    { publish: kpe } = require("handoff"),
    { BACKGROUNDS_DIR: fV } = Zc();
  hV.exports = (e, t) => ({
    backupFloorplanImages: async (a, o) => {
      t.info("Creating floorplan background backup...");
      let i = await (await kpe("db.getClient"))("floorplans")
        .select("background_filename")
        .whereNotNull("background_filename");
      if (i.length === 0) {
        t.info("No floorplan backgrounds to backup");
        return;
      }
      let c = i.map((u) => u.background_filename);
      t.info("Files to backup:", c.join(", "));
      let d = Ou.join(o, "floorplans");
      await ku.ensureDir(d),
        await Promise.all(
          c.map((u) => {
            let p = Ou.join(fV, u),
              l = Ou.join(d, u);
            return t.info(`Copying ${p} to ${l}...`), ku.copy(p, l);
          })
        ),
        t.info("Floorplan background backup complete");
    },
    restoreFloorplanImages: async (a, o) => {
      t.info("Restoring floorplan backgrounds...");
      let n = Ou.join(o, "floorplans");
      if (!(await ku.exists(n))) {
        t.info("No floorplan background backup found");
        return;
      }
      await ku.copy(n, fV), t.info("Floorplan background restore complete");
    },
  });
});
var SV = w((vUe, EV) => {
  var { v4: Ope } = require("uuid"),
    wV = require("fs-extra"),
    qpe = require("path"),
    { publish: gs, subscribe: fa, unsubscribe: Fpe } = require("handoff"),
    { takeEvery: Lpe } = require("redux-saga/effects"),
    { get: Mpe } = require("lodash"),
    { getDeviceList: xpe } = H(),
    { SET_DEVICE_LIST: $pe } = Z(),
    { BACKGROUNDS_DIR: gV } = Zc(),
    Bpe = yV(),
    Vpe = "default";
  EV.exports = async (e, t) => {
    let { backupFloorplanImages: r, restoreFloorplanImages: s } = Bpe(e, t),
      a = null,
      o = null,
      n = null,
      i = null,
      c = null,
      d = () => {
        (a = null), (o = null), (n = null), (i = null), (c = null);
      },
      u = async () => {
        try {
          let T = (
              await (
                await gs("db.getClient")
              )("floorplans").select("background_filename")
            ).map((k) => k.background_filename),
            q = (await wV.readdir(gV)).filter((k) => !T.includes(k));
          q.length > 0 &&
            (t.info("Cleaning up unused floorplan files..."),
            await Promise.all(
              q.map((k) => {
                let I = qpe.join(gV, k);
                return t.info("Removing", I), wV.remove(I);
              })
            ),
            t.info(`Removed ${q.length} unused floorplan files`));
        } catch (N) {
          t.error("Failed to cleanup unused floorplan files:", N);
        }
      },
      p = async () => {
        let N = await gs("db.getClient"),
          [b] = await N("floorplans").returning("id").insert({ id: Ope() });
        return b;
      },
      l = async () => {
        if (a) return a;
        let N = await gs("db.getClient"),
          [b] = await N("floorplans").orderBy("created_at", "desc").limit(1);
        return b ? (a = b.id) : (a = p()), a;
      },
      f = (N) => `floorplans/${N}`,
      m = async (N, b) => {
        let T = await gs("db.getClient"),
          M = await l(),
          [{ background_filename: q }] = await T("floorplans")
            .where("id", M)
            .returning(["background_filename"])
            .update({ background_filename: b.filename }),
          k = f(q);
        return (
          t.debug(`Added new floorplan background ${k}`),
          (c = null),
          S(),
          u(),
          k
        );
      },
      E = async (N) => {
        let b = await l();
        if (N === Vpe) return b;
        if (N !== b)
          throw new Error("Multiple floorplans currently not supported");
        return N;
      },
      y = async (N, b, T) => {
        let M = await E(b),
          q = await gs("db.getClient");
        try {
          await q("floorplans")
            .where("id", M)
            .update({
              updated_at: new Date(),
              calibration: q.raw(
                "coalesce(calibration, '{}')::jsonb || ?::jsonb",
                [JSON.stringify(T)]
              ),
            });
        } catch (k) {
          throw (
            (t.error("Failed to update floorplan calibration:", k),
            new Error("Failed to update floorplan calibration"))
          );
        }
        (c = null), S();
      },
      h = async (N, b, T, M) => {
        let q = await E(b),
          k = await gs("db.getClient"),
          { x: I, y: _, direction: P, moved: U } = M;
        await k("floorplan_devices")
          .insert({
            floorplan_id: q,
            device_mac: T,
            x: I,
            y: _,
            direction: P,
            moved: U,
          })
          .onConflict(["floorplan_id", "device_mac"])
          .merge(),
          (i = null),
          S();
      },
      S = async (N = null) => {
        try {
          N || (N = await xpe());
          let b = await l(),
            T = await gs("db.getClient");
          i || (i = await T("floorplan_devices").where("floorplan_id", b)),
            c || ([c] = await T("floorplans").where("id", b));
          let M = [];
          for (let q in N)
            N[q]
              .filter(
                ({ isManaged: k, source: I }) =>
                  (I === "wireless" && k) || I !== "wireless"
              )
              .forEach((k) => {
                let I = i.find((_) => _.device_mac === k.mac);
                M.push({
                  mac: k.mac,
                  status: k.status,
                  displayName: k.name,
                  model: k.shortname,
                  position: I
                    ? { x: I.x, y: I.y, direction: I.direction, moved: I.moved }
                    : null,
                  metadata: k.metadata,
                  iconURL: Mpe(k, "images.xl", ""),
                  application: q,
                });
              });
          (o = new Date()),
            (n = {
              id: c.id,
              backgroundURL: c.background_filename
                ? f(c.background_filename)
                : null,
              updatedAt: o,
              devices: M,
              calibration: c.calibration,
            }),
            t.debug("Updated floorplan:", n);
        } catch (b) {
          t.error("Failed to update floorplan data:", b);
        }
      },
      D = async (N, b) => (await E(b), n),
      A = async (N, b) => (await E(b), o),
      C = [
        fa("floorplans.add", m),
        fa("floorplans.updateCalibration", y),
        fa("floorplans.updateDevice", h),
        fa("floorplans.get", D),
        fa("floorplans.getLastUpdated", A),
        fa("floorplans.createBackup", r),
        fa("floorplans.restoreBackup", async (...N) => {
          await s(...N), d(), S(), u();
        }),
      ],
      R = [
        function* () {
          yield Lpe([$pe], ({ payload: N }) => {
            S(N);
          });
        },
      ];
    return (
      R.forEach((N) => gs("redux.saga.add", N)),
      async () => {
        R.forEach((N) =>
          gs("redux.saga.remove", N).catch((b) => {
            t.error("Failed to redux.saga.remove:", b);
          })
        ),
          C.forEach((N) => Fpe(N));
      }
    );
  };
});
var _V = w((CUe, bV) => {
  var jpe = require("@ubnt/promise-queue"),
    { subscribe: Gpe, unsubscribe: Hpe } = require("handoff"),
    { v4: Wpe } = require("uuid"),
    Kn = null;
  bV.exports = async (e, t) => {
    Kn || (Kn = new jpe());
    let r = (a, o) => {
        let n = `${o || a.name || Wpe()}-${Date.now()}`;
        t.info(`Adding task "${n}"`);
        let i = Kn.add(a);
        return (
          i
            .then(() => {
              t.info(`Task "${n}" completed`);
            })
            .catch((c) => {
              t.error(`Task "${n}" failed:`, c);
            }),
          i
        );
      },
      s = [Gpe("taskQueue.add", (a, o, n) => r(o, n))];
    return async () => {
      s.forEach((a) => Hpe(a)), (Kn.queue = []), (Kn = null);
    };
  };
});
var AV = w((kUe, IV) => {
  nS();
  TS();
  CS();
  pA();
  bA();
  var TV = require("bluebird"),
    Kpe = NA(),
    Ype = GC(),
    zpe = ZC(),
    Jpe = oR(),
    Xpe = $R(),
    Qpe = kq(),
    Zpe = ix(),
    eme = xx(),
    tme = Vx(),
    rme = Zx(),
    sme = g1(),
    ame = k1(),
    ome = rB(),
    nme = bB(),
    ime = NB(),
    cme = UB(),
    ume = ZB(),
    dme = mV(),
    lme = SV(),
    pme = _V(),
    Ge = as();
  IV.exports = async (e, t, r, s) => {
    let a = [
      Ge(t, "database", dme(e, t.wrap("database"))),
      Ge(t, "trace", nme(e, t.wrap("trace"))),
      Ge(t, "systemd", Kpe(e, t.wrap("systemd"))),
      Ge(t, "taskQueue", pme(e, t.wrap("taskQueue"))),
      Ge(t, "taskTracker", SA(e, t.wrap("taskTracker"))),
      Ge(t, "apps", Ype(e, t.wrap("apps"))),
      Ge(t, "auth", zpe(e, t.wrap("auth"))),
      Ge(t, "cloud", Jpe(e, t.wrap("cloud"))),
      Ge(t, "firmware", Xpe(e, t.wrap("firmware"))),
      Ge(t, "http", Qpe(e, t.wrap("http"))),
      Ge(t, "sso", rme(e, t.wrap("sso"))),
      Ge(t, "system", lA(e, t.wrap("system"))),
      Ge(t, "uum", sme(e, t.wrap("uum"))),
      Ge(t, "webrtc", ame(e, t.wrap("webrtc"))),
      Ge(t, "ipc", Zpe(e, t.wrap("ipc"))),
      Ge(t, "redux", eme(e, t.wrap("redux"))),
      Ge(t, "sdnotify", tme(e, t.wrap("sdnotify"))),
      Ge(t, "fingerprint", ume(e, t.wrap("fingerprint"))),
      Ge(t, "discovery", ome(e, t.wrap("discovery"))),
      Ge(t, "chiper", ime(e, t.wrap("chiper"))),
      Ge(t, "health", cme(e, t.wrap("health"))),
      Ge(t, "notifications", _S(e, t.wrap("notifications"))),
      Ge(t, "floorplans", lme(e, t.wrap("floorplans"))),
      Ge(t, "sharedTokens", vS(e, t.wrap("sharedTokens"))),
      Ge(t, "grpc", oS(e, t.wrap("grpc"))),
    ];
    return await TV.all(a), async () => TV.mapSeries(a, (o) => o());
  };
});
var CV = w((OUe, vV) => {
  var Ih = require("handoff"),
    Ah = require("bluebird"),
    mme = lw(),
    fme = AV(),
    hme = async (e) => {
      let t = [],
        r = new mme(B(v({}, e.logs), { version: e.version })).wrap("app"),
        s = !1;
      e.env &&
        Object.keys(e.env).forEach((c) => {
          process.env[c] = e.env[c];
        });
      let a = async () => {
          await Ah.map(t, (c) => c()), process.removeAllListeners();
        },
        o = (c, d) => {
          if (d instanceof Error) return r.error(c, d);
          if (typeof d == "string") return r.error(c, { message: d });
          if (typeof d == "object")
            try {
              return r.error(c, { message: JSON.stringify(d) });
            } catch (u) {}
          r.error(d);
        },
        n = async (c, d = null) => {
          if (s) {
            d && o(c, d),
              (c === "SIGINT" || c === "SIGTERM") &&
                (r.warn(`${c} received while shutting down, force exiting...`),
                process.exit(1));
            return;
          }
          (s = !0),
            r.warn(`${c}, shutting down...`),
            (d || c === "unhandledRejection" || c === "uncaughtException") &&
              o(c, d),
            await a(),
            await Ah.delay(100),
            process.exit();
        },
        i = 0;
      return (
        process.on("SIGINT", (c) => {
          Date.now() - i > 100 && n("SIGINT"), (i = Date.now());
        }),
        process.on("SIGTERM", (c) => {
          Date.now() - i > 100 && n("SIGTERM"), (i = Date.now());
        }),
        process.on("unhandledRejection", (c) => n("unhandledRejection", c)),
        process.on("uncaughtException", (c) => n("uncaughtException", c)),
        Ih.hold(),
        t.push(fme(e, r)),
        await Ah.all(t),
        Ih.resume(),
        r.info(`App Startup Complete. VERSION : ${e.version}`),
        Ih.publish("app.ready"),
        a
      );
    };
  vV.exports = hme;
});
var yme = require("source-map-support");
yme.install({ handleUncaughtExceptions: !1 });
var wme = require("fs-extra"),
  gme = require("minimist"),
  { subscribe: vh } = require("handoff"),
  DV = require("bluebird"),
  Eme = Fh(),
  Sme = CV(),
  qu = gme(process.argv.slice(2), {
    boolean: ["version", "enable-console"],
    string: ["config", "levels"],
    alias: { v: "version", l: "levels", c: "config" },
  }),
  bme = (e, t) => {
    for (e = e.split(","); e.length; ) {
      let r = e.splice(0, 1)[0].split(":");
      r[1] || r.unshift("default"), (t[r[0]] = r[1]);
    }
    return t;
  };
qu.version && (console.log("3.0.51"), process.exit(0));
var Er = Eme(..."./config/config.yaml".split(";"));
qu.levels && (Er.logs.levels = bme(qu.levels, Er.logs.levels));
qu["enable-console"] &&
  ((Er.logs = Er.logs || {}), (Er.logs.enableConsole = !0));
Er.version = "3.0.51";
Er.app = "unifi-core";
Object.freeze(Er);
var _me = (...e) => DV.map(e, (t) => DV.promisify(wme.mkdirs)(t)),
  Fu,
  Ch = !1,
  Dh = async (e) => {
    if (Ch) throw new Error("Service is already started.");
    try {
      return (
        await _me(e.configPath, e.logs.dir, e.firmware.dir),
        (Fu = await Sme(e)),
        (Ch = !0),
        Fu
      );
    } catch (t) {
      console.error(t), process.exit(1);
    }
  },
  NV = async () => {
    Fu && (await Fu()), (Ch = !1);
  };
vh("service.start", async (e, t = null) => Dh(t || Er));
vh("service.restart", async (e, t = null) => (await NV(), Dh(t || Er)));
vh("service.stop", async (e, t = !0) => {
  await NV(), t && process.exit(process.exitCode || 0);
});
Dh(Er);
