var HoverHeight = 300; //ホバリング
var RiseHeight = 240; //Rise上昇

var coin;

var coinLayer = cc.Layer.extend({
   ctor: function() {
      this._super();
      coin = new Coin();
      this.addChild(coin);
      //cc.eventManager.addListener(listener, this);

   }

});
var Coin = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile(res.coins_png);
    this.velocity = cc.p(0, 0);
    this.FrameCount = 0;
    this.setScale(1.6);

    for (i = 0; i < 7; i++) {　　　　　　
      for (j = 0; j < 10; j++) {
        if (level[i][j] == 7) {
          this.setPosition(tileSize / 2 + tileSize * j, 100 * (7 - i) - tileSize / 2);
        }
      }
    }

    var animationframe = [];
    //スプライトフレームを格納する配列
    var texture = cc.textureCache.addImage(res.coins_png);
    for (i = 0; i < 8; i++) {
      for (j = 0; j < 8; j++) {
        //スプライトフレームを作成
        var frame = new cc.SpriteFrame.createWithTexture(texture, cc.rect(24 * j, 24, 25, 25));
        //スプライトフレームを配列に登録
        animationframe.push(frame);
      }
    }
    //スプライトフレームの配列を連続再生するアニメーションの定義
    var animation = new cc.Animation(animationframe, 0.08);
    //永久ループのアクションを定義
    var action = new cc.RepeatForever(new cc.animate(animation));
    //実行
    this.runAction(action);

    this.scheduleUpdate();

  },
});
//始点、終点、の間で 0～1.0の割合の位置を返す関数
function lerp(fStart, fEnd, fPercent) {
  return fStart + ((fEnd - fStart) * fPercent);
}
