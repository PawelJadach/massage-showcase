import Image from "next/image";
import { HeartHandshake, Droplets, Leaf, Clock3, Sparkles } from "lucide-react";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />

      {/* Promo Banner */}
      <div className="bg-[#f4a5b0] text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-2 text-center text-sm md:flex-row md:text-left">
          <p className="font-medium tracking-wide">
            -20% na pierwszy masaż relaksacyjny przy rezerwacji online do końca miesiąca
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center rounded-full border border-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-white/10"
          >
            Zarezerwuj teraz
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-black md:min-h-[640px]"
      >
        <div className="absolute inset-0">
          <Image
            src="/hero-main.jpg"
            alt="Masaż relaksacyjny"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80 md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-black/25" />
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-16 text-center text-white md:px-6 lg:px-8">
          <p className="mb-3 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#ffe4ea] shadow-sm backdrop-blur">
            <Sparkles className="h-3 w-3" />
            Salon masażu &amp; spa w samym sercu miasta
          </p>
          <h2 className="mb-4 max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Zrelaksuj ciało,
            <br className="hidden sm:block" /> ukołysz zmysły
          </h2>
          <p className="mb-8 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-white/85">
            Poczuj dotyk prawdziwego relaksu w kameralnym salonie masażu.
            Łączymy wiedzę fizjoterapeutyczną z atmosferą luksusowego spa, aby
            po każdej wizycie czuć się lżej, spokojniej i piękniej.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full bg-[#f4a5b0] px-8 py-3 text-sm font-medium text-white shadow-md transition hover:bg-[#e895a0]"
            >
              Umów wizytę już teraz
            </a>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-white/80">
              <Clock3 className="h-4 w-4 text-[#f4a5b0]" />
              <span>
                Średni czas wizyty: <strong>60–90 minut</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="uslugi" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#6b6b6b] text-center mb-6">
            Witamy w Salonie Masażu
          </h2>
          <p className="text-center text-[#6b6b6b] max-w-3xl mx-auto mb-12 leading-relaxed">
            Nasz salon oferuje kompleksowe zabiegi masażu i relaksu, które pomogą Ci odzyskać równowagę 
            i energię. Doświadcz profesjonalnej opieki w przyjaznej, spokojnej atmosferze.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#f5f1e8] p-8 rounded-lg text-center hover:shadow-lg transition">
              <div className="flex items-center justify-center mb-4">
                <HeartHandshake className="w-10 h-10 text-[#f4a5b0]" />
              </div>
              <h3 className="text-2xl font-light text-[#6b6b6b] mb-4">Masaż Terapeutyczny</h3>
              <p className="text-[#6b6b6b] mb-6">
                Profesjonalne techniki masażu pomagające w redukcji napięcia i bólu mięśniowego.
              </p>
              <button className="bg-[#f4a5b0] text-white px-6 py-2 rounded-full hover:bg-[#e895a0] transition">
                Czytaj więcej
              </button>
            </div>
            <div className="bg-[#f5f1e8] p-8 rounded-lg text-center hover:shadow-lg transition">
              <div className="flex items-center justify-center mb-4">
                <Droplets className="w-10 h-10 text-[#f4a5b0]" />
              </div>
              <h3 className="text-2xl font-light text-[#6b6b6b] mb-4">Pielęgnacja Skóry</h3>
              <p className="text-[#6b6b6b] mb-6">
                Zabiegi pielęgnacyjne dostosowane do potrzeb Twojej skóry, zapewniające zdrowy wygląd.
              </p>
              <button className="bg-[#f4a5b0] text-white px-6 py-2 rounded-full hover:bg-[#e895a0] transition">
                Czytaj więcej
              </button>
            </div>
            <div className="bg-[#f5f1e8] p-8 rounded-lg text-center hover:shadow-lg transition">
              <div className="flex items-center justify-center mb-4">
                <Leaf className="w-10 h-10 text-[#f4a5b0]" />
              </div>
              <h3 className="text-2xl font-light text-[#6b6b6b] mb-4">Zabiegi Ciała</h3>
              <p className="text-[#6b6b6b] mb-6">
                Kompleksowe zabiegi relaksacyjne i regenerujące dla całego ciała.
              </p>
              <button className="bg-[#f4a5b0] text-white px-6 py-2 rounded-full hover:bg-[#e895a0] transition">
                Czytaj więcej
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section id="cennik" className="py-12 md:py-20 bg-[#f5f1e8]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#6b6b6b] mb-6 md:mb-8">
                Cennik Usług i Zabiegów
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="text-2xl font-light text-[#6b6b6b] mb-6">Masaże</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-[#6b6b6b]/20 pb-3">
                      <span className="text-[#6b6b6b]">Masaż Relaksacyjny</span>
                      <span className="text-[#6b6b6b] font-medium">60 zł</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#6b6b6b]/20 pb-3">
                      <span className="text-[#6b6b6b]">Masaż Głęboki</span>
                      <span className="text-[#6b6b6b] font-medium">65 zł</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#6b6b6b]/20 pb-3">
                      <span className="text-[#6b6b6b]">Masaż Sportowy</span>
                      <span className="text-[#6b6b6b] font-medium">65 zł</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#6b6b6b]/20 pb-3">
                      <span className="text-[#6b6b6b]">Masaż Gorącymi Kamieniami</span>
                      <span className="text-[#6b6b6b] font-medium">84 zł</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#6b6b6b]/20 pb-3">
                      <span className="text-[#6b6b6b]">Masaż Twarzy</span>
                      <span className="text-[#6b6b6b] font-medium">55 zł</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-[#6b6b6b] mb-6">Zabiegi</h3>
                  <div className="space-y-4">
                    <div className="border-b border-[#6b6b6b]/20 pb-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[#6b6b6b]">Aromaterapia - Równowaga</span>
                        <span className="text-[#6b6b6b] font-medium">80 zł</span>
                      </div>
                      <p className="text-sm text-[#6b6b6b]/70">Pakiet 50 minut</p>
                    </div>
                    <div className="border-b border-[#6b6b6b]/20 pb-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[#6b6b6b]">Supreme Pielęgnacja Skóry</span>
                        <span className="text-[#6b6b6b] font-medium">119 zł</span>
                      </div>
                      <p className="text-sm text-[#6b6b6b]/70">Pakiet 60 minut</p>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#6b6b6b]/20 pb-3">
                      <span className="text-[#6b6b6b]">Uspokajający Pielęgnacja Twarzy</span>
                      <span className="text-[#6b6b6b] font-medium">87 zł</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#6b6b6b]/20 pb-3">
                      <span className="text-[#6b6b6b]">Aromaterapia Pielęgnacja Twarzy</span>
                      <span className="text-[#6b6b6b] font-medium">95 zł</span>
                    </div>
                    <div className="border-b border-[#6b6b6b]/20 pb-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[#6b6b6b]">Kokosowe Zabiegi Ciała</span>
                        <span className="text-[#6b6b6b] font-medium">90 zł</span>
                      </div>
                      <p className="text-sm text-[#6b6b6b]/70">Pakiet 40 minut</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden mt-8 md:mt-0">
              <Image
                src="/price-list-scrub.jpg"
                alt="Zabiegi pielęgnacyjne"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beauty and Success Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/beauty-success.jpg"
                alt="Piękno i sukces"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#6b6b6b] mb-6">
                Twoje Piękno i Sukces Zaczynają Się Tutaj
              </h2>
              <p className="text-[#6b6b6b] mb-8 leading-relaxed">
                W naszym salonie wierzymy, że prawdziwe piękno pochodzi z wewnątrz. Nasze zabiegi 
                nie tylko poprawiają wygląd zewnętrzny, ale także przywracają wewnętrzną równowagę 
                i energię. Doświadcz transformacji, która sprawi, że poczujesz się odnowiony i pełen 
                witalności.
              </p>
              <button className="bg-[#f4a5b0] text-white px-8 py-3 rounded-full hover:bg-[#e895a0] transition">
                Czytaj więcej
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section id="personel" className="py-20 bg-[#f5f1e8]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#6b6b6b] text-center mb-6">
            Zrelaksuj Się, Jesteś w Dobrych Rękach
          </h2>
          <p className="text-center text-[#6b6b6b] max-w-3xl mx-auto mb-12 leading-relaxed">
            Nasz doświadczony zespół specjalistów zadba o to, aby każdy zabieg był wyjątkowym 
            doświadczeniem relaksu i regeneracji. Każdy z naszych terapeutów posiada wieloletnie 
            doświadczenie i pasję do swojej pracy.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/staff-1.jpg"
                  alt="Anna Kowalska"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-light text-[#6b6b6b]">Anna Kowalska</h3>
              <p className="text-[#6b6b6b]/70">Masażystka</p>
            </div>
            <div className="text-center">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/staff-2.jpg"
                  alt="Marek Nowak"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-light text-[#6b6b6b]">Marek Nowak</h3>
              <p className="text-[#6b6b6b]/70">Terapeuta Masażu</p>
            </div>
            <div className="text-center">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/staff-3.jpg"
                  alt="Maria Wiśniewska"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-light text-[#6b6b6b]">Maria Wiśniewska</h3>
              <p className="text-[#6b6b6b]/70">Kosmetolog</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#6b6b6b] text-center mb-6">
            Poczuj Naturę, Bądź Naturalny
          </h2>
          <p className="text-center text-[#6b6b6b] max-w-3xl mx-auto mb-12 leading-relaxed">
            W naszym salonie używamy wyłącznie naturalnych produktów, które są delikatne dla skóry 
            i przyjazne dla środowiska. Doświadcz autentycznego relaksu w harmonii z naturą.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-8 md:mt-12">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src={`/gallery-${num}.jpg`}
                  alt={`Galeria ${num}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#f5f1e8]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#6b6b6b] text-center mb-4">
            Co Mówią Nasi Klienci
          </h2>
          <p className="text-center text-[#6b6b6b] max-w-2xl mx-auto mb-10 leading-relaxed">
            Opinie osób, które już zaufały naszemu salonowi. Dziękujemy za każde słowo
            i cieszymy się, że możemy być częścią Twojego relaksu.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Katarzyna, 34 lata",
                text: "Najlepszy masaż, na jakim byłam. Czułam się zaopiekowana od wejścia do wyjścia, a napięcia w karku zniknęły po jednej wizycie.",
              },
              {
                name: "Michał, 41 lat",
                text: "Świetne miejsce po intensywnym tygodniu pracy. Profesjonalne podejście, spokojna atmosfera i naprawdę odprężający masaż.",
              },
              {
                name: "Anna i Piotr",
                text: "Byliśmy na masażu dla dwojga – cudowne doświadczenie. Idealny prezent i wspólnie spędzony czas w ciszy i relaksie.",
              },
            ].map((opinia) => (
              <div
                key={opinia.name}
                className="flex h-full flex-col rounded-2xl bg-white/80 p-6 shadow-sm backdrop-blur"
              >
                <div className="mb-3 flex text-[#f4a5b0]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                </div>
                <p className="mb-4 text-sm text-[#6b6b6b] leading-relaxed">
                  “{opinia.text}”
                </p>
                <p className="mt-auto text-sm font-semibold text-[#b47c85]">
                  {opinia.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voucher Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#6b6b6b] mb-4">
                Podaruj Bliskim Chwilę Relaksu
              </h2>
              <p className="text-[#6b6b6b] mb-6 leading-relaxed">
                Voucher prezentowy do SPA MAGIC to idealny pomysł na urodziny, rocznicę,
                święta lub podziękowanie. Ty wybierasz wartość lub konkretny zabieg,
                a obdarowana osoba umawia wizytę w dogodnym dla siebie terminie.
              </p>
              <ul className="mb-6 space-y-2 text-[#6b6b6b] text-sm">
                <li>• Dostępne vouchery kwotowe i na wybrane pakiety zabiegowe</li>
                <li>• Elegancki drukowany voucher lub wersja elektroniczna PDF</li>
                <li>• Ważność vouchera: 6 miesięcy od daty zakupu</li>
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center rounded-full bg-[#f4a5b0] px-8 py-3 text-sm font-medium text-white shadow-md transition hover:bg-[#e895a0]"
                >
                  Zapytaj o voucher
                </a>
                <p className="text-xs text-[#7a7a7a]">
                  Możliwość personalizacji dedykacji na voucherze.
                </p>
              </div>
            </div>
            <div className="relative mx-auto h-56 w-full max-w-sm">
              <div className="absolute inset-0 rounded-3xl bg-[#f5f1e8] shadow-lg" />
              <div className="absolute inset-3 rounded-3xl border border-dashed border-[#f4a5b0]/60 bg-white/90 p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b47c85]">
                  Voucher prezentowy
                </p>
                <h3 className="mb-3 text-2xl font-light text-[#6b6b6b]">
                  SPA MAGIC
                </h3>
                <p className="mb-4 text-sm text-[#7a7a7a]">
                  Uprawnia do skorzystania z wybranego masażu lub pakietu zabiegowego
                  w naszym salonie.
                </p>
                <div className="flex items-center justify-between text-xs text-[#7a7a7a]">
                  <span>Wartość: wg ustaleń</span>
                  <span>Ważny: 6 miesięcy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#f5f1e8]">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#6b6b6b] mb-4">
                Jak Do Nas Trafić
              </h2>
              <p className="text-[#6b6b6b] mb-4 leading-relaxed">
                Nasz salon znajduje się przy ul. Przykładowej 123 w Warszawie, kilka minut spacerem
                od centrum. W pobliżu znajdują się przystanki autobusowe i tramwajowe.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-[#6b6b6b]">
                <li>• Przystanki: „Przykładowa” linie 12, 24, 178</li>
                <li>• Parking: bezpłatne miejsca parkingowe przy ulicy</li>
                <li>• Wejście: od strony dziedzińca, domofon „SPA MAGIC”</li>
              </ul>
              <p className="text-xs text-[#7a7a7a]">
                Dokładny adres i wskazówki otrzymasz również w potwierdzeniu rezerwacji.
              </p>
            </div>
            <div className="h-72 w-full overflow-hidden rounded-2xl shadow-lg">
              <iframe
                title="Mapa dojazdu do SPA MAGIC"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.5580000000004!2d21.010000!3d52.229700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEzJzQ3LjAiTiAyMcKwMDAnMzYuMCJF!5e0!3m2!1spl!2spl!4v1700000000000"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#6b6b6b] text-center mb-6">
            Najczęściej Zadawane Pytania
          </h2>
          <p className="text-center text-[#6b6b6b] mb-10 leading-relaxed">
            Jeśli masz dodatkowe pytania – zadzwoń do nas lub napisz wiadomość. Chętnie doradzimy
            w wyborze zabiegu i rozwiejemy wszelkie wątpliwości.
          </p>
          <div className="space-y-4">
            <details className="group rounded-xl border border-[#e1ddd4] bg-[#fdfbf7] p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-sm font-medium text-[#6b6b6b]">
                  Jak przygotować się do masażu?
                </span>
                <span className="text-xl text-[#b47c85] group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-[#7a7a7a] leading-relaxed">
                Wystarczy, że przyjdziesz kilka minut wcześniej, aby spokojnie się przebrać i wypełnić
                krótką ankietę. Nie zalecamy obfitych posiłków tuż przed wizytą.
              </p>
            </details>
            <details className="group rounded-xl border border-[#e1ddd4] bg-[#fdfbf7] p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-sm font-medium text-[#6b6b6b]">
                  Czy mogę odwołać lub przełożyć wizytę?
                </span>
                <span className="text-xl text-[#b47c85] group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-[#7a7a7a] leading-relaxed">
                Tak, prosimy o kontakt najpóźniej 24 godziny przed planowanym terminem wizyty.
                Dzięki temu możemy udostępnić ten czas innym klientom.
              </p>
            </details>
            <details className="group rounded-xl border border-[#e1ddd4] bg-[#fdfbf7] p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-sm font-medium text-[#6b6b6b]">
                  Czy są przeciwwskazania do masażu?
                </span>
                <span className="text-xl text-[#b47c85] group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-[#7a7a7a] leading-relaxed">
                Niektóre schorzenia (np. ostre stany zapalne, gorączka, świeże urazy) mogą być
                przeciwwskazaniem. W razie wątpliwości skonsultuj się z lekarzem lub poinformuj
                terapeutę przed zabiegiem.
              </p>
            </details>
            <details className="group rounded-xl border border-[#e1ddd4] bg-[#fdfbf7] p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-sm font-medium text-[#6b6b6b]">
                  Czy mogę przyjść na masaż w ciąży?
                </span>
                <span className="text-xl text-[#b47c85] group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-[#7a7a7a] leading-relaxed">
                Oferujemy delikatne, dedykowane masaże dla kobiet w ciąży (drugi i trzeci trymestr),
                wykonywane po wcześniejszej konsultacji i w komfortowej pozycji.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="kontakt" className="py-20 bg-[#f5f1e8]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#6b6b6b] mb-6">
                Chcesz Zarezerwować Wizytę lub Masz Pytanie?
              </h2>
              <p className="text-[#6b6b6b] mb-6 leading-relaxed">
                Skontaktuj się z nami telefonicznie pod numerem <strong>+48 12 987 65 432</strong> 
                lub skorzystaj z naszego formularza rezerwacji online. Jesteśmy dostępni, aby odpowiedzieć 
                na wszystkie Twoje pytania i pomóc w wyborze odpowiedniego zabiegu.
              </p>
              <button className="bg-[#f4a5b0] text-white px-8 py-3 rounded-full hover:bg-[#e895a0] transition">
                Umów Wizytę
              </button>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/booking-facial.jpg"
                alt="Rezerwacja wizyty"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6b6b6b] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#f4a5b0] rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🌸</span>
                </div>
                <h3 className="text-2xl font-light">SPA MAGIC</h3>
              </div>
              <p className="text-white/80">
                Profesjonalny salon masażu i relaksu, gdzie Twoje dobre samopoczucie jest naszym priorytetem.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-light mb-4">Kontakt</h4>
              <p className="text-white/80 mb-2">📞 +48 12 987 65 432</p>
              <p className="text-white/80 mb-2">✉️ kontakt@spamagic.pl</p>
              <p className="text-white/80">📍 ul. Przykładowa 123, Warszawa</p>
            </div>
            <div>
              <h4 className="text-xl font-light mb-4">Godziny Otwarcia</h4>
              <p className="text-white/80 mb-1">Pon - Pt: 9:00 - 20:00</p>
              <p className="text-white/80 mb-1">Sob: 10:00 - 18:00</p>
              <p className="text-white/80">Nd: 11:00 - 16:00</p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 SPA MAGIC. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
