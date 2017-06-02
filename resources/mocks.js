var batchs = {
      batch1:{
        name:"CRMSFOL",
        status :"KOT",
        start:"09-mai-17 17:00:04",
        end:"09-mai-17 19:08:11",
        duration : "2h 08m 07s",
        notReferenced : false
      },
      batch2:{
        name:"CRMCNIL",
        status:"OK",
        start:"09-mai-17 05:00:06",
        end:"09-mai-17 05:04:21",
        duration : "0h 04m 15s",
        notReferenced : true
      },
      batch3:{
        name:"CRMCDFNDRE",
        status:"KOF",
        start:"09-mai-17 20:00:04",
        end:"09-mai-17 20:01:31",
        duration : "0h 01m 27s",
        notReferenced : false
      }
    };

var batchsBis = {
  batch4:{
    name:"CRMSFOL",
    status: "EC",
    start:"10-mai-17 17:00:03",
    end:"-",
    duration : "-",
    notReferenced : false
  }
}

var UTs = {
      UT1: {
        name:"TRUNC_CRM_TMP_FULL_ONLINE_CASH_TR",
        status: "OK",
        type: "SQL",
        start : "09-mai-17 17:00:04",
        end : "09-mai-17 17:00:05",
        duration:"0h 00m 01s",
        nbOK : "-",
        nbKOF : "-",
        nbKOT: "-"
      },
      UT2: {
        name:"TRUNC_TMP_SFOL_TRANSFER",
        status: "OK",
        type: "SQL",
        start : "09-mai-17 17:00:05",
        end : "09-mai-17 17:00:07",
        duration:"0h 00m 02s",
        nbOK : "-",
        nbKOF : "-",
        nbKOT: "-"
      },
      UT3: {
        name:"crm_sfol_account_activation_CTL_FOLVIRP",
        status: "OK",
        type: "Loader",
        start : "09-mai-17 17:00:07",
        end : "09-mai-17 17:00:08",
        duration:"0h 00m 01s",
        nbOK : "-",
        nbKOF : "-",
        nbKOT: "-"
      },

      UT4: {
        name:"CRM_ADMIN.CRM_SELECT_FAF_CONTACTS_PRC",
        status: "OK",
        type: "SQL",
        start : "09-mai-17 17:00:08",
        end : "09-mai-17 17:00:09",
        duration:"0h 00m 01s",
        nbOK : "-",
        nbKOF : "-",
        nbKOT: "-"
      },
      UT5: {
        name:"crm_full_online_cash_tr_prc",
        status: "OK",
        type: "SQL",
        start : "09-mai-17 17:00:09",
        end : "09-mai-17 17:00:11",
        duration:"0h 00m 02s",
        nbOK : "-",
        nbKOF : "-",
        nbKOT: "-"
      },
      UT6: {
        name:"CRM_CSL_BOOSTED_PKG.CRM_SET_INITIAL_AMOUNT_PRC",
        status: "OK",
        type: "Loader",
        start : "09-mai-17 17:00:11",
        end : "09-mai-17 17:00:14",
        duration:"0h 00m 03s",
        nbOK : "-",
        nbKOF : "-",
        nbKOT: "-"
      },
      UT7: {
        name:"CRM_ADMIN.CRM_SFOL_CASH_TR_PRC",
        status: "OK",
        type: "SQL",
        start : "09-mai-17 17:00:14",
        end : "09-mai-17 17:00:15",
        duration:"0h 00m 01s",
        nbOK : "-",
        nbKOF : "-",
        nbKOT: "-"
      },
      UT8: {
        name:"SfolAccountActivationNew",
        status: "KOT",
        type: "JAVA",
        start : "09-mai-17 17:00:15",
        end : "09-mai-17 19:08:11",
        duration:"2h 7m 56s",
        nbOK : "752",
        nbKOF : "1",
        nbKOT: "1",
        steps : {
          step1: {
            name: "Contrôle BDF",
            status : "KOT",
            start : "09-mai-17 17:00:15",
            end : "09-mai-17 19:08:11",
            totalDuration:"0h 52m 55s",
            averageDuration:"4.21sec",
            nbOK : "753",
            nbKOF : "0",
            nbKOT: "1"
          },
          step2: {
            name: "Activation des comptes",
            status : "KOF",
            start : "09-mai-17 17:00:15",
            end : "09-mai-17 19:08:11",
            totalDuration:"0h 23m 50s",
            averageDuration:"1.90sec",
            nbOK : "752",
            nbKOF : "1",
            nbKOT: "0"
          },
          step3: {
            name: "Virement",
            status : "OK",
            start : "09-mai-17 17:00:15",
            end : "09-mai-17 19:08:11",
            totalDuration:"0h 21m 11s",
            averageDuration:"1.69sec",
            nbOK : "752",
            nbKOF : "0",
            nbKOT: "0"
          }
        }
      },
      UT9: {
        name:"FG_MAIL_SEND",
        status: "",
        type: "EMAIL",
        start : "--",
        end : "--",
        duration:"--",
        nbOK : "-",
        nbKOF : "-",
        nbKOT: "-"
      }
    };

    var UTsBis = {
    UT1: {
      name:"TRUNC_CRM_TMP_FULL_ONLINE_CASH_TR",
      status: "OK",
      type: "SQL",
      start : "10-mai-17 17:00:03",
      end : "10-mai-17 17:00:06",
      duration:"0h 00m 03s",
      nbOK : "-",
      nbKOF : "-",
      nbKOT: "-"
    },
    UT2: {
      name:"TRUNC_TMP_SFOL_TRANSFER",
      status: "OK",
      type: "SQL",
      start : "10-mai-17 17:00:06",
      end : "10-mai-17 17:00:09",
      duration:"0h 00m 03s",
      nbOK : "-",
      nbKOF : "-",
      nbKOT: "-"
    },
    UT3: {
      name:"crm_sfol_account_activation_CTL_FOLVIRP",
      status: "OK",
      type: "Loader",
      start : "10-mai-17 17:00:09",
      end : "10-mai-17 17:00:10",
      duration:"0h 00m 01s",
      nbOK : "-",
      nbKOF : "-",
      nbKOT: "-"
    },

    UT4: {
      name:"CRM_ADMIN.CRM_SELECT_FAF_CONTACTS_PRC",
      status: "OK",
      type: "SQL",
      start : "10-mai-17 17:00:10",
      end : "10-mai-17 17:00:11",
      duration:"0h 00m 01s",
      nbOK : "-",
      nbKOF : "-",
      nbKOT: "-"
    },
    UT5: {
      name:"crm_full_online_cash_tr_prc",
      status: "OK",
      type: "SQL",
      start : "10-mai-17 17:00:11",
      end : "10-mai-17 17:00:13",
      duration:"0h 00m 02s",
      nbOK : "-",
      nbKOF : "-",
      nbKOT: "-"
    },
    UT6: {
      name:"CRM_CSL_BOOSTED_PKG.CRM_SET_INITIAL_AMOUNT_PRC",
      status: "OK",
      type: "Loader",
      start : "10-mai-17 17:00:13",
      end : "10-mai-17 17:00:15",
      duration:"0h 00m 03s",
      nbOK : "-",
      nbKOF : "-",
      nbKOT: "-"
    },
    UT7: {
      name:"CRM_ADMIN.CRM_SFOL_CASH_TR_PRC",
      status: "OK",
      type: "SQL",
      start : "10-mai-17 17:00:15",
      end : "10-mai-17 17:00:16",
      duration:"0h 00m 01s",
      nbOK : "-",
      nbKOF : "-",
      nbKOT: "-"
    },
    UT8: {
      name:"SfolAccountActivationNew",
      status: "OK",
      type: "JAVA",
      start : "10-mai-17 17:00:17",
      end : "10-mai-17 19:05:18",
      duration:"2h 05m 01s",
      nbOK : "720",
      nbKOF : "3",
      nbKOT: "0",
      steps : {
        step1: {
          name: "Contrôle BDF",
          status : "KOF",
          start : "10-mai-17 17:00:17",
          end : "10-mai-17 19:05:18",
          totalDuration:"0h 50m 00s",
          averageDuration:"4.17sec",
          nbOK : "720",
          nbKOF : "3",
          nbKOT: "0"
        },
        step2: {
          name: "Activation des comptes",
          status : "OK",
          start : "10-mai-17 17:00:17",
          end : "10-mai-17 19:05:18",
          totalDuration:"0h 00m 00s",
          averageDuration:"1.99sec",
          nbOK : "720",
          nbKOF : "0",
          nbKOT: "0"
        },
        step3: {
          name: "Virement",
          status : "OK",
          start : "10-mai-17 17:00:17",
          end : "10-mai-17 19:05:18",
          totalDuration:"0h 00m 10s",
          averageDuration:"4.27sec",
          nbOK : "720",
          nbKOF : "0",
          nbKOT: "0"
        }
      }
    },
    UT9: {
      name:"FG_MAIL_SEND",
      status: "EC",
      type: "EMAIL",
      start : "10-mai-17 19:05:18",
      end : "--",
      duration:"--",
      nbOK : "-",
      nbKOF : "-",
      nbKOT: "-"
    }
  };

  var UTsBis2 = {
    UT1: {
      name:"CreditPersoScheduleOfferForActivationServlet",
      status: "KOF",
      type: "JAVA",
      start : "09-mai-17 20:00:04",
      end : "09-mai-17 20:01:30",
      duration:"0h 00m 56s",
      nbOK : "82",
      nbKOF : "8",
      nbKOT: "0"
    },
    UT2: {
      name:"FG_MAIL_SEND",
      status: "OK",
      type: "EMAIL",
      start : "09-mai-17 20:01:30",
      end : "09-mai-17 20:01:31",
      duration:"0h 00m 01s",
      nbOK : "-",
      nbKOF : "-",
      nbKOT: "-"
    }
  };

  var UTsBis3 = {
        UT1: {
          name:"TRUNC_TMP_SUPP_CONTACT",
          status: "OK",
          type: "SQL",
          start : "09-mai-17 05:00:06",
          end : "09-mai-17 05:00:08",
          duration:"0h 00m 02s",
          nbOK : "82",
          nbKOF : "8",
          nbKOT: "0"
        },
        UT2: {
          name:"CRM_ADMIN.CRM_CNIL_PKG.insert_contact_prc",
          status: "OK",
          type: "SQL",
          start : "09-mai-17 05:00:08",
          end : "09-mai-17 05:04:11",
          duration:"0h 04m 03s",
          nbOK : "-",
          nbKOF : "-",
          nbKOT: "-"
      },
      UT3: {
        name:"CRM_ADMIN.CRM_CNIL_PKG.anonym_contact_prc",
        status: "OK",
        type: "SQL",
        start : "09-mai-17 05:04:12",
        end : "09-mai-17 05:04:20",
        duration:"0h 00m 08s",
        nbOK : "82",
        nbKOF : "8",
        nbKOT: "0"
      },
      UT4: {
        name:"FG_MAIL_SEND",
        status: "OK",
        type: "EMAIL",
        start : "09-mai-17 05:04:21",
        end : "09-mai-17 05:04:21",
        duration:"0h 00m 00s",
        nbOK : "-",
        nbKOF : "-",
        nbKOT: "-"
    }
  };
