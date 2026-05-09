/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import {Video} from './types';

/** Base URL for static files. */
const staticFilesUrl =
  'https://www.gstatic.com/aistudio/starter-apps/veo3-gallery/';

/** Videos for the gallery. */
export const MOCK_VIDEOS: Video[] = [
  {
    id: '1',
    title: "Stop Motion: Fluffy Characters' Culinary Disaster",
    videoUrl:
      staticFilesUrl + 'Stop_Motion_Fluffy_Characters__Culinary_Disaster.mp4',
    description: `蓬松角色定格动画：在一个色彩鲜艳、温馨的厨房里，厨房是用毛毡和纱线制成的。尼布尔斯教授是一个戴着特大眼镜、圆滚滚的蓬松仓鼠，他紧张地在微型炉子上搅拌着一个冒泡的锅，咕哝着：“再加一点……食谱里要求的‘咸味精华’。”摄像机采用中景拍摄，捕捉到了他疯狂搅拌的画面。突然，锅里发出一声响亮的“砰！”，接着是滑稽的“嗖嗖”声，一股彩虹色的绿泥喷涌而出，覆盖了整个厨房。尼布尔斯教授尖叫道：“天哪！又来了！”然后匆忙跑开，留下一串短促而惊恐的吱吱声。

Fluffy Characters Stop Motion: Inside a brightly colored, cozy kitchen made of felt and yarn. Professor Nibbles, a plump, fluffy hamster with oversized glasses, nervously stirs a bubbling pot on a miniature stove, muttering, "Just a little more... 'essence of savory,' as the recipe calls for." The camera is a mid-shot, capturing his frantic stirring. Suddenly, the pot emits a loud "POP!" followed by a comical "whoosh" sound, and a geyser of iridescent green slime erupts, covering the entire kitchen. Professor Nibbles shrieks, "Oh, dear! Not again!" and scurries away, leaving a trail of tiny, panicked squeaks.`,
  },
  {
    id: '2',
    title: "Claymation: Robot's Existential Crisis",
    videoUrl: staticFilesUrl + 'Claymation_Robot_s_Existential_Crisis.mp4',
    description: `黏土动画（定格动画）：在一个古怪、凌乱的车库工作坊中，一个远景镜头显示了一个由不匹配零件制成的粗糙黏土机器人，它正垂头丧气地盯着一把断掉的扳手。摄像机慢慢放大它的脸，展现出滑稽的皱眉表情。它发出了单调的机器声音：“734单元报告……目标不明确。扳手……失去功能。”听到内部齿轮转动的声音，接着是悲伤的“哔哔”声。一个长着狂乱纱线头发的古怪人类发明家进入画面，看着机器人，兴高齐烈地喊道：“胡说，734！你的目标是帮我拿咖啡！”机器人的眼睛慢慢睁大，回答道：“咖啡……检测到新指令。正在扫描最近的咖啡因来源。”

Claymation (Stop Motion): In a quirky, cluttered garage workshop, a wide shot reveals a crudely built clay robot with mismatching parts, staring forlornly at a broken wrench. The camera slowly zooms in on its face, which expresses a comical frown. A robotic, monotone voice emanates from it, "Unit 734 reports... purpose undefined. Wrench... non-functional." A whirring of internal gears is heard, followed by a sad "boop-beep" sound. An eccentric human inventor with wild, yarn hair enters the frame, looks at the robot, and cheerfully exclaims, "Nonsense, 734! Your purpose is to fetch my coffee!" The robot's eyes slowly widen as it responds, "Coffee... new directive detected. Scanning for nearest caffeine source."`,
  },
  {
    id: '3',
    title: 'Abstract Cinematic: The Mechanical Heartbeat',
    videoUrl:
      staticFilesUrl + 'Abstract_Cinematic_The_Mechanical_Heartbeat.mp4',
    description: `序列以单个齿轮的特写开始，它缓慢旋转并反射着刺眼的阳光。摄像机在连续运动中逐渐拉远，揭示这只是埋在荒凉、锈红色沙漠中一颗巨大机械心脏的一个部件。一个大范围的航拍镜头确立了它在贫瘠景观中巨大的规模和孤立感。摄像机下降捕捉喷出的蒸汽管道和横跨空旷平原的回响节奏。伴随每次巨大的心跳，都有微妙的震动效果。一个横向追踪镜头发现微小的身着长袍的人影在金属表面匆忙走动。摄像机以详细的追踪镜头紧随其中一个人影，看他们如何进行细致的维护，擦拭黄铜阀门并拧紧巨大的螺栓。一个复杂的环绕运动拍摄了整个结构，捕捉了不同维护团队在锈迹斑斑的外壳上不稳定位置工作的情景。最后一个镜头从一个微小人影的细致工作开始，然后执行戏剧性的拉远，揭示心脏的真实规模以及照顾者的渺小，他们正照料着一个延伸到画面之外的、看不见的沉睡巨人的重要器官。

The sequence begins with an extreme close-up of a single gear, slowly turning and reflecting harsh sunlight. The camera gradually pulls back in a continuous movement, revealing this is but one component of a colossal, mechanical heart half-buried in a desolate, rust-colored desert. A sweeping aerial shot establishes its enormous scale and isolation in the barren landscape. The camera descends to capture pipes hissing steam and the rhythmic thumping that echoes across the empty plains. A subtle shake effect synchronizes with each massive heartbeat. A lateral tracking shot discovers tiny, robed figures scurrying across the metallic surface. The camera follows one such figure in a detailed tracking shot as they perform meticulous maintenance, polishing brass valves and tightening immense bolts. A complex movement circles the entire structure, capturing different maintenance teams working in precarious positions across its rusted exterior. The final shot begins tight on the meticulous work of one tiny figure before executing a dramatic pull-out that reveals the true scale of the heart and the minuscule size of its caretakers, tending to the vital organ of an unseen, sleeping giant that extends beyond the frame.`,
  },
  {
    id: '4',
    title: 'Characters Intense Talking',
    videoUrl: staticFilesUrl + 'Characters_intense_talking.mp4',
    description: `昏暗且高档的餐厅里充满了一种紧张的沉默，一位端庄的女性和一位疲惫的男性相对而坐。她缓慢地抿着酒，然后说道：“大卫，我们都知道为什么来这里。是时候诚实了，”远处隐约传来细碎的交谈声。他叹了口气，目光闪烁了一下，然后在回答之前与她对视：“诚实？莎拉，过了这么久，还剩下什么诚实呢？”一种显而易见的紧张感弥漫在空气中，只有细微的空调嗡嗡声打破了它，她目不转睛地盯着他。

A tense silence fills a dimly lit, upscale restaurant where a composed woman and a tired man sit opposite each other. She slowly sips wine, then states, "We both know why we're here, David. It's time to be honest," as faint chatter murmurs distantly. He sighs, his gaze flickering before meeting hers as he replies, "Honesty? After all this time, Sarah, what's left of it?" A palpable tension hangs, broken only by a subtle air conditioning hum, as her unblinking eyes hold his.`,
  },
  {
    id: '5',
    title: "Live Performance: Soulful Singer's Ballad",
    videoUrl: staticFilesUrl + 'Live_Performance_Soulful_Singer_s_Ballad.mp4',
    description: `一个戏剧性的低角度追踪镜头从一位黑人歌手身上慢慢拉远，夜晚，在烟雾缭绕的爵士乐俱乐部里，他们沉浸在温暖、亲密的舞台灯光中。他们闭着眼睛，平静而专注地唱着一个充满力量、令人振奋的高音，麦克风紧贴嘴边。摄像机后退，给他们留出用声音填满画面的空间。“让节奏升华你的灵魂……释放它！”柔和、共鸣的贝斯线和轻柔的钢琴和弦构成了和谐的背景，其间不时穿插着观众席传来的微弱酒杯碰撞声和低声喝彩。

A dramatic Low-Angle Tracking Shot pulls back slowly from a Black vocalist, bathed in warm, intimate stage lights in a smoky jazz club at night. Their eyes are closed in serene focus as they sing a powerful, uplifting note, microphone held close. The camera recedes, giving them space to fill the frame with their voice. "Let the rhythm lift your soul... set it free!" A soft, resonant bass line and gentle piano chords provide a harmonious backdrop, punctuated by the faint clink of glasses and hushed applause from the audience.`,
  },
  {
    id: '6',
    title: 'Nature Monkeys',
    videoUrl: staticFilesUrl + 'Nature_Monkeys.mp4',
    description: `在充满活力、雾气缭绕的热带雨林中，两只棕色的小猕猴栖息在长满苔藓的树枝上。一只猴子温柔地梳理着另一只的毛发，发出柔和的“吱吱”声和“咕噜”声。摄像机慢慢进一步放大，它们凑近凝视着对方，接着其中一只发出了温柔、满足的“咕咕”声。背景是葱郁绿叶和微薄雾气构成的柔和模糊的织锦。热带雨林的自然声音，包括远处的鸟鸣、昆虫的鸣叫和水滴嘀嗒的声音，隐约可闻。

A gentle close-up on two small, brown macaque monkeys perched on a moss-covered branch in a vibrant, misty rainforest. One monkey tenderly grooms the other's fur, making soft "chittering" and "purring" sounds. The camera slowly zooms in further as they lean inand gaze at each other, followed by a soft, content "coo" from one of them. The background is a soft, blurred tapestry of lush green foliage and faint mist. The ambient sounds of the rainforest, including distant bird calls, insect chirps, and the gentle drip of water, are subtly present.`,
  },
  {
    id: '7',
    title: 'Video Game Trailer: Sci-Fi Urban Chase',
    videoUrl: staticFilesUrl + 'Video_Game_Trailer_Sci_Fi_Urban_Chasemp4.mp4',
    description: `一个快速追踪的 POV 镜头穿过夜晚霓虹闪烁、肮脏的赛博朋克小巷。雨水打湿了路面，反射着全息广告的光芒。快速、沉重的脚步声和沉重的呼吸声在音频中占据主导地位。突然，摄像机猛地转向侧向追踪镜头，跟随一位敏捷的主角（一位穿着连帽外套的女性），她跃过废弃的箱子，被两架全副武装的安保无人机追逐。激光火力扫过，伴随着尖锐的“ pew-pew”声效和无人机的嗡嗡声。高能、脉动的电子音乐推动着剧情向前发展。她钻进一个狭窄的开口；摄像机无缝跟随，以摇晃的镜头效果结束，她落在地上，喘着粗气。

A fast-tracking POV shot through a grimy, neon-lit cyberpunk alleyway at night. Rain slicks the pavement, reflecting the glow of holographic advertisements. The sound of rapid, pounding footsteps and heavy breathing dominates the audio. Suddenly, the camera whips around to a lateral tracking shot following a nimble protagonist (a woman in a hooded jacket) as she leaps over discarded crates, pursued by two heavily armored security drones. Laser fire zaps past, accompanied by sharp "pew-pew" SFX and the whirring of the drones. High-energy, pulsating electronic music drives the action forward. She dives through a narrow opening; the camera follows seamlessly, ending with a shaky cam effect as she lands, panting.`,
  },
  {
    id: '8',
    title: 'Animals in Nature: Bear and River',
    videoUrl: staticFilesUrl + 'Animals_in_Nature_Bear_and_River.mp4',
    description: `傍晚，在被茂密松林环绕的原始、湍急的山间河流远景中。相机慢慢放大，露出一个巨大的、雄伟的灰熊，它站在齐膝深的急流中，熟练地捕捉三文鱼。水流湍急的声音很突出，伴随着灰熊移动时偶尔发出的水花声。抓住鱼后，灰熊发出一声低沉满足的咕噜声，然后慢慢涉向岸边享受它的猎物。背景中充斥着看不见的鸟儿微弱的鸣叫和远处的蝉鸣。

A wide shot of a pristine, fast-flowing mountain river at dusk, surrounded by dense pine forest. The camera slowly zooms in to reveal a large, majestic grizzly bear standing knee-deep in the rapids, expertly swiping at salmon. The rushing water sound is prominent, accompanied by the occasional splash as the bear moves. The bear lets out a low, content grumble after catching a fish, then slowly wades to the bank to eat its catch. Faint chirping of unseen birds and distant cicadas fill the background.`,
  },
  {
    id: '9',
    title: 'Kyoto Serenity From Scene to Postcard',
    videoUrl: staticFilesUrl + 'Kyoto_Serenity_From_Scene_to_Postcard.mp4',
    description: `柔和的晨光洒在京都宁静的小径上，小径两旁种满了古老而扭曲的樱桃树，娇嫩的粉红色花瓣轻轻飘落在地。一小群野生梅花鹿，眼神温柔，鹿角带着天鹅绒般的质感，在树丛中优雅地漫步，偶尔啃食落花。一个缓慢平稳的追踪镜头跟随一只特别优雅的鹿，看它低头啃食。唯一的声音是叶子的沙沙声，花瓣飘落的微弱“噼啪”声，以及鹿偶尔发出的细微“嗅闻”和“咀嚼”声。远处隐约的寺庙钟声敲响，更增添了宁静的氛围。当鹿抬起头，带着平静的好奇心直视镜头时，摄像机开始缓慢而刻意的拉远。充满活力的场景微妙地变柔和并平坦化，颜色转变为略微褪色的插画风格，一个清晰的白色边框逐渐出现在画面周围，将这个原本动态的画面定格。环境音渐渐消失，取而代之的是柔和、悠远、单一的琴弦声，余音袅袅。在明信片底部，整齐地覆盖着经典优雅的字体，出现了几个字：“京都，日本 - 春日宁静”。

Soft morning light bathes a serene path in Kyoto, lined with ancient, gnarled cherry trees whose delicate pink petals drift gently to the ground. A small herd of wild sika deer, with gentle eyes and velvety antlers, gracefully wanders among the trees, occasionally nibbling on fallen blossoms. A slow, gliding tracking shot follows one particularly elegant deer as it lowers its head to nibble. The only sounds are the soft rustle of leaves, the gentle "pitter-patter" of falling petals, and the occasional soft "sniff" and "munching" from the deer. Faint, distant temple bells chime, adding to the tranquil atmosphere. As the deer lifts its head, looking directly at the camera with calm curiosity, the camera begins a slow, deliberate pull-out. The vibrant scene subtly softens and flattens, its colors shifting to a slightly desaturated, illustrative style, as a crisp, white border gradually appears around the frame, framing the now-static image. The ambient sounds gently fade away, replaced by the soft, distant, single chime of a koto string, holding its note. Overlaid neatly in a classic, elegant font, the words "Kyoto, Japan - Spring Serenity" appear at the bottom of the postcard.`,
  },
  {
    id: '10',
    title: 'Fluffy Characters Picnic in a Mushroom Forest',
    videoUrl:
      staticFilesUrl + 'Fluffy_Characters_Picnic_in_a_Mushroom_Forest.mp4',
    description: `蓬松角色定格动画：一片明亮、异想天开的森林空地，生长着巨大的彩色蘑菇。两个可爱的、长着好奇大眼睛的蓬松松鼠般的小生物正在野餐。其中一个戴着一条细小的针织围巾，正试图打开一罐“坚果酱”，发出沮丧而柔和的“哼哼”声和细小的“喘气”声。摄像机在中景拍摄，然后慢慢放大那个费力打开的罐子。另一个长得更蓬松、耳后戴着花的生物轻声咯咯地笑着，然后用甜美的高音说道：“需要帮忙吗，斯奎格尔？”整段背景音乐播放着轻柔悠扬的笛子曲。

Fluffy Characters Stop Motion: A bright, whimsical forest clearing where oversized, colorful mushrooms grow. Two adorable, fluffy squirrel-like creatures with big, curious eyes are having a picnic. One, wearing a tiny knitted scarf, attempts to open a jar of "Nutty Spread," making frustrated, soft "grunts" and tiny "panting" sounds. The camera is a mid-shot, then slowly zooms in on the struggling jar. The other, an even fluffier creature with a flower behind its ear, giggles softly, then says in a sweet, high-pitched voice, "Need a paw, Squiggle?" A gentle, melodic flute tune plays throughout.`,
  },
];
