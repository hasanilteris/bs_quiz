function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hüma Ar-Ge’nin gayri resmi kuruluş tarihi nedir ?", { a: "2020", b: "2021", c: "2022" , d: "2019" }, "a"),
    new Soru("2 Hüma Ar-Ge bünyesinde kaç takım teknofest hazırlanmıştır ve hazırlanmaktadır?(2024 dahil)", { a: "16", b: "20", c: "26", d: "36" }, "c"),
    new Soru("3-Hüma Ar-Ge bünyesinde kaç takım finale kalmıştır ?", { a: "5", b: "9", c: "13", d: "17" }, "d"),
    new Soru("4- İdris hoca kaç yarışmada finale gitmiştir ??", { a: "1", b: "2", c: "4", d: "5" }, "d"),
    new Soru("5-Hüma Ar-Ge bünyesinde bulunan takımlar ne kadar tutarında ödül kazanmıştır ? ( Tüm yarışmalar dahilinde )", { a: "30.000", b: "53.000", c: "61.000" , d: "74.000" }, "c"),
    new Soru("6-Deniz nerelidir ?", { a: "Antalya-Trabzon-Samsun", b: "Antalya-Samsun-Sinop", c: "Samsun-Antalya-Aydın", d: "Antalya-Samsun-Giresun" }, "a"),
    new Soru("7-Furkan bu zamana kadar kaç kilo filament yemiştir ?", { a: "4kg", b: "6kg", c: "8kg", d: "12kg" }, "c"),
    new Soru("8-Furkanın evindeki 3d yazıcının modeli nedir ?", { a: "Creality Ender3 v2", b: "Creality K1 Pro", c: "Elegoo Nepton 4", d: "FLSun v400" }, "a"),
    new Soru("9-Brava kaç modeldir ?", { a: "1998", b: "1999", c: "2000" , d: "2001" }, "c"),
    new Soru("10-Deniz staj dönemi boyunca (3ay) kaç defa pantolon giymiştir?", { a: "0", b: "1", c: "2", d: "3" }, "b"),
    new Soru("11-Deniz lehim yaparken bir yandan yapmaktan hoşlandığı şey nedir ?", { a: "Vozol içmek", b: "Behzat Ç. izlemek", c: "Fenerbahçe maç özeti izlemek", d: "Furkanla kavga etmek" }, "b"),
    new Soru("12-Hüma Ar-Ge bünyesinde yarışmaya katılan hava araçlarında toplam kaç motor kullanılmıştır ?", { a: "24", b: "30", c: "36", d: "42" }, "c"),
    new Soru("13-UR5 Robot Kol için kaç kg flament harcanmıştır ? (Hatalı baskılar dahil)", { a: "4kg", b: "7kg", c: "10kg" , d: "14kg" }, "c"),
    new Soru("14-Bu zamana kadar ByteSpark ofisine kaç tane Tübitak hakemi gelmiştir?", { a: "4", b: "6", c: "8", d: "10" }, "c"),
    new Soru("15-Denizin en sevdiği soğuk kahve aroması hangisidir ?", { a: "Beyaz Çikolatalı", b: "Mocha", c: "Karamelli", d: "Bitter" }, "a"),
    new Soru("16-Hasan staj zamanında aşağıdaki yemek komplarından hangisini yemiştir ?", { a: "Tiramisu-Icetea", b: "Çökertme Kebabı-Çay", c: "Pizza-Kola", d: "Trabzon Ekmeği-Sigara" }, "d"),
    new Soru("17-Hazal staj zamanı boyunca kaç defa ofiste yemek yapmıştır ve kaç tanesi yanmamıştır?", { a: "5-4", b: "7-6", c: "4-3" , d: "9-7" }, "b"),
    new Soru("18-Hazalın vazgeçmediği hayatı pahasına savunduğu soğuk kahve ve soda markaları hangisidir ?", { a: "Obsesso-Beypazarı", b: "Starbucks-Kızılay", c: "Nescafe-İnişDibi", d: "Darkcafe-Sırma" }, "a"),
    new Soru("19-Staj dönemi boyunca kaç defa voleybol oynanmıştır ?", { a: "10", b: "14", c: "19", d: "25" }, "c"),
    new Soru("20-Staj dönemi boyunca Bytespark ekibi kaç defa ofisin önünde voleybol oynanırken apartman sakinleri tarafından uyarılmıştır?", { a: "1", b: "3", c: "6", d: "8" }, "b"),
    new Soru("21-Ömer ve Davutun borsan mesai saati hangisidir ?", { a: "8-6", b: "9-6", c: "8-5" , d: "9-5" }, "a"),
    new Soru("22-Ekipçe kaç defa SPY oyunu oynanmıştır ?", { a: "6", b: "14", c: "21", d: "26" }, "b"),
    new Soru("23-Furkan staj döneminde kaç defa ofiste çekici yere fırlatmıştır ?", { a: "3", b: "8", c: "16", d: "22" }, "b"),
    new Soru("24-Hasan staj dönemi boyunca kaç defa bilgisayarına format atıp linux kurmuştur ?", { a: "3", b: "6", c: "9", d: "12" }, "c"),
    new Soru("25-Staj döneminde Hasan’ın bilgisayarına neden virüs girmiştir ?", { a: "Pes oyununu indirirken", b: "Hareketli hint müziği indirirken", c: "Bilmediği yazılım paketlerini kurarken" , d: "Hazal tarafından hacklenerek" }, "b"),
    new Soru("26-Emir ve melike denizlerde kaç defa menemen yapmıştır ?", { a: "2", b: "4", c: "6", d: "8" }, "d"),
    new Soru("27-Hüseyin Gazi atölyede Siha çalışırken neden başı dönmüştür?", { a: "Yediği zurna yüzünden", b: "Ömer davut ve hasanın sigara dumanı yüzünden", c: "Atölyenin havasızlığından", d: "Lehim teli solumaktan" }, "b")
];