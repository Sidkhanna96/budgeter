import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Link,
} from '@material-ui/core';

import './CardTool.scss';

const CardTool = ({ link, imageLink, heading }) => {
  return (
    <div className="CardTool">
      <Link
        href={link}
        target="_blank"
        rel="noopener"
        style={{ textDecoration: 'none' }}
      >
        <Card className="CardToolComponent">
          <CardActionArea>
            <CardMedia
              title={heading}
              image={imageLink}
              className="CardMedia"
            />
            <CardContent class="CardContent">
              <Typography variant="h6">{heading}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

export default CardTool;
