function Footer() {
  return (
    <>
      <div className="bg-black text-white h-28 flex justify-center items-center text-left">
        <div id="left-side" className="flex flex-col mx-4">
          <h2 className="font-bold">Rivershore Aquariums</h2>
          <div>6015 Lyndale Ave. S.</div>
          <div>Minneapolis, MN 55419</div>
        </div>
        <div id="right-side" className="flex flex-col mx-4">
          <h2 className="font-bold">Store Hours</h2>
          <div>11am-7pm Daily</div>
          <div>Closed Tuesday</div>
        </div>
      </div>
    </>
  )
}

export default Footer;