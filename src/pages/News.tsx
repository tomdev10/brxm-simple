/*
 * Copyright 2019-2020 Hippo B.V. (http://www.onehippo.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { CatFactSmartComponent } from 'src/components/CatFactSmartComponent';
import { BrComponent } from '@bloomreach/react-sdk';
import { Link } from 'react-router-dom';
import SpecialBrPage from '../components/SpecialBrPage';
export default function News() {
  return (
    <>
      <Link to="/">Home</Link>
      <SpecialBrPage >
        <section className="container flex-fill pt-3">
          <CatFactSmartComponent />
          <BrComponent path="main" />
        </section>
      </SpecialBrPage>
    </>
    
    
  );
}
