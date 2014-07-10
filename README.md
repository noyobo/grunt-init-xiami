# grunt-init-xiami

使用 grunt-init 创建虾米模版,快速创建 grunt 项目.
    
# Installation

如果你还没有安装 [grunt-init](http://www.gruntjs.org/docs/project-scaffolding.html), 请先安装 `$ npm install -g grunt-init`

安装完成后, 把 **grunt-init-xiami** 模版复制到 `~\.grunt-init\` 目录下, 推荐使用 GIT 安装

Mac / Linux:

`git clone https://github.com/noyobo/grunt-init-xiami.git ~/.grunt-init/xiami`

Window:

`git clone https://github.com/noyobo/grunt-init-xiami.git C:\Users\Administrator\.grunt-init\xiami`

 > Note: 如果 `C:\Users\Administrator\` 目录下没有 `.grunt-init` 文件夹, 请先创建
 

# Usage 

在目录所在文件夹运行

`grunt-init xiami`

```
.
├── src                 你的代码
└── build               发布目录
```

`grunt build` 自动压缩打包文件到`build`下,可根据需求自行修改
 