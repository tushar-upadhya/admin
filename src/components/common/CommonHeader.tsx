interface ICommonHeaderProps {
  title: string;
  subtitle?: string;
}

const CommonHeader: React.FC<ICommonHeaderProps> = ({ title }) => {
  return (
    <header>
      <h5>{title}</h5>
    </header>
  );
};

export default CommonHeader;
