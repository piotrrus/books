<?php

use Illuminate\Database\Seeder;

class OpinionsTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('opinions')->insert([
            ['id_book' => 1, 'id_reader' => 7, 'opinion' => 'W książce Wzorce projektowe. Elementy oprogramowania obiektowego wielokrotnego użytku opisano, czym są wzorce projektowe, a także w jaki sposób pomagają one projektować oprogramowanie obiektowe. Podręcznik zawiera studia przypadków, pozwalające poznać metody stosowania wzorców w praktyce. Zamieszczono tu również katalog wzorców projektowych, podzielony na trzy kategorie: wzorce konstrukcyjne, strukturalne i operacyjne'],
            ['id_book' => 2, 'id_reader' => 4, 'opinion' => 'W książce Czysty kod. Podręcznik dobrego programisty szczegółowo omówione zostały zasady, wzorce i najlepsze praktyki pisania czystego kodu. Podręcznik zawiera także kilka analiz przypadków o coraz większej złożoności, z których każda jest doskonałym ćwiczeniem porządkowania zanieczyszczonego bądź nieudanego kodu.'],
            ['id_book' => 3, 'id_reader' => 4, 'opinion' => 'Manipulowanie faktami, podstawieni świadkowie i nieobiektywni przysięgli, niewidomy obrońca z urzędu, który nie może zobaczyć dokumentów ani dowodów, a w dodatku boi się swojego klienta'],
            ['id_book' => 4, 'id_reader' => 5, 'opinion' => 'Ta książka nie posiada jeszcze opisu'],
            ['id_book' => 5, 'id_reader' => 5, 'opinion' => 'Bestsellerowy thriller mistrza kryminału. Serial na Canal Plus. Grupa trzydziestolatków, przyjaciół ze studiów, co roku wyjeżdża wspólnie ze swoimi rodzinami na wakacje. Tym razem trafiają do zagubionej wśród jezior i lasów agroturystyki w niewielkiej wsi Żmijowisko. Bawią się jak zwykle – odreagowując stres szybkiego wielkomiejskiego życia. Jest alkohol, są narkotyki. A także skrywane od lat urazy, dawne uczucia i wzajemne pretensje, które w czasie kolejnych dni wyjdą na jaw.'],
            ['id_book' => 6, 'id_reader' => 6, 'opinion' => 'Wielowątkowa, diaboliczna opowieść o tym jak szlachetne idee indywidualnej wolności w umysłach ludzi na wolność niegotowych, kształtowanych w uściskach carskiego samodzierżawia, przeradzają się w idee nihilizmu, bezwładne rewolucyjne ruchy i terroryzm.'],
            ['id_book' => 7, 'id_reader' => 1, 'opinion' => 'Jadąc do Babadag to książka o podróży przez zapomnianą Europę, tę, która zawsze była uważana za gorszą i zacofaną. Andrzej Stasiuk jedzie samochodem, autostopem, pociągiem. A za oknami - Polska, Słowacja, Węgry, Rumunia, Słowenia, Albania, Mołdawia.'],
            ['id_book' => 8, 'id_reader' => 1, 'opinion' => 'Heban to złożona z wielu wątków fascynująca, nowoczesna powieść-relacja z ekspedycji w głąb Czarnego Kontynentu, ukazująca Afrykę u progu XXI wieku, Afrykę rozdzieraną wojnami, głodem, epidemiami i korupcją.'],
            ['id_book' => 9, 'id_reader' => 1, 'opinion' => 'Bestsellerowa opowieść o miłości, szelmostwach i szaleństwie. Ricardo był nastolatkiem, kiedy poznał niegrzeczną dziewczynkę. Od tamtego dnia przez ponad pięćdziesiąt lat ukochana pojawia się w jego życiu i znika bez śladu. Czy to w Limie, Paryżu, Londynie, Tokio czy Madrycie – każdy jej powrót będzie ważnym wydarzeniem w życiu Ricarda i ważnym momentem w najnowszej historii świata.'],
        ]);
    }
}
