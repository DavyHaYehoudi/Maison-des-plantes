import { createContext, useState } from "react";

export const ArticleContext = createContext();

export const AddArticleProvider = ({children}) => {
    const[article, setArticle] = useState([]);
    
    const addArticle = (newArticle) => {
        setArticle([...article,newArticle]);
    }

    const handleClear = () => {
        setArticle([])
    }

    return(
        <ArticleContext.Provider value={{article, addArticle,handleClear}}>
            {children}
        </ArticleContext.Provider>
    )

}



