var slime;

var ui_gauge_fillLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        ui_gauge_fill = new Ui_gauge_fill();
        this.addChild(ui_gauge_fill);

        //cc.eventManager.addListener(listener, this);

    }

});
var Ui_gauge_fill = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile(res.ui_gauge_fill_png);
    this.velocity = cc.p(0, 0);
    this.FrameCount = 0;
    this.setScale(1.2);

      for (i = 0; i < 7; i++) {
        for (j = 0; j < 10; j++) {
          if (level[i][j] == 7) {
          this.setPosition(tileSize / 2 + tileSize * j, 80 * (7 - i) - tileSize / 2);
        }
      }
    }
  }
});
