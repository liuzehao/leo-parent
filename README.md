


**背景**：

> 在人们日常的生活和工作中，每个人在各自的范围内不断累积，形成不同层次的过程资源财富，涵盖了文本、传真、图形、视频、音频等各个类型的知识财富载体。但是随着知识财富的不断累积，由于知识财富的来源不同、用途不同、载体不同等，经常导致知识财富的时间链条错乱、关联知识无法有效检索、各类知识无法综合运用等问题的出现，伴随着知识财富的持续积累，这种问题愈发突出、迫切需要行之有效的手段来录入、管理、分析、统计知识财富，行之有效的归纳利用知识财富，将助推个人及组织目标的实现。

**说明：**

> 系统名称：知识库管理系统 
开发者：奔跑的树懒小组 
用户：访问知识库管理系统的企业、组织和个人

第五届“中国软件杯”大学生软件设计大赛赛题

赛题名称:知识库管理系统 
组类（ A ）： A 本科及以上   

> 赛题简介：介绍整个赛题的思路和整体要求	知识库管理系统软件将来自工作中、生活中、培训中、组织内的各类资料和领域知识进行管理维护并提供关联分析和综合查询服务。
> 
> 系统是一个b/s结构的底层服务软件，其中的服务端均部署在服务器上后台运行，并提供配置web管理界面，以达到知识辅助管理的目的。
> 赛题业务场景：描述赛题相关的真实企业业务背景。从真实场景中，适当简化或者提炼出适合比赛的赛题场景	在日常的生活和工作中，每个人在各自的范围内不断累计，形成不同层次的过程资源财富，涵盖了文本、传真、图形、视频、音频等各个类型的知识财富载体。
> 在知识财富的不断累计过程中，由于知识财富的来源不同、用途不同、载体不同等，往往导致知识财富的时间链条错乱、关联知识无法有效检索、各类知识无法综合
> 运用等问题的出现，伴随知识财富的持续积累，这种问题愈发突出，迫切需要行之有效的手段来录入、管理、分析、统计知识财富，持续有效的归纳利用知识财富，
> 将助推个人及组织目标的实现。

**功能性需求**

> (总分100分,本项90分)	知识库管理系统包括文件集中存储上传、文档链接、关联文档、规则使用、智能检索等主要功能。
> 1.文件集中存储上传：支持文件的批量上传及压缩包导入，支持Office文档、PDF、图像、音视频和图纸等各类型文件。
> 2.文档链接：支持将文档发送至常用文档，用户无需每次在打开各个目录中查找； 支持将文档发送至目录，方便其他用户查阅；
> 3.关联文档：文档新建或上传后，系统会自动或手动为文件生成唯一编号，支持文档的批量关联。支持通过文件唯一编号，实现文档与相关文档、图纸、图片及其它格式附件进行关联，点击链接即可一键快速查看。系统支持为图片、音、视频类文件增加摘要及缩略图。
> 4.规则使用：系统支持为文件设定规则，指定动作（组合）、条件和操作，当动作触发符合 设定的条件，系统则自动执行规则的操作。
> 5.智能检索：快速从海量资料中精准检索所需文件，可根据依据文件类型、文件关键信息、时间等，也可在完成检索操作后对信息进行接受、判断、提取、分析和概括
> 之后形成自己的知识,然后保存,成为下一次分析、概括的依据和基础。可以直接在系统中预览各类格式的图片、播放视频、音频以及浏览各类Office文件，
> 包括Word、Excel、PowerPoint、WPS、Visio等格式。

**非功能性需求**	  
 

> 资料存储：管理的资料素材数目：≥1百万；   资料综合分析：通联关系分析时间：≥10万条记录下，<3分钟；  
> 文本处理：全文检索，当用户输入的查询词小于10个时，检索的响应速度小于5秒；  
> 文本处理：命名实体识别功能，能够支持中文，人名、组织机构名、时间、地名、目标类型、目标名称等；   文本处理：文本抽取功能，能够对pdf,
> office 2003/2007, html, email，chm，zip，rar抽取文本内容。

**其他限制条件：**

> 开发环境、实验平台、开发语言、数据库、编译器等限制条件（请尽量明确）	（1）硬件环境： 开发环境：服务器、PC机； 部署环境：服务器。
> （2）软件环境： 开发环境： 开发终端操作系统： Windows XP SP3或Win7； 开发工具：Eclipse 3.6以上、JDK
> 1.6以上； 服务器操作系统：Windows 2003 server 64位。 部署环境： 服务器操作系统：Windows 2003 server 64位； 运行环境：JDK 1.6。 运行支撑环境： 数据库：Mysql或oracle10g。
> 测试数据或平台：提供给参赛者的测试环境和测试数据。（可提供电子档）	采用个人积累或从网络获取的各类文本文档、图形图像、音频、视频等各类数据。
> 开发所需设备及设备指标需求说明	开发设备：市场上常规可见的PC机即可。

**其他要求**

> 总分100分,本项10分，视文档体系是否健全、文档撰写是否规范，予以0分-10分不等的评分)	在开发过程中保证软件的透明度，整个设计都严格按照软件工程的流程进行。在软件过程控制的各个阶段应产生相应的控制和设计文档。



