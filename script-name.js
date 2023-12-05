const translatedList = document.querySelector('.translated__list');
const convertBtn = document.querySelector('.convert__btn');
const inputText = document.querySelector('.input__text');
const resultText = document.querySelector('.result__text');

convertBtn.addEventListener('click', convertText);

// console.log(1, translate(translateText2));
// console.log(2, translateText2);
// console.log(3, makeFirstLetter(translate(translateText2)));




function convertText() {    
    if (inputText.value) {    
        resultText.value = makeFirstLetter(translate(inputText.value));        
    }
}

let vocabulary = [];

const punctuation = [',', ':', '.',';','!','?',')','('];

function convertTOArray(text) {
    const textTemp = text.split(' ');    
    let textArray = textTemp.map(element => {   
        //    console.log(element.slice(0, -1))
           if (punctuation.includes(element[element.length - 1])) return element.slice(0, -1)
             else return element
        });
    return textArray
}

function slovnyk(textRus, textCs) {
    // console.log(textRus);
    // console.log(textCs);
    const textCsArray1 = convertTOArray(textCs.replace(/\s+/g, ' ').trim());
    const textRusArray1 = convertTOArray(textRus.replace(/\s+/g, ' ').trim());

    let textCsArray = textCsArray1.map(word => word[0].toLowerCase() + word.slice(1, word.length))
    let textRusArray = textRusArray1.map(word => word[0].toLowerCase() + word.slice(1, word.length))


    for( let i = 0; i < textRusArray.length; i++ ) {        
        const index = vocabulary.findIndex( data => data.rus === textRusArray[i] );        
        if (index < 0) {        
            vocabulary.push( {
                cs: textCsArray[i],
                rus: textRusArray[i]
            })
        }    
    }

}

// const data = [
//     { cs: "Кондaкъ №. Взбрaнной воев0дэ побэди1тєльнаz, ћкw и3збaвльшесz t  ѕлhхъ, бlгодaрствєннаz восписyемъ ти2 раби2 твои2, бцdе: но ћкw  и3мyщаz держaву непобэди1мую, t всsкихъ нaсъ бёдъ свободи2, да  зовeмъ ти2: Рaдуйсz, невёсто неневёстнаz.", 
//       rus: "Кондак 1. Взбра́нной Воево́де победи́тельная, я́ко изба́вльшеся от злы́х, благода́рственная воспису́ем Ти́ раби́ Твои́, Богоро́дице; но я́ко иму́щая держа́ву непобеди́мую, от вся́ких на́с бе́д свободи́, да зове́м Ти́: Ра́дуйся, Неве́сто Неневе́стная."
//     },
//     { rus: "Ангел предста́тель с Небесе́ по́слан бы́сть рещи́ Богоро́дице: ра́дуйся, и со безпло́тным гла́сом воплоща́ема Тя́ зря́, Го́споди, ужаса́шеся и стоя́ше, зовы́й к Не́й такова́я:", 
//       cs: "ЃгGлъ предстaтель съ нб7сE п0сланъ бhсть, рещи2 бцdэ: рaдуйсz! и3 со безпл0тнымъ глaсомъ воплощaема тS зрS гDи, ўжасaшесz и3 стоsше, зовhй къ нeй такwвaz:"
//     },
//     {
//         rus: "Ра́дуйся, Е́юже ра́дость возсия́ет; ра́дуйся, Е́юже кля́тва исче́знет. Ра́дуйся, па́дшаго Ада́ма воззва́ние; ра́дуйся, сле́з Е́виных избавле́ние. Ра́дуйся, высото́ неудобовосходи́мая челове́ческими по́мыслы; ра́дуйся, глубино́ неудобозри́мая и а́нгельскима очи́ма. Ра́дуйся, я́ко еси́ Царе́во седа́лище; ра́дуйся, я́ко но́сиши Нося́щаго вся́. Ра́дуйся, Звездо́, явля́ющая Со́лнце; ра́дуйся, утро́бо Боже́ственнаго воплоще́ния. Ра́дуйся, Е́юже обновля́ется тва́рь; ра́дуйся, Е́юже покланя́емся Творцу́.",
//         cs: "Рaдуйсz, є4юже рaдость возсіsетъ: Рaдуйсz, є4юже клsтва и3счeзнетъ. Рaдуйсz, пaдшагw ґдaма воззвaніе: Рaдуйсz, слeзъ є4vиныхъ и3збавлeніе. Рaдуйсz, высото2 неудобовосходи1маz человёческими п0мыслы: Рaдуйсz, глубино2 неудобозри1маz и3 ѓгGльскима nчи1ма. Рaдуйсz, ћкw є3си2 цReво сэдaлище: Рaдуйсz, ћкw н0сиши носsщаго вс‰. Рaдуйсz, ѕвэздо2 kвлsющаz сlнце: Рaдуйсz, ўтр0бо бжcтвеннагw воплощeніz. Рaдуйсz, є4юже њбновлsетсz твaрь: Рaдуйсz, є4юже покланsемсz творцY. Рaдуйсz, невёсто неневёстнаz."
//     },
//     {
//         rus: "Кондак 2. Ви́дящи Свята́я Себе́ в чистоте́, глаго́лет Гаврии́лу де́рзостно: пресла́вное твоего́ гла́са неудобоприя́тельно души́ Мое́й явля́ется: безсе́меннаго бо зача́тия рождество́ ка́ко глаго́леши, зовы́й: Аллилуиа.",
//         cs: "Кондaкъ в7. Ви1дzщи с™az себE въ чcтотЁ, глаг0летъ гавріи1лу дeрзостнw: преслaвное твоегw2 глaса неудобопріsтельно души2 моeй kвлsетсz: безсёменнагw бо зачaтіz ржcтво2 кaкw глаг0леши, зовhй: Ґллилyіа."
//     },
//     {
//         rus: "Икос 2. Ра́зум недоразумева́емый разуме́ти Де́ва и́щущи, возопи́ к служа́щему: из боку́ чи́сту, Сы́ну ка́ко е́сть роди́тися мо́щно, рцы́ Ми́? К Не́йже о́н рече́ со стра́хом, оба́че зовы́й си́це:",
//         cs: "Јкосъ в7. Рaзумъ недоразумэвaемый разумёти дв7а и4щущи, возопи2 къ  служaщему: и3з8 бокY чи6сту, сн7у кaкw є4сть роди1тисz м0щно, рцh ми; къ нeйже џнъ речE со стрaхомъ, nбaче зовhй си1це:"
//     },
//     {
//         rus: "Ра́дуйся, сове́та неизрече́ннаго Таи́ннице; ра́дуйся, молча́ния прося́щих ве́ро. Ра́дуйся, чуде́с Христо́вых нача́ло; ра́дуйся, веле́ний Его́ глави́зно. Ра́дуйся, ле́ствице небе́сная, Е́юже сни́де Бо́г; ра́дуйся, мо́сте, преводя́й су́щих от земли́ на не́бо. Ра́дуйся, А́нгелов многослову́щее чу́до; ра́дуйся, бесо́в многоплаче́вное пораже́ние. Ра́дуйся, Све́т неизрече́нно роди́вшая; ра́дуйся, е́же ка́ко, ни еди́наго же научи́вшая. Ра́дуйся, прему́дрых превосходя́щая ра́зум; ра́дуйся, ве́рных озаря́ющая смы́слы.",
//         cs: "Рaдуйсz, совёта неизречeннагw таи1ннице: Рaдуйсz, молчaніz просsщихъ вёро. Рaдуйсz, чудeсъ хrт0выхъ начaло: Рaдуйсz, велёній є3гw2 глави1зно. Рaдуйсz, лёствице нбcнаz, є4юже сни1де бGъ: Рaдуйсz, м0сте, преводsй сyщихъ t земли2 на нб7о. Рaдуйсz, ѓгGлwвъ многословyщее чyдо: Рaдуйсz, бэсHвъ многоплачeвный стрyпе. Рaдуйсz, свётъ неизречeннw роди1вшаz: Рaдуйсz, є4же кaкw, ни є3ди1нагw же научи1вшаz. Рaдуйсz, премyдрыхъ превосходsщаz рaзумъ: Рaдуйсz, вёрныхъ њзарsющаz смhслы."
//     },
//     {
//         rus: "Кондак 3. Си́ла Вы́шняго осени́ тогда́ к зача́тию Браконеиску́сную, и благопло́дная Тоя́ ложесна́, я́ко село́ показа́ сла́дкое, все́м хотя́щим жа́ти спасе́ние, внегда́ пе́ти си́це: Аллилуиа.",
//         cs: "Кондaкъ G. Си1ла вhшнzгw њсэни2 тогдA къ зачaтію браконеискyсную, и3 бlгоплHднаz тоS ложеснA, ћкw село2 показA слaдкое, всBмъ хотsщымъ жaти сп7сeніе, внегдA пёти си1це: Ґллилyіа."
//     },
//     {
//         rus: "Икос 3. Иму́щи Богоприя́тную Де́ва утро́бу, востече́ ко Елисаве́ти: младе́нец же о́ноя а́бие позна́в Сея́ целова́ние, ра́довашеся, и игра́ньми я́ко пе́сньми вопия́ше к Богоро́дице:",
//         cs: "Јкосъ G. И#мyщи бGопріsтную дв7а ўтр0бу, востечE ко є3лісавeти: младeнецъ же џноz ѓбіе познaвъ сеS цэловaніе, рaдовашесz, и3 и3грaньми ћкw пёсньми вопіsше къ бцdэ:"
//     },
//     {
//         rus: "Ра́дуйся, о́трасли неувяда́емыя розго́; ра́дуйся, Плода́ безсме́ртнаго стяжа́ние. Ра́дуйся, Де́лателя де́лающая Человеколю́бца; ра́дуйся, Сади́теля жи́зни на́шея ро́ждшая. Ра́дуйся, ни́во, растя́щая гобзова́ние щедро́т; ра́дуйся, трапе́зо, нося́щая оби́лие очище́ния. Ра́дуйся, я́ко ра́й пи́щный процвета́еши; ра́дуйся, я́ко приста́нище душа́м гото́виши. Ра́дуйся, прия́тное моли́твы кади́ло; ра́дуйся, всего́ ми́ра очище́ние. Ра́дуйся, Бо́жие к сме́ртным благоволе́ние; ра́дуйся, сме́ртных к Бо́гу дерзнове́ние. Ра́дуйся, Неве́сто Неневе́стная.",
//         cs: "Рaдуйсz, џтрасли неувzдaемыz розго2: Рaдуйсz, плодA безсмeртнагw стzжaніе. Рaдуйсz, дёлателz дёлающаz чlвэколю1бца: Рaдуйсz, сади1телz жи1зни нaшеz р0ждшаz. Рaдуйсz, ни1во, растsщаz гобзовaніе щедр0тъ: Рaдуйсz, трапeзо, носsщаz nби1ліе њчищeній. Рaдуйсz, ћкw рaй пи1щный процвэтaеши: Рaдуйсz, ћкw пристaнище душaмъ гот0виши. Рaдуйсz, пріsтное мlтвы кади1ло: Рaдуйсz, всегw2 мjра њчищeніе. Рaдуйсz, б9іе къ смє1ртнымъ бlговолeніе: Рaдуйсz, смeртныхъ къ бGу дерзновeніе. Рaдуйсz, невёсто неневёстнаz."
//     }, 
//     {
//         rus: "Конда́к 4. Бу́рю вну́трь име́я помышле́ний сумни́тельных, целому́дренный Ио́сиф смяте́ся, к Тебе́ зря́ небра́чней, и бракоокра́дованную помышля́я, Непоро́чная; уве́дев же Твое́ зача́тие от Ду́ха Свя́та, рече́: Аллилу́иа.",
//         cs: "Кондaкъ д7. Бyрю внyтрь и3мёz помышлeній сумни1тельныхъ, цэломyдренный їHсифъ смzтeсz, къ тебЁ зрS небрaчнэй, и3 бракоwкрaдованную помышлsz, непор0чнаz: ўвёдэвъ же твоE зачaтіе t д¦а с™а, речE: Ґллилyіа."
//     },
//     {
//         rus: "И́кос 4. Слы́шаша па́стырие А́нгелов пою́щих плотско́е Христо́во прише́ствие, и те́кше я́ко к Па́стырю ви́дят Сего́ я́ко а́гнца непоро́чна, во чре́ве Мари́ине упа́сшася, Ю́же пою́ще ре́ша:",
//         cs: "Јкосъ д7. Слhшаша пaстыріе ѓгGлwвъ, пою1щихъ плотск0е хrт0во пришeствіе, и3 тeкше ћкw къ пaстырю, ви1дzтъ сего2, ћкw ѓгнца непор0чна, во чрeвэ мRjинэ ўпaсшасz, ю4же пою1ще рёша:"
//     },
//     {
//         rus: "Ра́дуйся, А́гнца и Па́стыря Ма́ти; ра́дуйся, дво́ре слове́сных ове́ц. Ра́дуйся, неви́димых враго́в муче́ние; ра́дуйся, ра́йских две́рей отверзе́ние. Ра́дуйся, я́ко небе́сная сра́дуются земны́м; ра́дуйся, я́ко земна́я сликовству́ют небе́сным. Ра́дуйся, апо́столов немо́лчная уста́; ра́дуйся, страстоте́рпцев непобеди́мая де́рзосте. Ра́дуйся, тве́рдое ве́ры утвержде́ние; ра́дуйся, све́тлое благода́ти позна́ние. Ра́дуйся, Е́юже обнажи́ся а́д; ра́дуйся, Е́юже облеко́хомся сла́вою. Ра́дуйся, Неве́сто Неневе́стная.",
//         cs: "Рaдуйсz, ѓгнца и3 пaстырz м™и: рaдуйсz, дв0ре словeсныхъ nвeцъ. Рaдуйсz, неви1димыхъ врагHвъ мучeніе: рaдуйсz, рaйскихъ дверeй tверзeніе. Рaдуйсz, ћкw нбcнаz срaдуютсz земны6мъ: рaдуйсz, ћкw зємнaz сликовствyютъ нбcнымъ. Рaдуйсz, ґпcлwвъ немHлчнаz ўстA: рaдуйсz, страстотeрпцєвъ непобэди1маz дeрзосте. Рaдуйсz, твeрдое вёры ўтверждeніе: рaдуйсz, свётлое бlгодaти познaніе. Рaдуйсz, є4юже њбнажи1сz ѓдъ: рaдуйсz, є4юже њблек0хомсz слaвою. Рaдуйсz невёсто неневёстнаz.         "
//     },
//     {
//         rus: "Конда́к 5. Боготе́чную звезду́ узре́вше волсви́, тоя́ после́доваша зари́, и я́ко свети́льник держа́ще ю́, то́ю испыта́ху кре́пкаго Царя́, и дости́гше Непостижи́маго, возра́довашася, Ему́ вопию́ще: Аллилу́иа.",
//         cs: "Кондaкъ є7. БGотeчную ѕвэздY ўзрёвше волсви2, тоS послёдоваша зари2: и3 ћкw свэти1льникъ держaще ю5, т0ю и3спытaху крёпкаго цRS: и3 дости1гше непостижи1маго, возрaдовашасz є3мY вопію1ще: Ґллилyіа."
//     },
//     {
//         rus: "И́кос 5. Ви́деша о́троцы халде́йстии на руку́ Деви́чу Созда́вшаго рука́ми челове́ки, и Влады́ку разумева́юще Его́, а́ще и ра́бий прия́т зра́к, потща́шася дарми́ послужи́ти Ему́, и возопи́ти Благослове́нней:",
//         cs: "Јкосъ є7. Ви1дэша џтроцы халдeйстіи на рукY дв7и1чу, создaвшаго рукaма человёки, и3 вLку разумэвaюще є3го2, ѓще и3 рaбій пріsтъ зрaкъ, потщaшасz дарми2 послужи1ти є3мY, и3 возопи1ти бlгословeннэй:"
//     },
//     {
//         rus: "Ра́дуйся, Звезды́ незаходи́мыя Ма́ти; ра́дуйся, заре́ та́инственнаго дне́. Ра́дуйся, пре́лести пе́щь угаси́вшая; ра́дуйся, Тро́ицы таи́нники просвеща́ющая. Ра́дуйся, мучи́теля безчелове́чнаго измета́ющая от нача́льства; ра́дуйся, Го́спода Человеколю́бца показа́вшая Христа́. Ра́дуйся, ва́рварскаго избавля́ющая служе́ния; ра́дуйся, тиме́ния изыма́ющая де́л. Ра́дуйся, огня́ поклоне́ние угаси́вшая; ра́дуйся, пла́мене страсте́й изменя́ющая. Ра́дуйся, ве́рных наста́внице целому́дрия; ра́дуйся, все́х родо́в весе́лие. Ра́дуйся, Неве́сто Неневе́стная.",
//         cs: "Рaдуйсz, ѕвэзды2 незаходи1мыz м™и: рaдуйсz, зарE тaинственнагw днE. Рaдуйсz, прeлести пeщь ўгаси1вшаz: рaдуйсz, трbцы таи1нники просвэщaющаz. Рaдуйсz, мучи1телz безчеловёчнаго и3зметaющаz t начaльства: рaдуйсz, гDа чlвэколю1бца показaвшаz хrтA. Рaдуйсz, вaрварскагw и3збавлsющаz служeніz: рaдуйсz, тимёніz и3з8имaющаz дёлъ. Рaдуйсz, nгнS поклонeніе ўгаси1вшаz: рaдуйсz, плaмене страстeй и3змэнsющаz. Рaдуйсz, вёрныхъ настaвнице цэломyдріz: рaдуйсz, всёхъ родHвъ весeліе. Рaдуйсz невёсто неневёстнаz."
//     }    
// ]

try {
    const answer = await fetch('./data.json')
    .then((response) => response.json())    
    .then((json) => {
        const data = json.dataText;        
        for(let i = 0; i < data.length; i++) {
            slovnyk(data[i].rus, data[i].cs);    
        }
        console.log(3, vocabulary);
        exception(vocabulary);
        // console.log(sortByRus(vocabulary));
        // const translateText2 = 'Взбра́нной от все́х родо́в Засту́пнице ро́да христиа́нскаго, покро́вом Своея́ бла́гости покрыва́ющей страну́ на́шу правосла́вную, благода́рственная пе́ния прино́сим Ти́, Богоро́дице, о явле́нии чу́дныя Твоея́ ико́ны. Ты́ же, я́ко Всеми́лостивая, все́х притека́ющих к Тебе́ Помо́щнице, заступа́й на́с во все́х ско́рбех и ну́ждах, беда́х и напа́стех, да зове́м Ти́: О, Всепе́тая Ма́ти, ро́ждшая все́х святы́х Святе́йшее Сло́во. О тебе вопиющих.';
        // document.querySelector('.translated').textContent = makeFirstLetter(translate(translateText2));
        for( let i = 6126; i<= 6145 ; i++) {
            const li = document.createElement("li");
            const textRus = document.createElement("p");
            const textCs = document.createElement("span");
            // textRus.textContent = sortByRus(vocabulary)[i].rus;
            // textCs.textContent = sortByRus(vocabulary)[i].cs;
            textRus.textContent = vocabulary[i].rus;
            textCs.textContent = vocabulary[i].cs;
            textCs.classList.add('vocabulary__cs')            
            textRus.append(textCs);
            li.appendChild(textRus);            
            translatedList.appendChild(li)
        }
        // localStorage.setItem('vocabulary', JSON.stringify(sortByRus(vocabulary)))
    })
}
catch (error) {
    console.log(error);
        if (!vocabulary.length) {
            // vocabulary = JSON.parse(localStorage.getItem('vocabulary'))
        }
}
    

    // import data from './data.json' assert { type: 'JSON' };  у́  є3мY    ѕл†z
    // console.log(data);


function sortByRus(array) {
    return array.sort((a, b) => a.rus > b.rus ? 1 : -1);
}

function translateWord(word) {
    let index = vocabulary.findIndex( data => data.rus === word );    
    if (index < 0) {
        let wordX = '';
        for (let i = 0; i < word.length; i++) {    
            if (word[i].charCodeAt() !== 769) wordX+= word[i];
        }
        index = vocabulary.findIndex( data => data.rus === wordX );    
    }

    if (index >= 0) {                
        return vocabulary[index].cs
    }  else {
        
        // let wordX = '';
        // for (let i = 0; i < word.length; i++) {    
        //     if (word[i].charCodeAt() !== 769) wordX+= word[i];
        // }
        // return wordX
        return word 
    }
}


// let translateText = 'Ангел предста́тель с Небесе́ по́слан бы́сть рещи́ Богоро́дице: ра́дуйся, и со безпло́тным гла́сом воплоща́ема Тя́ зря́, Го́споди, ужаса́шеся и стоя́ше, зовы́й к Не́й такова́я:';

function translate(text) {
    let textLow = text.toLowerCase();
    // console.log(textLow)
    let result = '';
    for (let i = 0; i < textLow.length; i++) {
        let word = '';
        let j = i;
        if (punctuation.includes(textLow[i])) {
            result+= textLow[i];                        
        } 
        else 
        {
            while (textLow[j]!==' ' && textLow[j]!==',' && textLow[j]!=='.' && textLow[j]!==':' && textLow[j]!=='!' && textLow[j]!=='?' && textLow[j]!==';' && textLow[j]!=='—' && textLow[j]!=='(' && textLow[j]!==')' && j < textLow.length) {
                word+= textLow[j];            
                j++;
            };                            
            i = j;
            if (word) result+= translateWord(word);
            if (j < textLow.length) result+= textLow[i];
        }        
    }    
    return result;
}


function makeFirstLetter(text) {
    let result = '';
    result+= text[0].toUpperCase();    
    for (let i = 1; i < text.length; i++) {
        if (text[i] !== '.') {
            if (text[i-1].charCodeAt() === 10) result+= text[i].toUpperCase();
            else result+= text[i];
        } else {
            result+= text[i];
            if (i<text.length) i++;                        
            while (text[i] === ' ' && i<text.length) {
                // result+= text[i];                
                i++;                
            };
            if (i<text.length) result+= text[i].toUpperCase();
        } 
    }
    
    return result
}

// let translateText1 = 'Кондак 1';
// let translateText2 = 'Взбра́нной от все́х родо́в Засту́пнице ро́да христиа́нскаго, покро́вом Своея́ бла́гости покрыва́ющей страну́ на́шу правосла́вную, благода́рственная пе́ния прино́сим Ти́, Богоро́дице, о явле́нии чу́дныя Твоея́ ико́ны. Ты́ же, я́ко Всеми́лостивая, все́х притека́ющих к Тебе́ Помо́щнице, заступа́й на́с во все́х ско́рбех и ну́ждах, беда́х и напа́стех, да зове́м Ти́:';
// let translateText3 = 'Ра́дуйся, Засту́пнице усе́рдная ро́да христиа́нскаго.';

// console.log(1, translate(translateText2));
// console.log(2, translateText2);
// console.log(3, makeFirstLetter(translate(translateText2)));

function exception(array) {
    for( let i = 0; i < array.length; i++) {
        if (array[i].rus === '13') array[i].cs = 'Gi';
        if (array[i].rus === '3') array[i].cs = 'G';
        
    }
}

