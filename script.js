function setLang(lang) {
    if (lang === "bn") {
        document.getElementById("about-title").innerText = "আমাদের সম্পর্কে";
        document.getElementById("about-text").innerText =
            "কোরফ্রেম কনস্ট্রাকশন একটি আধুনিক ইঞ্জিনিয়ারিং ও নির্মাণ প্রতিষ্ঠান। আমরা ডিজাইন, কনস্ট্রাকশন এবং কনসালটেন্সি সেবা প্রদান করি।";
        document.getElementById("service-title").innerText = "আমাদের সেবা";
        document.getElementById("contact-title").innerText = "যোগাযোগ করুন";
    } else {
        document.getElementById("about-title").innerText = "About Us";
        document.getElementById("about-text").innerText =
            "CoreFrame Construction is a modern engineering and construction company providing professional design, construction, and consultancy services.";
        document.getElementById("service-title").innerText = "Our Services";
        document.getElementById("contact-title").innerText = "Contact Us";
    }
}
