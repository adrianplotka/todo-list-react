
import { Wrapper } from "./styled";
import searchQueryParamName from "./../searchQueryParamName";
import {useQueryParameter, useReplaceQueryParameter} from "./../queryParameters"
import Input from "../Input";

const Search = () => {    
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();
    
    const onInputChange = ({ target }) => {
        replaceQueryParameter({
             key: searchQueryParamName,
             value: target.value.trim() !== "" ? target.value : undefined,
         });
    }

    return (
            <Wrapper>
                <Input
                    type="text"
                    value={query || ""}
                    placeholder="Szukaj zadania"
                    onChange={onInputChange}
                />
            </Wrapper>
    );
};

export default Search;