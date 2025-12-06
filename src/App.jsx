import React from "react";
import Card from "./Card.jsx";
import KukarachaImage from "./assets/Kukaracha_wigni.jpg";
import mebebiaImage from "./assets/Me_bebia.jpg";
import mevxedavImage from "./assets/mevxedavmzes.jpg";
import mzianigameImage from "./assets/mzianigame.jpg";
const handleCardClick = (title, characters) => {
  console.log("Book Title:", title);
  console.log("Characters:", characters);
};
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Card
        title="კუკარაჩა"
        img={KukarachaImage}
        desc="„კუკარაჩა“ – ეს არის ნოდარ დუმბაძის ცნობილი რომანი, რომელიც მეგობრობაზე, ერთგულებასა და ადამიანურ ღირსებაზე მოგვითხრობს. ნაწარმოების მთავარი გმირი არის ახალგაზრდა მილიციელი ბაჩანა (კუკარაჩა) – სუფთა, გულწრფელი და ბოლომდე კეთილი ადამიანი, რომელიც საკუთარ საქმეს სიყვარულით ემსახურება და ცდილობს ყველას დაეხმაროს."
        onButtonClick={handleCardClick}
        characternames={["კუკარაჩა", "ინგა", "მურტალო", "ანიკო"]}
      />
      <Card
        title="მე ბებია ილიკო და ილარიონი"
        img={mebebiaImage}
        desc="ნოდარ დუმბაძის ეს თბილი და იუმორით სავსე მოთხრობა პატარა ბიჭის, ზურიკელას ცხოვრებას აღწერს. ზურიკელა ბებიასთან ერთად ცხოვრობს სოფელში, სადაც მისი ყოველდღიური ცხოვრება არის დაკავშირებული ორ ხალისიან, მაგრამ მუდამ ერთმანეთს გადაკიდებულ პიროვნებასთან — ილიკოსა და ილარიონისთან."
        onButtonClick={handleCardClick}
        characternames={[
          "ზურიკელა",
          "ოლღა ბებია",
          "ილიკო",
          "ილარიონი",
          "მერი",
          "ცირა",
          "კუკური",
        ]}
      />
      <Card
        title="მე ვხედავ მზეს"
        img={mevxedavImage}
        desc="მე ვხედავ მზეს — ნოდარ დუმბაძის რიგით მეორე რომანი. ნაწარმოების მოქმედება ვითარდება დიდი სამამულო ომის დროს, გურიის ერთ-ერთ სოფელში. რომანის მთავარი გმირია ბრმა ხატია, რომელიც, როგორც თვითონ ამბობს, მხოლოდ მზეს და მის შეყვარებულს, სოსოიას, ხედავს."
        onButtonClick={handleCardClick}
        characternames={[
          "სოსოია",
          "ხატია",
          "ბეჟანა",
          "ქეთო",
          "ანატოლი",
          "ბეგლარა",
          "ბესარიონი",
        ]}
      />
      <Card
        title="მზიანი ღამე"
        img={mzianigameImage}
        desc="რომანის მთავარი გმირი, თემური გაუცხოვებულია საკუთარ დედასთან, რომელიც ახლახან დაბრუნდა 12-წლიანი გადასახლებიდან. ის ყოველდღიური, ჩვეულებრივი სიტუაციიდან აღმოჩნდება მორალური კონფლიქტის წინაშე: გადაარჩინოს თუ არა კაცი, რომელიც მის თვალწინ ინსულტით იღუპება, არამზადა, რომელიც მისი და მისი ოჯახის უბედურების მთავარ მიზეზს წარმოადგენს? აპატიოს თუ არა, დაეხმაროს თუ არა? ავადმყოფის თავთან მჯდომარე გმირი გრძნობს, თუ როგორ თავისუფლდება დღითი დღე მისი გული სიძულვილისგან."
        onButtonClick={handleCardClick}
        characternames={["თემო", "დედა"]}
      />
    </div>
  );
}
export default App;
