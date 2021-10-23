import { Avatar } from "@material-ui/core";

function AvatarIcon(props) {
  return (
    <Avatar
      src={`https://avatars.dicebear.com/api/bottts/${props.name}.svg?backgroundColors[]=blue&backgroundColors[]=cyan&backgroundColors[]=yellow&backgroundColors[]=red&backgroundColors[]=purple&backgroundColors[]=pink&backgroundColors[]=orange&backgroundColors[]=lime&backgroundColors[]=indigo&backgroundColors[]=grey&backgroundColors[]=green`}
    />
  );
}

export default AvatarIcon;
