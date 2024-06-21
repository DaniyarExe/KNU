import style from './Ticket.module.css';
import Ticker from 'react-ticker';

const Ticket = () => {
  const headlines = [
    "Headline 1: Breaking News!",
    "Headline 2: Market Updates",
    "Headline 3: Sports Highlights",
    "Headline 4: Weather Forecast",
    "Headline 5: New Technology Trends",
    "Headline 6: Health and Wellness Tips",
    "Headline 7: Entertainment Buzz",
    "Headline 8: Global Events",
    "Headline 1: Breaking News!",
    "Headline 2: Market Updates",
    "Headline 3: Sports Highlights",
    "Headline 4: Weather Forecast",
    "Headline 5: New Technology Trends",
    "Headline 6: Health and Wellness Tips",
    "Headline 7: Entertainment Buzz",
    "Headline 8: Global Events",
    "Headline 1: Breaking News!",
    "Headline 2: Market Updates",
    "Headline 3: Sports Highlights",
    "Headline 4: Weather Forecast",
    "Headline 5: New Technology Trends",
    "Headline 6: Health and Wellness Tips",
    "Headline 7: Entertainment Buzz",
    "Headline 8: Global Events",
    "Headline 1: Breaking News!",
    "Headline 2: Market Updates",
    "Headline 3: Sports Highlights",
    "Headline 4: Weather Forecast",
    "Headline 5: New Technology Trends",
    "Headline 6: Health and Wellness Tips",
    "Headline 7: Entertainment Buzz",
    "Headline 8: Global Events"
  ];

  return (
    <div className={style.tickerContainer}>

      <div className={style.ticketTitle}>Объявление</div>

      <Ticker speed={10} mode="smooth">
        {({ index }) => (
          <div className={style.tickerItem}>
            {headlines.map((headline, i) => (
              <h1 key={`${index}-${i}`}>{headline}</h1>
            ))}
          </div>
        )}
      </Ticker>
    </div>
  );
};

export default Ticket;
