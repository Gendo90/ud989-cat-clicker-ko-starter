
var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable("");
  this.nicknames = ko.observableArray(data.nicknames);

  this.catLevel = ko.computed(function() {
    if(this.clickCount()<10) {
      return "Newborn";
    }
    else if(this.clickCount()<40){
      return "Infant";
    }
    else if(this.clickCount()<120){
      return "Teen";
    }
    else if(this.clickCount()<200){
      return "Adult";
    }
    else if (this.clickCount()>800) {
      return "Senior";
    }
  }, this);
}

var ViewModel = function() {
  var self = this;

  this.currentCat = ko.observable(new Cat({
    clickCount: 0,
    name: "Tabby",
    imgSrc: "img/434164568_fea0ad4013_z.jpg",
    nicknames: ["Tab-Tab", "T-Bone", "Mr. T", "Mr. Teabody"]
  }));

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel())
