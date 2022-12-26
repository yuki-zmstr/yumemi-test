import React from 'react';
import { render, waitFor } from '@testing-library/react';

import ChoosePrefectures from './ChoosePrefectures';

describe('ChoosePrefectures', () => {
  it('renders ChoosePrefectures component', async () => {
    await waitFor(() => render(<ChoosePrefectures />));
  });
});

// api の呼び出しのテストコードを書くところで詰まっています。
// https://vhudyma-blog.eu/3-ways-to-mock-axios-in-jest/#Way-1-jest.mock()
// これに従ってテストコードを書くと、instance is not a function エラーが出ます ><
// api.js 内の instance 関数を export すればいいかなと思ったのですが、import しても結果変わらず。。。
// ぜひ相談させてください！かなり重要なテストだと思うので。僕自身勉強したいです。

// これができれば、getPrefectures と getPopulationData の呼び出しのテストができます。
