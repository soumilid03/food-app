import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
export default function QuoteSection() {
  return (
    <div className="section quote">
      <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/>
        Cooking is an art, but all art requires knowing something about the
        techniques and materials. You need to know when the carrots are to be
        added to the pot, at what point the onions are sautéed, and when the
        garlic is just right to add. Cooking is about creativity, but it's also
        about discipline and technique.
      </p>
      <p className="quote-author">-Nathan Myhrvold</p>
    </div>
  );
}
