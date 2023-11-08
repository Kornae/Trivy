import * as React from 'react';
import PropTypes from 'prop-types';
import { useAutocomplete } from '@mui/base/useAutocomplete';
import { Button } from '@mui/base/Button';
import { Popper } from '@mui/base/Popper';
import { styled } from '@mui/system';
import { unstable_useForkRef as useForkRef } from '@mui/utils';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import entertainment from './Entertainment';

const Autocomplete = React.forwardRef(function Autocomplete(props, ref) {
    const {
        disabled = false,
        readOnly = false,
        ...other
    } = props;

    const {
        getRootProps,
        getInputProps,
        getPopupIndicatorProps,
        getListboxProps,
        getOptionProps,
        id,
        popupOpen,
        focused,
        anchorEl,
        setAnchorEl,
        groupedOptions,
    } = useAutocomplete({
        ...props,
        componentName: 'BaseAutocompleteIntroduction',
    });

    const rootRef = useForkRef(ref, setAnchorEl);

    return (
        <React.Fragment>
            <StyledAutocompleteRoot
                {...getRootProps(other)}
                ref={rootRef}
                className={focused ? 'focused' : undefined}
            >
                <StyledInput
                    id={id}
                    disabled={disabled}
                    readOnly={readOnly}
                    {...getInputProps()}
                    placeholder='Search…'
                />

                <StyledPopupIndicator
                    {...getPopupIndicatorProps()}
                    className={popupOpen ? 'popupOpen' : undefined}
                >
                    <ArrowDropDownIcon />
                </StyledPopupIndicator>
            </StyledAutocompleteRoot>
            {anchorEl ? (
                <Popper
                    open={popupOpen}
                    anchorEl={anchorEl}
                    slots={{
                        root: StyledPopper,
                    }}
                    modifiers={[
                        { name: 'flip', enabled: false },
                        { name: 'preventOverflow', enabled: false },
                    ]}
                >

                    <StyledListbox {...getListboxProps()}>
                        {
                            groupedOptions.map((option, index) => {
                                const optionProps = getOptionProps({ option, index });
                                return <a id='link' href={`/explore?${option.label}`} key={option.label}><StyledOption {...optionProps}><div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', padding: '2px' }}><span style={{ marginRight: '6px' }}>{option.logo}</span> {option.label}</div></StyledOption></a>;


                            })}

                        {groupedOptions.length === 0 && (
                            <StyledNoOptions>No results</StyledNoOptions>
                        )}
                    </StyledListbox>
                </Popper>
            ) : null}
        </React.Fragment>
    );
});

Autocomplete.propTypes = {
    /**
     * If `true`, the input can't be cleared.
     * @default false
     */
    disableClearable: PropTypes.oneOf([false]),
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled: PropTypes.bool,
    /**
     * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
     * @default false
     */
    readOnly: PropTypes.bool,
};

export default function AutocompleteIntroduction() {
    return <Autocomplete options={quizzes} />;
}

const cyan = {
    50: '#E9F8FC',
    100: '#BDEBF4',
    200: '#99D8E5',
    300: '#66BACC',
    400: '#1F94AD',
    500: '#0D5463',
    600: '#094855',
    700: '#063C47',
    800: '#043039',
    900: '#022127',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const StyledAutocompleteRoot = styled('div')(
    ({ theme }) => `
    font-family: 'Inter', sans-serif;
  font-weight: 400;
  border-radius: 18px;
  color: ${theme.palette.mode === 'dark' ? cyan[300] : cyan[500]};
  background: ${theme.palette.mode === 'dark' ? cyan[900] : '#fff'};
  border: 0.5px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
        };
  display: flex;
  gap: 5px;
  padding-right: 5px;
  overflow: hidden;
@media (min-width: 1023px) {
  min-width: 450px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  min-width: 400px;
  }

  @media (min-width: 368px) and (max-width: 767px){
  min-width: 300px;
  }

  @media (max-width: 367px) {
  min-width: 220px;
  }

  &.focused {
    border-color: ${grey[400]};
     box-shadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;'
  }

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledInput = styled('input')(
    ({ theme }) => `
  font-size: 0.875rem;
  text-indent: 5px;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 8px 12px;
  outline: 0;
  flex: 1 0 auto;
  
  
`,
);

// ComponentPageTabs has z-index: 1000
const StyledPopper = styled('div')`
  position: relative;
  z-index: 1001;
@media (min-width: 1023px) {
  min-width: 450px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  min-width: 400px;
  }

  @media (min-width: 368px) and (max-width: 767px){
  min-width: 300px;
  }

  @media (max-width: 367px) {
  min-width: 220px;
  }
`;

const StyledListbox = styled('ul')(
    ({ theme }) => `
    font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
@media (min-width: 1023px) {
  min-width: 450px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  min-width: 400px;
  }

  @media (min-width: 368px) and (max-width: 767px){
  min-width: 300px;
  }

  @media (max-width: 367px) {
  min-width: 220px;
  }
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  max-height: 300px;
  z-index: 1;
  background: ${theme.palette.mode === 'dark' ? cyan[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? cyan[300] : cyan[900]};
  box-shadow: 0px 4px 6px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.3)' : 'rgba(0,0,0, 0.05)'
        };
  `,
);

const StyledOption = styled('li')(
    ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    cursor: pointer;
  }

  &[aria-selected=true] {
    background-color: ${theme.palette.mode === 'dark' ? cyan[900] : cyan[100]};
    color: ${theme.palette.mode === 'dark' ? cyan[100] : cyan[900]};
  }

  &.Mui-focused,
  &.Mui-focusVisible {
    background-color: ${theme.palette.mode === 'dark' ? cyan[800] : cyan[100]};
    color: ${theme.palette.mode === 'dark' ? cyan[300] : cyan[900]};
  }

  &.Mui-focusVisible {
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? cyan[500] : cyan[200]};
  }

  &[aria-selected=true].Mui-focused,
  &[aria-selected=true].Mui-focusVisible {
    background-color: ${theme.palette.mode === 'dark' ? cyan[900] : cyan[100]};
    color: ${theme.palette.mode === 'dark' ? cyan[100] : cyan[900]};
  }
  `,
);

const StyledPopupIndicator = styled(Button)(
    ({ theme }) => `
    outline: 0;
    box-shadow: none;
    border: 0;
    border-radius: 20px;
    background-color: transparent;
    align-self: center;
    padding: 0 2px;
    display: flex;
    justify-content: center;
    align-items:center;

    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? cyan[700] : cyan[100]};
      cursor: pointer;
    }

    & > svg {
      transform: translateY(2px);
    }

    &.popupOpen > svg {
      transform: translateY(2px) rotate(180deg);
    }
  `,
);

const StyledNoOptions = styled('li')`
  list-style: none;
  padding: 8px;
  cursor: default;
`;

const quizzes = entertainment.map(item => ({
    label: item.title,
    logo: item.logo
}));