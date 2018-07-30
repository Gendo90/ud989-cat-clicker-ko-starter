
var Tabby = {
  clickCount: 0,
  name: "Tabby",
  imgSrc: "img/434164568_fea0ad4013_z.jpg",
  nicknames: ["Tab-Tab", "T-Bone", "Mr. T", "Mr. Teabody"]
}

var Sleepy = {
  clickCount: 0,
  name: "Sleepy",
  imgSrc: "img/9648464288_2516b35537_z.jpg",
  nicknames: ["Dopey", "Lazy"]
}

var Shadow = {
  clickCount: 0,
  name: "Shadow",
  imgSrc: "img/1413379559_412a540d29_z.jpg",
  nicknames: ["Shady", "Darko"]
}

var Tiger = {
  clickCount: 0,
  name: "Tiger",
  imgSrc: "img/4154543904_6e2428c421_z.jpg",
  nicknames: ["Tigger", "Tignificent"]
}

var Smalley = {
  clickCount: 0,
  name: "Smalley",
  imgSrc: "img/22252709_010df3379e_z.jpg",
  nicknames: ["Snow", "Kiddie Kitty"]
}

catList = [Tabby, Sleepy, Shadow, Tiger, Smalley];




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

  var newCats = [];

  catList.forEach(function(item){
    var this_cat = new Cat(item);
    newCats.push(this_cat);
  });

  self.allCats = ko.observableArray(newCats),

  self.currentCat = ko.observable(self.allCats()[0]), //set to the first cat in the cat list

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  this.setCurrentCat = function() {
    var index = self.allCats.indexOf(this);
    self.currentCat(self.allCats()[index]);
  };
}

ko.applyBindings(new ViewModel())
