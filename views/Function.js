/**
 * Created by qitian on 2018/3/20.
 */
/** add mark
 * para
 * var mark = new SetMark({
        markCoordinate: [0, 0],
        markAnchor: [0.5, 0.96],
        markImage: 'https://openlayers.org/en/v4.0.1/examples/data/icon.png',
    });
 **/
/** add one point **/
function MarkTesting() {
    var mark = new SetMark({
        markCoordinate: [80, -50]
    });
    $("#addOneMark").click(function () {
        mark.createMark();
        //mark.addClick();
    });
    $("#delOneMark").click(function () {
        mark.deleteMark();
    });
    $("#chaOneMark").click(function () {
        mark.changeMark('timg.png');
    });
}
MarkTesting();
/** add two points **/
function MarksTesting() {
    var mark = new Array();
    var markID = new Array();  // [[坐标对], 存放序号] 删除或修改某一个点时
    var markCoordinates = [[0,0], [50, 60], [10, 80]];


    var coordsLine = "104.140329;30.617213;104.141604;30.619939;104.145530;30.621809;104.156044;30.622234;104.159567;30.618516;104.162234;30.619126;104.163927;30.622608;104.161561;30.627154;104.164513;30.634864;104.163956;30.639419;104.162179;30.643053;104.157169;30.644150;104.157957;30.647703;104.160497;30.648200;104.155603;30.653239;104.155249;30.661699;104.153168;30.663071;104.151074;30.660819;104.149478;30.660924;104.147803;30.665024;104.148737;30.666710;104.155173;30.665509;104.156887;30.661744;104.159217;30.661568;104.158435;30.667243;104.164126;30.673704;104.166106;30.674012;104.169247;30.669843;104.172702;30.669111;104.188006;30.674634;104.192300;30.682088;104.198793;30.684223;104.200651;30.682634;104.205119;30.683765;104.208778;30.681460;104.213620;30.682851;104.223089;30.681728;104.227226;30.683105;104.231929;30.687296;104.234757;30.687411;104.236258;30.686956;104.235312;30.680385;104.240545;30.679705;104.243991;30.676334;104.247568;30.676772;104.249965;30.678586;104.247396;30.678377;104.248021;30.680724;104.252751;30.681007;104.251455;30.686789;104.255618;30.686855;104.253172;30.690437;104.256621;30.693034;104.254559;30.703448;104.263794;30.718278;104.270215;30.722103;104.293464;30.715579;104.302573;30.718596;104.319403;30.714549;104.321222;30.715495;104.320674;30.720041;104.321657;30.722086;104.326009;30.722111;104.339586;30.710345;104.371416;30.697987;104.375051;30.699283;104.392665;30.696157;104.394516;30.693400;104.394133;30.684062;104.395914;30.680013;104.412877;30.672402;104.415013;30.673868;104.418078;30.685448;104.423719;30.685863;104.428916;30.684077;104.437606;30.677801;104.439496;30.672700;104.440233;30.664653;104.436513;30.660027;104.432471;30.650024;104.431160;30.635705;104.433372;30.634569;104.438974;30.636450;104.442781;30.647432;104.449699;30.653572;104.451960;30.652536;104.454204;30.643150;104.454117;30.630087;104.448882;30.623739;104.447868;30.616685;104.438496;30.610253;104.429502;30.612472;104.425953;30.601754;104.419861;30.597668;104.410347;30.596216;104.405440;30.591427;104.402156;30.578180;104.403050;30.571088;104.407783;30.562875;104.402606;30.554643;104.402015;30.536544;104.399217;30.534201;104.398583;30.531633;104.404194;30.524746;104.407616;30.523339;104.412913;30.523421;104.414649;30.522339;104.415769;30.519078;104.414771;30.515533;104.411263;30.511866;104.395766;30.504304;104.395158;30.502632;104.397460;30.493770;104.394297;30.488307;104.390082;30.486308;104.373345;30.489798;104.367117;30.489840;104.361088;30.482769;104.352952;30.484245;104.348792;30.482159;104.341124;30.480862;104.340037;30.481776;104.340289;30.484609;104.345102;30.490181;104.342718;30.498919;104.336817;30.510361;104.331500;30.514916;104.326556;30.516639;104.324493;30.515208;104.323370;30.510090;104.332544;30.507683;104.329558;30.501299;104.333318;30.495682;104.331621;30.494007;104.314710;30.492080;104.301232;30.500617;104.299396;30.504057;104.294881;30.504927;104.291558;30.498280;104.277497;30.489175;104.258527;30.483252;104.254210;30.476772;104.254896;30.474816;104.260159;30.470823;104.260324;30.468907;104.249841;30.465686;104.247844;30.463976;104.225811;30.468723;104.222845;30.470923;104.223018;30.475296;104.221463;30.474757;104.221584;30.475752;104.220346;30.475410;104.218958;30.477622;104.216927;30.477419;104.215241;30.479294;104.214437;30.478445;104.214430;30.480403;104.212375;30.480034;104.212693;30.479041;104.209131;30.481782;104.208159;30.480455;104.205839;30.480975;104.204990;30.482547;104.207749;30.483330;104.207953;30.484766;104.205922;30.485567;104.204139;30.484452;104.202778;30.486152;104.204117;30.488736;104.201901;30.488132;104.200408;30.489508;104.202052;30.492251;104.199703;30.497650;104.200854;30.498294;104.199219;30.500737;104.199951;30.501363;104.198617;30.503116;104.196436;30.503354;104.188104;30.518184;104.183712;30.530905;104.180628;30.533739;104.177067;30.533272;104.172666;30.541072;104.163742;30.543227;104.154107;30.549963;104.153569;30.553088;104.155381;30.558729;104.154098;30.561695;104.156514;30.563948;104.160197;30.562672;104.164852;30.563599;104.165016;30.564571;104.160859;30.567129;104.168338;30.567265;104.167179;30.573546;104.164582;30.575103;104.165276;30.569429;104.163601;30.568898;104.163345;30.573678;104.159031;30.575572;104.162974;30.577926;104.166730;30.583313;104.167639;30.587912;104.171620;30.591339;104.169255;30.594394;104.168657;30.591655;104.167063;30.593020;104.167175;30.590634;104.165563;30.589271;104.156648;30.592611;104.156899;30.595179;104.153294;30.597621;104.158511;30.603942;104.156163;30.605742;104.150045;30.606423;104.149326;30.609154;104.145111;30.610527;104.142803;30.616776;104.140329;30.617213";

    var words = coordsLine.split(';');
    var allCoords = [];

    for (var i = 0; i < words.length; i += 2) {
        var tmp = i / 2;
        var temp = [];
        temp[0] = parseFloat(words[i]);
        temp[1] = parseFloat(words[i+1]);
        allCoords[tmp] = temp
    }

    var len = allCoords.length;
    for (var i = 0; i < len; i++) {
        mark[i] = new SetMark({
            markCoordinate: allCoords[i]
        });
        markID[i] = [allCoords[i], i];
        var k  = 0;
    }
    // var len = markCoordinates.length;
    // for (var i = 0; i < len; i++) {
    //     mark[i] = new SetMark({
    //         markCoordinate: markCoordinates[i]
    //     });
    //     markID[i] = [markCoordinates[i], i];
    //     var k  = 0;
    // }
    $("#addMoreMark").click(function () {
        for (var i = 0; i < len; i++) {
            mark[i].createMark();
            //mark[1].addClick();
        }
    });
    $("#delMoreMark").click(function () {
        for (var i = 0; i < len; i++) {
            mark[i].deleteMark();
        }
    });
    $("#chaMoreMark").click(function () {
        for (var i = 0; i < len; i++) {
            mark[i].changeMark('123.png');
        }
    });
}
MarksTesting();