import Select from 'react-select';
import { Option } from '@/store/vee/types/other';
import { cn } from '@/lib/utils';

interface SingleOptionSelectProps {
    handleChange: (selected: Option | null) => void;
    value: Option | null;
    loading: boolean;
    placeholder: string;
    data: Option[] | undefined;
    name?: string;
    required?: boolean;
    customCss?: string;
}

const SingleOptionSelect =({
    value, loading, placeholder, 
    data, name, required, customCss, handleChange
}: SingleOptionSelectProps) => {
    return (
        <Select
            className={cn("flex-1 min-w-[170px] vee-border", customCss)}
            placeholder={`Search ${placeholder}`}
            noOptionsMessage={({ inputValue }) => (
                <p className="text-left text-sm">
                    No ${placeholder} found with {inputValue}
                </p>
            )}
            isLoading={loading}
            isClearable={true}
            isSearchable={true}
            value={value}
            onChange={handleChange}
            options={data}
            name={name}
            required={required}
        />
    )
}

export default SingleOptionSelect