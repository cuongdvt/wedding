import { range } from 'lodash';

import { fontDoulaise } from '@/app/fonts';

const CalendarSectionView: React.FC = () => {
  return (
    <div className="calendar flex flex-col sm:w-1/4 w-full justify-center items-center px-4 py-12 space-y-8">
      {/* Month */}
      <span className={`${fontDoulaise.className} text-5xl`}>Tháng 10</span>

      {/* Days */}
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            <th className="text-xl italic">T2</th>
            <th className="text-xl italic">T3</th>
            <th className="text-xl italic">T4</th>
            <th className="text-xl italic">T5</th>
            <th className="text-xl italic">T6</th>
            <th className="text-xl italic">T7</th>
            <th className="text-xl italic">CN</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="date">&nbsp;</span>
            </td>
            <td>
              <span className="date">&nbsp;</span>
            </td>
            {range(1, 6).map((day) => (
              <td key={day} className="py-3 text-center">
                {day}
              </td>
            ))}
          </tr>
          <tr>
            {range(6, 13).map((day) => (
              <td key={day} className="py-3 text-center">
                {day}
              </td>
            ))}
          </tr>
          <tr>
            {range(13, 20).map((day) => (
              <td key={day} className="py-3 text-center">
                {day}
              </td>
            ))}
          </tr>
          <tr>
            {range(20, 27).map((day) => (
              <td key={day} className="py-3 text-center">
                {day}
              </td>
            ))}
          </tr>
          <tr>
            {range(27, 32).map((day) => (
              <td
                key={day}
                className={`py-3 text-center relative ${day === 28 && 'font-bold animate-[pulse_1s_infinite]'}`}
                style={{
                  backgroundImage: day === 28 ? "url('/wedding/images/miscellaneous.png')" : '',
                  backgroundRepeat: 'no-repeat' /* Prevents the image from repeating */,
                  backgroundPosition: 'center' /* Centers the image */,
                  backgroundSize: 'cover' /* Scales the image to cover the entire element */,
                }}
              >
                {day}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalendarSectionView;
