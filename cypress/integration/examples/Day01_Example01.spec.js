///<reference types="Cypress"/>
context("4 islem", () => {
    const s1 = 9;
    const s2 = 6;
    let sonuc;
    it("Toplam", () => {
        sonuc = s1 + s2;
        assert.equal(sonuc, 15, "Toplam kontrol sonucu");
    });
    it("Cıkarma", () => {
        sonuc = s1 - s2;
        assert.isTrue(sonuc === 0, "Cıkarma kontrol sonucu");
    });
    it.skip("Text kontrolu", () => {
        //skip komutu bu kodu calistirmadan atladı.
        //only komutu sadece o methodu caliştirir.
        const text1 = "Cypress io";
        expect(text1).to.have.string("io");
    });
});