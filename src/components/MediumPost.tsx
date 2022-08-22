import { useState, useEffect } from "preact/hooks";
import * as moment from "moment";

const Blog = () => {
  const [mediumData, setMediumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hohanga"
    )
      .then((res) => res.json())
      .then((response) => {
        setMediumData(response.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const finalData = mediumData.slice(0, 6);

  return (
    <div class="medium-articles h-full">
      {isLoading && (
        <p class="text-light-blue-dark dark:text-dark-blue-light text-thin">
          Loading posts from Medium!
        </p>
      )}
      {finalData.map((article) => (
        <div
          class="flex relative shadow-box-up dark:shadow-buttons-box-dark rounded-lg p-3 mb-3"
          key={article.guid}
        >
          <a
            class="absolute w-full h-full left-0"
            target="_black"
            href={article.link}
          ></a>
          <img
            class="w-25 h-25 object-cover rounded-full mr-4"
            src={article.thumbnail}
            alt="img"
          />
          <div class="flex flex-col">
            <h1 class="text-xs items-baseline font-bold capitalize text-light-blue-dark dark:text-dark-blue-light">
              {article.title}
            </h1>

            <ul class="flex my-auto">
              {article.categories.map((category) => (
                <li class="text-3xs font-thin text-light-blue-dark dark:text-dark-blue-light py-1 px-2 mr-1 my-1 rounded-lg last-of-type:mr-0 shadow-box-up dark:shadow-buttons-box-dark bg-gradient-box-light h-min w-fit dark:bg-gradient-box-dark border border-light-blue-dark dark:border-light-blue-light">
                  {category}
                </li>
              )).slice(0, 3)}
            </ul>

            <p class="text-xxs font-thin text-light-blue-dark dark:text-dark-blue-light mt-auto">
              Published: {moment(article.pubDate).format("DD-MM-YYYY")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
