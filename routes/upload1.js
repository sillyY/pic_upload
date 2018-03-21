const router = require('koa-router')();
// const formidable = require('formidable');
const fs=require('fs');
router.prefix('/1');
router.post('/upload', async (ctx, next) => {
    let image=ctx.request.body.img;
    var base64Data = image.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');   
    fs.writeFile('./1.png',dataBuffer,function(err){
        if(err) console.log(err);
        console.log('上传成功！');
    })
    ctx.body = {
      title: 'koa2 json'
    }
})
module.exports = router;