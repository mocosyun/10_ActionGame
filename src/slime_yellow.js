var HoverHeight = 300; //ホバリング
var RiseHeight = 240; //Rise上昇

var slime_yellow;

var slime_yellowLayer = cc.Layer.extend({
   ctor: function() {
      this._super();
      Slime_yellow = new Slime_yellow();
      this.addChild(Slime_yellow);
      //cc.eventManager.addListener(listener, this);

   }

});
var Slime_yellow = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile(res.slime_yellow_frames);
    this.velocity = cc.p(0, 0);
    this.FrameCount = 0;
    this.setScale = (1.3);

    for (i = 0; i < 7; i++) {　　　　　　
      for (j = 0; j < 10; j++) {
        if (level[i][j] == 10) {
          this.setPosition(tileSize / 2 + tileSize * j, 78 * (7 - i) - tileSize / 2);
        }
      }
    }

    var animationframe = [];
    cc.spriteFrameCache.addSpriteFrames(res.slime_yellow_plist, res.slime_yellow_frames);

    // スプライトフレームを取得 player01,player02はplistの中で定義されいいる
    var frame1 = cc.spriteFrameCache.getSpriteFrame("slime_yellow01");
    var frame2 = cc.spriteFrameCache.getSpriteFrame("slime_yellow02");
    var frame3 = cc.spriteFrameCache.getSpriteFrame("slime_yellow03");
    var frame4 = cc.spriteFrameCache.getSpriteFrame("slime_yellow04");
    var frame5 = cc.spriteFrameCache.getSpriteFrame("slime_yellow05");
    var frame6 = cc.spriteFrameCache.getSpriteFrame("slime_yellow06");
    var frame7 = cc.spriteFrameCache.getSpriteFrame("slime_yellow07");
    var frame8 = cc.spriteFrameCache.getSpriteFrame("slime_yellow08");
    var frame9 = cc.spriteFrameCache.getSpriteFrame("slime_yellow09");
    var frame10 = cc.spriteFrameCache.getSpriteFrame("slime_yellow10");
    var frame11 = cc.spriteFrameCache.getSpriteFrame("slime_yellow11");
    var frame12 = cc.spriteFrameCache.getSpriteFrame("slime_yellow12");

    //スプライトフレームを配列に登録
    var animationframe = [];
    animationframe.push(frame9);
    animationframe.push(frame10);
    animationframe.push(frame11);
    animationframe.push(frame12);
    animationframe.push(frame5);
    animationframe.push(frame6);
    animationframe.push(frame7);
    animationframe.push(frame8);
    animationframe.push(frame1);
    animationframe.push(frame2);
    animationframe.push(frame3);
    animationframe.push(frame4);
    //スプライトフレームの配列を連続再生するアニメーションの定義
    var animation = new cc.Animation(animationframe, 0.2);
    //永久ループのアクションを定義
    var action = new cc.RepeatForever(new cc.animate(animation));
    //実行
    this.initWithFile(res.slime_yellow_frames);
    this.runAction(action);

    this.scheduleUpdate();
  },

  update: function(dt) {
    this.FrameCount++;
    //4フレームに1回　こうもりの移動計算する
    if (this.FrameCount % 9 == 0) {
      //プレイヤーの位置をこうもりの位置の差を計算
      var offset_x = player.getPosition().x - this.getPosition().x;

      //蝙蝠のｘ移動速度をプレイヤとこうもりの間の距離の0.05倍にする
      var velocity_x = lerp(this.velocity.x, offset_x * 0.15, 0.005);
      this.velocity.x = velocity_x;

      //  console.log(MoveDirection, this.velocity.x, offset.x);
      if (this.velocity.x <= 0)
        this.setFlippedX(true);
      if (this.velocity.x > 0)
        this.setFlippedX(false);

      this.setPosition(this.getPosition().x + this.velocity.x, this.getPosition().y + this.velocity.y);

    }
  }
});
