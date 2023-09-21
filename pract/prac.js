import React from "react";

const prac = () => {
  return (
    <div>
      <ul>
        {data.map((card) => {
          return (
            <div className="product-container">
              <div className="product-header">
                <div className="div1">
                  <img src={a} />
                </div>
                <div className="div2">
                  <div>{card.dmo_percentage?.Ausgrid}</div>
                  <div>HOMEDEAL ELECTRICITY RATE ONLY </div>
                  <div>lorem sfdegrfgh dfd dfsgdhdghghgjjjjjjjjjjtfhh</div>
                </div>
                <div className="div3">
                  <div>Estimated cost </div>
                  <div>$1232 ^yr</div>
                  <div>$105/mo</div>
                </div>
              </div>
              <div>{card.a}</div>
              <div>
                <div>10 Business day cooling</div>
                <div>
                  <div>{card.info}</div>

                  <button>Connext Online Today</button>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default prac;

import * as React from "react";
import { SingleProduct } from "./SingleProduct";
import "../styles.css";

export function Card({ products }: any) {
  const [productData, setProductData] = useState();
  const handlesubmit = () => {};
  return (
    <div className="container">
      <div className="header">
        <section className="selected-category">
          <button>Electricity</button>
        </section>
        <section className="flex">
          <p>2000, NWS</p>
          <button>Filter</button>
        </section>
      </div>
      <p className="description">
        Initial recommendation are based on average medium usage as determined
        by relevant by energy regulators,please view the information hover next
        to the estimated cost box for more information. for more accurate
        comparision relevant to your circumstance , please use the Bill detail
        tab om result page to enter your most recent bill details.
      </p>
      {products.map((card) => {
        return (
          <div key={card.id} data-testid="product-card" className="card">
            <span className="energy-type">{card.energy_type}</span>
            <div className="card-body">
              <section>
                <img
                  data-testid={card.provider.logo}
                  src={card.provider_image}
                  className="company-logo"
                />
                <div className="color">View Detail</div>
                <div className="color">Basic Plan Information Document</div>
              </section>

              <div className="basic-data">
                <div className="feature-item">
                  {card.dmo_percentage?.Ausgrid}
                </div>
                <div>{card.plan_name_below_data}</div>
                <div className="flex ">
                  <div className="feature-item">12 Months </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: card.contract_length }}
                  />
                </div>
                <div className="flex">
                  <div
                    dangerouslySetInnerHTML={{ __html: card.view_exit_fee }}
                  />
                  <div
                    dangerouslySetInnerHTML={{ __html: card.view_exit_fee }}
                  />
                </div>
                <div className="traffic">standard feed-in tariff.</div>
              </div>

              <div className="estimate-container">
                <div className="est-color">Estimated cost</div>
                <div>$800^/yr</div>
                <div>$800^/mo</div>
              </div>
            </div>

            <div
              data-testid="bottom-content"
              dangerouslySetInnerHTML={{ __html: card.dmo_content?.Ausgrid }}
            />
            <div className="card-footer">
              <section className="plan-info">
                <div className="benefits">
                  <p>10 business day cooling-off period</p>
                  <p>Secure signup in 5 mins</p>
                  <p>Save time and effort</p>
                </div>
                <p className="description">
                  The estimated cost includes any applicable welcome credits,
                  bonuses, and conditional discount (if applicable ) which apply
                  within the first 12 months of plan.
                </p>
              </section>
              <button className="connect-online" onClick={handlesubmit}>
                Connect Online Today
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
