import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import WidgetBot from '@widgetbot/react-embed';
import { ThemeContext } from './Theme/ThemeContext';
import './Styles/DiscordBot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

function DiscordWidget() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='card-container'>
      <Card className="discord-widget-card">
        <Card.Body className="d-flex flex-column align-items-center">
          <WidgetBot
            server="1046273014205009980"
            channel="1046273014205009983"
            height= "800px"
            width= "1000px"
          />
          <Button href="https://discord.gg/qNEsTfkA" target="_blank" rel="noopener noreferrer" className="mt-3 card-button server-join">
            <FontAwesomeIcon icon={faDiscord} /> Join my server to test
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DiscordWidget;
