import { useState, useEffect } from "preact/hooks";
// import * as moment from "moment";

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
        <div class="text-center mt-8">
          <div role="status">
            <svg
              class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
            <p class="text-light-blue-dark dark:text-dark-blue-light text-thin mt-5">
              Loading posts from Medium!
            </p>
          </div>
        </div>
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
            class="hidden lg:flex lg:w-15 lg:h-15 2xl:w-25 2xl:h-25 object-cover rounded-full mr-4"
            src={article.thumbnail}
            alt="img"
          />
          <div class="flex flex-col">
            <h1 class="text-xxs 2xl:text-xs items-baseline font-bold capitalize text-light-blue-dark dark:text-dark-blue-light">
              {article.title}
            </h1>

            <ul class="flex my-auto">
              {article.categories
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
      ))}
    </div>
  );
};

export default Blog;
