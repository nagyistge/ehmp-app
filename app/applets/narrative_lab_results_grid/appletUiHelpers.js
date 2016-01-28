define(["require","backbone","underscore","app/applets/narrative_lab_results_grid/modal/modalView","app/applets/narrative_lab_results_grid/modal/errorView","app/applets/narrative_lab_results_grid/modal/modalHeaderView","app/applets/narrative_lab_results_grid/modal/modalFooterView"],function(e,t,a,r,i,l,o){"use strict";var n={getDetailView:function(e,t,a,i,l,o){if(e.get("pathology")){var n=e.get("results");if(n&&n.length>0&&n[0].resultUid){var s=n[0].resultUid;console.log(s);var d=ADK.PatientRecordService.getCurrentPatient(),p=ADK.Messaging.getChannel("narrative_lab_results_grid").request("extDetailView",{uid:s,patient:{icn:d.attributes.icn,pid:d.attributes.pid},suppressModal:!0});p.done(function(t){l(t,e,a,i)}),p.fail(function(t){o(t,e,a)})}else o("Lab has no link to a result document",e,a)}else{var u=e.get("isFullscreen");e.set("isNotAPanel",!0);var w=new r.ModalView({model:e,target:t,gridCollection:a,isFromNonPanel:!0,fullScreen:u}),g={view:w,title:e.get("typeName")+" - "+e.get("specimen")};l(g,e,a,i)}},showModal:function(t,a,r,i){var l={title:t.title,size:"large",footerView:o.extend()};if(a.set("lab_detail_title",t.title),i){var n=e("app/applets/narrative_lab_results_grid/modal/modalHeaderView");l.headerView=n.extend({model:a,theView:t.view,dataCollection:r,navHeader:i})}var s=new ADK.UI.Modal({view:t.view,options:l});s.show()},showErrorModal:function(r,l,n){var s={title:"An Error Occurred",size:"large",footerView:o.extend()},d=a.isString(r)?r:r&&a.isString(r.statusText)?r.statusText:"An error occurred",p=new i({model:new t.Model({error:d})}),u=e("app/applets/narrative_lab_results_grid/modal/modalHeaderView");s.headerView=u.extend({model:l,theView:p,dataCollection:n,navHeader:!0});var w=new ADK.UI.Modal({view:p,options:s});w.show()}};return n});