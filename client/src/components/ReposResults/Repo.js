import { Card, Image } from 'semantic-ui-react';

export default function Repo({
  imageUrl,
  title,
  subtitle,
  description,
}) {
  return (
    <Card>
      <Image src={imageUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span>{subtitle}</span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
