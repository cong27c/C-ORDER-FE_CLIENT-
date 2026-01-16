import { TStoryItem } from "../sections/StudentStoryItem";
import {
  HoangKimCuongStory,
  avartar_utd,
  avartar_lvv,
  avartar_lmh,
  avartar_hkc,
  avartar_cdt,
  LeVanVuStory,
  ChuDucTuStory,
  LeMinhHieuStory,
  UngTienDatStory,
} from "../assets";

// Dữ liệu HÀNH TRÌNH - Dùng StudentStoryItem (Link đến trang blog)
export const JOURNEY_DATA: TStoryItem[] = [
  {
    thumbnail: UngTienDatStory.src,
    avartar: avartar_utd.src,
    link: "/blog/tu-tay-lai-xe-om-den-ban-phim-lap-trinh",
    studentName: "Ứng Tiến Đạt",
    storyName: "Một Tay Lái Xe Ôm, Một Ước Mơ Lập Trình",
    quote:
      "Cuộc đời không thay đổi nếu bạn không dám bước ra khỏi vùng an toàn.",
  },
  {
    thumbnail: LeVanVuStory.src,
    link: "/blog/tuong-da-biet-code-hoa-ra-chua-biet-gi",
    avartar: avartar_lvv.src,
    studentName: "Lê Văn Vũ",
    storyName: "Tưởng Đã Biết Code, Hóa Ra Chưa Biết Gì",
    quote: "Tôi từng là ếch ngồi đáy giếng — tự tin hơn cả hiểu biết.",
  },

  {
    thumbnail: LeMinhHieuStory.src,
    link: "/blog/hon-40km-xe-buyt-moi-ngay-nhung-do-k-phai-chuyen-xe-ma-la-chuyen-di-thay-doi-cua-toi",
    avartar: avartar_lmh.src,
    studentName: "Lê Minh Hiếu",
    storyName:
      "Hơn 40km xe buýt mỗi ngày - Nhưng đó k phải chuyến xe mà là chuyến đi thay đổi của tôi",
    quote: "Không chỉ là chuyến xe mà là hành trình thay đổi tương lai",
  },
  {
    thumbnail: HoangKimCuongStory.src,
    avartar: avartar_hkc.src,
    link: "/blog/viet-lai-giac-mo-lap-trinh-sau-tai-nan",
    studentName: "Hoàng Kim Cương",
    storyName: "Viết lại giấc mơ lập trình sau tai nạn.",
    quote:
      "Tôi không viết code để quên đi tai nạn, mà để viết tiếp cuộc đời mình.",
  },
  {
    thumbnail: ChuDucTuStory.src,
    avartar: avartar_cdt.src,
    link: "/blog/tu-noi-cam-lon-den-du-an-dau-tay",
    studentName: "Chu Đức Tú",
    storyName: "Từ “Nồi Cám Lợn” Đến Dự Án Đầu Tay.",
    quote:
      "Không phải học thêm framework, mà là học lại nền tảng — đó là bước ngoặt thay đổi tôi.",
  },
];
