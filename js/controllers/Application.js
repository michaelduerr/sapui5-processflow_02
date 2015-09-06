var pf = new sap.suite.ui.commons.ProcessFlow({
  nodes: {
    path: '/nodes',
    template: new sap.suite.ui.commons.ProcessFlowNode({
      nodeId: '{nodeId}',
      laneId: '{laneId}',
      title: '{title}',
      children: '{children}',
      titleAbbreviation: '{titleAbbreviation}',
      stateText: '{stateText}',
      state: '{state}'
    })
  },
  lanes: {
    path: '/lanes',
    template: new sap.suite.ui.commons.ProcessFlowLaneHeader({
      laneId: '{laneId}',
      iconSrc: '{iconSrc}',
      text: '{text}',
      position: '{position}'
    })
  }
});


var model = new sap.ui.model.json.JSONModel({
  nodes: [
    {
      nodeId: '1',
      laneId: "id0",
      title: "JTI Program 1160145-14-5",
      titleAbbreviation: "PROG 1",
      children: ['2','3','4'],
      state: "Positive",
      stateText: "Positive Status"
    },
    {
      nodeId: '2',
      laneId: "id1",
      title: "Project 1160123",
      titleAbbreviation: "PROJ 1",
      children: ["10","12"],
      state: "Positive",
      stateText: "OK Delivery"
    },
    {
      nodeId: '3',
      laneId: "id1",
      title: "Project 1160124",
      titleAbbreviation: "PROJ 2",
      children: ["10"],
      state: "Positive",
      stateText: "OK Delivery"
    },    
    {
      nodeId: '4',
      laneId: "id1",
      title: "Project 1160125",
      titleAbbreviation: "PROJ 3",
      children: ["10"],
      state: "Positive",
      stateText: "OK Delivery"
    },      
    {
      nodeId: '10',
      laneId: "id3",
      title: "Concept 7",
      titleAbbreviation: "CON 7",
      state: "Positive",
      stateText: "Positive Status"
    },
    {
      nodeId: '11',
      laneId: "id2",
      title: "Initiative 1",
      titleAbbreviation: "INIT 1",
      state: "Positive",
      stateText: "Positive Status should not run over more than two rows of text"
    },
    {
      nodeId: '12',
      laneId: "id2",
      title: "Initiative 2",
      titleAbbreviation: "INIT 2",
      children: ["5"],
      state: "Neutral"
    },
    {
      nodeId: '5',
      laneId: "id3",
      title: "Concept 10",
      titleAbbreviation: "AD 10",
      state: "Neutral"
    },
    {
      nodeId: '60',
      laneId: "id6",
      title: "Layout 0",
      titleAbbreviation: "LAY 0",
      state: "Positive"
    },
    {
      nodeId: '61',
      laneId: "id6",
      title: "Layout 1",
      titleAbbreviation: "LAY 1",
      state: "Positive"
    }    
  ],
  
  lanes: [
    {
      laneId: "id0",
      iconSrc: "sap-icon://order-status",
      text:"Program", 
      position: 0
    },
    { 
      laneId: "id1", 
      iconSrc: "sap-icon://monitor-payments",
      text: "Project",
      position: 1
    },
    {
      laneId: "id2",
      iconSrc: "sap-icon://payment-approval", 
      text: "Initiative",
      position:2
    },
    { 
      laneId: "id3", 
      iconSrc: "sap-icon://money-bills",
      text: "Concept",
      position: 3
    },
    { 
      laneId: "id4", 
      iconSrc: "sap-icon://money-bills",
      text: "FPO",
      position: 4
    },
    { 
      laneId: "id5", 
      iconSrc: "sap-icon://money-bills",
      text: "Development Brief",
      position: 5
    },
    { 
      laneId: "id6", 
      iconSrc: "sap-icon://money-bills",
      text: "Layout",
      position: 6
    }        
  ]  
});

pf.setModel(model);
pf.addEventDelegate({
  onAfterRendering: function(){
    this.zoomIn();
  }
}, pf);

new sap.ui.commons.Button({
  text: 'ZoomIn',
  press: function() {
    pf.zoomIn();
  }
}).placeAt('content');

new sap.ui.commons.Button({
  text: 'ZoomOut',
  press: function() {
    pf.zoomOut();
  }
}).placeAt('content');


pf.placeAt('content');