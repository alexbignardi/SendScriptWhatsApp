async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

 "BRAVEHEART"

                                            by

                                     Randall Wallace

                                       Early Draft

                

               FADE IN:

               EXT. THE SCOTTISH COUNTRYSIDE - DAY

               Epic beauty: cobalt mountains beneath a glowering purple sky 
               fringed with pink, as if the clouds were a lid too small for 
               the earth; a cascading landscape of boulders shrouded in 
               deep green grass; and the blue lochs, reflecting the sky. We 
               hear a voice, husky, Scottish...

                                     VOICE OVER
                         I will tell you of William Wallace.

               EXT. MACANDREWS FARM - DAY

               A farmhouse and a large barn lie nestled in a Scottish valley. 
               Riding down the roads that lead in from opposite sides are 
               Scottish noblemen in full regalia: eye-popping tartans, 
               sparkling chestplates. Even the horses are draped in scarlet. 
               Behind each nobleman rides a single page boy.

                                     VOICE OVER
                         Historians from England will say I 
                         am a liar. But history is written by 
                         those who have hung heroes.

               Another noble rides in from the opposite side. Two more appear 
               down the road, converging on the barn.

                                     VOICE OVER
                         The King of Scotland had died without 
                         a son, and the king of England, a 
                         cruel pagan known as Edward the 
                         Longshanks, claimed the throne for 
                         himself. Scotland�s nobles fought 
                         him, and fought each other, over the 
                         crown. So Longshanks invited them to 
                         talks of truce. No weapons, one page 
                         only.

               The nobles eye each other cautiously, but the truce holds.

               They enter the barn, with their pages...

               EXT. SCOTTISH FARM - DAY

               Nestled in emerald hills are the thatched roof house and 
               barn and outbuildings of a well-run farm. The farmer, MALCOLM 
               WALLACE, and his nineteen-year-old son JOHN, both strong, 
               tough men, are riding away from the farm. They hear hooves 
               behind them and turn to see a boy riding after them.

                                     VOICE OVER
                         Among the farmers of that shire was 
                         Malcolm Wallace, a commoner, with 
                         his own lands and two sons: John...

               We FAVOR JOHN WALLACE, the nineteen-year-old sitting easily 
               on his horse, beside his father...

                                     VOICE OVER
                         ...and William.

               WILLIAM, a skinny eight-year-old riding bareback, catches up 
               to his father and older brother.

                                     FATHER
                         Told ya to stay.

                                     WILLIAM
                         I finished my chores. Where we goin'?

                                     FATHER
                         MacAndrews'. He was supposed to visit 
                         when the truce was over.

               They ride on, over the lush hills.

               EXT. THE MACANDREWS FARM - DAY

               The horses are all gone; the place looks deserted. UP ON THE 
               HILL we see the three Wallaces, looking down.

                                     FATHER
                         Stay here.

               He means William. He and his elder son spur their horses.

               AT THE BARN - DAY

               The Wallaces ride up, looking around.

                                     FATHER
                         MacAndrews!... MacAndrews!?

               Malcolm finds a pitchfork, John the woodpile axe...

               INT. THE BARN

               POV from within as the door opens and a widening block of 
               sunlight illuminates the dusty shadows. Malcolm and John 
               Wallace step in, and are shocked to see...

               POV THE WALLACES

               Hanging from the rafters of the barn are thirty Scottish 
               noblemen and thirty pages, their faces purple and contorted 
               by the strangulation hanging, their tongues protruding.

               Malcolm stabs the pitchfork into the ground in useless anger; 
               John still grips the axe as he follows his father through 
               the hanging bodies of the noblemen to the back row, to see 
               the one man in commoner's dress, like theirs...

                                     FATHER
                         MacAndrews.

               A SHUFFLE; John spins; William has entered the back door.

                                     JOHN
                         William! Get out of here!

                                     WILLIAM
                         Why would MacAndrews make so many 
                         scarecrows?

               Before his father and brother can think of anything to say, 
               William, with a boy's curiosity, touches the spurred foot of 
               the hanged noblemen we first saw riding in. It's too solid; 
               he takes a real look at the face, and suddenly --

                                     WILLIAM
                         R -- real!!!... Ahhhhhgggg!...

               He turns to run, but knocks back into the feet of the hanged 
               man behind him! In blind panic he darts in another direction, 
               and runs into another corpse, and another; the hanged men 
               begin to swing, making it harder for William's father and 
               older brother to fight their way to him.

                                     FATHER
                         William! William!

               Then, worst of all, William sees the pages, boys like himself, 
               hanged in a row behind their masters!

               Finally his father and brother reach William and hug him 
               tight. There in the barn, among the swinging bodies of the 
               hanged nobles, Malcolm Wallace grips his sons.

                                     FATHER
                         Murderin' English bastards.

                                                                    CUT TO:

               EXT. WALLACE FARMHOUSE - NIGHT

               The cottage looks peaceful, the windows glowing yellow into 
               the night. From outside the house we see John rise and close 
               the shutters of the kitchen, where men are gathered. We PAN 
               UP to the upper bedroom window...

               INSIDE THAT BEDROOM

               Young William is in nightmarish sleep. He mumbles in smothered 
               terror; he twitches. We see

               HIS NIGHTMARE

               In the blue-grays of his dream, William stands at the door 
               of the barn, gazing at the hanged knights. We WHIP PAN to 
               their faces, garish, horrible... Then one of the heads moves 
               and its eyes open! William wants to run, but he can't get 
               his body to respond... and the hanging nobleman, his bloated 
               tongue still bursting through his lips, moans...

                                     GHOUL
                         Will--iam...!

               WILLIAM tears himself from sleep; looking around, swallowing 
               back his tears and panic.

               IN THE KITCHEN

               A dozen strong, tough farmers have huddled. Red-headed 
               CAMPBELL, scarred and missing fingers, is stirred up, while 
               his friend MacCLANNOUGH is reluctant.

                                     CAMPBELL
                         Wallace is right! We fight 'em!

                                     MACCLANNOUGH
                         Every nobleman who had any will to 
                         fight was at that meeting.

                                     MALCOLM WALLACE
                         So it's up to us! We show them we 
                         won't lie down to be their slaves!

                                     MACCLANNOUGH
                         We can't beat an army, not with the 
                         fifty farmers we can raise!

                                     MALCOLM WALLACE
                         We don't have to beat 'em, just fight 
                         'em. To show 'em we're not dogs, but 
                         men.

               Young Wallace has snuck down and is eavesdropping from the 
               stairs. He sees his father drip his finger into a jug of 
               whiskey and use the wet finger to draw on the tabletop.

                                     MALCOLM WALLACE
                         They have a camp here. We attack 
                         them at sunset tomorrow. Give us all 
                         night to run home.

               EXT. WALLACE FARM - DAY

               Malcolm and John have saddled horses; they are checking the 
               short swords they've tucked into grain sacks when William 
               comes out of the barn with his own horse.

                                     MALCOLM
                         William, you're staying here.

                                     WILLIAM
                         I can fight.

               These words from his youngest son make Malcolm pause, and 
               kneel, to look into William's eyes.

                                     MALCOLM
                         Aye. But it's our wits that make us 
                         men. I love ya, boy. You stay.

               Malcolm and John mount their horses and ride away, leaving 
               William looking forlorn. They wave; he waves back.

               EXT SCOTTISH HILLS, NEAR THE WALLACE FARM - DAY

               It's strangely quiet, until William and his friend HAMISH 
               CAMPBELL, a red-headed like his father, race up the hillside 
               and duck in among a grove of trees. Breathless, gasping, 
               they press their backs to the tree bark. William peers around 
               a tree, then shrinks back and whispers...

                                     WILLIAM
                         They're coming!

                                     HAMISH
                         How many?

                                     WILLIAM
                         Three, maybe more!

                                     HAMISH
                         Armed?

                                     WILLIAM
                         They're English soldiers, ain't they?

                                     HAMISH
                         With your father and brother gone, 
                         they'll kill us and burn the farm!

                                     WILLIAM
                         It's up to us, Hamish!

               Hamish leans forward for a look, but William pulls him back.

                                     WILLIAM
                         Not yet! Here he comes, be ready!

               They wait; heavy FOOTSTEPS. Then from around the edge of the 
               grove three enormous, ugly hogs appear. The boys hurling 
               rotten eggs. The eggs slap the snouts of the pigs, who scatter 
               as the boys charge, howling. We PULL BACK... as the sun goes 
               down on their play.

               EXT. THE WALLACE HOUSE - SUNDOWN

               The boys walk toward the house, beneath a lavender sky.

                                     HAMISH
                         Wanna stay with me tonight?

                                     WILLIAM
                         I wanna have supper waitin'.

                                     HAMISH
                         We'll get those English pigs tomorrow.

                                     WILLIAM
                         Aye, we'll get 'em.

               EXT. HOUSE - NIGHT

               William's face appears at the window, looking toward

               THE DISTANT HILLS

               of trees and heather, where there is no sign of life.

               INT. THE HOUSE - NIGHT

               William has cooked stew in a pot, and now spoons up two 
               steaming bowls full and sets them out on the table. But he 
               is only hoping. He looks out the window again; he is still 
               all alone. So he leaves a candle burning on the table beside 
               the stew, and moves up the stairs.

               EXT. FARMHOUSE - DAWN

               The house is silent, fog rolling around it in the dawn.

               INT. FARMHOUSE - DAWN

               William has been awake all night, afraid to sleep. He rises, 
               and in QUICK CUTS: he dresses; he moves down the hall, stops 
               at the door of his father's bedroom and sees the undisturbed 
               bed. He moves on, passing the door of his brother's room, 
               also unrumpled.

               IN THE KITCHEN

               He finds the two cold bowls of stew, beside the exhausted 
               candle. He spoons up his own cold porridge, and eats alone.

               EXT. HOUSE - DAY

               William is in the barn loft, shoveling corn down to feed the 
               hogs, while he glimpses something coming.

               THE BOY'S POV

               An ox cart is coming down the curving lane. Its driver is 
               Campbell, with MacClannough walking behind it. The farmers 
               glance up at William, their faces grim...

               From his perch in the loft, William sees that the neighbors 
               have brought: the bodies of his father and brother. The cart 
               stops; Campbell, with a bandage around his left hand where 
               more of his fingers are now missing, studies the back of the 
               ox, as if it could tell him how to break such news. The butt 
               of the ox seems to tell him to be matter-of-fact.

                                     CAMPBELL
                         William... Come down here, lad.

               William looks away, he takes quick breaths, he looks back... 
               but the bodies are still there.

               EXT. HOUSE - DAY

               It's now surrounded by horses, wagons, and neighbors. The 
               undertaker arrives in his hearse.

               INT. THE SHED - DAY

               On a table the undertaker has laid out the bodies and is 
               preparing them. Cloths around the lower jaw and top of the 
               head bind their mouths shut; pennies cover their eyes.

               Softly, William enters the shed, drawn to his father and 
               brother. Campbell follows him in, wanting to stop him -- but 
               what can he say now? The undertaker goes on with his work.

               William approaches the table; the bodies don't look real to 
               him. He sees the wounds. The dried blood.

               The undertake pours water from a bowl and scrubs off the 
               blood. But the wounds remain.

               EXT. GRAVESIDE - DAY

               CLOSE on a grave, with a headstone marked ANNE WALLACE. We 
               INCLUDE the two new graves freshly dug beside it, and see 
               the mourners gathered before them. The sight of the boy, 
               standing alone in front of the graves of his dead mother, as 
               the bodies of his father and brother are lowered with ropes 
               into the ground beside her, has all of the neighbors shaken.

               The local parish PRIEST drones mechanically in Latin.

               The farmers who were secretly gathered in Malcolm Wallace's 
               kitchen the previous night are now glancing at William; but 
               no one is anxious to adopt a grieving, a rebellious boy.

               Behind MacClannough are his wife and two daughters; his 
               youngest is barely four, not half William's age; she's a 
               beautiful girl with long auburn hair, and she clings to her 
               own mother's hand, as if the open graves are the mouths of 
               death and might suck her parents in too.

                                     PRIEST
                         ...Restare in pacem eternis, Amen.

               With the final Amen, the neighbors drift from the graveside, 
               pulling their Children along, to give William a last moment 
               of private grief before the grave diggers cover the bodies.

               The boy stands alone over the open graves, his heart so 
               shattered that he can scarcely cry; a single tear makes its 
               way down his face. And the tiny girl feels for William in a 
               way that the adults cannot. From the ground she pulls a 
               Scottish thistle, moves to the softly weeping William and 
               places the beautiful wild blossom in his hand.

               William looks up and their young eyes meet; her sad blue 
               eyes hold William's as the grave diggers cover the bodies.

               Then a lone, mounted figure appears at the crest of the hill 
               above them. Tall, thin and angular, in black clerical garb, 
               he looks like the grim reaper.

               The girl hurries back to her mother's side; everyone watches 
               in silence as the figure rides down to them. He is ARGYLE 
               WALLACE. He looks like a human buzzard, his face craggy, 
               permanently furious.

                                     PRIEST
                         You must be the relative of the 
                         deceased... William, this is your 
                         Uncle Argyle.

               Argyle glowers at the man, dismounts, and glares at William.

               William stares up at this frightening figure. They are 
               interrupted by the ominous sound of approaching horses; a 
               dozen mounted English soldiers, armed with lances, are 
               approaching. Argyle rattles to the priest...

                                     ARGYLE
                         You were wise to hurry.

               The soldiers ride right in among the mourners and stare down 
               from their saddles, haughty, menacing, their LEADER brusque.

                                     LEADER
                         Someone dead from this household?

                                     ARGYLE
                         We just had a funeral, isn't that 
                         what it means in England as well?

                                     LEADER
                         What it means in England -- and in 
                         Scotland too -- is that rebels have 
                         forfeited their lands. We were 
                         ambushed last night. But the Scots 
                         dragged their dead away.

                                     ARGYLE
                         My brother and nephew perished two 
                         days ago, when their hay cart turned 
                         over.

                                     LEADER
                         Then we'll just have a peek at the 
                         wounds.
                              (to his men)
                         Dig 'em up!

                                     ARGYLE
                         They've been sanctified and buried 
                         in the holy rites of God's church, 
                         and any hand that disturbs them now 
                         takes on eternal damnation. So please -- 
                         do it.

               Outmaneuvered, the leader reins his horse away. Several of 
               the farmers spit on the ground. Argyle glares at them.

                                     ARGYLE
                         Funeral's over. Go home.

               INT. THE KITCHEN - NIGHT

               William and Argyle are sitting at the table, eating. Argyle 
               has laid out a proper meal, with exact place settings.

                                     ARGYLE
                         Not that spoon, that one's for soup. 
                         Dip away from you. And don't slurp.

               Argyle sits down and begins to dine with the boy.

                                     ARGYLE
                         We'll sleep here tonight. You'll 
                         come home with me. We'll let the 
                         house, and the lands too; plenty of 
                         willing neighbors.

                                     WILLIAM
                         I don't want to leave.

                                     ARGYLE
                         Didn't want your father to die either, 
                         did ya? But it happened.

               Argyle pushes his food away; he has no appetite now.

                                     ARGYLE
                         Did the priest say anything about 
                         the Resurrection? Or was it all about 
                         Judgment?

                                     WILLIAM
                         It was in Latin, sir.

                                     ARGYLE
                         Non loquis Latinum? You don't speak 
                         Latin? We have to fix that, won't 
                         we?
                              (beat)
                         Did he give the poetic benediction? 
                         The Lord bless thee and keep thee? 
                         Patris Benefactum et --
                              (beat)
                         ...It was Malcolm's favorite.

               INT. WILLIAM'S BEDROOM - NIGHT

               Argyle knows nothing about tucking a boy in bed; he stands 
               awkwardly idle as William scrubs his face at the washstand 
               and crawls into bed.

                                     WILLIAM
                         Good night, Uncle.

               Argyle grunts and starts out. Then he stops, turns back, 
               leans down over William... and with great tenderness the 
               grizzled old uncle kisses his nephew on his hair.

               INT. THE KITCHEN - NIGHT

               Argyle sits by the hearth, staring at the embers. He holds 
               the huge broadsword that belonged to his brother. He looks 
               at the handle, like a cross. He whispers...

                                     ARGYLE
                         "The Lord bless thee and keep thee..."

               Tears of grief spill down the old man's cheeks.

               INT. THE HANGING BARN - IN WILLIAM'S DREAM

               Once again the boy stands in the doorway of the barn, looking 
               at the garish, hanged faces in his nightmare. Then a mangled 
               hand comes from behind him and grasps his shoulder, William 
               gasps, but the hand holds him gently. He turns to see his 
               father, and his brother! They are wounded, bloody, but they 
               smile at him; they're alive! Weeping in joy, William reaches 
               to hug them, but his father stretches forth a forbidding 
               hand.

               William keeps reaching out helplessly. His father and brother 
               move past him to the hanged knights. Two empty nooses are 
               there. Before the boy's weeping eyes they put their heads 
               into the nooses, and hoist themselves up.

               William's grief explodes; his tears erupt and

               HE WAKES IN HIS BEDROOM

               tears flooding down his face. A dream! Still upset, still 
               grieving, he gets up and goes looking for his uncle.

               INT. HOUSE - NIGHT

               William moves down to the room where his uncle would be 
               sleeping. He opens the door. The bed has been slept in -- 
               but his uncle is not there. He moves downstairs to

               THE KITCHEN

               But his uncle is not there either. Then William hears a 
               strange, haunting sound-distant, carried by the wind. He 
               moves to the window and sees only moonlight. He opens the 
               window and hears it more clearly: bagpipes. William lights a 
               candle and throws open the door. Wind rushes in, blowing out 
               his candle. But he hears the pipes, louder in the wind.

               EXT. WALLACE HOUSE - NIGHT

               William is barefoot and in only his nightshirt; but the sound 
               of the pipes is growing louder. He moves through the 
               moonlight, drawn toward -- the graveyard! He stops as he 
               realizes this, then forces himself on.

               EXT. GRAVEYARD - NIGHT

               William moves to the top of the hill where his ancestors are 
               buried, and discovers a haunting scene: two dozen men, the 
               farmer/warriors of his neighborhood, are gathered in kilts -- 
               and among them, a core of bagpipers. The pipes wail an ancient 
               Scottish dirge, a tune of grief and redemption, a melody 
               known to us as "Amazing Grace." Uncle Argyle has heard them 
               and walked out too; he stands at the fringes of the 
               torchlight, still holding the massive broadsword. He glances 
               down, noticing William as the boy moves up beside him. William 
               whispers...

                                     WILLIAM
                         What are they doing?

                                     ARGYLE
                         Saying goodbye in their own way -- 
                         in outlawed tartans, with outlawed 
                         pipes, playing outlawed tunes.

               The farmers file by the graveside, crossing themselves, each 
               whispering his own private prayer. Argyle whispers, half to 
               William, and half to himself...

                                     ARGYLE
                         Your Daddy and I, we saw our own 
                         father buried like this, dead from 
                         fighting the English.

               William takes the sword from his uncle, and tries to lift 
               it.

               Slowly, Argyle takes the sword back.

                                     ARGYLE
                         First learn to use this.

               He taps William on the temple with the tip of his finger.

                                     ARGYLE
                         Then I will teach you to use this.

               With an expert's easy fluidity, he lifts the huge sword. It 
               glistens in the torchlight. The music plays, the notes hanging 
               in the air, swirling in the Scottish breeze as if rising 
               towards the stars...

               EXT. WALLACE FARM - DAY

               William and his uncle ride off in a farm wagon. William has 
               a bundle of clothes in his lap, and glances at his uncle as 
               if afraid of his disapproval if he looks back. But he does 
               glance back just once, to see the deserted farmhouse.

                                                               DISSOLVE TO:

               INT. WESTMINSTER ABBEY - ROYAL WEDDING - DAY

               Amid the scarlet and ermine robes of officiating lords, with 
               gemstones sparkling everywhere, we hear...

                                     VOICE OVER
                         Twelve years later, Longshanks 
                         supervised the wedding of his eldest 
                         son, also named Edward, who would 
                         succeed him to the throne.

               LONGSHANKS, King of England, stands in the jeweled light of 
               the ancient Abbey. Known as Longshanks because of the spindly 
               legs that make him almost seven feet tall, he has a hawk's 
               nose and a snake's eyes, punctuating a face of distinct 
               cruelty. Historians of his day considered him and the line 
               of Plantagenets from which he came to be devil worshipers.

                                     VOICE OVER
                         As bride for his son, Longshanks had 
                         chosen a relative of his rival, the 
                         king of France.

               GENEVIEVE, a nineteen-year-old virgin of stupendous beauty 
               moves down the aisle, the light in her face outshining her 
               blindingly white wedding gown. As she reaches the altar her 
               hands tremble, but she maintains her poise and control.

               She looks toward EDWARD, Prince of Wales. Pampered young men 
               surround him as his retinue. He takes her hand coldly and 
               goes through the ceremony under his father's stare.

                                     VOICE OVER
                         It was widely whispered that for the 
                         Princess to conceive, Longshanks 
                         would have to do the honors himself. 
                         That may have been what he had in 
                         mind all along.

               The ceremony concluding, attendants lift back the bride's 
               veil. Her wedding day, the ultimate moment -- and Prince 
               Edward ignores her, to turn back to his friends. But prompted 
               by one of the sour lords, he leans over and pecks his new 
               Princess on the cheek. For an instant, we see in her eyes 
               that her heart is dying. But she keeps her poise.

                                     VOICE OVER
                         Having seen to his obligations to 
                         provide for a successor, Longshanks 
                         set about his fondest business -- to 
                         crush Scotland, and turn his power 
                         against France...

               CLOSE - A MAP OF THE BRITISH ISLES

               Longshanks' narrow finger jabs Scotland.

                                     LONGSHANKS
                         Scotland! Scot-land!

               We are in the --

               INT. ROYAL ENGLISH PALACE - DAY

               Longshanks is being listened to by his advisors, all in the 
               outrageous splendor of royal military dress, and all deathly 
               afraid of him.

                                     LONGSHANKS
                         The French will grovel to anyone 
                         with strength! But how will they 
                         credit our strength when we cannot 
                         rule the whole of our own island?!

               He punches the map, then sees the Princess enter softly.

                                     LONGSHANKS
                         Where is my son?

                                     PRINCESS
                         Your pardon, M'lord, he asked me to 
                         come in his stead.

               Longshanks' eyes expand in fury; it is frightening to see.

                                     LONGSHANKS
                         I sent for him -- and the little 
                         coward send you?!

                                     PRINCESS
                         Shall I leave, M'lord?

                                     LONGSHANKS
                         If he wants his queen to rule, then 
                         you stay and learn how! I will deal 
                         with him.

               He spins back toward his generals. Ignored, the princess 
               settles silently onto the cushions of the window seat.

                                     LONGSHANKS
                         Nobles are the key to the Scottish 
                         door. Grant their nobles land here 
                         in England. Give our own nobles 
                         estates in the north. Make them too 
                         greedy to oppose us.

               One OLD ADVISOR speaks up hesitantly.

                                     OLD ADVISOR
                         Sire... Our nobles will be reluctant 
                         to relocate. New lands mean new taxes, 
                         and they are taxed already for our 
                         war in France.

               Longshanks glares at him, but takes the point. The wheels 
               grind in his brain; his dark eyes falling on the Princess, 
               he is inspired.

                                     LONGSHANKS
                         Perhaps it's time to reinstitute an 
                         old custom. Grant them prima noctes, 
                         "First night." When any common girl 
                         inhabiting their lands is married, 
                         our lords shall have sexual rights 
                         to her on the night of her wedding. 
                         That should fetch just the kind of 
                         lords we want in Scotland.

               INT. PRINCE EDWARD'S ROYAL APARTMENTS - DAY

               The prince and a muscular young friend, PHILLIP, are stripped 
               to the waist and fencing. They pay no attention to the

               KNOCK, or to the Princess as she enters. She watches them -- 
               they are dancing more than fencing. Edward loses his sword; 
               it clatters to the polished floor. He looks up at his wife, 
               as if angry at her for having seen his clumsiness.

                                     EDWARD
                         What is it?!

                                     PRINCESS
                         You directed me to report to you the 
                         moment the king's conference was 
                         ended.

                                     EDWARD
                         So I did! And what was so important 
                         about it?

                                     PRINCESS
                         Scotland. He intends --

               But Edward and his friend are fencing again, the clanging of 
               their blunted swords so loud that she can't hear herself.

                                     PRINCESS
                         He intends to grant --

               Edward loses his weapon again, and whirls on her.

                                     EDWARD
                         Shut up, would you! How can I 
                         concentrate?!

                                     PRINCESS
                         ...His majesty was quite keen that 
                         you should understand --

                                     EDWARD
                         All so very boring! He wants me to 
                         learn to fight too, so let me do it!

               For an instant, anger flares into her eyes. She glances at 
               Edward, and at the young man with him, then lowers her eyes 
               and starts to back out. But Edward has noticed.

                                     EDWARD
                         Stop there.

               She stops, but does not raise her eyes.

                                     EDWARD
                         Do you disapprove of Phillip?

               He lifts his hand and draws his friend Phillip to his side.

               Still the Princess does not lift her eyes.

                                     PRINCESS
                              (barely audible)
                         No, M'lord.

                                     EDWARD
                         Look at me. I said LOOK AT ME!

               She lifts her eyes. But she could not brace herself enough 
               for what she sees: Edward nuzzling Phillip, the prince's 
               bare chest to his muscular friend's bare back, both men 
               glistening with sweat and sexual excitement.

               The Princess's eyes quiver... but she does not look away.

                                     EDWARD
                         Now, my flower, do you understand?

                                     PRINCESS
                         Yes. I had thought that... I was 
                         loathsome to you. Perhaps I am. If I 
                         may be excused, M'lord.

                                     EDWARD
                         You may.

               She starts to leave, as quietly as she came. But her husband 
               calls after her.

                                     EDWARD
                         Don't worry, m'Lady, it is my royal 
                         responsibility to breed. And I assure 
                         you, when the time comes, I shall... 
                         manage.

               She closes the door softly, on her husband and his lover.

                                     VOICE OVER
                         Now in Edinburgh were gathered the 
                         council of Scottish nobles...

               ESTABLISHING COUNCIL - DAY

               The picturesque heart of Scotland, with its CASTLE on a fairy 
               tale plateau above the Firth of Forth.

               INT. EDINBURGH CASTLE - DAY

               The nobles are gathered around a huge table. They rise at 
               the entrance of young ROBERT THE BRUCE, a handsome young 
               man, full of intelligence and power.

                                     VOICE OVER
                         Among these was Robert, the 17th 
                         Earl of Bruce, a leading contender 
                         for the crown of Scotland.

               Robert strides to his seat in the center of the table, and 
               the others settle in respectfully. MORNAY, another young 
               warrior, gives him a bow, as does CRAIG, a grizzled noble.

                                     CRAIG
                         Young Robert, we are honored --

                                     ROBERT
                         My father hears that Longshanks has 
                         granted prima noctes.

                                     CRAIG
                         Clearly meant to draw more of his 
                         supporters here.

                                     MORNAY
                         The Balliol clan has endorsed the 
                         right, licking Longshanks' boots so 
                         he will support their claim to the 
                         throne. If we make a show of 
                         opposition, the commoners will favor 
                         us.

                                     ROBERT
                         It is too soon to step out alone. My 
                         father believes we must lull 
                         Longshanks into confidence, by neither 
                         supporting his decree nor opposing 
                         it.

                                     CRAIG
                         A wise plan. And how is your father? 
                         We have missed him at the council.

                                     ROBERT
                         He strained his leg so that it pains 
                         him to ride. But he sends his 
                         greetings -- and says that I speak 
                         for all the Bruces. And for Scotland.

               EXT. SCOTTISH VILLAGE, AT THE EDGE OF TOWN - DAY

               Flutes and dancing; laughter and garlands; village families 
               have gathered for a wedding celebration -- we see the happy 
               bride and groom. Farmers cart in fresh bread and hoops of 
               cheese; villagers arrive with casks of beer or strings of 
               smoked fish.

               And watching the people are ubiquitous English soldiers, 
               battlescarred veterans with missing eyes and ears.

               Riding along the road comes William Wallace. Grown now, a 
               man. He sits his horse as if born there, his back straight, 
               his hands relaxed on the reins. He has a look of lean, rippled 
               power. He looks dangerous.

               And the soldiers notice him, nudging each other as he passes.

               He carries a dead wild goose hanging across his saddle; he 
               stops his horse at the edge of the clearing and surveys the 
               scene. Farmers are roasting a pig; women are comparing 
               handiwork; young men are tossing huge stones in the 
               traditional Highland games -- and everyone is noticing 
               William's arrival, especially the farm women with daughters 
               of marriageable age.

               Among those watching William arrive is Campbell, grown older 
               now; and with his old rebel friend, MacClannough. William 
               dismounts and ties his horse to a willow. One of the English 
               SOLDIERS shoves William from behind.

                                     SOLDIER
                         Hey boy! You hunt this bird?

               William's eyes fix themselves on the soldier.

                                     SOLDIER
                         It's against the law for Scots to 
                         own bows. You shot this bird?

               His buddies, enjoying their role as intimidators, grab the 
               bird and begin to search it for evidence.

                                     WILLIAM
                         I hit it in the head. With a rock.

               They don't believe that -- but they can't find any puncture 
               wound on the bird. William reaches his hand out for the return 
               of the bird. The soldiers drop it onto the ground.

               Slowly, William picks it up, and heads into the clearing.

               The farmers watch him come.

               Among those noticing William's arrival, but pretending not 
               to, is MARION MacCLANNOUGH, grown now into a stunning young 
               woman; her long auburn hair reminds us of those years long 
               ago; she wears it the same way, straight and full down her 
               back. Her dress is plain, like the grass that surrounds a 
               wildflower. She's the most beautiful girl in the village, 
               maybe in all of Scotland, and the soldiers who hassled William 
               notice her too.

               William reaches the food table and contributes his goose to 
               the feast. FARM WOMEN eye him; he nodes to one.

                                     WILLIAM
                         Miz MacDougal. You look well.

                                     FARM WOMAN
                         ...William? It's William Wallace, 
                         back home! -- Have you met my 
                         daughter?

               The daughter mentioned is missing teeth. William nods to 
               her. It's impossible for him to giver her a smile as bright 
               as her hopes, and she lowers her head in disappointment. But 
               then raises her face in surprise as William takes her hand 
               and gives her a respectful bow.

               He moves away from the table, passing through the crowd like 
               a stranger. Then he glances toward the knot of girls. He 
               sees Marion. She sees him, then looks away. Do they remember 
               each other? He moves toward her; she is shy, her eyes 
               downcast, but then she raises them and looks at him.

               They move closer and closer together. Just as they are about 
               to reach each other, a huge round stone THUMPS to the earth 
               at Williams' feet.

               He looks up to see one of Marion's suitors -- the broad, 
               muscled young man who has just tossed the stone in William's 
               way. Now everybody's looking to see how William will handle 
               the challenge. He tries to move around, but the guy cuts him 
               off. Then William thinks he recognizes the big red-head.

                                     WILLIAM
                         Hamish?

               It is his old friend, but Hamish won't admit it, or be put 
               off from the challenge. He points to the huge stone.

                                     HAMISH
                         Test of manhood.

                                     WILLIAM
                         You win.

                                     HAMISH
                              (blocks him)
                         Call it a test of soldiery, then. 
                         The English won't let us train with 
                         weapons, so we train with stones.

                                     WILLIAM
                         The test of a soldier is not in his 
                         arm. It's here.

               He taps his temple. Hamish stretches out his hand, as if to 
               show William something in his palm.

                                     HAMISH
                         No. It's here.

               With a sudden movement, he slams his fist into William's 
               jaw, dropping him. A few men move to interfere, but Campbell, 
               MacClannough, and the other farmers who are the true leaders 
               here, stop their neighbors from interrupting. Hamish stands 
               over William, waiting for him to get up.

                                     WILLIAM
                         A contest, then.

               William stands and hoists the huge stone, eighteen inches in 
               diameter. Straining with the effort, he lugs the stone to 
               the line scratched in the rocky field. Beyond the line are 
               the muddy dents from previous tosses. William takes a run 
               and heaves the stone. It flies past the other marks in the 
               field; people are impressed. William looks at Hamish.

                                     WILLIAM
                         I still say this is no test. A 
                         catapult can throw a stone farther 
                         than a man can.

                                     HAMISH
                         That depends on the man.

               Hamish walks out, lifts the stone, and lugs it back to the 
               line. He takes a run and heaves with a great groan! The stone 
               flies, passing William's mark by a couple of feet.

               People laugh and whistle. William nods, impressed.

                                     WILLIAM
                         Can you do it when it matters? As it 
                         matters in battle? Could you crush a 
                         man with that throw?

                                     HAMISH
                         I could crush you like a roach.

               William walks to the dent made by Hamish's throw.

                                     WILLIAM
                         Then do it. Come, do it.

               Hamish scowls at William, at everybody watching. He lifts 
               the stone and carries it back to the line. William stands 
               calmly. Hamish backs up for his run. William yawns.

                                     HAMISH
                         You'll move

                                     WILLIAM
                         I will not.

               Hamish backs up a few more feet, for a longer run.

                                     FARMER STEWART
                         That's not fair!

                                     CAMPBELL
                         He's tired, he should get a longer 
                         run.

               William seems completely unafraid. He leans down, picks up a 
               small smooth stone and tosses it up in the air casually.

               Stung by this show of calm, Hamish takes furious run, and 
               heaves! The stone flies through the air, just misses William's 
               head, and buries itself halfway into the earth behind him. 
               William never flinches. The people cheer.

                                     CAMPBELL
                         Brave show!

               Hamish is miffed; it's like William won.

                                     HAMISH
                         I threw longer than last time!

                                     CAMPBELL
                         An ox is strong, but not clever.

                                     HAMISH
                         An ox is stupid enough to just stand 
                         in one place.

                                     WILLIAM
                         That's not the point.

               William turns, walks double the distance Hamish threw, and 
               turns and hurls the rock he holds! It whistles through the 
               air, hits Hamish in the forehead, and drops him like a shot.

                                     WILLIAM
                         That is.

               Everybody cheers and laughs! They surround William.

                                     CAMPBELL
                         A fine display, young Wallace!

               William takes a tankard of ale from a farmer, walks over and 
               tosses the cold liquid into Hamish's face; he wakes, and, 
               his eyes uncrossing, accepts William's hand, pulling him up.

                                     WILLIAM
                         Good to see you again.

                                     HAMISH
                         I should'a remembered the eggs.

               Grinning, they embrace. MUSIC plays, the dancing begins.

               William walks to the knot of young ladies... but passes 
               Marion, and moves to the girl with the missing teeth.

                                     WILLIAM
                         Would you honor me with a dance?

               She's thrilled to accept; they begin to dance.

                                     GIRL
                         You've taken over your father's farm?
                              (beat)
                         They say he died long ago. Fighting 
                         the English.

                                     WILLIAM
                         He died in an accident, with my 
                         brother. Their cart turned over.

               The musicians interrupt their playing; a group of heavily 
               armed horsemen, with banners and flying colors, ride up, 
               reining their horses into the middle of the celebration. In 
               the middle of the group is an English NOBLEMAN; he is gray, 
               in his fifties, and stops in front of the BRIDE and groom.

                                     NOBLEMAN
                         I have come to claim the right of 
                         prima noctes. As the lord of these 
                         lands, I will bless this marriage by 
                         taking the bride into my bed on the 
                         first night of her union.

               Stewart, father of the BRIDE, lunges forward.

                                     STEWART
                         No, by God!

               The horsemen point their lances at the unarmed Scots -- who 
               see that the English soldiers from the village have moved to 
               the edge of the gathering, as if to dare any resistance.

                                     NOBLEMAN
                         It is my noble right.

               Even unarmed, Stewart is about to attack -- but the bride 
               intervenes. She grabs her father and whispers to him. She 
               moves to her husband and does the same. Holding back tears, 
               she allows herself to be pulled up behind one of the horsemen. 
               Marion MacClannough is looking on, sobered by her friend's 
               courage and sickened by her fate -- and Marion is even more 
               unsettled as she notices that one of the soldiers, a 
               particularly nasty looking brute with a scarred face, is 
               leering at her. William Wallace sees this too.

               The noble and his escorts ride away, and as they do it begins 
               to rain. The celebration destroyed, the Scots gather the 
               food and disperse to their homes. But Wallace remains, 
               standing in the downpour, keeping his thoughts to himself.

               EXT. THE WALLACE FARMHOUSE - MAGIC HOUR

               The farmhouse looks lonely and forlorn. William stands at 
               the open door, and gazes out at the rain; it leaks on him, 
               through his roof; he doesn't seem to notice.

               EXT. THE MACCLANNOUGH HOUSE - MAGIC HOUR

               A thatched cottage, lit with a cozy fire, beneath the rain.

               A hand KNOCKS on the door, and MacClannough opens it to find 
               William, on a horse! MacClannough frowns.

                                     WILLIAM
                         Good evening, sir. May I speak with 
                         your daughter?

               Mrs. MacClannough shoulders up beside her husband, and Marion 
               appears behind her scowling parents.

                                     WILLIAM
                         Marion... Would you like to go for a 
                         ride on this fine evening?

                                     MOTHER
                         The boy's insane!

                                     WILLIAM
                         It's good Scottish weather, Madam, 
                         the rain is fallin' straight down.

                                     MOTHER
                         She absolutely may not, she'll -- 
                         Marion!

               Marion has grabbed a cloak off the back of the door; she 
               runs out to hop up behind William, and they gallop away.

               THE RIDE - MAGIC HOUR

               William and Marion race along the heather, up and down hills, 
               through swollen streams. The rain stops, as the sun sets; 
               the Scottish mists lift, revealing stunning natural beauty.

               William stops the horse and they look out over it all 
               together. He speaks, without turning to face her.

                                     WILLIAM
                         Your father doesn't like me, does 
                         he?

                                     MARION
                         It's not you. He dislikes that you're 
                         a Wallace. He just says... the 
                         Wallaces don't seem to live for very 
                         long.

                                     WILLIAM
                         Thank you for accepting.

                                     MARION
                         Thank you for inviting.

                                     WILLIAM
                         I'll invite you again, but your mother 
                         thinks I'm crazy.

                                     MARION
                         You are. And I'll come again.

               He lingers; he wants to say something, or maybe he just 
               doesn't want the moment to end. Finally he spurs the horse.

               EXT. THE MACCLANNOUGH HOUSE - NIGHT

               They reach the door. William hops off the horse and reaches 
               up to help her down the moment she touches the ground, they 
               look into each other's eyes... but the door is snatched open 
               so quickly by her mother that there is not time for a kiss.

                                     MOTHER
                         Marion, come in!

               He walks her closer to the door. They turn and look at each 
               other again. She waits for him to kiss her...

                                     MOTHER
                         Marion, come in!

               She still hesitates; he isn't going to kiss her. She starts 
               in, but he grabs her hand. And into it he puts something he 
               has taken from his pocket; it is wrapped in flannel. He hops 
               on his horse, glances at her, and gallops away.

               She stands in the open doorway; she looks down at what he 
               left her. She unwraps the flannel; it is a dried thistle, 
               the one she gave him years before.

               EXT. WALLACE FARM - DAY

               William is re-thatching the roof of his barn, when he hears 
               riders approaching, and looks down to see that it is 
               MacClannough, backed by Campbell and Hamish. Uh-oh.

                                     MACCLANNOUGH
                         Young Wallace --

                                     WILLIAM
                         Sir, I know it was strange of me to 
                         invite Marion to ride last night. I 
                         assure you, I --

                                     CAMPBELL
                         MacClannough's daughter is another 
                         matter. We come to fetch you to a 
                         meeting.

                                     WILLIAM
                         What kind of meeting?

                                     CAMPBELL
                         The secret kind.

               William goes back to repairing his roof.

                                     CAMPBELL
                         Your father was a fighter. And a 
                         patriot.

                                     WILLIAM
                         I know who my father was. I came 
                         back home to raise crops. And, God 
                         willing, a family. If I can live in 
                         peace, I will.

               Campbell shakes his head and reins his horse away, with 
               Hamish. MacClannough lingers.

                                     MACCLANNOUGH
                         If you can keep your intention to 
                         stay out of the troubles, you may 
                         court my daughter. If you break your 
                         intention, I'll kill you.

               MacClannough rides away. William sits down on the roof, and 
               looks out at the graves of his father and brother.

               EXT. MACCLANNOUGH HOUSE - NIGHT

               Outside the half-timbered house, William stands in the shadows 
               of moonlight and tosses a pebble against the wooden upper 
               window. Marion opens the shutters and slips out onto the 
               vines, dropping into William's arms.

               Giggling, suppressing laughter, they run to the trees...

               SCOTTISH HIGHLANDS - NIGHT

               Hand in hand through the heather they run, silhouettes along 
               a ridge, their breath blowing silver clouds in the moonlight, 
               the Scottish wind whipping through their hair.

               They stop at a grove at the edge of a precipice, overlooking 
               a loch gleaming in the moonlight. So beautiful it's sacred.

                                     MARION
                         You've been here before?

                                     WILLIAM
                         Some nights. I have dreams. Mostly 
                         dreams I don't want. I started riding 
                         at night to fill up my mind so that 
                         when I did sleep I'd dream only of 
                         the ride and the adventure.

                                     MARION
                         Did it work?

                                     WILLIAM
                         No. You don't choose your dreams. 
                         Your dreams choose you.

               He looks at her. They kiss suddenly, so long and hard that 
               they tumble into the heather, rolling, devouring each other.

               Through their passion...

                                     WILLIAM
                         I want... to marry you!

                                     MARION
                         I... accept your proposal!

                                     WILLIAM
                         I'm not just saying it!

                                     MARION
                         Nor I!

                                     WILLIAM
                         But I won't give you up to any 
                         nobleman.

                                     MARION
                              (stopping)
                         You scare me.

                                     WILLIAM
                         I don't want to scare you. I want to 
                         be yours, and you mine. Every night 
                         like this one.

                                     MARION
                         This night is too beautiful to have 
                         again.

                                     WILLIAM
                         I will be with you, like this. 
                         Forever.

               They kiss again...

               EXT. LANARK VILLAGE - DAY

               Marion moves through the market. English soldiers admire her 
               as she walks. She stops, looking at white lace and cloth.

               William casually passes, poking a note in her basket. Subtly 
               she withdraws his note, and reads:

               INSERT - HIS NOTE

               Tonight. By the trees.

               EXT. MARION'S HOUSE - NIGHT

               Marion slips out of the house and runs to the trees, where 
               William waits with horses. She fetches a bundle she's stashed 
               in the crook of a tree, and they mount and ride off.

               EXT. RUINS OF AN ANCIENT CHURCH - NIGHT

               The church is at the base of the precipice, beside the loch.

               INT. THE CHURCH - NIGHT

               This ancient Gaelic place of worship has been destroyed by 
               the occupying army, and yet it looks devoutly holy this way, 
               lit only by candles and moonlight through the open roof. The 
               village PRIEST whom we saw at the wedding celebration is 
               waiting at the altar. Marion steps into the confessional, as 
               William moves to the altar and kneels in prayer.

               Marion emerges; she's changed into the wedding dress she 
               made from the cloth she bought. William stands and watches 
               her float down the aisle; his whole life was worth this 
               moment.

               Together, the two lovers turn to the priest.

                                     PRIEST
                         You have come to pledge, each to the 
                         other, before Almighty God.

               From within his shirt, William withdraws a strip of cloth 
               woven in his family tartan. He and Marion each lift a hand 
               to the priest, and he binds their wrists with the cloth.

                                     WILLIAM
                         I will love you my whole life. You 
                         and no other.

               From her dress she takes a handmade handkerchief, embroidered 
               with a thistle to look like the one she first gave him those 
               years ago.

                                     MARION
                         And I you. You and no other. Forever.

               The Priest waits for them to go on, but neither can; they're 
               too taken with emotion, looking at each other. The Priest 
               intones holy phrases...

                                     PRIEST
                         Agus bhayd lauch... The Lord bless 
                         and keep thy love, now and forever.

               The lovers kiss. As they break their embrace, a figure 
               carrying something dark and spiky appears at the broken door 
               of the church, and William spins as if to attack, but the 
               Priest catches his arm; they see the man carries bagpipes.

                                     PRIEST
                         I trust him -- or I'd'a killed him 
                         me'self. A weddin' needs pipes.

               The piper begins to play, and the tune from his primitive 
               chanter is wispy, ethereal, beautiful. The lovers look into 
               each other's eyes, as the single melody of the pipes merges 
               into a swell of music, UNDERSCORING MONTAGE

               William and Marion ride the path to the top of the precipice, 
               where, in the shelter of the grove, they spend their 
               honeymoon. The MUSIC CONTINUES as, still sweaty from their 
               love-making, he returns her to her house just before dawn.

               She waves from her window, as William rides away, as we

                                                               DISSOLVE TO:

               EXT. VILLAGE OF LANARK - DAY

               It's Market Day in the village, busy with Highlanders, 
               merchants of all kinds, and a few special attractions like 
               jugglers and fortune tellers. Marion moves along a table 
               full of flowers and fruit... William, concealed behind hanging 
               baskets, watches her unseen, savoring the beauty of his 
               beloved, bathing his soul in the sight of her. Then she looks 
               up and spots him, her smile sudden and luminous, before she 
               remembers to conceal it. He moves up beside her.

                                     WILLIAM
                         I've missed you.

                                     MARION
                         Shush. It's only been a day.
                              (beat)
                         And it's seemed like forever.

                                     WILLIAM
                         Tonight then.

                                     MARION
                         My parents are growing suspicious! I 
                         can't keep meeting you every night!

               Playfully he pokes his finger under the collar of her dress, 
               pulling up the strip of checked cloth he gave her at their 
               wedding, which she now wears hidden around her neck.

                                     WILLIAM
                         Then when?

                                     MARION
                         ...Tonight!

               Tucking in the cloth strip, she hurries away, smiling.

               ANGLE - DRUNKEN ENGLISH SOLDIERS - BY AN ALE CASK - DAY

               They spot Marion moving through the fair, glowing, beautiful.

               The soldiers smirk at each other; as Marion passes, one of 
               them grabs her wrist. It's the soldier with the scar, the 
               one who's been staring at her.

                                     SOLDIER
                         Where are you going... lass?

                                     MARION
                         Let go.

               A second drunken SOLDIER pipes up.

                                     SOLDIER #2
                         Why don't you marry my friend here? 
                         Then I'll take the first night!

               The scarred soldier pulls Marion into his big arms; she shoves 
               him away with surprising strength, and he staggers back, to 
               the laughter of his friends. Then he snatches her again and 
               kisses her hard on the lips.

               She breaks free and SLAPS him fiercely, hard enough to draw 
               blood from his mouth. Tasting the trickle, he slings her 
               down against sacks of grain, and the soldiers are all over 
               her, pinning her down, ripping her clothes, a full scale 
               public gang rape. As the townspeople try to move in the three 
               soldiers waiting their turn at Marion pull their knives, 
               keep them townspeople back.

                                     SOLDIER #1
                         Bitch, who do you think you are?

               He slams his mouth down against hers for a long, awful time, 
               comes up clawing at her dress to rip it from her body... and 
               is hit in the face by a rock thrown at great speed!

               It takes a moment for the other soldiers to realize what 
               just happened, and in that instant William is on them. He 
               wrenches one soldier's arm in a direction it was never meant 
               to go, breaking the elbow, separating the shoulder, and 
               slinging the howling soldier into his comrades.

               Two of the soldiers leap at William, swinging their short 
               swords; William ducks, knocking their ale cask into their 
               knees; William lifts the whole table where they were sitting 
               and slams it into the faces of two more attackers.

                                     MARION
                         William!

               She shouts to warn him that the scarred soldier, now 
               bloodyfaced, has recovered from the rock and is behind William 
               with a knife. William sidesteps the first thrust, snatches a 
               leg from the shattered table and crushes the man's skull.

                                     MARKET WOMEN
                         Wallace Wallace! William Wallace!

               But there's no time for celebration. There's blood and ale 
               everywhere, and the fallen soldiers are yelling...

                                     FALLEN SOLDIER
                         Rebels! Help!

               MORE SOLDIERS hear the call and come running, reinforcements 
               converging from all over the village.

                                     VILLAGE FOLKS
                         Run, William! Run!

               Will sees the horse that pulled the flower cart and throws 
               Marion up onto its back. He slaps the horse's rump and it 
               plunges with Marion into the twisting village lanes. William 
               darts off through the crowd, as the MAGISTRATE and more of 
               his soldiers arrive -- dozens of them!

               William pauses out in the central street of the village, 
               just long enough to be sure they've spotted him, and darts 
               into a side lane in the opposite direction Marion went; 
               William weaves through the narrow streets of the medieval 
               town, knocking over baskets, jumping carts.

               As the soldiers stumble after him, the Magistrate looks down 
               at his mangled soldiers. The one with the ruptured arm is 
               lying in agony.

                                     MAGISTRATE
                         What happened?

                                     SOLDIER
                         ...girl.

                                     MAGISTRATE
                         What girl?!

                                     SOLDIER
                         ...on horse.

                                     MAGISTRATE
                         The girl on the horse! Stop her!

               The shout rings through the village; Marion hears it, and 
               when she sees more soldiers at the far end of the lane she's 
               trying to take out of town, she urges the horse into an even 
               narrower back alley. She sees a clear route to freedom...

               But the flock of pigeons pecking on the scraps thrown there 
               behind the shops rise into the horse's face with a sudden 
               thrashing of wings, and the horse shies against a wall.

               Marion controls him, but a flap of her ripped dress has caught 
               on a crude nail, and as the frightened horse lunges forward 
               again, she is pulled off its bare back, her dress catching 
               and ripping at the same time, dropping her hard.

               WILLIAM

               reaches the edge of the town and slips into the trees by the 
               river; the soldiers are running every which way, but they've 
               lost him. Thinking Marion's made it too, William heads deeper 
               into the trees.

               IN THE TOWN, MARION

               recovers; her dress has torn free! She starts to get up; but 
               the soldiers' pikes appear over her, and the magistrate leers.

                                     MAGISTRATE
                         So this is the little whore he was 
                         fighting for.

               EXT. THE GROVE AT THE PRECIPICE - DAY

               William moves into the shelters of the trees, expecting to 
               see Marion. He doesn't. He listens; only the rustling of the 
               wind through the treetops.

                                     WILLIAM
                         Marion!

               Nothing, except the wind.

               INT. ROYAL MAGISTRATE'S HEADQUARTERS - DAY

               Marion is thrown into a chair and her arms are bound with an 
               oak staff behind her elbows. She and two dozen soldiers are 
               in the tavern the English have commandeered.

               The Magistrate is a battlescarred veteran, a brutal pragmatist 
               angry with his CORPORAL.

                                     MAGISTRATE
                         One Scot buggers six of us? Hell to 
                         pay when that gets round.

                                     CORPORAL
                         Burn the village.

                                     MAGISTRATE
                         But he is free. You never catch 'em 
                         in the Highlands.

               He studies Marion, her mouth now stuffed with burlap. He 
               notices the strip of cloth around her neck, and touches the 
               weave curiously.

                                     CORPORAL
                         Clans weave that cloth in their own 
                         patterns.

                                     MAGISTRATE
                         So why is this strip concealed?
                              (beat)
                         He fought for you, eh?

               EXT. TOWN SQUARE - DAY

               The Magistrate and his men bring Marion into the village 
               center, and tie her to a post of the well. The townspeople 
               don't want to be near the soldiers, but they hang on the 
               fringes of the square, too curious to pull away.

                                     MAGISTRATE
                         An assault on the king's soldiers is 
                         the same as assaulting the king!

               He looks down at Marion, her mouth bound, her eyes defiant.

               He jerks out his dagger and slices Marion's throat!

               Her eyes spring open like a doe's; then she sags, dead. The 
               townspeople are speechless; even some of the soldiers are 
               shocked. The Magistrate turns calmly to his men.

                                     MAGISTRATE
                         Now. Let this scrapper come to me.

               LONG SHOT - EXT. THE GROVE AT THE PRECIPICE - DAY

               From a distance, we see Hamish approaching the grove, the 
               same one where he and William played as boys. Hamish moves 
               reluctantly, forcing himself forward; as he reaches the grove, 
               William appears, hurrying out to him.

               We STAY IN THE LONG SHOT, seeing William asking anxiously 
               for any news, and seeing Hamish's great shoulders as he tells 
               him something that makes William step backwards...

               EXT. LANARK VILLAGE - DAY

               At a barrier across the main road into the center of the 
               village are twenty professional soldiers, entrenched, fully 
               armed -- bows, pikes, swords. They hear A HORSE'S SNORT...

               THE ENGLISH SOLDIERS' POV - WALLACE, ON HIS HORSE

               He has stopped, rock still. The soldiers hush; there is 
               something unsettling about this man alone, staring at the 
               twenty of them, as if to steel himself for the butchery.

               Wallace raises his sword, screams... and charges!

               EXT. VARIOUS ANGLES - LANARK VILLAGE - DAY - THE FIGHT

               We FAVOR WALLACE'S SUBJECTIVE POV: the barrier as his horse 
               pounds toward it, the faces of the enemy soldiers with their 
               eyes white with fear... They stand to shoot at him with their 
               bows; the arrows WHISH toward the lens, fly past...

               The arrows tear through Wallace's clothes, but don't catch 
               his flesh. He charges on; his horse LEAPS the barrier as 
               Wallace simultaneously swings the broadsword -- and he's 
               more than an expert: the tip, at the end of a huge arc, nearly 
               breaks the sound barrier and the blade bites through the 
               corporal's helmet, taking off the upper half of his head!

               The soldiers try to rally, to shoot him in the back as his 
               horse leaps over them. One of them has sighted William's 
               back... But Hamish and his father crash into them! It's a 
               wild fight; old Campbell takes an arrow through the shoulder 
               but keeps hacking with his sword; Hamish batters down two 
               men -- and more Scots arrive! They overwhelm the soldiers.

               WALLACE RACES THROUGH THE VILLAGE - FAVORING HIS POV

               He dodges obstacles in the narrow streets -- chickens, carts, 
               barrels. Soldiers pop up; the first he gallops straight over; 
               the next he whacks forehand, like a polo player; the next 
               chops down on his left side; every time he swings the 
               broadsword, a man dies.

               Wallace gallops on; his farmer neighbors, and people from 
               the village, follow in his wake.

               EXT. IN THE VILLAGE - DAY

               The Magistrate hears the APPROACHING SHOUTS. He and thirty 
               more of his men are barricaded around the village square.

                                     MAGISTRATE
                         Don't look surprised! We knew he'd 
                         bring friends!

               The see Wallace gallop into sight; but he stops, then heads 
               down a side street.

               The Magistrate and his men don't like this; where did he go?

               Which way will he come from? And then they hear the horses, 
               and see the other Scots, at the head of the main street. The 
               soldiers unleash a volley of arrows at them.

               They are loading to fire again when Wallace runs in -- on 
               foot! -- and cuts down two soldiers! The other Scots charge!

               The startled soldiers break and run in every direction.

               The Magistrate, abandoned, runs too. Wallace pursues.

               Not far along a twisting lane, the bulky Magistrate falters.

               He turns to fight, and Wallace slashes away his sword.

                                     MAGISTRATE
                         No! I beg you... mercy!

               IN THE TOWN SQUARE

               As the Scots see Wallace, they break off pursuing the English 
               soldiers and stop to watch; dragging the Magistrate by his 
               hair, Wallace hauls him back into the village square, slams 
               him against the well, and stands over him with heaving lungs 
               and wild eyes, staring at Marion's murderer.

                                     MAGISTRATE
                         Please. Mercy!

               Wallace's eyes shift, falling on

               THE STAIN OF BLOOD

               Marion's blood, in a dark dry splash by the wall of the well, 
               the stain dripping down onto the dirt of the street. Wallace 
               spins, jerks back the Magistrate's head, and cuts his throat 
               with the sword.

               ON THE OTHER SCOTS

               Silenced by what they've just seen and done. On old Campbell's 
               face is a look of reverence, and awe.

                                     CAMPBELL
                         Say Grace to God, lads. We've just 
                         seen the coming of the Messiah.

               William staggers a few steps, and collapses to his knees.

               And then not just the Scottish farmers but the townspeople 
               too begin a strange, Hi-Lo chant.

                                     CROWD
                         AHHHHHHH-UHHHHHH! AHHHHHH-UHHHHHH!

               William's wild eyes slowly regain their focus. And there in 
               the dirt beside the well, he sees the severed cloth strip he 
               gave to Marion, now stained with her blood. He lifts it, 
               crushes it in his hand, as the Highlanders chant for war.

               EXT. LANARK VILLAGE - NIGHT

               The villagers are still excited by what just happened; at 
               the blacksmith's forge, men tend to Campbell's wound...

                                     CAMPBELL
                         Pour it straight into the wound. I 
                         know it seems a waste of good whiskey, 
                         but indulge me.

               They obey, then take a glowing poker from the fire and run 
               it through Campbell's shoulder, where the arrow went. There 
               is a terrible SIZZLE, and Campbell reacts to the pain.

                                     CAMPBELL
                         Ah. Now that'll clear your sinuses, 
                         lads.

               Campbell looks down at his left hand. His thumb is missing!

                                     CAMPBELL
                         Well bloody Hell, look at this! Now 
                         it's nothing but a fly swatter.

               Wallace is sitting alone nearby, staring at nothing. Hamish 
               moves over and puts a hand on his shoulder. Wallace looks at 
               his friend, and looks away; killing the Magistrate did not 
               bring Marion back.

               SHOUTS of alarm: ARMED MEN are coming! The farmers scramble 
               for their weapons, ready to fight; even Campbell jumps up; 
               but what they see coming out of the darkness are twenty more 
               farmers, with hayhooks, knives, axes, anything they could 
               find for weapons. Their leader is MacGREGOR.

                                     CAMPBELL
                         MacGregor -- from the next valley!

               MacGregor leads his men into the circle of rebels.

                                     MACGREGOR
                         We heard about what was happenin'. 
                         And we don't want ya thinkin' ya can 
                         have your fun without us.

                                     WALLACE
                         Go home. Some of us are in this, I 
                         can't help that now. But you can 
                         help yourselves. Go home.

                                     MACGREGOR
                         We'll have no homes left when the 
                         English garrison at the castle comes 
                         through to burn us out.

               They all look at Wallace.

               EXT. ENGLISH MILITARY STRONGHOLD - NIGHT

               Furious preparations: armorers pound breastplates, hone 
               spears, grind swords in a shower of sparks. The garrison is 
               led by BOTTOMS, the English lord who claimed the right of 
               prima noctes. Now he shouts to his scurrying soldiers.

                                     LORD BOTTOMS
                         Gather the horses! Align the infantry!
                              (grabs a man)
                         Ride to the Lord Governor in Stirling.

               Tell him that I will hang five rebels for every good 
               Englishman killed! FORM FOR MARCH!

               The troops begin to scramble into the courtyard. At the same 
               time, the messenger gallops to the gate and nods for the 
               keepers to open it. They pull up the chains and the heavy 
               gate rises. The messenger spurs his horse to gallop through -- 
               and is hit in the chest with an axe!

               The Scots, hidden just outside the gate, come pouring through, 
               led by Wallace! Arrows pick soldiers from their perches, 
               Scots drop over the wall; the surprise is so complete that 
               it's over almost without a fight. Lord Bottoms looks around 
               in confusion...

                                     LORD BOTTOMS
                         Stop them... Don't let... Align...

               Scots drag Lord Bottoms off his horse; an arrow in a flexed 
               bow jabs right up to his eye, the archer ready to drive the 
               shaft through Bottom's eye socket and into his brain; but 
               Wallace's hand closes on the archer's fingers -- and Bottoms 
               sees that the archer at the other end of the arrow shaft is 
               none other than the Highland farmgirl he forced into his bed 
               on her wedding night. Beside her is her husband, holding a 
               scythe, red with English blood.

                                     WALLACE
                         On your way somewhere, M'lord?

                                     LORD BOTTOMS
                         Murdering bloody bandit!

               The point of Wallace's sword jumps beneath the Lord's chin.

                                     WALLACE
                         My name is William Wallace. I am no 
                         bandit who hides his face... Find 
                         this man a horse.

               The green eyes of the defiled highland bride flash fire.

               William takes his hand from her bow and looks at her, grief 
               for Marion in his eyes; for the sake of that she does not 
               release the string.

                                     WALLACE
                         Give him a horse.

               Hamish extends the reins of the Lord's thoroughbred.

                                     WALLACE
                         Not this horse. That one.

               He nods to a bony nag hitched next to a glue pot.

                                     WALLACE
                         Today we will spare you, and every 
                         man who has yielded. Go back to 
                         England. Tell them Scotland's 
                         daughters and her sons are yours no 
                         more. Tell them Scotland is free.

               As the Scots cheer, Wallace throws Lord Bottoms onto the 
               nag's back and slaps the horse's rear. IT shambles away, 
               followed by the English survivors, as the Scots chant...

                                     SCOTS
                         Wal-lace, Wal-lace, Wal-lace!...

               CLOSE - A GRAVESTONE - EXT. HIGHLANDS - DAY

               The marker is carved with the name MARION MacCLANNOUGH, and 
               beneath her name A THISTLE is chiseled into the stone.

               Bagpipes wail like banshees and the Priest who married Marion 
               and William now mutters ancient prayers as her body, wrapped 
               in burial canvas, is lowered into the earth, under the sad 
               eyes of those who just fought in the battle.

               Opposite William stands old MacClannough; he stares across 
               the open hole that accepts the body of his daughter, his 
               eyes full of pain, and then staggers away.

               Wallace kneels at the graveside in unspeakable grief. From 
               within his shirt he withdraws the embroidered handkerchief 
               she gave him, and the bloodstained strip of cloth he gave 
               her. He places the strip over her heart, and as the 
               gravediggers fill the hole her returns the handkerchief to 
               its spot over his own heart.

               EXT. LONDON PALACE - DAY

               Prince Edward is in his garden, playing the medieval version 
               of croquet with his friend. The Princess, ignored, sits 
               watching. Longshanks marches through the game, furious.

                                     LONGSHANKS
                         Scottish rebels have routed Lord 
                         Bottoms!

                                     EDWARD
                         I hear. This Wallace is a bandit, 
                         nothing more.

               Longshanks slaps his son, knocking him down among the colored 
               balls and wickets. Everyone gasps, stunned.

                                     LONGSHANKS
                         You weak little coward! Stand up!

               Longshanks jerks him to his feet.

                                     LONGSHANKS
                         I go to France to press our rights 
                         there! I leave you to handle this 
                         little rebellion, do you understand? 
                         DO YOU?!

               Longshanks grabs his son by the throat.

                                     LONGSHANKS
                         And turn yourself into a man.

               The king leaves. The friends of the humiliated Prince hurry 
               to him and lift him; as the Princess moves to him too...

                                     EDWARD
                         Get away from me!

               He slaps her! Her personal guards, Frenchmen in distinctive 
               uniforms, jump from their seats at the edge of the garden, 
               but the Princess raises a hand to show she needs no 
               assistance, and curtseys to Edward, who shouts --

                                     EDWARD
                         Convene my military council!

               As Edward marches off with his entourage, NICOLETTE, a 
               beautiful raven-haired Handmaiden, rushes to the Princess, 
               who is wobbly, hurt more than she let show. Nicolette whispers 
               to her in French, with subtitles...

                                     NICOLETTE
                         They say this Wallace killed thirty 
                         men to avenge the death of his woman. 
                         I hope your husband goes to Scotland. 
                         Then you'll be a widow.

               INT. BRUCE'S CASTLE - BEDCHAMBER - NIGHT

               Robert the Bruce is in bed with a young Nordic beauty with 
               vacant blue eyes. She drowses; but the lovemaking has not 
               defused the restlessness of Robert's spirit. He lies on his 
               stomach, turned away from her on the bed. Stirring, she kisses 
               his neck; but he doesn't respond.

                                     WOMAN
                         I wanted to please you.

                                     ROBERT
                         You did.

               But he is numb as she nuzzles him again. She sags back, and 
               he still stares away, lost in thought. Realizing her hurt, 
               he explains...

                                     ROBERT
                         In Lanark village, the king's soldiers 
                         killed a girl. Her lover fought his 
                         way through the soldiers and killed 
                         the magistrate.

               She looks at him blankly.

                                     ROBERT
                         He rebelled. He rebelled. He acted. 
                         He fought! Was it rage? Pride? Love? 
                         Whatever it was, he has more of it 
                         than I.

                                     WOMAN
                              (hurt)
                         You might have lied.

                                     ROBERT
                         I'm too arrogant to lie.

               CLOSE - ROBERT THE BRUCE

               On his FACE as he moves grimly up a dark castle staircase.

               He follows a servant who carries a candle against the gloom.

               They reach a door, which the servant unlocks. Young Robert 
               takes the candle, and enters --

               A DARKENED ROOM

               Robert wills himself forward, and places the candle on a 
               table in the center of the room. A SHUFFLE in the dark; then 
               moving into the light is a LEPER whose once-noble features 
               are decaying with the disease. Isolated in his disfiguration, 
               he looks at his visitor -- his son -- with the eyes of the 
               condemned. Young Robert forces himself not to look away.

                                     ROBERT THE BRUCE
                         Father. A rebellion has begun.

                                     THE LEPER
                         Under whom?

                                     ROBERT
                         A commoner named William Wallace.

                                     THE LEPER
                         A commoner? So no one leads Scotland?

               The old man thinks, and points a half finger at his son.

                                     THE LEPER
                         You will embrace this rebellion. 
                         Support it, from our lands in the 
                         north. I will gain English favor by 
                         condemning it and ordering it opposed 
                         from our lands in the south. Whichever 
                         way the tide runs, we will rise.

                                     ROBERT
                         This Wallace. He doesn't even have a 
                         knighthood. But he fights with 
                         passion, and he is clever. He inspires 
                         men.

                                     THE LEPER
                         You admire him. Uncompromising men 
                         are easy to admire. He has courage. 
                         So does a dog. But you must understand 
                         this: Edward Longshanks is the most 
                         ruthless king ever to sit on the 
                         throne of England, and none of us, 
                         and nothing of Scotland, will survive 
                         unless we are as ruthless, more 
                         ruthless, than he.

               Young Bruce rises heavily, and moves to the door.

                                     THE LEPER
                         Press your case to the nobles. They 
                         will choose who rules Scotland.

               With a last long look at his father, Robert leaves.

               EXT. SCOTLAND - MONTAGE - DAY

               -- Troops ride through the countryside, intimidating and 
               questioning civilians; all refuse to talk.

               -- Wallace's house burns, as soldiers dig up the graves of 
               his father and brother, and scatter their bones to dogs.

               -- The English search through the woods, finding nothing.

               EXT. WALLACE LANDS - NIGHT

               William and Hamish ride, to see the damage. They find the 
               smoking ruins, and the defiled family graves.

                                     HAMISH
                         Ah, William... I am so sorry.

               William is struck by an awful, urgent thought...

               EXT. UNDERBRUSH NEAR MARION'S GRAVE - DUSK

               We open on Marion's grave, with the thistle-carved marker, 
               looking peaceful; but up the hill in the underbrush, English 
               soldiers wait in ambush. Edgy, they perk up at the sound of 
               muffled hoofbeats -- then their eyes bug as a cloaked figure -- 
               Wallace -- suddenly looms up behind them, galloping and 
               swirling fire! He hurls burning torches into the clustered 
               soldiers, setting some of them on fire!

               MEANWHILE, HAMISH has crawled to Marion's grave and is digging 
               frantically. The new dirt parts easily and he pulls the 
               shrouded body out, cringing with the effort.

               MORE SOLDIERS rush from behind the rocks at the far side of 
               the graveyard. Wallace charges them, driving them back. He 
               grabs the reins of Hamish's horse, hidden among trees, and 
               gallops to him.

               Hamish hands the shrouded body up to William and bounds into 
               the saddle of his own horse. They spur the horses and ride 
               away, William clutching Marion's shrouded body to his chest.

               EXT. SECRET GROVE ON THE PRECIPICE - NIGHT

               William dismounts, stretching the body gently on the ground.

               Hamish dismounts too, with the spade he used to dig up the 
               old grave. He sees the emotion on William's face.

                                     HAMISH
                         I'll wait... back there.

                                     WALLACE
                         Hamish, I... thank...

               Hamish puts a hand on his friend's shoulder, then quietly 
               leads the horses away. William starts to dig...

               LATER IN THE GROVE

               William sits looking at the new grave, covered with leaves -- 
               completely hidden. He touches his hand to the earth.

               EXT. WOODS - BY THE STREAM - NIGHT

               Hamish is waiting as William comes out of the grove. There 
               is nothing to say. They mount their horses and ride away, as 
               the MUSIC of William and Marion's love haunts us...

               EXT. WOODS - ENCAMPMENT - NIGHT

               Wallace and his inner circle hare huddled around a small 
               fire. Other highlanders guard the perimeters. Old Campbell 
               is lovingly honing the broadswords to razor edges and sharing 
               a whiskey jug with Hamish, who stares at the fire. Wallace 
               is using a stick to draw diagrams in the dirt.

                                     CAMPBELL
                         What're ya doin'?

                                     WALLACE
                         Thinking.

                                     CAMPBELL
                         Does it hurt?

                                     WALLACE
                         What do we do when Longshanks sends 
                         his whole northern army against us? 
                         They have heavy cavalry. Armored 
                         horses, that shake the very ground. 
                         They'll ride right over us.

               At a loss, Wallace looks up at the sky. HE SEES: the trees 
               stretching into the night like spikes to skewer the stars.

                                     WALLACE
                         We make spears. A hundred spears. 
                         Fourteen feet long.

                                     HAMISH
                         Fourteen? --

                                     SENTRY (O.S.)
                         Volunteers coming in!

               They look to see a half dozen new volunteers being led in, 
               blindfolded. When the guides remove the blindfolds, the new 
               recruits see Wallace and rush to him, bowing.

                                     RECRUIT (FAUDRON)
                         William Wallace? We have come to 
                         fight and die for you!

                                     WALLACE
                         Stand up, man, I'm not the Pope.

                                     FAUDRON
                         I am Faudron! My sword is yours! And 
                         I brought you this tarta --

               As he reaches into his cloak, both Hamish and Campbell 
               instantly draw their swords and put the points to his neck.

                                     SENTRY
                         We checked them for arms.

               Carefully, Faudron pulls out a beautiful tartan scarf, and 
               replaces Wallace's tattered old one.

                                     FAUDRON
                         It's your family tartan! My wife 
                         wove it with her own hands.

                                     WALLACE
                         Thank her for me.

               A loud voice interrupts...

                                     VOICE
                         Him? That can't be William Wallace! 
                         I'm prettier than this man!

               They all look at a slender, handsome young man, STEPHEN, who 
               is talking to himself -- or more accurately, seems to listen 
               to some unheard voice, then answer it...

                                     STEPHEN
                         All right, Father, I'll ask him!
                              (to William)
                         If I risk my neck for you, will I 
                         get a chance to kill Englishmen?

                                     HAMISH
                         Is your Poppa a ghost -- or do you 
                         converse with God Almighty?

                                     STEPHEN
                         In order to find his equal, and 
                         Irishman is forced to talk to God.
                              (quickly)
                         Yes, Father!...
                              (to Wallace)
                         The Almighty says don't change the 
                         subject, just answer the fookin' 
                         question.

                                     CAMPBELL
                         Insane Irish --

               Stephen whips a dagger from his sleeve and puts it at 
               Campbell's throat.

                                     STEPHEN
                         Smart enough to get a dagger past 
                         your guards, old man.

               Wallace jerks his sword to the Irishman's throat, and grins.

                                     WALLACE
                         That's my friend, Irishman. And the 
                         answer's yes. You fight for me, you 
                         kill the English.

               Stephen grins, and happily tucks away the dagger.

                                     STEPHEN
                         Excellent! Stephen is my name. I'm 
                         the most wanted man on the Emerald 
                         Isle. Except I'm not on the Emerald 
                         Isle of course, more's the pity.

                                     HAMISH
                         A common thief.

                                     STEPHEN
                         A patriot!

               Wallace shakes his head and moves back to the fire, as the 
               sentries take the newcomers to find their own spaces.

               EXT. SCOTTISH COUNTRYSIDE - DAY

               A column of English light cavalry -- a hundred riders -- 
               moves through the picturesque beauty of the Highlands.

               English LORD DOLECROFT is in command, wearing a hat with a 
               pompous white plume. UP AHEAD, the English SCOUT sees five 
               Scots, including Hamish, walking out of the forest. The Scots 
               run; the Scout rides back to Dolecroft.

                                     SCOUT
                         Scotsmen, Sire! Headed west!

                                     DOLECROFT
                         They've blundered at last! After 
                         them!

               The English force charges off. Hamish and his men changed 
               direction but the English spot them crossing a hilltop and 
               ride after them. The Scots run for their lives; the English 
               horses gallop. The Scots run down one slope, up another; the 
               English follow, find their horses stumbling, and see...

                                     SCOUT
                         We're in a bog!

                                     DOLECROFT
                         Here, it's firm this way --

               But as they move toward the firm ground, fifty Scots appear 
               on the crest of the hill. Hamish leads them, smiling.

               Dolecroft wheels and looks to his rear; Wallace appears there, 
               with fifty more, and more Scots appear to the left and right 
               of the English, who are surrounded in the bog. Too late, 
               Dolecroft realizes his blunder. Wallace lifts his broadsword, 
               screams, and leads the charge...

               EXT. SCOTTISH WOODS - DAY

               The Scots are moving through deep woods; they are laden with 
               the booty they took from the English cavalry: extra weapons, 
               clothing, food -- and one man even wears the late Dolecroft's 
               plumed hat. Wallace is leading them, traveling with his heavy 
               sheathed broadsword across his shoulders.

                                     WALLACE
                         Stop here and rest.

               They collapse to the leaves and loam, greedily squeezing 
               water from sheep belly canteens.

               INT. STIRLING CASTLE - DAY

               LORD PICKERING, English commander, is handed news of the 
               disaster. He reads the message, and pales.

                                     PICKERING
                         Another ambush! My God! ...What about 
                         our infiltrator?

                                     ASSISTANT
                         He has already joined them, M'lord.

               EXT. SCOTTISH WOODS - NIGHT

               The moon is high above the Scots, encamped for the night.

               Most everyone is sleeping, but William sits leaning against 
               a tree, lost in lonely thoughts. Suddenly William freezes; a 
               shaft of moonlight illuminates a cloaked woman standing twenty 
               feet ahead of him. Something about her is familiar -- and 
               then she pulls off the hood, revealing her auburn hair, 
               cascading in the moonlight... It is Marion!

                                     WALLACE
                         Marion! Is... is it you?

               Joy explodes on his face, and he runs to her, but stops before 
               he touches her, as if she might evaporate.

                                     WALLACE
                         I'm dreaming.

                                     MARION
                         Yes, you are. And you must wake.

                                     WALLACE
                         I don't want to wake. I want to stay 
                         with you.

                                     MARION
                         And I with you. But you must wake.

                                     WALLACE
                         I need you so much! I love you!

                                     MARION
                         Wake up, William. Wake up!

                                     HAMISH'S VOICE
                         Wake up, William!...

                                     MARION/HAMISH
                         Wake up!...

               William clutches at Marion, but his arms can't enclose her.

               HE WAKES

               lying on his new tartan, in camp, with Hamish shaking him, 
               William's arms clutched empty to his chest.

                                     HAMISH
                         William! Hounds!

               Wallace jumps up, hearing the DISTANT BARKING that alarmed 
               Hamish. Stephen, the new Irish recruit, races up.

                                     STEPHEN
                         We must run in different directions!

                                     HAMISH
                         We don't split up!

                                     STEPHEN
                         They used hounds on us in Ireland, 
                         it's the only way!

                                     WALLACE
                         He's right, Hamish! Campbell! Divide 
                         them and run!

               Shoving groups of men in different directions, Wallace then 
               takes off. His group is about a dozen; they race through the 
               woods, dodging trees, running aimlessly. They stop and listen. 
               The BARKS are getting closer.

                                     WALLACE
                         Split again!

               Again they divide, and race in different directions.

               But no matter how they run and dodge, the BARKS grow nearer.

               We INTERCUT with the approaching of the dogs -- a large PACK 
               OF HOUNDS, with keepers like on a fox hunt, and behind the 
               dogs, Lord Pickering, with his soldiers, prepared for a long 
               chase, cloaked against the wet darkness, carrying torches.

               Wallace and others pause, hear the dogs, and run again, in a 
               new direction. The hounds are relentless. Wallace's group is 
               down to Hamish, Stephen, and Faudron.

                                     WALLACE
                         No matter how we go, they follow. 
                         They have our scent. My scent.

                                     FAUDRON
                         Run! You must not be caught!

               Faster now, faster. The barks are getting very close.

               Wallace and his friends are starting to panic. The blood 
               beats in their ears, their breath scalds their lungs. And we 
               MOVE IN on Wallace's eyes. He stops, gasping.

                                     STEPHEN
                         We can't stop!

                                     WALLACE
                         They've tricked us.

                                     STEPHEN
                         What's the crazy man saying, Lord?

                                     WALLACE
                         The dogs have a scent. My scent. 
                         Someone must have given it to them.

                                     STEPHEN
                         Who would do such a thing?

                                     WALLACE
                         Exactly.

               Wallace pulls out his dagger...

               THE DOGS

               bark frantically now; they smell a kill; they tug so hard at 
               their leashes that the handlers are almost dragged along.

                                     HANDLER
                         Be ready! We have them!

               The soldiers grip their weapons, ready to take their 
               prisoners. They burst into the little clearing; the dogs 
               find a body, stabbed, his throat cut; the dogs plunge their 
               snouts into the gore, yipping wildly. The handlers must fight 
               furiously to tear the dogs from the body.

               Lord Pickering approaches the body and looks down. It is 
               Faudron, mangled now but clearly identifiable -- with the 
               scarf he gave William, in place of William's own, tucked 
               into his shirt.

                                     LORD PICKERING
                         Damnation! Damnation!

               As Pickering rants, his men look at the darkness all around.

                                     LORD PICKERING
                         After him! Get them going again!

                                     HANDLER
                         Their noses are drowned in new blood, 
                         they'll follow nothing now!

               And just as the realization hits Pickering that he can't 
               pursue Wallace any further, a cloaked figure mixed in among 
               his men leans in from behind him to whisper...

                                     STEPHEN OF IRELAND
                         The Almighty says for you to give 
                         His regards to the Devil.

               Pickering's eyes go wide, then roll back as Stephen's dagger 
               slides expertly through his back ribs and into his heart. As 
               Pickering falls and his men realize what has happened, Stephen 
               has already run back into the trees.

               Pickering's men freeze at this sudden turn of events. Even 
               the dogs whimper, picking up the rising fear of the men around 
               them. Then from the darkness all around them comes a chorus 
               of demonic, bloodcurdling yells --

                                     WALLACE/HAMISH/STEPHEN
                         ARRRRRGGGGGGGHHHH!

               Three wild men tear out of the darkness from different 
               directions, their swords slashing. Pickering's men panic and 
               run, their dogs yelping, and the other soldiers, evident by 
               their torches, fell with them in all directions.

               Wallace, Hamish and Stephen are left alone in the heart of 
               the woods, howling, barking like dogs, snarling like wolves -- 
               and then laughing like hyenas!

                                     STEPHEN
                         I thought I was dead when ya pulled 
                         that dagger!

                                     WALLACE
                         No English lord would trust an 
                         Irishman!

                                     HAMISH
                         Let's kill him anyway.

               They laugh again; then Wallace's laughter leaks away, and he 
               stares into the trees, where he saw Marion in his dream.

               VARIOUS SHOTS - THE STORY SPREADS THROUGH SCOTLAND...

               Two men are talking in A VILLAGE...

                                     VILLAGER
                         ...and William Wallace killed fifty 
                         men! Fifty, if it was one!

               The same tale is exchanged by two farmers AT A CROSSROADS...

                                     FARMER
                         A hundred men! With his own sword! 
                         He cut a through the English like --

               The tale is repeated IN A TAVERN...

                                     DRINKER
                         -- Moses through the Red Sea! Hacked 
                         off two hundred heads!

                                     DRINKER #2
                         Two hundred?!

                                     DRINKER
                         Saw it with my own eyes.

               And the rumors are discussed even INSIDE THE PALACE GROUNDS 
               IN LONDON, where the Prince and his friends are trying on 
               elaborate attire presented them by fawning tailors, and the 
               Princess, ignored by her husband, strolls and chats with her 
               Handmaiden, Nicolette (in subtitled French).

                                     NICOLETTE
                         When the king returns he will bury 
                         them in those new clothes. Scotland 
                         is in chaos. Your husband is secretly 
                         sending an army north.

                                     PRINCESS
                         How do you know this?

                                     NICOLETTE
                         Last night I slept with a member of 
                         the War Council.

                                     PRINCESS
                         He shouldn't be telling secrets in 
                         bed.

                                     NICOLETTE
                         Ah, Oui! Englishmen don't know what 
                         a tongue is for.

               The Princess blushes, whacks her with her fan, and smiles.

                                     PRINCESS
                         This Scottish rebel... Wallace? He 
                         fights to avenge a woman?

                                     NICOLETTE
                         A magistrate wished to capture him, 
                         and found he had a secret lover, so 
                         he cut the girl's throat to tempt 
                         Wallace to fight -- and fight he 
                         did.

               The Princess is pained at such cruelty; Nicolette warms to 
               share the juicy gossip...

                                     NICOLETTE
                         Knowing his passion for his lost 
                         love, they next plotted to take him 
                         by desecrating the graves of his 
                         father and brother and setting an 
                         ambush at the grave of his wife. He 
                         fought his way through the trap and 
                         carried her body to a secret place! 
                         Now that is romance, Oui?

                                     PRINCESS
                         ...I wouldn't know.

               EXT. SCOTTISH HIGHLANDS - DAY

               A Highlander, a RUNNER, slips like a shadow up the hillside, 
               to a circle of ancient monoliths. There, hidden among the 
               stone pillars, he finds Wallace and his band resting.

                                     RUNNER
                         The English are advancing an army 
                         toward Stirling!

                                     WALLACE
                         Do the nobles rally?

                                     RUNNER
                         Robert the Bruce and most of the 
                         others will not commit to war! But 
                         word has spread and Highlanders are 
                         coming down on their own, by the 
                         hundreds -- by the thousands!

               EXT. ROAD - DAY

               Wallace rides down the road, followed by his band. As they 
               pass people on the road, the women, the children, all cheer.

                                     PEOPLE
                         Wallace! It's William Wallace! God 
                         bless Wallace and Scotland!

               At a crossroads, more of Wallace's men join them, in clusters. 
               One group carries something long, encased in wool covers. 
               Farmers in the field, blacksmiths at their forges, leave 
               their work and uncover their inevitable weapons and run after 
               the riders. They put on their forbidden tartans, kiss their 
               wives and head off to fight.

               EXT. STIRLING FIELD - DAY

               Stirling Castle perches on a hill high above a grassy field, 
               cut in half by a river, spanned by an old wooden bridge.

               SCOTTISH NOBLES have gathered on a smaller hill overlooking 
               the field; they wear gleaming armor, with plumes, sashes and 
               banners, and are attended by squires and grooms.

               The mists of morning shroud most of the field. But from the 
               opposite side of the bridge they hear the CLATTERING of a 
               huge army moving forward. LOCHLAN, a noble, gallops to Mornay.

                                     LOCHLAN
                         It sounds like twenty thousand!

                                     MORNAY
                         The scouts say it is ten.

                                     LOCHLAN
                         And we have but two!

               THE COMMON SCOTTISH SOLDIERS

               are wearing padded leather shirts, and carry pikes and 
               daggers. As through the mists they see the numbers arrayed 
               against them, a YOUNG SOLDIER tugs at a grizzled VETERAN.

                                     YOUNG SOLDIER
                         So many!

                                     SCOTTISH VETERAN
                         The nobles will negotiate. If they 
                         deal, they send us home. If not, we 
                         charge. When we are all dead and 
                         they can call themselves brave, they 
                         withdraw.

                                     YOUNG SOLDIER
                         I didn't come to fight so they could 
                         own more lands that I could work for 
                         them!

                                     VETERAN
                         Nor did I. Not against these odds!

               He lowers his pike and starts to desert. At first one-by-one 
               and then in clumps, more highlanders follow.

               THE NOBLES see the desertion.

                                     LOCHLAN
                         Stop! Men! Do not flee! Not now! 
                         Wait until we have negotiated!

                                     MORNAY
                         They won't stop -- and who could 
                         blame them?

               Then, riding into the mob of men, comes Wallace, followed by 
               his friends. He's striking, charismatic, his powerful arms 
               bare, his chest covered not in armor but a commoner's leather 
               shirt, and unlike the heavy knights on their armored horses, 
               Wallace rides a swift horse, like he was born on it.

               The entire Scottish army watches in fascination as Wallace 
               and his men ride through them, toward the command hill. The 
               soldiers whisper among themselves...

                                     YOUNG SOLDIER
                         William Wallace?

                                     VETERAN
                         Couldn't be.

               The common soldiers, already having broken ranks, cluster up 
               the hill to see the confrontation. As Wallace and his captains 
               reach the nobles, Stephen laughs.

                                     STEPHEN
                         The Almighty says this must be a 
                         fashionable fight, it's drawn the 
                         finest people.

                                     LOCHLAN
                         Where is thy salute?

                                     WALLACE
                         For presenting yourselves on this 
                         battlefield, I give you thanks.

                                     LOCHLAN
                         This is our army. To join it, you 
                         give homage.

                                     WALLACE
                         I give homage to Scotland. And if 
                         this is your army, why does it go?

               Wallace reins his horse around to face the mob of sullen 
               men, now frightened, ready to desert. We play this picture, 
               Wallace sitting his horse, looking down in awe at this thing 
               that has grown beyond anyone's imagination.

               He glances at his friends: Campbell, Hamish, Stephen.

               They've got no suggestions, they're just as awed as he is.

                                     SCOTTISH VETERAN
                         We didn't come to fight for them!

                                     SHOUTS FROM MOB
                         Home! The English are too many!

               Wallace raises his hand, and the army falls silent.

                                     WALLACE
                         Sons of Scotland!... I am William 
                         Wallace!

                                     SOLDIER
                         William Wallace is seven feet tall!

                                     WALLACE
                         Yes, I have heard! He kills men by 
                         the hundreds! And if he were here, 
                         he would consume the English with 
                         fireballs from his eyes, and bolts 
                         of lightning from his ass!

               Many laugh -- all get the point.

                                     WALLACE
                         I am William Wallace. And my enemies 
                         do not go away. I saw our good nobles 
                         hanged. My wife... I am William 
                         Wallace. And I see a whole army of 
                         my countrymen, here in defiance of 
                         tyranny. You have come to fight as 
                         free men. And free men you are! What 
                         will you do with freedom? Will you 
                         fight?

                                     VETERAN
                         Two thousand, against ten? We will 
                         run -- and live!

                                     WALLACE
                         Yes. Fight and you may die. Run and 
                         you will live, at least awhile. And 
                         dying in your bed many years from 
                         now, would you be willing to trade 
                         all the days from this day to that, 
                         for one chance to come back here as 
                         young men, and tell our enemies that 
                         they make take our lives, but they 
                         will never take our freedom?

               Down on the plain, English emissaries in all their regal 
               finery gallop over the bridge, under a banner of truce.

                                     VETERAN
                         Look! The English comes to barter 
                         with our nobles for castles and 
                         titles. And our nobles will not be 
                         in the front of the battle!

                                     WALLACE
                         No! They will not!

               He dismounts, and draws his sword.

                                     WALLACE
                         And I will.

               Slowly, the chant begins, and builds...

                                     SCOTS
                         Wal-lace! Wal-lace! WAL-LACE!

               BAGPIPERS play, pulling the mob back into companies. But 
               through the lifting mists they see the overwhelming enemy 
               army. Hamish, Campbell and Stephen move up beside William.

                                     STEPHEN
                         Fine speech. Now what do we do?

                                     WALLACE
                         Bring out our spearmen and set them 
                         in the field.

               Campbell, Hamish and Stephen ride off. Mornay reins his horse 
               over, lifts the reins of Wallace's horse, and extends them 
               to him: an invitation to join the pre-battle talks.

               Wallace mounts up and rides out with the Scottish nobles to 
               meet the English contingent.

               OUT ON THE FIELD, THE TWO GROUPS OF RIDERS

               meet like the captains of football teams before the kickoff. 
               CHELTHAM, head of the English contingent, glares at Wallace.

                                     CHELTHAM
                         Mornay. Lochlan. Inverness.

                                     MORNAY
                         Cheltham. This is William Wallace

                                     CHELTHAM
                         Here are the King's terms. Lead this 
                         army off the field, and he will give 
                         you each estates in Yorkshire, 
                         including hereditary title, from 
                         which you will pay him an annual --

                                     WALLACE
                         I have an offer for you.

                                     CHELTHAM
                         ...From which you will pay the King 
                         an annual duty...

               Wallace pulls his broadsword and snaps it at Cheltham, whose 
               eyes flash in disbelief at the bad manners.

                                     LOCHLAN
                         You disrespect a banner of truce?!

                                     WALLACE
                         From his king? Absolutely. Here are 
                         Scotland's terms. Lower your flags 
                         and march straight to England, 
                         stopping at every Scottish home you 
                         pass to beg forgiveness for a hundred 
                         years of theft, rape, and murder. Do 
                         that, and your men shall live. Do it 
                         not, and every one of you will die 
                         today.

               Cheltham barks at the Scottish nobles...

                                     CHELTHAM
                         You are outmatched! You haven't even 
                         any cavalry! In two centuries no 
                         army has won without it!

                                     WALLACE
                         I'm not finished. Before we let you 
                         leave, your commander must cross 
                         that bridge, stand before this army, 
                         put his head between his legs, and 
                         kiss his own ass.

               The outraged Englishman gallops back to his lines.

                                     MORNAY
                         I'd say that was rather less cordial 
                         that he was used to.

                                     WALLACE
                         Be ready, and do exactly as I say.

               They return to the Scottish lines. Wallace dismounts where 
               his men are breaking out new 14-foot spears. Hamish, eyebrows 
               raised, looks expectantly at Wallace; Wallace nods.

                                     HAMISH
                         Wish I could see the noble lord's 
                         face when he tells him.

               LORD TALMADGE, AT HIS COMMAND POST

               The husky English commander's blood boils from Cheltham's 
               report. Before he can respond, they see WALLACE'S SPEARMEN 
               taking up a position on the far side of the bridge. Suddenly 
               the Scots turn and lift their kilts and moon the English!

                                     TALMADGE
                         Insolent bastard! Full attack! Give 
                         no quarter! And I want this Wallace's 
                         heart brought to me on a plate!

               Cheltham spurs his horse to form up the attack...

               EXT. THE FIELD BELOW STIRLING CASTLE - DAY

               The English army moves forward toward the bridge. It's so 
               narrow that only a single file of riders can move across it 
               at any one time. The English heavy cavalry, two hundred 
               knights, cross uncontested, and form up on the other side.

               WITH WALLACE AND THE SCOTS

               Things look terrible. Stephen turns to William.

                                     STEPHEN
                         The Lord tell me He can get me out 
                         of this mess. But He's pretty sure 
                         you're fooked.

               ON THE ENGLISH SIDE

               Talmadge sees the Scots doing nothing.

                                     TALMADGE
                         Amateurs! They do not even contest 
                         us! Send across the infantry.

                                     GENERAL
                         M'lord, the bridge is so narrow --

                                     TALMADGE
                         The Scots just stand in their 
                         formations!

               Our cavalry will ride them down like grass. Get the infantry 
               across so they can finish the slaughter!

               The English leaders shout orders and keep their men moving 
               across the bridge. Talmadge gestures for the attack flag.

               THE CAVALRY ON THE OTHER SIDE OF THE BRIDGE

               The English knights see the signal banners, telling them to 
               attack. They take the lances from their squires, and lower 
               the visors of their helmets. Proud, plumed, glimmering; they 
               look invincible. Their huge horses, themselves draped in 
               scarlet and purple, look like tanks. The knights charge!

               Their hooves THUNDER; the horses are so heavy the ground 
               literally shakes with the charge.

               The Scots stand and watch them come on. It's difficult to 
               imagine the courage this takes; from the POV OF THE SCOTTISH 
               LINES we see the massive horses boring in... we feel the 
               RISING THUNDER of the charge, closer, closer...

               Wallace moves to the front of the lead group of Scots.

                                     WALLACE
                         Steady! Hold... hold... NOW!

               The Scots snap their 14-foot spears straight up in unison.

                                     WALLACE
                         FORM!

               Now the spearmen snap the spears forward in ranks, the first 
               line of men bracing their spears at an angle three feet above 
               the ground, the men behind them bracing theirs at a five 
               foot level, the men behind that bracing at seven feet.

               The English knights have never seen such a formation. Their 
               lances are useless and it's too late to stop! The momentum 
               that was to carry the horses smashing through the men on 
               foot now becomes suicidal force; knights and horses impale 
               themselves on the long spears like beef on skewers.

               TALMADGE

               can see it; but worse is the SOUND, the SCREAMS OF DYING MEN 
               AND HORSES, carried to him across the battlefield.

               WALLACE AND HIS MEN

               are protected, behind a literal wall of fallen chargers and 
               knights. Wallace draws his broadsword and leads his swordsmen 
               out onto the field, attacking the knights that are still 
               alive. Most are off their horses; a few have managed to pull 
               up their mounts. Wallace and his men are so much more mobile 
               than the knights; the field runs with blood.

               Wallace faces Talmadge in the distance.

                                     WALLACE
                         Here I am, English coward! Come get 
                         me!!

               TALMADGE is even more enraged -- and his judgment is gone.

                                     TALMADGE
                         Press the men across!

                                     CHELTHAM
                         But M'lord!

               Talmadge himself gallops forward.

                                     TALMADGE
                         PRESS THEM!

               WALLACE smiles. He grabs Hamish.

                                     WALLACE
                         Tell Mornay to ride to the flank and 
                         cross upstream. Wait! Tell him to be 
                         sure the English see him ride away!

               Hamish hurries off with the message.

               The English infantry keeps moving across the little bridge.

               The Scottish nobles watch from their positions on horseback.

               They have a few dozen mounted riders, none heavily armored.

                                     LOCHLAN
                         If he waits much longer --

               Hamish hurries up.

                                     HAMISH
                         Ride around and ford behind them!

                                     MORNAY
                         We should not divide our forces!

                                     HAMISH
                         Wallace says do it! And he says for 
                         you to let the English see you!

                                     MORNAY
                              (understanding)
                         They shall think we run away.

               Mornay leads his riders away.

               LORD TALMADGE

               sees the Scottish nobles ride off, and shouts to Cheltham...

                                     TALMADGE
                         See! Every Scot with a horse is 
                         fleeing! Hurry! Hurry!

               He drives half his army across the river.

               WALLACE

               lifts his sword.

                                     WALLACE
                         For Scotland!

               He charges down the hill...

               THE FIGHT AT STIRLING BRIDGE - VARIOUS SHOTS

               The Scots follow Wallace on foot, charging into the English.

               The English leaders are stunned by the ferocious attack.

                                     TALMADGE
                         Press reinforcements across!

               The English leaders try to herd more of their footsoldiers 
               onto the bridge, which only hams them up. Meanwhile, on the 
               other side of the bridge, Wallace and his charging men slam 
               into the English infantry with wild fury. The English fall 
               back on each other, further blocking the bridge.

               UP ON THE HILLTOP

               The nobles look back with grudging admiration.

                                     MORNAY
                         He's taking the bloody bridge! The 
                         English can't get across! He's evened 
                         the odds at one stroke!

               With rising desire to join the bandwagon, the nobles spur...

               DOWN ON THE PLAIN, Wallace and the attacking men drive the 
               English back, killing as they go. The Scots reach the bridge 
               itself. The waters below it run red with blood.

               Talmadge has begun to panic.

                                     TALMADGE
                         Use the archers!

                                     GENERAL
                         They're too close, we'll shoot out 
                         own men!

               ON THE BRIDGE

               the Scots are carving their way through the English soldiers; 
               nothing can stop them. Wallace is relentless; each time he 
               swings, a head flies, or an arm. Hamish and Stephen fight 
               beside him, swinging the broadsword with both hands. Old 
               Campbell loses his shield in the grappling; an English 
               swordsman whacks at him and takes off his left hand, but 
               Campbell batters him to the ground with his right, and stabs 
               him. Reaching the English side of the bridge, the Scots begin 
               to build a barrier with the dead bodies.

               The English are not without courage. Cheltham leads a 
               desperate counterattack. The Scots make an impenetrable 
               barrier of slashing blades. Still Cheltham keeps coming; 
               Wallace hits him with a vertical slash that parts his helmet, 
               his hair, and his brain.

               TALMADGE has seen enough; he gallops away. The remaining 
               English General tries to save the army.

                                     GENERAL
                         We are still five thousand! Rally!

               The English try to form up; but the Scottish horsemen, fording 
               the river high upstream, come crashing into the English flank 
               and ride over the surprised English infantry.

               AT THE BRIDGE, WALLACE

               sees the Scottish nobles attacking. The English soldiers are 
               in utter panic, running and being cut down on all sides.

               And the Scottish soldiers taste something Scots have not 
               tasted for a hundred years: victory. Even while finishing 
               off the last of the English soldiers, they begin their highlow 
               chant... Even the noblemen take up the chant!

               Wallace looks around at the aftermath of the battle: bodies 
               on the field; soldiers lying impaled; stacks of bodies on 
               the bridge; the bridge slick with blood.

               Before it can all sink in, William is lifted on the shoulders 
               of his men.

                                     SCOTTISH SOLDIERS
                         Wal-lace! Wal-lace! Wal-lace!

               INT. CASTLE - GREAT HALL - DAY

               William kneels before one of Scotland's ancient elders, who 
               lifts a silver sword and dubs William's shoulders.

                                     ELDER
                         I knight thee Sir William Wallace.

               William rises and faces the Great Hall, crowded with hundreds 
               of new admirers, as well as his old friends in their new 
               clothes and armor. The crowd chants --

                                     CROWD
                         Wal-lace, Wal-lace!!

               Wallace lifts his eyes, taking it all in. At the rear of the 
               hall is a balcony, backed by a magnificent sunlit stained 
               glass window, and in the center of its rainbow corona he 
               sees a familiar form: Marion, so real to him in this moment 
               of triumph that he can see her, glowing like an angel, in a 
               gown worthy of the occasion. But the illusion won't last; in 
               the blink of an eye she is gone, and Wallace hears the chant, 
               and fingers the cloth she gave him.

               INT. SCOTTISH COUNCIL - DAY

               The nobles of Scotland are gathered in the huge chamber; a 
               massive table runs across the far end of the room, and aligned 
               on either side are the two rival factions of nobles, glaring 
               at each other. Old Craig is in the center, with young Robert 
               the Bruce on his right. There is a general MURMUR along the 
               nobles, and Robert whispers to Craig...

                                     ROBERT
                         Does anyone know his politics?

                                     CRAIG
                         No. But his weight with the commoners 
                         could unbalance everything. The 
                         Balliols will kiss his ass, so we 
                         must.

               A court STEWARDS steps in and formally announces...

                                     STEWARD
                         Lords of Scotland: Sir William 
                         Wallace!

               The nobles on each side of the table try to outdo each other 
               in their acclamation as Wallace strides in, flanked by Hamish, 
               Campbell, and Stephen, splendid in their tartans.

               Old Craig rises.

                                     CRAIG
                         Sir William. In the name of God, we 
                         declare and appoint thee High 
                         Protector of Scotland! And thy 
                         captains as aides decamp!

               The nobles rise; court attendants hurry to Wallace and drape 
               a golden chain of office around his neck. Wallace takes the 
               three smaller chains they bring and drapes them around the 
               necks of his friends, as once again the nobles applaud.

               Almost before the applause dies, a member of the BALLIOL 
               clan, who has kept an open seat beside him, speaks up...

                                     BALLIOL
                         Sir William!! Inasmuch as you and 
                         your captains hail from a region 
                         long known to support the Balliol 
                         clan, may we invite you to join us?

               But Wallace's gaze has locked onto Robert the Bruce, who 
               stares back, the two young lions instantly recognizing the 
               leadership power of each other.

                                     WALLACE
                         You are Robert the Bruce.

                                     ROBERT THE BRUCE
                         I am.

                                     WALLACE
                         My father fought in support of yours.

               The Balliols shrivel. The nobles on the Bruce side can barely 
               keep from grinning. Suddenly the men on the other end of the 
               table change their attack.

                                     BALLIOL
                         With this new success, the result of 
                         all of Scotland's efforts, now is 
                         the time to declare a king!

                                     MORNAY
                         Then you are prepared to recognize 
                         our legitimate succession!

                                     BALLIOL
                         You're the ones who won't support 
                         the true claim! I demand consideration 
                         of these documents!

               Wallace glances again at the Bruce, who suddenly feels ashamed 
               of the bickering.

                                     MORNAY
                         Those were lies when they were 
                         written! Our documents prove 
                         absolutely that --

               Suddenly Wallace turns his back and walks toward the door.

                                     CRAIG
                         Sir William! Where are you going?

                                     WILLIAM
                         We have beaten the English! But 
                         they'll come back, because you won't 
                         stand together. There is one clan in 
                         this country -- Scotsmen. One class -- 
                         free. One price -- courage.

               He turns again and strides toward the door.

                                     CRAIG
                         But... what will you do?

                                     WALLACE
                         I will invade England. And defeat 
                         the English on their own ground.

                                     CRAIG
                         Invade?! That's impossible, it --

               Wallace slings out his broadsword and moves down the length 
               of the table, bashing the succession documents into the laps 
               of the nobles.

                                     WALLACE
                         LISTEN TO ME! Longshanks understands 
                         this! This!

               He brandishes the broadsword.

                                     WALLACE
                         There is a difference between us. 
                         You think the people of this country 
                         exist to provide you with position. 
                         I think your position exists to 
                         provide the people with freedom. And 
                         I go to make sure they have it.

               Wallace bangs through the door. Suppressing smiles, his 
               friends file out behind him.

               INT. EDINBURGH CORRIDOR - DAY

               Wallace and his men are marching away, as Robert the Bruce 
               runs out after them.

                                     ROBERT
                         Wait! ...I respect what you said. 
                         But remember, these men have lands, 
                         castles. Much to risk.

                                     WALLACE
                         And the common man who bleeds on the 
                         battlefield, does he risk less?

                                     ROBERT
                         No. But from top to bottom this 
                         country has no sense of itself. Its 
                         nobles share allegiance with England 
                         and its clans war with each other. 
                         If you make enemies on both sides of 
                         the border, you'll end up dead.

                                     WALLACE
                         We all end up dead. It's only a 
                         question of how. And why.

               Wallace walks; Robert catches up and speaks to him in an 
               urgent half whisper, so that no one else can hear.

                                     ROBERT
                         I'm no coward! I want what you want! 
                         But we need the nobles.

                                     WALLACE
                         Nobles? What does that mean -- to be 
                         noble? Your title gives you claim to 
                         the throne of our country. But men 
                         don't follow titles, they follow 
                         courage! Your arm speaks louder than 
                         your tongue. Our people know you. 
                         Noble and common, they respect you. 
                         If you would lead them toward freedom, 
                         they would follow you. And so would 
                         I.

               Wallace walks away, leaving Robert the Bruce alone.

               THE SCOTTISH ARMY - DAY

               Wallace rides at the head of his army, moving through the 
               countryside of northern England. It is autumn, the foliage 
               is beautiful, the wheat fields gold with harvest.

               EXT. ESTABLISHING YORK CITY - DAY

               A medieval city guarded by a fortress.

               INT. THE FORTRESS - MAP ROOM - DAY

               The ROYAL GOVERNOR is a spoiled young man, Longshanks' nephew. 
               He is studying maps and written appeals for help; his CAPTAIN 
               of defenses strides in with another note.

                                     CAPTAIN
                         Message from your cousin, the Prince. 
                         He says London has no more troops to 
                         send.

                                     GOVERNOR
                         Every town in Northern England is 
                         begging for help! Where will Wallace 
                         strike first?

                                     CAPTAIN
                         I should think these smaller 
                         settlements along the border...

               They hear shouts as a rider arrives and dismounts. They look 
               out to see a panicked RIDER, who shouts up...

                                     RIDER
                         He advances!

                                     GOVERNOR
                         To what town?

                                     RIDER
                         He comes here!

                                                                  SMASH TO:

               CARTS, RUMBLING IN PANIC DOWN A ROAD

               as civilians flee the walled city in the distance.

               THE SCOTTISH ARMY

               has cut a huge tree and placed it on wheels. It rumbles 
               ominously TOWARD CAMERA...

               THE CIVILIAN PANIC CONTINUES as more people join the swell 
               of those leaving York.

               THE SCOTTISH ARMY keeps coming on.

               INSIDE THE WALLS OF THE CITY - DAY

               The governor is furious and confused.

                                     GOVERNOR
                         We will not allow a bandit to panic 
                         the greatest city in Northern England! 
                         Close off the escapes! Let no one 
                         leave!

                                     CAPTAIN
                         The city has emptied already, Sire. 
                         Only the Scottish civilians remain.

               The Governor turns to his captain with a look worthy of his 
               uncle, Longshanks the King.

               ON THE BATTERING RAM

               as it picks up speed and SLAMS into the wooden gate of the 
               city. With the collision, THE BATTLE IS ON. It's a night 
               battle: torches, flaming arrows, pots of boiling oil being 
               splashed down at the attackers, who swarm the gate.

               The oil beats the first wave of Scots back, but Wallace rushes 
               forward, grabbing the ram cart with his own hands; the 
               attackers rally to him, helping him slam the gate again and 
               again. It breaks; but behind it is an awful tangle of carts, 
               broken sheds, impenetrable rubbish. Wallace grabs a torch, 
               throws it into the wooden tangle, and shouts --

                                     WALLACE
                         Back! Wait for it to burn!

               INSIDE THE CITY

               The Captain hurries into the tower room.

                                     CAPTAIN
                         They've breached the wall!

                                     GOVERNOR
                         Then do as I ordered.

               OUTSIDE THE WALLS

               The Scots wait, biding their time as the barrier burns.

               Suddenly they look up in horror; the English are throwing 
               the bodies of hanged Scots over the wall.

               They stare at this in mute shock. Wallace is frozen, his 
               eyes reflecting his boyhood reaction. His men rush forward.

                                     WALLACE
                         STOP! NOT YET! LISTEN TO ME!
                              (beat)
                         They wish to frighten us! Or goad us 
                         into attacking too soon! Don't look 
                         away! LOOK!

               The Scots look at the hanging bodies.

                                     WALLACE
                         Behold the enemy we fight! We will 
                         be more merciful than they have been. 
                         We will spare women, children, and 
                         priests. For all else, no mercy.

               Wallace draws his broadsword. The burning debris inside the 
               gate collapses, leaving a tunnel through the fire. Wallace 
               screams, and leads the charge through the burning barrier.

               INT. THE PALACE IN LONDON - DAY

               Prince Edward and Phillip, his fencing friend and lover, 
               hear a contingent of horsemen clatter into the courtyard 
               below; they look out the window and see the arrival of 
               Longshanks.

               They lean back into the room and Edward begins to pace 
               nervously.

                                     PHILLIP
                         It is not your fault! Stand up to 
                         him.

               Edward shows Phillip the dagger he has concealed in his belt 
               behind his back.

                                     EDWARD
                         I will stand up to him, and more.

               Longshanks bangs the door open and stalks in angrily. First 
               he glares at Phillip with obvious loathing, then turns his 
               piercing stare to his own son.

                                     LONGSHANKS
                         What news of the north?

                                     EDWARD
                         Nothing new, Majesty. We have sent 
                         riders to speed any word.

                                     LONGSHANKS
                         While I am in France fighting to 
                         expand your future kingdom I learn 
                         that Stirling castle is lost, our 
                         entire northern army wiped out! And 
                         you have done nothing?!

                                     EDWARD
                         I have ordered conscriptions...

               A messenger enters and hands the prince a message. Edward 
               reads it and nearly loses his balance.

                                     EDWARD
                         Wallace has sacked York!

                                     LONGSHANKS
                         Impossible.
                              (to messenger)
                         How dare you bring a panicky lie.

               The messenger has also brought a basket. He approaches the 
               central table with great dread and places the basket on it, 
               uncovering its contents. Prince Edward is closest; he looks 
               in, then staggers back, stunned. Longshanks moves to the 
               sack coldly, looks in, and withdraws the severed head of his 
               nephew, York's (former) Governor.

                                     PHILLIP
                         Sire! Thy own nephew! What beast 
                         could do such a thing?!

               The king drops the head back into the sack, unmoved.

                                     LONGSHANKS
                         If he can sack York, he can invade 
                         lower England.

                                     PHILLIP
                         We would stop him!

                                     LONGSHANKS
                         Edward, who is this shitpoker who 
                         speaks to me as if I needed his 
                         advice?

                                     EDWARD
                         I have declared Phillip my High 
                         Counselor.

               Longshanks nods as if impressed. He moves to Phillip and 
               examines the gold chain of office that the young man wears.

               Then Longshanks grabs him and throws him out the window, the 
               same one Edward and Phillip were looking out, six stories 
               above the courtyard. We hear Phillip's SCREAM as he falls.

               Edward rushes toward the window in horror. He looks out at 
               the result, turns back toward his father in shock and hatred, 
               and only then remembers the dagger and goes for it.

               He stabs at Longshanks; the old king smiles at the attack, 
               parrying, letting his arms be cut.

                                     LONGSHANKS
                         You fight back at last!

               Then Longshanks unleashes his own hateful fury; he grapples 
               with Edward, knocking the dagger away and hurling him to the 
               floor; then Longshanks kicks his son, again and again. He 
               exhausts his fury on him.

               Edward is a bloody mess; Longshanks coughs up a bit of blood.

               He ignores it and his son's wreckage, and goes back to the 
               discussion, as if this fight was normal business.

                                     LONGSHANKS
                         We must sue for a truce, and buy him 
                         off. But who will go to him? Not I. 
                         If I came under the sword of this 
                         murderer, I would end up like my 
                         nephew. And not you, the sight of my 
                         faggot son would only encourage an 
                         enemy to take over this country. So 
                         whom do I send?

               Longshanks calculates.

               EXT. WALLACE ARMY CAMP - DAY

               A full encampment, across an English field; campfires chase 
               the dawn chill. Soldiers sharpen swords and spear points.

               Wallace is huddled with his inner circle, all except Campbell, 
               who receives a report from a scout.

                                     CAMPBELL
                         A royal entourage comes, flying 
                         banners of truce, and the standards 
                         of Longshanks himself!

               Wallace buckles on his sword.

               AN ENGLISH PAVILION TENT - YORKSHIRE - DAY

               Set up for a meeting in a sunny meadow. Wallace and his men 
               ride in, wary, ready for ambush. They surround the tent.

               There are two dozen royal soldiers there, but they make no 
               threatening moves.

               No sound from the tent. Wallace rests his hand on the handle 
               of his broadsword, ready.

                                     WALLACE
                         Longshanks! I have come.

               Servants pull back the sides of the tent door, and a tall, 
               slender, shapely female figure appears there. There in the 
               shadows, she looks just like Marion! William is not the only 
               one who notices the resemblance; he glances at Hamish and 
               Campbell and sees them haunted by it too. Is this another 
               dream? He pales, as she steps into the morning sun. She moves 
               toward him, her face lowered. It is Marion!

               She reaches him, lifts her face... and he sees the Princess!

               William is relieved -- and yet as he sees the Princess more 
               closely he is still shaken by the resemblance in the way she 
               carries herself, her shape, the fall of her hair.

               The Princess is struck with Wallace, too -- tall, powerful, 
               and commanding. Wallace dismounts, and moves to face her.

               Their eyes hang on each other. She sees something that she 
               has not seen in the face of a man in her whole life.

               She surprises him by bending at the knee, in a half-submissive 
               yet proud curtsey.

                                     PRINCESS
                         I am the Princess of Wales.

                                     WALLACE
                         Wife of Edward, the king's son?

               She nods; somehow she is already ashamed.

                                     PRINCESS
                         I come as the king's servant, and 
                         with his authority.

                                     WALLACE
                         It's battle I want, not talk.

                                     PRINCESS
                         But now that I am here, will you 
                         speak with a woman?

               She leads him under the pavilion, a purple canopy shading 
               rich carpets laid on the bare ground. Watching the gorgeous 
               walk, Stephen lies back on his saddle and twitches his leg 
               like a horny dog. Hamish backhands him; Campbell, Hamish and 
               Stephen quickly dismount and follow the procession, 
               shouldering their way in beside the Princess's French guards, 
               so they can watch Wallace's back. The rest of the Scots 
               surround the tent, ready for ambush.

               Nicolette is among the royal attendants there; seeing Wallace, 
               she shoots a glance at the Princess that says Ooo-La-La! The 
               servants have brought a throne for the Princess, a lower 
               chair for Wallace. She sits; he refuses the chair.

               She studies him, taking in his anger and his pride.

                                     PRINCESS
                         I understand that you have recently 
                         been given the rank of knight.

                                     WALLACE
                         I have been given nothing. God makes 
                         men what they are.

                                     PRINCESS
                         Did God make you the sacker of 
                         peaceful cities? The executioner of 
                         the king's nephew, my husband's own 
                         cousin?

                                     WALLACE
                         York was the staging point for every 
                         invasion of my country. And that 
                         royal cousin hanged a hundred Scots, 
                         even women and children, from the 
                         city walls.

                                     PRINCESS
                         That is not possible.

               But knowing Longshanks' family, she glances at a richly 
               dressed Advisor, a CRONY of the king, who averts his eyes.

                                     WALLACE
                         Longshanks did far worse, the last 
                         time he took a Scottish city.

               The Crony mumbles to her in LATIN, WITH SUBTITLES...

                                     CRONY
                              (Latin)
                         He is a murdering bandit, he lies.

                                     WALLACE
                              (Latin!)
                         I am no bandit. And I do not lie.

               They are startled at Wallace's fluency in Latin.

                                     WALLACE
                         Or in French if you prefer that: 
                         Certainmous et ver! Ask your king to 
                         his face, and see if his eyes can 
                         convince you of the truth.

               She stares for a long moment at Wallace's eyes.

                                     PRINCESS
                         Hamilton, leave us.

                                     CRONY (HAMILTON)
                         M'lady --

                                     PRINCESS
                         Leave us now.

               He reluctantly obeys. Seeing that she wants the exchange to 
               be private, Wallace turns and nods for his men to leave.

               Stephen, who has been admiring the lady's beauty non-stop, 
               leans in and whispers to William...

                                     STEPHEN
                         Her husband's more of a queen than 
                         she is. Did you know that?

               Stephen moves off with Hamish and Campbell. Wallace and the 
               princess are left alone.

                                     PRINCESS
                         Let us talk plainly. You invade 
                         England. But you cannot complete the 
                         conquest, so far from your shelter 
                         and supply. The King proposes that 
                         you withdraw your attack. In return 
                         he grants you title, estates, and 
                         this chest with a thousand pounds of 
                         gold, which I am to pay to you 
                         personally.

                                     WALLACE
                         A Lordship. And gold. That I should 
                         become Judas.

                                     PRINCESS
                         Peace is made is such ways.

                                     WALLACE
                         SLAVES ARE MADE IN SUCH WAYS!

               The outburst startles even those watching from a distance.

               The Princess is mesmerized by Wallace's passion.

                                     PRINCESS
                         I understand you have suffered. I 
                         know... about your woman.

                                     WALLACE
                         She was my wife. We married in secret 
                         because I would not share her with 
                         an English lord. They killed her to 
                         get to me. And she was pregnant.

               The Princess is stunned; Wallace is dead still.

                                     WALLACE
                         I've never told anyone. I don't know 
                         why I tell you -- except because you 
                         look... much like her. And someday 
                         you will be a queen, and you must 
                         open your eyes!
                              (beat)
                         Tell your king that William Wallace 
                         will not be ruled. Nor will any Scot, 
                         while I live.

               The Princess rises slowly from her chair, moves in front of 
               him, and lowers herself to her knees. The Crony and her other 
               attendants, seeing this from a distance, are shocked.

                                     PRINCESS
                         Sir. I leave this money, as a gift. 
                         Not from the king, but from myself. 
                         And not to you, but to the orphans 
                         of your country.

               She lifts her face. Their eyes hold a moment too long.

               LATER, EXT. FIELD - DAY

               Wallace and his captains sit on horseback at the head of 
               their company and watch as the Princess' procession leaves.

               Hamish studies Wallace's face; Wallace notices and gives him 
               a non-committal shrug. As the carriage rolls away, its window 
               curtains lift back slightly. All they see are the Princess' 
               fingers, but they know she looked back. Wallace reins his 
               horse away, to ride back to camp.

               INT. EDWARD'S PALACE - DAY

               The doors open; the Princess enters Longshanks' war council; 
               Prince Edward is there, among a dozen others.

                                     LONGSHANKS
                         My son's loyal wife returns, unkilled 
                         by the heathen. So he accepted our 
                         bribe.

                                     PRINCESS
                         No. He did not.

                                     LONGSHANKS
                         Then why does he stay? My scouts say 
                         he has not advanced.

                                     PRINCESS
                         He waits. For you. He says he will 
                         attack no more towns -- if you are 
                         man enough to come fight him.

                                     LONGSHANKS
                         You spoke with this Wallace in 
                         private. What kind of man is he?

                                     PRINCESS
                         ...A mindless barbarian. Not a king 
                         like you, M'lord.

                                     LONGSHANKS
                         The Scottish nobles have sent him no 
                         support. His army starves. Our stall 
                         has worked, he must withdraw. You 
                         may return to your embroidery.

                                     PRINCESS
                         Humbly, M'lord.

               She barely curtseys, and starts out.

                                     EDWARD
                         You brought back the money, of course?

               He already knows she didn't; Hamilton is standing near him.

                                     PRINCESS
                         No. I have it to ease the suffering 
                         of the children of this war.

                                     LONGSHANKS
                              (glances at son)
                         This is what happens when you must 
                         send a woman. And a fool.

                                     PRINCESS
                         Forgive me, Sire. I thought that 
                         generosity might demonstrate your 
                         greatness to those you mean to rule.

                                     LONGSHANKS
                         My greatness is better demonstrated 
                         with this.

               From a box at his feet the king withdraws a crossbow and 
               throws it onto the table. Most of those there are shocked.

                                     EDWARD
                         The weapon has been outlawed by the 
                         Pope himself!

                                     LONGSHANKS
                         So the Scots will have none of them, 
                         will they? My armorers have already 
                         made a thousand.

               Longshanks smiles. No one notices that the Princess is deadly 
               pale.

               EXT. WALLACE ARMY CAMP - DAY

               The Scots are lining up to leave their encampment. Wallace 
               is about to give the signal to start the march when Hamish, 
               beside him, comes alert; a small group of riders in 
               distinctive attire are coming toward them; what can this be?

                                     HAMISH
                         William -- French guards?

               The riders stop at a distance, and out from their ranks comes 
               a single rider, sitting sidesaddle. It is Nicolette.

               Wallace and Hamish recognize her from the Princess's visit.

               She trots her horse the rest of the way, while the French 
               guards stay back. Hamish helps her from her horse. She moves 
               to Wallace, and opens the heavy folds of her heavy riding 
               cape.

               Secreted there, hung from a rope at her neck, is a crossbow.

               EXT. A FIELD IN SCOTLAND - DAY

               Wallace has gathered the nobles, among them Robert the Bruce, 
               Mornay, and old Craig, for a demonstration. Hamish and Stephen 
               have placed a spearman's chestplate against a bale of hay. 
               As William cranks the crossbow to its full cocked position 
               and places a bolt in its slot, Stephen tucks a melon behind 
               the armor.

               William aims... and fires. The bolt slashes through the air 
               and punches through the armor and the melon, leaving no doubt 
               what it would do to a man's heart. The nobles pale.

                                     CRAIG
                         That is why the Pope outlawed the 
                         weapon! It makes war too terrible.

                                     MORNAY
                         How many does Longshanks have?

                                     WALLACE
                         A thousand.
                              (beat)
                         You have made me Guardian of Scotland. 
                         So I tell you this is what we face.

                                     CRAIG
                         We must sue for peace.

                                     WALLACE
                         Peace?!

                                     CRAIG
                         We cannot defeat this --

                                     WALLACE
                         With cavalry -- not heavy, like the 
                         English, but light, fast horsemen, 
                         like you nobles employ -- we could 
                         outmaneuver their bowmen!

                                     CRAIG
                         It is suicide.

                                     ROBERT
                         Sir William --

               The Bruce sees Wallace about to explode, and tries to 
               intervene -- but Wallace's anger is too great.

                                     WALLACE
                         We won at Stirling and still you 
                         quibbled! We won at York and you 
                         would not support us! Then I said 
                         nothing! Now I say you are cowards!

               The nobles grip their weapons; Wallace, Hamish and Stephen 
               are ready to finish this quarrel right here. Robert the Bruce, 
               backed by Mornay, steps between the two sides.

                                     ROBERT
                         Please, Sir William! Speak with me 
                         alone! I beg you!

               The nobles stalk away, and Robert draws Wallace away, to the 
               target Wallace shot, so they are alone.

                                     ROBERT
                         You have achieved more than anyone 
                         dreamed. But fighting these odds 
                         looks like rage, not courage. Peace 
                         offers its rewards! Has war become a 
                         habit you cannot break?

               The question strikes deep.

                                     WALLACE
                         War finds me willing. I know it won't 
                         bring back all I have lost. But it 
                         can bring what none of us have ever 
                         had -- a country of our own. For 
                         that we need a king. We need you.

                                     ROBERT
                         I am trying.

                                     WALLACE
                         Then tell me what a king is! Is he a 
                         man who believes only what others 
                         believe? Is he one who calculates 
                         the numbers for and against him but 
                         never weighs the strength in your 
                         own heart? There is strength in you. 
                         I see it. I know it.

                                     ROBERT
                         I must... consult with my father.

                                     WALLACE
                         And I will consult with mine.

               Robert the Bruce walks off the field, heading the way the 
               other nobles went. Wallace rejoins Hamish and Stephen. They 
               look to him; what do we do now?

                                     WALLACE
                         Remember when the English turned 
                         their hounds on us? Maybe we should 
                         introduce them to our dogs.

               INT. THE DARKENED ROOM OF BRUCE THE ELDER, THE LEPER

               In the faint nimbus of the single candle, young Robert sits 
               across from his leper father. The son grips his own head, as 
               if stunned by a blow.

                                     ROBERT
                         This... cannot be the way.

                                     THE LEPER
                         You have said yourself that the nobles 
                         will not support Wallace, so how 
                         does it help us to join the side 
                         that is slaughtered?

               Heartsick, the father reaches across the table, then stays 
               his arm, unwilling to touch his son with his leprous hand.

                                     THE LEPER
                         My son. Look at me. I cannot be king. 
                         You, and you alone, can rule Scotland. 
                         What I tell you, you must do -- for 
                         yourself, and for your country.

               Young Robert holds his father with his eyes, and does not 
               look away.

               EXT. THE BATTLE OF FALKIRK - DAY

               The Scottish army moves out onto the hilly plain, covered in 
               the gray mists. They see glimpses of the enemy in the 
               distance. Wallace deploys the Scots: Campbell with the 
               schiltrons (spear formations), Stephen with the infantry, 
               the noble Mornay leading the cavalry, and with Wallace and 
               Hamish on horseback, looking over the field. Hamish sees 
               gazing up at an empty hill above the field.

                                     HAMISH
                         The Bruce is not coming, William.

                                     WALLACE
                         Mornay has come. So will the Bruce.

               He'd better, the odds look long. And it's nasty ground; one 
               side of the field is ankle deep in water, and the English 
               are covering it with a layer of burning oil, releasing thick 
               smoke to hide their movements.

                                     WALLACE
                         Stephen ready?

                                     HAMISH
                         Aye.

               The Priest from their home village is moving through the 
               Scottish ranks, dispensing absolution. He reaches the two 
               friends, who accept the Host, say their own last prayers, 
               and give each other a look of goodbye. Hamish rides off to 
               join the schiltrons.

               LONGSHANKS AND HIS GENERALS

               on the opposite side of the field, send their army forward.

               WALLACE AND THE SCOTS

               see them through the smoke; Wallace spots what he's looking 
               for: there they are, the ranks of crossbowmen!

               And as they draw nearer, Wallace hears a haunting noise. He 
               sees the bowmen more clearly, and the English infantry. Some 
               are wearing kilts and marching to bagpipes.

                                     WALLACE
                         Irish troops!

               STEPHEN OF IRELAND, WITH THE SCOTTISH INFANTRY

               He stares at the approach of his countrymen. Wallace appears 
               beside him. Stephen sees him, and is ashamed.

                                     STEPHEN
                         So that's where Longshanks got his 
                         soldiers. Irishmen, willing to kill 
                         Scottish cousins for the English.

                                     WILLIAM
                         Their families are starving, they'll 
                         feed them however they can. If you 
                         don't want to fight them --

                                     STEPHEN
                         No. I'll stand with you.

               Loyal to the end. Wallace signals to Hamish and Campbell, 
               among the schiltrons. The formations, bristling with spears, 
               move forward. Hamish looks back at Wallace; both men know 
               the spearmen are the bait here. Wallace and Stephen see the 
               English heavy cavalry advancing.

                                     STEPHEN
                         They can't be that stupid to attack 
                         the schiltrons again.

               Wallace is scanning the battlefield. He sees the English 
               cavalry charge, but before they reach the bristling spears, 
               they pull up, and crossbowmen, moving up behind the knights.

                                     WALLACE
                         It's only a faint to shield the 
                         crossbows!

               The crossbowmen fire a volley, too hurriedly. We see the 
               hailstorm of bolts slash through the air in unison -- you 
               can actually see them coming. The bows fall short of the 
               front ranks of the schiltrons.

                                     WALLACE
                         Now! Give 'em the dogs!

               Stephen signals, and up the slope behind them come handlers 
               with ten war dogs.

               Huge mastiffs, they wear steel collars, with razor sharp 
               protrusions. Their handlers hold them at the end of long 
               catch poles. The crossbowmen are distracted from their 
               reloading by the appearance of the mastiffs; now, as the 
               Scottish handlers run toward the English ranks and unleash 
               the dogs, fear races through the English line.

               The dogs tear into them. It is chaos; the bowmen can't flee, 
               and as the dogs mix among them, the bowmen fire frantically, 
               mostly hitting each other. The dogs' collars slash legs; 
               their jaws crush bones; even when their back legs are hacked 
               off, the frenzied dogs keep killing.

               Wallace signals to Mornay with the Scottish cavalry. Mornay 
               does nothing. The crossbowmen, though taking great punishment, 
               are beginning to overwhelm the dogs by sheer numbers, and 
               are regrouping.

                                     WALLACE
                         Now! Charge! Charge them!

               Mornay tugs his reins and leads his cavalry away.

               AT THE ENGLISH COMMAND

               Longshanks and his officers see Mornay and his cavalry melt 
               away. The English general looks knowingly at Longshanks.

                                     GENERAL
                         Mornay?

                                     LONGSHANKS
                         For double his lands in Scotland, 
                         and matching estates in England.

               WALLACE, WITH STEPHEN

               They see the Scottish army abandoned.

                                     STEPHEN
                         Betrayed!

               Wallace glances to the other hilltop; still no sign of Bruce.

               He looks on in agony as the crossbowmen unleash another 
               volley. The Scottish spearmen, bunched in a tight group, are 
               helpless. The bolts fall, cutting through their helmets and 
               breastplates like paper. Wallace has no cavalry -- and his 
               men are being slaughtered! He spurs his horse, and Stephen 
               and the infantrymen race behind him.

               The English heavy cavalry surge to meet them, but Wallace 
               weaves through them, dodging with his horse, slashing with 
               the broadsword, cutting down on knight, another, another...

               The Scottish infantry claws in, dragging down the horses, 
               hacking the knights as they run by.

               The English bowmen are about to fire again, but they see the 
               Scottish charge bearing down on them and adjust their aim; 
               the bolts cut into the infantrymen; one bolt tears off the 
               armor of Wallace's left shoulder. He wobbles on his horse, 
               regains his balance, and keeps up the charge.

               AT THE ENGLISH COMMAND

               Longshanks and his generals are watching the action.

                                     GENERAL
                         My God, and still they come!

                                     LONGSHANKS
                         Use the reinforcements! But take 
                         Wallace alive!

               The General signals and the English reinforcements surge 
               into the battle.

               IN THE THICK OF THE BATTLE

               On horseback, Wallace fights his way into the watery edge of 
               the field, where English infantry is now overrunning the 
               schiltron. He hacks men down left and right, reaches the 
               Scottish center, and finds Hamish bending over another 
               soldier. Wallace dismounts.

                                     WALLACE
                         Hamish! Ham --

               And Wallace sees that Hamish is holding his father, fallen 
               in battle. Wallace has no time to react; he cuts down and 
               English swordsman moving in to hack Hamish's back. Wallace 
               lifts Campbell across the saddle, and shouts at Hamish...

                                     WALLACE
                         Get him away!

               Hamish obeys, jumping onto the horse and galloping back toward 
               the rear. Wallace fights with new vengeance, swinging the 
               double-edged broadsword with deadly accuracy.

               Rallied by Wallace's presence, the Scots surge back. Then 
               Wallace sees the English reinforcement cavalry coming.

                                     WALLACE
                         A charge! Form up! Form up!

               The Scots pull up spears and hastily form another schiltron.

               The spears bristle out, ready... the English horsemen thunder 
               in. But before the spears impale the horses, another flight 
               of crossbow bolts cuts down half the Scots still fighting.

               Hamish reaches the rear of the battle and lowers the limp 
               body of his father to the Scottish monks who are attending 
               to the wounded and giving absolution to the dying...

               Still Wallace fights back, meeting the English charge. The 
               Scots hold their own. An English knight tries to ride over 
               William; he knocks the lance aside, and tough the horse slams 
               into him, William also unseats the rider.

               The rider rolls to his feet. William struggles up to meet 
               him -- and comes face to face with Robert the Bruce.

               The shock and recognition stun Wallace; in that moment, 
               looking at Robert the Bruce's guilt-ridden face, he 
               understands everything: the betrayal, the hopelessness of 
               Scotland. As he stands there frozen, a bolt punches into the 
               muscle of his neck, and Wallace doesn't react to it.

               Bruce is horrified at the sight of Wallace this way. He 
               batters at Wallace's sword, as if its use would give him 
               absolution.

                                     ROBERT
                         Fight me! Fight me!

               But Wallace can only stagger back. Bruce's voice grows ragged 
               as he screams.

                                     ROBERT
                         FIGHT ME!

               All around, the battle has decayed; the Scots are being 
               slaughtered. Another bolt glances off Wallace's helmet; a 
               third rips into his thigh plate, making his legs collapse.

               Suddenly Stephen comes through the melee, on Robert's horse!

               He hits Robert from behind, knocking him down, and jumps to 
               the ground to try and lift William onto the horse!

               Robert sees a knot of crossbowmen moving up, sighting out 
               Wallace, taking careful aim! Bruce leaps up and helps Stephen 
               sling Wallace onto the back of the horse, even covers him 
               with his shield, deflecting another bolt fired at Wallace, 
               as Stephen mounts too.

               As the horse plunges away into the smoke, Robert falls to 
               the water. His own troops reach him, realize who he is, see 
               the horrible expression on his face, and race on after the 
               Scots.

               Robert is left alone, on his knees in the water, the fire 
               and noise of battle now dim to him, as if his senses have 
               died along with his heart.

               LONGSHANKS

               Looks over the battlefield, strewn with the bodies of the 
               Scottish dead. For now, he is satisfied.

               EXT. ROAD - SUNSET

               Remnants of the defeated army straggle past. Wallace and 
               Stephen are trying to help Hamish carry his father, but now 
               old Campbell says...

                                     CAMPBELL
                         Son... I want to die on the ground.

               But as they tilt old Campbell onto the ground, he grabs at 
               something that starts to fall from the wound in his stomach.

                                     CAMPBELL
                         Whew. That'll clear your sinuses. 
                         Goodbye, boys.

                                     HAMISH
                         No. You're going to live.

                                     CAMPBELL
                         I don't think I can do without one 
                         of those... whatever it is...

               Hamish is too grief-stricken to speak.

                                     WALLACE
                         You... were like my father...

               Old Campbell rallies one more time for this.

                                     CAMPBELL
                         ...And glad to die, like him... So 
                         you could be the men you are. All of 
                         ya.

               The last three words to Hamish, telling him he's a hero too.

                                     CAMPBELL
                         I'm a happy man.

               Hamish is weeping. When he looks up again, his father has 
               died. We PULL BACK from them in tableaux, with the army, the 
               people of Scotland, the whole gray world in defeat.

               INT. EDINBURGH CASTLE - DAY

               Wallace, still bloody and in his battered armor, removes the 
               chain of office from beneath his breastplate, lays it onto 
               the table in front of Craig and the other nobles, and walks 
               from the room. Hamish and Stephen see the satisfaction on 
               the nobles' face, and follow William out.

               INT. CASTLE CORRIDOR - DAY

               Hamish and Stephen move out into the hallway after Wallace -- 
               but he is gone.

               EXT. WOODS - NIGHT

               Wallace is in the woods, in the grove of trees, looking at 
               Marion's hidden grave. The rain falls on his face, like tears. 
               But he has no tears of his own. The cold, the icy rain, the 
               wounds, nothing seems to touch him.

               With his fingertips he carefully draws her embroidered cloth 
               from beneath his breastplate; hanging in his trembling hands, 
               filthy with the grime and gore of battle, it looks impossibly 
               white, something from a better, purer world.

                                                               DISSOLVE TO:

               INT. PALACE IN LONDON - NIGHT

               Thunder, the sound of driving rain. Snug by a massive fire 
               are Longshanks, his son Edward, and other advisors. On the 
               far side of the room, away from the fire, the Princess stands 
               at the window and watches the rain against the panes.

                                     ADVISOR
                         Their nobles have sworn allegiance, 
                         M'lord. Every last one.

               Longshanks savors the victory -- and gloats to his son.

                                     LONGSHANKS
                         Now we kill two birds at one stroke. 
                         We recruit from Scotland for our 
                         armies in France.

                                     EDWARD
                         The Scots will fight for us?

                                     LONGSHANKS
                         What choice do they have? Now they 
                         must serve us or starve.

                                     EDWARD
                         But if we have not caught Wallace --

                                     LONGSHANKS
                              (exploding)
                         He is gone! Finished! Dead! If he 
                         has not yet bled to death or had his 
                         throat cut for him, he will not 
                         survive the winter. It is very cold -- 
                         is it not, our flower?

               From the other side of the window, we see the Princess as 
               she hears him, but doesn't turn around. She looks at the 
               window, we snow swirling among the raindrops outside. Her 
               eyes glisten, and her breath fogs the glass.

               INT. BRUCE'S DARKENED CHAMBER

               The elder Bruce, his decaying features sagging from his face, 
               stares across the table at his son.

                                     LEPER
                         I am the one who is rotting. But I 
                         think your face looks graver than 
                         mine.

                                     ROBERT
                         He was so brave. With courage alone 
                         he nearly won.

                                     LEPER
                         So more men were slaughtered 
                         uselessly!

                                     ROBERT
                         He broke because of me. I saw it. He 
                         lost all will to fight.

                                     LEPER
                         We must have alliance with England 
                         to prevail here. You achieved that! 
                         You saved your family, increased 
                         your lands! In time you will have 
                         all the power in Scotland!... Yet 
                         you grieve.

                                     ROBERT
                         In my heart I had begun to hope that 
                         he would never break.

                                     LEPER
                         All men lose heart. All betray. It 
                         is exactly why we must make the 
                         choices we make.

               INT. MORNAY'S CASTLE - NIGHT

               Mornay, in an opulent bedchamber hung with tapestries and 
               carpeted with eastern rugs, lies in bed, tossing in the 
               restless sleep of a tortured soul.

               He thinks he hears galloping. In SUBLIMINAL FLASHES he DREAMS 
               of Wallace riding toward him.

               He wakes, and listens to a strange noise. It is hoofbeats!

               Coming closer. He hears shouts too, screams from below -- 
               and those strange, approaching hoofbeats...

               WALLACE, ON HORSEBACK

               rides up the circular stairs inside Mornay's castle! His 
               horse bounds up the stone -- Mornay's guards are behind him, 
               on foot, pursuing.

               At a landing, Wallace cuts down a guard, and gallops higher.

               IN HIS BED, MORNAY

               sits up gawking as the door explodes inward and Wallace rides 
               through! Mornay is frozen. Wallace slashes him down.

               Out in the corridor, the guards gather; they have Wallace 
               trapped. He covers the horse's eyes with a cloth and spurs 
               his flanks. The blind animal runs through the window!

               EXT. CASTLE - NIGHT - SLOW MOTION

               The horse and rider plunge past the sheer walls of the 
               castle... and into the loch! Mornay's guards and the castle 
               servants cluster at the windows to see Wallace and the horse 
               surface, and swim to the shore, escaping!

               EXT. SCOTTISH VILLAGE - DAY

               The news has spread through the countryside. In the town 
               square, drunken Scotsmen chant...

                                     PEOPLE
                         Wal-lace! Wal-lace! Wal-lace!

               Old Craig rides past them, heading toward the Bruce's castle 
               on the hill above the town.

               INT. BRUCE CASTLE - DAY

               Robert is in his central room; he hears the chanting from 
               far below. Old Craig enters.

                                     ROBERT
                         Is it true about Mornay?

               Craig hands him the bloody nightshirt Mornay was wearing.

                                     ROBERT
                         And he rode through the window? My 
                         God.

               He can't hide his admiration. From below, he still hears the 
               people CHANTING...

               EXT. LONDON - GARDENS - DAY

               Longshanks and Edward are in the royal gardens, resplendent 
               with spring. Longshanks pulls a new flower, and crushes it.

                                     LONGSHANKS
                         His legend grows! It will be worse 
                         than before!

                                     EDWARD
                         You let Wallace escape your whole 
                         army. You cannot blame me for this.

               Longshanks glowers at his son; the Princess arrives.

                                     PRINCESS
                         Good day to you, M'Lords.

                                     EDWARD
                         You mock us with a smile?

                                     PRINCESS
                         I am cheerful with a plan to soothe 
                         your miseries. All of England shudders 
                         with the news of renewed rebellion.

                                     EDWARD
                         Wallace's followers.

                                     PRINCESS
                         Wallace himself. If you wish to 
                         pretend a ghost rallies new volunteers 
                         in every Scottish town, I leave you 
                         to your hauntings. If you wish to 
                         take him, I know a way.

               Edward snickers in derision -- but his wife is steel.

                                     PRINCESS
                         I have faced him. Have you?

                                     LONGSHANKS
                         Let her speak.

                                     PRINCESS
                         He will fight you forever. But what 
                         does he fight for? Freedom first, 
                         and peace. So grant them.

                                     EDWARD
                         The little cow is insane --

                                     PRINCESS
                         Grant, as you do everything else, 
                         with treachery. Offer him a truce to 
                         discuss terms, and send me to my 
                         castle at Locharmbie as your emissary. 
                         He trusts me. Pick thirty of your 
                         finest assassins for me to take along. 
                         And I will set the meeting, and the 
                         ambush.

                                     LONGSHANKS
                         You see, my delicate son? I have 
                         picked you a Queen.

               EXT. THE PRINCESS' SCOTTISH CASTLE - DAY

               Locharmbie is a small, picturesque castle on a hillside. As 
               the queen's entourage moves through the gates, they close 
               behind her. She steps out of the carriage and moves into

               INT. CASTLE - THE GREAT HALL - DAY

               Inside the great hall are thirty killers, led by their CHIEF 
               ASSASSIN, a cutthroat with a mangled eye.

                                     CHIEF ASSASSIN
                         We came in small groups, so the rebels 
                         would not suspect.

                                     PRINCESS
                         And you have reached Wallace's men?

                                     CHIEF ASSASSIN
                         We tell the villagers, and the 
                         traitors pass it on. All that's left 
                         is for you to say where.

               EXT. MARION'S GROVE - NIGHT

               Wallace is in the grove of trees where Marion is buried.

               Drinking in the silence, his own isolation. He hears a RUSTLE 
               behind him, and spins, drawing the broadsword. Then his face 
               registers... it's Hamish and Stephen.

               Hamish is unsure if he did the right thing in coming here -- 
               unsure, until Wallace moves to them, and hugs them.

               INT. CAVE - NIGHT

               They are in the old secret cave; rain is falling, but it's 
               dry inside, with a campfire smoldering at the entrance.

                                     WALLACE
                         Thanks for the food and drink. And 
                         for bringing 'em yourselves.

                                     HAMISH
                         We're here to stay. We don't care to 
                         live, if we can't fight beside ya.

               Stephen pulls a jug of whiskey from his pocket. He swigs, 
               hands it to Hamish for a chug, then to Wallace, who declines, 
               but smiles for the first time in many weeks.

                                     HAMISH
                         There is... one thing, William. 
                         Longshanks is offering a truce. He 
                         has dispatched his daughter-in-law 
                         as his emissary, and she has sent 
                         word that she wishes to meet you -- 
                         in a barn.

               Wallace frowns; a barn?

               EXT. A BARN IN THE SCOTTISH COUNTRYSIDE - DAY

               Hauntingly similar to the one in Wallace's childhood. As he 
               sits on his horse and looks at the place, surmounted by a 
               white flag of truce, it gives him a chill. But in full view 
               of the barn, he hands Hamish his sword and rides forward.

               INSIDE THE BARN

               are the assassins, killing knives ready.

                                     CHIEF ASSASSIN
                         It's William Wallace, sure! And... 
                         he's given up his sword! Be ready!

               They position themselves at every entrance.

               OUTSIDE THE BARN

               Wallace reaches the barn, dismounts, and moves toward the 
               door. But suddenly, instead of entering, he grabs the heavy 
               bar and seals the door! At this motion, Scots spring from 
               the woods in all directions. The assassins inside realize 
               the ambush is being turned on them, but it's too late; they 
               hear the entrance being sealed from the outside.

               More Scots, led by Stephen, scramble up from hiding, place 
               tinder-dry brush and pitch against the barn, and set it on 
               fire. In moments the entire barn is blazing. The Scots stand 
               back and watch the barn burn, their faces lit by the flames. 
               After awhile, there are no more screams from inside.

               EXT. CASTLE - NIGHT

               The Princess sees the burning off in the distance, like a 
               bonfire. She stands on the wall, looking out at it. And then 
               she sees, on a hillside, silhouetted against the night and 
               the fire, a rider, just sitting there on his horse, looking 
               at the castle. She runs into the castle, up the stairs, and 
               stands on the pinnacle of the castle, so that she too is 
               silhouetted, and he can see her.

               The lone rider is William Wallace.

               CLOSE - A CANDLE

               being placed in a window of the stable cottage, built into 
               the outer wall of the castle. AT A DISTANCE, the candle burns 
               like a tiny beacon. And William sees it.

               INSIDE THE STABLE COTTAGE, THE PRINCESS

               sits alone, wondering if her signal is going to work.

               OUTSIDE THE CASTLE

               Wallace climbs the castle wall, hand over hand up the mortared 
               stones, to the window twenty feet above the ground.

               He reaches the safety of the window cove and kneels on the 
               ledge. He looks through the window, and sees her inside.

               INSIDE THE ROOM, she looks up, and sees him there. The first 
               glance frightens her, and yet she expected him, prayed for 
               him to come. Now, for a long, long moment the two of them 
               look at each other through the glass, each realizing the 
               implications of this moment.

               She moves to the window and opens it. The wind rushing through 
               extinguishes the candle, and he slips inside. They face each 
               other in the darkness. Then she strikes a match and relights 
               the candle, and they look at each other.

                                     WALLACE
                         A meeting in a barn. It had to be a 
                         trap. And only you would know I would 
                         be aware of it.

                                     PRINCESS
                         It does me good to see you.

                                     WILLIAM
                         I am much diminished since we met.

               She wants to say something -- but instead she says something 
               else.

                                     PRINCESS
                         There will be a new shipment of 
                         supplies coming north next month. 
                         Food and weapons. They will trav --

                                     WILLIAM
                         No. Stop. I didn't come here for 
                         that.

                                     PRINCESS
                         Then why did you come?

                                     WALLACE
                         Why did you?

                                     PRINCESS
                         Because of the way you're looking at 
                         me now. The same way... as when we 
                         met.

               He turns his face away. Gently, she pulls it back.

                                     PRINCESS
                         I know. You looked at me... and saw 
                         her.

               He twists back toward the window.

                                     PRINCESS
                         You must forgive me what I feel. No 
                         man has ever looked at me as you 
                         did.

               Surprised, he looks at her now.

                                     WALLACE
                         You have... you have a husband.

                                     PRINCESS
                         I have taken vows. More than one. 
                         I've vowed faithfulness to my husband, 
                         and sworn to give him a son. And I 
                         cannot keep both promises.

               Slowly, it starts to dawn on him what she's asking, and an 
               unexpected smile plays at his lips. Her smile lights too.

                                     PRINCESS
                         You understand. Consider, before you 
                         laugh and say no. You will never own 
                         a throne, though you deserve one. 
                         But just as the sun will rise 
                         tomorrow, some man will rule England. 
                         And what if his veins ran not with 
                         the blood of Longshanks, but with 
                         that of a true king?

                                     WALLACE
                         I cannot love you for the sake of 
                         revenge.

                                     PRINCESS
                         No. But can you love me for the sake 
                         of all you loved and lost? Or simply 
                         love me... because I love you?

               Slowly, he reaches to the candle flame, and pinches it out.

               IN THE SHADOWS OF THE COTTAGE BED

               we see the surging, pent-up passion... and

                                                               DISSOLVE TO:

               THE LOVERS

               Their bodies limp, they lie asleep, entwined. The first rays 
               of morning spread yellow light through the room and across 
               their faces.

               Wallace wakes suddenly; sunlight! He grabs for his clothes, 
               as she wakes, covers herself in the blanket and jumps out of 
               bed, rushing to the window to look out.

                                     PRINCESS
                         No one! Hurry!

               He reaches her, throws the window open, and sees a clear 
               path down the wall to safety. He stops and looks at her, and 
               touches her face in gratitude. She has to ask...

                                     PRINCESS
                         When we... did you think of her?

               Pausing to look straight into her eyes, he kisses her -- 
               her, not Marion -- and climbs out. She watches him go.

               EXT. GROVE OF TREES - NIGHT

               Wallace stands alone in the grove where Marion lies.

               MONTAGE

               -- Wallace and fifty men gallop through a village on the way 
               to an English fortress; the villagers drop what they're doing 
               and run to follow them; we see Wallace's face, relentless, 
               as he hacks men down in the attack; with the fortress sacked 
               and smoking in the background, we see Wallace lead his men 
               away, the people cheering him...

               EXT. FOREST ENCAMPMENT - NIGHT

               Once again, Wallace stares at the fire, beside his friends.

                                     HAMISH
                         Rest, William.

                                     WALLACE
                         I rest.

                                     HAMISH
                         Your rest is making me exhausted.

               Stephen offers the jug; Wallace declines.

                                     STEPHEN
                         Come, it'll help you sleep.

                                     WALLACE
                         Aye. But it won't let me dream.

               Pulling a tattered tartan around himself, he lies down.

               LONGSHANKS, INT. HIS PALACE - NIGHT

               He sits by a palace hearth, where a huge blaze burns; still 
               he's huddled beneath a blanket, and coughing blood. But he 
               ignores the ice in his lungs; his mind is plotting.

               THE PRINCESS, EXT. THE WALLS OF HER CASTLE - NIGHT

               she walks the parapets alone, lost in her own thoughts.

               ROBERT THE BRUCE, IN A STONE ROOM OF HIS CASTLE

               sits staring at... the stone coffin of his father. The coffin 
               is closed; on its top is a lifesize stone carving of his 
               father as a knight in final repose. Ranks of candles light 
               the scene, and Robert's face, cold as the stone. A SHUFFLE... 
               Robert looks up to see old Craig.

                                     CRAIG
                         May he rest in peace... You have 
                         already sealed the coffin?

                                     ROBERT
                         He was a modest man.

                                     CRAIG
                         It will not be long before Longshanks 
                         too is encased in stone, and his 
                         crowns divided for others to wear.

               Craig sits next to Robert, and keeps his voice low.

                                     CRAIG
                         Our nobles are frightened and 
                         confused... Wallace has the commoners 
                         stirred up again, from the Highland 
                         clans to the lowland villages. In 
                         another six months Christ and the 
                         Apostles could not govern this 
                         country.

               Robert only stares at his father's stone coffin.

                                     CRAIG
                         Longshanks knows his son will scarcely 
                         be able to rule England, much less 
                         half of France. He needs Scotland 
                         settled, and he trusts you, after 
                         Falkirk. If you pay him homage, he 
                         will recognize you as king of 
                         Scotland. Our nobles have agreed to 
                         this as well.

               He shows Robert a parchment bearing the noblest names in 
               Scotland. The Bruce barely glances at it.

                                     ROBERT
                         If I pay homage to another's throne, 
                         then how am I a king?

                                     CRAIG
                         Homage is nothing. It is the crown 
                         that matters!

                                     ROBERT
                         The crown is that of Scotland. And 
                         Scotland is William Wallace.

                                     CRAIG
                         That is another matter. There is a 
                         price to all this, required both by 
                         Longshanks and our nobles. Pay it, 
                         and you will be our king. And we 
                         will have peace.

               Robert turns from his father's coffin, to look at Craig.

               EXT. FOREST ENCAMPMENT - NIGHT

               A commotion; the nobles, their heads hooded, are led in on 
               horseback by guerrillas from the village. The nobles stop, 
               feel their hoods pulled off, and see Wallace.

                                     CRAIG
                         Sir William. We come to seek a 
                         meeting.

                                     WALLACE
                         You've all sworn to Longshanks.

                                     CRAIG
                         An oath to a liar is no oath at all. 
                         An oath to a patriot is a vow indeed. 
                         Every man of us is ready to swear 
                         loyalty to you.

                                     WALLACE
                         So let the council swear publicly.

                                     CRAIG
                         We cannot. Some scarcely believe you 
                         are alive. Other think you'll pay 
                         them Mornay's wages. We bid you to 
                         Edinburgh. Meet us at the city gates, 
                         two days from now, at sunset. Pledge 
                         us your pardon and we will unite 
                         behind you. Scotland will be one.

               Wallace glances at Hamish and Stephen, who can barely hide 
               their contempt. Wallace looks at the nobles.

                                     WALLACE
                         I will meet you, but only one way -- 
                         if Robert the Bruce is there, and 
                         puts his hand on my Bible, and swears 
                         his loyalty to Scotland.

                                     CRAIG
                         He has already agreed to come.

               EXT. FOREST - NIGHT

               Wallace stands alone, looking at the moon and stars. Hamish 
               moves up and sits down beside him.

                                     HAMISH
                         You know it's a trap.

                                     WALLACE
                         Probably. But we can't win alone. We 
                         know that. This is the only way.

                                     HAMISH
                         I don't want to be a martyr.

                                     WALLACE
                         Nor I! I want to live! I want a home 
                         and children and peace. I've asked 
                         god for those things. But He's brought 
                         me this sword. And if He wills that 
                         I must lay it down to have what He 
                         wants for my country, then I'll do 
                         that too.

                                     HAMISH
                         That's just a dream, William!

                                     WALLACE
                         We've lived a dream together. A dream 
                         of freedom!

                                     HAMISH
                         Your dreams aren't about freedom! 
                         They're about Marion! You have to be 
                         a hero, because you think she sees 
                         you! Is that it?

                                     WALLACE
                         My dreams of Marion are gone. I killed 
                         them myself. If I knew I could live 
                         with her on the other side of death, 
                         I'd welcome it.

               EXT. ROAD INTO EDINBURGH - SUNSET

               William, Hamish, and Stephen are on their horses, looking 
               down at the road leading into the city. Wallace hands his 
               dagger to Stephen, and unbuckles his broadsword and gives it 
               to Hamish.

                                     HAMISH
                         Keep these. We're going too.

                                     WALLACE
                         No. One of us is enough.

               Wallace hugs them, first Stephen, then Hamish. Tears roll 
               down Hamish's cheeks. With one last look at his friends, 
               Wallace rides away.

               EXT. LARGE ESTATE HOUSE - SUNSET

               The house looks quiet as Wallace rides toward it.

               INT. ESTATE HOUSE - DAY

               Robert the Bruce and Craig stand at the hearth, tense.

                                     CRAIG
                         He won't come.

                                     ROBERT
                         He will. I know he will.

               They hear the approach of a single horse. The Bruce looks 
               out to see Wallace arriving.

                                     ROBERT
                         Here. And unarmed. My God, he has a 
                         brave heart.

               OUTSIDE THE HOUSE

               Wallace dismounts and enters.

               INT. THE HOUSE

               Wallace appears at the doorway into the main room, and stops.

               Bruce faces him. The eyes of BOTH MEN meet, saying everything. 
               Wallace steps into the room. He sees something flicker onto 
               Bruce's face -- shame -- just as henchmen in the rafters 
               drop a weighted net and it envelopes Wallace.

               English soldiers spring from the closets, run down the stairs, 
               and tumble over him, ripping at his clothes, searching as if 
               broadswords might spring from his boots.

               They bind Wallace hand and foot. He stares at Robert the 
               Bruce, who averts his eyes. The soldiers hurry Wallace out 
               the back, where others are bringing up horses. Robert grabs 
               the English Captain of the soldiers.

                                     ROBERT
                         He is not to be harmed. I have your 
                         king's absolute promise that he will 
                         be imprisoned only!

               The Captain looks at Bruce the way the High Priest must have 
               looked at Judas, and leaves.

                                     CRAIG
                         Now we will have peace.

               Robert the Bruce spots something on the floor that must have 
               fallen from Wallace's clothes as they grabbed him; Bruce 
               lifts the white handkerchief, and sees the familiar thistle 
               embroidered on it.

               EXT. ROAD - NORTHERN ENGLAND - DAY

               A procession of heavily armed English soldiers winds its way 
               toward London, Wallace strapped to an unsaddled horse, his 
               head bare to the sun. Country people come out to jeer...

                                     PEOPLE
                         Don't look so fearsome, does he?!

               A thrown rock careens off Wallace's check; rotten fruit slaps 
               his shirt. His lips are so parched they bleed.

               INT. ROYAL PALACE - LONGSHANKS' BEDROOM - DAY

               Edward inspects his father, who lies semiconscious in bed, 
               breath rattling ominously in his chest. Edward approves.

               INT. THE PALACE HALLWAY - DAY

               The Princess hurries up to her husband as he leaves the king's 
               bedroom, and follows him down the hall to his own.

                                     PRINCESS
                         Is it true? Wallace is captured?

                                     EDWARD
                         Simply because he eluded your trap, 
                         do you think he is more than a man? 
                         My father is dying. Perhaps you should 
                         think of our coronation.

                                     PRINCESS
                         When will his trial be?

                                     EDWARD
                         Wallace's? For treason there is no 
                         trial. Tomorrow he will be charged, 
                         then executed.

               With a faint smile, he shuts his bedroom door in her face.

               INT. ROBERT THE BRUCE'S CASTLE - DAY

               The Bruce is incredulous, yelling at Craig.

                                     ROBERT
                         Longshanks promised!

                                     CRAIG
                         You are surprised he would lie? 
                         Balliol was murdered in a church 
                         yesterday. You are Longshanks' new 
                         designate. You will be king.

               INT. TOWER DUNGEON

               Wallace stands in medieval restraints worthy of Hannibal 
               Lecter. Before him are six scarlet-robed royal magistrates.

                                     ROYAL MAGISTRATE
                         William Wallace! You stand in taint 
                         of high treason.

               We PUSH IN on the iron mask that binds his face. We can only 
               see his eyes -- but they are bright.

                                     WALLACE
                         Treason. Against whom?

                                     MAGISTRATE
                         Against thy king, thou vile fool! 
                         Hast thou anything to say?

                                     WALLACE
                         Never, in my whole life, did I swear 
                         allegiance to your king --

                                     MAGISTRATE
                         It matters not, he is thy king!

                                     WALLACE
                         -- while many who serve him have 
                         taken and broken his oath many times. 
                         I cannot commit treason, if I have 
                         never been his subject!

                                     MAGISTRATE
                         Confess, and you may receive a quick 
                         death. Deny, and you must be purified 
                         by pain. Do you confess? ...DO YOU 
                         CONFESS?!

                                     WALLACE
                         I do not confess.

                                     MAGISTRATE
                         Then on the morrow, thou shalt receive 
                         they purification... And in the end, 
                         I promise you'll beg for the axe.

               EXT. ESTABLISHING - THE TOWER

               The stone prison, and the wretched stone section known to 
               this day as the Wallace Tower.

               INT. PRISON - NIGHT

               Wallace is alone in his cell, still in the garish restraints.

               We can only see his eyes, as he prays.

                                     WALLACE
                         I am so afraid... Give me strength.

               OUTSIDE THE CELL DOOR

               The jailers jump to their feet as the Princess enters.

                                     JAILER
                         Your Highness!

                                     PRINCESS
                         I will see the prisoner.

                                     JAILER
                         We've orders from the king --

                                     PRINCESS
                         The king will be dead in a month! 
                         And his son is a weakling! Who do 
                         you think will rule this kingdom? 
                         Now OPEN THIS DOOR!

               The jailer obeys. The Princess can barely contain her shock 
               at the sight of Wallace; the jailers snatch him upright.

                                     JAILER
                         On your feet, you filth!

                                     PRINCESS
                         Stop! Leave me!
                              (they hesitate)
                         There is no way out of this hell! 
                         Leave me with him!

               Reluctantly the jailers shuffle out of the cell, but they 
               can still see her back and hear her. Looking at Wallace's 
               eyes through the mask, she can't quite hold back her tears -- 
               dangerous tears, that threaten to say too much. Wallace tries 
               to distract her.

                                     WALLACE
                         M'lady... what kindness of you to 
                         visit a stranger.

                                     PRINCESS
                         Sir, I... come to beg you to confess 
                         all, and swear allegiance to the 
                         king, that he might show you mercy.

                                     WALLACE
                         Will he show mercy to my country? 
                         Will he take back his soldiers, and 
                         let us rule ourselves?

                                     PRINCESS
                         Mercy... is to die quickly. Perhaps 
                         even live in the Tower. In time, who 
                         knows what can happen, if you can 
                         only live.

                                     WALLACE
                         If I swear to him, then everything I 
                         am is dead already.

               She wants to plead, she wants to scream. She can't stop the 
               tears. And the jailers are watching.

                                     WALLACE
                         Your people are lucky to have a 
                         princess so kind that she can grieve 
                         at the death of a stranger.

               She almost goes too far now, pulling closer to him -- but 
               she doesn't care. She whispers, pleading...

                                     PRINCESS
                         You will die! It will be awful!

                                     WALLACE
                         Every man dies. Not every man really 
                         lives.

               She pulls out a hidden vial, and whispers...

                                     PRINCESS
                         Drink this! It will dull your pain.

                                     WALLACE
                         It will numb my wits, and I must 
                         have them all. If I'm senseless, or 
                         if I wail, then Longshanks will have 
                         broken me.

                                     PRINCESS
                         I can't bear the thought of your 
                         torture. Take it!

               On the verge of hysteria, she presses the vial to the air 
               hole at his mouth and pours in the drug. The jailers, seeing 
               suspicious movement, shift inside the cell; she backs up, 
               her eyes wide, full of love and goodbye. From inside the 
               mask, he watches her go. When the door CLANGS shut, he spits 
               the purple drug out through the mouth hole.

               INT. LONGSHANKS' BEDCHAMBER - NIGHT

               Longshanks lies helpless, his body racked with consumption.

               Edward sits against the wall, watching him die, glee in his 
               eyes. The Princess enters, and marches to the bedside.

                                     PRINCESS
                         I have come to beg for the life of 
                         William Wallace.

                                     EDWARD
                         You fancy him.

                                     PRINCESS
                         I respect him. At worst he was a 
                         worthy enemy. Show mercy... Oh thou 
                         great king... and win the respect of 
                         your own people.

               Longshanks shakes his head.

                                     PRINCESS
                         Even now, you are incapable of mercy?

               The king can't speak. But hatred still glows in his eyes.

               The princess looks at her husband.

                                     PRINCESS
                         Nor you. To you that word is as 
                         unfamiliar as love.

                                     EDWARD
                         Before he lost his powers of speech, 
                         he told me his one comfort was that 
                         he would live to know Wallace was 
                         dead.

               She leans down and grabs the dying king by the hair. The 
               guards flanking the door start forward but the Princess's 
               eyes flare at them with more fire than even Longshanks once 
               showed -- and the guards back off. She leans down and hisses 
               to Longshanks, so softly that even Edward can't hear...

                                     PRINCESS
                         You see? Death comes to us all. And 
                         it comes to William Wallace. But 
                         before death comes to you, know this: 
                         your blood dies with you. A child 
                         who is not of your line grows in my 
                         belly. Your son will not sit long on 
                         the throne. I swear it.

               She lets go of the old king. He sags like an empty sack back 
               onto his satin pillows. Without even a look at her husband 
               she strides out of the room, with the rattling breath of the 
               dying king rasping the air like a saw.

               EXT. LONDON TOWN SQUARE - EXECUTION DAY

               The crowd is festive; hawkers sell roast chickens, and beer 
               from barrels. Royal horsemen arrive, dragging Wallace strapped 
               to a wooden litter. As they cut him loose and lead him through 
               the crowd, the people begin to jeer and throw things at him: 
               chicken bones, rocks, empty tankards.

               We see a former English soldier, one of those who fled in 
               terror at the battle of Stirling, lift a stone from the street 
               and hurl it; it cracks against Wallace's cheek.

               Wallace's eyes capture the soldier, and hold him, piercing 
               his soul. The soldier looks away in shame, even as the rest 
               of the crowd jeers more.

               Grim magistrates prod Wallace and he climbs the execution 
               platform. On the platform are a noose, a dissection table 
               with knives in plain view, and a chopping block with an 
               enormous axe. Wallace sees it all.

                                     MAGISTRATE
                         We will use it all before this is 
                         over. Or fall to your knees now, 
                         declare yourself the king's loyal 
                         subject, and beg his mercy, and you 
                         shall have it.

               He emphasizes "mercy" by pointing to the axe. Wallace is 
               pale, and trebles -- but he shakes his head. The CROWD grows 
               noisier as they put the noose around Wallace's neck...

               WE INTERCUT:

               -- THE PRINCESS, in helpless agony, hearing the DISTANT NOISE 
               from her room in the palace...

               -- Hamish and Stephen, disguised as peasants among the crowd, 
               helpless too, but there, as if to shoulder some of the pain.

               -- Longshanks, rattling, coughing blood, as Edward watches.

               -- Robert the Bruce paces along the walls of his castle in 
               Scotland. His eyes are haunted; he grips the embroidered 
               handkerchief that belonged to Wallace.

               ON THE EXECUTION STAND

               a trio of burly hooded executioners cinch a rope around 
               Wallace's neck and hoist him up a pole.

                                     CROWD
                         That's it! Stretch him!

               In the SCORE, AMAZING GRACE, wailed on bagpipes, carries 
               through all that happens now... Ties hand and foot, Wallace 
               is strangling. The Magistrate watches coldly; even when the 
               executioner gives him a look that says they're about to go 
               too far, he prolongs the moment; then the Magistrate nods 
               and the executioner cuts the rope. Wallace slams to the 
               platform; the Magistrate leans to him.

                                     MAGISTRATE
                         Pleasant, yes? Rise to your knees, 
                         kiss the royal emblem on my cloak, 
                         and you will feel no more.

               With great effort, Wallace rises to his knees. The Magistrate 
               assumes a formal posture and offers the cloak.

               Wallace struggles all the way to his feet.

                                     MAGISTRATE
                         Very well then. Rack him.

               The executioners slam Wallace onto his back on the table, 
               spread his arms and legs, and tie each to a crank. Goaded by 
               the crowd, they pull the ropes taut. They crowd grows quiet 
               enough to hear the groaning of Wallace's limbs. Hamish and 
               Stephen feel it in their own bodies.

                                     MAGISTRATE
                         Wonderful, isn't it, that a man 
                         remains conscious through such pain. 
                         Enough?

               Wallace shakes his head. The executioners cut off his clothes, 
               take hot irons from a fire box. The crowd grows silent; we 
               see them, not Wallace, as the irons are touched to his body, 
               but we hear the burning of flesh. Then the Magistrate signals; 
               Wallace wants to say something.

                                     WALLACE
                         That... will... clear your sinuses.

               Everyone hears; Hamish smiles, even through his tears.

               Rebuffed, the Magistrate nods to the executioners, who lift 
               the terrible instruments of dissection.

               We are spared seeing the cutting: we are ON WALLACE'S FACE 
               as the disembowelment begins. The Magistrate leans in beside 
               him.

                                     MAGISTRATE
                         It can all end. Right now! Bliss. 
                         Peace. Just say it. Cry out. "Mercy!" 
                         Yes?... Yes?

               The crowd can't hear the magistrate but they know the 
               procedure, and they goad Wallace, chanting...

                                     CROWD
                         Mer-cy! Mer-cy! Mer-cy!

               Wallace's eyes roll to the magistrate, who signals QUIET!

                                     MAGISTRATE
                              (booming)
                         The prisoner wishes to say a word!

               SILENCE. Hamish and Stephen weep, whisper, pray...

                                     HAMISH AND STEPHEN
                         Mercy, William... Say Mercy...

               Wallace's eyes flutter, and clear. He fights through the 
               pain, struggles for one last deep breath, and screams...

                                     WALLACE
                         FREEEEE-DOMMMMMM!

               The shout RINGS through the town. Hamish hears it. The 
               Princess hears it, at her open window, and touches her tummy, 
               just showing the first signs of her pregnancy. Longshanks 
               and his son seem to hear; the cry STILL ECHOES as if the 
               wind could carry it through the ends of Scotland; and Robert 
               the Bruce, on the walls of his castle, looks up sharply, as 
               if he has heard...

               IN THE LONDON SQUARE

               the crowd has never seen courage like this; even English 
               strangers begin to weep. The angry, defeated magistrate gives 
               a signal. They cut the ropes, drag Wallace over and put his 
               head on the block. The executioner lifts his huge axe -- and 
               Wallace looks toward the crowd.

               THE CROWD, WALLACE'S POV

               He sees Hamish, eyes brimming, face glowing...

               SLOW MOTION - THE AXE

               begins to drop.

               WALLACE'S POV

               In the last half-moment of his life, when he has already 
               stepped into the world beyond this one, he glimpses someone 
               standing at Hamish's shoulder. She is beautiful, smiling, 
               serene.

               She is Marion.

                                                              CUT TO BLACK:

               ROBERT THE BRUCE

               His face has changed. He is standing AT THE OPEN GRAVE WHERE 
               MARION LAY, the headstone carved with the thistle still there. 
               He holds the handkerchief. As he tucks it into his own pocket, 
               and we MOVE IN on his eyes, we realize the VOICE OVER belongs 
               to him.

                                     ROBERT (V.O.)
                         After the beheading, William Wallace's 
                         body was torn to pieces. His head 
                         was set on London bridge, where 
                         passerby were invited to jeer at the 
                         man who had caused so much fear in 
                         England.
                              (beat)
                         His arms and legs were sent to the 
                         four corners of Britain as warning.

               EXT. SCOTTISH TOWNS - VARIOUS SHOTS - DAY

               We see the people, as the remains of William Wallace are 
               displayed in a box. The faces of the young men are fiery.

                                     ROBERT (V.O.)
                         It did not have the effect that 
                         Longshanks planned.

               More young men put on tartans, take up their weapons, and 
               gather into fighting units. Among them is Hamish, carrying a 
               shield emblazoned with a cocked arm holding a broadsword, 
               and the words "For Freedom."

               EXT. SCOTTISH HIGHLANDS - DAY

               Robert the Bruce, flanked by the noblemen and the banners of 
               the Scottish throne, and backed by a ragtag army of Scots, 
               sits on his horse and looks down at the English generals in 
               their martial finery. The English are haughty, victorious, 
               at the head of their colorful, polished army, awaiting the 
               ceremony of submission from Scotland's new king.

                                     ROBERT (V.O.)
                         And I, Robert the Bruce, backed by a 
                         body of Scottish veterans, rode out 
                         to pay homage to the armies of the 
                         English king, and accept his 
                         endorsement of my crown.

               FROM BELOW, ON THE OPEN PLAIN - DAY

               The Scots -- the remains of William Wallace's army -- look 
               so ragged and defeated that it hardly seems worth the wait. 
               One ENGLISH COMMANDER turns and jokes with another...

                                     ENGLISH COMMANDER
                         I hope you washed your ass this mornin -- 
                         it's never been kissed by a king 
                         before.

               UP ON THE HILL, Robert the Bruce sits on his horse, and waits. 
               He looks down at the English generals, at their banners, 
               their army. He looks down the ranks at his own.

               He sees Hamish. Stephen. Old MacClannough is there, his eyes 
               watery, his weapon sharp. The Scottish bride Lord Bottoms 
               took is there, among the ragtag archers, her husband beside 
               her. Robert knows none of them -- yet he knows them all.

               Old Craig, among the other Scottish nobles mounted beside 
               the Bruce, grows impatient.

                                     CRAIG
                         Come, let's get it over with.

               But Robert holds something -- uncurling his fist, he looks 
               at the thistle handkerchief that belonged to Wallace. The 
               nobles start to rein their horses toward the English.

                                     ROBERT
                         Stop.

               Robert the Bruce tucks the handkerchief safely behind his 
               breastplate, and turns to the Highlanders who line the hilltop 
               with him. He takes a long breath, and shouts --

                                     ROBERT THE BRUCE
                         You have bled with Wallace! Now bleed 
                         with me!

               Bruce's broadsword slides from its scabbard. A cry rises 
               from Highlanders, as from a tomb, rising --

                                     SCOTS
                         Wal-lace! Wal-lace! Wal-lace!

               The chant builds to a frenzy; it shakes the earth. The 
               Scottish nobles can scarcely believe it; the English are 
               shocked even more. Robert the Bruce, king of Scotland, spurs 
               his horse into full gallop toward the English, and the 
               Highlanders hurl their bodies down the hill, ready to run 
               through hell itself. In SLOW MOTION we see their faces...

               And OVER THIS, we hear the voice of William Wallace...

                                     WALLACE'S VOICE
                         In the year of our Lord 1314, patriots 
                         of Scotland, starving and outnumbered, 
                         charged the fields of Bannockburn. 
                         They fought like warrior poets. They 
                         fought like Scotsmen. And won their 
                         freedom. Forever.

               On Wallace's army behind Robert the Bruce, charging down the 
               hill to victory and glory, we slow to FREEZE FRAME and hear 
               their chant, huge, echoing...

                                     SCOTS
                         Wal-lace! Wal-lace! Wal-lace!

                                                                  FADE OUT:

                                         THE END


`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
