'use client';

import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
} from 'react';
import { FiChevronDown, FiChevronUp, FiCheck } from 'react-icons/fi';
import { cva, VariantProps } from 'class-variance-authority';
import * as SelectPrimitive from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

// Todos:
// 1. Add support for variants (classic, soft, ghost)
// 2. Add support for Tailwind colours
// 3. Add support for radius prop

const selectTriggerVariants = cva(
  'ui-px-3 ui-inline-flex ui-items-center ui-justify-center ui-rounded ui-gap-1.5 ui-leading-none ui-outline-none data-[placeholder]:ui-text-slate-600 focus:ui-outline-slate-700',
  {
    variants: {
      intent: {
        fill: 'ui-bg-opacity-100',
        soft: 'ui-bg-opacity-20',
        ghost: 'ui-bg-opacity-0',
      },
      radius: {
        none: 'ui-rounded-none',
        small: 'ui-rounded-sm',
        medium: 'ui-rounded-md',
        large: 'ui-rounded-lg',
        xl: 'ui-rounded-2xl',
        full: 'ui-rounded-full',
      },
      size: {
        small: 'ui-h-4 ui-text-sm',
        medium: 'ui-h-7 ui-text-base',
        large: 'ui-h-10 ui-text-lg',
      },
    },
    defaultVariants: {
      intent: 'fill',
      radius: 'small',
      size: 'medium',
    },
  }
);

export interface SelectTriggerVariants
  extends VariantProps<typeof selectTriggerVariants> {}

interface SelectProps {
  ariaLabel?: string;
  children: ReactNode;
  intent?: 'fill' | 'soft' | 'ghost';
  placeholder?: string;
  radius?: 'none' | 'small' | 'medium' | 'large' | 'xl' | 'full';
  size?: 'small' | 'medium' | 'large';
}

export const Select = ({
  ariaLabel = 'Select menu',
  children,
  intent,
  placeholder = 'Select...',
  radius,
  size,
}: SelectProps) => {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger
        aria-label={ariaLabel}
        className={twMerge(selectTriggerVariants({ intent, radius, size }))}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <FiChevronDown />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      {children}
    </SelectPrimitive.Root>
  );
};

interface SelectContentProps {
  children: ReactNode;
}

const SelectContent = ({ children }: SelectContentProps) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content className='ui-overflow-hidden ui-bg-white ui-rounded-md ui-shadow-md'>
        <SelectPrimitive.ScrollUpButton className='ui-flex ui-h-[25px] ui-cursor-default ui-items-center ui-justify-center ui-bg-white'>
          <FiChevronUp />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className='ui-p-1.5'>
          {children}
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className='ui-flex ui-items-center ui-justify-center ui-bg-white ui-h-6 ui-cursor-default'>
          <FiChevronDown />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};

interface SelectGroupProps {
  label: string;
  items: {
    label: string;
    value: string;
    disabled: boolean;
  }[];
}

const SelectGroup = ({ label, items }: SelectGroupProps) => {
  return (
    <SelectPrimitive.Group>
      <SelectPrimitive.Label className='ui-px-[25px] ui-text-xs ui-leading-[25px] ui-text-slate-600'>
        {label}
      </SelectPrimitive.Label>
      {items.map((item) => {
        const { label, value, disabled } = item;

        return (
          <SelectItem value={value} disabled={disabled}>
            {label}
          </SelectItem>
        );
      })}
    </SelectPrimitive.Group>
  );
};

type SelectItemElement = ElementRef<typeof SelectPrimitive.Item>;
interface SelectItemProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {}

const SelectItem = forwardRef<SelectItemElement, SelectItemProps>(
  (props, forwardedRef) => {
    const { className, children, ...itemProps } = props;

    return (
      <SelectPrimitive.Item
        className={clsx(
          'ui-leading-none ui-rounded-sm ui-flex ui-items-center ui-h-6 ui-pr-9 ui-pl-6 ui-relative ui-text-sm ui-select-none data-[disabled]:ui-pointer-events-none data-[disabled]:ui-text-slate-400 data-[highlighted]:ui-outline-none data-[highlighted]:ui-bg-slate-900 data-[highlighted]:ui-text-slate-100',
          className
        )}
        ref={forwardedRef}
        {...itemProps}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator className='ui-absolute ui-left-0 ui-inline-flex ui-justify-center ui-items-center ui-w-6'>
          <FiCheck />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    );
  }
);

const SelectSeparator = () => {
  return (
    <SelectPrimitive.Separator className='ui-h-[1px] ui-m-1 ui-bg-slate-200' />
  );
};

Select.displayName = 'Select';
SelectItem.displayName = 'SelectItem';
Select.Content = SelectContent;
Select.Group = SelectGroup;
Select.Separator = SelectSeparator;
