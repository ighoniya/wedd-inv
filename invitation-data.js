/**
 * Invitation Data Configuration
 *
 * This file contains all the customizable content for the wedding invitation.
 * Edit this file to personalize your invitation without touching the HTML.
 *
 * Structure:
 * - meta: SEO and meta tags
 * - couple: Bride and groom information
 * - event: Wedding event details
 * - quotes: Islamic quotes
 * - story: Love story chapters
 * - countdown: Countdown labels
 * - loveGift: Gift/payment information
 * - comment: Comment section text
 * - gallery: Gallery section
 * - navigation: Menu navigation labels
 * - welcome: Welcome page content
 * - ui: UI elements and labels
 * - closing: Closing section (currently commented out in HTML)
 */
window.invitationData = {
    // ========== META & SEO ==========
    meta: {
        pageTitle: "Undangan Pernikahan Riana & Iqbal",
        description: "Perayaan pernikahan Riana dan Iqbal secara online.",
        keywords: "undangan, wedding, undangan digital, undangan online, wedding invitation, template undangan, template undangan pernikahan, undangan pernikahan, template undangan online, wedding invitation github, template website, template website undangan pernikahan",
        ogImage: "https://ulems.my.id/assets/images/bg.webp",
        ogUrl: "https://ulems.my.id",
        canonicalUrl: "https://ulems.my.id/"
    },

    // ========== COUPLE INFORMATION ==========
    couple: {
        // Combined short names (used in multiple places)
        namesShort: "Riana & Iqbal",

        // Groom information
        groom: {
            name: "Muhammad Iqbal Ghaniya",
            childOrder: "Putra ke-1",
            fatherName: "Bapak Dwi Wahyu Sulistyo",
            motherName: "Ibu Juminah",
            photo: "./assets/images/cowo_pict.jpg"
        },

        // Bride information
        bride: {
            name: "Riana Septiani Putri",
            childOrder: "Putri ke-2",
            fatherName: "Bapak Puja Hermiandono",
            motherName: "Ibu Ismiatun",
            photo: "./assets/images/cewe_pict.jpg"
        },

        // Connecting word between parents
        conjunction: "dan"
    },

    // ========== WEDDING EVENT ==========
    event: {
        // Date display text
        dateDisplay: "Jum'at, 17 April 2026",

        // Countdown datetime (format: YYYY-MM-DD HH:mm:ss in GMT+7/WIB)
        // This will be used for the countdown timer
        countdownDatetime: "2026-04-17 10:00:00",

        // Islamic greeting
        greeting: {
            arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
            text: "Assalamualaikum Warahmatullahi Wabarakatuh",
            introduction: "Tanpa mengurangi rasa hormat, kami mengundang Anda untuk berkenan menghadiri acara pernikahan kami:"
        },

        // Event introduction text
        eventIntro: "Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, insyaAllah kami akan menyelenggarakan acara:",

        // Akad ceremony
        akad: {
            title: "Akad",
            date: "Jum'at, 17 April 2026",
            time: "Pukul 10.00 WIB - Selesai"
        },

        // Reception
        resepsi: {
            title: "Resepsi",
            date: "Sabtu, 18 April 2026",
            time: "Pukul 13.00 WIB - Selesai"
        },

        // Dress code
        dressCode: {
            introduction: "Demi kehangatan bersama, kami memohon kesediaan Anda untuk mengenakan dress code berikut:",
            description: "Busana batik dan bersepatu."
        },

        // Location
        location: {
            address: "Stasiun Magetan, Jl. Jiwan - Bar. No.14, Karangsono, Kec. Bar., Kabupaten Magetan, Jawa Timur 63395",
            googleMapsUrl: "https://maps.app.goo.gl/1ueReZUv39923TwC9"
        }
    },

    // ========== ISLAMIC QUOTES ==========
    quotes: {
        sectionTitle: "Allah Subhanahu Wa Ta'ala berfirman",
        items: [
            {
                text: "Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).",
                reference: "QS. Adh-Dhariyat: 49"
            },
            {
                text: "dan sesungguhnya Dialah yang menciptakan pasangan laki-laki dan perempuan,",
                reference: "QS. An-Najm: 45"
            }
        ]
    },

    // ========== LOVE STORY ==========
    story: {
        sectionTitle: "Daftar Kuliner",
        viewButton: "Lihat",
        chapters: [
            {
                number: 1,
                title: "Spesial Ayam Panggang 'Miroso' Hj. Mina Suryani",
                content: "https://share.google/UCkre9lrkb4b2Wkq9"
            },
            {
                number: 2,
                title: "Bekicot Magetan",
                content: "https://share.google/djyJs3LNv160yYXO6"
            },
            {
                number: 3,
                title: "Depot Nasi Pecel Madiun 99",
                content: "https://share.google/KWhN4bL0CCAkATl5L"
            },
            {
                number: 4,
                title: "Gado-Gado & Tahu Campur Pak Tomo",
                content: "https://share.google/heAayMseFHgl4qpj6"
            },
            {
                number: 5,
                title: "Dawet Suronatan Kota Madiun",
                content: "https://maps.app.goo.gl/5S4j6DrieDP3f7xL9"
            },
            {
                number: 6,
                title: "Toko Mirasa (Oleh-Oleh)",
                content: "https://share.google/UTiLkJDW85R6KYRyo"
            },
            {
                number: 7,
                title: "Bluder Cokro Kota Madiun (Oleh-Oleh)",
                content: "https://share.google/g13qGivd3lhisG956"
            }
        ]
    },

    // ========== COUNTDOWN ==========
    countdown: {
        sectionTitle: "Moment Bahagia",
        labels: {
            day: "Hari",
            hour: "Jam",
            minute: "Menit",
            second: "Detik"
        }
    },

    // ========== LOVE GIFT SECTION ==========
    loveGift: {
        sectionTitle: "Love Gift",
        introduction: "Dengan hormat, bagi Anda yang ingin memberikan tanda kasih kepada kami, dapat melalui:",

        // Bank transfer
        transfer: {
            label: "Transfer",
            recipientName: "Riana Septiani Putri",
            bankName: "Bank Central Asia",
            accountNumber: "1234567891234",
            infoButton: "Info"
        },

        // QRIS payment
        qris: {
            label: "QRIS",
            recipientName: "Riana Septiani Putri",
            qrisImage: "./assets/images/donate.png",
            infoButton: "Info"
        },

        // Physical gift
        gift: {
            label: "Gift",
            recipientName: "Riana Septiani Putri",
            phoneNumber: "0812345678",
            address: "RT 10 RW 02, Desa Pajerukan, Kec. Kalibagor, Kab. Banyumas, Jawa Tengah 53191.",
            infoButton: "Info"
        }
    },

    // ========== COMMENT SECTION ==========
    comment: {
        sectionTitle: "Ucapan & Doa",

        // Form fields
        form: {
            nameLabel: "Nama",
            namePlaceholder: "Isikan Nama Anda",
            presenceLabel: "Presensi",
            presenceOptions: [
                { value: "0", text: "Konfirmasi Presensi" },
                { value: "1", text: "✅ Datang" },
                { value: "2", text: "❌ Berhalangan" }
            ],
            commentLabel: "Ucapan & Doa",
            commentPlaceholder: "Tulis Ucapan dan Doa",
            sendButton: "Send"
        },

        // Information alert
        infoAlert: {
            title: "Bestieee!!!",
            message1: "Cobain like seperti Instagram, dengan tap tap bagian komentarnya",
            message2: "Sama bisa format text seperti Whatsapp lohh... cobainn jugaaa, makaciwww bestieee"
        }
    },

    // ========== GALLERY ==========
    gallery: {
        sectionTitle: "Galeri",
        navigation: {
            previous: "Previous",
            next: "Next"
        }
    },

    // ========== NAVIGATION ==========
    navigation: {
        home: "Home",
        bride: "Mempelai",
        date: "Tanggal",
        gallery: "Galeri",
        comment: "Ucapan"
    },

    // ========== WELCOME PAGE ==========
    welcome: {
        title: "The Wedding Of",
        coupleNames: "Riana & Iqbal",
        guestGreeting: "Kepada Yth Bapak/Ibu/Saudara/i",
        openButton: "Buka Undangan"
    },

    // ========== UI ELEMENTS ==========
    ui: {
        home: {
            title: "Undangan Pernikahan",
            saveCalendarButton: "Tambah ke Google Calendar",
            scrollText: "Scroll Down"
        },

        buttons: {
            viewMapsButton: "Lihat Google Maps",
            changeTheme: "Change theme",
            changeAudio: "Change audio"
        },

        loading: {
            bootingText: "Booting application...",
            noJsWarning: "Sorry, this invitation requires javascript to work"
        }
    },

    // ========== CLOSING SECTION ==========
    // Note: This section is currently commented out in index.html (lines 596-616)
    // Uncomment the HTML section if you want to use these values
    closing: {
        thankYou: "Terima kasih atas perhatian dan doa restu Anda, yang menjadi kebahagiaan serta kehormatan besar bagi kami.",
        farewell: "Wassalamualaikum Warahmatullahi Wabarakatuh",
        farewellArabic: "اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ",
        buildWith: "Build with",
        developer: "ighoniya"
    }
};
