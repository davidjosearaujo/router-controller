var G_CONST_USERNAME = "admin";
var G_SUPER_USERNAME = "superuser";
var g_login_reload = false;
var G_LOGIN_STATE = 0;
var g_show_password_remind = -1;
var g_username_default = "";
var g_restore_default_status = "";
var g_default_password_status = -1;
var g_hilink_login_status = 0;
var g_hilink_login_old_api = 0;
var g_nedd_login = 1;
var clearshow = null;
var g_copyright_year = "";
var g_sms_mode = "";
var g_isPad_status = false;
var g_copyright_enabled = null;
var g_coulometer_BatteryStatus = -11111;
var g_BatteryPercent = -11111;
var g_usbup = -1;
var g_coulometer_status = "-1";
var g_usbBattery_status = -1;
var g_up_connection_status = "0";
var g_down_connection_status = "0";
var g_up_down_connection_status = "0";
var g_disable_connection_status = "0";
var g_smallPage = false;
var g_feature = null;
var flag_focus = true;
var g_networktype = [];
var g_moduleswitch = null;
var g_module = null;
var g_wifi = null;
y;
var g_dailup = null;
var g_destnation = null;
var g_nav = null;
var g_isReady = false;
var g_loginFlag = false;
var g_bridgeModeStatus = false;
var LOGOUT_TIMEOUT_MAIN = 300000;
var SIMCARD_STATUS_REFRESH = 10000;
var SIMCARD_OK = 1;
var HEARTBEAT_TIMEOUT = 60000;
var g_logoutTimer = "";
var g_heart_beat_timer = "";
var g_pin_status_SimPukTimes = "";
var g_ProductCDMA = false;
var g_assistant_ret = null;
var G_NETWORK_4G = "4G";
var G_NETWORK_LTE = "LTE";
var g_customNetworkType = "";
var g_antennaPicDisplay = "";
var g_privacyUrl = "";
var g_privacypolicy_update = "";
var g_login_state = "";
var g_currentPassword = "";
var g_wifiSameWithWeb = false;
var g_supportPwdStrength = true;
var g_supportPwdSame = false;
var g_getWifiPwd = false;
var g_LANGUAGE_COUNT = 13;
var g_LANGUAGE_LIST_HEIGHT = "300px";
var g_decive_timer = null;
var g_simcard_timer = null;
var G_MonitoringStatus = null;
var G_NotificationsStatus = null;
var G_StationStatus = null;
var G_CradleStatus = null;
var G_cradleStationStatus = null;
var G_CelllockEnable = "-1";
var G_CelllockStatus = "-1";
var CELLCOCK_STATUS_UNACTIVATED = "0";
var CELLLOCK_STATUS_ACTIVATED = "1";
var CELLLOCK_STATUS_LOCKED = "2";
var CELLLOCK_STATUS_ACTIVATEFAIL = "3";
var CELLLOCK_STATUS_ACTIVATING = "4";
var CELLLOCK_STATUS_ACTIVATON = "5";
var CELLLOCK_STATUS_ACTIVATOFF = "6";
var g_stationInfo = "";
var g_stationInfoFlag = false;
var g_wifiStatusInfo = "";
var g_password_type = 0;
var MACRO_SHOW_POPUP = 1;
var PUK_TIMES_ZERO = "0";
var MACRO_NO_SIM_CARD = "255";
var MACRO_CPIN_FAIL = "256";
var MACRO_PIN_READY = "257";
var MACRO_PIN_DISABLE = "258";
var MACRO_PIN_VALIDATE = "259";
var MACRO_PIN_REQUIRED = "260";
var MACRO_PUK_REQUIRED = "261";
var basic_infos = null;
var MACRO_CONNECTION_CONNECTING = "900";
var MACRO_CONNECTION_CONNECTED = "901";
var MACRO_CONNECTION_DISCONNECTED = "902";
var MACRO_CONNECTION_DISCONNECTING = "903";
var wanUpload = "";
var wanDownload = "";
var WIFI_CONNECTING = "900";
var WIFI_CONNECTED = "901";
var WIFI_DISCONNECTED = "902";
var WIFI_DISCONNECTING = "903";
var wifiUpload = "";
var wifiDownload = "";
var CRADLE_CONNECTING = "900";
var CRADLE_CONNECTED = "901";
var CRADLE_DISCONNECTED = "902";
var CRADLE_DISCONNECTING = "903";
var CRADLE_CONNECTFAILED = "904";
var CRADLE_CONNECTSTATUSNULL = "905";
var CRANDLE_CONNECTSTATUSERRO = "906";
var CRADLE_NETLINE_NOEXIST = 0;
var CRADLE_NETLINE_EXIST = 1;
var ETHERNET_LAN_MODE = "5";
var CRADLEAUTOMODE = "0";
var FORBID_AUTO_CONNECT_OPEN_DEVICE = "112";
var FORBID_AUTO_CONNECT_OPEN_DEVICE_ROAMING = "113";
var FORBID_RE_CONNECT_DROPLINE = "114";
var FORBID_RE_CONNECT_DROPLINE_ROAMING = "115";
var MACRO_SIM_STATUS_USIM_N = "0";
var MACRO_SIM_STATUS_USIM_Y = "1";
var MACRO_SIM_STATUS_USIM_CS_N = "2";
var MACRO_SIM_STATUS_USIM_PS_N = "3";
var MACRO_SIM_STATUS_USIM_PS_CS_N = "4";
var MACRO_SIM_STATUS_ROMSIM = "240";
var MACRO_SIM_STATUS_USIM_NE = "255";
var MACRO_BATTERY_STATUS_NORMAL = "0";
var MACRO_BATTERY_STATUS_ELECT = "1";
var MACRO_BATTERY_STATUS_LOW = "-1";
var MACRO_BATTERY_STATUS_NOBATTERY = "2";
var MACRO_BATTERY_LEVEL_ZERO = "0";
var MACRO_BATTERY_LEVEL_ONE = "1";
var MACRO_BATTERY_LEVEL_TWO = "2";
var MACRO_BATTERY_LEVEL_THREE = "3";
var MACRO_BATTERY_LEVEL_FOUR = "4";
var MACRO_EVDO_LEVEL_ZERO = "0";
var MACRO_EVDO_LEVEL_ONE = "1";
var MACRO_EVDO_LEVEL_TWO = "2";
var MACRO_EVDO_LEVEL_THREE = "3";
var MACRO_EVDO_LEVEL_FOUR = "4";
var MACRO_EVDO_LEVEL_FIVE = "5";
var MACRO_CURRENT_NETWOORK_2G = "0";
var MACRO_CURRENT_NETWOORK_3G = "2";
var MACRO_CURRENT_NETWOORK_H = "5";
var MACRO_CURRENT_NETWOORK_4G = "7";
var SERVICE_STATUS_AVAIABLE = 2;
var MACRO_NET_WORK_TYPE_NOSERVICE = "0";
var MACRO_NET_WORK_TYPE_GSM = "1";
var MACRO_NET_WORK_TYPE_GPRS = "2";
var MACRO_NET_WORK_TYPE_EDGE = "3";
var MACRO_NET_WORK_TYPE_WCDMA = "4";
var MACRO_NET_WORK_TYPE_HSDPA = "5";
var MACRO_NET_WORK_TYPE_HSUPA = "6";
var MACRO_NET_WORK_TYPE_HSPA = "7";
var MACRO_NET_WORK_TYPE_TDSCDMA = "8";
var MACRO_NET_WORK_TYPE_HSPA_PLUS = "9";
var MACRO_NET_WORK_TYPE_EVDO_REV_0 = "10";
var MACRO_NET_WORK_TYPE_EVDO_REV_A = "11";
var MACRO_NET_WORK_TYPE_EVDO_REV_B = "12";
var MACRO_NET_WORK_TYPE_1xRTT = "13";
var MACRO_NET_WORK_TYPE_UMB = "14";
var MACRO_NET_WORK_TYPE_1xEVDV = "15";
var MACRO_NET_WORK_TYPE_3xRTT = "16";
var MACRO_NET_WORK_TYPE_HSPA_PLUS_64QAM = "17";
var MACRO_NET_WORK_TYPE_HSPA_PLUS_MIMO = "18";
var MACRO_NET_WORK_TYPE_LTE = "19";
var MACRO_NET_WORK_TYPE_EX_NOSERVICE = "0";
var MACRO_NET_WORK_TYPE_EX_GSM = "1";
var MACRO_NET_WORK_TYPE_EX_GPRS = "2";
var MACRO_NET_WORK_TYPE_EX_EDGE = "3";
var MACRO_NET_WORK_TYPE_EX_IS95A = "21";
var MACRO_NET_WORK_TYPE_EX_IS95B = "22";
var MACRO_NET_WORK_TYPE_EX_CDMA_1x = "23";
var MACRO_NET_WORK_TYPE_EX_EVDO_REV_0 = "24";
var MACRO_NET_WORK_TYPE_EX_EVDO_REV_A = "25";
var MACRO_NET_WORK_TYPE_EX_EVDO_REV_B = "26";
var MACRO_NET_WORK_TYPE_EX_HYBRID_CDMA_1x = "27";
var MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_0 = "28";
var MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_A = "29";
var MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_B = "30";
var MACRO_NET_WORK_TYPE_EX_EHRPD_REL_0 = "31";
var MACRO_NET_WORK_TYPE_EX_EHRPD_REL_A = "32";
var MACRO_NET_WORK_TYPE_EX_EHRPD_REL_B = "33";
var MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_0 = "34";
var MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_A = "35";
var MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_B = "36";
var MACRO_NET_WORK_TYPE_EX_WCDMA = "41";
var MACRO_NET_WORK_TYPE_EX_HSDPA = "42";
var MACRO_NET_WORK_TYPE_EX_HSUPA = "43";
var MACRO_NET_WORK_TYPE_EX_HSPA = "44";
var MACRO_NET_WORK_TYPE_EX_HSPA_PLUS = "45";
var MACRO_NET_WORK_TYPE_EX_DC_HSPA_PLUS = "46";
var MACRO_NET_WORK_TYPE_EX_TD_SCDMA = "61";
var MACRO_NET_WORK_TYPE_EX_TD_HSDPA = "62";
var MACRO_NET_WORK_TYPE_EX_TD_HSUPA = "63";
var MACRO_NET_WORK_TYPE_EX_TD_HSPA = "64";
var MACRO_NET_WORK_TYPE_EX_TD_HSPA_PLUS = "65";
var MACRO_NET_WORK_TYPE_EX_802_16E = "81";
var MACRO_NET_WORK_TYPE_EX_LTE = "101";
var MACRO_NET_WORK_TYPE_EX_LTE_PLUS = "1011";
var MACRO_KEYCODE = 13;
var MACRO_WIFI_OFF = "0";
var MACRO_WIFI_ON = "1";
var MACRO_WIFI_5G = "5G";
var AJAX_HEADER = "../";
var AJAX_TAIL = "";
var AJAX_TIMEOUT = 30000;
var LOGIN_STATES_SUCCEED = "0";
var LOGIN_STATES_FAIL = "-1";
var LOGIN_STATES_REPEAT = "-2";
var g_needToLogin = "";
var g_supportHeartBeat = false;
var g_needHelp = "";
var g_needFooter = "";
var g_needPinlock = 0;
var g_isTrunOffWlanChecked = false;
var g_MainMenuNumber = 2;
var ERROR_SYSTEM_NO_SUPPORT = 100002;
var ERROR_SYSTEM_NO_RIGHTS = "100003";
var ERROR_SYSTEM_BUSY = 100004;
var ERROR_LOGIN_USERNAME_WRONG = 108001;
var ERROR_LOGIN_PASSWORD_WRONG = 108002;
var ERROR_LOGIN_ALREADY_LOGIN = 108003;
var ERROR_LOGIN_USERNAME_PWD_WRONG = 108006;
var ERROR_LOGIN_USERNAME_PWD_ORERRUN = 108007;
var ERROR_LOGIN_FREQUENTLY_LOGIN = 108010;
var ERROR_VOICE_BUSY = 120001;
var ERROR_WRONG_TOKEN = 125001;
var ERROR_WRONG_SESSION = 125002;
var ERROR_WRONG_SESSION_TOKEN = 125003;
var MACRO_LOGIN = "1";
var MACRO_LOGOUT = "2";
var MACRO_NEWVERSIONFOUND = "12";
var MACRO_READYTOUPDATE = "50";
var MACRO_PASSWORD_LOW = 1;
var MACRO_PASSWORD_MID = 2;
var MACRO_PASSWORD_HIG = 3;
var MACRO_PASSWORD_REMIND_ON = "0";
var MACRO_PASSWORD_REMIND_OFF = "1";
var g_monitoring_dumeter_kb = 1024;
var g_monitoring_dumeter_mb = 1024 * 1024;
var g_monitoring_dumeter_gb = 1024 * 1024 * 1024;
var g_monitoring_dumeter_tb = 1024 * 1024 * 1024 * 1024;
var WIFI5G_ON = "1";
var WIFIDBDC_ON = "2";
var wifi5g_icon_flag = "-1";
var wifion_icon_flag = "-1";
var g_wifiFeatureSwitch = "";
var g_wlanInfo = "";
var plmn_rat_index = {
    0: 2,
    2: 3,
};
var g_judgeApplyFlag = false;
var g_isBridgeNotesOpened = false;
var g_is_connect_clicked = false;
var g_is_disconnect_clicked = false;
var g_is_network_connect = false;
var g_is_wlan_connect = false;
var g_is_power_off = false;
var g_isPostAjax = false;
var g_quicksetup_login = false;
var g_base64EncodeChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = [
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1,
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
    45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1,
];
var g_is_login_opened = false;
var g_is_clear_timeout = false;
var g_main_displayingPromptStack = [];
var DATA_READY = {
    statusReady: false,
    apStationReady: false,
    notificationsReady: false,
    cradleReady: false,
};
var USER_MANUAL_PATH = "usermanual";
var USER_MANUAL_FILE_NAME = "web_content_concept_00001.html";
var g_user_manual_url = "";
var DIALOG_UNREMOVE = 0;
var STATUS_BAR_ICON_STATUS = {
    sim_signal_tooltip_state: "",
    station_tooltip_state: "",
    wan_tooltip_state: "",
    wifi_tooltip_state: "",
    battery_tooltip_state: "",
    unread_sms_tooltip_state: "",
    wifi_indoor_tooltip_state: "",
    bluetooth_tooltip_state: "",
};
var STATUS_LISTENER_FUN_LIST = [];
var g_lastBatteryStatus = null;
var header_icon_status = {
    ConnectionStatus: " ",
    SignalStrength: " ",
    BatteryStatus: " ",
    BatteryLevel: " ",
    BatteryPercent: " ",
    SimStatus: " ",
    WifiStatus: " ",
    ServiceStatus: " ",
    CurrentNetworkType: " ",
    BluetoothStatus: " ",
    BluetoothConnectNumber: " ",
};
var WIFI_STATION_DISCONNECTED = "0";
var WIFI_STATION_CONNECTING = "1";
var WIFI_STATION_CONNECTED = "2";
var WIFI_STATION_DISCONNECTING = "3";
var g_BatteryStatus = -11111;
var g_BatteryLevel = -11111;
var g_WifiStatus = -11111;
var g_ConnectionStatus = -11111;
var sign_enable = 1;
var g_SimStatus = -11111;
var g_hSimStatus = -11111;
var g_SignalStrength = -11111;
var g_WifiIndoorStatus = -11111;
var g_Monitoring_CradleConnectionStatus = -11111;
var g_headIconConnectionStatus = -11111;
var g_NotificationsOnlineUpdateStatus = -11111;
var g_onlineUpdateEnable = -11111;
var HOME_PAGE_URL = "home.html";
var VOICE_BUSY_URL = "voicebusy.html";
var g_PageUrlTree = null;
var g_USBtetheringSwitch = null;
var USBTETHERING_ON = "1";
var LEDSWITCH_ON = "1";
var g_PositionInfo = null;
var MACRO_NET_SINGLE_MODE = 1;
var MACRO_NET_DUAL_MODE = 2;
var MACRO_NET_MODE_CHANGE = 1;
var MACRO_NET_MODE_RESET = 0;
var MACRO_NET_MODE_C = 1;
var MACRO_NET_MODE_W = 2;
var g_net_mode_type = MACRO_NET_SINGLE_MODE;
var g_net_mode_change = MACRO_NET_MODE_RESET;
var g_net_mode_status = null;
var g_ussdLeftmenu = [];
var tabKeyflag = false;
var MACRO_SUPPORT_CHAR_MIN = 32;
var MACRO_SUPPORT_CHAR_MAX = 126;
var MACRO_NOT_SUPPORT_CHAR_COMMA = 44;
var MACRO_NOT_SUPPORT_CHAR_QUOTATION_MARK = 34;
var MACRO_NOT_SUPPORT_CHAR_COLON = 58;
var MACRO_NOT_SUPPORT_CHAR_SEMICOLON = 59;
var MACRO_NOT_SUPPORT_BACKSLASH_MARK = 92;
var MACRO_NOT_SUPPORT_CHAR_38 = 38;
var MACRO_NOT_SUPPORT_CHAR_37 = 37;
var MACRO_NOT_SUPPORT_CHAR_43 = 43;
var MACRO_NOT_SUPPORT_CHAR_39 = 39;
var MACRO_NOT_SUPPORT_CHAR_60 = 60;
var MACRO_NOT_SUPPORT_CHAR_62 = 62;
var MACRO_NOT_SUPPORT_CHAR_63 = 63;
var LANGUAGE_DATA = {
    current_language: "en_us",
    supportted_languages: [],
    privacy_policy_list: {},
    usermanual_language_list: {},
};
var current_href = window.location.href;
var TOPMENU = {
    nav: [],
    have: false,
};
var _logEnable = getQueryStringByName("log");
var g_main_convergedStatus = null;
var g_plmn_rat = "";
var g_net_mode = "";
var g_scarm_login = false;
var g_old_to_scram = false;
var g_old_to_newSalt = "";
var g_old_to_newIter = "";
var g_set_cookie_flag = false;
var g_not_need_login_update = false;
var RSA_LOGIN_MODE = "1";
var DHCP_IP_ADDRESS_DEFAULT = "";
var DHCP_START_IP_ADDRESS_DEFAULT = "";
var DHCP_END_IP_ADDRESS_DEFAULT = "";
var DHCP_STATUS_DEFAULT = "1";
var DHCP_STATUS_DISABLED = "0";
var DHCP_LAN_NET_MASK_DEFAULT = "";
var DHCP_LEASE_TIME_DEFAULT = "0";
var dhcpLanIPAddress;
var dhcpLanNetmask;
var dhcpEnable;
var dhcpLanStartIP;
var dhcpLanEndIP;
var dhcpLeaseTime;
var firstTimeMontitoringStatusQuery = "0";
var alreadyStatusListnerExecuted = "0";
var dhcpPageVar = {
    DhcpIPAddress: DHCP_IP_ADDRESS_DEFAULT,
    DhcpLanNetmask: DHCP_LAN_NET_MASK_DEFAULT,
    DhcpStatus: DHCP_STATUS_DEFAULT,
    DhcpStartIPAddress: DHCP_START_IP_ADDRESS_DEFAULT,
    DhcpEndIPAddress: DHCP_END_IP_ADDRESS_DEFAULT,
    DHCPLeaseTime: DHCP_LEASE_TIME_DEFAULT,
};
var g_dialup_feature = "";
var g_bluetooth_feature = "";
var g_bridge_modeStatus = "";
var g_bluetooth_Status = "";
var BLUETOOTH_CONNECT_NUMBER_1 = "1";
var BLUETOOTH_CONNECT_NUMBER_2 = "2";
var BLUETOOTH_CONNECT_NUMBER_3 = "3";
var BLUETOOTH_ON = "1";
if (sessionStorage.refreshLastLoginSwitch == undefined) {
    sessionStorage.refreshLastLoginSwitch = "true";
}
function initDhcp() {
    dhcpLanIPAddress = dhcpPageVar.DhcpIPAddress;
    dhcpLanNetmask = dhcpPageVar.DhcpLanNetmask;
    dhcpEnable = dhcpPageVar.DhcpStatus;
    dhcpLanStartIP = dhcpPageVar.DhcpStartIPAddress;
    dhcpLanEndIP = dhcpPageVar.DhcpEndIPAddress;
    dhcpLeaseTime = dhcpPageVar.DHCPLeaseTime;
}
function matchLanguageExist(current_lang, lang_list_arr) {
    if ($.isArray(lang_list_arr)) {
        var lang_exsit = 0;
        $.each(lang_list_arr, function (i, v) {
            if (v.replace(/-/, "_") == current_lang.replace(/-/, "_")) {
                lang_exsit = i;
                return false;
            }
        });
        LANGUAGE_DATA.current_language = lang_list_arr[lang_exsit].replace(
            /-/,
            "_"
        );
    } else if ("undefined" != typeof lang_list_arr) {
        LANGUAGE_DATA.current_language = lang_list_arr.replace(/-/, "_");
    } else {
        LANGUAGE_DATA.current_language = "en_us";
    }
}
function reloadLeftMenu() {
    if ($(".content").children().first().is(".main_left")) {
        if ($(".main_left").children().is("#settings_menu")) {
            if (
                $.trim($("#settings_menu").html()) == "" ||
                $("#settings_menu").html() == null
            ) {
                showleftMenu();
            }
        } else if ($(".main_left").children().is("#sms_menu")) {
            if (
                $.trim($("#sms_menu").html()) == "" ||
                $("#sms_menu").html() == null
            ) {
                showleftMenu();
            }
        } else if ($(".main_left").children().is("#ussd_setting_menu")) {
            if (
                $.trim($("#ussd_setting_menu").html()) == "" ||
                $("#ussd_setting_menu").html() == null
            ) {
                showleftMenu();
            }
        } else if ($(".main_left").children().is("#sharingsamba_menu")) {
            if (
                $.trim($("#sharingsamba_menu").html()) == "" ||
                $("#sharingsamba_menu").html() == null
            ) {
                showleftMenu();
            }
        }
    }
    if (g_needFooter) {
        if ($.trim($("#footer").html()) == "" || $("#footer").html() == null) {
            showFooter();
        }
    }
}
function loadLangFile() {
    var langFile = "../language/lang_" + LANGUAGE_DATA.current_language + ".js";
    if (
        (window.navigator.appVersion.indexOf("Version/3.1") > 0 ||
            window.navigator.appVersion.indexOf("Version/3.2") > 0 ||
            window.navigator.appVersion.indexOf("Version/3.0") > 0) &&
        window.navigator.appVersion.indexOf("Safari") > 0
    ) {
        var head = document.getElementsByTagName("head")[0];
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", langFile, false);
        xmlHttp.send(null);
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.text = xmlHttp.responseText;
        head.appendChild(script);
    } else {
        $.ajax({
            async: false,
            type: "GET",
            timeout: "3000",
            url: langFile,
            dataType: "script",
            error: function (XMLHttpRequest, textStatus, errorThrown) {},
            success: function (data) {},
        });
    }
}
function main_getConvergedStatus() {
    getAjaxData(
        "api/monitoring/converged-status",
        function ($xml) {
            var ret = xml2object($xml);
            if (ret.type == "response") {
                g_main_convergedStatus = ret.response;
                matchLanguageExist(
                    g_main_convergedStatus.CurrentLanguage,
                    LANGUAGE_DATA.supportted_languages
                );
                loadLangFile();
            }
        },
        {
            sync: true,
        }
    );
    if (
        LANGUAGE_DATA.current_language == "ar_sa" ||
        LANGUAGE_DATA.current_language == "he_il" ||
        LANGUAGE_DATA.current_language == "fa_fa"
    ) {
        $("link").attr("href", "../css/main_Arabic.css");
    }
    $(document).ready(function () {
        $("#login_wrapper").show();
        document.onblur = function () {
            flag_focus = false;
        };
        document.onclick = function () {
            flag_focus = true;
        };
        g_simcard_timer = setTimeout(
            refreshSimcardStatus,
            SIMCARD_STATUS_REFRESH
        );
    });
}
function getLangList() {
    getConfigData(
        "config/global/languagelist.xml",
        function ($xml) {
            var lang_list_ret = xml2object($xml);
            if (lang_list_ret.type == "config") {
                LANGUAGE_DATA.supportted_languages =
                    lang_list_ret.config.languages.language;
                LANGUAGE_DATA.privacy_policy_list =
                    lang_list_ret.config.privacy_policy_url;
                LANGUAGE_DATA.usermanual_language_list =
                    lang_list_ret.config.usermanual_language;
            }
        },
        {
            sync: true,
        }
    );
}
function initLanguage() {
    getLangList();
    main_getConvergedStatus();
}
function gettimeout() {
    var ret = 0;
    getAjaxData(
        "api/time/timeout",
        function ($xml) {
            var timeout_ret = xml2object($xml);
            if (timeout_ret.type == "response") {
                ret = timeout_ret.response.timeout * 60000;
            } else {
                ret = 300000;
            }
        },
        {
            sync: true,
        }
    );
    return ret;
}
function getPrivacyNoticeInfo() {
    if (g_module.gdpr_enabled) {
        var requestData = {
            language: LANGUAGE_DATA.current_language,
        };
        var xmlStr = object2xml("request", requestData);
        saveAjaxData(
            "api/app/privacynoticeinfo",
            xmlStr,
            function ($xml) {
                var ret = xml2object($xml);
                if (ret.type == "response") {
                    g_privacyUrl = ret.response.privacynotice_path;
                    g_privacypolicy_update = ret.response.isprivacynoticeupdate;
                    if (g_privacypolicy_update == "1") {
                        g_restore_default_status = "1";
                    }
                    if (
                        g_restore_default_status != "1" ||
                        G_SUPER_USERNAME == g_username_default
                    ) {
                        g_PageUrlTree.settings.quick_setup = "";
                    }
                }
            },
            {
                sync: true,
            }
        );
    }
}
function main_executeBeforeDocumentReady() {
    getDefaultPass();
    getGlobalFeatures();
    getPrivacyNoticeInfo();
    initLanguage();
    if ($.browser.msie && $.browser.version == "6.0") {
        try {
            document.execCommand("BackgroundImageCache", false, true);
        } catch (e) {}
    }
    if (current_href.indexOf("?url") > 0) {
        current_href = current_href.substring(0, current_href.indexOf("?url"));
        current_href = current_href.substring(
            current_href.lastIndexOf("/") + 1
        );
        current_href = current_href.substring(0, current_href.indexOf("."));
    } else {
        current_href = current_href.substring(
            current_href.lastIndexOf("/") + 1
        );
        if (current_href.lastIndexOf("?") > 0) {
            current_href = current_href.substring(
                0,
                current_href.lastIndexOf("?")
            );
            current_href = current_href.substring(0, current_href.indexOf("."));
            if (current_href == "smsinbox") {
                current_href = location.search.substring(1);
            }
        } else {
            current_href = current_href.substring(
                0,
                current_href.lastIndexOf(".")
            );
        }
    }
    selectCur(g_PageUrlTree);
    checkModuleEnable(current_href);
    if (navigator.userAgent.indexOf("MSIE 6.") > -1) {
        window.attachEvent("onload", correctPNG);
    }
    getAjaxData("api/device/device-feature-switch", function ($xml) {
        var coulometer_ret = xml2object($xml);
        if (coulometer_ret.type == "response") {
            g_coulometer_status = coulometer_ret.response.coulometer_enabled;
        }
    });
    if (g_module.web_feature_enabled) {
        getAjaxData(
            "api/user/web-feature-switch",
            function ($xml) {
                var ret = xml2object($xml);
                if (ret.type == "response") {
                    if (
                        ret.response.web_pwd_simplify_enabled &&
                        ret.response.web_pwd_simplify_enabled == "1"
                    ) {
                        g_supportPwdStrength = false;
                    } else {
                        g_supportPwdStrength = true;
                    }
                    if (
                        ret.response.wifi_web_pwd_same_enabled &&
                        ret.response.wifi_web_pwd_same_enabled == "1"
                    ) {
                        g_supportPwdSame = true;
                    } else {
                        g_supportPwdSame = false;
                    }
                }
            },
            {
                sync: true,
            }
        );
    }
    getAjaxData(
        "api/user/state-login",
        function ($xml) {
            var rets = xml2object($xml);
            if (rets.type == "response") {
                if (
                    typeof rets.response.extern_password_type != "undefined" &&
                    rets.response.extern_password_type == "1"
                ) {
                    g_scarm_login = true;
                } else {
                    g_scarm_login = false;
                }
                if (rets.response.newSalt && rets.response.newIterations) {
                    g_old_to_newSalt = rets.response.newSalt;
                    g_old_to_newIter = rets.response.newIterations;
                    g_old_to_scram = true;
                } else {
                    g_old_to_scram = false;
                }
            }
        },
        {
            sync: true,
        }
    );
    checkUpdateNeedLogin();
}
function checkObjectExist() {
    var ret = true;
    var i = 0;
    var tempObject = arguments[0];
    if (typeof tempObject == "object") {
        for (i = 1; i < arguments.length; i++) {
            if (typeof tempObject == "object" && arguments[i] in tempObject) {
                tempObject = tempObject[arguments[i]];
            } else {
                ret = false;
                break;
            }
        }
    }
    if ($.trim(tempObject) == "") {
        ret = false;
    }
    return ret;
}
function checkGotoHome(enable) {
    if (!enable) {
        gotoPageWithoutHistory(HOME_PAGE_URL);
    }
}
function checkModuleEnable(current_page) {
    switch (current_page) {
        case "commend":
            g_smallPage = mainIsHandheldBrowser();
            checkGotoHome(
                g_smallPage &&
                    g_feature.commend_enable &&
                    checkObjectExist(g_PageUrlTree, "commend")
            );
            break;
        case "home":
        case "update_autorun":
        case "opennewwindow":
            break;
        case "privacynotice":
            checkGotoHome(g_module.gdpr_enabled);
            break;
        case "statistic":
            checkGotoHome(
                g_module.statistic_enabled &&
                    checkObjectExist(g_PageUrlTree, "statistic")
            );
            break;
        case "celllock":
            checkGotoHome(g_module.celllock_enabled);
            break;
        case "smsinbox":
        case "smssent":
        case "smsdrafts":
            checkGotoHome(g_module.sms_enabled);
            if (g_sms_mode == 1) {
                gotoPageWithoutHistory(HOME_PAGE_URL);
            }
            break;
        case "smsandroid":
            checkGotoHome(g_module.sms_enabled);
            if (g_sms_mode != 1) {
                gotoPageWithoutHistory(HOME_PAGE_URL);
            }
            break;
        case "messagesettings":
            checkGotoHome(
                g_module.sms_enabled &&
                    checkObjectExist(g_PageUrlTree, "sms", "sms_center_number")
            );
            if (g_sms_mode == 1) {
                gotoPageWithoutHistory(HOME_PAGE_URL);
            }
            break;
        case "chatmessagesettings":
            checkGotoHome(
                g_module.sms_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "sms",
                        "sms_center_number_android"
                    )
            );
            if (g_sms_mode != 1) {
                gotoPageWithoutHistory(HOME_PAGE_URL);
            }
            break;
        case "phonebook":
            checkGotoHome(g_module.pb_enabled);
            break;
        case "ussd":
            checkGotoHome(g_module.ussd_enabled);
            break;
        case "update":
            checkGotoHome(g_module.online_update_enabled);
            break;
        case "update_local":
            checkGotoHome(
                g_module.local_update_enabled &&
                    checkObjectExist(g_PageUrlTree, "update", "update_local")
            );
            break;
        case "dlna":
            checkGotoHome(g_module.dlna_enabled);
            break;
        case "sdcardsharing":
            checkGotoHome(g_module.sdcard_enabled);
            break;
        case "sambasettings":
            checkGotoHome(g_module.sambashare_enabled);
            break;
        case "stk":
            checkGotoHome(g_module.stk_enabled);
            break;
        case "installsoftware":
            checkGotoHome(g_module.assistant_enabled);
            break;
        case "wifinetworks":
            checkGotoHome(
                g_module.wifioffload_enable &&
                    checkObjectExist(g_PageUrlTree, "settings", "internet")
            );
            break;
        case "wifipriority":
            checkGotoHome(
                g_module.wifioffload_enable &&
                    checkObjectExist(g_PageUrlTree, "settings", "internet")
            );
            break;
        case "stationwps":
            checkGotoHome(
                g_module.wifioffload_enable &&
                    g_wifi.stawpsenabled &&
                    checkObjectExist(g_PageUrlTree, "settings", "internet")
            );
            break;
        case "sambasharinguser":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "sharing",
                    "sambasharinguser"
                ) && g_module.sambashare_enabled
            );
            break;
        case "quicksetup":
            checkGotoHome(
                checkObjectExist(g_PageUrlTree, "settings", "quick_setup")
            );
            break;
        case "sntp":
            checkGotoHome(checkObjectExist(g_PageUrlTree, "settings", "sntp"));
            break;
        case "mobileconnection":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "dialup",
                    "mobileconnection"
                )
            );
            break;
        case "profilesmgr":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "dialup",
                    "profilesmgr"
                )
            );
            break;
        case "mobilenetworksettings":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "dialup",
                    "mobilenetworksettings"
                )
            );
            break;
        case "dhcp":
            checkGotoHome(
                checkObjectExist(g_PageUrlTree, "settings", "dialup", "dhcp")
            );
            break;
        case "volte":
            checkGotoHome(
                g_module.volte_enabled &&
                    checkObjectExist(g_PageUrlTree, "settings", "volte")
            );
            break;
        case "ethernetsettings":
            checkGotoHome(
                g_module.cradle_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "ethernet",
                        "ethernetsettings"
                    )
            );
            break;
        case "ethernetstatus":
            checkGotoHome(
                g_module.cradle_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "ethernet",
                        "ethernetstatus"
                    )
            );
            break;
        case "vpnstatus":
            checkGotoHome(
                g_module.vpn_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "vpn",
                        "vpnstatus"
                    )
            );
            break;
        case "vpnsettings":
            checkGotoHome(
                g_module.vpn_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "vpn",
                        "vpnsettings"
                    )
            );
            break;
        case "macclone":
            checkGotoHome(
                g_module.cradle_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "ethernet",
                        "macclone"
                    )
            );
            break;
        case "wlanbasicsettings":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "wlan",
                    "wlanbasicsettings"
                )
            );
            break;
        case "wlanadvanced":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "wlan",
                    "wlanadvanced"
                )
            );
            break;
        case "wlanmacfilter":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "wlan",
                    "wlanmacfilter"
                )
            );
            break;
        case "wps":
            checkGotoHome(
                checkObjectExist(g_PageUrlTree, "settings", "wlan", "wps")
            );
            break;
        case "voicebasicsettings":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "voicebasicsettings"
                )
            );
            break;
        case "ftpserver":
            checkGotoHome(
                g_module.voip_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "voip",
                        "ftpserver"
                    )
            );
            break;
        case "serverbasic":
            checkGotoHome(
                g_module.voip_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "voip",
                        "serverbasic"
                    )
            );
            break;
        case "sipbasic":
            checkGotoHome(
                g_module.voip_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "voip",
                        "sipbasic"
                    )
            );
            break;
        case "speeddial":
            checkGotoHome(
                g_module.voip_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "voip",
                        "speeddial"
                    )
            );
            break;
        case "voiceprofile":
            checkGotoHome(
                g_module.voip_enabled &&
                    g_module.voiceprofile_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "voip",
                        "voiceprofile"
                    )
            );
            break;
        case "advancecodec":
            checkGotoHome(
                g_module.voip_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "voip",
                        "advancecodec"
                    )
            );
            break;
        case "voiceadvanced":
            checkGotoHome(
                g_module.voip_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "voip",
                        "voiceadvanced"
                    )
            );
            break;
        case "pincodemanagement":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "security",
                    "pincodemanagement"
                )
            );
            break;
        case "pincodeautovalidate":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "security",
                    "pincodeautovalidate"
                )
            );
            break;
        case "firewallswitch":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "security",
                    "firewallswitch"
                )
            );
            break;
        case "macfilter":
            checkGotoHome(
                g_module.fw_macfilter_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "security",
                        "macfilter"
                    )
            );
            break;
        case "lanipfilter":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "security",
                    "lanipfilter"
                )
            );
            break;
        case "virtualserver":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "security",
                    "virtualserver"
                )
            );
            break;
        case "specialapplication":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "security",
                    "specialapplication"
                )
            );
            break;
        case "dmzsettings":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "security",
                    "dmzsettings"
                )
            );
            break;
        case "sipalgsettings":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "security",
                    "sipalgsettings"
                )
            );
            break;
        case "upnp":
            checkGotoHome(
                checkObjectExist(g_PageUrlTree, "settings", "security", "upnp")
            );
            break;
        case "pcp":
            checkGotoHome(
                g_module.pcp_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "security",
                        "pcp"
                    )
            );
            break;
        case "nat":
            checkGotoHome(
                checkObjectExist(g_PageUrlTree, "settings", "security", "nat")
            );
            break;
        case "urlfilter":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "security",
                    "urlfilter"
                )
            );
            break;
        case "ddns":
            checkGotoHome(
                g_module.ddns_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "security",
                        "ddns"
                    )
            );
            break;
        case "staticroute":
            checkGotoHome(
                (g_module.static_route_enabled ||
                    g_module.static_route6_enabled) &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "security",
                        "staticroute"
                    )
            );
            break;
        case "bridgemode":
            checkGotoHome(
                g_module.bridge_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "security",
                        "bridgemode"
                    )
            );
            break;
        case "devicemanagement":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "security",
                    "devicemanagement"
                )
            );
            break;
        case "parentalcontrol":
            checkGotoHome(
                g_module.parentalcontrol_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "security",
                        "parentalcontrol"
                    )
            );
            break;
        case "tr069settings":
            checkGotoHome(
                g_module.cwmp_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "tr069",
                        "tr069settings"
                    )
            );
            break;
        case "tr069profile":
            checkGotoHome(
                g_module.cwmp_enabled &&
                    g_module.tr069profile_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "tr069",
                        "tr069profile"
                    )
            );
            break;
        case "deviceinformation":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "system",
                    "deviceinformation"
                )
            );
            break;
        case "diagnosis":
            checkGotoHome(
                g_module.diagnosis_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "system",
                        "diagnosis"
                    )
            );
            break;
        case "configuration":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "system",
                    "configuration"
                )
            );
            break;
        case "modifypassword":
            checkGotoHome(
                checkObjectExist(
                    g_PageUrlTree,
                    "settings",
                    "system",
                    "modifypassword"
                )
            );
            break;
        case "restore":
            checkGotoHome(
                checkObjectExist(g_PageUrlTree, "settings", "system", "restore")
            );
            break;
        case "reboot":
            checkGotoHome(
                checkObjectExist(g_PageUrlTree, "settings", "system", "reboot")
            );
            break;
        case "systemsettings":
            checkGotoHome(
                isneedsystemsettings() &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "system",
                        "systemsettings"
                    )
            );
            break;
        case "systemlog":
            checkGotoHome(
                isneedsystemlog() &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "system",
                        "systemlog"
                    )
            );
            break;
        case "timesettings":
            checkGotoHome(
                g_module.timeserverdisplay_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "system",
                        "timesettings"
                    )
            );
            break;
        case "antenna":
            checkGotoHome(
                g_module.antenna_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "system",
                        "antenna"
                    )
            );
            break;
        case "vsim":
            checkGotoHome(
                g_module.vsim_enabled &&
                    checkObjectExist(g_PageUrlTree, "settings", "vsim")
            );
            break;
        case "cbssettings":
            checkGotoHome(
                g_module.cbs_enabled &&
                    checkObjectExist(g_PageUrlTree, "settings", "cbssettings")
            );
            break;
        case "qossettings":
            checkGotoHome(
                g_module.qos_enabled &&
                    checkObjectExist(g_PageUrlTree, "settings", "qossettings")
            );
            break;
        case "bluetooth":
            checkGotoHome(
                g_module.bluetooth_enabled &&
                    checkObjectExist(g_PageUrlTree, "settings", "bluetooth")
            );
            break;
        case "bluetoothsetting":
            checkGotoHome(
                g_module.bt_enabled &&
                    checkObjectExist(
                        g_PageUrlTree,
                        "settings",
                        "bluetoothsetting"
                    )
            );
            break;
        case "btwakeup":
            checkGotoHome(
                g_module.btwakeup_enabled &&
                    checkObjectExist(g_PageUrlTree, "settings", "btwakeup")
            );
            break;
        case "nfcsetting":
            checkGotoHome(
                g_module.nfc_enable &&
                    checkObjectExist(g_PageUrlTree, "settings", "nfc")
            );
            break;
        case "cradleDisconnected":
            checkGotoHome(
                g_module.cradle_enabled && g_feature.special_redirect == 1
            );
            break;
        case "nocard":
        case "pincoderequired":
        case "pukrequired":
        case "simlockrequired":
            checkGotoHome(g_feature.special_redirect == 1);
            break;
        case "appmanagement":
            checkGotoHome(
                g_feature.appmanagements.enabled == 1 &&
                    checkObjectExist(g_PageUrlTree, "appmanagement")
            );
            break;
        case "voicebusy":
            if (isneedvoicbusy()) {
                checkGotoHome(isneedvoicbusy());
            } else {
                checkGotoHome(g_module.voip_enabled || g_module.cs_enable);
            }
            break;
        case "writtenoffer":
            break;
        case "acl":
            break;
        default:
            gotoPageWithoutHistory(HOME_PAGE_URL);
            break;
    }
}
function dw(text) {
    if (MACRO_NET_DUAL_MODE == g_net_mode_type) {
        if (text.indexOf("SIMLOCK") > -1) {
            document.write(text);
        } else {
            text = text.replace(/SIM/g, "UIM");
            document.write(text);
        }
    } else {
        document.write(text);
    }
}
function changeLang(key, val) {
    var langObj = {
        CurrentLanguage: val,
    };
    langObj.CurrentLanguage = langObj.CurrentLanguage.replace(/_/, "-");
    var res = object2xml("request", langObj);
    saveAjaxData("api/language/current-language", res, function ($xml) {
        var ret = xml2object($xml);
        if (isAjaxReturnOK(ret)) {
            refresh();
        }
    });
}
function setMainMenu() {
    var MenuNumber = 0;
    if (
        current_href == "pincoderequired" ||
        current_href == "pukrequired" ||
        current_href == "simlockrequired" ||
        current_href == "nocard" ||
        current_href == "connectionless" ||
        current_href == "opennewwindow" ||
        current_href == "privacynotice"
    ) {
        $("#union_main_menu").hide();
        $("#logout_span").hide();
    } else {
        $("#home").children().text(common_home);
        $("#settings").children().text(common_settings);
        MenuNumber = 2;
        if (
            g_module.statistic_enabled &&
            MenuNumber < g_MainMenuNumber &&
            g_PageUrlTree.statistic != ""
        ) {
            $("#statistic")
                .children()
                .text(connection_hilink_label_traffic_statistics);
            MenuNumber++;
        } else if (
            g_module.statistic_enabled &&
            MenuNumber >= g_MainMenuNumber
        ) {
            $("#menu_statistic").remove();
            MenuNumber++;
            Add_more_menu(
                "statistic",
                "statistic.html",
                connection_hilink_label_traffic_statistics
            );
        } else {
            $("#menu_statistic").remove();
        }
        if (g_module.celllock_enabled && MenuNumber < g_MainMenuNumber) {
            $("#celllock").children().text(IDS_common_celllock);
            MenuNumber++;
        } else if (
            g_module.celllock_enabled &&
            MenuNumber >= g_MainMenuNumber
        ) {
            $("#menu_celllock").remove();
            MenuNumber++;
            Add_more_menu("celllock", "celllock.html", IDS_common_celllock);
        } else {
            $("#menu_celllock").remove();
        }
        if (g_module.sms_enabled && MenuNumber < g_MainMenuNumber) {
            $("#sms").children().text(sms_lable_sms);
            MenuNumber++;
        } else if (g_module.sms_enabled && MenuNumber >= g_MainMenuNumber) {
            $("#menu_sms").remove();
            MenuNumber++;
            Add_more_menu("sms", "smsinbox.html", sms_lable_sms);
        } else {
            $("#menu_sms").remove();
        }
        if (g_module.pb_enabled && MenuNumber < g_MainMenuNumber) {
            $("#pb").children().text(pb_label_phonebook);
            MenuNumber++;
        } else if (g_module.pb_enabled && MenuNumber >= g_MainMenuNumber) {
            $("#menu_pb").remove();
            MenuNumber++;
            Add_more_menu("pb", "phonebook.html", pb_label_phonebook);
        } else {
            $("#menu_pb").remove();
        }
        if (g_module.ussd_enabled && MenuNumber < g_MainMenuNumber) {
            $("#ussd").children().text(ussd_label_ussd);
            MenuNumber++;
        } else if (g_module.ussd_enabled && MenuNumber >= g_MainMenuNumber) {
            $("#menu_ussd").remove();
            MenuNumber++;
            Add_more_menu("ussd", "ussd.html", ussd_label_ussd);
        } else {
            $("#menu_ussd").remove();
        }
        if (g_module.online_update_enabled && MenuNumber < g_MainMenuNumber) {
            $("#update").children().text(common_updates);
            MenuNumber++;
        } else if (
            g_module.online_update_enabled &&
            MenuNumber >= g_MainMenuNumber
        ) {
            $("#menu_update").remove();
            MenuNumber++;
            Add_more_menu("update", "update.html", common_updates);
        } else {
            $("#menu_update").remove();
        }
        if (
            (g_module.dlna_enabled ||
                g_module.sdcard_enabled ||
                g_module.sambashare_enabled) &&
            MenuNumber < g_MainMenuNumber
        ) {
            $("#sharing").children().text(sharing_label_sharing);
            MenuNumber++;
            if (g_module.sdcard_enabled) {
                $("#menu_sharing a").attr("href", "sdcardsharing.html");
            } else if (g_module.sambashare_enabled) {
                $("#menu_sharing a").attr("href", "sambasettings.html");
            } else {
                $("#menu_sharing a").attr("href", "dlna.html");
            }
        } else if (
            (g_module.dlna_enabled ||
                g_module.sdcard_enabled ||
                g_module.sambashare_enabled) &&
            MenuNumber >= g_MainMenuNumber
        ) {
            $("#menu_sharing").remove();
            MenuNumber++;
            if (g_module.sdcard_enabled) {
                Add_more_menu(
                    "sharing",
                    "sdcardsharing.html",
                    sharing_label_sharing
                );
            } else if (g_module.sambashare_enabled) {
                Add_more_menu(
                    "sharing",
                    "sambasettings.html",
                    sharing_label_sharing
                );
            } else {
                Add_more_menu("sharing", "dlna.html", sharing_label_sharing);
            }
        } else {
            $("#menu_sharing").remove();
        }
        if (g_module.stk_enabled && MenuNumber < g_MainMenuNumber) {
            $("#stk").children().text(stk_label_stk);
            MenuNumber++;
        } else if (g_module.stk_enabled && MenuNumber >= g_MainMenuNumber) {
            $("#menu_stk").remove();
            MenuNumber++;
            Add_more_menu("stk", "stk.html", stk_label_stk);
        } else {
            $("#menu_stk").remove();
        }
        if (
            g_feature.appmanagements.enabled == 1 &&
            checkObjectExist(g_PageUrlTree, "appmanagement") &&
            MenuNumber < g_MainMenuNumber
        ) {
            $("#appmanagement").children().text(IDS_APP_MANAGEMENT);
            MenuNumber++;
        } else if (
            g_feature.appmanagements.enabled &&
            MenuNumber >= g_MainMenuNumber
        ) {
            $("#menu_appmanagement").remove();
            MenuNumber++;
            Add_more_menu(
                "appmanagement",
                "appmanagement.html",
                IDS_APP_MANAGEMENT
            );
        } else {
            $("#menu_appmanagement").remove();
        }
        if ($("#more_dialog").size() < 1) {
            $("#menu_more").remove();
        } else {
            $("#more").die("click");
            $("#more").live("click", function () {
                MoreMenuCreate();
            });
            $(".main_menu:not(#more),div:not(#more_dialog)").mouseover(
                function () {
                    $("#more_dialog").hide();
                }
            );
            setTimeout(function () {
                var i;
                for (i = 1; i < $("#more_menu_ul").children().length + 1; i++) {
                    if (
                        $("#more_menu_ul li:nth-child(" + i + ")")
                            .children()
                            .hasClass("active")
                    ) {
                        $("#more").addClass("active");
                    }
                }
            }, 50);
        }
        $("#union_main_menu").show();
        showCur(true);
    }
}
function Add_more_menu(MenuID, MenuAddress, MenuLabel) {
    var moreHtml = "";
    if ($("#more_dialog").size() < 1) {
        $("#more").children().text(common_more);
        moreHtml =
            "<div  id='more_dialog' class='more_menu clr_white_more_menu'>";
        moreHtml += "    <ul id ='more_menu_ul'>";
        moreHtml += "    </ul>";
        moreHtml += "</div>";
        $("body").append(moreHtml);
    }
    moreHtml = "<li id='menu_" + MenuID + "'>";
    moreHtml += "    <a id='" + MenuID + "' href='" + MenuAddress + "'>";
    moreHtml += "        <span>" + MenuLabel + "</span>";
    moreHtml += "    </a>";
    moreHtml += "</li>";
    $("#more_menu_ul").append(moreHtml);
}
function MoreMenuCreate() {
    function StrLength(SourceStr) {
        var strleng = 0;
        var i;
        for (i = 0; i < SourceStr.length; i++) {
            if (
                SourceStr.charCodeAt(i) > 0x3000 &&
                SourceStr.charCodeAt(i) < 0xffff
            ) {
                strleng += 3;
            } else {
                strleng++;
            }
        }
        return strleng;
    }
    if ($("#more_dialog").size() >= 1) {
        var moreWidth = 0;
        var offset = $("#menu_more").offset();
        var scTop = offset.top;
        var scLeft = offset.left;
        var newTop = scTop + $("#menu_more").height();
        var newLeft = scLeft + 5;
        var i;
        for (i = 0; i < $("#more_menu_ul").children().length; i++) {
            var more_str_length = StrLength(
                $("#more_menu_ul li:eq(" + i + ")")
                    .children()
                    .children()
                    .text()
            );
            if (more_str_length > moreWidth) {
                moreWidth = more_str_length;
            }
        }
        moreWidth =
            moreWidth * 11 < $("#menu_more").width()
                ? $("#menu_more").width()
                : moreWidth * 11;
        $(".more_menu").css({
            width: moreWidth + "px",
        });
        $(".more_menu ul li").css({
            width: moreWidth + "px",
        });
        if (
            LANGUAGE_DATA.current_language == "ar_sa" ||
            LANGUAGE_DATA.current_language == "he_il" ||
            LANGUAGE_DATA.current_language == "fa_fa"
        ) {
            newLeft = scLeft + $("#menu_more").width() + 5;
            newLeft = newLeft - moreWidth;
        }
        $("#more_dialog")
            .css({
                position: "absolute",
                left: newLeft + "px",
                top: newTop + "px",
                "background-color": "#00FF00  no-repeat right center",
            })
            .show();
    }
}
function selectCur(obj) {
    $.each(obj, function (i, n) {
        if (!TOPMENU.have) {
            TOPMENU.nav.push(i);
        }
        if (typeof n == "object") {
            selectCur(n);
        } else if (typeof n == "string") {
            if (n == current_href) {
                TOPMENU.nav.push(n);
                TOPMENU.have = true;
            }
        }
        if (!TOPMENU.have) {
            TOPMENU.nav.pop();
        }
    });
}
var ispageExist = false;
function checkPageExist(obj, url) {
    ispageExist = false;
    if (url == "ussd") {
        ispageExist = true;
    }
    $.each(obj, function (i, n) {
        if (ispageExist) {
            return false;
        }
        if (typeof n == "object") {
            ispageExist = checkPageExist(n, url);
        } else if (typeof n == "string") {
            if (n == url) {
                ispageExist = true;
                return false;
            }
        }
    });
    return ispageExist;
}
function showCur(noSubMenu) {
    if (noSubMenu) {
        $("#" + TOPMENU.nav[0]).addClass("active");
    } else {
        $("#" + TOPMENU.nav[1]).addClass("click");
        var cName = $("#" + TOPMENU.nav[1]).get(0).className;
        if (cName.indexOf("nosub") > -1) {
            cName = cName.replace("nosub ", "nosub");
        }
        $("#" + TOPMENU.nav[1])[0].className = cName;
        $("#" + TOPMENU.nav[2]).addClass("subClick");
    }
}
function getQueryStringByName(item) {
    var svalue = location.search.match(
        new RegExp("[?&]" + item + "=([^&]*)(&?)", "i")
    );
    return svalue ? svalue[1] : svalue;
}
function initUssdLeftMenu() {
    if (typeof g_PageUrlTree.ussd.prepaid != "undefined") {
        $("#prepaidussd").removeClass("sub").addClass("sub click");
        if (
            typeof g_PageUrlTree.ussd.prepaid.pre_service_title != "undefined"
        ) {
            g_ussdLeftmenu[0] =
                "pre" + g_PageUrlTree.ussd.prepaid.pre_service_title;
            $("#pre_service_title").addClass("subClick");
        } else if (
            typeof g_PageUrlTree.ussd.prepaid.pre_fun_balanceInquiry !=
            "undefined"
        ) {
            g_ussdLeftmenu[0] =
                "pre" + g_PageUrlTree.ussd.prepaid.pre_fun_balanceInquiry;
            $("#pre_fun_balanceInquiry").addClass("subClick");
        } else if (
            typeof g_PageUrlTree.ussd.prepaid.pre_fun_charge != "undefined"
        ) {
            g_ussdLeftmenu[0] =
                "pre" + g_PageUrlTree.ussd.prepaid.pre_fun_charge;
            $("#pre_fun_charge").addClass("subClick");
        } else if (
            typeof g_PageUrlTree.ussd.prepaid.pre_fun_general != "undefined"
        ) {
            g_ussdLeftmenu[0] =
                "pre" + g_PageUrlTree.ussd.prepaid.pre_fun_general;
            $("#pre_fun_general").addClass("subClick");
        }
    } else if (typeof g_PageUrlTree.ussd.postpaid != "undefined") {
        $("#postpaidussd").removeClass("sub").addClass("sub click");
        if (
            typeof g_PageUrlTree.ussd.postpaid.post_service_title != "undefined"
        ) {
            g_ussdLeftmenu[0] =
                "post" + g_PageUrlTree.ussd.postpaid.post_service_title;
            $("#post_service_title").addClass("subClick");
        } else if (
            typeof g_PageUrlTree.ussd.postpaid.post_fun_balanceInquiry !=
            "undefined"
        ) {
            g_ussdLeftmenu[0] =
                "post" + g_PageUrlTree.ussd.postpaid.post_fun_balanceInquiry;
            $("#post_fun_balanceInquiry").addClass("subClick");
        } else if (
            typeof g_PageUrlTree.ussd.postpaid.post_fun_charge != "undefined"
        ) {
            g_ussdLeftmenu[0] =
                "post" + g_PageUrlTree.ussd.postpaid.post_fun_charge;
            $("#post_fun_charge").addClass("subClick");
        } else if (
            typeof g_PageUrlTree.ussd.postpaid.post_fun_general != "undefined"
        ) {
            g_ussdLeftmenu[0] =
                "post" + g_PageUrlTree.ussd.postpaid.post_fun_general;
            $("#post_fun_general").addClass("subClick");
        }
    }
}
function showUssdLeftMenu() {
    if ($(".main_left").children().is("#ussd_setting_menu")) {
        initUssdLeftMenu();
        $(".main_left").load("leftmenu.html #ussd_setting_menu", function () {
            clickMenu("menu_settings");
            $("#ussd").addClass("active");
            if (checkLeftMenu(g_PageUrlTree.ussd.prepaid)) {
                $("#lable_prepaidussd").text(ussd_leftmenu_prepaid);
                if (
                    checkLeftMenu(g_PageUrlTree.ussd.prepaid.pre_service_title)
                ) {
                    $("#lable_pre_service_title").text(
                        ussd_leftmenu_ActivateService
                    );
                } else {
                    $("#pre_service_title").remove();
                }
                if (
                    checkLeftMenu(
                        g_PageUrlTree.ussd.prepaid.pre_fun_balanceInquiry
                    )
                ) {
                    $("#lable_pre_fun_balanceInquiry").text(
                        ussd_label_BalanceInquiry_title
                    );
                } else {
                    $("#pre_fun_balanceInquiry").remove();
                }
                if (checkLeftMenu(g_PageUrlTree.ussd.prepaid.pre_fun_charge)) {
                    $("#lable_pre_fun_charge").text(ussd_label_Charge_title);
                } else {
                    $("#pre_fun_charge").remove();
                }
                if (checkLeftMenu(g_PageUrlTree.ussd.prepaid.pre_fun_general)) {
                    $("#lable_pre_fun_general").text(
                        ussd_label_Universal_title
                    );
                } else {
                    $("#pre_fun_general").remove();
                }
            } else {
                $("#prepaidussd").remove();
            }
            if (checkLeftMenu(g_PageUrlTree.ussd.postpaid)) {
                $("#label_postpaidussd").text(ussd_leftmenu_postpaid);
                if (
                    checkLeftMenu(
                        g_PageUrlTree.ussd.postpaid.post_service_title
                    )
                ) {
                    $("#lable_post_service_title").text(
                        ussd_leftmenu_ActivateService
                    );
                } else {
                    $("#post_service_title").remove();
                }
                if (
                    checkLeftMenu(
                        g_PageUrlTree.ussd.postpaid.post_fun_balanceInquiry
                    )
                ) {
                    $("#lable_post_fun_balanceInquiry").text(
                        ussd_label_BalanceInquiry_title
                    );
                } else {
                    $("#post_fun_balanceInquiry").remove();
                }
                if (
                    checkLeftMenu(g_PageUrlTree.ussd.postpaid.post_fun_charge)
                ) {
                    $("#lable_post_fun_charge").text(ussd_label_Charge_title);
                } else {
                    $("#post_fun_charge").remove();
                }
                if (
                    checkLeftMenu(g_PageUrlTree.ussd.postpaid.post_fun_general)
                ) {
                    $("#lable_post_fun_general").text(
                        ussd_label_Universal_title
                    );
                } else {
                    $("#post_fun_general").remove();
                }
            } else {
                $("#postpaidussd").remove();
            }
            initUssdLeftMenu();
            if (
                g_restore_default_status == "1" &&
                G_SUPER_USERNAME != g_username_default
            ) {
                $("#menu_detail_list").children().not("#quick_setup").hide();
            }
        });
    }
}
function checkLeftMenu(obj) {
    return typeof obj != "undefined" && $.trim(obj) != "";
}
function isneedsystemsettings() {
    return true;
}
function isneedsystemlog() {
    if (g_feature.systemlog_enabled) {
        return true;
    }
    return false;
}
function isneedshowwps() {
    if (g_feature.wps_enabled == null) return true;
    if (g_feature.wps_enabled) {
        return true;
    }
    return false;
}
function isneedvoicbusy() {
    if (g_feature.voice_busy_notice == null) return false;
    if (g_feature.voice_busy_notice) {
        return true;
    }
    return false;
}
function showleftMenu() {
    if ($(".main_left").children().is("#sms_menu")) {
        $(".main_left").load("leftmenu.html #sms_menu", function () {
            clickMenu("menu_sms");
            $("#lable_sms").text(sms_lable_sms);
            $("#label_inbox").text(sms_label_inbox);
            $("#label_sent").text(sms_label_sent);
            $("#label_drafts").text(sms_label_drafts);
            if (checkLeftMenu(g_PageUrlTree.sms.sms_center_number)) {
                $("#label_sms_center_number").text(sms_label_sms_settings);
            } else {
                $("#sms_center_number").remove();
            }
            showCur(false);
            $("#label_inbox_status").text(g_sms_inbox_store_status);
            $("#label_sent_status").text(g_sms_outbox_store_status);
            $("#label_drafts_status").text(g_sms_draftbox_store_status);
            if (
                g_restore_default_status == "1" &&
                G_SUPER_USERNAME != g_username_default
            ) {
                $("#menu_detail_list").children().not("#quick_setup").hide();
            }
        });
    }
    if ($(".main_left").children().is("#sms_menu_android")) {
        $(".main_left").load("leftmenu.html #sms_menu_android", function () {
            clickMenu("menu_sms");
            $("#label_android").text(sms_label_message);
            if (checkLeftMenu(g_PageUrlTree.sms.sms_center_number)) {
                $("#label_sms_center_number_android").text(
                    sms_label_sms_settings
                );
            } else {
                $("#label_sms_center_number_android").remove();
            }
            showCur(false);
            $("#label_android_status").text(g_sms_android_store_status);
            if (
                g_restore_default_status == "1" &&
                G_SUPER_USERNAME != g_username_default
            ) {
                $("#menu_detail_list").children().not("#quick_setup").hide();
            }
        });
    }
    showUssdLeftMenu();
    if ($(".main_left").children().is("#settings_menu")) {
        $(".main_left").load("leftmenu.html #settings_menu", function () {
            clickMenu("menu_settings");
            if (
                checkLeftMenu(g_PageUrlTree.settings.quick_setup) &&
                g_restore_default_status == 1
            ) {
                $("#label_quick_setup").attr("title", wizard_label_quick_setup);
                $("#label_quick_setup").text(wizard_label_quick_setup);
            } else {
                $("#quick_setup").remove();
            }
            if (
                g_module.wifioffload_enable &&
                checkLeftMenu(g_PageUrlTree.settings.internet)
            ) {
                $("#label_internet").attr("title", wlan_lable_Interntet_wlan);
                $("#label_internet").text(wlan_lable_Interntet_wlan);
                if (
                    checkLeftMenu(g_PageUrlTree.settings.internet.wifinetworks)
                ) {
                    $("#label_wifinetworks").attr(
                        "title",
                        wlan_lable_Interntet_wlan
                    );
                    $("#label_wifinetworks").text(wlan_lable_Interntet_wlan);
                } else {
                    $("#wifinetworks").remove();
                }
                if (
                    checkLeftMenu(g_PageUrlTree.settings.internet.wifipriority)
                ) {
                    $("#label_wifiPriority").attr(
                        "title",
                        IDS_label_text_wifiPriority
                    );
                    $("#label_wifiPriority").text(IDS_label_text_wifiPriority);
                } else {
                    $("#wifipriority").remove();
                }
                if (g_wifi != null) {
                    if (
                        g_wifi.stawpsenabled &&
                        checkLeftMenu(
                            g_PageUrlTree.settings.internet.stationwps
                        )
                    ) {
                        $("#label_stationwps").attr(
                            "title",
                            IDS_system_label_stationwps_defaults
                        );
                        $("#label_stationwps").text(
                            IDS_system_label_stationwps_defaults
                        );
                    } else {
                        $("#stationwps").remove();
                    }
                }
            } else {
                $("#internet").remove();
            }
            if (checkLeftMenu(g_PageUrlTree.settings.dialup)) {
                $("#label_dialup").attr("title", dialup_label_dialup);
                $("#label_dialup").text(dialup_label_dialup);
                if (
                    checkLeftMenu(
                        g_PageUrlTree.settings.dialup.mobileconnection
                    )
                ) {
                    $("#label_mobile_connection").attr(
                        "title",
                        dialup_label_mobile_connection
                    );
                    $("#label_mobile_connection").text(
                        dialup_label_mobile_connection
                    );
                } else {
                    $("#mobileconnection").remove();
                }
                if (
                    checkLeftMenu(
                        g_PageUrlTree.settings.dialup.mobilenetworksettings
                    )
                ) {
                    $("#label_mobile_network_settings").attr(
                        "title",
                        dialup_label_mobile_network_settings
                    );
                    $("#label_mobile_network_settings").text(
                        dialup_label_mobile_network_settings
                    );
                } else {
                    $("#mobilenetworksettings").remove();
                }
                if (checkLeftMenu(g_PageUrlTree.settings.dialup.profilesmgr)) {
                    $("#label_profile_management").attr(
                        "title",
                        dialup_label_profile_management
                    );
                    $("#label_profile_management").text(
                        dialup_label_profile_management
                    );
                } else {
                    $("#profilesmgr").remove();
                }
                if (checkLeftMenu(g_PageUrlTree.settings.dialup.dhcp)) {
                    $("#label_dhcp").attr("title", dhcp_label_dhcp);
                    $("#label_dhcp").text(dhcp_label_dhcp);
                } else {
                    $("#dhcp").remove();
                }
            } else {
                $("#dialup").remove();
            }
            if (checkLeftMenu(g_PageUrlTree.settings.wlan)) {
                $("#label_wlan").text(wlan_label_wlan);
                $("#label_wlan").attr("title", wlan_label_wlan);
                if (
                    checkLeftMenu(g_PageUrlTree.settings.wlan.wlanbasicsettings)
                ) {
                    $("#label_wlan_basic_settings").attr(
                        "title",
                        wlan_label_wlan_basic_settings
                    );
                    $("#label_wlan_basic_settings").text(
                        wlan_label_wlan_basic_settings
                    );
                } else {
                    $("#wlanbasicsettings").remove();
                }
                if (checkLeftMenu(g_PageUrlTree.settings.wlan.wlanadvanced)) {
                    $("#label_wlan_advanced_settings").attr(
                        "title",
                        wlan_label_wlan_advanced_settings
                    );
                    $("#label_wlan_advanced_settings").text(
                        wlan_label_wlan_advanced_settings
                    );
                } else {
                    $("#wlanadvanced").remove();
                }
                if (checkLeftMenu(g_PageUrlTree.settings.wlan.wlanmacfilter)) {
                    $("#label_wlan_mac_filter").attr(
                        "title",
                        wlan_label_wlan_mac_filter
                    );
                    $("#label_wlan_mac_filter").text(
                        wlan_label_wlan_mac_filter
                    );
                } else {
                    $("#wlanmacfilter").remove();
                }
                if (
                    checkLeftMenu(g_PageUrlTree.settings.wlan.wps) &&
                    isneedshowwps()
                ) {
                    $("#wlan_label_wps_settings").attr(
                        "title",
                        wlan_label_wps_settings
                    );
                    $("#wlan_label_wps_settings").text(wlan_label_wps_settings);
                } else {
                    $("#wps").remove();
                }
                if (
                    checkLeftMenu(
                        g_PageUrlTree.settings.security.devicemanagement
                    )
                ) {
                    $("#label_device_management").attr(
                        "title",
                        IDS_security_deviceManagement
                    );
                    $("#label_device_management").text(
                        IDS_security_deviceManagement
                    );
                } else {
                    $("#devicemanagement").remove();
                }
            } else {
                $("#wlan").remove();
            }
            if (checkLeftMenu(g_PageUrlTree.settings.voicebasicsettings)) {
                $("#label_voice_basic_settings").attr(
                    "title",
                    IDS_voice_basic_menu_label
                );
                $("#label_voice_basic_settings").text(
                    IDS_voice_basic_menu_label
                );
            } else {
                $("#voicebasicsettings").remove();
            }
            if (checkLeftMenu(g_PageUrlTree.settings.ethernet)) {
                check_ethernet_display();
            } else {
                $("#ethernet").remove();
            }
            if (g_module.vpn_enabled) {
                if (checkLeftMenu(g_PageUrlTree.settings.vpn)) {
                    $("#label_vpn").attr("title", IDS_vpn);
                    $("#label_vpn").text(IDS_vpn);
                } else {
                    $("#vpn").remove();
                }
            } else {
                $("#vpn").remove();
            }
            if (
                g_module.volte_enabled &&
                checkLeftMenu(g_PageUrlTree.settings.volte)
            ) {
                $("#label_volte").attr("title", IDS_LTE_voice);
                $("#label_volte").text(IDS_LTE_voice);
            } else {
                $("#volte").remove();
            }
            if (
                g_module.voip_enabled &&
                checkLeftMenu(g_PageUrlTree.settings.voip)
            ) {
                $("#label_voip").text(IDS_VOIP_menu_label_voip);
                $("#label_voip").attr("title", IDS_VOIP_menu_label_voip);
                if (
                    g_module.ftpdisplay_enabled &&
                    checkLeftMenu(g_PageUrlTree.settings.voip.ftpserver)
                ) {
                    $("#label_ftp_server").attr("title", IDS_VOIP_FTP_server);
                    $("#label_ftp_server").text(IDS_VOIP_FTP_server);
                } else {
                    $("#ftpserver").remove();
                }
                if (checkLeftMenu(g_PageUrlTree.settings.voip.serverbasic)) {
                    $("#label_server_basic").attr(
                        "title",
                        IDS_VOIP_menu_label_sipserver
                    );
                    $("#label_server_basic").text(
                        IDS_VOIP_menu_label_sipserver
                    );
                } else {
                    $("#serverbasic").remove();
                }
                if (checkLeftMenu(g_PageUrlTree.settings.voip.sipbasic)) {
                    $("#label_sip_basic").attr(
                        "title",
                        IDS_VOIP_menu_label_sipuser
                    );
                    $("#label_sip_basic").text(IDS_VOIP_menu_label_sipuser);
                } else {
                    $("#sipbasic").remove();
                }
                if (checkLeftMenu(g_PageUrlTree.settings.voip.speeddial)) {
                    $("#label_speed_dial").attr(
                        "title",
                        IDS_VOIP_menu_label_speeddial
                    );
                    $("#label_speed_dial").text(IDS_VOIP_menu_label_speeddial);
                } else {
                    $("#speeddial").remove();
                }
                if (
                    g_module.voiceprofile_enabled &&
                    checkLeftMenu(g_PageUrlTree.settings.voip.voiceprofile)
                ) {
                    $("#label_voice_profile").attr(
                        "title",
                        IDS_menu_label_profile
                    );
                    $("#label_voice_profile").text(IDS_menu_label_profile);
                } else {
                    $("#voiceprofile").remove();
                }
                if (checkLeftMenu(g_PageUrlTree.settings.voip.advancecodec)) {
                    $("#label_advance_codec").attr(
                        "title",
                        IDS_VOIP_menu_label_codec
                    );
                    $("#label_advance_codec").text(IDS_VOIP_menu_label_codec);
                } else {
                    $("#advancecodec").remove();
                }
                if (checkLeftMenu(g_PageUrlTree.settings.voip.voiceadvanced)) {
                    $("#label_voice_advanced").attr(
                        "title",
                        IDS_VOIP_menu_label_voice
                    );
                    $("#label_voice_advanced").text(IDS_VOIP_menu_label_voice);
                } else {
                    $("#voiceadvanced").remove();
                }
            } else {
                $("#voip").remove();
            }
            if (checkLeftMenu(g_PageUrlTree.settings.security)) {
                if (
                    checkLeftMenu(
                        g_PageUrlTree.settings.security.pincodeautovalidate
                    )
                ) {
                    $("#label_pin_auto_validation").attr(
                        "title",
                        dialup_label_pin_auto_validation
                    );
                    $("#label_pin_auto_validation").text(
                        dialup_label_pin_auto_validation
                    );
                } else {
                    $("#pincodeautovalidate").remove();
                }
                getGMonitoringStatus();
                if (
                    !g_needPinlock &&
                    checkLeftMenu(
                        g_PageUrlTree.settings.security.pincodemanagement
                    )
                ) {
                    $("#label_pin_code_management").attr(
                        "title",
                        dialup_label_pin_code_management
                    );
                    $("#label_pin_code_management").text(
                        dialup_label_pin_code_management
                    );
                } else {
                    $("#pincodemanagement").remove();
                }
                $("#label_security").text(firewall_label_security);
                $("#label_security").attr("title", firewall_label_security);
                if (
                    checkLeftMenu(
                        g_PageUrlTree.settings.security.firewallswitch
                    )
                ) {
                    $("#label_firewall_switch").attr(
                        "title",
                        firewall_label_firewall_switch
                    );
                    $("#label_firewall_switch").text(
                        firewall_label_firewall_switch
                    );
                } else {
                    $("#firewallswitch").remove();
                }
                if (
                    checkLeftMenu(g_PageUrlTree.settings.security.macfilter) &&
                    g_module.fw_macfilter_enabled
                ) {
                    $("#label_mac_filter").attr(
                        "title",
                        IDS_security_macfilter_label
                    );
                    $("#label_mac_filter").text(IDS_security_macfilter_label);
                } else {
                    $("#macfilter").remove();
                }
                if (
                    checkLeftMenu(g_PageUrlTree.settings.security.lanipfilter)
                ) {
                    $("#label_lan_ip_filter").attr(
                        "title",
                        firewall_label_lan_ip_filter
                    );
                    $("#label_lan_ip_filter").text(
                        firewall_label_lan_ip_filter
                    );
                } else {
                    $("#lanipfilter").remove();
                }
                if (
                    checkLeftMenu(g_PageUrlTree.settings.security.virtualserver)
                ) {
                    $("#label_virtual_server").attr(
                        "title",
                        firewall_label_virtual_server
                    );
                    $("#label_virtual_server").text(
                        firewall_label_virtual_server
                    );
                } else {
                    $("#virtualserver").remove();
                }
                if (
                    checkLeftMenu(
                        g_PageUrlTree.settings.security.specialapplication
                    )
                ) {
                    $("#label_special_application").attr(
                        "title",
                        firewall_label_special_application
                    );
                    $("#label_special_application").text(
                        firewall_label_special_application
                    );
                } else {
                    $("#specialapplication").remove();
                }
                if (checkLeftMenu(g_PageUrlTree.settings.security.acl)) {
                    $("#label_acl").attr("title", firewall_label_acl_settings);
                    $("#label_acl").text(firewall_label_acl_settings);
                } else {
                    $("#acl").remove();
                }
                if (
                    checkLeftMenu(g_PageUrlTree.settings.security.dmzsettings)
                ) {
                    $("#label_dmz_settings").attr(
                        "title",
                        firewall_label_dmz_settings
                    );
                    $("#label_dmz_settings").text(firewall_label_dmz_settings);
                } else {
                    $("#dmzsettings").remove();
                }
                if (
                    checkLeftMenu(
                        g_PageUrlTree.settings.security.sipalgsettings
                    )
                ) {
                    $("#label_sip_alg_settings").attr(
                        "title",
                        firewall_label_sip_alg_settings
                    );
                    $("#label_sip_alg_settings").text(
                        firewall_label_sip_alg_settings
                    );
                } else {
                    $("#sipalgsettings").remove();
                }
                if (checkLeftMenu(g_PageUrlTree.settings.security.upnp)) {
                    $("#label_upnp_setting").attr(
                        "title",
                        firewall_label_upnp_setting
                    );
                    $("#label_upnp_setting").text(firewall_label_upnp_setting);
                } else {
                    $("#upnp").remove();
                }
                if (
                    g_module.pcp_enabled &&
                    checkLeftMenu(g_PageUrlTree.settings.security.pcp)
                ) {
                    $("#label_pcp_setting").attr(
                        "title",
                        IDS_Security_pcp_setting
                    );
                    $("#label_pcp_setting").text(IDS_Security_pcp_setting);
                } else {
                    $("#pcp").remove();
                }
                if (checkLeftMenu(g_PageUrlTree.settings.security.nat)) {
                    $("#label_nat_settings").attr(
                        "title",
                        IDS_wlan_title_nat_settings
                    );
                    $("#label_nat_settings").text(IDS_wlan_title_nat_settings);
                } else {
                    $("#nat").remove();
                }
                if (checkLeftMenu(g_PageUrlTree.settings.security.urlfilter)) {
                    $("#label_urlfilter_settings").attr(
                        "title",
                        IDS_security_urlfilter_domain_name_filter
                    );
                    $("#label_urlfilter_settings").text(
                        IDS_security_urlfilter_domain_name_filter
                    );
                } else {
                    $("#urlfilter").remove();
                }
                if (
                    g_module.ddns_enabled &&
                    checkLeftMenu(g_PageUrlTree.settings.security.ddns)
                ) {
                    if (g_module.ddns_enabled) {
                        $("#label_ddns_settings").attr(
                            "title",
                            IDS_security_ddns
                        );
                        $("#label_ddns_settings").text(IDS_security_ddns);
                    } else {
                        $("#ddns").remove();
                    }
                } else {
                    $("#ddns").remove();
                }
                if (
                    (g_module.static_route_enabled ||
                        g_module.static_route6_enabled) &&
                    checkLeftMenu(g_PageUrlTree.settings.security.staticroute)
                ) {
                    $("#label_staticroute").attr(
                        "title",
                        staticroute_label_staticroute
                    );
                    $("#label_staticroute").text(staticroute_label_staticroute);
                } else {
                    $("#staticroute").remove();
                }
                if (
                    checkLeftMenu(g_PageUrlTree.settings.security.bridgemode) &&
                    g_module.bridge_enabled
                ) {
                    $("#label_bridgemode_settings").attr(
                        "title",
                        IDS_system_bridge_mode
                    );
                    $("#label_bridgemode_settings").text(
                        IDS_system_bridge_mode
                    );
                } else {
                    $("#bridgemode").remove();
                }
                if (
                    checkLeftMenu(
                        g_PageUrlTree.settings.security.parentalcontrol
                    ) &&
                    g_module.parentalcontrol_enabled
                ) {
                    $("#label_parentalcontrol_settings").attr(
                        "title",
                        parentalcontrols_label_title
                    );
                    $("#label_parentalcontrol_settings").text(
                        parentalcontrols_label_title
                    );
                } else {
                    $("#parentalcontrol").remove();
                }
            } else {
                $("#security").remove();
            }
            if (
                g_module.cwmp_enabled &&
                checkLeftMenu(g_PageUrlTree.settings.tr069)
            ) {
                $("#label_tr069").text(IDS_tr069_manage);
                $("#label_tr069").attr("title", IDS_tr069_manage);
                if (checkLeftMenu(g_PageUrlTree.settings.tr069.tr069settings)) {
                    $("#label_tr069settings").attr("title", IDS_tr069_setting);
                    $("#label_tr069settings").text(IDS_tr069_setting);
                } else {
                    $("#tr069settings").remove();
                }
                if (
                    g_module.tr069profile_enabled &&
                    checkLeftMenu(g_PageUrlTree.settings.tr069.tr069profile)
                ) {
                    $("#label_tr069_profile").attr(
                        "title",
                        IDS_menu_label_profile
                    );
                    $("#label_tr069_profile").text(IDS_menu_label_profile);
                } else {
                    $("#tr069profile").remove();
                }
            } else {
                $("#tr069").remove();
            }
            if (checkLeftMenu(g_PageUrlTree.settings.system)) {
                $("#label_system").attr("title", system_label_system);
                $("#label_system").text(system_label_system);
                if (
                    checkLeftMenu(
                        g_PageUrlTree.settings.system.deviceinformation
                    )
                ) {
                    $("#label_device_information").attr(
                        "title",
                        system_label_device_information
                    );
                    $("#label_device_information").text(
                        system_label_device_information
                    );
                } else {
                    $("#deviceinformation").remove();
                }
                if (
                    g_module.diagnosis_enabled &&
                    checkLeftMenu(g_PageUrlTree.settings.system.diagnosis)
                ) {
                    $("#label_diagnosis").attr("title", system_label_diagnosis);
                    $("#label_diagnosis").text(system_label_diagnosis);
                } else {
                    $("#diagnosis").remove();
                }
                if (
                    checkLeftMenu(g_PageUrlTree.settings.system.configuration)
                ) {
                    $("#label_configuration").attr(
                        "title",
                        system_label_backup_restore
                    );
                    $("#label_configuration").text(system_label_backup_restore);
                } else {
                    $("#configuration").remove();
                }
                if (
                    checkLeftMenu(
                        g_PageUrlTree.settings.system.modifypassword
                    ) &&
                    ((g_hilink_login_old_api == 1 && g_nedd_login == 0) ||
                        g_nedd_login == 1)
                ) {
                    $("#label_modify_password").attr(
                        "title",
                        system_label_modify_password
                    );
                    $("#label_modify_password").text(
                        system_label_modify_password
                    );
                } else {
                    $("#modifypassword").remove();
                }
                if (checkLeftMenu(g_PageUrlTree.settings.system.restore)) {
                    $("#label_restore_defaults").attr(
                        "title",
                        system_label_restore_defaults
                    );
                    $("#label_restore_defaults").text(
                        system_label_restore_defaults
                    );
                } else {
                    $("#restore").remove();
                }
                if (checkLeftMenu(g_PageUrlTree.settings.system.reboot)) {
                    $("#label_reboot").attr("title", system_label_reboot);
                    $("#label_reboot").text(system_label_reboot);
                } else {
                    $("#reboot").remove();
                }
                if (
                    checkLeftMenu(g_PageUrlTree.settings.system.systemsettings)
                ) {
                    if (isneedsystemsettings()) {
                        $("#label_systemsettings").attr(
                            "title",
                            IDS_systemsettings_topic
                        );
                        $("#label_systemsettings").text(
                            IDS_systemsettings_topic
                        );
                    } else {
                        $("#systemsettings").remove();
                    }
                } else {
                    $("#systemsettings").remove();
                }
                if (checkLeftMenu(g_PageUrlTree.settings.system.systemlog)) {
                    if (isneedsystemlog()) {
                        $("#label_systemlog").attr(
                            "title",
                            IDS_systemlog_topic
                        );
                        $("#label_systemlog").text(IDS_systemlog_topic);
                    } else {
                        $("#systemlog").remove();
                    }
                } else {
                    $("#systemlog").remove();
                }
                if (
                    g_module.timeserverdisplay_enabled &&
                    checkLeftMenu(g_PageUrlTree.settings.system.timesettings)
                ) {
                    $("#label_timesettings").attr(
                        "title",
                        IDS_timeserver_settings
                    );
                    $("#label_timesettings").text(IDS_timeserver_settings);
                } else {
                    $("#label_timeserversettings").remove();
                }
                if (
                    g_module.antenna_enabled &&
                    checkLeftMenu(g_PageUrlTree.settings.system.antenna)
                ) {
                    $("#label_antenna").attr("title", IDS_antenna_topic);
                    $("#label_antenna").text(IDS_antenna_topic);
                } else {
                    $("#antenna").remove();
                }
                if (
                    g_module.cbs_enabled &&
                    checkLeftMenu(g_PageUrlTree.settings.cbssettings)
                ) {
                    $("#label_cbssettings").attr(
                        "title",
                        IDS_CBS_Settings_setting
                    );
                    $("#label_cbssettings").text(IDS_CBS_Settings_setting);
                } else {
                    $("#cbssettings").remove();
                }
                if (
                    g_module.qos_enabled &&
                    checkLeftMenu(g_PageUrlTree.settings.qossettings)
                ) {
                    $("#label_qossettings").attr("title", IDS_qos_setting);
                    $("#label_qossettings").text(IDS_qos_setting);
                } else {
                    $("#qossettings").remove();
                }
                if (
                    g_module.bluetooth_enabled &&
                    checkLeftMenu(g_PageUrlTree.settings.bluetooth)
                ) {
                    $("#label_bluetooth").text(IDS_bluetooth);
                    $("#label_bluetooth").attr("title", IDS_bluetooth);
                } else {
                    $("#bluetooth").remove();
                }
                if (
                    g_module.bt_enabled &&
                    checkLeftMenu(g_PageUrlTree.settings.bluetoothsetting)
                ) {
                    $("#label_btsettings").text(IDS_bluetooth_setting_title);
                    $("#label_btsettings").attr(
                        "title",
                        IDS_bluetooth_setting_title
                    );
                } else {
                    $("#bluetoothsetting").remove();
                }
                if (
                    g_module.btwakeup_enabled &&
                    checkLeftMenu(g_PageUrlTree.settings.btwakeup)
                ) {
                    $("#label_btwakeup").text(IDS_bt_wakeup_titile);
                    $("#label_btwakeup").attr("title", IDS_bt_wakeup_titile);
                } else {
                    $("#btwakeup").remove();
                }
                if (
                    g_module.vsim_enabled &&
                    checkLeftMenu(g_PageUrlTree.settings.vsim)
                ) {
                    $("#label_vsim").attr("title", IDS_tianjitong_text);
                    $("#label_vsim").text(IDS_tianjitong_text);
                } else {
                    $("#vsim").remove();
                }
                if (
                    g_module.nfc_enable &&
                    checkLeftMenu(g_PageUrlTree.settings.nfc)
                ) {
                    $("#label_nfcsettings").text(IDS_label_nfc);
                    $("#label_nfcsettings").attr("title", IDS_label_nfc);
                } else {
                    $("#nfcsetting").remove();
                }
            } else {
                $("#system").remove();
            }
            showCur(false);
            if (
                g_restore_default_status == "1" &&
                G_SUPER_USERNAME != g_username_default
            ) {
                $("#menu_detail_list").children().not("#quick_setup").hide();
            }
        });
    }
    if ($(".main_left").children().is("#sharingsamba_menu")) {
        $(".main_left").load("leftmenu.html #sharingsamba_menu", function () {
            clickMenu("menu_sharingsamba");
            if (
                checkLeftMenu(g_PageUrlTree.sharing.sdcardsharing) &&
                g_module.sdcard_enabled
            ) {
                $("#label_sdcardsharing").text(sharing_label_sharing);
            } else {
                $("#sdcardsharing").remove();
            }
            if (
                checkLeftMenu(g_PageUrlTree.sharing.sambasettings) &&
                g_module.sambashare_enabled
            ) {
                $("#label_sambasettings").text(IDS_system_samba_title);
            } else {
                $("#sambasettings").remove();
            }
            if (
                checkLeftMenu(g_PageUrlTree.sharing.sambasharinguser) &&
                g_module.sambashare_enabled
            ) {
                $("#label_sambasharinguser").text(
                    IDS_system_samba_user_setting_title
                );
            } else {
                $("#sambasharinguser").remove();
            }
            if (
                g_module.dlna_enabled &&
                checkLeftMenu(g_PageUrlTree.sharing.dlna)
            ) {
                $("#label_dlna").text(common_dlna);
            } else {
                $("#dlna").remove();
            }
            showCur(false);
            if (
                g_restore_default_status == "1" &&
                G_SUPER_USERNAME != g_username_default
            ) {
                $("#menu_detail_list").children().not("#quick_setup").hide();
            }
        });
    }
    if (
        g_module.local_update_enabled &&
        checkLeftMenu(g_PageUrlTree.update.update_local) &&
        (g_restore_default_status != "1" ||
            G_SUPER_USERNAME == g_username_default)
    ) {
        if ($(".main_left").children().is("#update_menu")) {
            $(".main_left").load("leftmenu.html #update_menu", function () {
                clickMenu("menu_update");
                if (checkLeftMenu(g_PageUrlTree.update.update_online)) {
                    $("#label_update_online").text(IDS_update_online_title);
                } else {
                    $("#update_online").remove();
                }
                if (
                    g_module.local_update_enabled &&
                    checkLeftMenu(g_PageUrlTree.update.update_local)
                ) {
                    $("#label_update_local").text(IDS_update_local_title);
                } else {
                    $("#update_local").remove();
                }
                showCur(false);
                if (
                    g_restore_default_status == "1" &&
                    G_SUPER_USERNAME != g_username_default
                ) {
                    $("#menu_detail_list")
                        .children()
                        .not("#quick_setup")
                        .hide();
                }
            });
        }
    } else if ("update" == current_href || "update_local" == current_href) {
        $("#left_menu_div").remove();
        $(".content_right").removeClass("content_right");
        $(".maintitle").removeClass("maintitle").addClass("status_title");
    }
}
function setLangList() {
    if (!jQuery.isArray(LANGUAGE_DATA.supportted_languages)) {
        $("#lang").remove();
        return;
    }
    $("#lang").append(g_langList);
    $("#lang").show();
    $("#lang").change(function () {
        changeLang("lang", $("#lang").val());
    });
}
function showCurrentLanguage() {
    var lang = LANGUAGE_DATA.current_language.replace(/-/, "_");
    $("#lang").val(lang);
}
function showFooter() {
    if (g_needFooter) {
        $("#footer").load("footer.html img, span", function () {
            $("#footer").prepend(
                "<a id='pravacy_policy' class='clr_gray' target='_blank' rel='noopener noreferrer'>" +
                    IDS_label_privacy_statement +
                    "</a>"
            );
            $("#pravacy_policy").attr(
                "href",
                "http://consumer.huawei.com/en/privacy-policy/index.htm"
            );
            setPrivacyPolicyUrl("#pravacy_policy");
            if (g_module.gdpr_enabled) {
                $("#pravacy_policy").after(
                    "<a id='privacy_policy' href='../html/privacynotice.html' class='clr_gray' target='_blank' rel='noopener noreferrer'>" +
                        IDS_common_privacy_policy +
                        "</a>"
                );
            }
            getAjaxData("api/device/device-feature-switch", function ($xml) {
                var ret = xml2object($xml);
                if (ret.type == "response") {
                    g_copyright_enabled = ret.response.copyright_enabled;
                    if (g_copyright_enabled == "1") {
                        $("#footer a:last").after(
                            "<a id='copyright_notice' href='/html/OPEN_SOURCE_SOFTWARE_NOTICE.txt' class='clr_gray' target='_blank' rel='noopener noreferrer'>" +
                                IDS_copyright_notice +
                                "</a><br/>"
                        );
                    }
                }
            });
            var temp = copyrightReplace(common_copyright);
            $("#statement_main").html(
                '<table><tr><td><div class="pull-left giflogofooter"></div></td><td>&nbsp;' +
                    temp +
                    "</td></tr></table>"
            );
            $("#footer").addClass("clr_blue_hover");
        });
    }
}
function setPrivacyPolicyUrl(obj) {
    if (
        typeof LANGUAGE_DATA.privacy_policy_list != "undefined" &&
        checkLeftMenu(
            LANGUAGE_DATA.privacy_policy_list[LANGUAGE_DATA.current_language]
        )
    ) {
        $(obj).attr(
            "href",
            LANGUAGE_DATA.privacy_policy_list[LANGUAGE_DATA.current_language]
        );
    } else if (
        typeof LANGUAGE_DATA.privacy_policy_list != "undefined" &&
        checkLeftMenu(LANGUAGE_DATA.privacy_policy_list.default_url)
    ) {
        $(obj).attr("href", LANGUAGE_DATA.privacy_policy_list.default_url);
    }
}
var g_requestVerificationToken = [];
function getAjaxToken() {
    var meta = $("meta[name=csrf_token]");
    var i = 0;
    if (meta.length > 0) {
        g_requestVerificationToken = [];
        for (i; i < meta.length; i++) {
            g_requestVerificationToken.push(meta[i].content);
        }
    } else {
        refreshToken();
    }
}
function refreshToken() {
    getAjaxData(
        "api/webserver/token",
        function ($xml) {
            var ret = xml2object($xml);
            if ("response" == ret.type) {
                g_requestVerificationToken.length = 0;
                g_requestVerificationToken.push(ret.response.token.substr(32));
            }
        },
        {
            sync: true,
        }
    );
}
getAjaxToken();
main_executeBeforeDocumentReady();
function showConnectInfo() {
    if ($.browser.msie && $.browser.version == "6.0") {
        if (
            "ar_sa" == LANGUAGE_DATA.current_language ||
            "he_il" == LANGUAGE_DATA.current_language ||
            "fa_fa" == LANGUAGE_DATA.current_language
        ) {
            $("#center_box_main").css(
                "marginRight",
                parseInt(g_PositionInfo.offset_ie6, 10) + 140
            );
        } else {
            $("#center_box_main").css(
                "marginLeft",
                parseInt(g_PositionInfo.offset_ie6, 10) + 140
            );
        }
    } else {
        if (
            "ar_sa" == LANGUAGE_DATA.current_language ||
            "he_il" == LANGUAGE_DATA.current_language ||
            "fa_fa" == LANGUAGE_DATA.current_language
        ) {
            $("#center_box_main").css(
                "marginRight",
                parseInt(g_PositionInfo.offset, 10) + 280
            );
        } else {
            $("#center_box_main").css(
                "marginLeft",
                parseInt(g_PositionInfo.offset, 10) + 280
            );
        }
    }
}
function HeartBeatRequest() {
    var heartObj = {
        heartbeat: "60000",
    };
    var res = object2xml("request", heartObj);
    if (g_loginFlag) {
        saveAjaxData("api/user/session", res, function ($xml) {});
    }
}
function checkUpdateNeedLogin() {
    getAjaxData(
        "api/online-update/configuration",
        function ($xml) {
            var ret = xml2object($xml);
            if (ret.type == "response") {
                if (ret.response.not_need_login == "1") {
                    g_not_need_login_update = true;
                } else {
                    g_not_need_login_update = false;
                }
            } else {
                g_not_need_login_update = false;
            }
        },
        {
            errorCB: function () {
                g_not_need_login_update = false;
            },
            sync: true,
        }
    );
}
$(document).ready(function () {
    document.title = g_feature.title;
    document.oncontextmenu = new Function("return false");
    getAjaxData(
        "api/user/state-login",
        function ($xml) {
            var ret = xml2object($xml);
            if (ret.type == "response") {
                g_username_default = ret.response.Username;
                if (
                    typeof ret.response.userlevel != "undefined" &&
                    ret.response.userlevel == "1"
                ) {
                    g_default_password_status = 1;
                    $("#menu_sms").hide();
                    $("#show_psk_password").hide();
                    $("#show_wep_password").hide();
                    $("#showPswForW2,#showPswForText").hide();
                } else {
                    $("#menu_sms").show();
                    $("#show_psk_password").show();
                    $("#show_wep_password").show();
                    $("#showPswForW2,#showPswForText").show();
                    if (g_restore_default_status == "1") {
                        $("#menu_sms").hide();
                    }
                }
            }
        },
        {
            sync: true,
        }
    );
    if (
        g_restore_default_status == "1" &&
        current_href != "home" &&
        current_href != "update" &&
        current_href != "quicksetup" &&
        G_SUPER_USERNAME != g_username_default &&
        current_href != "commend" &&
        current_href != "opennewwindow" &&
        current_href != "privacynotice"
    ) {
        gotoPageWithoutHistory("quicksetup.html");
        return;
    }
    if (g_restore_default_status == "0" && current_href == "quicksetup") {
        gotoPageWithoutHistory("home.html");
        return;
    }
    if (
        g_restore_default_status != "1" &&
        g_default_password_status == 0 &&
        G_CONST_USERNAME == g_username_default &&
        g_login_state == "0" &&
        current_href != "modifypassword" &&
        current_href != "pincoderequired" &&
        current_href != "pukrequired" &&
        current_href != "simlockrequired" &&
        current_href != "nocard" &&
        current_href != "cradleDisconnected" &&
        current_href != "commend" &&
        current_href != "opennewwindow" &&
        current_href != "privacynotice"
    ) {
        gotoPageWithoutHistory("modifypassword.html");
        return;
    }
    if (
        current_href == "pincoderequired" ||
        current_href == "pukrequired" ||
        current_href == "simlockrequired" ||
        current_href == "nocard" ||
        current_href == "cradleDisconnected" ||
        current_href == "update_autorun" ||
        current_href == "voicebusy" ||
        current_href == "opennewwindow" ||
        current_href == "privacynotice"
    ) {
        loadHeaderRedirectPage();
    } else {
        loadHeader();
    }
    showConnectInfo();
    getSimPukTimes();
    if ($(".content").children().first().is(".main_left")) {
        showleftMenu();
    }
    getDeviceStatus();
    showFooter();
    $(
        ".button_wrapper:not(#login_btn,#connect_btn,#disconnect_btn,#cancel_btn,.pop_confirm_cust)"
    ).live("mouseover", function () {
        $(this).addClass("mouse_on");
    });
    $(".button_wrapper").live("mouseout", function () {
        $(this).removeClass("mouse_on");
    });
    $(".button_wrapper:not(#login_btn)").mousedown(function () {
        $(this).addClass("mouse_down");
    });
    $(".button_wrapper").mouseup(function () {
        $(this).removeClass("mouse_down");
    });
    $("#pop_OK").live("click", function () {
        if (
            "pop_OK" ==
            g_main_displayingPromptStack[
                g_main_displayingPromptStack.length - 1
            ]
        ) {
            g_main_displayingPromptStack.pop();
        }
        enableTabKey();
    });
    $(".dialog_close_btn, #pop_Cancel").live("click", function () {
        if (g_nav != null) {
            g_nav.children().first().attr("href", g_destnation);
            g_nav = null;
        }
        if (g_isTrunOffWlanChecked) {
            g_isTrunOffWlanChecked = false;
            $("#trun_off_waln_check").click();
        }
        if (
            g_is_disconnect_clicked ||
            g_is_connect_clicked ||
            g_is_network_connect ||
            g_is_wlan_connect ||
            g_is_power_off ||
            g_isPostAjax
        ) {
            g_is_disconnect_clicked = false;
            g_is_connect_clicked = false;
            g_is_network_connect = false;
            g_is_wlan_connect = false;
            g_is_power_off = false;
            g_isPostAjax = false;
        }
        clearDialog();
        g_main_displayingPromptStack.pop();
        enableTabKey();
    });
    $(document).keydown(onKeyup);
    g_main_displayingPromptStack.length = 0;
    judgeBridgemode();
    g_smallPage = mainIsHandheldBrowser();
    var now = new Date();
    var temp = now.getDate() + now.getSeconds();
    if ("home" != current_href && "update_autorun" != current_href) {
        window.name = SHA256(temp.toString());
    }
    setInterval(function () {
        HeartBeatRequest();
    }, 5000);
});
function getBridgemode() {
    getAjaxData(
        "api/security/bridgemode",
        function ($xml) {
            var ret = xml2object($xml);
            if ("response" == ret.type) {
                g_bridge_modeStatus = ret.response;
            }
        },
        {
            sync: true,
        }
    );
}
function judgeBridgemode() {
    getBridgemode();
    var forbiddenPageOnBridegList = [];
    forbiddenPageOnBridegList = [
        "dhcp",
        "dmzsettings",
        "nat",
        "sipalgsettings",
        "specialapplication",
        "upnp",
        "virtualserver",
        "wifinetworks",
        "wifipriority",
        "home",
        "systemsettings",
        "update",
        "wlanbasicsettings",
        "quicksetup",
        "stationwps",
        "timesettings",
        "mobilenetworksettings",
        "vpnsettings",
        "ddns",
        "diagnosis",
        "ethernetsettings",
        "macclone",
        "lanipfilter",
        "urlfilter",
        "pcp",
    ];
    if (
        typeof g_bridge_modeStatus.cwmpshareinternet != "undefined" &&
        g_bridge_modeStatus.cwmpshareinternet == "1"
    ) {
        forbiddenPageOnBridegList.push("tr069settings", "tr069profile");
    }
    if (
        typeof g_bridge_modeStatus.voiceshareinternet != "undefined" &&
        g_bridge_modeStatus.voiceshareinternet == "1"
    ) {
        forbiddenPageOnBridegList.push(
            "serverbasic",
            "sipbasic",
            "speeddial",
            "voiceprofile",
            "advancecodec",
            "voiceadvanced"
        );
    }
    if (
        $.inArray(current_href, forbiddenPageOnBridegList) > -1 &&
        checkLeftMenu(g_PageUrlTree.settings.security.bridgemode) &&
        g_module.bridge_enabled
    ) {
        g_bridgeModeStatus = false;
        var BridgeModeStatus = parseInt(g_bridge_modeStatus.bridgemode, 10);
        if (BridgeModeStatus == 1) {
            g_bridgeModeStatus = true;
            switch (current_href) {
                case "home":
                    $("#wlan_connect_btn").hide();
                    g_module.wifioffload_enable = false;
                    break;
                case "systemsettings":
                    $(".sntp_operation").hide();
                    g_module.sntp_enabled = false;
                    break;
                case "wlanbasicsettings":
                case "quicksetup":
                    if (
                        typeof g_wifiFeatureSwitch != "undefined" &&
                        g_wifiFeatureSwitch.isdoublechip === "0"
                    ) {
                        g_wifiFeatureSwitch.maxapnum = 1;
                    } else if (
                        typeof g_wifiFeatureSwitch != "undefined" &&
                        g_wifiFeatureSwitch.isdoublechip === "1"
                    ) {
                        g_wifiFeatureSwitch.maxapnum = 2;
                    }
                    g_module.multi_ssid_enabled = false;
                    break;
                case "update":
                    g_isBridgeNotesOpened = true;
                    $(".main_content").html("");
                    $(".main_content").text(IDS_system_bridge_mode_warning);
                    break;
                default:
                    $(".main_content").html("");
                    $(".main_content").text(IDS_system_bridge_mode_warning);
            }
        } else {
            g_bridgeModeStatus = false;
        }
    }
}
function disableEntirePage() {
    $("input:not(#lang)").attr("disabled", true);
    $("select:not(#lang)").attr("disabled", true);
    $(".button_edit_list").die();
    $(".button_edit_list").removeClass("clr_blue").addClass("clr_gray");
    $(".button_delete_list").die();
    $(".button_delete_list").removeClass("clr_blue").addClass("clr_gray");
    $("#query_again").remove();
    $(".wifiup").die();
    $(".wifidown").die();
    $(".wifidelete").die();
    $(".wifiedit").die();
    g_isBridgeNotesOpened = false;
    allButton_enable("0");
}
function setSettingMenu(obj) {
    $.each(obj, function (i, n) {
        if (typeof n == "object" && !g_isReady) {
            setSettingMenu(n);
        } else if (typeof n === "string" && !g_isReady && n != "") {
            $("#settings").attr("href", n + ".html");
            g_isReady = true;
        }
    });
}
function changeItemStatus() {
    var login_status_items = $(".login_info > div:visible");
    if (login_status_items.size() > 2) {
        $.each(login_status_items, function (i) {
            $(this).css({
                width: "33.3%",
            });
        });
    } else if (login_status_items.size() == 2) {
        $.each(login_status_items, function (i) {
            $(this).css({
                width: "50%",
            });
        });
    } else if (
        login_status_items.size() == 1 &&
        g_feature.connection.connectionstatus == 1
    ) {
        $.each(login_status_items, function (i) {
            $(".login_box_info .connection").attr(
                "style",
                "background:none;width:100%;"
            );
            $(".login_box_info h2").attr("style", "width:95%;");
        });
    } else {
        $.each(login_status_items, function (i) {
            $(this).css({
                width: "50%",
            });
        });
    }
}
$(window).load(function () {
    $("#all_content").show();
    changeItemStatus();
    setTimeout(function () {
        reloadLeftMenu();
    }, 1500);
    setTimeout(function () {
        if (
            current_href == "pincoderequired" ||
            current_href == "pukrequired" ||
            current_href == "simlockrequired" ||
            current_href == "nocard" ||
            current_href == "cradleDisconnected" ||
            current_href == "update_autorun" ||
            current_href == "voicebusy" ||
            current_href == "opennewwindow" ||
            current_href == "privacynotice"
        ) {
            loadHeaderRedirectPage();
        } else {
            loadHeader();
        }
    }, 2000);
});
function loadHeaderRedirectPage() {
    if ($.trim($("#header").html()) == "" || $("#header").html() == null) {
        $("#header").load("header.html", function () {
            $(".tools").remove();
            $("#union_main_menu").remove();
            $("#header_turnbg").removeClass("head_div");
            if (
                !(
                    current_href == "cradleDisconnected" ||
                    current_href == "pincoderequired" ||
                    current_href == "pukrequired" ||
                    current_href == "simlockrequired" ||
                    current_href == "nocard"
                )
            ) {
                $(".help").remove();
            }
            if (g_needHelp) {
                $("#help_span").text(common_help);
            } else {
                $("#help_span").remove();
                $("#help_url").remove();
            }
            getUserManualUrl();
            setLangList();
            showCurrentLanguage();
            if (g_needToLogin) {
                $("#logout_span").show();
                getAjaxData(
                    "api/user/state-login",
                    function ($xml) {
                        var ret = xml2object($xml);
                        if (ret.type == "response") {
                            g_password_type = ret.response.password_type;
                            g_username_default = ret.response.Username;
                            if (ret.response.State != 0) {
                                $("#username_span").hide();
                                $("#logout_span").text(common_login);
                                cancelLogoutTimer();
                            } else {
                                $("#username_span").text(ret.response.Username);
                                $("#username_span").show();
                                $("#logout_span").text(common_logout);
                                startLogoutTimer();
                            }
                        }
                    },
                    {
                        sync: true,
                    }
                );
            } else {
                $(".logout").hide();
                $("#logout_span").hide();
            }
            if (
                g_restore_default_status == "1" &&
                G_SUPER_USERNAME != g_username_default
            ) {
                $(".clr_white_header_hover")
                    .children()
                    .not("#menu_settings")
                    .hide();
            }
        });
    }
}
function loadHeader() {
    if ($.trim($("#header").html()) == "" || $("#header").html() == null) {
        $("#header").load("header.html", function () {
            if ($.browser.msie) {
                $(".help div").remove();
                $(".help").append(
                    " <span><select id='lang' style='display:none'></select></span><span class = 'clr_bold_a'><a id=help_url href='#' target='_blank' rel = 'noopener noreferrer'><span id='help_span'></span></a></span>" +
                        "<span><span class='username'  id='username_span' style='display:none'></span></span><span>&nbsp;</span>" +
                        "<span><span class='logout'><span id='logout_span'></span></span></span>"
                );
            }
            if (g_sms_mode == 1) {
                $("#sms").attr("href", "smsandroid.html");
                $("#tooltip_sms_full").attr("href", "smsandroid.html");
                $("#tooltip_sms").attr("href", "smsandroid.html");
            }
            getUserManualUrl();
            showCur(true);
            setMainMenu();
            if (g_needHelp) {
                $("#help_span").text(common_help);
            } else {
                $("#help_span").remove();
                $("#help_url").remove();
            }
            if (g_needToLogin) {
                $("#logout_span").show();
                getAjaxData(
                    "api/user/state-login",
                    function ($xml) {
                        var ret = xml2object($xml);
                        if (ret.type == "response") {
                            g_password_type = ret.response.password_type;
                            g_username_default = ret.response.Username;
                            if (ret.response.State != 0) {
                                $("#username_span").hide();
                                $("#logout_span").text(common_login);
                                cancelLogoutTimer();
                            } else {
                                $("#username_span").text(ret.response.Username);
                                $("#username_span").show();
                                $("#logout_span").text(common_logout);
                                if ("home" == current_href) {
                                    startLogoutTimer();
                                }
                            }
                        }
                    },
                    {
                        sync: true,
                    }
                );
            } else {
                $(".logout").hide();
                $("#logout_span").hide();
            }
            if (!g_module.wifi_enabled) {
                $("#wifi_gif").remove();
                $("#indoor_gif").remove();
            }
            if (!g_module.sms_enabled) {
                $("#sms_gif").remove();
            }
            if (!g_module.online_update_enabled) {
                $("#update_gif").remove();
            }
            if (!g_feature.battery_enabled) {
                $("#battery_gif").remove();
            }
            if (
                "undefined" != typeof g_wifiFeatureSwitch &&
                WIFI5G_ON != g_wifiFeatureSwitch.wifi5g_enabled
            ) {
                $("#indoor_gif").remove();
            }
            setTimeout(initialStatusIcon, 100);
            setLangList();
            showCurrentLanguage();
            $("#logout_span").live("click", function () {
                g_destnation = null;
                loginout();
            });
            $("#pop_login").die();
            $("#pop_login").live("click", function () {
                if (null == g_destnation && "sdcardsharing" == current_href) {
                    login(current_href + ".html");
                } else {
                    login(g_destnation);
                }
            });
            var menu_id =
                "#menu_statistic,#menu_sms,#menu_connection_settings a,#menu_ussd,#menu_settings,.nav02,#profile_settings a,#menu_pb,#menu_stk, #wifi_turnOff_button,#sambasettings,#sambasharinguser,#dlna,#menu_appmanagement,#update_local";
            if (!g_module.sdcard_enabled) {
                menu_id += ",#menu_sharing";
            }
            if (!g_not_need_login_update) {
                menu_id += ",#menu_update,.nav01";
            }
            $(menu_id).live("click", function () {
                if (!g_needToLogin) {
                    return;
                }
                g_nav = $(this);
                if (
                    g_nav.parent().attr("id") == "menu_connection_settings" ||
                    g_nav.parent().attr("id") == "profile_settings"
                ) {
                    g_nav = g_nav.parent();
                }
                getAjaxData(
                    "api/user/state-login",
                    function ($xml) {
                        var ret = xml2object($xml);
                        if (ret.type == "response") {
                            if (ret.response.State != "0") {
                                if (G_SUPER_USERNAME == ret.response.Username) {
                                    g_default_password_status = 1;
                                } else {
                                    g_default_password_status = parseInt(
                                        ret.response.firstlogin,
                                        10
                                    );
                                }
                                if (g_default_password_status == 0) {
                                    g_destnation = null;
                                } else {
                                    g_destnation = g_nav
                                        .children()
                                        .first()
                                        .attr("href");
                                }
                                g_nav
                                    .children()
                                    .first()
                                    .attr("href", "javascript:void(0);");
                                showloginDialog();
                            }
                        }
                    },
                    {
                        sync: true,
                    }
                );
            });
            setSettingMenu(g_PageUrlTree.settings);
            if (
                g_restore_default_status == "1" &&
                G_SUPER_USERNAME != g_username_default
            ) {
                $(".clr_white_header_hover")
                    .children()
                    .not("#menu_settings")
                    .hide();
            }
        });
    }
}
function setLoginStatus(redirectDes, callbackFunc) {
    if (g_needToLogin) {
        $("#logout_span").show();
        getAjaxData(
            "api/user/state-login",
            function ($xml) {
                var ret = xml2object($xml);
                if (ret.type == "response") {
                    if (ret.response.State != 0) {
                        $("#username_span").hide();
                        $("#logout_span").text(common_login);
                        cancelLogoutTimer();
                    } else {
                        $("#username_span").text(ret.response.Username);
                        $("#username_span").show();
                        $("#logout_span").text(common_logout);
                        if ("home" == current_href) {
                            startLogoutTimer(redirectDes);
                        }
                    }
                }
            },
            {
                sync: true,
            }
        );
    } else {
        $(".logout").hide();
        $("#logout_span").hide();
    }
    $("#logout_span").die();
    $("#logout_span").live("click", function () {
        g_destnation = null;
        loginout();
    });
    $("#pop_login").die();
    $("#pop_login").live("click", function () {
        login(g_destnation, callbackFunc, redirectDes);
    });
}
function getLoginStatus(callback, redirectDes) {
    var flag = true;
    if (g_needToLogin) {
        getAjaxData(
            "api/user/state-login",
            function ($xml) {
                var ret = xml2object($xml);
                if (ret.type == "response") {
                    if (ret.response.State != 0) {
                        $("#pop_login").die();
                        $("#pop_login").live("click", function () {
                            login(g_destnation, callback, redirectDes);
                        });
                        flag = false;
                        showloginDialog();
                    }
                }
            },
            {
                sync: true,
            }
        );
    }
    return flag;
}
function checkInputValue(str) {
    var flag = false;
    if (null != str && "undefind" != typeof str && "" != str) {
        flag = true;
    }
    return flag;
}
function create_button(content, button_id, buttonClassName) {
    if (
        buttonClassName != "" &&
        buttonClassName != " " &&
        buttonClassName != null
    ) {
        var disButtonClassName = "disable_btn clr_gray_disable_btn_center";
        if (buttonClassName == disButtonClassName) {
            button =
                "<span class='button_wrapper ' id='span_" + button_id + "'>";
            button +=
                "<input id='" +
                button_id +
                "' class='" +
                buttonClassName +
                "' type='button' value='" +
                content +
                "'/></span>";
        } else {
            button =
                "<span class='button_wrapper ' id='span_" + button_id + "'>";
            button +=
                "<input id='" +
                button_id +
                "' class='button_dialog " +
                buttonClassName +
                "' type='button' value='" +
                content +
                "'/></span>";
        }
    } else {
        button = "<span class='button_wrapper' id='span_" + button_id + "'>";
        button +=
            "<input id='" +
            button_id +
            "' class='button_dialog ' type='button' value='" +
            content +
            "'/></span>";
    }
    document.write(button);
    ieRadiusBorder();
}
function ieRadiusBorder() {
    if ($.browser.msie) {
        $("input[type=button]").css("outline", "none");
        $(".button_wrapper").css("border-radius", "3px");
        if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
            $(".button_wrapper").css("background", "#75ACD6");
            $(".button_wrapper").corner("3px");
            $(".button_wrapper input").css("padding-top", "1px");
            if ($.browser.msie && parseInt($.browser.version, 10) < 8) {
                $("input[type=button]").css("padding", "0 8px");
            }
        }
    }
}
function create_button_html(content, button_id, buttonClassName) {
    if (
        buttonClassName != "" &&
        buttonClassName != " " &&
        buttonClassName != null
    ) {
        var disButtonClassName = "disable_btn clr_gray_disable_btn_center";
        if (buttonClassName == disButtonClassName) {
            button = "<span class='button_wrapper '>";
            button +=
                "<input id='" +
                button_id +
                "' class='" +
                buttonClassName +
                "' type='button' value='" +
                content +
                "'/></span>";
        } else {
            button = "<span class='button_wrapper '>";
            button +=
                "<input id='" +
                button_id +
                "' class='button_dialog " +
                buttonClassName +
                "' type='button' value='" +
                content +
                "'/></span>";
        }
    } else {
        button = "<span class='button_wrapper'>";
        button +=
            "<input id='" +
            button_id +
            "' class='button_dialog ' type='button' value='" +
            content +
            "'/></span>";
    }
    return button;
}
function isButtonEnable(button_id) {
    var disable = true;
    var $button = $("#" + button_id);
    if ($button) {
        disable = $button.hasClass("disable_btn");
    }
    return !disable;
}
function call_dialog(
    dialogTitle,
    content,
    button1_text,
    button1_id,
    button2_text,
    button2_id
) {
    content = display_SIMtoUIM(content);
    $("#div_wrapper").remove();
    $(".dialog").remove();
    var dialogHtml = "";
    if ($("#div_wrapper").size() < 1) {
        dialogHtml +=
            "<div id='div_wrapper'><iframe   id='ifream_dialog'  src= '' frameborder= '0' style= 'background:#bcbcbc; width:100%; height:100%; display: block;'> </iframe></div>";
    }
    dialogHtml += "<div class='dialog' id='sms_dialog'>";
    dialogHtml += "    <div class='sms_dialog_content'>";
    dialogHtml += "        <div class='sms_dialog_header'>";
    dialogHtml +=
        "            <span class='dialog_header_left clr_white'>" +
        dialogTitle +
        "</span>";
    dialogHtml +=
        "            <span class='dialog_header_right'><a href='javascript:void(0);' title='close' class='dialog_close_btn clr_gray'><canvas id='callCanvas' width='25px' height='25px'></canvas></a></span>";
    dialogHtml += "        </div>";
    dialogHtml += "        <div class='sms_dialog_table'>" + content + "</div>";
    dialogHtml += "        <div class='sms_dialog_table_bottom'>";
    dialogHtml += "            <div class='dialog_table_r'>";
    dialogHtml +=
        "              <span class='button_wrapper " + button1_id + "'>";
    dialogHtml +=
        "                  <input id='" +
        button1_id +
        "' class='button_dialog' type='button' value='" +
        button1_text +
        "'/></span>";
    if (button2_text != "" && button2_text != " " && button2_text != null) {
        dialogHtml +=
            "&nbsp;&nbsp;&nbsp;&nbsp;<span class='button_wrapper " +
            button2_id +
            "'>";
        dialogHtml +=
            "                  <input id='" +
            button2_id +
            "' class='button_dialog' type='button' value='" +
            button2_text +
            "'/></span>";
    }
    dialogHtml += "            </div>";
    dialogHtml += "        </div>";
    dialogHtml += "    </div>";
    dialogHtml += "</div>";
    $(".body_bg").before(dialogHtml);
    if ($.browser.msie && parseInt($.browser.version, 10) == 9) {
        $(".button_wrapper").css("border-radius", "3px");
        var canvas = document.getElementById("callCanvas");
        draw(canvas);
    } else if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
        $(".dialog_header_left").css("margin-top", "5");
        $(".dialog_close_btn").css("top", "7");
        $(".sms_dialog_header").css({
            width: "609px",
            height: "29px",
        });
        $(".sms_dialog_header").corner("top 5px");
        $(".button_wrapper").css("background", "#75ACD6");
        $(".button_wrapper").corner("3px");
        $(".button_wrapper input").css("padding-top", "2px");
        $(".sms_dialog_table_bottom").corner("keep 3px cc:6a6a6a");
        var ahtml = "<img src='../res/dialog_close_btn.png' title='' alt='' />";
        $(".sms_dialog_header a").append(ahtml);
    } else {
        var canvas = document.getElementById("callCanvas");
        draw(canvas);
    }
    reputPosition($(".dialog"), $("#div_wrapper"));
    g_main_displayingPromptStack.push(button1_id);
    $("a").attr("tabindex", "-1");
    $("select").attr("tabindex", "-1");
}
function showloginDialog() {
    $("#div_wrapper").remove();
    $(".login_dialog").remove();
    var dialogHtml = "";
    if ($("#div_wrapper").size() < 1) {
        dialogHtml +=
            "<div id='div_wrapper'><iframe   id='ifream_dialog'  src= '' frameborder= '0' style= 'background:#bcbcbc; position:absolute; width:100%; height:100%; z-index:-1; display: block;'> </iframe></div>";
    }
    dialogHtml += "<div class='login_dialog' id='dialog'>";
    dialogHtml += "    <div class='login_dialog_content'>";
    dialogHtml += "        <div class='login_dialog_header'>";
    dialogHtml +=
        "            <span class='dialog_header_left clr_white'>" +
        common_login +
        "</span>";
    dialogHtml +=
        "            <span class='dialog_header_right'><a class='dialog_close_btn clr_gray' title='' href='javascript:void(0);'><canvas id='canvas' width='25px' height='25px'></canvas></a></span>";
    dialogHtml += "        </div>";
    dialogHtml += "        <div class='login_dialog_table'>";
    dialogHtml += "               <div class='login'>";
    dialogHtml +=
        "               <div id='initial_configuration_wrapper' style='display:none;'>";
    dialogHtml +=
        "                   <p id='initial_configuration_tips'>" +
        IDS_initial_configuration_tips +
        "</p>";
    dialogHtml += "               </div>";
    dialogHtml += "               <div id='username_wrapper'>";
    dialogHtml +=
        "                   <p>" +
        dialup_label_user_name +
        common_colon +
        "</p>";
    dialogHtml +=
        "                   <span><input type='text' class='input' id='username' maxlength='15' /></span>";
    dialogHtml += "               </div>";
    dialogHtml += "               <div id='login_password_wrapper'>";
    dialogHtml +=
        "               <p>" + common_password + common_colon + "</p>";
    dialogHtml +=
        "                   <span><input  type='password'  autocomplete='off' class='input' id='password' maxlength='32'/>&nbsp;&nbsp;</span><span id='forget_password_tab'>" +
        IDS_forget_password_tab +
        "</span>";
    dialogHtml +=
        "                   <div id='pwd_message' class='pwd_message'><label>" +
        IDS_common_same_with_wifi_password_prompt +
        "</label></div>";
    dialogHtml += "               </div>";
    dialogHtml += "               <div id='forget_password_wrapper'>";
    dialogHtml +=
        "                   <br><p id='forget_password_tips' style='display:none;'>" +
        IDS_forget_password_tips +
        "</p>";
    dialogHtml += "               </div>";
    dialogHtml += "               </div>";
    dialogHtml += "        </div>";
    dialogHtml += "        <div class='login_dialog_table_bottom'>";
    dialogHtml += "              <span class='button_wrapper pop_login'>";
    dialogHtml +=
        "                  <input id='pop_login' class='button_dialog' type='button' value='" +
        common_login +
        "'/></span>";
    dialogHtml +=
        "&nbsp;&nbsp;&nbsp;&nbsp;<span class='button_wrapper pop_Cancel'>";
    dialogHtml +=
        "                  <input id='pop_Cancel' class='button_dialog' type='button' value='" +
        common_cancel +
        "'/></span>";
    dialogHtml += "       </div>";
    dialogHtml += "    </div>";
    dialogHtml += "</div>";
    $(".body_bg").before(dialogHtml);
    if ($.browser.msie && parseInt($.browser.version, 10) == 9) {
        $(".button_wrapper").css("border-radius", "3px");
        var canvas = document.getElementById("canvas");
        draw(canvas);
    } else if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
        $(".dialog_header_left").css("margin-top", "5");
        $(".login_dialog_header").css({
            width: "420px",
            height: "29px",
        });
        $(".login_dialog_header").corner("top 5px");
        $(".button_wrapper").css("background", "#75ACD6");
        $(".button_wrapper").corner("3px");
        $(".button_wrapper input").css("padding-top", "2px");
        $(".login_dialog_table_bottom").corner("keep 3px cc:6a6a6a");
        var ahtml = "<img src='../res/dialog_close_btn.png' title='' alt='' />";
        $(".login_dialog_header a").append(ahtml);
        $(".dialog_close_btn").css("top", "7px");
    } else {
        var canvas = document.getElementById("canvas");
        draw(canvas);
    }
    reputPosition($("#dialog"), $("#div_wrapper"));
    g_main_displayingPromptStack.push("pop_login");
    $("#username").focus();
    g_is_login_opened = true;
    disableTabKey();
    $("#forget_password_tab").click(function () {
        var tipVal = $("#forget_password_tips");
        if (tipVal.attr("style")) {
            tipVal.removeAttr("style");
        } else {
            tipVal.attr("style", "display:none;");
        }
    });
    if (g_restore_default_status == "1") {
        $("#initial_configuration_wrapper").show();
    }
    if (g_supportPwdSame && g_wifiSameWithWeb) {
        setErrorMessageColor("pwd_message");
        $("#pwd_message").show();
    } else {
        $("#pwd_message").hide();
    }
    $("#pop_Cancel,.dialog_close_btn").click(function () {
        if (g_restore_default_status == "1" && current_href == "quicksetup") {
            if (g_privacypolicy_update == "1") {
                button_enable("step1_finish_new", "0");
            } else {
                button_enable("step1_next", "0");
            }
        } else {
            gotoPageWithoutHistory(HOME_PAGE_URL);
        }
    });
}
function draw(canvas) {
    var paint = canvas.getContext("2d");
    paint.beginPath();
    paint.clearRect(0, 0, 24, 24);
    paint.fillStyle = "#595959";
    paint.strokeStyle = "#595959";
    paint.beginPath();
    paint.arc(12, 12, 11, 0, Math.PI * 2, true);
    paint.closePath();
    paint.lineWidth = 2;
    paint.fill();
    paint.stroke();
    var x = 12;
    y = 12;
    paint.strokeStyle = "red";
    paint.beginPath();
    paint.moveTo(6.4, 6.4);
    paint.lineTo(17.6, 17.6);
    paint.stroke();
    paint.closePath();
    paint.strokeStyle = "red";
    paint.beginPath();
    paint.moveTo(6.4, 17.6);
    paint.lineTo(17.6, 6.4);
    paint.stroke();
    paint.closePath();
}
function showConfirmAutoUdateDialog(content, okFunc, cancelFunc, removeable) {
    content = display_SIMtoUIM(content);
    if (DIALOG_UNREMOVE != removeable) {
        $("#div_wrapper").remove();
        $(".dialog").remove();
    }
    var dialogHtml = "";
    if ($("#div_wrapper").size() < 1) {
        dialogHtml +=
            "<div id='div_wrapper'><iframe   id='ifream_dialog'  src= '' frameborder= '0' style= 'background:#bcbcbc; position:absolute; width:100%; height:100%; z-index:-1; display: block;'> </iframe></div>";
    }
    if (content == common_warning_logout) {
        dialogHtml += "<div class='dialog' id='dialog'>";
    } else {
        dialogHtml += "<div class='dialog'>";
    }
    dialogHtml += "    <div class='dialog_content'>";
    dialogHtml += "        <div class='dialog_header'>";
    dialogHtml +=
        "            <span class='dialog_header_left clr_white'>" +
        IDS_common_close_autoupdate_promp_title +
        "</span>";
    dialogHtml += "        </div>";
    dialogHtml += "        <div class='dialog_table'>" + content + "</div>";
    dialogHtml += "        <div class='dialog_table_bottom'>";
    dialogHtml += "            <div class='dialog_table_r'>";
    dialogHtml += "              <span class='button_wrapper pop_confirm'>";
    dialogHtml +=
        "                  <input id='pop_confirm' class='button_dialog' type='button' value='" +
        common_ok_update +
        "'/></span>";
    if (cancelFunc != "" && cancelFunc != " " && cancelFunc != null) {
        dialogHtml +=
            "&nbsp;&nbsp;&nbsp;&nbsp;<span class='button_wrapper pop_Cancel'>";
        dialogHtml +=
            "                  <input id='pop_Cancel' class='button_dialog' type='button' value='" +
            common_cancel_update +
            "'/></span>";
    }
    dialogHtml += "            </div>";
    dialogHtml += "        </div>";
    dialogHtml += "    </div>";
    dialogHtml += "</div>";
    $("#pop_confirm").live("click", function () {
        clearDialog();
        if (typeof okFunc == "function") {
            okFunc();
        }
        okFunc = null;
        cancelFunc = null;
        g_main_displayingPromptStack.pop();
        hiddenSelect(false);
        if (location.href.indexOf("reboot") > -1) {
            sessionStorage.clear();
        }
        return false;
    });
    $("#pop_Cancel").live("click", function () {
        if (typeof cancelFunc == "function") {
            cancelFunc();
        }
        okFunc = null;
        cancelFunc = null;
        g_main_displayingPromptStack.pop();
        hiddenSelect(false);
        return false;
    });
    $(".body_bg").before(dialogHtml);
    if ($.browser.msie && parseInt($.browser.version, 10) == 9) {
        $(".button_wrapper").css("border-radius", "3px");
    } else if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
        $(".dialog_header_left").css("margin-top", "5");
        $(".dialog_header").css({
            width: "500px",
            height: "29px",
        });
        $(".dialog_header").corner("top 5px");
        $(".button_wrapper").css("background", "#75ACD6");
        $(".button_wrapper").corner("3px");
        $(".button_wrapper input").css("padding-top", "2px");
        $(".button_wrapper input").css("padding-top", "2px");
    }
    hiddenSelect(true);
    reputPosition($(".dialog"), $("#div_wrapper"));
    g_main_displayingPromptStack.push("pop_confirm");
    disableTabKey();
}
function showConfirmDialog(
    content,
    okFunc,
    cancelFunc,
    removeable,
    removeFunc
) {
    content = display_SIMtoUIM(content);
    if (DIALOG_UNREMOVE != removeable) {
        $("#div_wrapper").remove();
        $(".dialog").remove();
    }
    var dialogHtml = "";
    if ($("#div_wrapper").size() < 1) {
        dialogHtml +=
            "<div id='div_wrapper'><iframe   id='ifream_dialog'  src= '' frameborder= '0' style= 'background:#bcbcbc; position:absolute; width:100%; height:100%; z-index:-1; display: block;'> </iframe></div>";
    }
    if (content == common_warning_logout) {
        dialogHtml += "<div class='dialog' id='dialog'>";
    } else {
        dialogHtml += "<div class='dialog'>";
    }
    dialogHtml += "    <div class='dialog_content'>";
    dialogHtml += "        <div class='dialog_header'>";
    dialogHtml +=
        "            <span class='dialog_header_left clr_white'>" +
        common_confirm +
        "</span>";
    dialogHtml +=
        "            <span class='dialog_header_right'><a href='javascript:void(0);' title='' class='dialog_close_btn clr_gray'><canvas id='confirmCanvas' width='25px' height='25px'></canvas></a></span>";
    dialogHtml += "        </div>";
    dialogHtml += "        <div class='dialog_table'>" + content + "</div>";
    dialogHtml += "        <div class='dialog_table_bottom'>";
    dialogHtml += "            <div class='dialog_table_r'>";
    dialogHtml += "              <span class='button_wrapper pop_confirm'>";
    dialogHtml +=
        "                  <input id='pop_confirm' class='button_dialog' type='button' value='" +
        common_ok +
        "'/></span>";
    if (cancelFunc != "" && cancelFunc != " " && cancelFunc != null) {
        dialogHtml +=
            "&nbsp;&nbsp;&nbsp;&nbsp;<span class='button_wrapper pop_Cancel'>";
        dialogHtml +=
            "                  <input id='pop_Cancel' class='button_dialog' type='button' value='" +
            common_cancel +
            "'/></span>";
    }
    dialogHtml += "            </div>";
    dialogHtml += "        </div>";
    dialogHtml += "    </div>";
    dialogHtml += "</div>";
    $("#pop_confirm").live("click", function () {
        clearDialog();
        if (typeof okFunc == "function") {
            okFunc();
        }
        okFunc = null;
        cancelFunc = null;
        removeFunc = null;
        g_main_displayingPromptStack.pop();
        hiddenSelect(false);
        if (location.href.indexOf("reboot") > -1) {
            sessionStorage.clear();
        }
        return false;
    });
    $("#pop_Cancel").live("click", function () {
        if (typeof cancelFunc == "function") {
            cancelFunc();
        }
        okFunc = null;
        cancelFunc = null;
        removeFunc = null;
        g_main_displayingPromptStack.pop();
        hiddenSelect(false);
        return false;
    });
    $(".dialog_close_btn").live("click", function () {
        if (typeof removeFunc == "function") {
            removeFunc();
        }
        okFunc = null;
        cancelFunc = null;
        removeFunc = null;
        g_main_displayingPromptStack.pop();
    });
    $(".body_bg").before(dialogHtml);
    if ($.browser.msie && parseInt($.browser.version, 10) == 9) {
        $(".button_wrapper").css("border-radius", "3px");
        var canvas = document.getElementById("confirmCanvas");
        draw(canvas);
    } else if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
        $(".dialog_header_left").css("margin-top", "5");
        $(".dialog_header").css({
            width: "500px",
            height: "29px",
        });
        $(".dialog_header").corner("top 5px");
        $(".button_wrapper").css("background", "#75ACD6");
        $(".button_wrapper").corner("3px");
        $(".button_wrapper input").css("padding-top", "2px");
        $(".dialog_header a").css("top", "7px");
        $(".button_wrapper input").css("padding-top", "2px");
        var ahtml = "<img src='../res/dialog_close_btn.png' title='' alt='' />";
        $(".dialog_header a").append(ahtml);
    } else {
        var canvas = document.getElementById("confirmCanvas");
        draw(canvas);
    }
    hiddenSelect(true);
    reputPosition($(".dialog"), $("#div_wrapper"));
    g_main_displayingPromptStack.push("pop_confirm");
    disableTabKey();
}
function showInfoDialog(tipsContent, isWiFi, closeFunc) {
    tipsContent = display_SIMtoUIM(tipsContent);
    if ($(".info_dialog").size() == 0) {
        var hideInfo;
        clearTimeout(hideInfo);
        var dialogHtml = "";
        if ($("#div_wrapper").size() < 1) {
            dialogHtml +=
                "<div id='div_wrapper'><iframe   id='ifream_dialog'  src= '' frameborder= '0' style= 'background:#bcbcbc; position:absolute; width:100%; height:100%; z-index:-1; display: block;'> </iframe></div>";
        }
        dialogHtml += "<div class='info_dialog'>";
        dialogHtml += "    <div class='info_dialog_content'>";
        dialogHtml += "        <div class='info_dialog_header'>";
        dialogHtml +=
            "            <span class='dialog_header_left clr_white'>" +
            common_note +
            "</span>";
        dialogHtml +=
            "            <span class='dialog_header_right'><a href='javascript:void(0);' title='' class='info_dialog_close_btn clr_gray'><canvas id='showInfoCanvas' width='25px' height='25px'></canvas></a></span>";
        dialogHtml += "        </div>";
        dialogHtml +=
            "        <div class='info_dialog_table'><div class='info_content'>" +
            tipsContent +
            "</div></div>";
        dialogHtml += "    </div>";
        dialogHtml += "</div>";
        $(".body_bg").before(dialogHtml);
        if ($.browser.msie && parseInt($.browser.version, 10) == 9) {
            $(".button_wrapper").css("border-radius", "3px");
            var canvas = document.getElementById("showInfoCanvas");
            draw(canvas);
        } else if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
            $(".dialog_header_left").css("margin-top", "5");
            $(".info_dialog_header").css({
                width: "380px",
                height: "29px",
            });
            $(".info_dialog_header").corner("top 5px");
            $(".info_dialog_close_btn").css("top", "7");
            var ahtml =
                "<img src='../res/dialog_close_btn.png' title='' alt='' />";
            $(".info_dialog_header a").append(ahtml);
        } else {
            var canvas = document.getElementById("showInfoCanvas");
            draw(canvas);
        }
        hiddenSelect(true);
        $(".info_dialog_close_btn").bind("click", function () {
            if (typeof closeFunc == "function") {
                closeFunc();
            }
            closeFunc = null;
            clearTimeout(hideInfo);
            clearDialog();
            if (current_href == "modifypassword") {
                $("#current_password").focus();
            }
        });
        reputPosition($(".info_dialog"), $("#div_wrapper"));
        disableTabKey();
        if (isWiFi) {
            if (isWiFi == 20000) {
                hideInfo = setTimeout(function () {
                    clearDialog();
                }, 20000);
            } else {
                $(".info_dialog_close_btn").remove();
                hideInfo = setTimeout(function () {
                    clearDialog();
                }, 6000);
            }
        } else {
            hideInfo = setTimeout(function () {
                if (typeof closeFunc == "function") {
                    closeFunc();
                }
                closeFunc = null;
                clearDialog();
                if (current_href == "modifypassword") {
                    $("#current_password").focus();
                }
            }, g_feature.dialogdisapear);
        }
    }
}
function showQtip(showTarget, content, delay) {
    content = display_SIMtoUIM(content);
    var $showTarget = $("#" + showTarget);
    $showTarget.qtip("destroy");
    if ($showTarget) {
        $showTarget.qtip({
            content: content,
            position: {
                corner: {
                    my: "topMiddle",
                    at: "bottomMiddle",
                },
            },
            show: {
                when: false,
                ready: true,
            },
        });
        if (delay) {
            if (clearshow != null) {
                clearTimeout(clearshow);
            }
            clearshow = setTimeout(function () {
                $showTarget.qtip("destroy");
            }, delay);
        } else {
            if (clearshow != null) {
                clearTimeout(clearshow);
            }
            clearshow = setTimeout(function () {
                $showTarget.qtip("destroy");
            }, g_feature.tip_disapear);
        }
    }
    $showTarget.focus();
}
function clearDialog() {
    $(
        ".dialog:not(#upload_dialog,.not_remove), .info_dialog, .login_dialog, #div_wrapper:not(.not_remove)"
    ).remove();
    hiddenSelect(false);
    enableTabKey();
    if (g_is_login_opened) {
        g_is_login_opened = false;
        getDeviceStatus();
    }
}
function clearDialog_table() {
    $(
        ".dialog:not(#upload_dialog), .info_dialog, .login_dialog, #div_wrapper"
    ).hide();
    hiddenSelect(false);
    enableTabKey();
    if (g_is_login_opened) {
        g_is_login_opened = false;
        getDeviceStatus();
    }
}
function correctPNG() {
    var i = 0;
    for (i = 0; i < document.images.length; i++) {
        var img = document.images[i];
        var imgName = img.src.toUpperCase();
        if (imgName.substring(imgName.length - 3, imgName.length) == "PNG") {
            var imgID = img.id ? "id='" + img.id + "' " : "";
            var imgClass = img.className
                ? "class='" + img.className + "' "
                : "";
            var imgTitle = img.title
                ? "title='" + img.title + "' "
                : "title='" + img.alt + "' ";
            var imgStyle = "display:inline-block;" + img.style.cssText;
            if (img.align == "left") {
                imgStyle = "float:left;" + imgStyle;
            }
            if (img.align == "right") {
                imgStyle = "float:right;" + imgStyle;
            }
            if (img.parentNode.href) {
                imgStyle = "cursor:hand;" + imgStyle;
            }
            var strNewHTML =
                "<span " +
                imgID +
                imgClass +
                imgTitle +
                ' style="' +
                "width:" +
                img.width +
                "px; height:" +
                img.height +
                "px;" +
                imgStyle +
                ";" +
                "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" +
                "(src='" +
                img.src +
                "', sizingMethod='scale');\"></span>";
            img.outerHTML = strNewHTML;
            i = i - 1;
        }
    }
}
function fixPNG(myImage) {
    var arVersion = navigator.appVersion.split("MSIE");
    var version = parseFloat(arVersion[1]);
    if (version >= 5.5 && version < 7 && document.body.filters) {
        var imgID = myImage.id ? "id='" + myImage.id + "' " : "";
        var imgClass = myImage.className
            ? "class='" + myImage.className + "' "
            : "";
        var imgTitle = myImage.title
            ? "title='" + myImage.title + "' "
            : "title='" + myImage.alt + "' ";
        var imgStyle = "display:inline-block;" + myImage.style.cssText;
        var strNewHTML =
            "<span " +
            imgID +
            imgClass +
            imgTitle +
            ' style="' +
            "width:" +
            myImage.width +
            "px; height:" +
            myImage.height +
            "px;" +
            imgStyle +
            ";" +
            "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" +
            "(src='" +
            myImage.src +
            "', sizingMethod='scale');\"></span>";
        myImage.outerHTML = strNewHTML;
    }
}
function _createNodeStr(nodeName, nodeValue) {
    return "<" + nodeName + ">" + nodeValue + "</" + nodeName + ">";
}
function _recursiveObject2Xml(name, obj) {
    var xmlstr = "";
    if (typeof obj == "string" || typeof obj == "number") {
        xmlstr = _createNodeStr(name, obj);
    } else if (jQuery.isArray(obj)) {
        jQuery.each(obj, function (idx, item) {
            xmlstr += _recursiveObject2Xml(name, item);
        });
    } else if (typeof obj == "object") {
        xmlstr += "<" + name + ">";
        jQuery.each(obj, function (propName, propVal) {
            xmlstr += _recursiveObject2Xml(propName, propVal);
        });
        xmlstr += "</" + name + ">";
    }
    return xmlstr;
}
function object2xml(name, obj) {
    var xmlstr = '<?xml version="1.0" encoding="UTF-8"?>';
    xmlstr += _recursiveObject2Xml(name, obj);
    return xmlstr;
}
function _recursiveXml2Object($xml) {
    if ($xml.children().size() > 0) {
        var _obj = {};
        $xml.children().each(function () {
            var _childObj =
                $(this).children().size() > 0
                    ? _recursiveXml2Object($(this))
                    : $(this).text();
            if (
                $(this).siblings().size() > 0 &&
                $(this).siblings().get(0).tagName == this.tagName
            ) {
                if (_obj[this.tagName] == null) {
                    _obj[this.tagName] = [];
                }
                _obj[this.tagName].push(_childObj);
            } else {
                _obj[this.tagName] = _childObj;
            }
        });
        return _obj;
    } else {
        return $xml.text();
    }
}
function xml2object($xml) {
    var obj = {};
    if ($xml.find("response").size() > 0) {
        var _response = _recursiveXml2Object($xml.find("response"));
        obj.type = "response";
        obj.response = _response;
    } else if ($xml.find("error").size() > 0) {
        var _code = $xml.find("code").text();
        var _message = $xml.find("message").text();
        obj.type = "error";
        obj.error = {
            code: _code,
            message: _message,
        };
    } else if ($xml.find("config").size() > 0) {
        var _config = _recursiveXml2Object($xml.find("config"));
        obj.type = "config";
        obj.config = _config;
    } else {
        obj.type = "unknown";
    }
    return obj;
}
function getAvailableToken() {
    var token = "";
    if ($.isArray(g_requestVerificationToken)) {
        if (g_requestVerificationToken.length > 0) {
            token = g_requestVerificationToken[0];
        } else {
            token = "";
        }
    } else {
        token = g_requestVerificationToken;
    }
    return token;
}
function getAjaxData(urlstr, callback_func, options) {
    var myurl = AJAX_HEADER + urlstr + AJAX_TAIL;
    var isAsync = true;
    var nTimeout = AJAX_TIMEOUT;
    var errorCallback = null;
    if (options) {
        if (options.sync) {
            isAsync = options.sync == true ? false : true;
        }
        if (options.timeout) {
            nTimeout = parseInt(options.timeout, 10);
            if (isNaN(nTimeout)) {
                nTimeout = AJAX_TIMEOUT;
            }
        }
        errorCallback = options.errorCB;
    }
    var headers = {
        _ResponseSource: "Broswer",
    };
    if (!$.isArray(g_requestVerificationToken)) {
        headers["__RequestVerificationToken"] = g_requestVerificationToken;
    }
    if (
        g_scarm_login &&
        (urlstr == "api/wlan/multi-basic-settings" ||
            urlstr == "api/wlan/basic-settings")
    ) {
        headers["Login-Type"] = "Scram";
    }
    if (g_set_cookie_flag && urlstr == "api/monitoring/status") {
        g_set_cookie_flag = false;
        headers["Update-Cookie"] = "UpdateCookie";
    }
    $.ajax({
        async: isAsync,
        headers: headers,
        type: "GET",
        timeout: nTimeout,
        url: myurl,
        error: function (XMLHttpRequest, textStatus) {
            try {
                if (jQuery.isFunction(errorCallback)) {
                    errorCallback(XMLHttpRequest, textStatus);
                }
            } catch (exception) {}
        },
        success: function (data) {
            var xml;
            if (typeof data == "string" || typeof data == "number") {
                if (
                    -1 != this.url.indexOf("/api/ussd/get") &&
                    -1 != data.indexOf("content")
                ) {
                    data = smsContentDeleteWrongChar(data);
                }
                if (!window.ActiveXObject) {
                    var parser = new DOMParser();
                    xml = parser.parseFromString(data, "text/xml");
                } else {
                    xml = new ActiveXObject("Microsoft.XMLDOM");
                    xml.async = false;
                    xml.loadXML(data);
                }
            } else {
                xml = data;
            }
            var ret = xml2object($(xml));
            if ("error" == ret.type) {
                if (ERROR_WRONG_SESSION_TOKEN == ret.error.code) {
                    gotoPageWithoutHistory(HOME_PAGE_URL);
                    return;
                }
                if (ERROR_WRONG_SESSION == ret.error.code) {
                    gotoPageWithoutHistory(HOME_PAGE_URL);
                    return;
                }
            }
            if ("error" == ret.type && ERROR_WRONG_TOKEN == ret.error.code) {
                getAjaxToken();
                getAjaxData(urlstr, callback_func, options);
            } else if (typeof callback_func == "function") {
                callback_func($(xml));
            }
        },
    });
}
function sdResolveCannotParseChar(xmlStr) {
    if (typeof xmlStr != "undefined" && xmlStr != null && xmlStr != "") {
        return xmlStr.replace(/(\&|\')/g, function ($0, $1) {
            return {
                "&": "&amp;",
                "'": "&#39;",
            }[$1];
        });
    }
    return "";
}
function wifiSsidResolveCannotParseChar(xmlStr) {
    if (typeof xmlStr != "undefined" && xmlStr != null && xmlStr != "") {
        return xmlStr.replace(/(\&|\'|\"|\>|\<)/g, function ($0, $1) {
            return {
                "&": "&amp;",
                "'": "&apos;",
                '"': "&quot;",
                "<": "&lt;",
                ">": "&gt;",
            }[$1];
        });
    }
    return "";
}
function XSSResolveCannotParseChar(xmlStr) {
    if (typeof xmlStr != "undefined" && xmlStr != null && xmlStr != "") {
        return xmlStr.replace(/(\&|\'|\"|\>|\<|\/|\(|\))/g, function ($0, $1) {
            return {
                "&": "&amp;",
                "'": "&#39;",
                '"': "&quot;",
                "<": "&lt;",
                ">": "&gt;",
                "/": "&#x2F;",
                "(": "&#40;",
                ")": "&#41;",
            }[$1];
        });
    }
    return "";
}
function sd_resolveEntityReference(str) {
    if (typeof str != "undefined" && str != null && str != "") {
        return str.replace(/(\'|\&|\"|\>|\<|\/|\(|\))/g, function ($0, $1) {
            return {
                "'": "&#39;",
                "&": "&amp;",
                '"': "&quot;",
                "<": "&lt;",
                ">": "&gt;",
                "/": "&#x2F;",
                "(": "&#40;",
                ")": "&#41;",
            }[$1];
        });
    }
    return "";
}
function XSSResolveHtmlReturnChar(xmlStr) {
    if (typeof xmlStr != "undefined" && xmlStr != null && xmlStr != "") {
        return xmlStr.replace(/(\'|\"|\/|\(|\))/g, function ($0, $1) {
            return {
                "'": "&apos;",
                '"': "&quot;",
                "/": "&#x2F;",
                "(": "&#40;",
                ")": "&#41;",
            }[$1];
        });
    }
    return "";
}
function smsContentDeleteWrongChar(smsStr) {
    return smsStr.replace(/([\x00-\x08]|\x0b|\x0c|[\x0e-\x1f])/g, " ");
}
function getTokenFromHeader(headers, tokenHeader) {
    var tokenindex = headers.indexOf(tokenHeader) + tokenHeader.length + 1;
    while (headers.substring(tokenindex, tokenindex + 1) == " ") {
        tokenindex++;
    }
    return headers.substring(tokenindex, tokenindex + 32);
}
var g_encPublickey = {
    e: "",
    n: "",
};
getEncpubkey(false);
function getEncpubkey(issync) {
    var syncs = true;
    if (typeof issync != "undefined") {
        syncs = issync;
    }
    getAjaxData(
        "api/webserver/publickey",
        function ($xml) {
            var ret = xml2object($xml);
            if (ret.type == "response") {
                g_encPublickey.e = ret.response.encpubkeye;
                g_encPublickey.n = ret.response.encpubkeyn;
                if (g_encPublickey.e == "") {
                    getEncpubkey(syncs);
                }
            } else {
                getEncpubkey(syncs);
            }
        },
        {
            sync: syncs,
        },
        {
            errorCB: function () {
                getEncpubkey(syncs);
            },
        }
    );
}
function storagePubkey(rsa_n, rsa_e) {
    var storage = window.localStorage;
    if (rsa_e == "" || rsa_n == "") {
        return;
    }
    try {
        storage.setItem("atp", "atp");
        storage.getItem("atp");
        storage.removeItem("atp");
        storage.removeItem("n");
        storage.removeItem("e");
        storage.setItem("n", rsa_n);
        storage.setItem("e", rsa_e);
    } catch (error) {
        var pubkey = "[rsa_n=" + rsa_n + "&rsa_e=" + rsa_e + "]";
        var namebk = window.name;
        var keylocation = namebk.indexOf("[rsa_n=");
        var defaultvalue = namebk;
        if (keylocation > 0) {
            defaultvalue = namebk.substr(0, keylocation);
        }
        window.name = defaultvalue + pubkey;
    }
}
function getPubkey() {
    var storage = window.localStorage;
    try {
        storage.setItem("atp", "atp");
        storage.getItem("atp");
        storage.removeItem("atp");
        return [storage.getItem("n"), storage.getItem("e")];
    } catch (error) {
        var namebk = window.name;
        var keylocation = namebk.indexOf("[rsa_n=");
        if (keylocation >= 0) {
            var pubkey = namebk.substr(keylocation);
            var local_e = pubkey.indexOf("&rsa_e=");
            if (local_e > 0) {
                var e = pubkey.substring(local_e + 7, pubkey.length - 1);
                var n = pubkey.substring(7, local_e);
                return [n, e];
            }
        }
    }
    return ["", ""];
}
function doRSAEncrypt(encstring) {
    if (encstring == "") {
        return "";
    }
    if (g_encPublickey.e == "") {
        if (g_scarm_login) {
            var pubkeyArray = getPubkey();
            g_encPublickey.e = pubkeyArray[1];
            g_encPublickey.n = pubkeyArray[0];
        } else {
            getEncpubkey();
        }
    }
    var rsa = new RSAKey();
    rsa.setPublic(g_encPublickey.n, g_encPublickey.e);
    var encStr = base64_encode(encstring);
    var num = encStr.length / 245;
    var restotal = "";
    for (i = 0; i < num; i++) {
        var encdata = encStr.substr(i * 245, 245);
        var res = rsa.encrypt(encdata);
        restotal += res;
    }
    if (restotal.length % 256 != 0) {
        restotal = doRSAEncrypt(encstring);
    }
    return restotal;
}
function saveAjaxData(urlstr, xmlDate, callback_func, options) {
    var myurl = AJAX_HEADER + urlstr + AJAX_TAIL;
    var isAsync = true;
    var nTimeout = AJAX_TIMEOUT;
    var errorCallback = null;
    var headers = {
        _ResponseSource: "Broswer",
    };
    if ($.isArray(g_requestVerificationToken)) {
        if (g_requestVerificationToken.length > 0) {
            headers["__RequestVerificationToken"] =
                g_requestVerificationToken[0];
            g_requestVerificationToken.splice(0, 1);
        } else {
            setTimeout(function () {
                saveAjaxData(urlstr, xmlDate, callback_func, options);
            }, 50);
            return;
        }
    } else {
        headers["__RequestVerificationToken"] = g_requestVerificationToken;
    }
    if (options) {
        if (options.sync) {
            isAsync = options.sync == true ? false : true;
        }
        if (options.timeout) {
            nTimeout = parseInt(options.timeout, 10);
            if (isNaN(nTimeout)) {
                nTimeout = AJAX_TIMEOUT;
            }
        }
        errorCallback = options.errorCB;
        if (options.enc && g_moduleswitch.encrypt_enabled == 1) {
            headers["Content-Type"] =
                "application/x-www-form-urlencoded; charset=UTF-8;enc";
            xmlDate = doRSAEncrypt(xmlDate);
        } else if (options.enp && g_moduleswitch.encrypt_enabled == 1) {
            headers["Content-Type"] =
                "application/x-www-form-urlencoded; charset=UTF-8;enp";
        }
    }
    $.ajax({
        async: isAsync,
        headers: headers,
        type: "POST",
        timeout: nTimeout,
        url: myurl,
        data: xmlDate,
        error: function (XMLHttpRequest, textStatus) {
            try {
                if (
                    "12030" == XMLHttpRequest.status ||
                    "12031" == XMLHttpRequest.status ||
                    "12019" == XMLHttpRequest.status ||
                    "400" == XMLHttpRequest.status
                ) {
                    saveAjaxData(urlstr, xmlDate, callback_func, options);
                    return;
                } else if (jQuery.isFunction(errorCallback)) {
                    errorCallback(XMLHttpRequest, textStatus);
                }
            } catch (exception) {}
        },
        success: function (data) {
            var xml;
            if (typeof data == "string") {
                if (
                    -1 != this.url.indexOf("/api/sms/sms-list") &&
                    -1 != data.indexOf("Messages")
                ) {
                    data = smsContentDeleteWrongChar(data);
                }
                if (!window.ActiveXObject) {
                    var parser = new DOMParser();
                    xml = parser.parseFromString(data, "text/xml");
                } else {
                    xml = new ActiveXObject("Microsoft.XMLDOM");
                    xml.async = false;
                    xml.loadXML(data);
                }
            } else {
                xml = data;
            }
            var xml_ret = xml2object($(xml));
            if (
                typeof xml_ret.error != "undefined" &&
                -1 == this.url.indexOf("/api/user/session")
            ) {
                if (
                    xml_ret.error.code == ERROR_SYSTEM_NO_RIGHTS &&
                    current_href != "home"
                ) {
                    gotoPageWithoutHistory(HOME_PAGE_URL);
                    return;
                }
                if (isneedvoicbusy()) {
                    if (ERROR_VOICE_BUSY == xml_ret.error.code) {
                        gotoPageWithoutHistory(VOICE_BUSY_URL);
                        return;
                    }
                }
                if (ERROR_WRONG_TOKEN == xml_ret.error.code) {
                    saveAjaxData(urlstr, xmlDate, callback_func, options);
                    return;
                }
                if (ERROR_WRONG_SESSION_TOKEN == xml_ret.error.code) {
                    gotoPageWithoutHistory(HOME_PAGE_URL);
                    return;
                }
                if (ERROR_WRONG_SESSION == xml_ret.error.code) {
                    gotoPageWithoutHistory(HOME_PAGE_URL);
                    return;
                }
            } else if (
                isAjaxReturnOK(xml_ret) &&
                -1 != this.url.indexOf("/api/user/login")
            ) {
                if ($.isArray(g_requestVerificationToken)) {
                    g_requestVerificationToken = [];
                }
            } else if (
                -1 != this.url.indexOf("/api/user/challenge_login") ||
                -1 != this.url.indexOf("/api/user/authentication_login") ||
                -1 != this.url.indexOf("/api/user/password_scram")
            ) {
                if ($.isArray(g_requestVerificationToken)) {
                    g_requestVerificationToken = [];
                }
            }
            if (typeof callback_func == "function") {
                callback_func($(xml));
                if (
                    urlstr != "api/sdcard/Check_file_exist" &&
                    urlstr != "api/diagnosis/diagnose_traceroute"
                ) {
                    startLogoutTimer();
                }
            }
        },
        complete: function (XMLHttpRequest, textStatus) {
            var headers = XMLHttpRequest.getAllResponseHeaders();
            if (headers.indexOf("__RequestVerificationTokenone") >= 0) {
                g_requestVerificationToken.push(
                    getTokenFromHeader(headers, "__RequestVerificationTokenone")
                );
                if (headers.indexOf("__RequestVerificationTokentwo") >= 0) {
                    g_requestVerificationToken.push(
                        getTokenFromHeader(
                            headers,
                            "__RequestVerificationTokentwo"
                        )
                    );
                }
            } else if (headers.indexOf("__requestverificationtokenone") >= 0) {
                g_requestVerificationToken.push(
                    getTokenFromHeader(headers, "__requestverificationtokenone")
                );
                if (headers.indexOf("__requestverificationtokentwo") >= 0) {
                    g_requestVerificationToken.push(
                        getTokenFromHeader(
                            headers,
                            "__requestverificationtokentwo"
                        )
                    );
                }
            } else if (headers.indexOf("__RequestVerificationToken") >= 0) {
                g_requestVerificationToken.push(
                    getTokenFromHeader(headers, "__RequestVerificationToken")
                );
            } else if (headers.indexOf("__requestverificationtoken") >= 0) {
                g_requestVerificationToken.push(
                    getTokenFromHeader(headers, "__requestverificationtoken")
                );
            }
        },
    });
}
function isAjaxReturnOK(obj) {
    var ret = false;
    if (obj) {
        if (typeof obj.response == "string") {
            if (obj.response.toLowerCase() == "ok") {
                ret = true;
            }
        }
    }
    return ret;
}
function getConfigData(urlstr, callback_func, options) {
    var myurl = "../" + urlstr + "";
    var isAsync = true;
    var nTimeout = AJAX_TIMEOUT;
    var errorCallback = null;
    if (options) {
        if (options.sync) {
            isAsync = options.sync == true ? false : true;
        }
        if (options.timeout) {
            nTimeout = parseInt(options.timeout, 10);
            if (isNaN(nTimeout)) {
                nTimeout = AJAX_TIMEOUT;
            }
        }
        errorCallback = options.errorCB;
    }
    $.ajax({
        async: isAsync,
        type: "GET",
        timeout: nTimeout,
        url: myurl,
        headers: {
            _ResponseSource: "Broswer",
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            try {
                if (jQuery.isFunction(errorCallback)) {
                    errorCallback(XMLHttpRequest, textStatus);
                }
            } catch (exception) {}
        },
        success: function (data) {
            var xml;
            if (typeof data == "string" || typeof data == "number") {
                if (!window.ActiveXObject) {
                    var parser = new DOMParser();
                    xml = parser.parseFromString(data, "text/xml");
                } else {
                    xml = new ActiveXObject("Microsoft.XMLDOM");
                    xml.async = false;
                    xml.loadXML(data);
                }
            } else {
                xml = data;
            }
            if (typeof callback_func == "function") {
                callback_func($(xml));
            }
        },
    });
}
function _createFeatureNode(str) {
    if (typeof str == "undefined" || str == null) {
        return null;
    }
    var isEmpt = $.trim(str);
    if (isEmpt == "") {
        return isEmpt;
    }
    if (isNaN(str)) {
        return str;
    } else {
        var value = parseInt(str, 10);
        return value;
    }
}
function _recursiveXml2Feature($xml) {
    if ($xml.children().size() > 0) {
        var _obj = {};
        $xml.children().each(function () {
            var _childObj =
                $(this).children().size() > 0
                    ? _recursiveXml2Feature($(this))
                    : _createFeatureNode($(this).text());
            if (
                $(this).siblings().size() > 0 &&
                $(this).siblings().get(0).tagName == this.tagName
            ) {
                if (_obj[this.tagName] == null) {
                    _obj[this.tagName] = [];
                }
                _obj[this.tagName].push(_childObj);
            } else {
                _obj[this.tagName] = _childObj;
            }
        });
        return _obj;
    } else {
        return _createFeatureNode($xml.text());
    }
}
function _xml2feature($xml) {
    var obj = null;
    if ($xml.find("config").size() > 0) {
        var _config = _recursiveXml2Feature($xml.find("config"));
        obj = _config;
    }
    return obj;
}
function getGlobalFeatures() {
    getAjaxData(
        "api/device/basic_information",
        function ($xml) {
            var ret = xml2object($xml);
            if ("response" == ret.type) {
                basic_infos = ret.response;
                g_restore_default_status = ret.response.restore_default_status;
                g_ProductCDMA =
                    ret.response.productfamily == "CDMA" ? true : false;
                if (g_ProductCDMA) {
                    g_net_mode_status = MACRO_NET_MODE_C;
                } else {
                    g_net_mode_status = MACRO_NET_MODE_W;
                }
                if (ret.response.multimode == "1") {
                    g_net_mode_type = MACRO_NET_DUAL_MODE;
                } else {
                    g_net_mode_type = MACRO_NET_SINGLE_MODE;
                }
            } else {
                getAjaxData(
                    "api/device/information",
                    function ($xml) {
                        var ret = xml2object($xml);
                        if ("response" == ret.type) {
                            g_ProductCDMA =
                                ret.response.ProductFamily == "CDMA"
                                    ? true
                                    : false;
                            if (g_ProductCDMA) {
                                g_net_mode_status = MACRO_NET_MODE_C;
                            } else {
                                g_net_mode_status = MACRO_NET_MODE_W;
                            }
                            if (ret.response.MultiMode == "1") {
                                g_net_mode_type = MACRO_NET_DUAL_MODE;
                            } else {
                                g_net_mode_type = MACRO_NET_SINGLE_MODE;
                            }
                        }
                    },
                    {
                        sync: true,
                    }
                );
            }
        },
        {
            sync: true,
        }
    );
    if (basic_infos != null && typeof g_restore_default_status == "undefined") {
        getAjaxData(
            "api/device/basic_information",
            function ($xml) {
                var ret = xml2object($xml);
                if ("response" == ret.type) {
                    basic_infos = ret.response;
                    g_restore_default_status =
                        ret.response.restore_default_status;
                    g_ProductCDMA =
                        ret.response.productfamily == "CDMA" ? true : false;
                    if (g_ProductCDMA) {
                        g_net_mode_status = MACRO_NET_MODE_C;
                    } else {
                        g_net_mode_status = MACRO_NET_MODE_W;
                    }
                    if (ret.response.multimode == "1") {
                        g_net_mode_type = MACRO_NET_DUAL_MODE;
                    } else {
                        g_net_mode_type = MACRO_NET_SINGLE_MODE;
                    }
                }
            },
            {
                sync: true,
            }
        );
    }
    getConfigData(
        "config/global/config.xml",
        function ($xml) {
            g_feature = _xml2feature($xml);
            g_PageUrlTree = g_feature.menu;
            g_needToLogin = g_feature.login;
            g_nedd_login = g_feature.login;
            g_needFooter = g_feature.footer;
            g_needPinlock = g_feature.pinlock;
            g_MainMenuNumber = g_feature.menu_number;
            g_PositionInfo = g_feature.position_info;
            g_copyright_year = g_feature.copyright;
            g_deviceInfomation = g_feature.homedeviceinfo;
            g_antennaPicDisplay = g_feature.antenna_pic;
        },
        {
            sync: true,
        }
    );
    getAjaxData(
        "api/user/state-login",
        function ($xml) {
            var ret = xml2object($xml);
            if (ret.type == "response") {
                if (G_LOGIN_STATE == ret.response.State) {
                    if (G_CONST_USERNAME == ret.response.Username) {
                        g_PageUrlTree.settings.tr069 = "";
                        g_PageUrlTree.settings.security.acl = "";
                        g_PageUrlTree.settings.dialup.profilesmgr = "";
                        g_PageUrlTree.statistic = "";
                        g_PageUrlTree.settings.security.staticroute = "";
                        g_PageUrlTree.settings.voip = "";
                    }
                    if (G_SUPER_USERNAME == ret.response.Username) {
                        g_PageUrlTree.settings.system.modifypassword = "";
                    }
                } else {
                    g_PageUrlTree.statistic = "";
                }
            }
        },
        {
            sync: true,
        }
    );
    if (g_needToLogin == 0) {
        getAjaxData(
            "api/user/hilink_login",
            function ($xml) {
                var res = xml2object($xml);
                if ("response" == res.type) {
                    g_hilink_login_old_api = 1;
                    g_hilink_login_status = res.response.hilink_login;
                    g_needToLogin =
                        parseInt(res.response.hilink_login, 10) == 1
                            ? true
                            : false;
                } else {
                    g_hilink_login_old_api = 0;
                }
            },
            {
                sync: true,
            }
        );
    }
    getAjaxData(
        "api/dialup/dialup-feature-switch",
        function ($xml) {
            var ret = xml2object($xml);
            if ("response" == ret.type) {
                g_dialup_feature = ret.response;
            }
        },
        {
            sync: true,
        }
    );
    getAjaxData(
        "api/bluetooth/feature-switch",
        function ($xml) {
            var ret = xml2object($xml);
            if ("response" == ret.type) {
                g_bluetooth_feature = ret.response;
            }
        },
        {
            sync: true,
        }
    );
    getConfigData(
        "config/global/net-type.xml",
        function ($xml) {
            var ret = xml2object($xml);
            var networktype = ret.config.networktypes;
            if ($.isArray(networktype)) {
                var i = 0;
                for (i = 0; i < networktype.length; i++) {
                    g_networktype[parseInt(networktype[i].index, 10)] =
                        networktype[i].networktype;
                }
                g_customNetworkType = g_networktype[101];
            }
        },
        {
            sync: true,
        }
    );
    getAjaxData(
        "api/global/module-switch",
        function ($xml) {
            var ret = xml2object($xml);
            if (ret.type == "response") {
                g_moduleswitch = ret.response;
                g_module = {
                    ussd_enabled:
                        g_moduleswitch.ussd_enabled == "1" ? true : false,
                    sdcard_enabled:
                        g_moduleswitch.sdcard_enabled == "1" ? true : false,
                    online_update_enabled:
                        g_moduleswitch.bbou_enabled == "1" ? true : false,
                    wifi_enabled:
                        g_moduleswitch.wifi_enabled == "1" ? true : false,
                    sms_enabled:
                        g_moduleswitch.sms_enabled == "1" ? true : false,
                    pb_enabled: g_moduleswitch.pb_enabled == "1" ? true : false,
                    autoapn_enabled:
                        g_feature.autoapn_enabled == "1" ? true : false,
                    statistic_enabled:
                        g_moduleswitch.statistic_enabled == "1" ? true : false,
                    celllock_enabled:
                        g_moduleswitch.celllock_enabled == "1" ? true : false,
                    checklogin_enabled: g_feature.login == "1" ? true : false,
                    help_enabled:
                        g_moduleswitch.help_enabled == "1" ? true : false,
                    ap_station_enabled:
                        g_feature.ap_station_enabled == "1" ? true : false,
                    multi_ssid_enabled:
                        g_moduleswitch.multssid_enable == "1" ? true : false,
                    dlna_enabled:
                        g_moduleswitch.dlna_enabled == "1" ? true : false,
                    stk_enabled:
                        g_moduleswitch.stk_enabled == "1" ? true : false,
                    wifioffload_enable:
                        g_moduleswitch.wifioffload_enabled == "1"
                            ? true
                            : false,
                    cradle_enabled:
                        g_moduleswitch.cradle_enabled == "1" ? true : false,
                    vpn_enabled:
                        g_moduleswitch.vpn_enabled == "1" ? true : false,
                    ipv6_enabled:
                        g_moduleswitch.ipv6_enabled == "1" ? true : false,
                    monthly_volume_enabled:
                        g_moduleswitch.monthly_volume_enabled == "1"
                            ? true
                            : false,
                    last_connect_enable:
                        g_moduleswitch.last_connect_enable == "1"
                            ? true
                            : false,
                    powersave_enabled:
                        g_moduleswitch.powersave_enabled == "1" ? true : false,
                    fastboot_enabled:
                        g_moduleswitch.fastboot_enabled == "1" ? true : false,
                    sntp_enabled:
                        g_moduleswitch.sntp_enabled == "1" ? true : false,
                    dataswitch_enabled:
                        g_moduleswitch.dataswitch_enabled == "1" ? true : false,
                    poweroff_enabled:
                        g_moduleswitch.poweroff_enabled == "1" ? true : false,
                    ddns_enabled:
                        g_moduleswitch.ddns_enabled == "1" ? true : false,
                    sambashare_enabled:
                        g_moduleswitch.sambashare_enabled == "1" ? true : false,
                    bridge_enabled:
                        g_moduleswitch.bridge_enabled == "1" ? true : false,
                    local_update_enabled:
                        g_moduleswitch.localupdate_enabled == "1"
                            ? true
                            : false,
                    fw_macfilter_enabled:
                        g_moduleswitch.fw_macfilter_enabled == "1"
                            ? true
                            : false,
                    diagnosis_enabled:
                        g_moduleswitch.diagnosis_enabled == "1" ? true : false,
                    voip_enabled:
                        g_moduleswitch.voip_enabled == "1" ? true : false,
                    ftpdisplay_enabled:
                        g_moduleswitch.ftpdisplay_enabled == "1" ? true : false,
                    vsim_enabled:
                        g_moduleswitch.vsim_enabled == "1" ? true : false,
                    cbs_enabled:
                        g_moduleswitch.cbs_enabled == "1" ? true : false,
                    bluetooth_enabled:
                        g_moduleswitch.bluetooth_enabled == "1" ? true : false,
                    bt_enabled:
                        g_bluetooth_feature.bt_basic_enabled == "1"
                            ? true
                            : false,
                    btwakeup_enabled:
                        g_bluetooth_feature.bt_wakeup_enabled == "1"
                            ? true
                            : false,
                    cs_enable: g_moduleswitch.cs_enable == "1" ? true : false,
                    antenna_enabled:
                        g_moduleswitch.antenna_enabled == "1" ? true : false,
                    volte_enabled:
                        g_moduleswitch.volte_enabled == "1" ? true : false,
                    pcp_enabled:
                        g_moduleswitch.pcp_enabled == "1" ? true : false,
                    qos_enabled:
                        g_moduleswitch.qos_enabled == "1" ? true : false,
                    dstdisplay_enabled:
                        g_moduleswitch.dstdisplay_enabled == "1" ? true : false,
                    timeserverdisplay_enabled:
                        g_moduleswitch.timeserverdisplay_enabled == "1"
                            ? true
                            : false,
                    static_route_enabled:
                        g_moduleswitch.static_route_enabled == "1"
                            ? true
                            : false,
                    static_route6_enabled:
                        g_moduleswitch.static_route6_enabled == "1"
                            ? true
                            : false,
                    cwmp_enabled:
                        g_moduleswitch.cwmp_enabled == "1" ? true : false,
                    voiceprofile_enabled:
                        g_dialup_feature.voice_profile_display == "1"
                            ? true
                            : false,
                    tr069profile_enabled:
                        g_dialup_feature.tr069_profile_display == "1"
                            ? true
                            : false,
                    autoreboot_enable:
                        g_moduleswitch.autoreboot_enable == "1" ? true : false,
                    time_manual_enabled:
                        g_moduleswitch.timemanualsetdisplay_enable == "1"
                            ? true
                            : false,
                    sntpdisplay_enabled:
                        g_moduleswitch.sntpdisplay_enabled == "1"
                            ? true
                            : false,
                    hostinfo_enable:
                        g_moduleswitch.hostinfo_enable == "1" ? true : false,
                    parentalcontrol_enabled:
                        g_moduleswitch.timerule_enable == "1" ? true : false,
                    nfc_enable: g_moduleswitch.nfc_enable == "1" ? true : false,
                    bandlock_enabled:
                        g_moduleswitch.bandlock_enabled == "1" ? true : false,
                    apn_retry_enabled:
                        g_moduleswitch.apn_retry_enabled == "1" ? true : false,
                    gdpr_enabled:
                        g_moduleswitch.gdpr_enabled == "1" ? true : false,
                    web_feature_enabled:
                        g_moduleswitch.web_feature_enabled == "1"
                            ? true
                            : false,
                };
                g_needHelp = g_module.help_enabled;
                g_sms_mode = g_moduleswitch.session_sms_enabled;
            }
        },
        {
            sync: true,
        }
    );
    if (g_module.wifi_enabled) {
        getAjaxData(
            "api/wlan/wifi-feature-switch",
            function ($xml) {
                var ret = xml2object($xml);
                if (ret.type == "response") {
                    g_wifiFeatureSwitch = ret.response;
                    g_wifi = {
                        stawpsenabled:
                            g_wifiFeatureSwitch.stawpsenabled == "1"
                                ? true
                                : false,
                    };
                }
            },
            {
                sync: true,
            }
        );
    }
    if (g_module.bt_enabled) {
        getAjaxData(
            "api/bluetooth/settings",
            function ($xml) {
                var ret = xml2object($xml);
                if ("response" == ret.type) {
                    g_bluetooth_Status = ret.response;
                }
            },
            {
                sync: true,
            }
        );
    }
    getAjaxData(
        "api/device/usb-tethering-switch",
        function ($xml) {
            var ret = xml2object($xml);
            if ("response" == ret.type) {
                g_USBtetheringSwitch = ret.response.tetheringswitch;
            }
        },
        {
            sync: true,
        }
    );
    getConfigData(
        "config/pcassistant/config.xml",
        function ($xml) {
            g_assistant_ret = xml2object($xml);
            g_module.assistant_enabled =
                g_assistant_ret.config.enable == "1" ? true : false;
        },
        {
            sync: true,
        }
    );
}
function formatFloat(src, pos) {
    return Math.round(src * Math.pow(10, pos)) / Math.pow(10, pos);
}
function getCurrentTime(time) {
    var final_time = "";
    var times = parseInt(time, 10);
    var hours = parseInt(times / 3600, 10);
    if (hours > 9) {
        final_time += hours + ":";
    } else if (hours >= 0) {
        final_time += "0" + hours + ":";
    }
    times = times - hours * 3600;
    var minutes = parseInt(times / 60, 10);
    if (minutes > 9) {
        final_time += minutes + ":";
    } else if (minutes > 0) {
        final_time += "0" + minutes + ":";
    } else if (minutes == 0) {
        final_time += "00" + ":";
    }
    times = times - minutes * 60;
    if (times > 9) {
        final_time += times;
    } else if (times > 0) {
        final_time += "0" + times;
    } else if (times == 0) {
        final_time += "00";
    }
    return final_time;
}
function getCurrentTimeArray(time) {
    var times_array = [];
    var times = parseInt(time, 10);
    var days = parseInt(times / 3600 / 24, 10);
    times_array.push(days);
    times = times - days * 3600 * 24;
    var hours = parseInt(times / 3600, 10);
    times_array.push(hours);
    times = times - hours * 3600;
    var minutes = parseInt(times / 60, 10);
    times_array.push(minutes);
    var secondes = times - minutes * 60;
    times_array.push(secondes);
    return times_array;
}
function clickMenu(menu) {
    var getEls = $("." + menu + " li ");
    $.each(getEls, function (i) {
        $(this).click(function () {
            if ($(this).hasClass("sub") && $(this).hasClass("click")) {
                $(this).removeClass("click");
            } else if ($(this).hasClass("nosub")) {
                return true;
            } else {
                $(getEls).removeClass("click");
                $(this).addClass("click");
            }
        });
        if ("menu_pb" != menu) {
            $(this).mouseover(function () {
                $(this).addClass("menu_hover");
            });
            $(this).mouseout(function () {
                $(this).removeClass("menu_hover");
            });
        }
    });
}
function button_enable(button_id, enable) {
    var my = $("#" + button_id);
    if (enable == "1") {
        my.removeClass("disable_btn");
        my.removeClass("button_dialog");
        my.removeClass("clr_gray_disable_btn_center");
        my.addClass("button_dialog");
    } else if (enable == "0") {
        my.removeClass("disable_btn");
        my.removeClass("clr_gray_disable_btn_center");
        my.removeClass("button_dialog");
        my.addClass("disable_btn");
        my.addClass("clr_gray_disable_btn_center");
    }
}
function allButton_enable(enable) {
    var my = $(".button_wrapper input");
    if (enable == "1") {
        my.removeClass("disable_btn");
        my.removeClass("button_dialog");
        my.removeClass("clr_gray_disable_btn_center");
        my.addClass("button_dialog");
    } else if (enable == "0") {
        my.removeClass("disable_btn");
        my.removeClass("clr_gray_disable_btn_center");
        my.removeClass("button_dialog");
        my.addClass("disable_btn");
        my.addClass("clr_gray_disable_btn_center");
    }
}
function refresh() {
    window.location.reload();
}
function gotoPageWithoutHistory(url) {
    window.location.replace(url);
}
function gotoPageWithHistory(url) {
    window.location.href = url;
}
function showPasswordStrength(idOfTextbox) {
    var strengthBar =
        '<div class="pwd_strength"><table width="400px"><tr><td style="color:red;font-weight:bold;">' +
        IDS_psw_strength_label +
        common_colon +
        "</td>";
    strengthBar +=
        '<td><table class="pwd_strength_tb" border="0" cellpadding="0" cellspacing="0"><tr><td id="pwd_strength_low" width="60px" align="center">' +
        IDS_psw_strength_low +
        "</td>";
    strengthBar +=
        '<td id="pwd_strength_mid" width="62px" align="center">' +
        IDS_psw_strength_mid +
        "</td>";
    strengthBar +=
        '<td id="pwd_strength_hig" width="60px" align="center">' +
        IDS_psw_strength_hig +
        "</td></tr></table></td></tr></table></div>";
    $("#" + idOfTextbox).after(strengthBar);
}
function clearPasswordStrength() {
    $(".pwd_strength").remove();
}
function setPWDStrengthColor(PWStrength) {
    if (MACRO_PASSWORD_LOW == PWStrength) {
        $("#pwd_strength_low").css({
            "background-color": "red",
        });
        $("#pwd_strength_mid, #pwd_strength_hig").css({
            "background-color": "gray",
        });
    } else if (MACRO_PASSWORD_MID == PWStrength) {
        $("#pwd_strength_low, #pwd_strength_mid").css({
            "background-color": "orange",
        });
        $("#pwd_strength_hig").css({
            "background-color": "gray",
        });
    } else if (MACRO_PASSWORD_HIG == PWStrength) {
        $("#pwd_strength_low, #pwd_strength_mid, #pwd_strength_hig").css({
            "background-color": "green",
        });
    } else {
        $("#pwd_strength_low, #pwd_strength_mid, #pwd_strength_hig").css({
            "background-color": "gray",
        });
    }
}
function setErrorMessageColor(errorTarget) {
    if (LANGUAGE_DATA.current_language == "pt_pt") {
        $("." + errorTarget).css({
            color: "#000000",
            "font-weight": "bold",
        });
    } else {
        $("." + errorTarget).css({
            color: "#ff0000",
        });
    }
}
function cancelErrorMessageColor(errorTarget) {
    if (LANGUAGE_DATA.current_language == "pt_pt") {
        $("." + errorTarget).css({
            color: "#000000",
            "font-weight": "normal",
        });
    } else {
        $("." + errorTarget).css({
            color: "#000000",
        });
    }
}
function showErrorUnderTextbox(idOfTextbox, errormsg, label_id) {
    var errorLabel = "";
    if (label_id != null && label_id != "" && label_id != " ") {
        errorLabel =
            "<div class='error_message'><label id='" +
            label_id +
            "'>" +
            errormsg +
            "</label><div>";
    } else {
        errorLabel =
            "<div class='error_message'><label>" + errormsg + "</label><div>";
    }
    if (
        0 ==
        $("#" + idOfTextbox)
            .parent()
            .children(".error_message").length
    ) {
        $("#" + idOfTextbox).after(errorLabel);
        setErrorMessageColor("error_message");
    }
}
function showErrorUnderNewPwdbox(idOfTextbox, errormsg) {
    var errorLabel =
        "<div class='new_pwd_message'><label>" + errormsg + "</label><div>";
    $("#" + idOfTextbox).after(errorLabel);
}
function showErrorUnderTr(idOfTr, errormsg, label_id) {
    var errorLabel = "";
    $("tr.error_message").remove();
    if (label_id != null && label_id != "" && label_id != " ") {
        errorLabel =
            "<tr class='error_message'><td></td><td colspan='2'><label id='" +
            label_id +
            "'>" +
            errormsg +
            "</label></td></tr>";
    } else {
        errorLabel =
            "<tr class='error_message'><td></td><td colspan='2'><label>" +
            errormsg +
            "</label></td></tr>";
    }
    $("#" + idOfTr).after(errorLabel);
    setErrorMessageColor("error_message");
}
function showErrorUnderTrEx(idOfTr, errormsg, label_id) {
    var errorLabel = "";
    $("tr.error_message").remove();
    if (label_id != null && label_id != "" && label_id != " ") {
        errorLabel =
            "<tr class='error_message'><td></td><td colspan='2'><label id='" +
            label_id +
            "'>" +
            errormsg +
            "</label></td></tr>";
    } else {
        errorLabel =
            "<tr class='error_message'><td></td><td colspan='2'><label>" +
            errormsg +
            "</label></td></tr>";
    }
    $("#" + idOfTr)
        .parent()
        .parent()
        .after(errorLabel);
    setErrorMessageColor("error_message");
}
function showPassword(id, check_id, maxlength) {
    var cbValue = $("#" + check_id).attr("checked");
    var strType = cbValue ? "text" : "password";
    var tempStr = $("#" + id).val();
    if (maxlength != null && maxlength != "") {
        $(
            "<input id= " +
                id +
                " type='" +
                strType +
                "'  autocomplete='off' size='25'  maxlength='" +
                maxlength +
                "' />"
        ).replaceAll($("#" + id));
    } else {
        $(
            "<input id= " +
                id +
                " type='" +
                strType +
                "'  autocomplete='off' size='25'  maxlength='64' />"
        ).replaceAll($("#" + id));
    }
    $("#" + id).val(tempStr);
}
var COMMON_PASSWORD_VALUE = "********";
var mousedownIndexList = [];
function checkPostIndex(index) {
    if (
        !(
            typeof g_moduleswitch.encrypt_enabled != "undefined" &&
            g_moduleswitch.encrypt_enabled == 1
        )
    ) {
        return false;
    }
    var checkIndexFlag = false;
    $.each(mousedownIndexList, function (n, arrvalue) {
        if (arrvalue == index) {
            checkIndexFlag = true;
        }
    });
    if (checkIndexFlag) {
        return false;
    } else {
        return true;
    }
}
function clickPasswordEvent(id, index) {
    if (
        !(
            typeof g_moduleswitch.encrypt_enabled != "undefined" &&
            g_moduleswitch.encrypt_enabled == 1
        )
    ) {
        return false;
    }
    $("#" + id).live("mousedown focusin click", function (event) {
        var checkmousedown = false;
        $.each(mousedownIndexList, function (n, arrvalue) {
            if (arrvalue == index) {
                checkmousedown = true;
            }
        });
        if (checkmousedown) {
            return;
        } else {
            mousedownIndexList.push(index);
        }
        if ($("#" + id).val().length > 0) {
            $("#" + id).attr("value", "");
        }
    });
}
function clearAllErrorLabel() {
    $(".error_message").remove();
}
function showWaitingDialog(
    tipTitle,
    tipContent,
    callback_func,
    prompt_timeout_flag
) {
    tipContent = display_SIMtoUIM(tipContent);
    $("#div_wrapper").remove();
    if (prompt_timeout_flag) {
        var tab =
            "<table colspacing='0' cellspacing='0' id='wait_table' class='wait_table need_prompt_timeout'>" +
            "<tr><td><div class='wait_table_header'><label class='wait_title clr_white'>" +
            tipTitle +
            "</label><span class='wait_dialog_btn' id='wait_dialog_btn' ><canvas id='showWaitingCanvas' width='25px' height='25px'></canvas></span></div></td></tr>" +
            "<tr><td><div class='wait_table_content clr_bold'><div class='wait_wrapper'><div class='wait_image'><img src='../res/waiting.gif' alt=''/></div><div class='wait_str clr_bold'>" +
            tipContent +
            "</div></div></div></td></tr>" +
            "<tr><td><div class='wait_table_bottom'></div></td></tr>" +
            "</table>";
    } else {
        var tab =
            "<table colspacing='0' cellspacing='0' id='wait_table' class='wait_table'>" +
            "<tr><td><div class='wait_table_header'><label class='wait_title clr_white'>" +
            tipTitle +
            "</label><span class='wait_dialog_btn' id='wait_dialog_btn' ><canvas id='showWaitingCanvas' width='25px' height='25px'></canvas></span></div></td></tr>" +
            "<tr><td><div class='wait_table_content clr_bold'><div class='wait_wrapper'><div class='wait_image'><img src='../res/waiting.gif' alt=''/></div><div class='wait_str clr_bold'>" +
            tipContent +
            "</div></div></div></td></tr>" +
            "<tr><td><div class='wait_table_bottom'></div></td></tr>" +
            "</table>";
    }
    var wait_div =
        "<div id='div_wrapper'><iframe   id='ifream_dialog'  src= '' frameborder= '0' style= 'background:#bcbcbc; width:100%; height:100%; display: block;'> </iframe></div>" +
        tab;
    $("body").append(wait_div);
    if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
        $(".wait_table_header").css({
            width: "383px",
            height: "26px",
        });
        $(".wait_table_header").corner("top 5px");
        var ahtml = "<img src='../res/dialog_close_btn.png' title='' alt='' />";
        $(".wait_table_header span").append(ahtml);
    } else {
        var canvas = document.getElementById("showWaitingCanvas");
        draw(canvas);
    }
    reputPosition($("#wait_table"), $("#div_wrapper"));
    $("#wait_dialog_btn").bind("click", function () {
        closeWaitingDialog();
    });
    if (typeof callback_func == "function") {
        callback_func();
    }
    disableTabKey();
}
function closeWaitingDialog(callback_func) {
    if ($(".info_dialog").size() == 0) {
        $("#div_wrapper").remove();
    }
    $("#wait_table").remove();
    enableTabKey();
    if (typeof callback_func == "function") {
        callback_func();
    }
}
function getGMonitoringStatus() {
    if (G_MonitoringStatus != null) {
        return;
    } else {
        getAjaxData(
            "api/monitoring/status",
            function ($xml) {
                var gstatus_ret = xml2object($xml);
                if (gstatus_ret.type == "response") {
                    G_MonitoringStatus = gstatus_ret;
                }
            },
            {
                sync: true,
            }
        );
    }
}
function getDeviceStatus() {
    if (g_is_login_opened || g_is_clear_timeout) {
        return;
    }
    if (firstTimeMontitoringStatusQuery == "0") {
        firstTimeMontitoringStatusQuery = "1";
        if ($.browser.opera && $.browser.version == "11.00") {
            getAjaxData("api/monitoring/status", function ($xml) {
                var ret = xml2object($xml);
                if (ret.type == "response") {
                    G_MonitoringStatus = ret;
                    DATA_READY.statusReady = true;
                    execEachFunList();
                    getPlmn();
                    if (MACRO_NET_DUAL_MODE == g_net_mode_type) {
                        getMainNetMode();
                    }
                    getAjaxData(
                        "api/monitoring/check-notifications",
                        function ($xml) {
                            G_NotificationsStatus = null;
                            var ret = xml2object($xml);
                            if (ret.type == "response") {
                                if (
                                    g_module.online_update_enabled &&
                                    ret.response.OnlineUpdateStatus == 30 &&
                                    g_needToLogin == "0"
                                ) {
                                    if (
                                        window.location.href
                                            .toLowerCase()
                                            .indexOf("update.html") < 0
                                    ) {
                                        window.location.href = "update.html";
                                    }
                                }
                                G_NotificationsStatus = ret.response;
                                showNotification();
                                DATA_READY.notificationsReady = true;
                                execEachFunList();
                            }
                        }
                    );
                }
            });
        } else {
            getAjaxData(
                "api/monitoring/status",
                function ($xml) {
                    var ret = xml2object($xml);
                    if (ret.type == "response") {
                        G_MonitoringStatus = ret;
                        DATA_READY.statusReady = true;
                        execEachFunList();
                        getPlmn();
                        if (MACRO_NET_DUAL_MODE == g_net_mode_type) {
                            getMainNetMode();
                        }
                        getAjaxData(
                            "api/monitoring/check-notifications",
                            function ($xml) {
                                G_NotificationsStatus = null;
                                var ret = xml2object($xml);
                                if (ret.type == "response") {
                                    if (
                                        g_module.online_update_enabled &&
                                        ret.response.OnlineUpdateStatus == 30 &&
                                        g_needToLogin == "0"
                                    ) {
                                        if (
                                            window.location.href
                                                .toLowerCase()
                                                .indexOf("update.html") < 0
                                        ) {
                                            window.location.href =
                                                "update.html";
                                        }
                                    }
                                    G_NotificationsStatus = ret.response;
                                    showNotification();
                                    DATA_READY.notificationsReady = true;
                                    execEachFunList();
                                }
                            }
                        );
                    }
                },
                {
                    sync: true,
                }
            );
        }
    } else {
        getAjaxData("api/monitoring/status", function ($xml) {
            var ret = xml2object($xml);
            if (ret.type == "response") {
                G_MonitoringStatus = ret;
                DATA_READY.statusReady = true;
                execEachFunList();
                getPlmn();
                if (MACRO_NET_DUAL_MODE == g_net_mode_type) {
                    getMainNetMode();
                }
                getAjaxData(
                    "api/monitoring/check-notifications",
                    function ($xml) {
                        G_NotificationsStatus = null;
                        var ret = xml2object($xml);
                        if (ret.type == "response") {
                            if (
                                g_module.online_update_enabled &&
                                ret.response.OnlineUpdateStatus == 30 &&
                                g_needToLogin == "0"
                            ) {
                                if (
                                    window.location.href
                                        .toLowerCase()
                                        .indexOf("update.html") < 0
                                ) {
                                    window.location.href = "update.html";
                                }
                            }
                            G_NotificationsStatus = ret.response;
                            showNotification();
                            DATA_READY.notificationsReady = true;
                            execEachFunList();
                        }
                    }
                );
            }
        });
    }
    if (g_module.wifioffload_enable) {
        getAjaxData("api/wlan/station-information", function ($xml) {
            var ret = xml2object($xml);
            G_StationStatus = ret;
            if (G_StationStatus.type == "response") {
                if (
                    g_stationInfo != "" &&
                    G_StationStatus.response.NetworkName ==
                        g_stationInfo.response.NetworkName &&
                    G_StationStatus.response.CurrentSecMode ==
                        g_stationInfo.response.CurrentSecMode
                ) {
                    if (
                        G_MonitoringStatus != null &&
                        G_MonitoringStatus.type == "response"
                    ) {
                        if (
                            g_wifiStatusInfo ==
                            G_MonitoringStatus.response.WifiConnectionStatus
                        ) {
                            g_stationInfoFlag = true;
                        } else {
                            g_wifiStatusInfo =
                                G_MonitoringStatus.response
                                    .WifiConnectionStatus;
                        }
                    }
                }
                g_stationInfo = ret;
            }
            DATA_READY.apStationReady = true;
            execEachFunList();
        });
    }
    if (g_module.cradle_enabled) {
        getAjaxData("api/cradle/status-info", function ($xml) {
            var ret = xml2object($xml);
            if (ret.type == "response") {
                G_cradleStationStatus = ret.response;
            }
            DATA_READY.cradleReady = true;
            execEachFunList();
        });
    } else {
        $("#ethernet_connection").remove();
        $("#only_ethernet_connection").remove();
    }
    if (g_module.celllock_enabled) {
        getAjaxData(
            "api/ntwk/celllock",
            function ($xml) {
                var celllock_ret = xml2object($xml);
                if (celllock_ret.type == "response") {
                    G_CelllockEnable = celllock_ret.response.celllockEnable;
                    G_CelllockStatus = celllock_ret.response.celllockStatus;
                }
            },
            {
                sync: false,
            }
        );
    }
    if (
        g_module.wifi_enabled &&
        typeof g_wifiFeatureSwitch != "undefined" &&
        WIFI5G_ON == g_wifiFeatureSwitch.wifi5g_enabled &&
        g_loginFlag
    ) {
        getAjaxData("api/wlan/multi-security-settings", function ($xml) {
            var ret = xml2object($xml);
            if (ret.type != "response") {
                return;
            }
            g_wlanInfo = ret.response;
        });
    }
    function execEachFunList() {
        if (
            (g_module.cradle_enabled && false == DATA_READY.cradleReady) ||
            (g_module.wifioffload_enable &&
                false == DATA_READY.apStationReady) ||
            false == DATA_READY.statusReady ||
            false == DATA_READY.notificationsReady
        ) {
            return;
        }
        execFunList();
        DATA_READY.statusReady = false;
        DATA_READY.notificationsReady = false;
        DATA_READY.apStationReady = false;
        DATA_READY.cradleReady = false;
    }
    function execFunList() {
        alreadyStatusListnerExecuted = "1";
        $.each(STATUS_LISTENER_FUN_LIST, function (n, value) {
            eval(value);
        });
    }
    g_decive_timer = setTimeout(getDeviceStatus, g_feature.update_interval);
}
function getPlmn() {
    function isValidType(inputType, defaultType) {
        if (
            typeof inputType == "undefined" ||
            inputType == "" ||
            inputType == " "
        ) {
            return defaultType;
        } else {
            return inputType;
        }
    }
    g_plmn_rat = "";
    if (G_MonitoringStatus.response.ServiceStatus == SERVICE_STATUS_AVAIABLE) {
        if (
            typeof G_MonitoringStatus.response.CurrentNetworkTypeEx !=
                "undefined" &&
            G_MonitoringStatus.response.CurrentNetworkTypeEx != ""
        ) {
            switch (G_MonitoringStatus.response.CurrentNetworkTypeEx) {
                case MACRO_NET_WORK_TYPE_EX_GSM:
                case MACRO_NET_WORK_TYPE_EX_GPRS:
                case MACRO_NET_WORK_TYPE_EX_EDGE:
                case MACRO_NET_WORK_TYPE_EX_IS95A:
                case MACRO_NET_WORK_TYPE_EX_IS95B:
                case MACRO_NET_WORK_TYPE_EX_CDMA_1x:
                case MACRO_NET_WORK_TYPE_EX_HYBRID_CDMA_1x:
                    g_plmn_rat = isValidType(
                        g_networktype[
                            parseInt(
                                G_MonitoringStatus.response
                                    .CurrentNetworkTypeEx,
                                10
                            )
                        ],
                        plmn_label_2g
                    );
                    break;
                case MACRO_NET_WORK_TYPE_EX_EVDO_REV_0:
                case MACRO_NET_WORK_TYPE_EX_EVDO_REV_A:
                case MACRO_NET_WORK_TYPE_EX_EVDO_REV_B:
                case MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_0:
                case MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_A:
                case MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_B:
                case MACRO_NET_WORK_TYPE_EX_EHRPD_REL_0:
                case MACRO_NET_WORK_TYPE_EX_EHRPD_REL_A:
                case MACRO_NET_WORK_TYPE_EX_EHRPD_REL_B:
                case MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_0:
                case MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_A:
                case MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_B:
                case MACRO_NET_WORK_TYPE_EX_WCDMA:
                case MACRO_NET_WORK_TYPE_EX_HSDPA:
                case MACRO_NET_WORK_TYPE_EX_HSUPA:
                case MACRO_NET_WORK_TYPE_EX_HSPA:
                case MACRO_NET_WORK_TYPE_EX_HSPA_PLUS:
                case MACRO_NET_WORK_TYPE_EX_DC_HSPA_PLUS:
                case MACRO_NET_WORK_TYPE_EX_TD_SCDMA:
                case MACRO_NET_WORK_TYPE_EX_TD_HSDPA:
                case MACRO_NET_WORK_TYPE_EX_TD_HSUPA:
                case MACRO_NET_WORK_TYPE_EX_TD_HSPA:
                case MACRO_NET_WORK_TYPE_EX_TD_HSPA_PLUS:
                    g_plmn_rat = isValidType(
                        g_networktype[
                            parseInt(
                                G_MonitoringStatus.response
                                    .CurrentNetworkTypeEx,
                                10
                            )
                        ],
                        plmn_label_3g
                    );
                    break;
                case MACRO_NET_WORK_TYPE_EX_LTE:
                case MACRO_NET_WORK_TYPE_EX_LTE_PLUS:
                    g_plmn_rat = isValidType(
                        g_networktype[
                            parseInt(
                                G_MonitoringStatus.response
                                    .CurrentNetworkTypeEx,
                                10
                            )
                        ],
                        plmn_label_4g
                    );
                    break;
                default:
                    break;
            }
        } else {
            switch (G_MonitoringStatus.response.CurrentNetworkType) {
                case MACRO_NET_WORK_TYPE_GSM:
                case MACRO_NET_WORK_TYPE_GPRS:
                case MACRO_NET_WORK_TYPE_EDGE:
                case MACRO_NET_WORK_TYPE_1xRTT:
                case MACRO_NET_WORK_TYPE_1xEVDV:
                    g_plmn_rat = isValidType(
                        g_networktype[
                            parseInt(
                                G_MonitoringStatus.response.CurrentNetworkType,
                                10
                            )
                        ],
                        plmn_label_2g
                    );
                    break;
                case MACRO_NET_WORK_TYPE_WCDMA:
                case MACRO_NET_WORK_TYPE_TDSCDMA:
                case MACRO_NET_WORK_TYPE_EVDO_REV_0:
                case MACRO_NET_WORK_TYPE_EVDO_REV_A:
                case MACRO_NET_WORK_TYPE_EVDO_REV_B:
                case MACRO_NET_WORK_TYPE_HSDPA:
                case MACRO_NET_WORK_TYPE_HSUPA:
                case MACRO_NET_WORK_TYPE_HSPA:
                case MACRO_NET_WORK_TYPE_HSPA_PLUS:
                case MACRO_NET_WORK_TYPE_HSPA_PLUS_64QAM:
                case MACRO_NET_WORK_TYPE_HSPA_PLUS_MIMO:
                    g_plmn_rat = isValidType(
                        g_networktype[
                            parseInt(
                                G_MonitoringStatus.response.CurrentNetworkType,
                                10
                            )
                        ],
                        plmn_label_3g
                    );
                    break;
                case MACRO_NET_WORK_TYPE_LTE:
                    g_plmn_rat = isValidType(
                        g_networktype[
                            parseInt(
                                G_MonitoringStatus.response.CurrentNetworkType,
                                10
                            )
                        ],
                        plmn_label_4g
                    );
                    break;
                default:
                    break;
            }
        }
    }
    if (g_plmn_rat == "" || typeof g_plmn_rat == "undefined") {
        g_net_mode = dialup_label_no_service;
    } else {
        g_net_mode = g_plmn_rat;
    }
    return g_plmn_rat;
}
function getMainNetMode() {
    var newNetMode = null;
    if (
        typeof G_MonitoringStatus.response.CurrentNetworkTypeEx !=
            "undefined" &&
        G_MonitoringStatus.response.CurrentNetworkTypeEx != ""
    ) {
        switch (G_MonitoringStatus.response.CurrentNetworkTypeEx) {
            case MACRO_NET_WORK_TYPE_EX_IS95A:
            case MACRO_NET_WORK_TYPE_EX_IS95B:
            case MACRO_NET_WORK_TYPE_EX_CDMA_1x:
            case MACRO_NET_WORK_TYPE_EX_EVDO_REV_0:
            case MACRO_NET_WORK_TYPE_EX_EVDO_REV_A:
            case MACRO_NET_WORK_TYPE_EX_EVDO_REV_B:
            case MACRO_NET_WORK_TYPE_EX_HYBRID_CDMA_1x:
            case MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_0:
            case MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_A:
            case MACRO_NET_WORK_TYPE_EX_HYBRID_EVDO_REV_B:
            case MACRO_NET_WORK_TYPE_EX_EHRPD_REL_0:
            case MACRO_NET_WORK_TYPE_EX_EHRPD_REL_A:
            case MACRO_NET_WORK_TYPE_EX_EHRPD_REL_B:
            case MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_0:
            case MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_A:
            case MACRO_NET_WORK_TYPE_EX_HYBRID_EHRPD_REL_B:
                newNetMode = MACRO_NET_MODE_C;
                break;
            case MACRO_NET_WORK_TYPE_EX_GSM:
            case MACRO_NET_WORK_TYPE_EX_GPRS:
            case MACRO_NET_WORK_TYPE_EX_EDGE:
            case MACRO_NET_WORK_TYPE_EX_WCDMA:
            case MACRO_NET_WORK_TYPE_EX_HSDPA:
            case MACRO_NET_WORK_TYPE_EX_HSUPA:
            case MACRO_NET_WORK_TYPE_EX_HSPA:
            case MACRO_NET_WORK_TYPE_EX_HSPA_PLUS:
            case MACRO_NET_WORK_TYPE_EX_DC_HSPA_PLUS:
            case MACRO_NET_WORK_TYPE_EX_TD_SCDMA:
            case MACRO_NET_WORK_TYPE_EX_TD_HSDPA:
            case MACRO_NET_WORK_TYPE_EX_TD_HSUPA:
            case MACRO_NET_WORK_TYPE_EX_TD_HSPA:
            case MACRO_NET_WORK_TYPE_EX_TD_HSPA_PLUS:
            case MACRO_NET_WORK_TYPE_EX_LTE:
            case MACRO_NET_WORK_TYPE_EX_LTE_PLUS:
                newNetMode = MACRO_NET_MODE_W;
                break;
            default:
                break;
        }
    } else {
        switch (G_MonitoringStatus.response.CurrentNetworkType) {
            case MACRO_NET_WORK_TYPE_EVDO_REV_0:
            case MACRO_NET_WORK_TYPE_EVDO_REV_A:
            case MACRO_NET_WORK_TYPE_EVDO_REV_B:
            case MACRO_NET_WORK_TYPE_1xRTT:
            case MACRO_NET_WORK_TYPE_UMB:
            case MACRO_NET_WORK_TYPE_1xEVDV:
            case MACRO_NET_WORK_TYPE_3xRTT:
                newNetMode = MACRO_NET_MODE_C;
                break;
            case MACRO_NET_WORK_TYPE_GSM:
            case MACRO_NET_WORK_TYPE_GPRS:
            case MACRO_NET_WORK_TYPE_EDGE:
            case MACRO_NET_WORK_TYPE_WCDMA:
            case MACRO_NET_WORK_TYPE_HSDPA:
            case MACRO_NET_WORK_TYPE_HSUPA:
            case MACRO_NET_WORK_TYPE_HSPA:
            case MACRO_NET_WORK_TYPE_TDSCDMA:
            case MACRO_NET_WORK_TYPE_HSPA_PLUS:
            case MACRO_NET_WORK_TYPE_HSPA_PLUS_64QAM:
            case MACRO_NET_WORK_TYPE_HSPA_PLUS_MIMO:
            case MACRO_NET_WORK_TYPE_LTE:
                newNetMode = MACRO_NET_MODE_W;
                break;
            default:
                break;
        }
    }
    if (newNetMode != null) {
        if (g_net_mode_status != newNetMode) {
            if (
                g_net_mode_status == MACRO_NET_MODE_W ||
                g_net_mode_status == MACRO_NET_MODE_C
            ) {
                if (!g_judgeApplyFlag) {
                    showInfoDialog(IDS_common_netmode_change);
                } else {
                    g_judgeApplyFlag = false;
                }
            }
            g_net_mode_status = newNetMode;
            g_net_mode_change = MACRO_NET_MODE_CHANGE;
        }
    }
}
function resetNetModeChange() {
    g_net_mode_change = MACRO_NET_MODE_RESET;
}
function checkOffloadEnabled() {
    if (!checkValueIsNull(G_cradleStationStatus)) {
        setTimeout(checkOffloadEnabled, 50);
        return;
    }
    if (
        g_module.cradle_enabled &&
        CRADLE_NETLINE_EXIST == G_cradleStationStatus.cradlestatus &&
        ETHERNET_LAN_MODE != G_cradleStationStatus.connectionmode
    ) {
        var offload_disabled_start = IDS_function_disabled.replace(
            "%s1",
            "cradle"
        );
        var offload_disabled = offload_disabled_start.replace("%s2", "offload");
        showInfoDialog(offload_disabled, false, disableEntirePage);
    }
}
function checkValueIsNull(value) {
    if (value == null || typeof value == "undefined") {
        return false;
    } else {
        return true;
    }
}
function initialStatusIcon() {
    var corner = "";
    if (
        LANGUAGE_DATA.current_language == "ar_sa" ||
        LANGUAGE_DATA.current_language == "he_il" ||
        LANGUAGE_DATA.current_language == "fa_fa"
    ) {
        corner = {
            my: "topLeft",
            at: "bottomCenter",
        };
    } else {
        corner = {
            my: "topRight",
            at: "bottomCenter",
        };
    }
    addStatusListener("getIconStatus()");
    if (alreadyStatusListnerExecuted == "1") {
        getIconStatus();
    }
    if (g_module.sms_enabled) {
        $("#tooltip_sms").qtip({
            content:
                "<b>" +
                STATUS_BAR_ICON_STATUS.unread_sms_tooltip_state +
                "</b>",
            position: {
                corner: corner,
            },
            style: {
                classes: "qtip-sms",
            },
        });
    }
    if (g_module.online_update_enabled) {
        $("#tooltip_update").qtip({
            content: "<b>" + common_new_version + "</b>",
            position: {
                corner: corner,
            },
            style: {
                classes: "qtip-upd",
            },
        });
    }
    $("#sim_signal_gif").qtip({
        content:
            '<b style = "word-break:break-all;">' +
            STATUS_BAR_ICON_STATUS.sim_signal_tooltip_state +
            "</b>",
        position: {
            corner: corner,
        },
        style: {
            width: 130,
            classes: "qtip-sim",
        },
    });
    $("#wan_gif").qtip({
        content: "<b>" + STATUS_BAR_ICON_STATUS.wan_tooltip_state + "</b>",
        position: {
            corner: corner,
        },
        style: {
            classes: "qtip-wan",
        },
    });
    $("#wifi_gif").qtip({
        content: "<b>" + STATUS_BAR_ICON_STATUS.wifi_tooltip_state + "</b>",
        position: {
            corner: corner,
        },
        style: {
            classes: "qtip-wifi",
        },
    });
    $("#battery_gif").qtip({
        content: "<b>" + STATUS_BAR_ICON_STATUS.battery_tooltip_state + "</b>",
        position: {
            corner: corner,
        },
        style: {
            classes: "qtip-battery",
        },
    });
    $("#tooltip_sms_full").qtip({
        content: "<b>" + sms_message_full + "</b>",
        position: {
            corner: corner,
        },
        style: {
            classes: "qtip-sms_full",
        },
    });
    $("#station_gif").qtip({
        content: "<b>" + STATUS_BAR_ICON_STATUS.station_tooltip_state + "</b>",
        position: {
            corner: corner,
        },
        style: {
            classes: "qtip-station",
        },
    });
    $("#indoor_gif").qtip({
        content:
            "<b>" + STATUS_BAR_ICON_STATUS.wifi_indoor_tooltip_state + "</b>",
        position: {
            corner: corner,
        },
        style: {
            classes: "qtip-indoor",
        },
    });
    $("#bluetooth_gif").qtip({
        content:
            "<b>" + STATUS_BAR_ICON_STATUS.bluetooth_tooltip_state + "</b>",
        position: {
            corner: corner,
        },
        style: {
            classes: "qtip_bluetooth",
        },
    });
}
function refreshSimcardStatus() {
    getAjaxData("api/monitoring/converged-status", function ($xml) {
        var ret = xml2object($xml);
        if (ret.type == "response") {
            g_main_convergedStatus = ret.response;
        }
    });
    g_simcard_timer = setTimeout(refreshSimcardStatus, SIMCARD_STATUS_REFRESH);
}
function getIconStatus() {
    alreadyStatusListnerExecuted = "0";
    var g_connection_status = "0";
    var header_ret = G_MonitoringStatus;
    var station_ret = G_StationStatus;
    var g_cradle_change_status = "0";
    if (header_ret != null && header_ret.type == "response") {
        header_icon_status.ConnectionStatus =
            header_ret.response.ConnectionStatus;
        if (
            g_module.cradle_enabled &&
            checkValueIsNull(G_cradleStationStatus) &&
            CRADLE_NETLINE_EXIST == G_cradleStationStatus.cradlestatus &&
            ETHERNET_LAN_MODE != G_cradleStationStatus.connectionmode &&
            CRADLEAUTOMODE != G_cradleStationStatus.connectionmode
        ) {
            var cradle_ret = G_cradleStationStatus;
            header_icon_status.ConnectionStatus =
                G_cradleStationStatus.connectstatus;
        }
        if (
            typeof header_ret.response.SignalIcon != "undefined" ||
            header_ret.response.SignalIcon != null
        ) {
            header_icon_status.SignalStrength = header_ret.response.SignalIcon;
        } else {
            header_icon_status.SignalStrength = parseInt(
                header_ret.response.SignalStrength / 20,
                10
            ).toString();
        }
        header_icon_status.BatteryStatus = header_ret.response.BatteryStatus;
        header_icon_status.BatteryLevel = header_ret.response.BatteryLevel;
        header_icon_status.BatteryPercent = header_ret.response.BatteryPercent;
        header_icon_status.SimStatus = header_ret.response.SimStatus;
        header_icon_status.WifiStatus = header_ret.response.WifiStatus;
        header_icon_status.BatteryColumnDisplay =
            header_ret.response.BatteryColumnDisplay;
        header_icon_status.BluetoothStatus =
            header_ret.response.bluetooth_edr_switch;
        header_icon_status.BluetoothConnectNumber =
            header_ret.response.bluetooth_edr_currert_user;
        g_usbBattery_status = header_ret.response.usbup;
        if (g_needPinlock && g_main_convergedStatus.SimState == 255) {
            header_icon_status.SimStatus = 255;
        }
        if (
            typeof header_ret.response.CurrentNetworkTypeEx != "undefined" &&
            header_ret.response.CurrentNetworkTypeEx != ""
        ) {
            header_icon_status.CurrentNetworkType =
                header_ret.response.CurrentNetworkTypeEx;
        } else {
            header_icon_status.CurrentNetworkType =
                header_ret.response.CurrentNetworkType;
        }
        if (
            g_usbup != g_usbBattery_status ||
            ($.browser.msie && $.browser.version == "6.0") ||
            g_BatteryStatus != header_icon_status.BatteryStatus ||
            g_BatteryLevel != header_icon_status.BatteryLevel ||
            (g_coulometer_status == "1" &&
                g_BatteryPercent != header_icon_status.BatteryPercent) ||
            header_icon_status.BatteryColumnDisplay
        ) {
            if (g_BatteryStatus != header_icon_status.BatteryStatus) {
                if (g_coulometer_status == "1") {
                    g_coulometer_BatteryStatus = null;
                    g_BatteryLevel = header_icon_status.BatteryLevel;
                } else {
                    g_BatteryLevel = null;
                }
                g_BatteryStatus = header_icon_status.BatteryStatus;
            }
            switch (header_icon_status.BatteryStatus) {
                case MACRO_BATTERY_STATUS_NORMAL:
                    if (header_icon_status.BatteryColumnDisplay === "1") {
                        getBatteryLevel_529(header_icon_status.BatteryLevel);
                        if (
                            g_BatteryPercent !=
                                header_icon_status.BatteryPercent ||
                            g_coulometer_BatteryStatus !=
                                header_icon_status.BatteryStatus
                        ) {
                            g_BatteryPercent =
                                header_icon_status.BatteryPercent;
                            g_coulometer_BatteryStatus =
                                header_icon_status.BatteryStatus;
                        }
                        $("#battery_gif").show();
                        break;
                    }
                    if (
                        g_coulometer_status == "1" &&
                        (g_BatteryPercent !=
                            header_icon_status.BatteryPercent ||
                            g_coulometer_BatteryStatus !=
                                header_icon_status.BatteryStatus ||
                            g_usbup != g_usbBattery_status)
                    ) {
                        if (g_usbup != g_usbBattery_status) {
                            g_usbup = g_usbBattery_status;
                        }
                        g_BatteryPercent = header_icon_status.BatteryPercent;
                        g_coulometer_BatteryStatus =
                            header_icon_status.BatteryStatus;
                        getBatteryLevel(header_icon_status.BatteryPercent);
                    } else if (
                        ($.browser.msie && $.browser.version == "6.0") ||
                        g_BatteryLevel != header_icon_status.BatteryLevel ||
                        g_usbup != g_usbBattery_status
                    ) {
                        if (g_usbup != g_usbBattery_status) {
                            g_usbup = g_usbBattery_status;
                        }
                        g_BatteryLevel = header_icon_status.BatteryLevel;
                        getBatteryLevel(header_icon_status.BatteryLevel);
                    }
                    $("#battery_gif").show();
                    break;
                case MACRO_BATTERY_STATUS_LOW:
                    if (g_coulometer_status == "1") {
                        STATUS_BAR_ICON_STATUS.battery_tooltip_state =
                            header_icon_status.BatteryPercent + "%";
                    } else {
                        STATUS_BAR_ICON_STATUS.battery_tooltip_state =
                            battery_prower_low;
                    }
                    if (
                        null != g_lastBatteryStatus &&
                        MACRO_BATTERY_STATUS_LOW == g_lastBatteryStatus
                    ) {
                        break;
                    }
                    if (
                        g_usbBattery_status == "1" &&
                        header_icon_status.BatteryColumnDisplay !== "1"
                    ) {
                        $("#battery_gif").html(
                            '<img src="../res/usb_battery_low.gif" />'
                        );
                    } else {
                        $("#battery_gif").html(
                            '<img src="../res/battery_low.gif" />'
                        );
                    }
                    $("#battery_gif").show();
                    break;
                case MACRO_BATTERY_STATUS_ELECT:
                    if (g_coulometer_status == "1") {
                        STATUS_BAR_ICON_STATUS.battery_tooltip_state =
                            header_icon_status.BatteryPercent + "%";
                    } else {
                        STATUS_BAR_ICON_STATUS.battery_tooltip_state =
                            battery_recharging;
                    }
                    if (
                        null != g_lastBatteryStatus &&
                        MACRO_BATTERY_STATUS_ELECT == g_lastBatteryStatus
                    ) {
                        break;
                    }
                    if (
                        g_usbBattery_status == "1" ||
                        header_icon_status.BatteryColumnDisplay === "1"
                    ) {
                        $("#battery_gif").html(
                            '<img src="../res/usb_battery_elect.gif" />'
                        );
                    } else {
                        $("#battery_gif").html(
                            '<img src="../res/battery_elect.gif" />'
                        );
                    }
                    $("#battery_gif").show();
                    break;
                case MACRO_BATTERY_STATUS_NOBATTERY:
                    $("#battery_gif").hide();
                    STATUS_BAR_ICON_STATUS.battery_tooltip_state = "";
                    break;
                default:
                    $("#battery_gif").show();
                    if (g_coulometer_status == "1") {
                        getBatteryLevel(header_icon_status.BatteryPercent);
                    } else {
                        STATUS_BAR_ICON_STATUS.battery_tooltip_state =
                            common_battery;
                        if (
                            g_usbBattery_status == "1" &&
                            header_icon_status.BatteryColumnDisplay !== "1"
                        ) {
                            $("#battery_gif").html(
                                '<img src="../res/usb_battery_low.gif" />'
                            );
                        } else {
                            $("#battery_gif").html(
                                '<img src="../res/battery_low.gif" />'
                            );
                        }
                    }
                    break;
            }
            g_lastBatteryStatus = header_icon_status.BatteryStatus;
        }
        if (
            ($.browser.msie && $.browser.version == "6.0") ||
            g_WifiStatus != header_icon_status.WifiStatus
        ) {
            g_WifiStatus = header_icon_status.WifiStatus;
            switch (header_icon_status.WifiStatus) {
                case MACRO_WIFI_OFF:
                    $("#wifi_gif").html('<div class="wifi_0">&nbsp;</div>');
                    STATUS_BAR_ICON_STATUS.wifi_tooltip_state =
                        wlan_label_wlan_off;
                    break;
                case MACRO_WIFI_ON:
                    if (
                        typeof G_MonitoringStatus.response.wififrequence !=
                        undefined
                    ) {
                        if (
                            typeof g_wifiFeatureSwitch != "undefined" &&
                            WIFI5G_ON == g_wifiFeatureSwitch.wifi5g_enabled &&
                            G_MonitoringStatus.response.wififrequence ==
                                WIFI5G_ON
                        ) {
                            $("#wifi_gif").html(
                                '<div class="wifi_5G">&nbsp;</div>'
                            );
                        } else if (
                            typeof g_wifiFeatureSwitch != "undefined" &&
                            1 == g_wifiFeatureSwitch.wifi_dbdc_enable &&
                            G_MonitoringStatus.response.wififrequence ==
                                WIFIDBDC_ON
                        ) {
                            $("#wifi_gif").html(
                                '<div class="wifi_DBDC">&nbsp;</div>'
                            );
                        } else {
                            $("#wifi_gif").html(
                                '<div class="wifi_1">&nbsp;</div>'
                            );
                        }
                    } else {
                        if (
                            typeof g_wifiFeatureSwitch != "undefined" &&
                            WIFI5G_ON == g_wifiFeatureSwitch.wifi5g_enabled &&
                            g_wlanInfo.WifiMode == "a/n"
                        ) {
                            $("#wifi_gif").html(
                                '<div class="wifi_5G">&nbsp;</div>'
                            );
                        } else {
                            $("#wifi_gif").html(
                                '<div class="wifi_1">&nbsp;</div>'
                            );
                        }
                    }
                    STATUS_BAR_ICON_STATUS.wifi_tooltip_state =
                        wlan_label_wlan_on;
                    break;
                default:
                    $("#wifi_gif").html('<div class="wifi_0">&nbsp;</div>');
                    STATUS_BAR_ICON_STATUS.wifi_tooltip_state =
                        wlan_label_wlan_off;
                    break;
            }
        }
        if (
            g_WifiStatus == header_icon_status.WifiStatus &&
            MACRO_WIFI_ON == header_icon_status.WifiStatus
        ) {
            if (
                typeof G_MonitoringStatus.response.wififrequence != "undefined"
            ) {
                if (
                    wifi5g_icon_flag == "-1" &&
                    typeof g_wifiFeatureSwitch != "undefined" &&
                    WIFI5G_ON == g_wifiFeatureSwitch.wifi5g_enabled &&
                    G_MonitoringStatus.response.wififrequence == WIFI5G_ON
                ) {
                    $("#wifi_gif").html('<div class="wifi_5G">&nbsp;</div>');
                    wifi5g_icon_flag = 0;
                    wifion_icon_flag = -1;
                } else if (
                    typeof g_wifiFeatureSwitch != "undefined" &&
                    1 == g_wifiFeatureSwitch.wifi_dbdc_enable &&
                    G_MonitoringStatus.response.wififrequence == WIFIDBDC_ON
                ) {
                    $("#wifi_gif").html('<div class="wifi_DBDC">&nbsp;</div>');
                    wifi5g_icon_flag = -1;
                    wifion_icon_flag = -1;
                } else if (
                    wifion_icon_flag == "-1" &&
                    !(
                        typeof g_wifiFeatureSwitch != "undefined" &&
                        WIFI5G_ON == g_wifiFeatureSwitch.wifi5g_enabled &&
                        G_MonitoringStatus.response.wififrequence == WIFI5G_ON
                    )
                ) {
                    $("#wifi_gif").html('<div class="wifi_1">&nbsp;</div>');
                    wifion_icon_flag = 0;
                    wifi5g_icon_flag = -1;
                }
            } else {
                if (
                    wifi5g_icon_flag == "-1" &&
                    typeof g_wifiFeatureSwitch != "undefined" &&
                    WIFI5G_ON == g_wifiFeatureSwitch.wifi5g_enabled &&
                    g_wlanInfo.WifiMode == "a/n"
                ) {
                    $("#wifi_gif").html('<div class="wifi_5G">&nbsp;</div>');
                    wifi5g_icon_flag = 0;
                    wifion_icon_flag = -1;
                } else if (
                    wifion_icon_flag == "-1" &&
                    !(
                        typeof g_wifiFeatureSwitch != "undefined" &&
                        WIFI5G_ON == g_wifiFeatureSwitch.wifi5g_enabled &&
                        g_wlanInfo.WifiMode == "a/n"
                    )
                ) {
                    $("#wifi_gif").html('<div class="wifi_1">&nbsp;</div>');
                    wifion_icon_flag = 0;
                    wifi5g_icon_flag = -1;
                }
            }
            STATUS_BAR_ICON_STATUS.wifi_tooltip_state = wlan_label_wlan_on;
        }
        if (
            WIFI5G_ON == g_wifiFeatureSwitch.wifi5g_enabled &&
            typeof header_ret.response.wifiindooronly != "undefined"
        ) {
            if (
                g_WifiIndoorStatus != header_ret.response.wifiindooronly ||
                ($.browser.msie && $.browser.version == "6.0")
            ) {
                g_WifiIndoorStatus = header_ret.response.wifiindooronly;
                if (1 == header_ret.response.wifiindooronly) {
                    $("#indoor_gif").html(
                        '<div class="wifi_indoor">&nbsp;</div>'
                    );
                    STATUS_BAR_ICON_STATUS.wifi_indoor_tooltip_state =
                        wlan_label_5gWifi_indoor;
                    $("#indoor_gif").show();
                } else {
                    $("#indoor_gif").hide();
                }
            }
        } else {
            $("#indoor_gif").hide();
        }
        if (
            g_SimStatus != g_main_convergedStatus.SimState ||
            g_hSimStatus != header_icon_status.SimStatus
        ) {
            g_SimStatus = g_main_convergedStatus.SimState;
            g_hSimStatus = header_icon_status.SimStatus;
            sign_enable = 0;
            var simdisable = '<div class="sim_disable">&nbsp;</div>';
            if (MACRO_PIN_REQUIRED == g_main_convergedStatus.SimState) {
                $("#sim_signal_gif").html(simdisable);
                STATUS_BAR_ICON_STATUS.sim_signal_tooltip_state =
                    dialup_label_pin_code_required;
            } else if (MACRO_PUK_REQUIRED == g_main_convergedStatus.SimState) {
                if (PUK_TIMES_ZERO == g_pin_status_SimPukTimes) {
                    $("#sim_signal_gif").html(simdisable);
                    STATUS_BAR_ICON_STATUS.sim_signal_tooltip_state =
                        dialup_help_puk_locked;
                } else {
                    $("#sim_signal_gif").html(simdisable);
                    STATUS_BAR_ICON_STATUS.sim_signal_tooltip_state =
                        dialup_label_puk_code_required;
                }
            } else if (
                dialup_label_no_service == g_net_mode &&
                (MACRO_SIM_STATUS_USIM_N == header_icon_status.SimStatus ||
                    MACRO_SIM_STATUS_USIM_NE == header_icon_status.SimStatus)
            ) {
                $("#sim_signal_gif").html(simdisable);
                STATUS_BAR_ICON_STATUS.sim_signal_tooltip_state =
                    dialup_label_sim_invalid;
            } else if ("undefined" == header_icon_status.SimStatus) {
                $("#sim_signal_gif").html(simdisable);
                STATUS_BAR_ICON_STATUS.sim_signal_tooltip_state =
                    dialup_label_sim_invalid;
            } else if (header_icon_status.SimlockStatus) {
                $("#sim_signal_gif").html(simdisable);
                STATUS_BAR_ICON_STATUS.sim_signal_tooltip_state =
                    dialup_label_sim_invalid;
            } else {
                sign_enable = 1;
            }
        }
        if (sign_enable) {
            STATUS_BAR_ICON_STATUS.sim_signal_tooltip_state = g_net_mode;
            if (
                ($.browser.msie && $.browser.version == "6.0") ||
                (g_SignalStrength != header_icon_status.SignalStrength &&
                    SIMCARD_OK == sign_enable)
            ) {
                g_SignalStrength = header_icon_status.SignalStrength;
                switch (header_icon_status.SignalStrength) {
                    case MACRO_EVDO_LEVEL_ONE:
                        $("#sim_signal_gif").html(
                            '<div class="signal_1">&nbsp;</div>'
                        );
                        break;
                    case MACRO_EVDO_LEVEL_TWO:
                        $("#sim_signal_gif").html(
                            '<div class="signal_2">&nbsp;</div>'
                        );
                        break;
                    case MACRO_EVDO_LEVEL_THREE:
                        $("#sim_signal_gif").html(
                            '<div class="signal_3">&nbsp;</div>'
                        );
                        break;
                    case MACRO_EVDO_LEVEL_FOUR:
                        $("#sim_signal_gif").html(
                            '<div class="signal_4">&nbsp;</div>'
                        );
                        break;
                    case MACRO_EVDO_LEVEL_FIVE:
                        $("#sim_signal_gif").html(
                            '<div class="signal_5">&nbsp;</div>'
                        );
                        break;
                    default:
                        $("#sim_signal_gif").html(
                            '<div class="signal_0">&nbsp;</div>'
                        );
                        break;
                }
            }
            if (g_module.local_update_enabled) {
                $("#menu_update a").attr("href", "update.html");
                if (
                    g_module.cradle_enabled &&
                    checkValueIsNull(G_cradleStationStatus) &&
                    CRADLE_NETLINE_EXIST ==
                        G_cradleStationStatus.cradlestatus &&
                    G_cradleStationStatus.connectionmode != ETHERNET_LAN_MODE &&
                    (G_cradleStationStatus.connectstatus ==
                        CRADLE_CONNECTSTATUSNULL ||
                        G_cradleStationStatus.connectstatus ==
                            CRANDLE_CONNECTSTATUSERRO)
                ) {
                    $("#menu_update a").attr("href", "update_local.html");
                }
            }
        } else {
            if (
                g_module.local_update_enabled &&
                !(
                    G_MonitoringStatus.response.WifiConnectionStatus ==
                        WIFI_CONNECTED ||
                    (g_module.cradle_enabled &&
                        checkValueIsNull(G_cradleStationStatus) &&
                        CRADLE_NETLINE_EXIST ==
                            G_cradleStationStatus.cradlestatus &&
                        G_cradleStationStatus.connectionmode !=
                            ETHERNET_LAN_MODE &&
                        G_cradleStationStatus.connectstatus !=
                            CRADLE_CONNECTSTATUSNULL &&
                        G_cradleStationStatus.connectstatus !=
                            CRANDLE_CONNECTSTATUSERRO)
                )
            ) {
                $("#menu_update a").attr("href", "update_local.html");
                if (g_not_need_login_update) {
                    $("#menu_update").live("click", function () {
                        if (!g_needToLogin) {
                            return;
                        }
                        g_nav = $(this);
                        if (
                            g_nav.parent().attr("id") ==
                                "menu_connection_settings" ||
                            g_nav.parent().attr("id") == "profile_settings"
                        ) {
                            g_nav = g_nav.parent();
                        }
                        getAjaxData(
                            "api/user/state-login",
                            function ($xml) {
                                var ret = xml2object($xml);
                                if (ret.type == "response") {
                                    if (ret.response.State != "0") {
                                        if (
                                            G_SUPER_USERNAME ==
                                            ret.response.Username
                                        ) {
                                            g_default_password_status = 1;
                                        } else {
                                            g_default_password_status =
                                                parseInt(
                                                    ret.response.firstlogin,
                                                    10
                                                );
                                        }
                                        if (g_default_password_status == 0) {
                                            g_destnation = null;
                                        } else {
                                            g_destnation = g_nav
                                                .children()
                                                .first()
                                                .attr("href");
                                        }
                                        g_nav
                                            .children()
                                            .first()
                                            .attr(
                                                "href",
                                                "javascript:void(0);"
                                            );
                                        showloginDialog();
                                    }
                                }
                            },
                            {
                                sync: true,
                            }
                        );
                    });
                }
            }
        }
    }
    if (g_module.online_update_enabled) {
        if (
            g_NotificationsOnlineUpdateStatus !=
            G_NotificationsStatus.OnlineUpdateStatus
        ) {
            g_NotificationsOnlineUpdateStatus =
                G_NotificationsStatus.OnlineUpdateStatus;
            if (
                G_NotificationsStatus.OnlineUpdateStatus ==
                    MACRO_NEWVERSIONFOUND ||
                G_NotificationsStatus.OnlineUpdateStatus == MACRO_READYTOUPDATE
            ) {
                $("#update_gif").css({
                    display: "block",
                });
                $("#tooltip_update").html(
                    "<img src = '../res/update_enable.gif'>"
                );
            } else {
                $("#update_gif").css({
                    display: "none",
                });
                $("#tooltip_update").html(
                    "<img src = '../res/update_disable.gif'>"
                );
            }
        }
    }
    if (
        g_module.bt_enabled &&
        BLUETOOTH_ON == header_icon_status.BluetoothStatus
    ) {
        STATUS_BAR_ICON_STATUS.bluetooth_tooltip_state =
            IDS_bluetooth_icon_name;
        if (
            BLUETOOTH_CONNECT_NUMBER_1 ==
            header_icon_status.BluetoothConnectNumber
        ) {
            $("#bluetooth_gif").html("<img src = '../res/bluetooth_1.png'>");
        } else if (
            BLUETOOTH_CONNECT_NUMBER_2 ==
            header_icon_status.BluetoothConnectNumber
        ) {
            $("#bluetooth_gif").html("<img src = '../res/bluetooth_2.png'>");
        } else if (
            BLUETOOTH_CONNECT_NUMBER_3 ==
            header_icon_status.BluetoothConnectNumber
        ) {
            $("#bluetooth_gif").html("<img src = '../res/bluetooth_3.png'>");
        } else {
            $("#bluetooth_gif").html("<img src = '../res/bluetooth_0.png'>");
        }
        $("#bluetooth_gif").show();
    } else {
        $("#bluetooth_gif").hide();
    }
    function ap_station_disabled() {
        switch (header_icon_status.ConnectionStatus) {
            case MACRO_CONNECTION_CONNECTED:
                g_connection_status = "1";
                var CurrentUpload = "";
                var CurrentDownload = "";
                if (
                    ($.browser.msie && $.browser.version == "6.0") ||
                    $("#wan_gif").html().indexOf("wan_disable") < 0
                ) {
                    STATUS_BAR_ICON_STATUS.wan_tooltip_state =
                        dialup_label_wan_connect;
                }
                $("#wan_gif").show();
                getAjaxData(
                    "api/monitoring/traffic-statistics",
                    function ($xml) {
                        var ret = xml2object($xml);
                        if (ret.type == "response") {
                            CurrentUpload = ret.response.CurrentUpload;
                            CurrentDownload = ret.response.CurrentDownload;
                            if (
                                wanUpload != "" &&
                                wanUpload != null &&
                                wanDownload != "" &&
                                wanDownload != null
                            ) {
                                if (
                                    wanUpload != CurrentUpload &&
                                    CurrentDownload == wanDownload
                                ) {
                                    if (g_up_connection_status == "0") {
                                        $("#wan_gif").html(
                                            '<div class="wan_up">&nbsp;</div>'
                                        );
                                        g_disable_connection_status = "0";
                                        g_up_down_connection_status = "0";
                                        g_up_connection_status = "1";
                                        g_down_connection_status = "0";
                                    }
                                    STATUS_BAR_ICON_STATUS.wan_tooltip_state =
                                        dialup_label_wan_connect;
                                } else if (
                                    wanUpload == CurrentUpload &&
                                    CurrentDownload != wanDownload
                                ) {
                                    if (g_down_connection_status == "0") {
                                        $("#wan_gif").html(
                                            '<div class="wan_down">&nbsp;</div>'
                                        );
                                        g_disable_connection_status = "0";
                                        g_up_down_connection_status = "0";
                                        g_up_connection_status = "0";
                                        g_down_connection_status = "1";
                                    }
                                    STATUS_BAR_ICON_STATUS.wan_tooltip_state =
                                        dialup_label_wan_connect;
                                } else if (
                                    wanUpload != CurrentUpload &&
                                    CurrentDownload != wanDownload
                                ) {
                                    if (g_up_down_connection_status == "0") {
                                        $("#wan_gif").html(
                                            '<div class="wan_up_down">&nbsp;</div>'
                                        );
                                        g_disable_connection_status = "0";
                                        g_up_down_connection_status = "1";
                                        g_up_connection_status = "0";
                                        g_down_connection_status = "0";
                                    }
                                    STATUS_BAR_ICON_STATUS.wan_tooltip_state =
                                        dialup_label_wan_connect;
                                } else if (
                                    wanUpload == CurrentUpload &&
                                    CurrentDownload == wanDownload
                                ) {
                                    if (g_disable_connection_status == "0") {
                                        $("#wan_gif").html(
                                            '<div class="wan_disable">&nbsp;</div>'
                                        );
                                        g_disable_connection_status = "1";
                                        g_up_connection_status = "0";
                                        g_down_connection_status = "0";
                                        g_up_down_connection_status = "0";
                                    }
                                }
                                wanUpload = CurrentUpload;
                                wanDownload = CurrentDownload;
                            } else {
                                if (g_disable_connection_status == "0") {
                                    $("#wan_gif").html(
                                        '<div class="wan_disable">&nbsp;</div>'
                                    );
                                    g_disable_connection_status = "1";
                                    g_up_connection_status = "0";
                                    g_down_connection_status = "0";
                                    g_up_down_connection_status = "0";
                                }
                                wanUpload = CurrentUpload;
                                wanDownload = CurrentDownload;
                            }
                        }
                    }
                );
                STATUS_BAR_ICON_STATUS.wan_tooltip_state =
                    dialup_label_wan_connect;
                break;
            default:
                STATUS_BAR_ICON_STATUS.wan_tooltip_state =
                    dialup_label_wan_disconnect;
                break;
        }
    }
    if (
        WIFI_CONNECTED == G_MonitoringStatus.response.WifiConnectionStatus &&
        g_module.wifioffload_enable
    ) {
        if (station_ret != null && station_ret.type == "response") {
            g_connection_status = "1";
            var wifiCurrentUpload = "";
            var wifiCurrentDownload = "";
            if (
                ($.browser.msie && $.browser.version == "6.0") ||
                $("#wan_gif").html().indexOf("wan_disable") < 0
            ) {
                STATUS_BAR_ICON_STATUS.wan_tooltip_state =
                    dialup_label_wan_connect;
            }
            $("#wan_gif").show();
            getAjaxData("api/wlan/station-information", function ($xml) {
                var ret = xml2object($xml);
                G_StationStatus = ret;
                if (ret.type == "response") {
                    wifiCurrentUpload = ret.response.TxFlux;
                    wifiCurrentDownload = ret.response.RxFlux;
                    if (wifiUpload != "" && wifiDownload != "") {
                        if (
                            wifiUpload != wifiCurrentUpload &&
                            wifiCurrentDownload == wifiDownload
                        ) {
                            if (g_up_connection_status == "0") {
                                $("#wan_gif").html(
                                    '<div class="wan_up">&nbsp;</div>'
                                );
                                g_disable_connection_status = "0";
                                g_up_down_connection_status = "0";
                                g_up_connection_status = "1";
                                g_down_connection_status = "0";
                            }
                            STATUS_BAR_ICON_STATUS.wan_tooltip_state =
                                dialup_label_wan_connect;
                        } else if (
                            wifiUpload == wifiCurrentUpload &&
                            wifiCurrentDownload != wifiDownload
                        ) {
                            if (g_down_connection_status == "0") {
                                $("#wan_gif").html(
                                    '<div class="wan_down">&nbsp;</div>'
                                );
                                g_disable_connection_status = "0";
                                g_up_down_connection_status = "0";
                                g_up_connection_status = "0";
                                g_down_connection_status = "1";
                            }
                            STATUS_BAR_ICON_STATUS.wan_tooltip_state =
                                dialup_label_wan_connect;
                        } else if (
                            wifiUpload != wifiCurrentUpload &&
                            wifiCurrentDownload != wifiDownload
                        ) {
                            if (g_up_down_connection_status == "0") {
                                $("#wan_gif").html(
                                    '<div class="wan_up_down">&nbsp;</div>'
                                );
                                g_up_down_connection_status = "1";
                                g_disable_connection_status = "0";
                                g_up_connection_status = "0";
                                g_down_connection_status = "0";
                            }
                            STATUS_BAR_ICON_STATUS.wan_tooltip_state =
                                dialup_label_wan_connect;
                        } else if (
                            wifiUpload == wifiCurrentUpload &&
                            wifiCurrentDownload == wifiDownload
                        ) {
                            if (g_disable_connection_status == "0") {
                                $("#wan_gif").html(
                                    '<div class="wan_disable">&nbsp;</div>'
                                );
                                g_disable_connection_status = "1";
                                g_up_down_connection_status = "0";
                                g_up_connection_status = "0";
                                g_down_connection_status = "0";
                            }
                        }
                        wifiUpload = wifiCurrentUpload;
                        wifiDownload = wifiCurrentDownload;
                    } else {
                        if (g_disable_connection_status == "0") {
                            $("#wan_gif").html(
                                '<div class="wan_disable">&nbsp;</div>'
                            );
                            g_disable_connection_status = "1";
                            g_up_down_connection_status = "0";
                            g_up_connection_status = "0";
                            g_down_connection_status = "0";
                        }
                        wifiUpload = wifiCurrentUpload;
                        wifiDownload = wifiCurrentDownload;
                    }
                }
            });
            var apSignal = setWifiSignal(station_ret.response.SignalStrength);
            var classname = "station_" + apSignal;
            if (
                ($.browser.msie && $.browser.version == "6.0") ||
                typeof $("#station_gif").html() == "undefined" ||
                $("#station_gif").html().indexOf(classname) < 0
            ) {
                if (apSignal == "0.1") {
                    $("#station_gif").html(
                        '<div class="station_0_1">&nbsp;</div>'
                    );
                } else if (apSignal == "0") {
                    $("#station_gif").html(
                        '<div class="station_0">&nbsp;</div>'
                    );
                } else if (apSignal == "1") {
                    $("#station_gif").html(
                        '<div class="station_1">&nbsp;</div>'
                    );
                } else if (apSignal == "2") {
                    $("#station_gif").html(
                        '<div class="station_2">&nbsp;</div>'
                    );
                } else if (apSignal == "3") {
                    $("#station_gif").html(
                        '<div class="station_3">&nbsp;</div>'
                    );
                } else if (apSignal == "4") {
                    $("#station_gif").html(
                        '<div class="station_4">&nbsp;</div>'
                    );
                }
            }
            $("#station_gif").show();
        } else {
            $("#station_gif").hide();
            ap_station_disabled();
        }
        g_Monitoring_CradleConnectionStatus = -1111;
    } else if (
        g_module.cradle_enabled &&
        checkValueIsNull(G_cradleStationStatus) &&
        CRADLE_NETLINE_EXIST == G_cradleStationStatus.cradlestatus &&
        ETHERNET_LAN_MODE != G_cradleStationStatus.connectionmode
    ) {
        if (
            ($.browser.msie && $.browser.version == "6.0") ||
            g_Monitoring_CradleConnectionStatus !=
                G_cradleStationStatus.cradlestatus
        ) {
            g_Monitoring_CradleConnectionStatus =
                G_cradleStationStatus.cradlestatus;
            $("#station_gif").html('<div class="cradle_1">&nbsp;</div>');
            $("#station_gif").show();
            STATUS_BAR_ICON_STATUS.station_tooltip_state = IDS_plmn_label_wx;
            g_cradle_change_status = "1";
            if (G_cradleStationStatus.connectstatus == CRADLE_CONNECTED) {
                g_connection_status = "1";
                $("#wan_gif").show();
                if (g_up_down_connection_status == "0") {
                    $("#wan_gif").html('<div class="wan_up_down">&nbsp;</div>');
                    g_up_down_connection_status = "1";
                    g_disable_connection_status = "0";
                    g_up_connection_status = "0";
                    g_down_connection_status = "0";
                }
                STATUS_BAR_ICON_STATUS.wan_tooltip_state =
                    dialup_label_wan_connect;
            } else {
                ap_station_disabled();
            }
        } else {
            if (
                checkValueIsNull(G_cradleStationStatus) &&
                G_cradleStationStatus.connectstatus == CRADLE_CONNECTED
            ) {
                g_connection_status = "1";
                $("#wan_gif").show();
                if (g_up_down_connection_status == "0") {
                    $("#wan_gif").html('<div class="wan_up_down">&nbsp;</div>');
                    g_up_down_connection_status = "1";
                    g_disable_connection_status = "0";
                    g_up_connection_status = "0";
                    g_down_connection_status = "0";
                }
                STATUS_BAR_ICON_STATUS.wan_tooltip_state =
                    dialup_label_wan_connect;
            }
            g_Monitoring_CradleConnectionStatus =
                G_cradleStationStatus.cradlestatus;
        }
    } else {
        g_Monitoring_CradleConnectionStatus = -1111;
        $("#station_gif").hide();
        ap_station_disabled();
    }
    if (G_cradleStationStatus != null) {
        if (
            g_module.cradle_enabled &&
            G_cradleStationStatus.cradlestatus == 1 &&
            (G_cradleStationStatus.connectionmode == 0 ||
                G_cradleStationStatus.connectionmode == 1) &&
            g_cradle_change_status == "0"
        ) {
            if (G_cradleStationStatus.connectstatus == CRADLE_CONNECTFAILED) {
                $("#station_gif").html('<div class="cradle_1">&nbsp;</div>');
            } else {
                $("#station_gif").html(
                    "<img onload = 'fixPNG(this)' src = '../res/cradle_twinkle.gif' 0 0 no-repeat>"
                );
                g_Monitoring_CradleConnectionStatus = -1111;
            }
            $("#station_gif").show();
            STATUS_BAR_ICON_STATUS.station_tooltip_state = IDS_plmn_label_wx;
        }
    }
    if (g_connection_status == "0") {
        $("#wan_gif").hide();
    }
    var unreadSmsSize = G_NotificationsStatus.UnreadMessage;
    STATUS_BAR_ICON_STATUS.unread_sms_tooltip_state =
        common_new_message + unreadSmsSize;
    changeTooltipContent();
}
function getBatteryLevel(str) {
    if (g_usbBattery_status == "1") {
        if (g_coulometer_status == "1") {
            STATUS_BAR_ICON_STATUS.battery_tooltip_state = str + "%";
            var strTemp = parseInt(str, 10);
            if (0 < strTemp && strTemp <= 10) {
                $("#battery_gif").html(
                    "<img onload = 'fixPNG(this)' src = '../res/usb_battery_level_1.png' 0 0 no-repeat>"
                );
            } else if (10 < strTemp && strTemp <= 23) {
                $("#battery_gif").html(
                    "<img onload = 'fixPNG(this)' src = '../res/usb_battery_level_2.png' 0 0 no-repeat>"
                );
            } else if (23 < strTemp && strTemp <= 34) {
                $("#battery_gif").html(
                    "<img onload = 'fixPNG(this)' src = '../res/usb_battery_level_3.png' 0 0 no-repeat>"
                );
            } else if (34 < strTemp && strTemp <= 45) {
                $("#battery_gif").html(
                    "<img onload = 'fixPNG(this)' src = '../res/usb_battery_level_4.png' 0 0 no-repeat>"
                );
            } else if (45 < strTemp && strTemp <= 56) {
                $("#battery_gif").html(
                    "<img onload = 'fixPNG(this)' src = '../res/usb_battery_level_5.png' 0 0 no-repeat>"
                );
            } else if (56 < strTemp && strTemp <= 67) {
                $("#battery_gif").html(
                    "<img onload = 'fixPNG(this)' src = '../res/usb_battery_level_6.png' 0 0 no-repeat>"
                );
            } else if (67 < strTemp && strTemp <= 78) {
                $("#battery_gif").html(
                    "<img onload = 'fixPNG(this)' src = '../res/usb_battery_level_7.png' 0 0 no-repeat>"
                );
            } else if (78 < strTemp && strTemp <= 89) {
                $("#battery_gif").html(
                    "<img onload = 'fixPNG(this)' src = '../res/usb_battery_level_8.png' 0 0 no-repeat>"
                );
            } else if (89 < strTemp && strTemp <= 100) {
                $("#battery_gif").html(
                    "<img onload = 'fixPNG(this)' src = '../res/usb_battery_level_9.png' 0 0 no-repeat>"
                );
            } else {
                $("#battery_gif").html(
                    "<img onload = 'fixPNG(this)' src = '../res/usb_battery_level_0.png' 0 0 no-repeat>"
                );
            }
        } else {
            switch (str) {
                case MACRO_BATTERY_LEVEL_ONE:
                case MACRO_BATTERY_LEVEL_TWO:
                case MACRO_BATTERY_LEVEL_THREE:
                    var temp = (parseInt(str, 10) * 2).toString();
                    $("#battery_gif").html(
                        "<img onload = 'fixPNG(this)' src = '../res/usb_battery_level_" +
                            temp +
                            ".png' 0 0 no-repeat>"
                    );
                    break;
                case MACRO_BATTERY_LEVEL_FOUR:
                    $("#battery_gif").html(
                        "<img onload = 'fixPNG(this)' src = '../res/usb_battery_level_9.png' 0 0 no-repeat>"
                    );
                    break;
                default:
                    $("#battery_gif").html(
                        "<img onload = 'fixPNG(this)' src = '../res/usb_battery_level_" +
                            str +
                            ".png' 0 0 no-repeat>"
                    );
                    break;
            }
            STATUS_BAR_ICON_STATUS.battery_tooltip_state = common_battery;
        }
    } else {
        if (g_coulometer_status == "1") {
            STATUS_BAR_ICON_STATUS.battery_tooltip_state = str + "%";
            var strTemp = parseInt(str, 10);
            if (0 < strTemp && strTemp <= 10) {
                $("#battery_gif").html(
                    '<div class="battery_level_1">&nbsp;</div>'
                );
            } else if (10 < strTemp && strTemp <= 23) {
                $("#battery_gif").html(
                    '<div class="battery_level_2">&nbsp;</div>'
                );
            } else if (23 < strTemp && strTemp <= 34) {
                $("#battery_gif").html(
                    '<div class="battery_level_3">&nbsp;</div>'
                );
            } else if (34 < strTemp && strTemp <= 45) {
                $("#battery_gif").html(
                    '<div class="battery_level_4">&nbsp;</div>'
                );
            } else if (45 < strTemp && strTemp <= 56) {
                $("#battery_gif").html(
                    '<div class="battery_level_5">&nbsp;</div>'
                );
            } else if (56 < strTemp && strTemp <= 67) {
                $("#battery_gif").html(
                    '<div class="battery_level_6">&nbsp;</div>'
                );
            } else if (67 < strTemp && strTemp <= 78) {
                $("#battery_gif").html(
                    '<div class="battery_level_7">&nbsp;</div>'
                );
            } else if (78 < strTemp && strTemp <= 89) {
                $("#battery_gif").html(
                    '<div class="battery_level_8">&nbsp;</div>'
                );
            } else if (89 < strTemp && strTemp <= 100) {
                $("#battery_gif").html(
                    '<div class="battery_level_9">&nbsp;</div>'
                );
            } else {
                $("#battery_gif").html(
                    '<div class="battery_level_0">&nbsp;</div>'
                );
            }
        } else {
            switch (str) {
                case MACRO_BATTERY_LEVEL_ONE:
                case MACRO_BATTERY_LEVEL_TWO:
                case MACRO_BATTERY_LEVEL_THREE:
                    var temp = (parseInt(str, 10) * 2).toString();
                    if (temp == "2") {
                        $("#battery_gif").html(
                            '<div class="battery_level_2">&nbsp;</div>'
                        );
                    } else if (temp == "4") {
                        $("#battery_gif").html(
                            '<div class="battery_level_4">&nbsp;</div>'
                        );
                    } else if (temp == "6") {
                        $("#battery_gif").html(
                            '<div class="battery_level_6">&nbsp;</div>'
                        );
                    }
                    break;
                case MACRO_BATTERY_LEVEL_FOUR:
                    $("#battery_gif").html(
                        '<div class="battery_level_9">&nbsp;</div>'
                    );
                    break;
                default:
                    if (str == "5") {
                        $("#battery_gif").html(
                            '<div class="battery_level_5">&nbsp;</div>'
                        );
                    } else if (str == "6") {
                        $("#battery_gif").html(
                            '<div class="battery_level_6">&nbsp;</div>'
                        );
                    } else if (str == "7") {
                        $("#battery_gif").html(
                            '<div class="battery_level_7">&nbsp;</div>'
                        );
                    } else if (str == "8") {
                        $("#battery_gif").html(
                            '<div class="battery_level_8">&nbsp;</div>'
                        );
                    } else if (str == "9") {
                        $("#battery_gif").html(
                            '<div class="battery_level_9">&nbsp;</div>'
                        );
                    } else {
                        $("#battery_gif").html(
                            '<div class="battery_level_0">&nbsp;</div>'
                        );
                    }
                    break;
            }
            STATUS_BAR_ICON_STATUS.battery_tooltip_state = common_battery;
        }
    }
}
function getBatteryLevel_529(str) {
    if (g_coulometer_status == "1") {
        STATUS_BAR_ICON_STATUS.battery_tooltip_state = str + "%";
    } else {
        STATUS_BAR_ICON_STATUS.battery_tooltip_state = common_battery;
    }
    if (!str) {
        return;
    }
    switch (str) {
        case MACRO_BATTERY_LEVEL_ONE:
            $("#battery_gif").html(
                "<img onload = 'fixPNG(this)' src = '../res/B529_battery_level_1.png' 0 0 no-repeat>"
            );
            break;
        case MACRO_BATTERY_LEVEL_TWO:
            $("#battery_gif").html(
                "<img onload = 'fixPNG(this)' src = '../res/B529_battery_level_2.png' 0 0 no-repeat>"
            );
            break;
        case MACRO_BATTERY_LEVEL_THREE:
            $("#battery_gif").html(
                "<img onload = 'fixPNG(this)' src = '../res/B529_battery_level_3.png' 0 0 no-repeat>"
            );
            break;
        case MACRO_BATTERY_LEVEL_FOUR:
            $("#battery_gif").html(
                "<img onload = 'fixPNG(this)' src = '../res/B529_battery_level_4.png' 0 0 no-repeat>"
            );
            break;
        default:
            $("#battery_gif").html(
                "<img onload = 'fixPNG(this)' src = '../res/battery_low.gif' 0 0 no-repeat>"
            );
            break;
    }
}
function changeTooltipContent() {
    $(".qtip-sim")
        .find(".qtip-content")
        .html("<b>" + STATUS_BAR_ICON_STATUS.sim_signal_tooltip_state + "</b>");
    $(".qtip-station")
        .find(".qtip-content")
        .html("<b>" + STATUS_BAR_ICON_STATUS.station_tooltip_state + "</b>");
    $(".qtip-wan")
        .find(".qtip-content")
        .html("<b>" + STATUS_BAR_ICON_STATUS.wan_tooltip_state + "</b>");
    $(".qtip-wifi")
        .find(".qtip-content")
        .html("<b>" + STATUS_BAR_ICON_STATUS.wifi_tooltip_state + "</b>");
    $(".qtip-battery")
        .find(".qtip-content")
        .html("<b>" + STATUS_BAR_ICON_STATUS.battery_tooltip_state + "</b>");
    $(".qtip-indoor")
        .find(".qtip-content")
        .html(
            "<b>" + STATUS_BAR_ICON_STATUS.wifi_indoor_tooltip_state + "</b>"
        );
    $(".qtip-sms")
        .find(".qtip-content")
        .html("<b>" + STATUS_BAR_ICON_STATUS.unread_sms_tooltip_state + "</b>");
    $(".qtip-bluetooth")
        .find(".qtip-content")
        .html("<b>" + STATUS_BAR_ICON_STATUS.bluetooth_tooltip_state + "</b>");
}
function addStatusListener(funName) {
    STATUS_LISTENER_FUN_LIST.push(funName);
    var n = navigator.userAgent;
    if (/Firefox/.test(n) && funName == "index_updatePageStatusListener()") {
        eval(funName);
    } else {
        if (DATA_READY.statusReady && DATA_READY.notificationsReady) {
            eval(funName);
        }
    }
}
function base64encode(str) {
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += g_base64EncodeChars.charAt(c1 >> 2);
            out += g_base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += g_base64EncodeChars.charAt(c1 >> 2);
            out += g_base64EncodeChars.charAt(
                ((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4)
            );
            out += g_base64EncodeChars.charAt((c2 & 0xf) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += g_base64EncodeChars.charAt(c1 >> 2);
        out += g_base64EncodeChars.charAt(
            ((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4)
        );
        out += g_base64EncodeChars.charAt(
            ((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6)
        );
        out += g_base64EncodeChars.charAt(c3 & 0x3f);
    }
    return out;
}
function _utf8_encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
            utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        } else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }
    }
    return utftext;
}
function base64_encode(input) {
    _keyStr =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = _utf8_encode(input);
    while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }
        output =
            output +
            this._keyStr.charAt(enc1) +
            this._keyStr.charAt(enc2) +
            this._keyStr.charAt(enc3) +
            this._keyStr.charAt(enc4);
    }
    return output;
}
function validateInput(username, password) {
    clearAllErrorLabel();
    var validate = true;
    if (username == "") {
        showErrorUnderTextbox("username", settings_hint_user_name_empty);
        $("#username").focus();
        $("#username").val("");
        return false;
    }
    if (password == "" && username != "") {
        showErrorUnderTextbox(
            "forget_password_tab",
            dialup_hint_password_empty
        );
        $("#password").focus();
        $("#password").val("");
        return false;
    }
    if (!checkInputChar(username)) {
        showErrorUnderTextbox(
            "forget_password_tab",
            IDS_login_username_password_wrong
        );
        $("#username").focus();
        $("#username").val("");
        $("#password").val("");
        return false;
    }
    return validate;
}
function loginToQuicksetup() {
    getAjaxData(
        "api/user/state-login",
        function ($xml) {
            var ret = xml2object($xml);
            if (ret.type == "response") {
                g_username_default = ret.response.Username;
            }
        },
        {
            sync: true,
        }
    );
    if (current_href == "quicksetup") {
        if (G_SUPER_USERNAME == g_username_default) {
            gotoPageWithoutHistory("dhcp.html");
        }
    }
}

function login(destnation, callback, redirectDes) {
    var name = $.trim($("#username").val());
    var psd = $("#password").val();
    var valid = validateInput(name, psd);
    if (!valid) {
        return;
    }
    g_currentPassword = psd;
    refreshToken();
    if (g_scarm_login) {
        if ($.isArray(g_requestVerificationToken)) {
            if (g_requestVerificationToken.length <= 0) {
                setTimeout(function () {
                    if (g_requestVerificationToken.length > 0) {
                        login(destnation, callback, redirectDes);
                    }
                }, 50);
                return;
            }
        }
        var scram = CryptoJS.SCRAM();
        var firstNonce = scram.nonce().toString();
        var firstPostData = {
            username: name,
            firstnonce: firstNonce,
            mode: RSA_LOGIN_MODE,
        };
        var firstXml = object2xml("request", firstPostData);
        saveAjaxData("api/user/challenge_login", firstXml, function ($xml) {
            var ret = xml2object($xml);
            if (ret.type == "response") {
                var salt = CryptoJS.enc.Hex.parse(ret.response.salt);
                var iter = ret.response.iterations;
                var finalNonce = ret.response.servernonce;
                var authMsg = firstNonce + "," + finalNonce + "," + finalNonce;
                var saltPassword = scram
                    .saltedPassword(psd, salt, iter)
                    .toString();
                var clientProof = scram.clientProof(psd, salt, iter, authMsg);
                var serverKey = scram
                    .serverKey(CryptoJS.enc.Hex.parse(saltPassword))
                    .toString();
                var finalPostData = {
                    clientproof: clientProof,
                    finalnonce: finalNonce,
                };
                if (ret.response.newType && ret.response.newType == "1") {
                    var newSalt = CryptoJS.enc.Hex.parse(ret.response.newSalt);
                    var newIter = ret.response.newIterations;
                    var newSaltPassword = scram
                        .saltedPassword(psd, newSalt, newIter)
                        .toString();
                    var newStoredKey = scram
                        .storedKey(
                            scram.clientKey(
                                CryptoJS.enc.Hex.parse(newSaltPassword)
                            )
                        )
                        .toString();
                    var newServerKey = scram
                        .serverKey(CryptoJS.enc.Hex.parse(newSaltPassword))
                        .toString();
                    var hashOldNewPwd = SHA256(
                        newStoredKey + newServerKey + clientProof
                    );
                    finalPostData = {
                        clientproof: clientProof,
                        finalnonce: finalNonce,
                        hashOldNewPwd: hashOldNewPwd,
                        newStoredKey: newStoredKey,
                        newServerKey: newServerKey,
                    };
                }
                var finalXml = object2xml("request", finalPostData);
                saveAjaxData(
                    "api/user/authentication_login",
                    finalXml,
                    function ($xml) {
                        ret = xml2object($xml);
                        if (ret.type == "response") {
                            var serverProof = scram.serverProof(
                                psd,
                                salt,
                                iter,
                                authMsg
                            );
                            if (ret.response.serversignature == serverProof) {
                                var publicKeySignature = scram
                                    .signature(
                                        CryptoJS.enc.Hex.parse(
                                            ret.response.rsan
                                        ),
                                        CryptoJS.enc.Hex.parse(serverKey)
                                    )
                                    .toString();
                                if (
                                    ret.response.rsapubkeysignature ==
                                    publicKeySignature
                                ) {
                                    g_encPublickey.e = ret.response.rsae;
                                    g_encPublickey.n = ret.response.rsan;
                                    storagePubkey(
                                        g_encPublickey.n,
                                        g_encPublickey.e
                                    );
                                    getAjaxData(
                                        "api/user/state-login",
                                        function ($xml) {
                                            var ret = xml2object($xml);
                                            if (ret.type == "response") {
                                                if (
                                                    G_SUPER_USERNAME ==
                                                    ret.response.Username
                                                ) {
                                                    g_default_password_status = 1;
                                                } else {
                                                    g_default_password_status =
                                                        parseInt(
                                                            ret.response
                                                                .firstlogin,
                                                            10
                                                        );
                                                }
                                                g_login_state =
                                                    ret.response.State;
                                                g_username_default =
                                                    ret.response.Username;
                                                $("#username_span").text(name);
                                                $("#username_span").show();
                                                $("#logout_span").text(
                                                    common_logout
                                                );
                                                var passwordStr =
                                                    $("#password").val();
                                                if (true == g_login_reload) {
                                                    window.location.reload();
                                                }
                                                clearDialog();
                                                g_main_displayingPromptStack.pop();
                                                startLogoutTimer(redirectDes);
                                                if (
                                                    g_restore_default_status !=
                                                        "1" &&
                                                    g_default_password_status ==
                                                        0
                                                ) {
                                                    if (
                                                        current_href !=
                                                            "pincoderequired" &&
                                                        current_href !=
                                                            "pukrequired" &&
                                                        current_href !=
                                                            "simlockrequired" &&
                                                        current_href !=
                                                            "nocard" &&
                                                        current_href !=
                                                            "cradleDisconnected" &&
                                                        current_href !=
                                                            "commend"
                                                    ) {
                                                        gotoPageWithoutHistory(
                                                            "modifypassword.html"
                                                        );
                                                    }
                                                } else {
                                                    if (
                                                        checkPWRemind(
                                                            passwordStr,
                                                            null,
                                                            null
                                                        )
                                                    ) {
                                                        if (
                                                            g_show_password_remind !=
                                                            1
                                                        ) {
                                                            showPWRemindDialog(
                                                                destnation,
                                                                callback
                                                            );
                                                        } else {
                                                            loginSwitchDoing(
                                                                destnation,
                                                                callback
                                                            );
                                                        }
                                                    } else {
                                                        loginSwitchDoing(
                                                            destnation,
                                                            callback
                                                        );
                                                    }
                                                }
                                                if (
                                                    typeof ret.response
                                                        .userlevel !=
                                                        "undefined" &&
                                                    ret.response.userlevel ==
                                                        "1"
                                                ) {
                                                    $("#menu_sms").hide();
                                                    $(
                                                        "#show_psk_password"
                                                    ).hide();
                                                    $(
                                                        "#show_wep_password"
                                                    ).hide();
                                                    $(
                                                        "#showPswForW2,#showPswForText"
                                                    ).hide();
                                                } else {
                                                    $("#menu_sms").show();
                                                    $(
                                                        "#show_psk_password"
                                                    ).show();
                                                    $(
                                                        "#show_wep_password"
                                                    ).show();
                                                    $(
                                                        "#showPswForW2,#showPswForText"
                                                    ).show();
                                                    if (
                                                        g_restore_default_status ==
                                                        "1"
                                                    ) {
                                                        $("#menu_sms").hide();
                                                    }
                                                }
                                            }
                                        }
                                    );
                                } else {
                                    showErrorUnderTextbox(
                                        "username",
                                        IDS_login_fialed_prompt
                                    );
                                    $("#username").focus();
                                    $("#username").val("");
                                    $("#password").val("");
                                }
                            } else {
                                showErrorUnderTextbox(
                                    "username",
                                    IDS_login_fialed_prompt
                                );
                                $("#username").focus();
                                $("#username").val("");
                                $("#password").val("");
                            }
                        } else {
                            if (
                                ret.error.code ==
                                ERROR_LOGIN_USERNAME_PWD_ORERRUN
                            ) {
                                showErrorUnderTextbox(
                                    "forget_password_tab",
                                    IDS_login_username_password_input_overrun
                                );
                                $("#username").focus();
                                $("#username").val("");
                                $("#password").val("");
                            } else if (
                                ret.error.code == ERROR_LOGIN_USERNAME_PWD_WRONG
                            ) {
                                showErrorUnderTextbox(
                                    "forget_password_tab",
                                    IDS_login_username_password_wrong
                                );
                                $("#username").focus();
                                $("#username").val("");
                                $("#password").val("");
                            }
                        }
                    }
                );
            } else {
                if (ret.error.code == ERROR_LOGIN_USERNAME_PWD_ORERRUN) {
                    showErrorUnderTextbox(
                        "forget_password_tab",
                        IDS_login_username_password_input_overrun
                    );
                    $("#username").focus();
                    $("#username").val("");
                    $("#password").val("");
                } else if (ret.error.code == ERROR_LOGIN_USERNAME_PWD_WRONG) {
                    showErrorUnderTextbox(
                        "forget_password_tab",
                        IDS_login_username_password_wrong
                    );
                    $("#username").focus();
                    $("#username").val("");
                    $("#password").val("");
                } else if (ret.error.code == ERROR_LOGIN_ALREADY_LOGIN) {
                    showErrorUnderTextbox(
                        "forget_password_tab",
                        IDS_touch_user_login_repeat
                    );
                    $("#username").focus();
                    $("#username").val("");
                    $("#password").val("");
                } else if (ret.error.code == ERROR_LOGIN_FREQUENTLY_LOGIN) {
                    showErrorUnderTextbox(
                        "forget_password_tab",
                        IDS_login_frequently_warning
                    );
                    $("#username").focus();
                    $("#username").val("");
                    $("#password").val("");
                }
            }
        });
    } else {
        if ($.isArray(g_requestVerificationToken)) {
            if (g_requestVerificationToken.length > 0) {
                if (g_password_type == "4") {
                    psd = base64encode(
                        SHA256(
                            name +
                                base64encode(SHA256($("#password").val())) +
                                g_requestVerificationToken[0]
                        )
                    );
                } else {
                    psd = base64encode($("#password").val());
                }
            } else {
                setTimeout(function () {
                    if (g_requestVerificationToken.length > 0) {
                        login(destnation, callback, redirectDes);
                    }
                }, 50);
                return;
            }
        } else {
            psd = base64encode($("#password").val());
        }
        if (g_old_to_scram) {
            var scram = CryptoJS.SCRAM();
            var newSaltPassword = scram
                .saltedPassword(
                    $("#password").val(),
                    CryptoJS.enc.Hex.parse(g_old_to_newSalt),
                    g_old_to_newIter
                )
                .toString();
            var newStoredKey = scram
                .storedKey(
                    scram.clientKey(CryptoJS.enc.Hex.parse(newSaltPassword))
                )
                .toString();
            var newServerKey = scram
                .serverKey(CryptoJS.enc.Hex.parse(newSaltPassword))
                .toString();
            var hashOldNewPwd = SHA256(psd + newStoredKey + newServerKey);
            var request = {
                Username: name,
                Password: psd,
                password_type: g_password_type,
                newStoredKey: newStoredKey,
                newServerKey: newServerKey,
                hashOldNewPwd: hashOldNewPwd,
            };
        } else {
            var request = {
                Username: name,
                Password: psd,
                password_type: g_password_type,
            };
        }
        var xmlstr = object2xml("request", request);
        saveAjaxData("api/user/login", xmlstr, function ($xml) {
            var ret = xml2object($xml);
            if (isAjaxReturnOK(ret)) {
                getAjaxData("api/user/state-login", function ($xml) {
                    var ret = xml2object($xml);
                    if (ret.type == "response") {
                        g_default_password_status = parseInt(
                            ret.response.firstlogin,
                            10
                        );
                        $("#username_span").text(name);
                        $("#username_span").show();
                        $("#logout_span").text(common_logout);
                        var passwordStr = $("#password").val();
                        clearDialog();
                        g_main_displayingPromptStack.pop();
                        startLogoutTimer(redirectDes);
                        if (
                            g_restore_default_status != "1" &&
                            g_default_password_status == 0
                        ) {
                            if (
                                current_href != "pincoderequired" &&
                                current_href != "pukrequired" &&
                                current_href != "simlockrequired" &&
                                current_href != "nocard" &&
                                current_href != "cradleDisconnected" &&
                                current_href != "commend"
                            ) {
                                gotoPageWithoutHistory("modifypassword.html");
                            }
                        } else {
                            if (checkPWRemind(passwordStr, null, null)) {
                                if (g_show_password_remind != 1) {
                                    showPWRemindDialog(destnation, callback);
                                } else {
                                    loginSwitchDoing(destnation, callback);
                                }
                            } else {
                                loginSwitchDoing(destnation, callback);
                            }
                        }
                        if (
                            typeof ret.response.userlevel != "undefined" &&
                            ret.response.userlevel == "1"
                        ) {
                            $("#menu_sms").hide();
                            $("#show_psk_password").hide();
                            $("#show_wep_password").hide();
                            $("#showPswForW2,#showPswForText").hide();
                        } else {
                            $("#menu_sms").show();
                            $("#show_psk_password").show();
                            $("#show_wep_password").show();
                            $("#showPswForW2,#showPswForText").show();
                            if (g_restore_default_status == "1") {
                                $("#menu_sms").hide();
                            }
                        }
                        if (sessionStorage.refreshLastLoginSwitch == "true") {
                            sessionStorage.refreshLastLoginSwitch = "false";
                            getAjaxData(
                                "api/user/history-login",
                                function ($xml) {
                                    var m = xml2object($xml);
                                    if (m.type == "response") {
                                        sessionStorage.last_login_time =
                                            m.response.last_login_time;
                                        sessionStorage.last_login_ipaddr =
                                            m.response.last_login_ipaddr;
                                        sessionStorage.last_login_state =
                                            m.response.last_login_state;
                                    }
                                }
                            );
                        }
                    }
                });
            } else {
                if (ret.type == "error") {
                    clearAllErrorLabel();
                    if (ret.error.code == ERROR_LOGIN_PASSWORD_WRONG) {
                        showErrorUnderTextbox(
                            "forget_password_tab",
                            system_hint_wrong_password
                        );
                        $("#password").val("");
                        $("#password").focus();
                    } else if (ret.error.code == ERROR_LOGIN_ALREADY_LOGIN) {
                        showErrorUnderTextbox(
                            "forget_password_tab",
                            IDS_touch_user_login_repeat
                        );
                        $("#username").focus();
                        $("#username").val("");
                        $("#password").val("");
                    } else if (ret.error.code == ERROR_LOGIN_USERNAME_WRONG) {
                        showErrorUnderTextbox(
                            "username",
                            settings_hint_user_name_not_exist
                        );
                        $("#username").focus();
                        $("#username").val("");
                        $("#password").val("");
                    } else if (
                        ret.error.code == ERROR_LOGIN_USERNAME_PWD_WRONG
                    ) {
                        showErrorUnderTextbox(
                            "forget_password_tab",
                            IDS_login_username_password_wrong
                        );
                        $("#username").focus();
                        $("#username").val("");
                        $("#password").val("");
                    } else if (
                        ret.error.code == ERROR_LOGIN_USERNAME_PWD_ORERRUN
                    ) {
                        showErrorUnderTextbox(
                            "forget_password_tab",
                            IDS_login_username_password_input_overrun
                        );
                        $("#username").focus();
                        $("#username").val("");
                        $("#password").val("");
                    }
                }
            }
        });
    }
}
function trafficExceedContinueDailup(callback) {
    getAjaxData("api/monitoring/start_date", function ($xml) {
        var start_date_ret = xml2object($xml);
        if (start_date_ret.type == "response") {
            var response = start_date_ret.response;
            var startDate = response.StartDay;
            var dataLimit = response.DataLimit;
            var monthThreshold = response.MonthThreshold;
            var setMonthData = response.SetMonthData;
            var postdata = {
                StartDay: startDate,
                DataLimit: dataLimit,
                MonthThreshold: monthThreshold,
                SetMonthData: setMonthData,
                turnoffdataswitch: 2,
            };
            postdata = object2xml("request", postdata);
            saveAjaxData(
                "api/monitoring/start_date",
                postdata,
                function ($xml) {
                    var ret = xml2object($xml);
                    if (isAjaxReturnOK(ret)) {
                        if (typeof callback == "function") {
                            callback();
                        }
                    }
                }
            );
        }
    });
}
function loginSwitchDoing(destnation, callback) {
    if (typeof destnation != "undefined" && destnation != null) {
        window.location.href = destnation;
    }
    if (typeof callback == "function") {
        callback();
        callback = null;
    }
    if (g_is_network_connect) {
        g_is_network_connect = false;
        index_sendNetWorkAction();
    } else if (g_is_wlan_connect) {
        g_is_wlan_connect = false;
        setHandoverSetting();
    } else if (g_is_power_off) {
        g_is_power_off = false;
        setPowerOff();
    } else if (g_quicksetup_login) {
        g_quicksetup_login = false;
        hideQuicksetupButtons();
        quicksetup_initPageData();
    }
    if (g_is_disconnect_clicked) {
        index_clickDisconnectBtn();
    } else if (g_is_connect_clicked) {
        index_clickConnectBtn();
    }
    if (g_isTrunOffWlanChecked) {
        if ($(".trun_on_off_waln :checked").size() > 0) {
            g_handover_setting.Handover = "2";
        } else {
            g_handover_setting.Handover = "0";
        }
        g_isTrunOffWlanChecked = false;
        setHandoverSetting();
    }
    if (current_href == "quicksetup") {
        g_getWifiPwd = true;
        quicksetup_initPage_wifiMultiSSID();
        loginToQuicksetup();
    }
}
function checkPWRemind(passValue, userName, currentPwd) {
    var ret = false;
    if (
        checkPWStrength(passValue, userName, currentPwd) == MACRO_PASSWORD_LOW
    ) {
        getAjaxData(
            "api/user/remind",
            function ($xml) {
                var res = xml2object($xml);
                g_show_password_remind = parseInt(
                    res.response.checkpassword,
                    10
                );
                if ("response" == res.type && "0" == res.response.remindstate) {
                    ret = true;
                }
            },
            {
                sync: true,
            }
        );
    }
    return ret;
}
function setPWRemindStatus(setStatus) {
    var submitData = {
        remindstate: setStatus,
    };
    var res = object2xml("request", submitData);
    saveAjaxData("api/user/remind", res, function ($xml) {}, {
        sync: true,
    });
}
function checkPWStrength(passValue, userName, currentPwd) {
    var nameSame = false;
    var pwdSame = false;
    if (userName != "" && userName != null) {
        if (
            userName == passValue ||
            userName.split("").reverse().join("") == passValue
        ) {
            nameSame = true;
        }
    }
    if (currentPwd != "" && currentPwd != null) {
        if (currentPwd == passValue) {
            pwdSame = true;
        }
    }
    var repeat_pass = 0;
    var tempArray = passValue.split("");
    var n = 0;
    for (var i = 0; i < tempArray.length; i++) {
        var sliceArray = [];
        if (tempArray[i] != tempArray[i + 1]) {
            sliceArray = tempArray.slice(n, i + 1);
            if (sliceArray.length > 1) {
                repeat_pass += sliceArray.length;
            }
            n = i + 1;
        }
    }
    function charMode(iN) {
        if (iN >= 48 && iN <= 57) {
            return 1;
        } else if (iN >= 65 && iN <= 90) {
            return 2;
        } else if (iN >= 97 && iN <= 122) {
            return 4;
        } else {
            return 8;
        }
    }
    function bitTotal(num) {
        var modes = 0;
        var i = 0;
        for (i = 0; i < 4; i++) {
            if (num & 1) {
                modes++;
            }
            num >>>= 1;
        }
        return modes;
    }
    var ret = 0;
    var sPWLength = passValue.length;
    var sPWModes = 0;
    var i = 0;
    for (i = 0; i < sPWLength; i++) {
        sPWModes |= charMode(passValue.charCodeAt(i));
    }
    sPWModes = bitTotal(sPWModes);
    if (sPWLength < 6 || sPWModes == 1 || nameSame == true || pwdSame == true) {
        ret = MACRO_PASSWORD_LOW;
    } else if (sPWModes == 2 && sPWLength >= 6 && sPWLength <= 10) {
        if (
            parseFloat((repeat_pass / parseInt(sPWLength, 10)).toString()) >
            0.667
        ) {
            ret = MACRO_PASSWORD_LOW;
        } else {
            ret = MACRO_PASSWORD_MID;
        }
    } else if (
        (sPWModes >= 3 && sPWLength >= 6) ||
        (sPWModes == 2 && sPWLength > 10)
    ) {
        if (
            parseFloat((repeat_pass / parseInt(sPWLength, 10)).toString()) >
                0.334 &&
            parseFloat((repeat_pass / parseInt(sPWLength, 10)).toString()) <=
                0.667
        ) {
            ret = MACRO_PASSWORD_MID;
        } else if (
            parseFloat((repeat_pass / parseInt(sPWLength, 10)).toString()) >
            0.667
        ) {
            ret = MACRO_PASSWORD_LOW;
        } else {
            ret = MACRO_PASSWORD_HIG;
        }
    } else {
        ret = MACRO_PASSWORD_LOW;
    }
    return ret;
}
function showPWRemindDialog(destnation, callback) {
    var dialogHtml = "";
    if ($("#div_wrapper").size() < 1) {
        dialogHtml +=
            "<div id='div_wrapper'><iframe   id='ifream_dialog'  src= '' frameborder= '0' style= 'background:#bcbcbc; position:absolute; width:100%; height:100%; z-index:-1; display: block;'> </iframe></div>";
    }
    dialogHtml += "<div class='dialog'>";
    dialogHtml += "    <div class='dialog_content'>";
    dialogHtml += "        <div class='dialog_header'>";
    dialogHtml +=
        "            <span class='dialog_header_left clr_white'>" +
        common_note +
        "</span>";
    dialogHtml +=
        "            <span class='dialog_header_right'><a class='dialog_close_btn clr_gray' id='psw_close_btn' href='javascript:void(0);' title='' ><canvas id='remindDialogCanvas' width='25px' height='25px'></canvas></a></span>";
    dialogHtml += "        </div>";
    dialogHtml +=
        "        <div class='dialog_table'>" + IDS_psw_login_remind + "</div>";
    dialogHtml +=
        "        <div class='dialog_table'><input type='checkbox'  id='check_pass_remind' /><span>&nbsp;" +
        IDS_psw_modify_remind +
        "</span></div>";
    dialogHtml += "        <div class='dialog_table_bottom'>";
    dialogHtml += "            <div class='dialog_table_r'>";
    dialogHtml += "                <span class='button_wrapper pop_confirm'>";
    dialogHtml +=
        "                    <input id='psw_confirm' class='button_dialog' type='button' value='" +
        IDS_common_modify +
        "'/></span>";
    dialogHtml += "&nbsp;&nbsp;&nbsp;&nbsp;<span class='button_wrapper'>";
    dialogHtml +=
        "                <input id='psw_Cancel' class='button_dialog' type='button' value='" +
        IDS_common_wait +
        "'/></span>";
    dialogHtml += "            </div>";
    dialogHtml += "        </div>";
    dialogHtml += "    </div>";
    dialogHtml += "</div>";
    $(".body_bg").before(dialogHtml);
    if ($.browser.msie && parseInt($.browser.version, 10) == 9) {
        $(".button_wrapper").css("border-radius", "3px");
        var canvas = document.getElementById("remindDialogCanvas");
        draw(canvas);
    } else if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
        $(".dialog_header_left").css("margin-top", "5");
        $(".dialog_header").css({
            width: "500px",
            height: "29px",
        });
        $(".dialog_header").corner("top 5px");
        $(".button_wrapper").css("background", "#75ACD6");
        $(".button_wrapper").corner("3px");
        $(".button_wrapper input").css("padding-top", "2px");
        $(".dialog_header a").css("top", "7px");
        var ahtml = "<img src='../res/dialog_close_btn.png' title='' alt='' />";
        $(".dialog_header a").append(ahtml);
    } else {
        var canvas = document.getElementById("remindDialogCanvas");
        draw(canvas);
    }
    $("#psw_confirm, #psw_Cancel, #psw_close_btn").die("click");
    $("#psw_confirm").live("click", function () {
        if ($("#check_pass_remind").get(0).checked) {
            setPWRemindStatus(MACRO_PASSWORD_REMIND_OFF);
        }
        clearDialog();
        loginSwitchDoing(destnation, callback);
        g_main_displayingPromptStack.pop();
        hiddenSelect(false);
        window.location.href = "modifypassword.html";
        return false;
    });
    $("#psw_Cancel,#psw_close_btn").live("click", function () {
        if (
            $("#check_pass_remind").length != 0 &&
            $("#check_pass_remind").get(0).checked
        ) {
            setPWRemindStatus(MACRO_PASSWORD_REMIND_OFF);
        }
        clearDialog();
        loginSwitchDoing(destnation, callback);
        g_main_displayingPromptStack.pop();
        hiddenSelect(false);
        return false;
    });
    hiddenSelect(true);
    reputPosition($(".dialog"), $("#div_wrapper"));
    g_main_displayingPromptStack.push("psw_confirm");
    disableTabKey();
}
function userOut(destnation) {
    sessionStorage.clear();
    var logOut = {
        Logout: 1,
    };
    var submitData = object2xml("request", logOut);
    saveAjaxData("api/user/logout", submitData, function ($xml) {
        var ret = xml2object($xml);
        if (ret.type == "response") {
            if (isAjaxReturnOK(ret)) {
                $("#username_span").hide();
                $("#logout_span").text(common_login);
                if (
                    current_href == "pincoderequired" ||
                    current_href == "pukrequired" ||
                    current_href == "simlockrequired" ||
                    (current_href == "update" && g_not_need_login_update)
                ) {
                    refresh();
                } else {
                    if (checkInputValue(destnation)) {
                        gotoPageWithoutHistory(destnation);
                    } else {
                        if (g_restore_default_status == "1") {
                            if (!redirectOnCondition(null, null)) {
                                gotoPageWithoutHistory("quicksetup.html");
                            }
                        } else {
                            gotoPageWithoutHistory(HOME_PAGE_URL);
                        }
                    }
                }
            }
        }
    });
}
function getDefaultPass() {
    getAjaxData(
        "api/user/state-login",
        function ($xml) {
            var ret = xml2object($xml);
            if (ret.type == "response") {
                g_username_default = ret.response.Username;
                if (G_SUPER_USERNAME == ret.response.Username) {
                    g_default_password_status = 1;
                } else {
                    g_default_password_status = parseInt(
                        ret.response.firstlogin,
                        10
                    );
                }
                g_login_state = ret.response.State;
                if (
                    ret.response.wifipwdsamewithwebpwd &&
                    ret.response.wifipwdsamewithwebpwd == "1"
                ) {
                    g_wifiSameWithWeb = true;
                } else {
                    g_wifiSameWithWeb = false;
                }
            }
        },
        {
            sync: true,
        }
    );
}
function loginout() {
    getAjaxData(
        "api/user/state-login",
        function ($xml) {
            var ret = xml2object($xml);
            if (ret.type == "response") {
                if (ret.response.State != 0) {
                    if (G_SUPER_USERNAME == ret.response.Username) {
                        g_default_password_status = 1;
                    } else {
                        g_default_password_status = parseInt(
                            ret.response.firstlogin,
                            10
                        );
                    }
                    g_login_reload = true;
                    showloginDialog();
                } else {
                    showConfirmDialog(
                        common_warning_logout,
                        function () {
                            userOut();
                            cancelLogoutTimer();
                            return false;
                        },
                        function () {}
                    );
                }
            }
        },
        {
            sync: true,
        }
    );
}
function showNotification() {
    if (G_NotificationsStatus != null) {
        var unreadSmsSize = G_NotificationsStatus.UnreadMessage;
        var smsStorageFull = G_NotificationsStatus.SmsStorageFull;
        if (g_module.sms_enabled) {
            if (smsStorageFull == "1") {
                $("#sms_full").css({
                    display: "block",
                });
                if ($("#tooltip_sms_full").html() != null) {
                    if (
                        $("#tooltip_sms_full").html().indexOf("message.gif") < 0
                    ) {
                        $("#tooltip_sms_full").html(
                            "<img src = '../res/message.gif' alt='' />"
                        );
                    }
                }
                $("#sms_gif").css({
                    display: "none",
                });
                $("#tooltip_sms").html("");
            } else {
                $("#sms_full").css({
                    display: "none",
                });
                $("#tooltip_sms_full").html("");
                if (unreadSmsSize > 0) {
                    $("#sms_gif").css({
                        display: "block",
                    });
                    if ($("#tooltip_sms").html() != null) {
                        if (
                            $("#tooltip_sms")
                                .html()
                                .indexOf("unread_message.gif") < 0
                        ) {
                            $("#tooltip_sms").html(
                                "<img src = '../res/unread_message.gif' alt='' />"
                            );
                        }
                    }
                } else {
                    $("#sms_gif").css({
                        display: "none",
                    });
                    $("#tooltip_sms").html("");
                }
            }
        }
    }
}
function getUserManualUrl() {
    if (g_needHelp) {
        var helpUrl = document.getElementById("help_url");
        var current_language = LANGUAGE_DATA.current_language;
        var usermanual_language_list = LANGUAGE_DATA.usermanual_language_list;
        var support_language = [];
        support_language = CreateArray(
            usermanual_language_list.support_language.language
        );
        var supportFlag = false;
        if (typeof support_language != "undefined" && support_language != "") {
            var i = 0;
            for (i = 0; i < support_language.length; i++) {
                if (current_language == support_language[i].replace(/-/, "_")) {
                    supportFlag = true;
                }
            }
        }
        if (supportFlag == false) {
            current_language =
                usermanual_language_list.default_language.replace(/-/, "_");
        }
        current_language = current_language.replace("_", "-");
        g_user_manual_url =
            "../" +
            USER_MANUAL_PATH +
            "/" +
            current_language +
            "/" +
            USER_MANUAL_PATH +
            "/" +
            USER_MANUAL_FILE_NAME;
        if (typeof helpUrl != "undefined" && typeof helpUrl != null) {
            helpUrl.href = g_user_manual_url;
        }
    }
}
function mainIsHandheldBrowser() {
    var bRet = false;
    var hardwarePlatform = navigator.platform.toLowerCase();
    var agent = navigator.userAgent.toLowerCase();
    var isIpod = hardwarePlatform.indexOf("ipod") != -1;
    var isIphone = hardwarePlatform.indexOf("iphone") != -1;
    var isIpad = hardwarePlatform.indexOf("ipad") != -1;
    g_isPad_status = isIpad;
    var isAndroid = agent.indexOf("android") != -1;
    var isPsp = agent.indexOf("playstation") != -1;
    if (isIphone || isIpod) {
        bRet = true;
    } else if (isPsp) {
        bRet = true;
    } else if (isIpad) {
        bRet = true;
    } else if (isAndroid) {
        bRet = true;
    } else {
        if (screen.height <= 320 || screen.width <= 320) {
            bRet = true;
        }
    }
    return bRet;
}
function reputPosition($dialogElement, $dialogDiv) {
    var newTop = 0,
        newLeft = 0,
        scTop = 0,
        scLeft = 0;
    if ($dialogElement) {
        if (g_smallPage) {
            newLeft = (getWindowWidth() - $dialogElement.width()) / 2;
            if (g_isPad_status) {
                newTop = (getWindowHeight() - $dialogElement.height()) / 2;
            } else {
                newTop = 0;
                $(document).scrollTop(0);
                $(document).scrollLeft(
                    (getWindowWidth() - $dialogElement.width()) / 2
                );
            }
        } else {
            newTop = (getWindowHeight() - $dialogElement.height()) / 2;
            newLeft = (getWindowWidth() - $dialogElement.width()) / 2;
            scTop = $(document).scrollTop();
            scLeft = $(document).scrollLeft();
            newTop = scTop + newTop > 0 ? scTop + newTop : 0;
            newLeft = scLeft + newLeft;
        }
        $dialogElement
            .css({
                left: newLeft,
                top: newTop,
            })
            .show();
    }
    window.onscroll = function () {
        scTop = $(document).scrollTop();
        scLeft = $(document).scrollLeft();
    };
    window.onresize = function () {
        if (!$dialogElement.is(":visible")) {
            return;
        } else {
            $dialogElement.css({
                left: newLeft,
                top: newTop,
            });
            if ($dialogDiv) {
                $dialogDiv.css({
                    width: 0,
                    height: 0,
                });
            }
            if (g_smallPage) {
                if (g_isPad_status) {
                    $(document).scrollTop(
                        (getWindowHeight() - $dialogElement.height()) / 2
                    );
                } else {
                    $(document).scrollTop(0);
                }
                $(document).scrollLeft(
                    (getWindowWidth() - $dialogElement.width()) / 2
                );
            } else {
                $(document).scrollTop(scTop);
                $(document).scrollLeft(scLeft);
            }
            reputPosition($dialogElement.last(), $dialogDiv);
        }
    };
    if ($dialogDiv) {
        var div_width = Math.max(getWindowWidth(), getDocumentWidth());
        var div_height = Math.max(getWindowHeight(), getDocumentHeight());
        $dialogDiv.css({
            width: div_width,
            height: div_height,
        });
        $dialogDiv.show();
    }
    function getWindowHeight() {
        return document.documentElement.clientHeight;
    }
    function getWindowWidth() {
        return document.documentElement.clientWidth;
    }
    function getDocumentHeight() {
        if (!$dialogElement) {
            return document.body.scrollHeight;
        } else {
            return Math.max(
                $dialogElement.position().top + $dialogElement.height(),
                document.documentElement.scrollHeight
            );
        }
    }
    function getDocumentWidth() {
        if (!$dialogElement) {
            return document.documentElement.scrollWidth;
        } else {
            return Math.max(
                $dialogElement.position().left + $dialogElement.width(),
                document.documentElement.scrollWidth
            );
        }
    }
}
function onKeyup(evt) {
    if (evt.ctrlKey || evt.altKey) {
        return;
    }
    if (MACRO_KEYCODE == evt.keyCode && true == flag_focus) {
        var targetID = "";
        var stackLen = g_main_displayingPromptStack.length;
        if (stackLen > 0) {
            targetID = g_main_displayingPromptStack[stackLen - 1];
        } else {
            if ("autoconnection" == current_href) {
                if (isButtonEnable("autocennect_apply")) {
                    targetID = "autocennect_apply";
                }
            }
            $("input").blur();
            $("select").blur();
            if ("mobilenetworksettings" == current_href) {
                if (isButtonEnable("mobilensetting_apply")) {
                    targetID = "mobilensetting_apply";
                }
            }
            if ("pincodemanagement" == current_href) {
                targetID = $(".button_wrapper").attr("id");
            }
            if ("pincoderequired" == current_href) {
                targetID = "pinrequired_button_apply";
            }
            if ("pukrequired" == current_href) {
                targetID = "pukrequired_apply";
            }
            if ("simlockrequired" == current_href) {
                targetID = "simlock_button_apply";
            }
            if ("mobileconnection" == current_href) {
                if (isButtonEnable("apply")) {
                    targetID = "apply";
                }
            }
            if ("pincodeautovalidate" == current_href) {
                if (isButtonEnable("validate_apply")) {
                    targetID = "validate_apply";
                }
            }
            if ("modifypassword" == current_href) {
                if (isButtonEnable("apply_button")) {
                    targetID = "apply_button";
                }
            }
            if ("wps" == current_href) {
                if (isButtonEnable("apply_button")) {
                    targetID = "apply_button";
                }
            }
            if ("dhcp" == current_href) {
                if (isButtonEnable("apply")) {
                    targetID = "apply";
                }
            }
            if ("voicebasicsettings" == current_href) {
                if (isButtonEnable("apply")) {
                    targetID = "apply";
                }
            }
            if ("volte" == current_href) {
                if (isButtonEnable("apply")) {
                    targetID = "apply";
                }
            }
            if ("sipalgsettings" == current_href) {
                if (isButtonEnable("apply_button")) {
                    targetID = "apply_button";
                }
            }
            if ("profilesmgr" == current_href) {
                if (isButtonEnable("select_apply")) {
                    targetID = "select_apply";
                }
            }
            if ("wlanbasicsettings" == current_href) {
                if (isButtonEnable("apply_button")) {
                    targetID = "apply_button";
                }
            }
            if ("wlanadvanced" == current_href) {
                if (isButtonEnable("apply_button")) {
                    targetID = "apply_button";
                }
            }
            if ("wlanmacfilter" == current_href) {
                if (isButtonEnable("apply")) {
                    targetID = "apply";
                }
            }
            if ("firewallswitch" == current_href) {
                if (isButtonEnable("apply_button")) {
                    targetID = "apply_button";
                }
            }
            if ("dmzsettings" == current_href) {
                if (isButtonEnable("apply_button")) {
                    targetID = "apply_button";
                }
            }
            if ("upnp" == current_href) {
                if (isButtonEnable("apply")) {
                    targetID = "apply";
                }
            }
            if ("update" == current_href) {
                if (!$("#success_ok").is(":hidden")) {
                    targetID = "success_ok";
                }
                if (!$("#pop_Cancel").is(":hidden")) {
                    targetID = "pop_Cancel";
                }
            }
            if ("sdcardsharing" == current_href) {
                if (isButtonEnable(g_sd_mode_id)) {
                    targetID = g_sd_mode_id;
                }
            }
            if ("ethernetsettings" == current_href) {
                if (isButtonEnable("apply_button")) {
                    targetID = "apply_button";
                }
            }
            if ("macclone" == current_href) {
                if (isButtonEnable("apply_button")) {
                    targetID = "apply_button";
                }
            }
            if ("ddns" == current_href) {
                if (isButtonEnable("apply")) {
                    targetID = "apply";
                }
            }
            if ("cradleDisconnected" == current_href) {
                if (isButtonEnable("link_connetcioncradle")) {
                    targetID = "link_connetcioncradle";
                }
            }
            if ("stationwps" == current_href) {
                if (isButtonEnable("button_connection")) {
                    targetID = "button_connection";
                }
            }
            if ("ftpserver" == current_href) {
                if (isButtonEnable("apply")) {
                    targetID = "apply";
                }
            }
            if ("serverbasic" == current_href) {
                if (isButtonEnable("apply")) {
                    targetID = "apply";
                }
            }
            if ("sipbasic" == current_href) {
                if (isButtonEnable("apply")) {
                    targetID = "apply";
                }
            }
            if ("staticroute" == current_href) {
                if (isButtonEnable("apply")) {
                    targetID = "apply";
                }
            }
            if ("speeddial" == current_href) {
                if (isButtonEnable("apply")) {
                    targetID = "apply";
                }
            }
            if ("tr069settings" == current_href) {
                if (isButtonEnable("apply")) {
                    targetID = "apply";
                }
            }
            if ("voiceprofile" == current_href) {
                if (isButtonEnable("apply")) {
                    targetID = "apply";
                }
            }
            if ("advancecodec" == current_href) {
                if (isButtonEnable("apply")) {
                    targetID = "apply";
                }
            }
            if ("voiceadvanced" == current_href) {
                if (isButtonEnable("apply")) {
                    targetID = "apply";
                }
            }
            if ("tr069profile" == current_href) {
                if (isButtonEnable("apply")) {
                    targetID = "apply";
                }
            }
        }
        if ("" != targetID) {
            $("#" + targetID).trigger("click");
        }
    }
}
function enableTabKey() {
    $("a").attr("tabindex", "");
    $("input").attr("tabindex", "");
    $("select").attr("tabindex", "");
}
function disableTabKey() {
    $("a").attr("tabindex", "-1");
    $("input").attr("tabindex", "-1");
    $("select").attr("tabindex", "-1");
    $("#username").attr("tabindex", "1");
    $("#password").attr("tabindex", "2");
    if (!tabKeyflag) {
        $("#username").focusout(function () {
            disableTabKey();
        });
        $("#username").focusin(function () {
            enableTabKey();
        });
        tabKeyflag = true;
    }
}
function startLogoutTimer(destnation) {
    if (g_needToLogin) {
        clearTimeout(g_logoutTimer);
        var timeout = gettimeout();
        g_logoutTimer = setTimeout(function () {
            userOut(destnation);
        }, timeout);
    }
}
function cancelLogoutTimer() {
    if (g_needToLogin) {
        clearTimeout(g_logoutTimer);
    }
}
function regURL(str) {
    var reg =
        "(((https|http|ftp|rtsp|mms):&#x2F;&#x2F;)|(www\\.)){1}[\41-\176]*";
    var matchURL = new RegExp(reg, "ig");
    str = XSSResolveCannotParseChar(str);
    return str.replace(matchURL, function ($1) {
        $1_href = $1.indexOf("&#x2F;&#x2F;") == -1 ? "http://" + $1 : $1;
        if (
            $1_href.charAt($1_href.length - 1) == "=" &&
            $1_href.charAt($1_href.length - 2) != "="
        ) {
            $1_href = $1_href.substring(0, $1_href.length - 1);
        }
        return (
            "<a href='" +
            $1_href +
            "' style='text-decoration:underline;' target='_blank' rel = 'noopener noreferrer' onclick='javascript:stopBubble(event)'>" +
            $1 +
            "</a>"
        );
    });
}
function stopBubble(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
}
function setWifiSignal(WifiSignal) {
    var signalIntension = null;
    switch (WifiSignal) {
        case MACRO_EVDO_LEVEL_ONE:
            signalIntension = MACRO_EVDO_LEVEL_ONE;
            break;
        case MACRO_EVDO_LEVEL_TWO:
            signalIntension = MACRO_EVDO_LEVEL_TWO;
            break;
        case MACRO_EVDO_LEVEL_THREE:
            signalIntension = MACRO_EVDO_LEVEL_THREE;
            break;
        case MACRO_EVDO_LEVEL_FOUR:
        case MACRO_EVDO_LEVEL_FIVE:
            signalIntension = MACRO_EVDO_LEVEL_FOUR;
            break;
        default:
            signalIntension = MACRO_EVDO_LEVEL_ZERO;
            break;
    }
    STATUS_BAR_ICON_STATUS.station_tooltip_state = wlan_lable_wifi;
    return signalIntension;
}
function replaceSpace(str) {
    var ss = "";
    var i = 0;
    for (i = 0; i < str.length; i++) {
        if (" " == str.charAt(i)) {
            str = str.replace(" ", "&nbsp;");
        }
    }
    return str;
}
function replaceSpaceOther(str) {
    var ss = "";
    var i = 0;
    for (i = 0; i < str.length; i++) {
        if (" " == str.charAt(i)) {
            str = str.replace(" ", "&nbsp;");
        }
    }
    while (str.indexOf("<") >= 0) {
        str = str.replace("<", "&lt;");
    }
    while (str.indexOf(">") >= 0) {
        str = str.replace(">", "&gt;");
    }
    return str;
}
function getSimPukTimes() {
    getAjaxData("api/pin/status", function ($xml) {
        var pinstatus_ret = xml2object($xml);
        if (pinstatus_ret.type == "response") {
            g_pin_status_SimPukTimes = pinstatus_ret.response.SimPukTimes;
        }
    });
}
function display_SIMtoUIM(str) {
    if (MACRO_NET_DUAL_MODE == g_net_mode_type) {
        if (str.indexOf("SIMLOCK") > -1) {
            return str;
        } else {
            str = str.replace(/SIM/g, "UIM");
            return str;
        }
    } else {
        return str;
    }
}
function hiddenSelect(flag) {
    if ($.browser.msie && $.browser.version == 6.0) {
        if (flag) {
            $("select").css("display", "none");
        } else {
            $("select").css("display", "inline");
            $("#select_WifiCountry_for_Idevice").css("display", "none");
        }
    }
}
function check_ethernet_display() {
    if (g_module.cradle_enabled) {
        $("#label_ethernet").text(IDS_ethernet_label_Internet_ethernet);
        if (checkLeftMenu(g_PageUrlTree.settings.ethernet.ethernetsettings)) {
            $("#label_wan_setting").text(IDS_ethernet_label_setting);
        } else {
            $("#ethernetsettings").remove();
        }
        if (checkLeftMenu(g_PageUrlTree.settings.ethernet.ethernetstatus)) {
            $("#label_wan_status").text(IDS_ethernet_label_ethernet_status);
        } else {
            $("#ethernetstatus").remove();
        }
        if (checkLeftMenu(g_PageUrlTree.settings.ethernet.macclone)) {
            $("#label_mac_clone").text(IDS_ethernet_label_mac_clone);
        } else {
            $("#macclone").remove();
        }
    } else {
        $("#ethernet").remove();
    }
}
function getMonitoringStatus() {
    if (g_net_mode_status == null) {
        getAjaxData(
            "api/monitoring/status",
            function ($xml) {
                var ret = xml2object($xml);
                if (ret.type == "response") {
                    G_MonitoringStatus = ret;
                    getMainNetMode();
                }
            },
            {
                sync: true,
            }
        );
    }
}
function CreateArray(obj) {
    var tempArray = [];
    if ($.isArray(obj)) {
        return obj;
    } else {
        if (typeof obj != "undefined") {
            tempArray.push(obj);
        }
        return tempArray;
    }
}
function checkInputChar(str) {
    var i;
    var char_i;
    var num_char_i;
    if (str == "") {
        return true;
    }
    for (i = 0; i < str.length; i++) {
        char_i = str.charAt(i);
        num_char_i = char_i.charCodeAt();
        if (
            num_char_i > MACRO_SUPPORT_CHAR_MAX ||
            num_char_i < MACRO_SUPPORT_CHAR_MIN
        ) {
            return false;
        } else if (
            MACRO_NOT_SUPPORT_CHAR_COMMA == num_char_i ||
            MACRO_NOT_SUPPORT_CHAR_QUOTATION_MARK == num_char_i ||
            MACRO_NOT_SUPPORT_CHAR_COLON == num_char_i ||
            MACRO_NOT_SUPPORT_CHAR_SEMICOLON == num_char_i ||
            MACRO_NOT_SUPPORT_BACKSLASH_MARK == num_char_i ||
            MACRO_NOT_SUPPORT_CHAR_38 == num_char_i ||
            MACRO_NOT_SUPPORT_CHAR_37 == num_char_i ||
            MACRO_NOT_SUPPORT_CHAR_43 == num_char_i ||
            MACRO_NOT_SUPPORT_CHAR_39 == num_char_i ||
            MACRO_NOT_SUPPORT_CHAR_60 == num_char_i ||
            MACRO_NOT_SUPPORT_CHAR_62 == num_char_i ||
            MACRO_NOT_SUPPORT_CHAR_63 == num_char_i
        ) {
            return false;
        } else {
            continue;
        }
    }
    return true;
}
function showDialog(
    common_title,
    content,
    button1_text,
    button1_Id,
    button2_text,
    button2_Id
) {
    $("#div_wrapper").remove();
    $(".login_dialog").remove();
    var dialogHtml = "";
    if ($("#div_wrapper").size() < 1) {
        dialogHtml +=
            "<div id='div_wrapper'><iframe   id='ifream_dialog'  src= '' frameborder= '0' style= 'background:#bcbcbc; position:absolute; width:100%; height:100%; z-index:-1; display: block;'> </iframe></div>";
    }
    dialogHtml += "<div class='login_dialog' id='dialog'>";
    dialogHtml += "    <div class='login_dialog_content'>";
    dialogHtml += "        <div class='login_dialog_header'>";
    dialogHtml +=
        "            <span class='dialog_header_left clr_white'>" +
        common_title +
        "</span>";
    dialogHtml +=
        "            <span class='dialog_header_right'><a class='dialog_close_btn clr_gray' title='' href='javascript:void(0);'><canvas id='showCanvas' width='25px' height='25px'></canvas></a></span>";
    dialogHtml += "        </div>";
    dialogHtml += content;
    dialogHtml += "        <div class='login_dialog_table_bottom'>";
    dialogHtml += "              <span class='button_wrapper pop_save'>";
    dialogHtml +=
        "                  <input id='" +
        button1_Id +
        "' class='button_dialog' type='button' value='" +
        button1_text +
        "'/></span>";
    dialogHtml += "&nbsp;&nbsp;&nbsp;&nbsp;<span class='button_wrapper'>";
    dialogHtml +=
        "                  <input id='" +
        button2_Id +
        "' class='button_dialog' type='button' value='" +
        button2_text +
        "'/></span>";
    dialogHtml += "        </div>";
    dialogHtml += "    </div>";
    dialogHtml += "</div>";
    $(".body_bg").before(dialogHtml);
    if ($.browser.msie && parseInt($.browser.version, 10) == 9) {
        $(".button_wrapper").css("border-radius", "3px");
        var canvas = document.getElementById("showCanvas");
        draw(canvas);
    } else if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
        $(".dialog_header_left").css("margin-top", "5");
        $(".login_dialog_content").css({
            width: "420px",
            height: "29px",
        });
        $(".login_dialog_content").corner("top 5px");
        $(".button_wrapper").css("background", "#75ACD6");
        $(".button_wrapper").corner("3px");
        $(".button_wrapper input").css("padding-top", "2px");
        $(".dialog_header_right a").css("top", "7px");
        var ahtml = "<img src='../res/dialog_close_btn.png' title='' alt='' />";
        $(".login_dialog_header a").append(ahtml);
    } else {
        var canvas = document.getElementById("showCanvas");
        draw(canvas);
    }
    reputPosition($("#dialog"), $("#div_wrapper"));
    g_main_displayingPromptStack.push(button1_Id);
    disableTabKey();
}
function openPortToCss(tableID) {
    if ($.browser.mozilla || $.browser.opera) {
        $("#" + tableID).css({
            "table-layout": "fixed",
            "word-break": "break-all",
            "word-wrap": "break-word",
        });
    }
}
function spaceToNbsp(str) {
    var i = 0;
    for (i = 0; i < str.length; i++) {
        if (" " == str.charAt(i)) {
            str = str.replace(" ", "&nbsp;");
        }
    }
    return str;
}
function nbspToSpace(str) {
    return str.replace(/(\&nbsp;)/g, function ($0, $1) {
        return {
            "&nbsp;": " ",
        }[$1];
    });
}
function profileNameValid(str) {
    var temp_status = true;
    var i = 0;
    for (i = 0; i < str.length; i++) {
        if (
            '"' == str.charAt(i) ||
            "&" == str.charAt(i) ||
            "'" == str.charAt(i) ||
            "<" == str.charAt(i) ||
            ">" == str.charAt(i)
        ) {
            temp_status = false;
        }
    }
    return temp_status;
}
function coulometerCheck(str) {
    var temp;
    if (g_coulometer_status == "1") {
        temp = str.replace(/50/g, "20");
    } else {
        temp = str;
    }
    return temp;
}
function copyrightReplace(str) {
    var temp = str.replace(/%s/g, g_copyright_year);
    return temp;
}
function SHA256(s) {
    var chrsz = 8;
    var hexcase = 0;
    function safe_add(x, y) {
        var lsw = (x & 0xffff) + (y & 0xffff);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xffff);
    }
    function S(X, n) {
        return (X >>> n) | (X << (32 - n));
    }
    function R(X, n) {
        return X >>> n;
    }
    function Ch(x, y, z) {
        return (x & y) ^ (~x & z);
    }
    function Maj(x, y, z) {
        return (x & y) ^ (x & z) ^ (y & z);
    }
    function Sigma0256(x) {
        return S(x, 2) ^ S(x, 13) ^ S(x, 22);
    }
    function Sigma1256(x) {
        return S(x, 6) ^ S(x, 11) ^ S(x, 25);
    }
    function Gamma0256(x) {
        return S(x, 7) ^ S(x, 18) ^ R(x, 3);
    }
    function Gamma1256(x) {
        return S(x, 17) ^ S(x, 19) ^ R(x, 10);
    }
    function core_sha256(m, l) {
        var K = new Array(
            0x428a2f98,
            0x71374491,
            0xb5c0fbcf,
            0xe9b5dba5,
            0x3956c25b,
            0x59f111f1,
            0x923f82a4,
            0xab1c5ed5,
            0xd807aa98,
            0x12835b01,
            0x243185be,
            0x550c7dc3,
            0x72be5d74,
            0x80deb1fe,
            0x9bdc06a7,
            0xc19bf174,
            0xe49b69c1,
            0xefbe4786,
            0xfc19dc6,
            0x240ca1cc,
            0x2de92c6f,
            0x4a7484aa,
            0x5cb0a9dc,
            0x76f988da,
            0x983e5152,
            0xa831c66d,
            0xb00327c8,
            0xbf597fc7,
            0xc6e00bf3,
            0xd5a79147,
            0x6ca6351,
            0x14292967,
            0x27b70a85,
            0x2e1b2138,
            0x4d2c6dfc,
            0x53380d13,
            0x650a7354,
            0x766a0abb,
            0x81c2c92e,
            0x92722c85,
            0xa2bfe8a1,
            0xa81a664b,
            0xc24b8b70,
            0xc76c51a3,
            0xd192e819,
            0xd6990624,
            0xf40e3585,
            0x106aa070,
            0x19a4c116,
            0x1e376c08,
            0x2748774c,
            0x34b0bcb5,
            0x391c0cb3,
            0x4ed8aa4a,
            0x5b9cca4f,
            0x682e6ff3,
            0x748f82ee,
            0x78a5636f,
            0x84c87814,
            0x8cc70208,
            0x90befffa,
            0xa4506ceb,
            0xbef9a3f7,
            0xc67178f2
        );
        var HASH = new Array(
            0x6a09e667,
            0xbb67ae85,
            0x3c6ef372,
            0xa54ff53a,
            0x510e527f,
            0x9b05688c,
            0x1f83d9ab,
            0x5be0cd19
        );
        var W = new Array(64);
        var a, b, c, d, e, f, g, h, i, j;
        var T1, T2;
        m[l >> 5] |= 0x80 << (24 - (l % 32));
        m[(((l + 64) >> 9) << 4) + 15] = l;
        for (var i = 0; i < m.length; i += 16) {
            a = HASH[0];
            b = HASH[1];
            c = HASH[2];
            d = HASH[3];
            e = HASH[4];
            f = HASH[5];
            g = HASH[6];
            h = HASH[7];
            for (var j = 0; j < 64; j++) {
                if (j < 16) W[j] = m[j + i];
                else
                    W[j] = safe_add(
                        safe_add(
                            safe_add(Gamma1256(W[j - 2]), W[j - 7]),
                            Gamma0256(W[j - 15])
                        ),
                        W[j - 16]
                    );
                T1 = safe_add(
                    safe_add(
                        safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)),
                        K[j]
                    ),
                    W[j]
                );
                T2 = safe_add(Sigma0256(a), Maj(a, b, c));
                h = g;
                g = f;
                f = e;
                e = safe_add(d, T1);
                d = c;
                c = b;
                b = a;
                a = safe_add(T1, T2);
            }
            HASH[0] = safe_add(a, HASH[0]);
            HASH[1] = safe_add(b, HASH[1]);
            HASH[2] = safe_add(c, HASH[2]);
            HASH[3] = safe_add(d, HASH[3]);
            HASH[4] = safe_add(e, HASH[4]);
            HASH[5] = safe_add(f, HASH[5]);
            HASH[6] = safe_add(g, HASH[6]);
            HASH[7] = safe_add(h, HASH[7]);
        }
        return HASH;
    }
    function str2binb(str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for (var i = 0; i < str.length * chrsz; i += chrsz) {
            bin[i >> 5] |=
                (str.charCodeAt(i / chrsz) & mask) << (24 - (i % 32));
        }
        return bin;
    }
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    function binb2hex(binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i++) {
            str +=
                hex_tab.charAt(
                    (binarray[i >> 2] >> ((3 - (i % 4)) * 8 + 4)) & 0xf
                ) +
                hex_tab.charAt((binarray[i >> 2] >> ((3 - (i % 4)) * 8)) & 0xf);
        }
        return str;
    }
    s = Utf8Encode(s);
    return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
}
var rng_state;
var rng_pool;
var rng_pptr;
function rng_seed_int(x) {
    rng_pool[rng_pptr++] ^= x & 255;
    rng_pool[rng_pptr++] ^= (x >> 8) & 255;
    rng_pool[rng_pptr++] ^= (x >> 16) & 255;
    rng_pool[rng_pptr++] ^= (x >> 24) & 255;
    if (rng_pptr >= rng_psize) rng_pptr -= rng_psize;
}
function rng_seed_time() {
    rng_seed_int(new Date().getTime());
}
if (rng_pool == null) {
    rng_pool = new Array();
    rng_pptr = 0;
    var t;
    if (
        navigator.appName == "Netscape" &&
        navigator.appVersion < "5" &&
        window.crypto
    ) {
        var z = window.crypto.random(32);
        for (t = 0; t < z.length; ++t)
            rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
    }
    while (rng_pptr < rng_psize) {
        t = Math.floor(65536 * Math.random());
        rng_pool[rng_pptr++] = t >>> 8;
        rng_pool[rng_pptr++] = t & 255;
    }
    rng_pptr = 0;
    rng_seed_time();
}
function rng_get_byte() {
    if (rng_state == null) {
        rng_seed_time();
        rng_state = prng_newstate();
        rng_state.init(rng_pool);
        for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
            rng_pool[rng_pptr] = 0;
        rng_pptr = 0;
    }
    return rng_state.next();
}
function rng_get_bytes(ba) {
    var i;
    for (i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
}
function SecureRandom() {}
SecureRandom.prototype.nextBytes = rng_get_bytes;
function Arcfour() {
    this.i = 0;
    this.j = 0;
    this.S = new Array();
}
function ARC4init(key) {
    var i, j, t;
    for (i = 0; i < 256; ++i) this.S[i] = i;
    j = 0;
    for (i = 0; i < 256; ++i) {
        j = (j + this.S[i] + key[i % key.length]) & 255;
        t = this.S[i];
        this.S[i] = this.S[j];
        this.S[j] = t;
    }
    this.i = 0;
    this.j = 0;
}
function ARC4next() {
    var t;
    this.i = (this.i + 1) & 255;
    this.j = (this.j + this.S[this.i]) & 255;
    t = this.S[this.i];
    this.S[this.i] = this.S[this.j];
    this.S[this.j] = t;
    return this.S[(t + this.S[this.i]) & 255];
}
Arcfour.prototype.init = ARC4init;
Arcfour.prototype.next = ARC4next;
function prng_newstate() {
    return new Arcfour();
}
var rng_psize = 256;
function parseBigInt(str, r) {
    return new BigInteger(str, r);
}
function linebrk(s, n) {
    var ret = "";
    var i = 0;
    while (i + n < s.length) {
        ret += s.substring(i, i + n) + "\n";
        i += n;
    }
    return ret + s.substring(i, s.length);
}
function byte2Hex(b) {
    if (b < 0x10) return "0" + b.toString(16);
    else return b.toString(16);
}
function pkcs1pad2(s, n) {
    if (n < s.length + 11) {
        alert("Message too long for RSA");
        return null;
    }
    var ba = new Array();
    var i = s.length - 1;
    while (i >= 0 && n > 0) {
        var c = s.charCodeAt(i--);
        if (c < 128) {
            ba[--n] = c;
        } else if (c > 127 && c < 2048) {
            ba[--n] = (c & 63) | 128;
            ba[--n] = (c >> 6) | 192;
        } else {
            ba[--n] = (c & 63) | 128;
            ba[--n] = ((c >> 6) & 63) | 128;
            ba[--n] = (c >> 12) | 224;
        }
    }
    ba[--n] = 0;
    var rng = new SecureRandom();
    var x = new Array();
    while (n > 2) {
        x[0] = 0;
        while (x[0] == 0) rng.nextBytes(x);
        ba[--n] = x[0];
    }
    ba[--n] = 2;
    ba[--n] = 0;
    return new BigInteger(ba);
}
function RSAKey() {
    this.n = null;
    this.e = 0;
    this.d = null;
    this.p = null;
    this.q = null;
    this.dmp1 = null;
    this.dmq1 = null;
    this.coeff = null;
}
function RSASetPublic(N, E) {
    if (N != null && E != null && N.length > 0 && E.length > 0) {
        this.n = parseBigInt(N, 16);
        this.e = parseInt(E, 16);
    } else alert("Invalid RSA public key");
}
function RSADoPublic(x) {
    return x.modPowInt(this.e, this.n);
}
function RSAEncrypt(text) {
    var m = pkcs1pad2(text, (this.n.bitLength() + 7) >> 3);
    if (m == null) return null;
    var c = this.doPublic(m);
    if (c == null) return null;
    var h = c.toString(16);
    if ((h.length & 1) == 0) return h;
    else return "0" + h;
}
function RSAEncryptB64(text) {
    var h = this.encrypt(text);
    if (h) return hex2b64(h);
    else return null;
}
RSAKey.prototype.doPublic = RSADoPublic;
RSAKey.prototype.setPublic = RSASetPublic;
RSAKey.prototype.encrypt = RSAEncrypt;
RSAKey.prototype.encrypt_b64 = RSAEncryptB64;
var modulus =
    "BEB90F8AF5D8A7C7DA8CA74AC43E1EE8A48E6860C0D46A5D690BEA082E3A74E1" +
    "571F2C58E94EE339862A49A811A31BB4A48F41B3BCDFD054C3443BB610B5418B" +
    "3CBAFAE7936E1BE2AFD2E0DF865A6E59C2B8DF1E8D5702567D0A9650CB07A43D" +
    "E39020969DF0997FCA587D9A8AE4627CF18477EC06765DF3AA8FB459DD4C9AF3";
var publicExponent = "10001";
function MyRSAEncryptB64(text) {
    var rsa = new RSAKey();
    rsa.setPublic(modulus, publicExponent);
    return rsa.encrypt_b64(text);
}
var dbits;
var canary = 0xdeadbeefcafe;
var j_lm = (canary & 0xffffff) == 0xefcafe;
function BigInteger(a, b, c) {
    if (a != null)
        if ("number" == typeof a) this.fromNumber(a, b, c);
        else if (b == null && "string" != typeof a) this.fromString(a, 256);
        else this.fromString(a, b);
}
function nbi() {
    return new BigInteger(null);
}
function am1(i, x, w, j, c, n) {
    while (--n >= 0) {
        var v = x * this[i++] + w[j] + c;
        c = Math.floor(v / 0x4000000);
        w[j++] = v & 0x3ffffff;
    }
    return c;
}
function am2(i, x, w, j, c, n) {
    var xl = x & 0x7fff,
        xh = x >> 15;
    while (--n >= 0) {
        var l = this[i] & 0x7fff;
        var h = this[i++] >> 15;
        var m = xh * l + h * xl;
        l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
        c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
        w[j++] = l & 0x3fffffff;
    }
    return c;
}
function am3(i, x, w, j, c, n) {
    var xl = x & 0x3fff,
        xh = x >> 14;
    while (--n >= 0) {
        var l = this[i] & 0x3fff;
        var h = this[i++] >> 14;
        var m = xh * l + h * xl;
        l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
        c = (l >> 28) + (m >> 14) + xh * h;
        w[j++] = l & 0xfffffff;
    }
    return c;
}
if (j_lm && navigator.appName == "Microsoft Internet Explorer") {
    BigInteger.prototype.am = am2;
    dbits = 30;
} else if (j_lm && navigator.appName != "Netscape") {
    BigInteger.prototype.am = am1;
    dbits = 26;
} else {
    BigInteger.prototype.am = am3;
    dbits = 28;
}
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array();
var rr, vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
function int2char(n) {
    return BI_RM.charAt(n);
}
function intAt(s, i) {
    var c = BI_RC[s.charCodeAt(i)];
    return c == null ? -1 : c;
}
function bnpCopyTo(r) {
    for (var i = this.t - 1; i >= 0; --i) r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
}
function bnpFromInt(x) {
    this.t = 1;
    this.s = x < 0 ? -1 : 0;
    if (x > 0) this[0] = x;
    else if (x < -1) this[0] = x + DV;
    else this.t = 0;
}
function nbv(i) {
    var r = nbi();
    r.fromInt(i);
    return r;
}
function bnpFromString(s, b) {
    var k;
    if (b == 16) k = 4;
    else if (b == 8) k = 3;
    else if (b == 256) k = 8;
    else if (b == 2) k = 1;
    else if (b == 32) k = 5;
    else if (b == 4) k = 2;
    else {
        this.fromRadix(s, b);
        return;
    }
    this.t = 0;
    this.s = 0;
    var i = s.length,
        mi = false,
        sh = 0;
    while (--i >= 0) {
        var x = k == 8 ? s[i] & 0xff : intAt(s, i);
        if (x < 0) {
            if (s.charAt(i) == "-") mi = true;
            continue;
        }
        mi = false;
        if (sh == 0) this[this.t++] = x;
        else if (sh + k > this.DB) {
            this[this.t - 1] |= (x & ((1 << (this.DB - sh)) - 1)) << sh;
            this[this.t++] = x >> (this.DB - sh);
        } else this[this.t - 1] |= x << sh;
        sh += k;
        if (sh >= this.DB) sh -= this.DB;
    }
    if (k == 8 && (s[0] & 0x80) != 0) {
        this.s = -1;
        if (sh > 0) this[this.t - 1] |= ((1 << (this.DB - sh)) - 1) << sh;
    }
    this.clamp();
    if (mi) BigInteger.ZERO.subTo(this, this);
}
function bnpClamp() {
    var c = this.s & this.DM;
    while (this.t > 0 && this[this.t - 1] == c) --this.t;
}
function bnToString(b) {
    if (this.s < 0) return "-" + this.negate().toString(b);
    var k;
    if (b == 16) k = 4;
    else if (b == 8) k = 3;
    else if (b == 2) k = 1;
    else if (b == 32) k = 5;
    else if (b == 4) k = 2;
    else return this.toRadix(b);
    var km = (1 << k) - 1,
        d,
        m = false,
        r = "",
        i = this.t;
    var p = this.DB - ((i * this.DB) % k);
    if (i-- > 0) {
        if (p < this.DB && (d = this[i] >> p) > 0) {
            m = true;
            r = int2char(d);
        }
        while (i >= 0) {
            if (p < k) {
                d = (this[i] & ((1 << p) - 1)) << (k - p);
                d |= this[--i] >> (p += this.DB - k);
            } else {
                d = (this[i] >> (p -= k)) & km;
                if (p <= 0) {
                    p += this.DB;
                    --i;
                }
            }
            if (d > 0) m = true;
            if (m) r += int2char(d);
        }
    }
    return m ? r : "0";
}
function bnNegate() {
    var r = nbi();
    BigInteger.ZERO.subTo(this, r);
    return r;
}
function bnAbs() {
    return this.s < 0 ? this.negate() : this;
}
function bnCompareTo(a) {
    var r = this.s - a.s;
    if (r != 0) return r;
    var i = this.t;
    r = i - a.t;
    if (r != 0) return this.s < 0 ? -r : r;
    while (--i >= 0) if ((r = this[i] - a[i]) != 0) return r;
    return 0;
}
function nbits(x) {
    var r = 1,
        t;
    if ((t = x >>> 16) != 0) {
        x = t;
        r += 16;
    }
    if ((t = x >> 8) != 0) {
        x = t;
        r += 8;
    }
    if ((t = x >> 4) != 0) {
        x = t;
        r += 4;
    }
    if ((t = x >> 2) != 0) {
        x = t;
        r += 2;
    }
    if ((t = x >> 1) != 0) {
        x = t;
        r += 1;
    }
    return r;
}
function bnBitLength() {
    if (this.t <= 0) return 0;
    return (
        this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ (this.s & this.DM))
    );
}
function bnpDLShiftTo(n, r) {
    var i;
    for (i = this.t - 1; i >= 0; --i) r[i + n] = this[i];
    for (i = n - 1; i >= 0; --i) r[i] = 0;
    r.t = this.t + n;
    r.s = this.s;
}
function bnpDRShiftTo(n, r) {
    for (var i = n; i < this.t; ++i) r[i - n] = this[i];
    r.t = Math.max(this.t - n, 0);
    r.s = this.s;
}
function bnpLShiftTo(n, r) {
    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << cbs) - 1;
    var ds = Math.floor(n / this.DB),
        c = (this.s << bs) & this.DM,
        i;
    for (i = this.t - 1; i >= 0; --i) {
        r[i + ds + 1] = (this[i] >> cbs) | c;
        c = (this[i] & bm) << bs;
    }
    for (i = ds - 1; i >= 0; --i) r[i] = 0;
    r[ds] = c;
    r.t = this.t + ds + 1;
    r.s = this.s;
    r.clamp();
}
function bnpRShiftTo(n, r) {
    r.s = this.s;
    var ds = Math.floor(n / this.DB);
    if (ds >= this.t) {
        r.t = 0;
        return;
    }
    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << bs) - 1;
    r[0] = this[ds] >> bs;
    for (var i = ds + 1; i < this.t; ++i) {
        r[i - ds - 1] |= (this[i] & bm) << cbs;
        r[i - ds] = this[i] >> bs;
    }
    if (bs > 0) r[this.t - ds - 1] |= (this.s & bm) << cbs;
    r.t = this.t - ds;
    r.clamp();
}
function bnpSubTo(a, r) {
    var i = 0,
        c = 0,
        m = Math.min(a.t, this.t);
    while (i < m) {
        c += this[i] - a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
    }
    if (a.t < this.t) {
        c -= a.s;
        while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        c += this.s;
    } else {
        c += this.s;
        while (i < a.t) {
            c -= a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        c -= a.s;
    }
    r.s = c < 0 ? -1 : 0;
    if (c < -1) r[i++] = this.DV + c;
    else if (c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
}
function bnpMultiplyTo(a, r) {
    var x = this.abs(),
        y = a.abs();
    var i = x.t;
    r.t = i + y.t;
    while (--i >= 0) r[i] = 0;
    for (i = 0; i < y.t; ++i) r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
    r.s = 0;
    r.clamp();
    if (this.s != a.s) BigInteger.ZERO.subTo(r, r);
}
function bnpSquareTo(r) {
    var x = this.abs();
    var i = (r.t = 2 * x.t);
    while (--i >= 0) r[i] = 0;
    for (i = 0; i < x.t - 1; ++i) {
        var c = x.am(i, x[i], r, 2 * i, 0, 1);
        if (
            (r[i + x.t] += x.am(
                i + 1,
                2 * x[i],
                r,
                2 * i + 1,
                c,
                x.t - i - 1
            )) >= x.DV
        ) {
            r[i + x.t] -= x.DV;
            r[i + x.t + 1] = 1;
        }
    }
    if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
    r.s = 0;
    r.clamp();
}
function bnpDivRemTo(m, q, r) {
    var pm = m.abs();
    if (pm.t <= 0) return;
    var pt = this.abs();
    if (pt.t < pm.t) {
        if (q != null) q.fromInt(0);
        if (r != null) this.copyTo(r);
        return;
    }
    if (r == null) r = nbi();
    var y = nbi(),
        ts = this.s,
        ms = m.s;
    var nsh = this.DB - nbits(pm[pm.t - 1]);
    if (nsh > 0) {
        pm.lShiftTo(nsh, y);
        pt.lShiftTo(nsh, r);
    } else {
        pm.copyTo(y);
        pt.copyTo(r);
    }
    var ys = y.t;
    var y0 = y[ys - 1];
    if (y0 == 0) return;
    var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
    var d1 = this.FV / yt,
        d2 = (1 << this.F1) / yt,
        e = 1 << this.F2;
    var i = r.t,
        j = i - ys,
        t = q == null ? nbi() : q;
    y.dlShiftTo(j, t);
    if (r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t, r);
    }
    BigInteger.ONE.dlShiftTo(ys, t);
    t.subTo(y, y);
    while (y.t < ys) y[y.t++] = 0;
    while (--j >= 0) {
        var qd =
            r[--i] == y0
                ? this.DM
                : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
        if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
            y.dlShiftTo(j, t);
            r.subTo(t, r);
            while (r[i] < --qd) r.subTo(t, r);
        }
    }
    if (q != null) {
        r.drShiftTo(ys, q);
        if (ts != ms) BigInteger.ZERO.subTo(q, q);
    }
    r.t = ys;
    r.clamp();
    if (nsh > 0) r.rShiftTo(nsh, r);
    if (ts < 0) BigInteger.ZERO.subTo(r, r);
}
function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a, null, r);
    if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r, r);
    return r;
}
function Classic(m) {
    this.m = m;
}
function cConvert(x) {
    if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
    else return x;
}
function cRevert(x) {
    return x;
}
function cReduce(x) {
    x.divRemTo(this.m, null, x);
}
function cMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
}
function cSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r);
}
Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;
function bnpInvDigit() {
    if (this.t < 1) return 0;
    var x = this[0];
    if ((x & 1) == 0) return 0;
    var y = x & 3;
    y = (y * (2 - (x & 0xf) * y)) & 0xf;
    y = (y * (2 - (x & 0xff) * y)) & 0xff;
    y = (y * (2 - (((x & 0xffff) * y) & 0xffff))) & 0xffff;
    y = (y * (2 - ((x * y) % this.DV))) % this.DV;
    return y > 0 ? this.DV - y : -y;
}
function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp & 0x7fff;
    this.mph = this.mp >> 15;
    this.um = (1 << (m.DB - 15)) - 1;
    this.mt2 = 2 * m.t;
}
function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t, r);
    r.divRemTo(this.m, null, r);
    if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r, r);
    return r;
}
function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
}
function montReduce(x) {
    while (x.t <= this.mt2) x[x.t++] = 0;
    for (var i = 0; i < this.m.t; ++i) {
        var j = x[i] & 0x7fff;
        var u0 =
            (j * this.mpl +
                (((j * this.mph + (x[i] >> 15) * this.mpl) & this.um) << 15)) &
            x.DM;
        j = i + this.m.t;
        x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
        while (x[j] >= x.DV) {
            x[j] -= x.DV;
            x[++j]++;
        }
    }
    x.clamp();
    x.drShiftTo(this.m.t, x);
    if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
}
function montSqrTo(x, r) {
    x.squareTo(r);
    this.reduce(r);
}
function montMulTo(x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
}
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;
function bnpIsEven() {
    return (this.t > 0 ? this[0] & 1 : this.s) == 0;
}
function bnpExp(e, z) {
    if (e > 0xffffffff || e < 1) return BigInteger.ONE;
    var r = nbi(),
        r2 = nbi(),
        g = z.convert(this),
        i = nbits(e) - 1;
    g.copyTo(r);
    while (--i >= 0) {
        z.sqrTo(r, r2);
        if ((e & (1 << i)) > 0) z.mulTo(r2, g, r);
        else {
            var t = r;
            r = r2;
            r2 = t;
        }
    }
    return z.revert(r);
}
function bnModPowInt(e, m) {
    var z;
    if (e < 256 || m.isEven()) z = new Classic(m);
    else z = new Montgomery(m);
    return this.exp(e, z);
}
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);
