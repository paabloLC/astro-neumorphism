export type ArticleType = {
  guid: number;
  link: string;
  thumbnail: string;
  title: string;
  categories: string[];
}

type Props = {
  article: ArticleType;
}

const Article = ({article}: Props) => {
  const {guid, link, thumbnail, title, categories} = article;
  return (
    <div
      class="flex relative shadow-box-up dark:shadow-buttons-box-dark rounded-lg p-3 mb-3"
      key={guid}
    >
      <a class="absolute w-full h-full left-0" target="_black" href={link}></a>
      <img
        class="hidden lg:flex lg:w-15 lg:h-15 2xl:w-25 2xl:h-25 object-cover rounded-full mr-4"
        src={thumbnail}
        alt="img"
      />
      <div class="flex flex-col">
        <h1 class="text-xxs 2xl:text-xs items-baseline font-bold capitalize text-light-blue-dark dark:text-dark-blue-light">
          {title}
        </h1>

        <ul class="flex my-auto">
          {categories
            .map((category) => (
              <li class="text-4xs lg:text-3xs font-thin text-light-blue-dark dark:text-dark-blue-light py-1 px-2 mr-1 my-1 rounded-lg last-of-type:mr-0 shadow-box-up dark:shadow-buttons-box-dark bg-gradient-box-light h-min w-fit dark:bg-gradient-box-dark border border-light-blue-dark dark:border-light-blue-light">
                {category}
              </li>
            ))
            .slice(0, 3)}
        </ul>

        <p class="text-xxs font-thin text-light-blue-dark dark:text-dark-blue-light mt-auto">
          {/* The moment library is not working on production at the moment. */}
          {/* Published: {moment(article.pubDate).format("DD-MM-YYYY")} */}
        </p>
      </div>
    </div>
  );
};

export default Article;
