/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IComponentProps {
  title: string;
}

class Component<T> {
  constructor(public props: T) {
    this.props = props;
  }
}

class Page extends Component<IComponentProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
