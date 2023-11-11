export function BlogPost(props: any) {
  return (
    <li>
      <a href={props.link}>{props.title}</a>
    </li>
  );
}
