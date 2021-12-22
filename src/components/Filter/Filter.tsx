import { ExtractPropTypes, SetupContext } from 'vue-demi';
import './index.less';

const FixedFilterProps = {
  /**
   * description:此slot是否单独一行（false：和item一行）
   */
  isSingleLine: {
    type: Boolean,
    default: false,
  },
};
export type FilterProps = ExtractPropTypes<typeof FixedFilterProps>;
export function Filter(props: FilterProps, { slots }: SetupContext) {
  const contentSlot = slots.filterContent ?? slots.default;
  const buttonStyle = props.isSingleLine
    ? 'page-filter__button'
    : 'page-filter__mt4';
  return (
    <div class="page-filter">
      {contentSlot && <div class="layout-filterContent">{contentSlot()}</div>}
      {slots.filterButton && (
        <div class={`layout-filterButton right ${buttonStyle}`}>
          {slots.filterButton?.()}
        </div>
      )}
    </div>
  );
}
Filter.props = FixedFilterProps;
Filter.inheritAttrs = false;
