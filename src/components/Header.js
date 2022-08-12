import { moneyFormat } from "./helpers";

function Header({ money, total }) {
  return (
    <>
     { total > 0 && (money - total !== 0) && (
        <div className="header">Harcayacak <span>$ {moneyFormat(money - total)}</span>  paranız kaldı</div>
      )}
      {total === 0 && (
        <div className="header">Harcayacak <span>$ {moneyFormat(money)}</span> paranız var</div>
      )}
      {money - total === 0 && (
        <div className="header">Harcayacak paran kalmadı</div>
      )}
      <style jsx>{`
        .header {
            position: sticky;
            top: 0;
            background: linear-gradient(to bottom, #20b820, #2fff4b);
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 24px;
            letter-spacing: 1px;
        }
        .header span{
            margin: 0 10px;
            font-weight: bold;
        }
      `}</style>
    </>
  );
}

export default Header;
