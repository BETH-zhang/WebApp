#用组件方式开发 Web App全站学习

##开发流程
###为什么要说流程
  
      提升效率（知道什么时间找谁做什么事）
      防止背锅
      
  >开发前：
      >产品功能设计--MRD(描述项目功能需求)
      >视觉／交互设计--交互设计稿，视觉设计稿

     1.需要载入动画
     2.滑动切换页面
     3.9个页面
  >开发中：
      >技术规划－－项目开发文档，技术经理
          产品需求是否合理
          产品代码是否可以复用
          复杂
      >前端开发
      >后端开发

        1.开发规划－开发文档
          可行性确认
          技术选型
          开发／线上环境规划
          技术开发方案设计
          团队协作方式
        2.开发方案设计
          一、页面DOM操作
              技术选型：jquery
              简介：一款轻量级js框架
              特点：1.强大的选择器
                  2.出色的DOM操作封装
                  3.可靠的事件处理机制
          二、页面切换功能
              技术选型：FullPage.js插件
              简介：jquery插件
          三、组织内容结构方案：Page-Component
              HTML+CSS
                  柱图－垂直图
                  散点图
              Canvas
                  折线图
                  雷达图
                  饼图－环图
              我们不是在追求技术的实现，而是在寻找某种合适的技术来满足我们的需求
        2.前端开发
            1.设计稿标注&切图－MarkMan
            2.编写静态页
            3.开发测试
              基本图文组件类＝＝H5ComponentBase
              目的：实现出场，入场的动画
  >开发后：
      >测试
      >上线

产品经理：
    PM－ProductManager
    MRD－Market Requirements Document
美工
    UI－UserInterface
    UE-UserExperience
技术
    PM－ProjectManager
前端
    FE-FrontEnd developer engineer
后端
    RD-Research Developer
    BE－BackEnd
测试
    QA-Quality Assessment
运维
    OP-Operate

###每个流程要做什么
###各环节出问题易于找到问题
##技术实现
###技术规划，选型
####JS类规划
  内容组织类：H5
    作用：组织H5报告的内容结构，设置H5报告的切换效果
    方法：添加一个页addPage,添加一个组件addComponent
  图文组件类：H5ComponentBase
    作用：输出一个DOM，内容可以是图片或者文字
    事件：当前页载入onLoad，当前页移除onLeave
  图表组件类：H5Component？？？
    作用：在H5ComponentBase的基础之上插入DOM结构或者CANVAS图形
    事件：当前页载入移除onLoad，onLeave图表组件本身的生长动画
  项目JS类总结
    内容组织类：H5
    图文组件类：H5ComponentBase
    图表组件类：H5Component？？？
###设计易扩展的开发方案
###开发各种图标组件


