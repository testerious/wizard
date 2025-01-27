jQuery('#rowed2').jqGrid(
  {
    "url":"\/rowed",
    "datatype":"json",
    "colNames":["Actions","Inv No","Date","Client","Amount","Tax","Total","Notes"],
    "colModel":[{"name":"act","index":"act","width":"100","sortable":null,"editable":null},
                {"name":"id","index":"id","width":"55","sortable":null,"editable":true},
                {"name":"invdate","index":"invdate","width":"100","sortable":null,"editable":true},
                {"name":"name","index":"name","width":"100","sortable":null,"editable":true},
                {"name":"amount","index":"amount","width":"100","sortable":null,"editable":true,"align":"right"},
                {"name":"tax","index":"tax","width":"100","sortable":null,"editable":true,"align":"right"},
                {"name":"total","index":"total","width":"100","sortable":null,"editable":true,"align":"right"},
                {"name":"note","index":"note","width":"100","sortable":null,"editable":true}],
    "rowNum":10,
    "rowList":[10,20,30],
    "pager":"#prowed2",
    "sortname":"id",
    "viewrecords":true,
    "sortorder":"desc",
    "gridComplete":
function(){
      var ids = jQuery("#rowed2").jqGrid('getDataIDs');
      for(var i=0; i < ids.length;i++) {
        var cl = ids[i];
        be = "<input style='height:22px;width:20px;' type='button' value='E' onclick=\"jQuery('#rowed2').jqGrid('editRow','"+cl+"');\"  />";
        se = "<input style='height:22px;width:20px;' type='button' value='S' onclick=\"jQuery('#rowed2').jqGrid('saveRow','"+cl+"');\"  />";
        ce = "<input style='height:22px;width:20px;' type='button' value='C' onclick=\"jQuery('#rowed2').jqGrid('restoreRow','"+cl+"');\" />";
        my = "<input style='height:22px;width:30px;' type='button' value='my' onclick=\"location.href='http://ya.ru';\" />";
        jQuery("#rowed2").jqGrid('setRowData',ids[i],{act:be+se+ce+my});
      }
    },
    ,
    "editurl":"\/rowed",
    "caption":"Testttttt"})
jQuery('#rowed2').jqGrid('navGrid','#prowed2',{edit:false,add:false,del:false});


jQuery("#rowed2").jqGrid(
  {
    url:'/rowed',
    datatype: 'json',
    colNames: ['Actions','Inv No','Date', 'Client', 'Amount','Tax','Total','Notes'],
    colModel: [
      {name:'act',     index:'act',      width:100,  sortable:false},
      {name:'id',      index:'id',       width:55},
      {name:'invdate', index:'invdate',  width:90,   editable:true},
      {name:'name',    index:'name',     width:100,  editable:true},
      {name:'amount',  index:'amount',   width:80,   align:'right',   editable:true},
      {name:'tax',     index:'tax',      width:80,   align:'right',   editable:true},
      {name:'total',   index:'total',    width:80,   align:'right',   editable:true},
      {name:'note',    index:'note',     width:150,  sortable:false,  editable:true}
    ],
    rowNum:10,
    rowList:[10,20,30],
    pager: '#prowed2',
    sortname: 'id',
    viewrecords: true,
    sortorder: "desc",
    gridComplete: function(){
      var ids = jQuery("#rowed2").jqGrid('getDataIDs');
      for(var i=0; i < ids.length;i++) {
        var cl = ids[i];
        be = "<input style='height:22px;width:20px;' type='button' value='E' onclick=\"jQuery('#rowed2').jqGrid('editRow','"+cl+"');\"  />";
        se = "<input style='height:22px;width:20px;' type='button' value='S' onclick=\"jQuery('#rowed2').jqGrid('saveRow','"+cl+"');\"  />";
        ce = "<input style='height:22px;width:20px;' type='button' value='C' onclick=\"jQuery('#rowed2').jqGrid('restoreRow','"+cl+"');\" />";
        my = "<input style='height:22px;width:30px;' type='button' value='my' onclick=\"location.href='http://ya.ru';\" />";
        jQuery("#rowed2").jqGrid('setRowData',ids[i],{act:be+se+ce+my});
      }
    },
    editurl:'/rowed',
    caption:'Custom edit'
  });
jQuery('#rowed2').jqGrid('navGrid','#prowed2',{edit:false,add:false,del:false});
