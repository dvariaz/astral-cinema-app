import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { shallowMount, type VueWrapper } from '@vue/test-utils';

import BillboardHero from '@/modules/billboard/components/BillboardHero/index.vue';

const props = {
  movies: [],
};

describe('Billboard Components', () => {
  describe('BillboardHero', () => {
    let wrapper: VueWrapper<any>;

    beforeEach(() => {
      wrapper = shallowMount(BillboardHero, { props });
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    describe('mount', () => {
      it('should render correctly', () => {
        expect(wrapper.vm).toBeDefined();
      });
    });
  });
});
